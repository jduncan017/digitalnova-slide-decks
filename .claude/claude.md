# Pitch Decks Project

## Overview
An interactive pitch deck presentation platform built with Next.js. This project allows Digital Nova Studio to create and deliver beautiful, animated slide presentations to clients via unique URL paths.

## Key Concepts

### Architecture
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Navigation**: Keyboard (arrow keys) + Touch gestures (swipe)
- **Routing**: Dynamic routes via `[deckId]` parameter

### Directory Structure
- **`decks/`**: Each client gets their own folder containing:
  - `content.ts` - Slide content definitions using typed schema (required)
  - `deck.tsx` - Renders slides from content (just calls `renderDeck`)
  - `theme.ts` - Custom theme/colors (optional)
- **`src/templates/`**: Slide templates and content types
  - `types.ts` - TypeScript interfaces for all slide content
  - `slides/*.tsx` - Individual slide template components
- **`src/lib/theme.ts`**: Global theme types and `createTheme()` helper
- **`src/lib/deckSchema.ts`**: Deck definition types
- **`src/lib/renderDeck.tsx`**: Renders slides from deck definitions
- **`src/components/slide-components/`**: Reusable, animated components for building slides
- **`src/app/[deckId]/`**: Dynamic route that loads deck, theme, and presents

### How It Works
1. Each client deck is a folder in `decks/` (e.g., `decks/acme-corp/`)
2. **`content.ts`** defines slide content using typed interfaces (no layout code)
3. **`deck.tsx`** calls `renderDeck()` to transform content into React elements
4. Each deck can have an optional `theme.ts` file for custom colors and branding
5. The dynamic route `/[deckId]` loads the deck, theme, and renders with `DeckPresentation`
6. Users navigate through slides using keyboard arrows

## Theming System

The theming system allows per-deck customization of colors and client branding. Target: 15 minutes to prepare a personalized deck for a sales call.

### Theme File Structure

**`src/lib/theme.ts`** (Global)
- Defines the `DeckTheme` TypeScript interface
- Exports `defaultTheme` with fallback values
- Exports `createTheme()` helper for easy overrides

**`decks/[deckId]/theme.ts`** (Per-deck)
- Imports `createTheme` from the global file
- Overrides any values needed for that specific deck/client

### Available Theme Properties

```ts
interface DeckTheme {
  primary: string;           // Accent color (buttons, highlights)
  slideBg: {
    from: string;            // Slide background gradient start
    to: string;              // Slide background gradient end
  };
  outerBg: string;           // Background outside the slide container
  neutral: {
    600: string;             // Box gradients (lighter)
    700: string;             // Borders
    800: string;             // Box gradients (darker)
    900: string;             // Dark backgrounds
    950: string;             // Darkest backgrounds
  };
  gray: {
    300: string;             // Light text
    400: string;             // Medium text
    500: string;             // Muted text, dividers
  };
  clientLogo?: string;       // Path to client logo (shown on hero)
  clientName?: string;       // Client name for alt text
}
```

### Creating a Custom Theme

```ts
// decks/acme-corp/theme.ts
import { createTheme } from "~/lib/theme";

export const theme = createTheme({
  primary: "#22c55e",  // Green accent
  slideBg: {
    from: "#1a1a2e",
    to: "#16213e",
  },
  neutral: {
    600: "#4a4a6a",
    700: "#3a3a5a",
    800: "#2a2a4a",
    900: "#1a1a3a",
    950: "#0a0a2a",
  },
  gray: {
    300: "#c0c0d0",
    400: "#9090a0",
    500: "#606080",
  },
  clientLogo: "/logos/acme.png",
  clientName: "Acme Corp",
});
```

### How Theming Works (Rendering Flow)

