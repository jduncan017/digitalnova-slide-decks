# Pitch Decks Project

Next.js platform for Digital Nova Studio. Takes discovery call transcripts → extracts info → builds custom animated sales decks.

---

## CRITICAL RULES

1. **NEVER edit existing slides/components without permission** — ask before modifying `src/templates/slides/` or `src/components/slide-components/`
2. **NEVER create new slide templates** unless no existing type fits AND you have permission
3. **Build using existing components first** — only create new ones if nothing viable exists
4. **NEVER hardcode content in `deck.tsx`** — it must ONLY contain the 4-line renderDeck pattern
5. **ALL slide content goes in `content.ts`** using `DeckDefinition` schema
6. **Always run `npm run build`** after creating/modifying a deck
7. **Always set `clientName`** in `theme.ts` and `client.name` in `sow-content.ts`
8. **Always use the current year** for dates — never assume dates from training data
9. **Require logo and brand color** before building — ask if not provided

---

## Deck Building Workflow

### Step 1: Extract from Discovery Call
- Company name, logo (PNG/WebP), primary brand color (hex), contact person
- Pain points, goals, deliverables, pricing/timeline signals

### Step 2: Clarify Missing Info
Ask before building: brand color? logo file? pricing tiers? pain points to emphasize? CTA?

### Step 3: Select Slides
**Don't default to the same structure every time.** Choose slides that tell this client's story.

**Core slides (usually needed):**
| Type | Purpose | When |
|------|---------|------|
| `hero` | Opening branding | Always first |
| `problem` | Pain points | Clear pain points exist |
| `opportunity` | The upside | Strong ROI/growth story |
| `projections` | Growth trajectory | **Every deck** |
| `pricing` | Investment tiers | Presenting options |
| `cta` | Next steps | Always last |

**Story-building slides (choose per narrative):**
| Type | Purpose | When |
|------|---------|------|
| `beforeAfter` | Current vs future state | Transformation stories |
| `processFlow` | Step-by-step methodology | Showing how system works |
| `comparison` | Feature matrix vs competitors | Competitive positioning |
| `successFactors` | Why our approach works | Methodology differentiator |
| `pillars` | Core offerings (3 pillars) | Service lines overview |
| `portfolio` | Case studies/before-after | Visual proof matters |
| `deliverables` | Numbered scope items | Scope clarity important |
| `growthEngine` | Two-panel breakdown | Strategy depth (site + ads) |
| `valueStack` | Deliverables + totals | Single package (no tiers) |
| `pricingWithAddons` | Base + add-ons grid | Base with upsells |
| `roi` | Break-even math + big number | Clear client value (SaaS, B2B) |
| `timeline` | Project roadmap | Timing/phases matter |

**Narrative arc (proven messaging sequence):**
1. **Open** → `hero`
2. **Situation** → `problem`
3. **Gap** → `beforeAfter`, `comparison`
4. **Solution** → `processFlow`, `pillars`, `deliverables`, `growthEngine`
5. **Specifics** → `opportunity` (can use multiple)
6. **Proof** → `roi`, `portfolio`, `successFactors`
7. **Roadmap** → `timeline`
8. **Trajectory** → `projections` (always include)
9. **Investment** → `pricing`, `valueStack`, `pricingWithAddons`
10. **Close** → `cta`

**Example structures:**
- *Lead gen:* hero → problem → beforeAfter → processFlow → opportunity x2 → roi → timeline → projections → pricing → cta
- *SaaS:* hero → problem → opportunity → deliverables → projections → pricing → timeline → cta
- *Agency:* hero → problem → pillars → portfolio → projections → pricing → cta

### Step 4: Build
1. Create `decks/[client-slug]/` with `theme.ts`, `content.ts`, `deck.tsx`
2. Add logo to `/public/logos/`
3. Run `npm run build`
4. Add deck to directory in `src/app/page.tsx` (add to `decks` array)

---

## File Structure

```
decks/[client-slug]/
├── content.ts      # Slide content (DeckDefinition)
├── deck.tsx        # 4 lines only (see below)
├── sow-content.ts  # SOW content (optional)
└── theme.ts        # Brand colors and logo
```

```ts
// deck.tsx — ALWAYS this pattern, nothing else
import { renderDeck } from "~/lib/renderDeck";
import { deckContent } from "./content";
export default renderDeck(deckContent);
```

```ts
// theme.ts
import { createTheme } from "~/lib/theme";
export const theme = createTheme({
  primary: "#3b82f6",
  primaryLight: "#60a5fa",
  clientLogo: "/logos/client.png",
  clientName: "Client Name",
});
```

---

## Image Assets

Directories: `public/images/blue/`, `film/`, `neutral/`, `orange/`

Match images to brand color. If no matching directory → use `neutral/` or `film/`.

Usage: `heroImage: "/images/blue/blue-7.jpg"`, `sideImage: "/images/blue/blue-4.jpg"`

---

## Slide Templates Quick Reference

All slides live in `src/templates/slides/`. Check `src/templates/types.ts` for complete prop types.

Most slides share common props: `label` (section label), `title`, `subtitle`. Below are the key distinguishing props.

