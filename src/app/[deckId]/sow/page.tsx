import fs from "fs";
import path from "path";
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

// Decks keep their URL after being moved to decks/archived, so links already sent to
// clients keep working. Look in the active folder first, then the archive.
async function importSOWContent(deckId: string) {
  try {
    return (await import(`../../../../decks/${deckId}/sow-content`)) as {
      sowContent: SOWDefinition;
    };
  } catch {
    return (await import(
      `../../../../decks/archived/${deckId}/sow-content`
    )) as { sowContent: SOWDefinition };
  }
}

async function importTheme(deckId: string): Promise<DeckTheme> {
  try {
    const themeModule = (await import(`../../../../decks/${deckId}/theme`)) as {
      theme: DeckTheme;
    };
    return themeModule.theme;
  } catch {
    // Not in the active folder - try the archive
  }

  try {
    const themeModule = (await import(
      `../../../../decks/archived/${deckId}/theme`
    )) as { theme: DeckTheme };
    return themeModule.theme;
  } catch {
    // No theme file found, use default
    return defaultTheme;
  }
}

export async function generateStaticParams() {
  return getDecks()
    .filter((deck) => fs.existsSync(path.join(deck.dir, "sow-content.ts")))
    .map((deck) => ({
      deckId: deck.id,
    }));
}

export async function generateMetadata({ params }: SOWPageProps): Promise<Metadata> {
  const { deckId } = await params;

  // Try to get client name from SOW content
  let clientName = "Client";
  try {
    const sowModule = await importSOWContent(deckId);
    if (sowModule.sowContent.client.name) {
      clientName = sowModule.sowContent.client.name;
    }
  } catch {
    // No SOW content, try theme
    const theme = await importTheme(deckId);
    if (theme.clientName) {
      clientName = theme.clientName;
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
    const sowModule = await importSOWContent(deckId);

    // Try to import the deck's theme, fall back to default
    const theme = await importTheme(deckId);

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
