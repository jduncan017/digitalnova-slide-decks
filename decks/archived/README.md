# Archived Decks

Move a deck folder in here to archive it:

```bash
git mv decks/[client-slug] decks/archived/[client-slug]
```

Nothing else needs to change:

- The deck URL stays the same (`/[client-slug]`, `/[client-slug]/sow`), so links already
  sent to clients keep working. Route loaders check `decks/` first, then `decks/archived/`.
- The deck directory at `/` moves it into the collapsed "Archived" dropdown automatically,
  based on which folder it lives in. Leave its entry in the `decks` array in
  `src/app/page.tsx` alone.

To unarchive, move it back out.