| Slide | Key Props | Notes |
|-------|-----------|-------|
| `hero` | title, subtitle, tagline?, heroImage?, preparedFor? | preparedFor falls back to theme.clientName |
| `problem` | challenges[]{text, subtext?, icon}, sideImage?, statsOverlay? | |
| `opportunity` | opportunities[]{icon, factor, result}, callout? | 3 cards |
| `successFactors` | factors[]{factor, result}, differentiator? | |
| `beforeAfter` | before{label, title, highlight, items[]}, after{...same} | Red left / primary right |
| `comparison` | columns[]{name, highlighted?}, features[]{feature, values[]} | Boolean matrix |
| `processFlow` | steps[]{icon, title, description}, sideImage? | Vertical with connector |
| `deliverables` | deliverables[]{number, title, icon, items[]}, options? | Numbered items |
| `growthEngine` | leftPanel{...}, rightPanel{...} | Two-panel layout |
| `pillars` | pillars[]{title, description, icon}, profile?, testimonial? | 3 pillar cards |
| `pricing` | tiers[]{title, subtitle, price, priceLabel?, monthly?, features[], recommended?}, note? | Multi-tier |
| `pricingWithAddons` | basePackage{label, title, description, price, priceLabel, features[]}, addOns?{featured?, items[]}, note? | Base + extras |
| `valueStack` | items[]{icon, text}, totals?[]{label, value}, note? | Single package alt |
| `roi` | description, highlight?, benefits[4]{icon, title, description}, metric{value, label, subtext} | Big number focus |
| `timeline` | steps[], layout?("arrow"\|"grid"), note? | arrow=3 steps, grid=4 |
| `projections` | scenarios[], phases[], totalMonths? | **Always include** (see standard setup below) |
| `cta` | ctaButton?, profile?, contactItems[], sideImage? | |
| `portfolio` | (check types.ts) | Visual showcases |

### Projections Standard Setup (copy for every deck)
```ts
{
  type: "projections",
  content: {
    label: "THE TRAJECTORY",
    title: "What Growth Looks Like",
    subtitle: "Three scenarios based on market response and optimization speed.",
    scenarios: [
      { id: "optimize", label: "Optimize", description: "Steady, predictable growth as we refine targeting and messaging.", curve: "steady", default: true },
      { id: "accelerate", label: "Accelerate", description: "Strong initial response + aggressive optimization = exponential growth.", curve: "exponential" },
      { id: "pivot", label: "Pivot & Recover", description: "Initial tests reveal needed pivots. We adjust strategy, then recover stronger.", curve: "recovery" },
    ],
    phases: [
      { month: 1, label: "Launch" },
      { month: 2, label: "Learn" },
      { month: 3, label: "Optimize" },
      { month: 4, label: "Scale" },
    ],
    totalMonths: 6,
  },
}
```

### CTA Standard Setup (copy for every deck)
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

## Theming

```ts
interface DeckTheme {
  primary: string;        // Accent color
  primaryLight?: string;  // Lighter variant
  slideBg: { from: string; to: string; }; // Gradient (bright → dark)
  outerBg: string;
  clientLogo?: string;
  clientName?: string;
}
```

Slide backgrounds: diagonal gradient, `from` lighter (top-left) → `to` darker (bottom-right).

CSS classes: `text-primary`, `bg-primary`, `border-primary`, `text-gray-300`/`400`/`500`

---

## Available Icons

Use lucide-react names as strings. See `src/templates/types.ts` for complete list.

Common: `ArrowRight`, `Check`, `Target`, `TrendingUp`, `DollarSign`, `Users`, `Globe`, `Mail`, `Calendar`, `Settings`, `Shield`, `Zap`, `Rocket`, `Sparkles`, `Video`, `Brain`, `Lightbulb`, `BarChart`, `Layers`, `Phone`, `Briefcase`, `Building`, `Star`, `Lock`, `Heart`

---

## Statement of Work (SOW)

SOWs live alongside decks, share the theme, accessible at `/[client-slug]/sow`. They're reference documents (no signatures needed — governed by separate DigitalNova Service Agreement).

### Before Building a SOW, Ask:
- Project start date
- Payment schedule (50/50, milestone-based, etc.)
- Items explicitly out of scope
- Any special terms agreed in the call

### SOW Schema (`src/lib/sowSchema.ts`)
```ts
interface SOWDefinition {
  projectTitle: string;
  client: { name: string; contactName?: string; contactEmail?: string; };
  overview: string;                    // 2-3 sentences
  startDate: string;                   // "Month Day, Year"
  estimatedCompletion?: string;
  deliverables: Array<{ title: string; description?: string; items?: string[]; }>;
  timeline?: Array<{ title: string; description?: string; payment?: string; }>;
  payments: Array<{ description: string; amount: string; due: string; }>;
  totalInvestment: string;             // "$X setup + $X/mo"
  outOfScope?: string[];
  assumptions?: string[];
  notes?: string;
}
```

### Common Out of Scope
Ad spend, content writing beyond website copy, video production, photography, print materials, social media management, software dev beyond scope, third-party subscriptions, domain registration/DNS

### Common Assumptions
Client provides feedback within 5 business days, provides brand assets/logos/photography, provides account access (hosting, CRM, ad platforms). Two revision rounds per Service Agreement. Client content is accurate and approved. Timeline assumes no major scope changes.

---

## Dev Commands

```bash
npm run dev      # Dev server
npm run build    # Production build (ALWAYS run to verify)
npm run lint     # Check errors
```
