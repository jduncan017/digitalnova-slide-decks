import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ deckId: string }> }
) {
  const { deckId } = await params;

  // Get the host from the request to build the full URL
  const host = request.headers.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const url = `${protocol}://${host}/${deckId}/sow`;

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Set viewport for consistent rendering
    await page.setViewport({ width: 1200, height: 800 });

    // Navigate to the SOW page
    await page.goto(url, { waitUntil: "networkidle0" });

    // Hide the print button before generating PDF
    await page.evaluate(() => {
      const printButton = document.querySelector("button");
      if (printButton) {
        printButton.style.display = "none";
      }
    });

    // Generate PDF
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "0.5in",
        right: "0.5in",
        bottom: "0.5in",
        left: "0.5in",
      },
    });

    await browser.close();

    // Return PDF as download
    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${deckId}-sow.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
