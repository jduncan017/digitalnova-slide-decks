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

export async function generateStaticParams() {
  const decks = getDecks();
  return decks.map((deck) => ({
    deckId: deck.id,
  }));
}

export async function generateMetadata({ params }: DeckPageProps): Promise<Metadata> {
  const { deckId } = await params;

  // Try to get client name from theme
  let clientName = "Client";
  try {
    const themeModule = (await import(`../../../decks/${deckId}/theme`)) as {
      theme: DeckTheme;
    };
    if (themeModule.theme.clientName) {
      clientName = themeModule.theme.clientName;
    }
  } catch {
    // No theme file, use default
  }

  return {
    title: `${clientName} | Proposal`,
    description: `Growth proposal for ${clientName}`,
  };
}

export default async function DeckPage({ params }: DeckPageProps) {
  const { deckId } = await params;

  try {
    const deck = (await import(`../../../decks/${deckId}/deck`)) as {
      default: React.ReactElement[];
    };

    // Try to import the deck's theme, fall back to default
    let theme: DeckTheme = defaultTheme;
    try {
      const themeModule = (await import(`../../../decks/${deckId}/theme`)) as {
        theme: DeckTheme;
      };
      theme = themeModule.theme;
    } catch {
      // No theme file found, use default
    }

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
