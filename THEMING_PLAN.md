# Pitch Deck Theming System - Implementation Plan

## Goal
Create a per-deck theming system that allows quick customization of colors and branding for different clients. Target: 15 minutes to prepare a personalized deck for a sales call.

---

## Phase 1: Define Theme Structure

### 1.1 Create theme type definition

**File:** `src/lib/theme.ts`

Define the shape of a theme configuration:

```ts
export interface DeckTheme {
  // Brand colors
  primary: string;        // Accent color (buttons, highlights, icons)

  // Backgrounds
  slideBg: string;        // Main slide background (currently neutral-950 to neutral-900)

  // Neutrals (for boxes, cards)
  neutral: {
    50: string;
    100: string;
    200: string;
    // ... etc
    800: string;
    900: string;
    950: string;
  };

  // Grays (for text, borders)
  gray: {
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
  };

  // Client branding
  clientLogo?: string;    // Path to client logo (replaces your logo on hero)
  clientName?: string;    // Client name for personalization
}
```

### 1.2 Create default theme

**File:** `src/lib/theme.ts`

Export a default theme based on current styling:

```ts
export const defaultTheme: DeckTheme = {
  primary: "#22c55e",  // Current green (or whatever your current primary is)

  slideBg: "from-neutral-950 to-neutral-900",

  neutral: {
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a",
  },

  gray: {
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
  },

  clientLogo: undefined,
  clientName: undefined,
};
```

---

## Phase 2: Theme Provider & CSS Variables

### 2.1 Create ThemeProvider component

**File:** `src/components/ThemeProvider.tsx`

A wrapper component that:
1. Accepts a theme config
2. Applies CSS custom properties to a container div
3. Wraps children

```tsx
export function ThemeProvider({ theme, children }: { theme: DeckTheme; children: ReactNode }) {
  const cssVars = {
    '--color-primary': theme.primary,
    '--color-slide-bg-from': theme.slideBg.from,
    '--color-slide-bg-to': theme.slideBg.to,
    '--color-neutral-700': theme.neutral[700],
    // ... etc
  };

  return (
    <div style={cssVars}>
      {children}
    </div>
  );
}
```

### 2.2 Update Tailwind/CSS to use variables

**File:** `src/styles/globals.css`

Map CSS variables to Tailwind theme colors:

```css
@theme {
  --color-primary: var(--theme-primary, #22c55e);
  --color-neutral-800: var(--theme-neutral-800, #262626);
  /* etc */
}
```

This way, existing `text-primary`, `bg-neutral-800` classes automatically use theme values.

---

## Phase 3: Update Components to Use Theme

### 3.1 Components to update

| Component | Current Hardcoded Values | Change To |
|-----------|-------------------------|-----------|
| `DeckPresentation.tsx` | `bg-neutral-800`, `from-neutral-950 to-neutral-900` | CSS vars |
| `Slide.tsx` | Background colors | CSS vars |
| `Box.tsx` | `from-zinc-600 to-zinc-800` in gradient variant | CSS vars |
| `PageHeader.tsx` | `text-slate-500` | CSS var for gray |
| All slides | `text-primary`, `text-slate-300`, etc. | Already use Tailwind, will inherit |

### 3.2 Update Box gradient variant

The Box component's `gradient` and `highlight` variants use hardcoded colors:

```ts
// Current
gradient: "rounded-lg bg-linear-to-br from-zinc-600 to-zinc-800 p-6",

// Updated to use CSS vars (via Tailwind theme)
gradient: "rounded-lg bg-linear-to-br from-neutral-600 to-neutral-800 p-6",
```

---

## Phase 4: Per-Deck Theme Configuration

### 4.1 Create theme file for existing deck

**File:** `decks/saas-sales/theme.ts`

```ts
import { defaultTheme, type DeckTheme } from "~/lib/theme";

export const theme: DeckTheme = {
  ...defaultTheme,
  // Override for this specific deck/client
  primary: "#22c55e",
  clientLogo: "/logos/client-logo.png",
  clientName: "Acme Corp",
};
```

### 4.2 Update deck.tsx to use theme

**File:** `decks/saas-sales/deck.tsx`

```tsx
import { ThemeProvider } from "~/components/ThemeProvider";
import { theme } from "./theme";

// Wrap slides with ThemeProvider
```

---

## Phase 5: Hero Slide Client Logo

### 5.1 Update HeroSlide to accept client logo

**File:** `decks/saas-sales/1_hero.tsx`

- Accept `clientLogo` prop from theme
- If `clientLogo` exists, show it instead of your logo
- Your logo remains in the footer (Slide.tsx) unchanged

### 5.2 Pass theme to hero slide

The hero slide gets the client logo from the deck's theme config.

---

## Phase 6: Content File (Optional Enhancement)

### 6.1 Create content structure for dynamic slides

**File:** `decks/saas-sales/content.ts`

```ts
export const content = {
  hero: {
    title: "SaaS Growth System",
    subtitle: "Predictable Growth for SaaS Companies",
  },
  pricing: {
    tiers: [/* ... */],
  },
};
```

### 6.2 Slides that should use content file

| Slide | Dynamic Content |
|-------|-----------------|
| Hero | Title, subtitle |
| Problem | Problem statements (maybe) |
| Pricing/Tiers | Pricing data, features |

### 6.3 Slides that stay hardcoded

| Slide | Reason |
|-------|--------|
| Integrated Growth System | Same for all clients |
| 90-Day Roadmap | Same process |
| Included Services | Same offering |
| How We Kick Off | Same onboarding |
| Results | Same case studies |

---

## Implementation Order

### Step 1: Theme foundation
- [ ] Create `src/lib/theme.ts` with types and default theme
- [ ] Create `ThemeProvider` component

### Step 2: CSS variable integration
- [ ] Update `globals.css` to define CSS variables
- [ ] Ensure Tailwind uses these variables

### Step 3: Update core components
- [ ] Update `DeckPresentation.tsx` backgrounds
- [ ] Update `Slide.tsx` backgrounds
- [ ] Update `Box.tsx` gradient colors

### Step 4: Wire up deck theming
- [ ] Create `decks/saas-sales/theme.ts`
- [ ] Update `decks/saas-sales/deck.tsx` to use ThemeProvider
- [ ] Update app router to pass theme through

### Step 5: Hero client logo
- [ ] Update `1_hero.tsx` to accept/display client logo
- [ ] Test with sample client logo

### Step 6: Test & refine
- [ ] Create a second theme to test color switching
- [ ] Verify all components respond to theme changes
- [ ] Document the workflow for creating new decks

---

## Future Enhancements (Not in Scope Now)

- CLI to scaffold new decks
- Content file for dynamic slide copy
- Slide template library (generic versions of current slides)
- Theme preset library (pre-made color schemes)

---

## Files to Create/Modify

**New files:**
- `src/lib/theme.ts`
- `src/components/ThemeProvider.tsx`
- `decks/saas-sales/theme.ts`

**Files to modify:**
- `src/styles/globals.css`
- `src/components/DeckPresentation.tsx`
- `src/components/Slide.tsx`
- `src/components/slide-components/Box.tsx`
- `decks/saas-sales/deck.tsx`
- `decks/saas-sales/1_hero.tsx`