```
1. Request → src/app/[deckId]/page.tsx
   └─ Loads deck slides from decks/[deckId]/deck.tsx
   └─ Loads theme from decks/[deckId]/theme.ts (or uses defaultTheme)
   └─ Wraps in <ThemeProvider theme={theme}>

2. ThemeProvider applies CSS variables
   └─ Sets inline styles: --theme-primary, --theme-neutral-800, etc.
   └─ Provides React context for clientLogo/clientName

3. globals.css @theme block bridges CSS vars → Tailwind
   └─ Maps: --color-neutral-800: var(--theme-neutral-800, #262626)
   └─ Tailwind generates utility classes from these

4. Components use standard Tailwind classes
   └─ className="bg-neutral-800" automatically uses theme value
```

### Theme-Aware Components

These components automatically respond to theme changes:
- `DeckPresentation` - Uses `bg-outer-bg`, `from-slide-bg-from`, `to-slide-bg-to`
- `Slide` - Uses `bg-gray-500`, `text-gray-500`
- `Box` - Uses `from-neutral-600`, `to-neutral-800` for gradient variants
- `Logo` - Accepts `src` prop, hero slide passes `clientLogo` from theme

### Accessing Theme in Components

```tsx
"use client";
import { useTheme } from "~/components/ThemeProvider";

export default function MyComponent() {
  const theme = useTheme();

  return (
    <div>
      {theme.clientName && <p>Prepared for {theme.clientName}</p>}
    </div>
  );
}
```

## Typography System

**IMPORTANT**: Always use the typography components (`Heading`, `Body`, `Label`) for consistent text styling across all decks. This allows you to control all text styles from one central location.

### Typography Components

1. **Heading**: For all headings with consistent sizing
   ```tsx
   import { Heading } from "~/components/slide-components";

   <Heading level="h1" animation="slideDown">Main Title</Heading>
   <Heading level="h2" className="text-purple-400">Subtitle</Heading>
   <Heading level="h3">Section Title</Heading>
   ```
   - Levels: h1 (72px), h2 (60px), h3 (48px), h4 (36px), h5 (30px), h6 (24px)
   - All headings use bold weight by default
   - Animations: fade, slideUp, slideDown, slideLeft, slideRight, none
   - Supports delay prop for staggered animations

2. **Body**: For all body text with consistent sizing
   ```tsx
   import { Body } from "~/components/slide-components";

   <Body size="xl" className="text-slate-300">Large body text</Body>
   <Body size="lg">Large body text</Body>
   <Body size="base">Default body text</Body>
   <Body size="sm">Small body text</Body>
   <Body size="xs">Extra small text</Body>
   ```
   - Sizes: xl (20px), lg (18px), base (16px), sm (14px), xs (12px)
   - Supports `as` prop: "p" (default), "span", "div"
   - Animations: fade, slideUp, slideDown, slideLeft, slideRight, none

3. **Label**: For eyebrows/labels (uppercase, small, tracked)
   ```tsx
   import { Label } from "~/components/slide-components";

   <Label className="text-purple-400">Section Label</Label>
   <Label uppercase={false}>lowercase label</Label>
   ```
   - Size: 12px with 0.1em letter-spacing
   - Uppercase by default (can be disabled)
   - Perfect for section labels, eyebrows, badges

### Customizing Typography

Typography sizing is defined directly in the component files using Tailwind utility classes:

**Heading sizes** (`src/components/slide-components/Heading.tsx`):
- h1: `text-6xl leading-tight font-light` (60px)
- h2: `text-5xl leading-tight font-bold` (48px)
- h3: `text-3xl leading-snug font-bold` (30px)
- h4: `text-2xl leading-snug font-semibold` (24px)
- h5: `text-xl leading-snug font-semibold` (20px)
- h6: `text-lg leading-normal font-semibold` (18px)

**Body sizes** (`src/components/slide-components/Body.tsx`):
- xl: `text-xl leading-relaxed` (20px)
- lg: `text-lg leading-relaxed` (18px)
- base: `text-base leading-relaxed` (16px)
- sm: `text-sm leading-normal` (14px)
- xs: `text-xs leading-normal` (12px)

