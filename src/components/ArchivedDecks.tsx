"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface ArchivedDeck {
  slug: string;
  name: string;
  client: string;
}

interface ArchivedDecksProps {
  decks: ArchivedDeck[];
}

export default function ArchivedDecks({ decks }: ArchivedDecksProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (decks.length === 0) return null;

  return (
    <div className="mt-12">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="group flex w-full items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/30 px-5 py-3 text-left transition-all hover:border-neutral-700 hover:bg-neutral-800/40"
      >
        <ChevronRight
          className={`h-4 w-4 text-neutral-500 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
        <span className="text-sm font-medium text-neutral-300">Archived</span>
        <span className="text-sm text-neutral-600">{decks.length}</span>
      </button>

      {isOpen && (
        <div className="mt-4 divide-y divide-neutral-800 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30">
          <div className="grid grid-cols-[1fr_1fr_auto] items-center gap-4 bg-neutral-900/60 px-5 py-2 text-xs font-medium uppercase tracking-wide text-neutral-600">
            <span>Deck</span>
            <span>Client</span>
            <span className="w-4" />
          </div>

          {decks.map((deck) => (
            <Link
              key={deck.slug}
              href={`/${deck.slug}`}
              className="group grid grid-cols-[1fr_1fr_auto] items-center gap-4 px-5 py-3 transition-colors hover:bg-neutral-800/50"
            >
              <span className="truncate text-sm font-medium text-neutral-300 transition-colors group-hover:text-orange-400">
                {deck.name}
              </span>
              <span className="truncate text-sm text-neutral-500">
                {deck.client}
              </span>
              <ArrowRight className="h-4 w-4 text-neutral-700 transition-all group-hover:translate-x-1 group-hover:text-orange-400" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
