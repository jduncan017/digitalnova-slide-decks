import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-b from-slide-bg-from to-slide-bg-to">
      <div className="text-center">
        <h1 className="mb-6 text-6xl font-bold text-white">Sales Decks</h1>
        <div className="space-y-4">
          <Link
            href="/saas-sales"
            className="block rounded-lg bg-primary px-8 py-3 text-white transition-colors hover:bg-primary-light"
          >
            SaaS Deck
          </Link>
        </div>
      </div>
    </div>
  );
}
