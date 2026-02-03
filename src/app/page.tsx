import Link from "next/link";

const decks = [
  { slug: "eventcombo", name: "EventCombo", client: "Saroosh Gull" },
  { slug: "veterans-benefit-software", name: "Veterans Benefit Software", client: "Don Anton" },
  { slug: "colorado-business-cpa", name: "Colorado Business CPA", client: "CBCPA" },
  { slug: "silent-disco-v2", name: "Silent Disco V2", client: "Cifernoise" },
  { slug: "silent-disco-pricing", name: "Silent Disco Pricing", client: "Cifernoise" },
  { slug: "ria-catalyst", name: "Ria Catalyst", client: "Julien Baneux" },
  { slug: "finalbit-v2", name: "Finalbit V2", client: "Finalbit" },
  { slug: "finalbit", name: "Finalbit", client: "Finalbit" },
  { slug: "saas-sales-new", name: "SaaS Sales (New)", client: "Template" },
  { slug: "saas-sales", name: "SaaS Sales", client: "Template" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-950 px-6 py-12">
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
              <h2 className="mb-1 text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                {deck.name}
              </h2>
              <p className="text-sm text-neutral-500">{deck.client}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
