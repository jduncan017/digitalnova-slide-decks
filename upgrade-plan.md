# Pitch Deck System Evolution Plan

## Goal
Transform the current pitch deck system from manual JSX-per-slide to a template-driven, content-first architecture that enables:
1. **Immediate**: Consistent, fast deck generation by Claude
2. **Medium-term**: Content files that drive slide rendering
3. **Long-term**: Public monetizable deck generator

---

## Phase 1: Foundation (Quick Wins)

### 1.1 Hide from Search Engines
**File**: `public/robots.txt` (create)
```
User-agent: *
Disallow: /
```

### 1.2 Fix Theming Inconsistencies
**Problem**: Some components hardcode colors (`text-white`, `bg-white/10`) instead of using theme variables.

**Files to fix**:
- `src/components/DeckPresentation.tsx` - Navigation UI uses hardcoded colors
- `src/components/slide-components/Section.tsx` - Background variants hardcoded
- `src/components/slide-components/OverlappingShowcase.tsx` - Text/bg hardcoded
- `src/components/slide-components/Carousel.tsx` - Same issues

**Fix**: Replace hardcoded colors with theme-aware classes (`text-gray-300`, `bg-neutral-600/50`)

### 1.3 Fix Label Component Typography
**File**: `src/components/slide-components/Label.tsx`

Remove CSS variable references and define font sizing directly in the component using Tailwind classes (consistent with how Heading and Body already work). This avoids global CSS override issues.

---

## Phase 2: Slide Templates

### 2.1 New Directory Structure
```
src/templates/
  types.ts              # TypeScript interfaces for all content
  slides/
    HeroSlide.tsx
    ProblemSlide.tsx
    PillarsSlide.tsx
    SuccessFactorsSlide.tsx
    PricingSlide.tsx
    TimelineSlide.tsx
    PortfolioSlide.tsx
    CTASlide.tsx
  index.ts              # Export all
```

### 2.2 Template Types (src/templates/types.ts)

Each slide type gets a content interface:

```typescript
// Icon names map to lucide-react
type IconName = 'MousePointerClick' | 'DollarSign' | 'TrendingUp' | ...;

interface HeroSlideContent {
  title: string;
  subtitle: string;
  tagline?: string;
  heroImage?: string;
}

interface ProblemSlideContent {
  label: string;
  title: string;
  challenges: { text: string; icon: IconName }[];
  sideImage?: string;
}

// ... similar for all 8 slide types
```

### 2.3 Template Implementation Pattern

Each template:
- Accepts `content: XxxSlideContent` prop
- Uses existing slide-components (Box, Heading, Body, PageHeader, etc.)
- Handles icon resolution from string names
- Manages animations and layout internally

---

## Phase 3: Content Schema & Deck Renderer

### 3.1 Deck Schema (src/lib/deckSchema.ts)

```typescript
type SlideDefinition =
  | { type: 'hero'; content: HeroSlideContent }
  | { type: 'problem'; content: ProblemSlideContent }
  | { type: 'pillars'; content: PillarsSlideContent }
  // ... all 8 types

interface DeckDefinition {
  id: string;
  meta: { title: string; preparedFor?: string };
  theme?: Partial<DeckTheme>;
  slides: SlideDefinition[];
}
```

### 3.2 Deck Renderer (src/lib/renderDeck.tsx)

```typescript
function renderDeck(deck: DeckDefinition): ReactElement[] {
  return deck.slides.map((slide, index) => {
    const Template = templateMap[slide.type];
    return <Template key={index} content={slide.content} slideNumber={index + 1} />;
  });
}
```

### 3.3 New Deck File Structure

```
decks/[client-name]/
  content.ts    # DeckDefinition with all slide content
  theme.ts      # Theme overrides (unchanged)
  deck.tsx      # Just: export default renderDeck(deckContent)
```

---

## Phase 4: Claude Workflow (Updated CLAUDE.md)

When creating a new deck, Claude will:

1. **Create folder**: `decks/[client-slug]/`

2. **Create theme.ts**:
```typescript
import { createTheme } from "~/lib/theme";
export const theme = createTheme({
  primary: "#[brand-color]",
  primaryLight: "#[lighter-variant]",
  clientLogo: "/logos/[client].png",
  clientName: "[Client Name]",
});
```

3. **Create content.ts** using typed schema - copy from template, customize content

4. **Create deck.tsx**:
```typescript
import { renderDeck } from '~/lib/renderDeck';
import { deckContent } from './content';
export default renderDeck(deckContent);
```

**Benefits**:
- TypeScript catches errors immediately
- No layout code to write - just fill in content
- Consistent spacing, animations, theming across all decks
- ~15 minutes to create a new deck

---

## Phase 5: Monetization (Future - Separate Discussion)

Not included in this plan. When ready, we'll discuss approach separately since:
- User has existing Supabase setup
- Architecture decisions need dedicated planning
- More complex scope requires its own review

---

## Implementation Order

### Batch 1: Foundation
1. Create `public/robots.txt`
2. Fix hardcoded colors in 4 component files (DeckPresentation, Section, OverlappingShowcase, Carousel)
3. Fix Label.tsx to use Tailwind classes directly instead of CSS variables

### Batch 2: Templates (All 8)
4. Create `src/templates/types.ts` with all interfaces
5. Create all 8 slide templates:
   - HeroSlide
   - ProblemSlide
   - PillarsSlide
   - SuccessFactorsSlide
   - PricingSlide
   - TimelineSlide
   - PortfolioSlide
   - CTASlide
6. Create `src/templates/index.ts` export

### Batch 3: Content System
7. Create `src/lib/deckSchema.ts`
8. Create `src/lib/renderDeck.tsx`

### Batch 4: Full Migration
9. Convert `saas-sales` deck to content-driven format (delete old slide files)
10. Convert `ria-catalyst` deck to content-driven format (delete old slide files)
11. Convert `saas-sales-new` deck if it exists

### Batch 5: Documentation
12. Update `.claude/CLAUDE.md` with new deck creation workflow
13. Add example content.ts template for quick copying

**Decision**: Full migration - all decks will use content-driven format. No legacy JSX deck support needed.

---

## Key Files

**To Create**:
- `public/robots.txt`
- `src/templates/types.ts`
- `src/templates/slides/*.tsx` (8 files)
- `src/templates/index.ts`
- `src/lib/deckSchema.ts`
- `src/lib/renderDeck.tsx`

**To Modify**:
- `src/components/DeckPresentation.tsx` (fix hardcoded colors)
- `src/components/slide-components/Section.tsx` (fix hardcoded colors)
- `src/components/slide-components/OverlappingShowcase.tsx` (fix hardcoded colors)
- `src/components/slide-components/Carousel.tsx` (fix hardcoded colors)
- `src/components/slide-components/Label.tsx` (fix typography to use Tailwind classes directly)
- `.claude/CLAUDE.md` (update workflow)

**To Convert**:
- `decks/saas-sales/` → content-driven
- `decks/ria-catalyst/` → content-driven

---

## Verification

After implementation:
1. Run `npm run build` - should complete without errors
2. View existing decks at `/saas-sales` and `/ria-catalyst` - should render identically
3. Create a test deck using new content-driven approach
4. Verify robots.txt at `/robots.txt`
5. Run PDF export to verify templates work with puppeteer
