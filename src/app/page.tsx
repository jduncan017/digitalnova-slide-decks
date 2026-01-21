import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <h1 className="mb-6 text-6xl font-bold text-white">Pitch Decks</h1>
        <p className="mb-8 text-xl text-slate-300">
          Interactive presentations for clients
        </p>
        <div className="space-y-4">
          <Link
            href="/example-client"
            className="block rounded-lg bg-blue-600 px-8 py-3 text-white transition-colors hover:bg-blue-700"
          >
            View Example Deck
          </Link>
        </div>
      </div>
    </div>
  );
}
