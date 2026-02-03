# Pitch Decks SaaS - Product Plan

## Vision
Turn the current pitch deck system into a self-service SaaS where users can generate professional, interactive pitch decks using AI — upload their branding, describe their business, and get a polished proposal in minutes.

---

## Target Users (Pick One to Start)

| Segment | Pain Point | Willingness to Pay |
|---------|------------|-------------------|
| **Freelance Consultants** | Spend hours on proposals, often lose deals | Medium ($29-49/mo) |
| **Small Agencies** | Need consistent, branded proposals at scale | High ($99-199/mo) |
| **Sales Teams** | Need quick customization per prospect | High ($199+/mo) |
| **Coaches/Course Creators** | Sell high-ticket offers, need professional decks | Medium ($49-99/mo) |

**Recommendation:** Start with freelance consultants/small agencies — they have clear pain, understand the value, and are reachable via content marketing.

---

## Core Features (MVP)

### 1. User Onboarding
- Sign up / login (Clerk)
- Upload: logo, headshot, brand color picker
- Input: name, title, company, contact info, booking link
- These become defaults for all decks

### 2. Deck Creation
- "New Deck" → Enter prospect name, describe the project/offer in a text box
- AI generates full deck JSON based on:
  - User's brand/profile
  - Project description
  - Selected template style (e.g., "SaaS Pitch", "Agency Proposal", "Consulting Offer")
- Preview deck in real-time
- Edit via chat: "Make the pricing section have 2 tiers instead of 3"
- Edit via direct UI: Click slide → modify fields (phase 2)

### 3. Deck Management
- Dashboard showing all decks
- Duplicate, archive, delete
- Share via link (public URL)
- Send via email (existing feature)
- Download PDF (existing feature)

### 4. Payments
- Free tier: 1 deck, watermarked
- Pro tier: Unlimited decks, no watermark, custom domain (future)
- Stripe subscription

---

## Technical Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend                              │
│                    (Next.js App Router)                      │
├─────────────────────────────────────────────────────────────┤
│  Dashboard  │  Deck Editor  │  Preview  │  Auth Pages       │
└──────┬──────┴───────┬───────┴─────┬─────┴────────┬──────────┘
       │              │             │              │
       ▼              ▼             ▼              ▼
┌─────────────────────────────────────────────────────────────┐
│                      API Routes                              │
│         /api/decks  /api/generate  /api/chat  /api/upload   │
└──────┬──────────────┬─────────────┬─────────────┬───────────┘
       │              │             │             │
       ▼              ▼             ▼             ▼
┌──────────┐  ┌──────────────┐  ┌────────┐  ┌──────────────┐
│ Database │  │  Claude API  │  │ Stripe │  │ File Storage │
│ (Supabase│  │  (Anthropic) │  │        │  │ (Uploadthing │
│  + Prisma)│  │              │  │        │  │  or R2)      │
└──────────┘  └──────────────┘  └────────┘  └──────────────┘
```

---

## Database Schema (Prisma)

```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  title         String?
  company       String?
  phone         String?
  bookingLink   String?
  logoUrl       String?
  headshotUrl   String?
  brandColor    String?  @default("#0b90b3")

  stripeCustomerId     String?
  stripeSubscriptionId String?
  plan                 Plan     @default(FREE)

  decks         Deck[]
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

enum Plan {
  FREE
  PRO
}

model Deck {
  id           String   @id @default(cuid())
  userId       String
  user         User     @relation(fields: [userId], references: [id])

  title        String
  preparedFor  String?
  slug         String   @unique  // public URL: /d/[slug]

  // The deck content as JSON (matches DeckDefinition schema)
  content      Json

  // Metadata
  templateType String?  // "saas", "agency", "consulting", etc.
  isPublic     Boolean  @default(true)
  viewCount    Int      @default(0)

  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

model Asset {
  id        String   @id @default(cuid())
  userId    String
  type      AssetType
  url       String
  filename  String
  createdAt DateTime @default(now())
}

enum AssetType {
  LOGO
  HEADSHOT
  DECK_IMAGE
}
```

---

## AI Integration

### Deck Generation Prompt Structure

```typescript
const systemPrompt = `You are a pitch deck expert. Generate a DeckDefinition JSON object.

Available slide types and when to use them:
- hero: Always first, client branding
- problem: Pain points (use when clear challenges exist)
- opportunity: Benefits/ROI (use for strong value prop)
- beforeAfter: Transformation stories
- processFlow: How it works (methodology)
- deliverables: What's included
- pricing: Investment options
- timeline: Project phases
- roi: Break-even math (B2B/SaaS)
- cta: Always last, contact info

User's brand info:
${JSON.stringify(userProfile)}

Output valid JSON matching the DeckDefinition schema.`;

const userPrompt = `Create a pitch deck for:
- Prospect: ${prospectName}
- Project: ${projectDescription}
- Style: ${templateType}`;
```

### Chat-Based Editing

```typescript
const editPrompt = `Current deck:
${JSON.stringify(currentDeck)}

User request: "${userMessage}"

Return the updated deck JSON with the requested changes.
Only modify what was requested, keep everything else the same.`;
```

### Validation Layer

```typescript
// After AI response, validate against schema
import { z } from "zod";
import { DeckDefinitionSchema } from "~/lib/deckSchema";

function validateAndFix(aiResponse: unknown): DeckDefinition {
  const result = DeckDefinitionSchema.safeParse(aiResponse);
  if (result.success) return result.data;

  // Attempt auto-fix or return error for retry
  throw new ValidationError(result.error);
}
```

---

## Image Library Integration

### Unsplash API

```typescript
// Search for relevant images
const searchImages = async (query: string, count = 5) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=${count}`,
    { headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` } }
  );
  return response.json();
};

