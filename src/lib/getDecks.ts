import fs from "fs";
import path from "path";

export interface DeckInfo {
  id: string;
  name: string;
}

export function getDecks(): DeckInfo[] {
  const decksDirectory = path.join(process.cwd(), "decks");

  if (!fs.existsSync(decksDirectory)) {
    return [];
  }

  const deckFolders = fs.readdirSync(decksDirectory);

  return deckFolders
    .filter((folder) => {
      const deckPath = path.join(decksDirectory, folder);
      return (
        fs.statSync(deckPath).isDirectory() &&
        fs.existsSync(path.join(deckPath, "deck.tsx"))
      );
    })
    .map((folder) => ({
      id: folder,
      name: folder.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    }));
}
