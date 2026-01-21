# Pitch Deck Theming System - Implementation Plan

## Goal
Create a per-deck theming system that allows quick customization of colors and branding for different clients. Target: 15 minutes to prepare a personalized deck for a sales call.

**STATUS: ✅ COMPLETED**

---

## How It Works (Final Implementation)

### Architecture Overview

```
1. Request → src/app/[deckId]/page.tsx
   └─ Loads deck slides from decks/[deckId]/deck.tsx
   └─ Loads theme from decks/[deckId]/theme.ts (or uses defaultTheme)
   └─ Wraps in <ThemeProvider theme={theme}>

2. ThemeProvider sets CSS variables via inline styles
   └─ Sets --color-primary, --color-neutral-800, etc. directly
   └─ Inline styles override @theme defaults in globals.css
   └─ Also provides React context for clientLogo/clientName

3. globals.css @theme block defines fallback defaults
   └─ These are used if no ThemeProvider wraps the content

4. Components use standard Tailwind classes
   └─ className="bg-primary" uses var(--color-primary)
   └─ className="text-gray-300" uses var(--color-gray-300)
```

### Theme-Aware Color Classes

| Tailwind Class | Theme Property | Usage |
|----------------|----------------|-------|
| `bg-primary`, `text-primary`, `border-primary` | `primary` | Accent color |
| `from-slide-bg-from`, `to-slide-bg-to` | `slideBg.from/to` | Slide background gradient |
| `bg-outer-bg` | `outerBg` | Background outside slide |
| `bg-neutral-600` through `bg-neutral-950` | `neutral.*` | Box backgrounds, borders |
| `text-gray-300`, `text-gray-400`, `text-gray-500` | `gray.*` | Text colors |

---

## Completed Implementation

### ✅ Phase 1: Theme Structure

**File:** `src/lib/theme.ts`

```ts
export interface DeckTheme {
  primary: string;           // Accent color
  slideBg: {
    from: string;            // Gradient start
    to: string;              // Gradient end
  };
  outerBg: string;           // Background outside slide
  neutral: {
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  gray: {
    300: string;
    400: string;
    500: string;
  };
  clientLogo?: string;       // Path to client logo
  clientName?: string;       // Client name for alt text
}

export const defaultTheme: DeckTheme = { /* defaults */ };
export function createTheme(overrides: Partial<DeckTheme>): DeckTheme { /* helper */ }
```

### ✅ Phase 2: ThemeProvider & CSS Variables

**File:** `src/components/ThemeProvider.tsx`

- Sets `--color-*` CSS variables directly via inline styles
- Provides React context for accessing theme values (e.g., `clientLogo`)
- Uses `useTheme()` hook to access theme in components

**File:** `src/styles/globals.css`

- `@theme` block defines default values
- ThemeProvider inline styles override these defaults

### ✅ Phase 3: Updated Components

| Component | Changes |
|-----------|---------|
| `DeckPresentation.tsx` | Uses `bg-outer-bg`, `from-slide-bg-from`, `to-slide-bg-to` |
| `Slide.tsx` | Uses `bg-gray-500`, `text-gray-500` |
| `Box.tsx` | Uses `from-neutral-600 to-neutral-800` for gradient variants |
| `Logo.tsx` | Accepts `src` and `alt` props for custom logos |

### ✅ Phase 4: Per-Deck Theme Configuration

**File:** `decks/saas-sales/theme.ts`

```ts
import { createTheme } from "~/lib/theme";

export const theme = createTheme({
  primary: "#70B5D8",
  slideBg: { from: "#0a0a0a", to: "#171717" },
  outerBg: "#262626",
  neutral: { 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" },
  gray: { 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373" },
  clientLogo: "/logo.png",
  clientName: "DigitalNova Studio",
});
```

**File:** `src/app/[deckId]/page.tsx`

- Dynamically imports deck's theme.ts
- Falls back to defaultTheme if no theme file exists
- Wraps DeckPresentation with ThemeProvider

### ✅ Phase 5: Hero Slide Client Logo

**File:** `decks/saas-sales/1_hero.tsx`

- Uses `useTheme()` hook to access theme
- Passes `theme.clientLogo` and `theme.clientName` to Logo component

### ✅ Phase 6: Slide Color Updates

All slides in `decks/saas-sales/` updated to use theme-aware colors:
- `text-slate-*` → `text-gray-*`
- `bg-slate-*` → `bg-neutral-*`
- `text-slate-900` (on primary bg) → `text-neutral-950`

---

## How to Create a New Themed Deck

1. **Create deck folder:** `mkdir decks/new-client`

2. **Create theme.ts:**
```ts
import { createTheme } from "~/lib/theme";

export const theme = createTheme({
  primary: "#22c55e",  // Client's brand color
  clientLogo: "/logos/new-client.png",
  clientName: "New Client Inc",
  // Override any other colors as needed
});
```

3. **Create deck.tsx:** Import slides and export array

4. **Access at:** `/new-client`

---

## Files Created/Modified

**New files:**
- ✅ `src/lib/theme.ts`
- ✅ `src/components/ThemeProvider.tsx`
- ✅ `decks/saas-sales/theme.ts`

**Modified files:**
- ✅ `src/styles/globals.css`
- ✅ `src/app/[deckId]/page.tsx`
- ✅ `src/components/DeckPresentation.tsx`
- ✅ `src/components/Slide.tsx`
- ✅ `src/components/slide-components/Box.tsx`
- ✅ `src/components/slide-components/Logo.tsx`
- ✅ `decks/saas-sales/1_hero.tsx`
- ✅ `decks/saas-sales/2_the-problem.tsx`
- ✅ `decks/saas-sales/4_integrated-growth-system.tsx`
- ✅ `decks/saas-sales/5_90-day-roadmap.tsx`
- ✅ `decks/saas-sales/6_service-tiers.tsx`
- ✅ `decks/saas-sales/7_included-services.tsx`
- ✅ `decks/saas-sales/11_how-we-kick-off.tsx`
- ✅ `decks/saas-sales/12_lets-build.tsx`

---

## Future Enhancements (Not in Scope)

- CLI to scaffold new decks
- Content file for dynamic slide copy
- Slide template library (generic versions of current slides)
- Theme preset library (pre-made color schemes)
