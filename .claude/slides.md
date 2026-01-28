# Slide Templates Reference

All slide templates are exported from `~/templates`. Each template accepts a `content` prop with a specific TypeScript interface.

```tsx
import { HeroSlide, ProblemSlide, CTASlide } from "~/templates";
```

---

## Template Overview

| Template | Category | Use For |
|----------|----------|---------|
| `HeroSlide` | Opening | Opening slide with client branding |
| `ProblemSlide` | Problem/Solution | Pain points and challenges |
| `OpportunitySlide` | Problem/Solution | Opportunities and benefits |
| `SuccessFactorsSlide` | Problem/Solution | Why the approach works |
| `DeliverablesSlide` | Offering | What will be built/delivered |
| `PillarsSlide` | Offering | Core offerings or approach |
| `GrowthEngineSlide` | Offering | Detailed breakdown of strategy |
| `PortfolioSlide` | Social Proof | Showcase previous work |
| `PricingSlide` | Pricing | Service tiers and pricing |
| `TimelineSlide` | Pricing | Timeline and next steps |
| `CTASlide` | Closing | Call to action and contact |

---

## Opening Slides

### HeroSlide

Opening slide with client branding, main headline, and optional hero image.

```tsx
<HeroSlide content={{
  title: "Transform Your Digital Presence",
  subtitle: "Strategic Growth for Modern Brands",
  tagline: "From Strategy to Execution",
  heroImage: "/portfolio/hero.png",
  preparedFor: "Acme Corp"
}} />
```

**Content Interface:**
```typescript
interface HeroSlideContent {
  title: string;              // Main headline
  subtitle: string;           // Secondary headline
  tagline?: string;           // Optional tagline below subtitle
  heroImage?: string;         // Path to hero image (right side)
  preparedFor?: string;       // Client name (falls back to theme.clientName)
}
```

---

## Problem/Solution Slides

### ProblemSlide

Highlights pain points with icons and optional side image.

```tsx
<ProblemSlide content={{
  label: "SOUND FAMILIAR?",
  title: "The Challenges You Face",
  challenges: [
    { text: "Low conversion rates", icon: "TrendingDown" },
    { text: "Inconsistent branding", icon: "Target" },
    { text: "Outdated website", icon: "Monitor" },
  ],
  sideImage: "/images/problem.png",
}} slideNumber={2} />
```

**Content Interface:**
```typescript
interface ProblemSlideContent {
  label: string;              // Section label (e.g., "SOUND FAMILIAR?")
  title: string;              // Main title
  subtitle?: string;          // Optional subtitle
  challenges: {
    text: string;
    subtext?: string;         // Additional context
    icon: IconName;
  }[];
  sideImage?: string;         // Optional side image
  statsOverlay?: {            // Optional stats on side image
    label: string;
    value: string;
    subtext?: string;
  };
}
```

---

### OpportunitySlide

Shows opportunities in a flow layout with optional callout.

```tsx
<OpportunitySlide content={{
  label: "THE UPSIDE",
  title: "What's Possible",
  opportunities: [
    { icon: "TrendingUp", factor: "SEO Optimization", result: "3x organic traffic" },
    { icon: "DollarSign", factor: "Conversion Focus", result: "40% more leads" },
  ],
  callout: {
    icon: "Lightbulb",
    title: "Key Insight",
    subtitle: "Small changes compound over time",
  },
}} slideNumber={3} />
```

**Content Interface:**
```typescript
interface OpportunitySlideContent {
  label: string;
  title: string;
  subtitle?: string;
  opportunities: {
    icon: IconName;
    factor: string;
    result: string;
  }[];
  callout?: {
    icon: IconName;
    title: string;
    subtitle: string;
  };
}
```

---

### SuccessFactorsSlide

Explains why the approach works with factor → result format.

```tsx
<SuccessFactorsSlide content={{
  label: "OUR APPROACH",
  title: "Why This Works",
  factors: [
    { factor: "Data-Driven Strategy", result: "Decisions backed by analytics" },
    { factor: "Iterative Design", result: "Continuous improvement" },
  ],
  differentiator: {
    text: "Unlike agencies that just build and leave,",
    highlight: "we optimize for long-term growth",
  },
}} slideNumber={4} />
```

**Content Interface:**
```typescript
interface SuccessFactorsSlideContent {
  label: string;
  title: string;
  subtitle?: string;
  factors: {
    factor: string;
    result: string;
  }[];
  differentiator?: {
    text: string;
    highlight: string;
  };
}
```

---

## Offering Slides

### DeliverablesSlide

What will be built/delivered, organized by numbered phases.

```tsx
<DeliverablesSlide content={{
  label: "THE PLAN",
  title: "What We'll Build",
  deliverables: [
    {
      number: "01",
      title: "Brand Strategy",
      icon: "Target",
      items: ["Brand audit", "Competitive analysis", "Positioning"],
    },
    {
      number: "02",
      title: "Website Design",
      icon: "Layout",
      items: ["UX research", "Wireframes", "Visual design"],
    },
  ],
}} slideNumber={5} />
```

