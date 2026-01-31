# Pitch Decks Project

## Overview
An interactive pitch deck presentation platform built with Next.js for Digital Nova Studio. The system enables rapid creation of custom, animated sales decks from discovery call transcripts and client information.

**Primary Use Case**: Take a discovery call transcript → extract key information → ask clarifying questions → build a fully custom sales deck.

---

## CRITICAL RULES FOR AI

### Permission Requirements
1. **NEVER edit existing slides or components without explicit permission** - Always ask before modifying any file in `src/templates/slides/` or `src/components/slide-components/`
2. **NEVER create new slide templates** unless no existing slide type fits the need AND you have permission
3. **Build new slides using existing components first** - Only create new components if no viable component exists

### Before Building Any Deck
1. **Require company logo** - Ask for logo file if not provided. Save to `/public/logos/[client-slug].png`
2. **Require brand colors** - Ask for primary brand color (hex) if not provided
3. **Verify all assets** before starting

### Deck File Structure Rules
- **NEVER hardcode slide content in `deck.tsx`** - This file must ONLY contain the 4-line renderDeck pattern:
  ```ts
  import { renderDeck } from "~/lib/renderDeck";
  import { deckContent } from "./content";
  export default renderDeck(deckContent);
  ```
- **ALL slide content goes in `content.ts`** using the `DeckDefinition` schema
- If you need a custom slide that doesn't fit existing templates, ask for permission to create a new template — don't build it inline in deck.tsx

### Quality Requirements
- **Always run `npm run build`** after creating a deck to verify it compiles
- Fix any build errors before considering the deck complete

---

## Deck Building Workflow

### Step 1: Intake & Discovery
When given a discovery call transcript or client brief, extract:

**Company Information**
- [ ] Company name (for folder slug and branding)
- [ ] Logo file (PNG/WebP preferred)
- [ ] Primary brand color (hex code)
- [ ] Secondary color if applicable
- [ ] Contact person name and title

**Pain Points & Challenges**
- [ ] Current problems they're facing
- [ ] What's not working today
- [ ] Bottlenecks or frustrations

**Goals & Opportunities**
- [ ] What success looks like
- [ ] Growth targets or metrics
- [ ] Timeline expectations

**Solution & Deliverables**
- [ ] What we're proposing to build/do
- [ ] Key features or phases
- [ ] Implementation approach

**Pricing & Timeline**
- [ ] Budget signals or constraints
- [ ] Pricing tiers (if offering options)
- [ ] Project timeline/phases

### Step 2: Clarifying Questions
If any critical information is missing, ask before building:
- "What is the client's primary brand color?"
- "Do you have their logo file?"
- "What pricing tiers should I include?"
- "Are there specific pain points to emphasize?"
- "What's the primary call-to-action?"

### Step 3: Select Slides
**IMPORTANT: Don't default to the same deck structure every time.** Choose slides based on the specific client's story, pain points, and what will resonate most.

**Core slides (usually needed):**
| Slide Type | Purpose | When to Use |
|------------|---------|-------------|
| `hero` | Opening with branding | Always first |
| `problem` | Current situation/pain | When they have clear pain points |
| `opportunity` | The upside | When there's strong ROI story or growth potential |
| `pricing` | Investment options | When presenting pricing tiers |
| `cta` | Next steps + contact | Always last |

**Story-building slides (choose based on narrative):**
| Slide Type | Purpose | When to Use |
|------------|---------|-------------|
| `beforeAfter` | Current vs future state | Dramatic transformation stories |
| `processFlow` | How your system works | Showing methodology with steps |
| `comparison` | Feature matrix (you vs competitors) | Competitive positioning |
| `successFactors` | Why our approach works | When methodology/expertise is a differentiator |
| `pillars` | Core offerings overview | When showcasing capabilities or service lines |
| `portfolio` | Before/after, case studies | When visual proof/credibility matters |
| `deliverables` | What we'll build | When scope clarity is important |
| `growthEngine` | Detailed two-panel breakdown | When showing strategy depth (website + ads, etc.) |
| `valueStack` | Build up deliverables + totals | Single package pricing (alternative to tiers) |
| `pricingWithAddons` | Base package + add-ons grid | Base package with upsells/optional extras |
| `roi` | Break-even math with big number | When client value is clear (SaaS, B2B) |
| `timeline` | Project roadmap | When timing/phases matter to the client |

**Example deck structures:**

