import puppeteer from "puppeteer";
import { PDFDocument, PDFName, PDFString } from "pdf-lib";
import fs from "fs/promises";
import path from "path";

interface PdfLink {
  href: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const VIEWPORT = { width: 1920, height: 1080, deviceScaleFactor: 2 };
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
// Origin to rewrite captured PDF link hrefs onto (so PDFs link to production
// even when capturing from localhost). Override with PDF_LINK_BASE_URL.
const PDF_LINK_BASE_URL =
  process.env.PDF_LINK_BASE_URL || "https://decks.digitalnovastudio.com";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function exportDeckToPDF(deckId: string) {
  console.log(`\nExporting deck: ${deckId}`);
  console.log(`Using base URL: ${BASE_URL}\n`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: VIEWPORT.width,
    height: VIEWPORT.height,
    deviceScaleFactor: VIEWPORT.deviceScaleFactor,
  });

  // Emulate print media to trigger CSS that forces animations to complete state
  await page.emulateMediaType("print");

  // First, load the deck to find out how many slides there are
  const deckUrl = `${BASE_URL}/${deckId}`;
  await page.goto(deckUrl, { waitUntil: "networkidle0" });

  // Get total slide count by counting navigation dot buttons
  const slideCount = await page.evaluate(() => {
    const dots = document.querySelectorAll('button[aria-label^="Go to slide"]');
    return dots.length || 1;
  });

  console.log(`Found ${slideCount} slides\n`);

  const screenshots: { buffer: Buffer; links: PdfLink[] }[] = [];

  // Capture each slide
  for (let i = 1; i <= slideCount; i++) {
    const slideUrl = `${BASE_URL}/${deckId}?slide=${i}`;
    console.log(`  Capturing slide ${i}/${slideCount}...`);

    await page.goto(slideUrl, { waitUntil: "networkidle0" });

    // Wait for animations to complete (most animations are < 1.5s)
    await sleep(2000);

    // Find the 16:9 slide container and clip to its bounds
    const slideBox = await page.evaluate(() => {
      const container = document.querySelector(
        '[class*="from-slide-bg-from"]',
      ) as HTMLElement | null;
      if (!container) return null;
      const rect = container.getBoundingClientRect();
      return {
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height,
      };
    });

    // Capture link annotations for any [data-pdf-link] anchors inside the slide
    const links = await page.evaluate((box) => {
      if (!box) return [] as PdfLink[];
      const anchors = document.querySelectorAll<HTMLAnchorElement>(
        "[data-pdf-link] a[href]",
      );
      return Array.from(anchors).map((a) => {
        const r = a.getBoundingClientRect();
        return {
          href: a.href,
          x: r.x - box.x,
          y: r.y - box.y,
          width: r.width,
          height: r.height,
        };
      });
    }, slideBox);

    const screenshot = await page.screenshot({
      type: "png",
      clip: slideBox ?? {
        x: 0,
        y: 0,
        width: VIEWPORT.width,
        height: VIEWPORT.height,
      },
    });

    screenshots.push({ buffer: screenshot as Buffer, links });
  }

  await browser.close();

  // Combine screenshots into PDF
  console.log(`\nGenerating PDF...`);

  const pdfDoc = await PDFDocument.create();
  const scale = VIEWPORT.deviceScaleFactor;

  for (const { buffer, links } of screenshots) {
    const image = await pdfDoc.embedPng(buffer);
    const pageWidth = image.width;
    const pageHeight = image.height;
    const pdfPage = pdfDoc.addPage([pageWidth, pageHeight]);
    pdfPage.drawImage(image, {
      x: 0,
      y: 0,
      width: pageWidth,
      height: pageHeight,
    });

    if (links.length > 0) {
      const annotRefs = links.map((link) => {
        // CSS px → image px (deviceScaleFactor) and flip Y (PDF origin = bottom-left)
        const x1 = link.x * scale;
        const x2 = (link.x + link.width) * scale;
        const y2 = pageHeight - link.y * scale;
        const y1 = pageHeight - (link.y + link.height) * scale;

        // Rewrite captured href onto the production link origin
        let finalHref = link.href;
        try {
          const u = new URL(link.href);
          const target = new URL(PDF_LINK_BASE_URL);
          u.protocol = target.protocol;
          u.hostname = target.hostname;
          u.port = target.port;
          finalHref = u.toString();
        } catch {
          // Leave non-absolute or unparseable hrefs as-is
        }

        const annotation = pdfDoc.context.obj({
          Type: "Annot",
          Subtype: "Link",
          Rect: [x1, y1, x2, y2],
          Border: [0, 0, 0],
          A: {
            Type: "Action",
            S: "URI",
            URI: PDFString.of(finalHref),
          },
        });
        return pdfDoc.context.register(annotation);
      });
      pdfPage.node.set(PDFName.of("Annots"), pdfDoc.context.obj(annotRefs));
    }
  }

  // Save PDF
  const outputDir = path.join(process.env.HOME || "~", "Downloads");
  await fs.mkdir(outputDir, { recursive: true });

  const timestamp = new Date().toISOString().split("T")[0];
  const outputPath = path.join(outputDir, `${deckId}-${timestamp}.pdf`);

  const pdfBytes = await pdfDoc.save();
  await fs.writeFile(outputPath, pdfBytes);

  console.log(`\nPDF saved to: ${outputPath}`);
  console.log(`File size: ${(pdfBytes.length / 1024 / 1024).toFixed(2)} MB\n`);
}

// Main
const deckId = process.argv[2];

if (!deckId) {
  console.error("Usage: npx tsx scripts/export-pdf.ts <deck-id>");
  console.error("Example: npx tsx scripts/export-pdf.ts saas-sales");
  process.exit(1);
}

exportDeckToPDF(deckId).catch((err) => {
  console.error("Export failed:", err);
  process.exit(1);
});
