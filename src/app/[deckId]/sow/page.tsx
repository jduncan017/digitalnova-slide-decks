import { notFound } from "next/navigation";
import { ThemeProvider } from "~/components/ThemeProvider";
import { getDecks } from "~/lib/getDecks";
import { defaultTheme, type DeckTheme } from "~/lib/theme";
import type { SOWDefinition } from "~/lib/sowSchema";
import { SOWDocument } from "~/components/SOWDocument";

interface SOWPageProps {
  params: Promise<{ deckId: string }>;
}

// Only allow routes for decks that exist
export const dynamicParams = false;

export async function generateStaticParams() {
  const decks = getDecks();
  return decks.map((deck) => ({
    deckId: deck.id,
  }));
}

export default async function SOWPage({ params }: SOWPageProps) {
  const { deckId } = await params;

  try {
    // Import the SOW content
    const sowModule = (await import(`../../../../decks/${deckId}/sow-content`)) as {
      sowContent: SOWDefinition;
    };

    // Try to import the deck's theme, fall back to default
    let theme: DeckTheme = defaultTheme;
    try {
      const themeModule = (await import(`../../../../decks/${deckId}/theme`)) as {
        theme: DeckTheme;
      };
      theme = themeModule.theme;
    } catch {
      // No theme file found, use default
    }

    return (
      <ThemeProvider theme={theme}>
        <SOWDocument content={sowModule.sowContent} />
      </ThemeProvider>
    );
  } catch (error) {
    console.error(`Error loading SOW for deck: ${deckId}`, error);
    notFound();
  }
}