*SaaS with clear ROI (like Veterans Benefit Software):*
hero → problem → opportunity (with ROI callout) → deliverables → pricing → timeline → cta

*Agency services pitch:*
hero → problem → pillars → portfolio → pricing → cta

*Technical implementation:*
hero → problem → deliverables → growthEngine → timeline → pricing → cta

### Step 4: Build the Deck
1. Create folder: `decks/[client-slug]/`
2. Create `theme.ts` with brand colors
3. Create `content.ts` with slide content
4. Create `deck.tsx` (just 4 lines)
5. Add logo to `/public/logos/`
6. Run `npm run build` to verify

### Step 5: Verify
- [ ] Build passes without errors
- [ ] All slides render correctly at `/[client-slug]`
- [ ] Logo displays properly
- [ ] Colors match brand

---

## Image Assets

### Directory Structure
```
public/images/
├── blue/       # Blue-tinted abstract images (7 images)
├── film/       # Film/cinematic style images (3 images)
└── neutral/    # Neutral/grayscale images (5 images)
```

### Color Matching Rules
Match images to the deck's primary brand color:
- **Blue primary** → Use `/images/blue/`
- **Orange primary** → Use `/images/orange/` (if exists)
- **Pink primary** → Use `/images/pink/` (if exists)
- **etc.**

**If no matching color directory exists** → Use `/images/neutral/` or `/images/film/`

Current directories: `blue`, `film`, `neutral`, `orange`

### Usage in Content
```ts
heroImage: "/images/blue/blue-7.jpg",
sideImage: "/images/blue/blue-4.jpg",
```

---

## Slide Templates Reference

### 1. HeroSlide
**Location**: `src/templates/slides/opening/HeroSlide.tsx`
**Purpose**: Opening slide with client branding and title

**Best Used For**:
- First slide of every deck
- Establishing brand presence
- Setting the tone

