import Link from "next/link";
import fs from "fs";
import path from "path";

const decks = [
  { slug: "checkle", name: "Checkle", client: "Cole Rickles" },
  { slug: "colorado-business-cpa", name: "Colorado Business CPA", client: "CBCPA" },
  { slug: "eventcombo", name: "EventCombo", client: "Saroosh Gull" },
  { slug: "finalbit", name: "Finalbit", client: "Finalbit" },
  { slug: "ria-catalyst", name: "Ria Catalyst", client: "Julien Baneux" },
  { slug: "silent-disco", name: "Silent Disco V2", client: "Cifernoise" },
  { slug: "veterans-benefit-software", name: "Veterans Benefit Software", client: "Don Anton" },
];

function getDocPages() {
  const docsDir = path.join(process.cwd(), "decks", "docs");
  if (!fs.existsSync(docsDir)) return [];

  const clients = fs
    .readdirSync(docsDir)
    .filter((f) => fs.statSync(path.join(docsDir, f)).isDirectory());

  const pages: { slug: string; name: string; client: string }[] = [];

  for (const client of clients) {
    const clientDir = path.join(docsDir, client);
    const clientName = client
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    const files = fs
      .readdirSync(clientDir)
      .filter((f) => f.endsWith(".ts") && f !== "theme.ts");

    for (const file of files) {
      const pageId = file.replace(".ts", "");
      const pageName = pageId
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

      pages.push({
        slug: `${client}/${pageId}`,
        name: pageName,
        client: clientName,
      });
    }
  }

  return pages;
}

export default function Home() {
  const docPages = getDocPages();

  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-900 to-neutral-950 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h1 className="mb-2 text-5xl font-bold text-white">Pitch Decks</h1>
          <p className="text-neutral-400">Select a deck to view</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {decks.map((deck) => (
            <Link
              key={deck.slug}
              href={`/${deck.slug}`}
              className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-all hover:border-neutral-700 hover:bg-neutral-800/50"
            >
              <h2 className="mb-1 text-lg font-semibold text-white transition-colors group-hover:text-orange-400">
                {deck.name}
              </h2>
              <p className="text-sm text-neutral-500">{deck.client}</p>
            </Link>
          ))}
        </div>

        {docPages.length > 0 && (
          <>
            <div className="mb-8 mt-16 text-center">
              <h2 className="mb-2 text-3xl font-bold text-white">Documents</h2>
              <p className="text-neutral-400">
                Sales docs, one-pagers, and collateral
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {docPages.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-all hover:border-neutral-700 hover:bg-neutral-800/50"
                >
                  <h2 className="mb-1 text-lg font-semibold text-white transition-colors group-hover:text-pink-400">
                    {doc.name}
                  </h2>
                  <p className="text-sm text-neutral-500">{doc.client}</p>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
