import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DeckPresentation from "~/components/DeckPresentation";
import { ThemeProvider } from "~/components/ThemeProvider";
import { getDecks } from "~/lib/getDecks";
import { defaultTheme, type DeckTheme } from "~/lib/theme";

interface DeckPageProps {
  params: Promise<{ deckId: string }>;
}

// Only allow routes returned by generateStaticParams - prevents crashes from typos/invalid routes
export const dynamicParams = false;

// Decks keep their URL after being moved to decks/archived, so links already sent to
// clients keep working. Look in the active folder first, then the archive.
async function importDeck(deckId: string) {
  try {
    return (await import(`../../../decks/${deckId}/deck`)) as {
      default: React.ReactElement[];
    };
  } catch {
    return (await import(`../../../decks/archived/${deckId}/deck`)) as {
      default: React.ReactElement[];
    };
  }
}

async function importTheme(deckId: string): Promise<DeckTheme> {
  try {
    const themeModule = (await import(`../../../decks/${deckId}/theme`)) as {
      theme: DeckTheme;
    };
    return themeModule.theme;
  } catch {
    // Not in the active folder - try the archive
  }

  try {
    const themeModule = (await import(
      `../../../decks/archived/${deckId}/theme`
    )) as { theme: DeckTheme };
    return themeModule.theme;
  } catch {
    // No theme file, use default
    return defaultTheme;
  }
}

export async function generateStaticParams() {
  const decks = getDecks();
  return decks.map((deck) => ({
    deckId: deck.id,
  }));
}

export async function generateMetadata({ params }: DeckPageProps): Promise<Metadata> {
  const { deckId } = await params;

  // Try to get client name from theme
  const theme = await importTheme(deckId);
  const clientName = theme.clientName ?? "Client";

  return {
    title: `${clientName} | Proposal`,
    description: `Growth proposal for ${clientName}`,
  };
}

export default async function DeckPage({ params }: DeckPageProps) {
  const { deckId } = await params;

  try {
    const deck = await importDeck(deckId);

    // Try to import the deck's theme, fall back to default
    const theme = await importTheme(deckId);

    return (
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div className="h-screen w-full bg-outer-bg" />}>
          <DeckPresentation slides={deck.default} deckId={deckId} />
        </Suspense>
      </ThemeProvider>
    );
  } catch (error) {
    console.error(`Error loading deck: ${deckId}`, error);
    notFound();
  }
}
