import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

export async function generateMetadata({ params }: SOWPageProps): Promise<Metadata> {
  const { deckId } = await params;

  // Try to get client name from SOW content
  let clientName = "Client";
  try {
    const sowModule = (await import(`../../../../decks/${deckId}/sow-content`)) as {
      sowContent: SOWDefinition;
    };
    if (sowModule.sowContent.client.name) {
      clientName = sowModule.sowContent.client.name;
    }
  } catch {
    // No SOW content, try theme
    try {
      const themeModule = (await import(`../../../../decks/${deckId}/theme`)) as {
        theme: DeckTheme;
      };
      if (themeModule.theme.clientName) {
        clientName = themeModule.theme.clientName;
      }
    } catch {
      // Use default
    }
  }

  return {
    title: `${clientName} | Statement of Work`,
    description: `Statement of Work for ${clientName}`,
  };
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
