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
- **`decks/`**: Each client gets their own folder containing a `deck.tsx` file with slide definitions
- **`components/slide-components/`**: Reusable, animated components for building slides
- **`app/[deckId]/`**: Dynamic route that loads and presents decks

### How It Works
1. Each client deck is a folder in `decks/` (e.g., `decks/acme-corp/`)
2. Inside each folder is a `deck.tsx` file that exports an array of React elements (slides)
3. The dynamic route `/[deckId]` loads the corresponding deck and renders it with `DeckPresentation`
4. Users navigate through slides using keyboard arrows or swipe gestures
5. All slides support animated components with customizable timing and effects

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

To change typography globally, edit `src/styles/globals.css`:
```css
@theme {
  /* Heading sizes */
  --font-size-h1: 4.5rem;
  --line-height-h1: 1.1;

  /* Body sizes */
  --font-size-body-xl: 1.25rem;
  --line-height-body-xl: 1.6;

  /* Label */
  --font-size-label: 0.75rem;
  --letter-spacing-label: 0.1em;
}
```

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

1. Create a new folder in `decks/` using kebab-case:
   ```bash
   mkdir decks/new-client
   ```

2. Create `decks/new-client/deck.tsx`:
   ```tsx
   import { TextBox, Box, Section, Grid } from "@/components/slide-components";

   const slides = [
     <div key="slide-1" className="text-center">
       <TextBox animation="slideDown">
         <h1 className="text-7xl font-bold text-white">Title</h1>
       </TextBox>
     </div>,
     // ... more slides
   ];

   export default slides;
   ```

3. Access at `/new-client`

## Common Patterns

### Title Slide
```tsx
<div key="slide-1" className="text-center">
  <TextBox animation="slideDown" delay={0}>
    <h1 className="text-7xl font-bold text-white">Client Name</h1>
  </TextBox>
  <TextBox animation="slideUp" delay={0.3}>
    <p className="text-3xl text-slate-300">Subtitle</p>
  </TextBox>
</div>
```

### Grid Layout with Stagger
```tsx
<Grid cols={3} gap={6} animation="stagger">
  <Box>
    <Section background="light">
      <h3>Item 1</h3>
    </Section>
  </Box>
  <Box>
    <Section background="light">
      <h3>Item 2</h3>
    </Section>
  </Box>
  <Box>
    <Section background="light">
      <h3>Item 3</h3>
    </Section>
  </Box>
</Grid>
```

### Sequential Animations
```tsx
<div>
  <Box animation="slideLeft" delay={0}>
    <Section background="light">First item</Section>
  </Box>
  <Box animation="slideLeft" delay={0.2}>
    <Section background="light">Second item</Section>
  </Box>
  <Box animation="slideLeft" delay={0.4}>
    <Section background="light">Third item</Section>
  </Box>
</div>
```

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

### Colors
- Background gradient: `from-slate-900 to-slate-800`
- Primary text: `text-white`
- Secondary text: `text-slate-300`
- Tertiary text: `text-slate-400`
- Accent: `text-blue-400` or `bg-blue-600`

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
