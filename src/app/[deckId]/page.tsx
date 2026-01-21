import { notFound } from "next/navigation";
import DeckPresentation from "~/components/DeckPresentation";
import { getDecks } from "~/lib/getDecks";

interface DeckPageProps {
  params: Promise<{ deckId: string }>;
}

export async function generateStaticParams() {
  const decks = getDecks();
  return decks.map((deck) => ({
    deckId: deck.id,
  }));
}

export default async function DeckPage({ params }: DeckPageProps) {
  const { deckId } = await params;

  try {
    const deck = (await import(`../../../decks/${deckId}/deck`)) as {
      default: React.ReactElement[];
    };
    return <DeckPresentation slides={deck.default} deckId={deckId} />;
  } catch (error) {
    console.error(`Error loading deck: ${deckId}`, error);
    notFound();
  }
}
