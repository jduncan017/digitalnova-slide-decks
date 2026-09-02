import fs from "fs";
import path from "path";

export interface DeckInfo {
  id: string;
  name: string;
  archived: boolean;
  /** Absolute path to the deck folder */
  dir: string;
}

export const ARCHIVED_DIR = "archived";

function readDeckFolders(dir: string, archived: boolean): DeckInfo[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((folder) => {
      const deckPath = path.join(dir, folder);
      return (
        fs.statSync(deckPath).isDirectory() &&
        fs.existsSync(path.join(deckPath, "deck.tsx"))
      );
    })
    .map((folder) => ({
      id: folder,
      name: folder.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      archived,
      dir: path.join(dir, folder),
    }));
}

export function getDecks(): DeckInfo[] {
  const decksDirectory = path.join(process.cwd(), "decks");

  return [
    ...readDeckFolders(decksDirectory, false),
    ...readDeckFolders(path.join(decksDirectory, ARCHIVED_DIR), true),
  ];
}

/** Slugs of decks that live in `decks/archived/` */
export function getArchivedDeckIds(): Set<string> {
  return new Set(
    getDecks()
      .filter((deck) => deck.archived)
      .map((deck) => deck.id)
  );
}