**Content Interface:**
```typescript
interface DeliverablesSlideContent {
  label: string;
  title: string;
  subtitle?: string;
  deliverables: {
    number: string;           // e.g., "01"
    title: string;
    icon: IconName;
    items: string[];
  }[];
  options?: {                 // Optional implementation options
    icon: IconName;
    title: string;
    description: string;
  }[];
}
```

---

### PillarsSlide

Core offerings or approach pillars, with optional profile/testimonial.

```tsx
<PillarsSlide content={{
  label: "THE FULL STACK",
  title: "Three Pillars of Growth",
  pillars: [
    { title: "Strategy", description: "Data-driven planning", icon: "Target" },
    { title: "Design", description: "Beautiful, functional design", icon: "Layout" },
    { title: "Development", description: "Scalable tech solutions", icon: "Code" },
  ],
  testimonial: {
    quote: "They exceeded all expectations",
    name: "Jane Doe",
    role: "CEO",
  },
}} slideNumber={6} />
```

**Content Interface:**
```typescript
interface PillarsSlideContent {
  label: string;
  title: string;
  subtitle?: string;
  pillars: {
    title: string;
    description: string;
    icon: IconName;
  }[];
  profile?: {
    image: string;
    name: string;
    title: string;
    description: string;
  };
  testimonial?: {
    quote: string;
    name: string;
    role?: string;
  };
}
```

---

### GrowthEngineSlide

Detailed two-panel breakdown of strategy.

```tsx
<GrowthEngineSlide content={{
  label: "THE DETAILS",
  title: "Your Growth Engine",
  leftPanel: {
    icon: "Target",
    title: "Acquisition",
    sectionLabel: "Getting Customers",
    items: [
      { icon: "Search", title: "SEO", description: "Organic visibility" },
      { icon: "Mail", title: "Email", description: "Nurture campaigns" },
    ],
  },
  rightPanel: {
    icon: "RefreshCw",
    title: "Retention",
    sectionLabel: "Keeping Customers",
    items: [
      { icon: "Heart", title: "Loyalty", description: "Repeat purchases" },
      { icon: "MessageSquare", title: "Support", description: "Quick responses" },
    ],
  },
}} slideNumber={7} />
```

**Content Interface:**
```typescript
interface GrowthEngineSlideContent {
  label: string;
  title: string;
  subtitle?: string;
  leftPanel: {
    icon: IconName;
    title: string;
    sectionLabel: string;
    items: {
      icon: IconName;
      title: string;
      description: string;
    }[];
  };
  rightPanel: {
    icon: IconName;
    title: string;
    sectionLabel: string;
    items: {
      icon: IconName;
      title: string;
      description: string;
    }[];
  };
}
```

---

## Social Proof Slides

### PortfolioSlide

Showcase previous work with overlapping image pairs.

```tsx
<PortfolioSlide content={{
  label: "PORTFOLIO",
  title: "Our Work",
  items: [
    { id: "1", leftImage: "/brand1.png", rightImage: "/web1.png" },
    { id: "2", leftImage: "/brand2.png", rightImage: "/web2.png" },
  ],
  leftTitle: "Brand",
  rightTitle: "Web",
}} slideNumber={8} />
```

**Content Interface:**
```typescript
interface PortfolioSlideContent {
  label: string;
  title: string;
  subtitle?: string;
  items: {
    id: string;
    leftImage: string;
    rightImage: string;
    leftLabel?: string;
    rightLabel?: string;
  }[];
  leftTitle?: string;
  rightTitle?: string;
}
```

---

## Pricing Slides

### PricingSlide

Service tiers and pricing with optional connectors between tiers.

```tsx
<PricingSlide content={{
  label: "CHOOSE YOUR PATH",
  title: "Investment Options",
  tiers: [
    {
      title: "Starter",
      subtitle: "For new businesses",
      price: "$5,000",
      priceLabel: "one-time",
      features: ["Brand identity", "5-page website", "30-day support"],
    },
    {
      title: "Growth",
      subtitle: "For scaling businesses",
      price: "$10,000",
      features: ["Everything in Starter", "SEO setup", "Analytics"],
      recommended: true,
    },
  ],
  connectorIcons: ["ArrowRight"],
  note: "All packages include hosting setup",
}} slideNumber={9} />
```

**Content Interface:**
```typescript
interface PricingSlideContent {
  label: string;
  title: string;
  tiers: {
    title: string;
    subtitle: string;
    price: string;
    priceLabel?: string;      // e.g., "one-time", "/month"
    monthly?: string;         // Monthly equivalent
    features: string[];
    recommended?: boolean;    // Show "Recommended" badge
  }[];
  connectorIcons?: IconName[]; // Icons between tiers
  note?: string;              // Footer note
}
```

---

### TimelineSlide

Timeline and next steps. Supports arrow layout (3 steps) or grid layout (4 steps).

