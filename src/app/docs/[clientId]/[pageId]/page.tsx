import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ThemeProvider } from "~/components/ThemeProvider";
import { defaultTheme, type DeckTheme } from "~/lib/theme";
import type { OnePagerDefinition } from "~/lib/onepagerSchema";
import { OnePagerDocument } from "~/components/OnePagerDocument";

interface DocPageProps {
  params: Promise<{ clientId: string; pageId: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const docsDir = path.join(process.cwd(), "decks", "docs");

  if (!fs.existsSync(docsDir)) return [];

  const clients = fs
    .readdirSync(docsDir)
    .filter((f) => fs.statSync(path.join(docsDir, f)).isDirectory());

  const params: { clientId: string; pageId: string }[] = [];

  for (const client of clients) {
    const clientDir = path.join(docsDir, client);
    const files = fs
      .readdirSync(clientDir)
      .filter((f) => f.endsWith(".ts") && f !== "theme.ts");

    for (const file of files) {
      params.push({
        clientId: client,
        pageId: file.replace(".ts", ""),
      });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const { clientId } = await params;

  let clientName = clientId
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  try {
    const themeModule = (await import(
      `../../../../../decks/docs/${clientId}/theme`
    )) as { theme: DeckTheme };
    if (themeModule.theme.clientName) {
      clientName = themeModule.theme.clientName;
    }
  } catch {
    // Use formatted folder name
  }

  return {
    title: `${clientName} | Document`,
    description: `Document for ${clientName}`,
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const { clientId, pageId } = await params;

  try {
    const contentModule = (await import(
      `../../../../../decks/docs/${clientId}/${pageId}`
    )) as { onepagerContent: OnePagerDefinition };

    let theme: DeckTheme = defaultTheme;
    try {
      const themeModule = (await import(
        `../../../../../decks/docs/${clientId}/theme`
      )) as { theme: DeckTheme };
      theme = themeModule.theme;
    } catch {
      // No theme file, use default
    }

    return (
      <ThemeProvider theme={theme}>
        <OnePagerDocument content={contentModule.onepagerContent} />
      </ThemeProvider>
    );
  } catch (error) {
    console.error(`Error loading doc: ${clientId}/${pageId}`, error);
    notFound();
  }
}