To change typography globally, edit the `headingStyles` or `bodySizeStyles` objects in the respective component files.

## Component Library

### Layout & Animation Components
Located in `components/slide-components/`:

1. **Box**: General-purpose animated container
   - Animations: fade, slideUp, slideDown, slideLeft, slideRight, scale, none
   - Use for wrapping any content that needs animation

2. **Section**: Slide section with background styling
   - Backgrounds: transparent, light, dark, gradient
   - Animations: fade, slideUp, slideDown, none
   - Use for grouping related content with visual separation

3. **Grid**: Responsive grid layout
   - Cols: 1, 2, 3, 4 (responsive breakpoints built-in)
   - Animation: fade, stagger, none
   - Use for organizing multiple items in a grid

4. **Icon**: Animated icon component (currently uses emojis, can be extended)
   - Animations: fade, scale, bounce, rotate, none
   - Use for visual icons and symbols

### Legacy Components (use Typography components instead)

- **TextBox**: Deprecated - use `Heading` or `Body` components instead

All components support:
- `delay` prop for staggered animations
- `className` prop for custom Tailwind classes

### Core Presentation Components
- **DeckPresentation**: Main wrapper that handles navigation, keyboard events, swipe gestures, and slide transitions
- **Slide**: Individual slide wrapper that centers content and handles responsive padding

## Creating a New Deck

### Quick Start (Content-Driven Approach)

1. **Create folder**: `mkdir decks/new-client`

2. **Create `theme.ts`** (customize colors):
```ts
import { createTheme } from "~/lib/theme";

export const theme = createTheme({
  primary: "#22c55e",
  primaryLight: "#4ade80",
  clientLogo: "/logos/new-client.png",
  clientName: "New Client Inc",
});
```

3. **Create `content.ts`** (define slides using typed content):
```ts
import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "new-client",
  meta: { title: "Proposal for New Client", preparedFor: "Client Contact" },
  slides: [
    {
      type: "hero",
      content: {
        title: "Your Growth System",
        subtitle: "Prepared for New Client",
        heroImage: "/hero.jpg",
      },
    },
    {
      type: "problem",
      content: {
        label: "THE CHALLENGE",
        title: "Common Pain Points",
        subtitle: "Here's what we're solving.",
        challenges: [
          { text: "Problem one", icon: "TrendingDown" },
          { text: "Problem two", icon: "DollarSign" },
        ],
        sideImage: "/problem.jpg",
      },
    },
    // ... more slides
  ],
};
```

4. **Create `deck.tsx`** (just 4 lines):
```ts
import { renderDeck } from "~/lib/renderDeck";
import { deckContent } from "./content";

export default renderDeck(deckContent);
```

5. Access at `/new-client`

### Available Slide Types

| Type | Description | Key Content Fields |
|------|-------------|-------------------|
| `hero` | Opening slide with logo and title | title, subtitle, tagline, heroImage |
| `problem` | Pain points with icons | label, title, challenges[], sideImage |
| `successFactors` | Why your approach works | label, title, factors[], differentiator |
| `opportunity` | 3-card flow with callout | label, title, opportunities[], callout |
| `deliverables` | What you'll build (numbered) | label, title, deliverables[], options[] |
| `pillars` | Core offerings (3 columns) | label, title, pillars[], profile, testimonial |
| `portfolio` | Overlapping image showcase | label, title, items[], leftTitle, rightTitle |
| `pricing` | Service tiers | label, title, tiers[] (with recommended flag) |
| `timeline` | Project phases | label, title, steps[], note, layout (arrow/grid) |
| `cta` | Call to action + contact | label, title, ctaButton, profile, contactItems[] |
| `growthEngine` | Two-panel breakdown | label, title, leftPanel, rightPanel |

