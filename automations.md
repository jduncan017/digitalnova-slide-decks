# CTA Automation System

## Vision

Transform the CTA slide into an interactive proposal builder that:
1. Replaces the deck with a step-by-step "Do you want X?" flow
2. Builds the proposal one add-on at a time through guided questions
3. Generates a custom SOW based on selections
4. Sends contract via Jotform Sign
5. Creates payment link (credit vs ACH options) via Stripe

**Key insight**: The current SOW pages are built with AI context—they're nuanced, personalized documents. An automated SOW generator would produce generic, shallow output. The better approach is an **interactive proposal builder** that asks qualifying questions and then triggers human/AI review to craft the final SOW.

---

## Integration Stack

- **Next.js API routes** → App sends webhook with selections
- **Make.com** → Orchestrates everything after webhook received
- **Stripe** → Payment Links API (credit cards) + ACH (bank transfer)
- **Jotform Sign** → Contract generation and signing
- **Resend** → Transactional emails

---

## Current State (Partially Built)

### Files Created (not wired to UI):

1. **`src/lib/sowBuilder.ts`** - Utility for extracting pricing from decks
   - `extractPricingFromDeck()` - Pulls tiers/add-ons from pricing slides
   - `calculateTotals()` - Sums setup, monthly, add-on costs
   - `buildWebhookPayload()` - Formats data for Make.com
   - **Limitation**: Can only concatenate deliverables, not generate contextual SOWs

2. **`src/components/AddOnSelector.tsx`** - Modal for add-on selection
   - Shows base package + optional add-ons
   - Payment type toggle (Credit/ACH)
   - Client name/email form
   - Running total calculation
   - **Not connected to CTA slide**

3. **`src/app/api/start-engagement/route.ts`** - API endpoint
   - Validates input, loads deck content
   - Builds webhook payload
   - Sends to Make.com (or logs if webhook not configured)
   - **Registry needs updating when new decks are added**

4. **`src/env.js`** - Added `MAKE_WEBHOOK_URL` env var

5. **`src/templates/types.ts`** - Added `id` and `sowDeliverables` fields to pricing types
   - Allows tracking which add-ons are selected
   - Maps add-ons to SOW deliverables

### What's NOT Done:

- CTA slide UI changes (reverted)
- Make.com scenario setup
- Stripe payment link integration
- Jotform contract template with merge fields
- Email templates for contract/payment links
- CRM logging

---

## Proposed UX Flow (Future)

### Option A: Modal-Based (Quick)
Current implementation approach—modal pops up with all options at once.

### Option B: Guided Flow (Better UX)
Replace entire deck view with step-by-step questions:

```
Slide 1: "Let's build your custom proposal"
         [Continue]

Slide 2: "Do you need a website?"
         [Yes, full build] [Yes, refresh only] [No, I have one]

Slide 3: "Do you want paid advertising?"
         [Yes, Google Ads] [Yes, Meta/LinkedIn] [Both] [Not now]

Slide 4: "What about ongoing support?"
         [Monthly retainer] [Project-based] [I'll manage it]

Slide 5: Review selections + total
         [Confirm & Get Proposal]

→ Webhook fires with selections
→ Human/AI reviews and crafts personalized SOW
→ Client receives email with SOW + contract
```

This approach:
- Qualifies the prospect through their answers
- Provides context for SOW creation (not just "they checked box X")
- Can branch based on answers (different questions for website vs ads)
- Feels more consultative than a checkbox list

---

## Technical Implementation Plan

### Phase 1: API Foundation (Done)
- [x] Create `sowBuilder.ts` with pricing extraction
- [x] Create `/api/start-engagement` endpoint
- [x] Add `MAKE_WEBHOOK_URL` env var
- [x] Extend pricing types with `id` and `sowDeliverables`

### Phase 2: Make.com Scenario
- [ ] Create webhook trigger to receive app data
- [ ] Log to CRM (Notion/Airtable) with status "Proposal Requested"
- [ ] Send notification to self for manual SOW creation
- [ ] (Later) Add Stripe payment link module
- [ ] (Later) Add Jotform contract module

### Phase 3: Contract & Payment Flow
- [ ] Create Jotform Sign template with merge fields
- [ ] Set up Stripe Payment Links
- [ ] Create ACH payment option (lower fees)
- [ ] Email templates for:
  - SOW delivery
  - Contract signing request
  - Payment link (after contract signed)

### Phase 4: UI Integration
- [ ] Decide: Modal vs Guided Flow
- [ ] Build the frontend experience
- [ ] Wire up to API endpoint
- [ ] Test end-to-end

---

## Webhook Payload Structure

When the app sends to Make.com:

```typescript
{
  deckId: string,              // e.g., "eventcombo"
  clientName: string,          // "John Smith"
  clientEmail: string,         // "john@company.com"
  paymentType: "credit" | "debit",
  selectedTier: {
    id: string,
    name: string,
    price: string,
    features: string[]
  } | null,
  selectedAddOns: [{
    id: string,
    name: string,
    price: string,
    description?: string
  }],
  totals: {
    setup: number,             // e.g., 2500
    monthly: number,           // e.g., 1500
    addOns: number,            // e.g., 500
    grandTotal: number         // e.g., 3000
  },
  sowData: SOWDefinition       // Auto-generated (use as starting point only)
}
```

---

## Environment Variables Needed

```env
# Make.com Webhook (receives data from app)
MAKE_WEBHOOK_URL=https://hook.make.com/your-scenario-id
```

Stripe and Jotform credentials go in Make.com, not the app.

---

## Open Questions

1. **SOW Creation**: Keep manual (AI-assisted) or try to automate?
   - Current thinking: Manual review is better for quality

2. **Guided Flow**: Worth building the multi-step experience?
   - Pros: Better UX, qualification, context
   - Cons: More complex, delays launch

3. **Payment Timing**: When to send payment link?
   - After contract signed? (safer)
   - With contract? (faster)

4. **Fee Handling**: Who pays Stripe fees?
   - Credit: ~2.9% + $0.30
   - ACH: ~0.8% (capped at $5)

---

## Deck Registry (Manual Update Required)

When adding new decks, update `src/app/api/start-engagement/route.ts`:

```typescript
const deckRegistry: Record<string, () => Promise<{ deckContent: DeckDefinition }>> = {
  eventcombo: () => import("../../../../decks/eventcombo/content"),
  "ria-catalyst": () => import("../../../../decks/ria-catalyst/content"),
  // Add new decks here...
};

const sowRegistry: Record<string, () => Promise<{ sowContent: SOWDefinition }>> = {
  "ria-catalyst": () => import("../../../../decks/ria-catalyst/sow-content"),
  // Add new SOW files here...
};
```

---

## Files Reference

| File | Purpose | Status |
|------|---------|--------|
| `src/lib/sowBuilder.ts` | Pricing extraction & payload building | Created |
| `src/components/AddOnSelector.tsx` | Selection modal UI | Created (unused) |
| `src/app/api/start-engagement/route.ts` | Webhook endpoint | Created |
| `src/env.js` | Environment schema | Updated |
| `src/templates/types.ts` | Pricing type extensions | Updated |
| `src/templates/slides/closing/CTASlide.tsx` | CTA slide | Unchanged (reverted) |
| `src/lib/renderDeck.tsx` | Deck renderer | Unchanged (reverted) |