```tsx
<TimelineSlide content={{
  label: "WHAT HAPPENS NEXT",
  title: "The Process",
  headerAlign: "center",
  layout: "arrow",
  steps: [
    { period: "Week 1", title: "Discovery", icon: "Search", items: ["Kickoff call", "Brand audit"] },
    { period: "Week 2-3", title: "Design", icon: "Layout", items: ["Wireframes", "Visual design"] },
    { period: "Week 4", title: "Launch", icon: "Rocket", items: ["Final review", "Go live"], highlight: true },
  ],
  note: {
    highlight: "Ready to start?",
    text: "Book a call to discuss your project",
  },
}} slideNumber={10} />
```

**Content Interface:**
```typescript
interface TimelineSlideContent {
  label: string;
  title: string;
  subtitle?: string;
  headerAlign?: "center" | "left";
  layout?: "arrow" | "grid";  // arrow = 3 steps with arrows, grid = 4 steps in row
  steps: {
    period: string;           // e.g., "Week 1"
    title: string;
    icon?: IconName;
    items: string[];
    highlight?: boolean;      // Highlight this step
  }[];
  note?: {
    highlight: string;
    text: string;
    subtext?: string;
  };
}
```

---

## Closing Slides

### CTASlide

Call to action with contact info and optional side image.

```tsx
<CTASlide content={{
  label: "QUESTIONS?",
  title: "Let's Talk",
  subtitle: "Schedule a free consultation",
  ctaButton: {
    text: "Book a Call",
    href: "https://calendly.com/...",
    icon: "Calendar",
  },
  profile: {
    image: "/team/john.jpg",
    name: "John Smith",
    title: "Founder",
  },
  contactItems: [
    { icon: "Mail", text: "hello@example.com", href: "mailto:..." },
    { icon: "Phone", text: "(555) 123-4567", href: "tel:..." },
  ],
  sideImage: "/images/cta.png",
}} slideNumber={11} />
```

**Content Interface:**
```typescript
interface CTASlideContent {
  label: string;
  title: string;
  subtitle?: string;
  ctaButton?: {
    text: string;
    href: string;
    icon?: IconName;
  };
  profile?: {
    image: string;
    name: string;
    title: string;
  };
  contactItems?: {
    icon: IconName;
    text: string;
    href: string;
  }[];
  sideImage?: string;
}
```

---

## Available Icons

All icons come from `lucide-react`. The following icon names are typed in `IconName`:

```typescript
type IconName =
  | "MousePointerClick" | "DollarSign" | "TrendingDown" | "TrendingUp"
  | "Calendar" | "UserX" | "Users" | "CheckCircle" | "Check"
  | "Lightbulb" | "Monitor" | "Mail" | "Globe" | "Phone"
  | "ArrowRight" | "Target" | "RefreshCw" | "FileText" | "BookOpen"
  | "Linkedin" | "Zap" | "Shield" | "Star" | "Heart" | "Clock"
  | "Settings" | "Award" | "Rocket" | "Brain" | "MessageSquare"
  | "BarChart" | "PieChart" | "LineChart" | "Database" | "Code"
  | "Layers" | "Layout" | "Briefcase" | "Building" | "CreditCard"
  | "Gift" | "Lock" | "Unlock" | "Search" | "Send" | "Share"
  | "Sparkles" | "ThumbsUp" | "Video" | "Wifi" | "Plus" | "ChevronRight";
```

To add new icons, update `src/templates/types.ts`.

---

## Slide Template Folder Structure

```
src/templates/
├── types.ts                          # All content interfaces
├── index.ts                          # Exports all templates
└── slides/
    ├── opening/
    │   └── HeroSlide.tsx
    ├── problem-solution/
    │   ├── ProblemSlide.tsx
    │   ├── OpportunitySlide.tsx
    │   └── SuccessFactorsSlide.tsx
    ├── offering/
    │   ├── DeliverablesSlide.tsx
    │   ├── PillarsSlide.tsx
    │   └── GrowthEngineSlide.tsx
    ├── social-proof/
    │   └── PortfolioSlide.tsx
    ├── pricing/
    │   ├── PricingSlide.tsx
    │   └── TimelineSlide.tsx
    └── closing/
        └── CTASlide.tsx
```

---

## Creating a New Deck

1. Create folder: `decks/[client-slug]/`

2. Create `theme.ts`:
```tsx
import { createTheme } from "~/lib/theme";

export const theme = createTheme({
  primary: "#6366f1",
  clientLogo: "/logos/client.png",
  clientName: "Client Name",
});
```

3. Create `content.ts`:
```tsx
import type { HeroSlideContent, ProblemSlideContent, CTASlideContent } from "~/templates/types";

export const heroContent: HeroSlideContent = { /* ... */ };
export const problemContent: ProblemSlideContent = { /* ... */ };
export const ctaContent: CTASlideContent = { /* ... */ };
```

4. Create `deck.tsx`:
```tsx
import { HeroSlide, ProblemSlide, CTASlide } from "~/templates";
import { heroContent, problemContent, ctaContent } from "./content";

const slides = [
  <HeroSlide key="hero" content={heroContent} />,
  <ProblemSlide key="problem" content={problemContent} slideNumber={2} />,
  <CTASlide key="cta" content={ctaContent} slideNumber={3} />,
];

export default slides;
```

5. Access at `/[client-slug]`