// AI can suggest image searches based on deck content
// User picks from results or uploads their own
```

### Image Categories to Pre-curate
- Abstract/gradient backgrounds (like current /images folders)
- Business/professional
- Technology/SaaS
- Creative/agency
- Consulting/corporate

---

## Implementation Phases

### Phase 1: Foundation (Weeks 1-3)
- [ ] Set up Supabase + Prisma
- [ ] Implement Clerk auth
- [ ] User profile page (upload logo, headshot, set defaults)
- [ ] File upload with Uploadthing
- [ ] Basic dashboard (list decks)
- [ ] Dynamic deck rendering from database (not filesystem)

### Phase 2: AI Generation (Weeks 4-6)
- [ ] Claude API integration
- [ ] Deck generation from prompt
- [ ] Schema validation + error handling
- [ ] Preview component
- [ ] Save to database

### Phase 3: Editing & Polish (Weeks 7-9)
- [ ] Chat-based editing interface
- [ ] Unsplash image picker
- [ ] Public deck URLs (/d/[slug])
- [ ] Email sending (migrate existing)
- [ ] PDF export (migrate existing)

### Phase 4: Monetization (Weeks 10-12)
- [ ] Stripe integration
- [ ] Free/Pro tier logic
- [ ] Watermark for free tier
- [ ] Usage limits
- [ ] Billing portal

### Phase 5: Growth Features (Future)
- [ ] Custom domains
- [ ] Team workspaces
- [ ] Analytics (view tracking)
- [ ] A/B testing slides
- [ ] More templates/industries
- [ ] Direct slide editing UI

---

## Tech Stack Summary

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 15 (App Router) | Already using, excellent |
| Auth | Clerk | Fastest to implement, great UX |
| Database | Supabase (Postgres) | Free tier, realtime, auth backup |
| ORM | Prisma | Type-safe, great DX |
| File Storage | Uploadthing | Dead simple, generous free tier |
| Payments | Stripe | Industry standard |
| AI | Claude API (Anthropic) | Best for structured output |
| Images | Unsplash API | Free, large library |
| Email | Resend | Already integrated |
| Hosting | Vercel | Already using |

---

## Pricing Strategy

### Free Tier
- 1 active deck
- DigitalNova watermark on last slide
- Basic templates only
- Community support

### Pro ($49/month)
- Unlimited decks
- No watermark
- All templates
- Priority support
- Custom booking link
- Email sending

### Agency ($149/month) - Future
- Everything in Pro
- Team members (5 seats)
- Custom domain
- White-label option
- API access

---

## Open Questions

1. **Direct editing vs chat-only?** Chat is easier to build but direct editing is more intuitive. Could start chat-only, add direct editing later.

2. **How much customization?** Let users edit every field, or keep it constrained to maintain design quality?

3. **Template marketplace?** Could other designers contribute templates? Revenue share?

4. **Vertical focus?** Build deep for one industry (e.g., SaaS) or broad but shallow?

5. **White-label opportunity?** Agencies might pay premium to remove all DigitalNova branding.

---

## Next Steps

1. Validate demand: Post on Twitter/LinkedIn, gauge interest
2. Build Phase 1 foundation
3. Get 5 beta users to test AI generation
4. Iterate based on feedback
5. Launch on Product Hunt

---

## Resources

- [Clerk Docs](https://clerk.com/docs)
- [Supabase + Prisma](https://supabase.com/docs/guides/integrations/prisma)
- [Uploadthing](https://uploadthing.com/)
- [Stripe Subscriptions](https://stripe.com/docs/billing/subscriptions/overview)
- [Unsplash API](https://unsplash.com/developers)
- [Claude API](https://docs.anthropic.com/)