**Props** (`HeroSlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| title | string | Yes | Main headline |
| subtitle | string | Yes | Secondary headline |
| tagline | string | No | Additional text below subtitle |
| heroImage | string | No | Path to right-side image |
| preparedFor | string | No | Client name (falls back to theme.clientName) |

**Example**:
```ts
{
  type: "hero",
  content: {
    title: "Growth Proposal for Acme Corp",
    subtitle: "Prepared for John Smith",
    heroImage: "/images/blue/blue-7.jpg",
  },
}
```

---

### 2. ProblemSlide
**Location**: `src/templates/slides/problem-solution/ProblemSlide.tsx`
**Purpose**: Highlight pain points and current challenges

**Best Used For**:
- Showing you understand their situation
- Building empathy before presenting solution
- Setting up the "why" for your proposal

**Props** (`ProblemSlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label (e.g., "WHERE YOU ARE") |
| title | string | Yes | Main title |
| subtitle | string | No | Supporting description |
| challenges | array | Yes | List of pain points with icon and optional subtext |
| sideImage | string | No | Right-side image |
| statsOverlay | object | No | Stats badge on the image |

**Example**:
```ts
{
  type: "problem",
  content: {
    label: "YOUR SITUATION",
    title: "Current Challenges",
    subtitle: "You've built something great. Now let's scale it.",
    challenges: [
      { text: "No marketing system", subtext: "Growth only happens manually", icon: "Target" },
      { text: "Founder-led sales", subtext: "You are the bottleneck", icon: "Users" },
    ],
    sideImage: "/images/blue/blue-4.jpg",
    statsOverlay: { label: "Goal", value: "Build the engine" },
  },
}
```

---

### 3. OpportunitySlide
**Location**: `src/templates/slides/problem-solution/OpportunitySlide.tsx`
**Purpose**: Show the upside and what's possible

**Best Used For**:
- Transitioning from problem to solution
- Building excitement about potential
- Highlighting ROI or key benefits

**Props** (`OpportunitySlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label (e.g., "THE UPSIDE") |
| title | string | Yes | Main title |
| subtitle | string | No | Supporting description |
| opportunities | array | Yes | 3 opportunity cards with icon, factor, result |
| callout | object | No | Key insight callout at bottom |

**Example**:
```ts
{
  type: "opportunity",
  content: {
    label: "THE UPSIDE",
    title: "THE OPPORTUNITY",
    opportunities: [
      { icon: "Users", factor: "Proven Demand", result: "Your product works, people want it." },
      { icon: "Target", factor: "Infrastructure Gap", result: "Just need the systems." },
      { icon: "TrendingUp", factor: "Predictable Growth", result: "Stop relying on referrals." },
    ],
    callout: {
      icon: "DollarSign",
      title: "One customer pays for this entire engagement.",
      subtitle: "The math works in your favor.",
    },
  },
}
```

---

### 4. SuccessFactorsSlide
**Location**: `src/templates/slides/problem-solution/SuccessFactorsSlide.tsx`
**Purpose**: Explain why your approach works

**Best Used For**:
- Differentiating your methodology
- Building credibility
- Explaining your unique approach

**Props** (`SuccessFactorsSlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label |
| title | string | Yes | Main title |
| subtitle | string | No | Supporting description |
| factors | array | Yes | Factor → Result pairs |
| differentiator | object | No | Key differentiator statement |

---

### 5. DeliverablesSlide
**Location**: `src/templates/slides/offering/DeliverablesSlide.tsx`
**Purpose**: Show what you'll build/deliver

**Best Used For**:
- Concrete project scope
- Numbered deliverables or phases
- Showing implementation options

**Props** (`DeliverablesSlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label (e.g., "THE PLAN") |
| title | string | Yes | Main title |
| subtitle | string | No | Supporting description |
| deliverables | array | Yes | Numbered items with title, icon, and bullet items |
| options | array | No | Implementation options (e.g., "I build" vs "handoff") |

**Example**:
```ts
{
  type: "deliverables",
  content: {
    label: "THE PLAN",
    title: "WHAT I'D BUILD FOR YOU",
    deliverables: [
      { number: "01", title: "Website & Funnel", icon: "Globe", items: ["SEO foundation", "Conversion pages"] },
      { number: "02", title: "Demo Booking", icon: "Calendar", items: ["Calendly integration", "CRM setup"] },
    ],
  },
}
```

---

### 6. GrowthEngineSlide
**Location**: `src/templates/slides/offering/GrowthEngineSlide.tsx`
**Purpose**: Detailed two-panel breakdown

**Best Used For**:
- Showing two complementary strategies
- Detailed technical breakdowns
- Website structure + marketing strategy

**Props** (`GrowthEngineSlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label |
| title | string | Yes | Main title |
| subtitle | string | No | Supporting description |
| leftPanel | object | Yes | Left panel content with items |
| rightPanel | object | Yes | Right panel content with items |

---

### 7. PillarsSlide
**Location**: `src/templates/slides/offering/PillarsSlide.tsx`
**Purpose**: Core offerings or approach pillars

**Best Used For**:
- Service overview (3 main pillars)
- Core capabilities
- Methodology breakdown

**Props** (`PillarsSlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label |
| title | string | Yes | Main title |
| subtitle | string | No | Supporting description |
| pillars | array | Yes | 3 pillar cards with title, description, icon |
| profile | object | No | Team member profile |
| testimonial | object | No | Client testimonial |

---

### 8. PricingSlide
**Location**: `src/templates/slides/pricing/PricingSlide.tsx`
**Purpose**: Investment options and tiers

**Best Used For**:
- Presenting pricing options
- Good/better/best tiers
- Highlighting recommended option

**Props** (`PricingSlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label (e.g., "INVESTMENT") |
| title | string | Yes | Main title |
| tiers | array | Yes | Pricing tiers with features |
| note | string | No | Footer note |

**Tier Props**:
- `title`, `subtitle`, `price`, `priceLabel`, `monthly`, `features[]`, `recommended`

**Example**:
```ts
{
  type: "pricing",
  content: {
    label: "INVESTMENT",
    title: "CHOOSE YOUR PATH",
    tiers: [
      { title: "STARTER", subtitle: "Basic package", price: "$2,500", features: ["Feature 1"] },
      { title: "GROWTH", subtitle: "Recommended", price: "$5,000", features: ["All Starter features", "More"], recommended: true },
    ],
    note: "All plans include onboarding call",
  },
}
```

---

### 9. PricingWithAddonsSlide
**Location**: `src/templates/slides/pricing/PricingWithAddonsSlide.tsx`
**Purpose**: Base package with optional add-ons grid

**Best Used For**:
- Single base package with upsells
- Base + featured add-on + smaller add-ons layout
- Service pricing with optional extras

**Props** (`PricingWithAddonsSlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label (e.g., "INVESTMENT") |
| title | string | Yes | Main title |
| basePackage | object | Yes | Main package: label, title, description, price, priceLabel, features[] |
| addOns | object | No | Optional add-ons section |
| note | string | No | Footer note |

**Add-ons Props**:
- `featured`: Large add-on card with icon, title, subtitle, price, priceLabel, monthly, features[]
- `items`: Array of smaller add-ons with name, description, price

**Example**:
```ts
{
  type: "pricingWithAddons",
  content: {
    label: "INVESTMENT",
    title: "Pricing",
    basePackage: {
      label: "BASE PACKAGE",
      title: "Website Redesign",
      description: "Everything you need to convert visitors.",
      price: "$5,000",
      priceLabel: "One-time",
      features: ["Feature 1", "Feature 2"],
    },
    addOns: {
      featured: {
        icon: "Target",
        title: "Paid Ads Setup",
        subtitle: "Google or Meta campaigns",
        price: "$2,500",
        priceLabel: "setup",
        monthly: "$1,500/mo",
        features: ["Ad feature 1", "Ad feature 2"],
      },
      items: [
        { name: "Blog Setup", description: "SEO content", price: "$500" },
        { name: "Google Business", description: "Local SEO", price: "$250" },
      ],
    },
    note: "Footer note here",
  },
}
```

---

### 10. TimelineSlide
**Location**: `src/templates/slides/pricing/TimelineSlide.tsx`
**Purpose**: Project timeline and phases

**Best Used For**:
- Project roadmap
- Implementation phases
- Setting expectations

**Props** (`TimelineSlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label |
| title | string | Yes | Main title |
| subtitle | string | No | Supporting description |
| headerAlign | "center" \| "left" | No | Header alignment |
| steps | array | Yes | Timeline steps |
| layout | "arrow" \| "grid" | No | Layout style (arrow for 3 steps, grid for 4) |
| note | object | No | Footer note with highlight |

---

### 11. PortfolioSlide
**Location**: `src/templates/slides/social-proof/PortfolioSlide.tsx`
**Purpose**: Showcase work/portfolio

**Best Used For**:
- Before/after comparisons
- Project showcases
- Visual credibility

---

### 12. BeforeAfterSlide
**Location**: `src/templates/slides/problem-solution/BeforeAfterSlide.tsx`
**Purpose**: Dramatic before/after comparison with red (before) and primary (after) panels

**Best Used For**:
- Showing transformation
- Current state vs future state
- Problem → Solution visualization

**Props** (`BeforeAfterSlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label |
| title | string | Yes | Main title |
| subtitle | string | No | Supporting description |
| before | object | Yes | Left panel (red): label, title, highlight word, items[] |
| after | object | Yes | Right panel (primary): label, title, highlight word, items[] |

**Example**:
```ts
{
  type: "beforeAfter",
  content: {
    label: "THE TRANSFORMATION",
    title: "From Bottleneck to Autopilot",
    before: {
      label: "Where You Are Now",
      title: "Growth Depends on You",
      highlight: "You",
      items: ["Every lead comes from word of mouth", "No system to generate leads"],
    },
    after: {
      label: "Where We're Going",
      title: "Growth Runs on Autopilot",
      highlight: "Autopilot",
      items: ["Leads come in while you sleep", "Automated nurture → booked demos"],
    },
  },
}
```

---

### 13. ProcessFlowSlide
**Location**: `src/templates/slides/offering/ProcessFlowSlide.tsx`
**Purpose**: Vertical process steps with connector line and optional image

**Best Used For**:
- Showing how your system works
- Step-by-step methodology
- Implementation flow

**Props** (`ProcessFlowSlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label |
| title | string | Yes | Main title |
| subtitle | string | No | Supporting description |
| steps | array | Yes | Steps with icon, title, description |
| sideImage | string | No | Right-side image |

**Example**:
```ts
{
  type: "processFlow",
  content: {
    label: "THE SYSTEM",
    title: "How It Works",
    steps: [
      { icon: "Target", title: "We Find Your Customers", description: "Targeted ads reach your ICP" },
      { icon: "Video", title: "Content Hooks Them", description: "Testimonial-style creative" },
      { icon: "Globe", title: "Landing Page Converts", description: "B2B-focused messaging" },
      { icon: "Settings", title: "Automation Nurtures", description: "CRM sequences follow up" },
    ],
    sideImage: "/images/blue/blue-3.jpg",
  },
}
```

---

### 14. ComparisonSlide
**Location**: `src/templates/slides/problem-solution/ComparisonSlide.tsx`
**Purpose**: Feature comparison matrix (you vs competitors)

**Best Used For**:
- Competitive positioning
- Feature comparisons
- Why choose us

**Props** (`ComparisonSlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label |
| title | string | Yes | Main title |
| subtitle | string | No | Supporting description |
| columns | array | Yes | Column headers with name and highlighted flag |
| features | array | Yes | Feature rows with boolean values for each column |
| footnote | string | No | Bottom note |

**Example**:
```ts
{
  type: "comparison",
  content: {
    label: "THE COMPETITION",
    title: "Why They'll Choose You",
    columns: [
      { name: "Competitor A" },
      { name: "Competitor B" },
      { name: "Your Product", highlighted: true },
    ],
    features: [
      { feature: "All-in-one platform", values: [false, false, true] },
      { feature: "AI-powered tools", values: [false, true, true] },
      { feature: "Affordable pricing", values: [true, false, true] },
    ],
    footnote: "Your product is already better — we just need to get it in front of the right people.",
  },
}
```

---

### 15. ValueStackSlide
**Location**: `src/templates/slides/pricing/ValueStackSlide.tsx`
**Purpose**: Build up deliverables with totals (alternative to pricing tiers)

**Best Used For**:
- Single package pricing
- Showing everything included
- Value visualization

**Props** (`ValueStackSlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label |
| title | string | Yes | Main title |
| subtitle | string | No | Supporting description |
| items | array | Yes | Stack items with icon and text |
| totals | array | No | Price totals (label + value pairs) |
| note | string | No | Footer note |

**Example**:
```ts
{
  type: "valueStack",
  content: {
    label: "EVERYTHING INCLUDED",
    title: "The Full Package",
    items: [
      { icon: "Globe", text: "Landing Page Design & Development" },
      { icon: "Video", text: "Video Ad Creative Production" },
      { icon: "Settings", text: "CRM Setup & Automation Flows" },
      { icon: "Target", text: "Ad Campaign Build & Structure" },
    ],
    totals: [
      { label: "One-Time Setup", value: "$2,500" },
      { label: "Monthly Management", value: "$1,500" },
      { label: "Ad Spend", value: "$1,500" },
    ],
  },
}
```

---

### 16. ROISlide
**Location**: `src/templates/slides/pricing/ROISlide.tsx`
**Purpose**: Show the math / risk reversal with big metric

**Best Used For**:
- ROI calculations
- Break-even analysis
- Risk reversal / guarantees

**Props** (`ROISlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label |
| title | string | Yes | Main title |
| description | string | Yes | Main description text |
| highlight | string | No | Word/phrase to highlight in primary color |
| benefits | array | Yes | 4 benefit cards (2x2 grid) with icon, title, description |
| metric | object | Yes | Big number: value, label, subtext |

**Example**:
```ts
{
  type: "roi",
  content: {
    label: "ZERO RISK",
    title: "The Math Works in Your Favor",
    description: "At $5,000 per client, you only need 1 new customer to cover our entire fee. Everything after that is profit.",
    highlight: "1 new customer",
    benefits: [
      { icon: "Shield", title: "No Long-Term Contract", description: "Month-to-month after setup" },
      { icon: "Zap", title: "Fast Results", description: "Ads live within 4 weeks" },
      { icon: "Clock", title: "Your Time Protected", description: "We handle everything" },
      { icon: "TrendingUp", title: "Scalable System", description: "Increase budget as you grow" },
    ],
    metric: {
      value: "1",
      label: "customer to break even",
      subtext: "Then it's pure ROI",
    },
  },
}
```

---

### 17. CTASlide
**Location**: `src/templates/slides/closing/CTASlide.tsx`
**Purpose**: Call to action and contact info

**Best Used For**:
- Final slide of every deck
- Contact information
- Next steps

**Props** (`CTASlideContent`):
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| label | string | Yes | Section label (e.g., "LET'S GO") |
| title | string | Yes | Main title |
| subtitle | string | No | CTA text |
| ctaButton | object | No | Button with text, href, icon |
| profile | object | No | Your profile (image, name, title) |
| contactItems | array | No | Contact methods (email, phone, etc.) |
| sideImage | string | No | Right-side image |

**Example**:
```ts
{
  type: "cta",
  content: {
    label: "LET'S GO",
    title: "NEXT STEPS",
    profile: { image: "/joshua-duncan.png", name: "Josh Duncan", title: "Founder, DigitalNova Studio" },
    contactItems: [
      { icon: "Mail", text: "josh@digitalnovastudio.com", href: "mailto:josh@digitalnovastudio.com" },
      { icon: "Globe", text: "digitalnovastudio.com", href: "https://digitalnovastudio.com" },
    ],
    sideImage: "/images/blue/blue-2.jpg",
  },
}
```

---

## Component Library Reference

### Typography Components

#### Heading
**Location**: `src/components/slide-components/typography/Heading.tsx`
**Purpose**: All headings with consistent sizing

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| level | "h1"-"h6" | required | Heading size |
| animation | string | "none" | fade, slideUp, slideDown, slideLeft, slideRight, none |
| delay | number | 0 | Animation delay in seconds |
| className | string | "" | Additional Tailwind classes |

**Sizes**:
- h1: 60px, font-light
- h2: 48px, font-bold
- h3: 30px, font-bold
- h4: 24px, font-semibold
- h5: 20px, font-semibold
- h6: 18px, font-semibold

#### Body
**Location**: `src/components/slide-components/typography/Body.tsx`
**Purpose**: All body text

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | "xl" \| "lg" \| "base" \| "sm" \| "xs" | "base" | Text size |
| as | "p" \| "span" \| "div" | "p" | HTML element |
| animation | string | "none" | Animation type |
| delay | number | 0 | Animation delay |

#### Label
**Location**: `src/components/slide-components/typography/Label.tsx`
**Purpose**: Section labels, eyebrows, badges

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| uppercase | boolean | true | Uppercase text |
| className | string | "" | Additional classes |

### Layout Components

#### Box
**Location**: `src/components/slide-components/layout/Box.tsx`
**Purpose**: Animated container for any content

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animation | string | "fade" | Animation type |
| delay | number | 0 | Animation delay |
| hoverEffect | "highlight" \| "lift" \| "none" | "none" | Hover interaction |
| className | string | "" | Additional classes |

#### Grid
**Location**: `src/components/slide-components/layout/Grid.tsx`
**Purpose**: Responsive grid layouts

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| cols | 1 \| 2 \| 3 \| 4 | 3 | Number of columns |
| gap | number | 6 | Gap between items |
| animation | "fade" \| "stagger" \| "none" | "fade" | Animation |

#### Section
**Location**: `src/components/slide-components/layout/Section.tsx`
**Purpose**: Content sections with background styling

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| background | "transparent" \| "light" \| "dark" \| "gradient" | "transparent" | Background style |

### Composite Components

#### PageHeader
**Location**: `src/components/slide-components/composite/PageHeader.tsx`
**Purpose**: Consistent slide headers with label, title, subtitle

#### Testimonial
**Location**: `src/components/slide-components/composite/Testimonial.tsx`
**Purpose**: Client testimonials with quote and attribution

### Card Components

#### FeatureCard
**Location**: `src/components/slide-components/cards/FeatureCard.tsx`
**Purpose**: Feature highlight cards

#### FeatureRow
**Location**: `src/components/slide-components/cards/FeatureRow.tsx`
**Purpose**: Horizontal feature items

#### ProcessStep
**Location**: `src/components/slide-components/cards/ProcessStep.tsx`
**Purpose**: Numbered process steps

#### CheckListItem
**Location**: `src/components/slide-components/cards/CheckListItem.tsx`
**Purpose**: Checklist items with icons

### Media Components

#### Logo
**Location**: `src/components/slide-components/media/Logo.tsx`
**Purpose**: Logo display with animation

#### Carousel
**Location**: `src/components/slide-components/media/Carousel.tsx`
**Purpose**: Image carousels

#### OverlappingShowcase
**Location**: `src/components/slide-components/media/OverlappingShowcase.tsx`
**Purpose**: Overlapping image displays

---

## Available Icons

Use lucide-react icon names as strings. Common icons:

**Navigation & Actions**: `ArrowRight`, `Check`, `ChevronRight`, `Plus`, `Search`, `Send`, `Share`

**Business**: `Briefcase`, `Building`, `Calendar`, `CreditCard`, `DollarSign`, `Target`, `TrendingUp`, `TrendingDown`

**Communication**: `Mail`, `MessageSquare`, `Phone`, `Video`

**Data**: `BarChart`, `Database`, `LineChart`, `PieChart`

**Tech**: `Code`, `Globe`, `Layers`, `Layout`, `Monitor`, `Settings`, `Wifi`

**People**: `Users`, `UserX`

**Concepts**: `Award`, `Brain`, `Gift`, `Heart`, `Lightbulb`, `Lock`, `Rocket`, `Shield`, `Sparkles`, `Star`, `ThumbsUp`, `Zap`

**Documents**: `BookOpen`, `FileText`

**Social**: `Linkedin`

See `src/templates/types.ts` for the complete list.

---

## File Structure

### Creating a New Deck
```
decks/[client-slug]/
├── content.ts    # Slide content (DeckDefinition)
├── deck.tsx      # Renders slides (4 lines)
└── theme.ts      # Brand colors and logo
```

### Template Files
```ts
// theme.ts
import { createTheme } from "~/lib/theme";
export const theme = createTheme({
  primary: "#3b82f6",        // Brand color
  primaryLight: "#60a5fa",   // Lighter variant
  clientLogo: "/logos/client.png",
  clientName: "Client Name",
});

// deck.tsx
import { renderDeck } from "~/lib/renderDeck";
import { deckContent } from "./content";
export default renderDeck(deckContent);

// content.ts - see ria-catalyst/content.ts for full example
```

---

## Theming System

### Theme Properties
```ts
interface DeckTheme {
  primary: string;           // Accent color
  primaryLight?: string;     // Lighter variant
  slideBg: {
    from: string;            // Gradient start (top-left)
    to: string;              // Gradient end (bottom-right)
  };
  outerBg: string;           // Background outside slide
  clientLogo?: string;       // Path to logo
  clientName?: string;       // Client name
}
```

**Note:** Slide backgrounds use a subtle diagonal gradient (bright top-left to darker bottom-right). Make sure `from` is lighter and `to` is darker. Example: `from: "#1a2942"` → `to: "#0c1929"` for navy.

### Theme-Aware CSS Classes
- Primary: `text-primary`, `bg-primary`, `border-primary`
- Backgrounds: `bg-neutral-800`, `bg-neutral-900`
- Text: `text-gray-300` (light), `text-gray-400` (medium), `text-gray-500` (muted)

---

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production (ALWAYS run to verify)
npm run lint     # Check for errors
```

---

## Quick Reference: Deck Creation Checklist

- [ ] Client logo obtained and saved to `/public/logos/`
- [ ] Brand color(s) identified
- [ ] Folder created: `decks/[client-slug]/`
- [ ] `theme.ts` created with brand colors
- [ ] `content.ts` created with all slides
- [ ] `deck.tsx` created (4 lines)
- [ ] Images selected from `/public/images/[color]/`
- [ ] `npm run build` passes
- [ ] Deck renders correctly at `/[client-slug]`
- [ ] **Add deck to directory** in `src/app/page.tsx` (add to `decks` array)

---

## Statement of Work (SOW) System

### Overview
SOWs are project-specific documents that outline deliverables, timeline, and payment schedule. They live alongside decks and share the same theme for brand consistency.

**Key Points:**
- SOWs are governed by the DigitalNova Service Agreement (separate document signed via Jotform)
- SOWs don't need signatures - they're reference documents
- Each SOW lives in the same folder as its deck and shares the theme
- Accessible at `/[client-slug]/sow`

### SOW File Structure
```
decks/[client-slug]/
├── content.ts      # Deck content
├── deck.tsx        # Deck route → /client-slug
├── sow-content.ts  # SOW content (optional)
└── theme.ts        # Shared theme
```

### When to Create a SOW
Create a SOW when:
- Client has approved the proposal and is ready to move forward
- You need to formalize scope, timeline, and payment terms
- The project has specifics beyond what's in the deck (start date, payment schedule, out-of-scope items)

### SOW Schema Reference

**Location**: `src/lib/sowSchema.ts`

```ts
interface SOWDefinition {
  projectTitle: string;           // e.g., "Website & Lead Generation System"

  client: {
    name: string;                 // Company name
    contactName?: string;         // Primary contact
    contactEmail?: string;        // Contact email
  };

  overview: string;               // 2-3 sentence project summary
  startDate: string;              // e.g., "February 17, 2025"
  estimatedCompletion?: string;   // e.g., "March 21, 2025"

  deliverables: Array<{
    title: string;                // e.g., "Professional Website (5 Pages)"
    description?: string;         // Brief description
    items?: string[];             // Bullet points of what's included
  }>;

  timeline?: Array<{
    title: string;                // e.g., "Week 1: Discovery & Strategy"
    description?: string;         // What happens in this phase
    payment?: string;             // e.g., "50% deposit due"
  }>;

  payments: Array<{
    description: string;          // e.g., "Setup Fee (50% deposit)"
    amount: string;               // e.g., "$3,250"
    due: string;                  // e.g., "Upon signing"
  }>;

  totalInvestment: string;        // e.g., "$6,500 setup + $2,100/mo"

  outOfScope?: string[];          // Items explicitly NOT included
  assumptions?: string[];         // What we're assuming to be true
  notes?: string;                 // Additional context
}
```

### SOW Building Workflow

#### Step 1: Gather Information
When creating a SOW, you need:

**From the deck (auto-pull where possible):**
- [ ] Client name (from `theme.clientName`)
- [ ] Deliverables (from deliverables/pricing slides)
- [ ] Timeline (from timeline slide)
- [ ] Pricing (from pricing slide)

**Need to ask:**
- [ ] Project start date
- [ ] Payment schedule (e.g., 50/50, milestone-based)
- [ ] Items explicitly out of scope
- [ ] Any custom terms agreed outside the deck
- [ ] Assumptions about client responsibilities

#### Step 2: Clarifying Questions
Before building a SOW, ask:
- "What is the project start date?"
- "What payment schedule did you agree on? (50% deposit / 50% at launch, or something else?)"
- "Are there any items explicitly out of scope we should document?"
- "Any special terms or conditions agreed in the call?"

#### Step 3: Create the SOW
1. Create `sow-content.ts` in the deck folder
2. Use the `SOWDefinition` schema
3. Pull content from deck where applicable
4. Add project-specific details
5. Run `npm run build` to verify

#### Step 4: Verify
- [ ] Build passes
- [ ] SOW renders at `/[client-slug]/sow`
- [ ] Theme matches the deck
- [ ] All sections are complete
- [ ] Print/PDF works (click Print button)

### SOW Template

```ts
// sow-content.ts
import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "[Project Name]",

  client: {
    name: "[Company Name]",
    contactName: "[Contact Name]",
  },

  overview: "[2-3 sentence description of what we're building and why]",

  startDate: "[Month Day, Year]",
  estimatedCompletion: "[Month Day, Year]",

  deliverables: [
    {
      title: "[Deliverable 1]",
      description: "[Brief description]",
      items: [
        "[Item 1]",
        "[Item 2]",
      ],
    },
    // ... more deliverables
  ],

  timeline: [
    {
      title: "[Phase 1]",
      description: "[What happens]",
      payment: "[Payment due, if any]",
    },
    // ... more phases
  ],

  payments: [
    {
      description: "[Payment description]",
      amount: "$X,XXX",
      due: "[When due]",
    },
    // ... more payments
  ],

  totalInvestment: "$X,XXX + $X,XXX/mo",

  outOfScope: [
    "[Item not included]",
    // ...
  ],

  assumptions: [
    "[What we're assuming]",
    // ...
  ],

  notes: "[Any additional context]",
};
```

### Common Out of Scope Items
Reference these when building SOWs:
- Ad spend (paid directly to platform)
- Content writing beyond website copy (blog posts, whitepapers)
- Video production or editing
- Photography or stock photo licensing
- Print materials or offline marketing
- Social media management
- Software development beyond agreed scope
- Third-party software/tool subscriptions
- Domain registration and DNS management (unless specified)

### Common Assumptions
Reference these when building SOWs:
- Client will provide timely feedback within 5 business days
- Client will provide brand assets, logos, and photography as needed
- Client will provide access to necessary accounts (hosting, CRM, ad platforms)
- Two rounds of design revisions are included per the Service Agreement
- Content provided by client is accurate and approved for use
- Project timeline assumes no major scope changes

### PDF Export
The SOW page includes a "Print / Save PDF" button that:
- Opens browser print dialog
- Includes print-optimized styles
- Maintains brand colors (print-color-adjust: exact)
- Keeps sections together (page-break-inside: avoid)

Recommended: Save as PDF using browser print dialog for sharing with clients.

---

## Quick Reference: SOW Creation Checklist

- [ ] Deck already exists for this client
- [ ] Start date confirmed
- [ ] Payment schedule agreed
- [ ] Out of scope items identified
- [ ] `sow-content.ts` created in deck folder
- [ ] `npm run build` passes
- [ ] SOW renders at `/[client-slug]/sow`
- [ ] Print/PDF tested
