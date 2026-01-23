import puppeteer from "puppeteer";
import { PDFDocument } from "pdf-lib";
import fs from "fs/promises";
import path from "path";

const VIEWPORT = { width: 1600, height: 900 };
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function exportDeckToPDF(deckId: string) {
  console.log(`\nExporting deck: ${deckId}`);
  console.log(`Using base URL: ${BASE_URL}\n`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  // First, load the deck to find out how many slides there are
  const deckUrl = `${BASE_URL}/${deckId}`;
  await page.goto(deckUrl, { waitUntil: "networkidle0" });

  // Get total slide count by counting navigation dot buttons
  const slideCount = await page.evaluate(() => {
    const dots = document.querySelectorAll('button[aria-label^="Go to slide"]');
    return dots.length || 1;
  });

  console.log(`Found ${slideCount} slides\n`);

  const screenshots: Buffer[] = [];

  // Capture each slide
  for (let i = 1; i <= slideCount; i++) {
    const slideUrl = `${BASE_URL}/${deckId}?slide=${i}`;
    console.log(`  Capturing slide ${i}/${slideCount}...`);

    await page.goto(slideUrl, { waitUntil: "networkidle0" });

    // Wait for animations to complete (most animations are < 1.5s)
    await sleep(2000);

    const screenshot = await page.screenshot({
      type: "png",
      clip: {
        x: 0,
        y: 0,
        width: VIEWPORT.width,
        height: VIEWPORT.height,
      },
    });

    screenshots.push(screenshot as Buffer);
  }

  await browser.close();

  // Combine screenshots into PDF
  console.log(`\nGenerating PDF...`);

  const pdfDoc = await PDFDocument.create();

  for (const screenshot of screenshots) {
    const image = await pdfDoc.embedPng(screenshot);
    const page = pdfDoc.addPage([VIEWPORT.width, VIEWPORT.height]);
    page.drawImage(image, {
      x: 0,
      y: 0,
      width: VIEWPORT.width,
      height: VIEWPORT.height,
    });
  }

  // Save PDF
  const outputDir = path.join(process.cwd(), "exports");
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