### Icon Names
Use lucide-react icon names as strings:
- Common: `TrendingUp`, `DollarSign`, `Calendar`, `Users`, `Target`, `Globe`
- Actions: `Check`, `ArrowRight`, `Mail`, `Phone`, `Send`
- Concepts: `Lightbulb`, `Monitor`, `Rocket`, `Star`, `Shield`
- See `src/templates/types.ts` for full list

### Content Template (Copy & Customize)

Copy `decks/saas-sales/content.ts` as a starting point for new decks. All slides are defined with typed interfaces that provide autocomplete and validation.

## Workflow: Creating a Deck for a Sales Call

**Target time: ~15 minutes**

1. **Copy existing deck folder** (e.g., copy `saas-sales/` to `new-client/`)
2. **Update theme.ts** with client's brand colors and logo
3. **Update content.ts**:
   - Change deck id and meta
   - Customize slide content for the client
   - Adjust pricing, challenges, etc. as needed
4. **Add client logo** to `/public/logos/`
5. **Test at** `/new-client`

### Tips for Fast Customization
- Focus on content.ts - no layout code needed
- TypeScript autocomplete shows available fields
- Use existing decks as reference for content structure
- Theme colors automatically apply across all slides

## Navigation Features

### Keyboard Controls
- Arrow Right / Arrow Down / Space → Next slide
- Arrow Left / Arrow Up → Previous slide
- Home → First slide
- End → Last slide

### Touch Gestures
- Swipe left → Next slide
- Swipe right → Previous slide

### UI Elements
- Navigation dots at bottom (click to jump to slide)
- Arrow buttons on sides (desktop only)
- Slide counter in top-right (e.g., "3 / 5")

## Styling Guidelines

### Theme-Aware Colors (automatically respond to deck theme)
- Slide background: `from-slide-bg-from to-slide-bg-to`
- Outer background: `bg-outer-bg`
- Accent/primary: `text-primary`, `bg-primary`, `border-primary`
- Box backgrounds: `from-neutral-600 to-neutral-800`
- Borders: `border-neutral-700`
- Muted text/dividers: `text-gray-500`, `bg-gray-500`

### Static Colors (not themed)
- Primary text: `text-white`
- Secondary text: `text-slate-300`
- Tertiary text: `text-slate-400`

### Typography
- Large headings: `text-7xl` or `text-6xl`
- Section headings: `text-5xl` or `text-4xl`
- Subheadings: `text-3xl` or `text-2xl`
- Body text: `text-xl` or `text-lg`

### Spacing
- Slide padding: `p-8 md:p-16`
- Section padding: `p-6`
- Common gaps: `gap-4`, `gap-6`, `gap-8`
- Margin bottom for headings: `mb-6`, `mb-8`, `mb-12`

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Create new deck**: Add folder + `deck.tsx` in `decks/`
3. **Test navigation**: Use arrow keys and swipe gestures
4. **Preview on mobile**: Test responsive design and touch gestures
5. **Build for production**: `npm run build`
6. **Deploy**: Push to Vercel (or hosting platform)

## Future Enhancements

Potential additions:
- Custom icon library integration (React Icons, Heroicons, etc.)
- Video/image slide components
- Chart/graph components for data visualization
- Slide transitions (different animation styles)
- Print/PDF export
- Analytics (track which slides are viewed most)
- Password protection for decks
- Slide notes for presenter mode

## Deployment

Designed to be deployed on a subdomain of digitalnovastudio.com (e.g., `pitchdecks.digitalnovastudio.com`).

Each deck is accessible at `/{deckId}` where `deckId` matches the folder name in `decks/`.

## Important Notes

- Always use `key` prop on slide elements to help React with transitions
- Keep each slide focused on one main concept
- Test animations on different screen sizes
- Use semantic HTML for accessibility
- Delay values are in seconds (e.g., `delay={0.3}` = 300ms)
- Grid columns are responsive by default (1 col mobile → 2-4 cols desktop)
