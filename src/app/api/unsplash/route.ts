import { type NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface UnsplashPhoto {
  id: string;
  description: string | null;
  alt_description: string | null;
  urls: { small: string; regular: string; full: string };
  user: { name: string };
  links: { html: string };
}

interface UnsplashSearchResponse {
  results: UnsplashPhoto[];
}

/**
 * Unsplash image search & download API
 *
 * Search:   GET /api/unsplash?q=beach+travel&orientation=landscape
 * Download: GET /api/unsplash?download=IMAGE_ID&path=images/travel/beach.jpg
 */
export async function GET(req: NextRequest) {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      {
        error:
          "UNSPLASH_ACCESS_KEY not set. Get a free key at https://unsplash.com/developers and add it to .env",
      },
      { status: 500 },
    );
  }

  const query = req.nextUrl.searchParams.get("q");
  const download = req.nextUrl.searchParams.get("download");
  const savePath = req.nextUrl.searchParams.get("path");
  const orientation =
    req.nextUrl.searchParams.get("orientation") ?? "landscape";

  // Download a specific image by ID
  if (download) {
    if (process.env.NODE_ENV !== "development") {
      return NextResponse.json(
        { error: "Download only available in development" },
        { status: 403 },
      );
    }

    const imageRes = await fetch(
      `https://api.unsplash.com/photos/${download}?client_id=${accessKey}`,
    );
    const imageData = (await imageRes.json()) as UnsplashPhoto;
    const imageUrl = imageData.urls.regular;

    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();

    const filename = savePath ?? `images/unsplash-${download}.jpg`;
    const dest = path.join(process.cwd(), "public", filename);

    // Ensure directory exists
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, Buffer.from(buffer));

    return NextResponse.json({
      saved: `/${filename}`,
      attribution: {
        photographer: imageData.user.name,
        url: imageData.links.html,
      },
    });
  }

  // Search for images
  if (query) {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=10&orientation=${orientation}&client_id=${accessKey}`,
    );
    const data = (await res.json()) as UnsplashSearchResponse;

    return NextResponse.json({
      results: data.results.map((r) => ({
        id: r.id,
        description: r.description ?? r.alt_description,
        urls: { small: r.urls.small, regular: r.urls.regular },
        photographer: r.user.name,
        link: r.links.html,
      })),
    });
  }

  return NextResponse.json(
    {
      usage: {
        search: "/api/unsplash?q=beach+travel&orientation=landscape",
        download:
          "/api/unsplash?download=IMAGE_ID&path=images/travel/beach.jpg",
      },
    },
    { status: 400 },
  );
}
