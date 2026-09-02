import { NextResponse } from "next/server";
import { env } from "~/env";
import {
  type EngagementSelection,
  extractPricingFromDeck,
  buildWebhookPayload,
} from "~/lib/sowBuilder";
import type { DeckDefinition } from "~/lib/deckSchema";
import type { SOWDefinition } from "~/lib/sowSchema";

interface StartEngagementRequest {
  deckId: string;
  clientName: string;
  clientEmail: string;
  selectedTierId?: string;
  selectedAddOnIds: string[];
  paymentType: "credit" | "debit";
}

interface StartEngagementResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// Decks allowed to start an engagement - add new decks here as they are created.
// Content is resolved from decks/[id] or decks/archived/[id], so archiving a deck
// does not break its engagement flow.
const engagementDecks = [
  "eventcombo",
  "ria-catalyst",
  "finalbit",
  "veterans-benefit-software",
  "colorado-business-cpa",
];

const engagementSOWs = [
  "ria-catalyst",
  "veterans-benefit-software",
  "colorado-business-cpa",
];

/**
 * Dynamically load deck content from the decks folder (or the archive)
 */
async function loadDeckContent(
  deckId: string
): Promise<DeckDefinition | null> {
  if (!engagementDecks.includes(deckId)) return null;

  try {
    const deckModule = (await import(
      `../../../../decks/${deckId}/content`
    )) as { deckContent: DeckDefinition };
    return deckModule.deckContent;
  } catch {
    // Not in the active folder - try the archive
  }

  try {
    const deckModule = (await import(
      `../../../../decks/archived/${deckId}/content`
    )) as { deckContent: DeckDefinition };
    return deckModule.deckContent;
  } catch {
    return null;
  }
}

/**
 * Dynamically load SOW content from the decks folder (or the archive)
 */
async function loadSOWContent(deckId: string): Promise<SOWDefinition | null> {
  if (!engagementSOWs.includes(deckId)) return null;

  try {
    const sowModule = (await import(
      `../../../../decks/${deckId}/sow-content`
    )) as { sowContent: SOWDefinition };
    return sowModule.sowContent;
  } catch {
    // Not in the active folder - try the archive
  }

  try {
    const sowModule = (await import(
      `../../../../decks/archived/${deckId}/sow-content`
    )) as { sowContent: SOWDefinition };
    return sowModule.sowContent;
  } catch {
    return null;
  }
}

export async function POST(
  request: Request
): Promise<NextResponse<StartEngagementResponse>> {
  try {
    const body = (await request.json()) as StartEngagementRequest;
    const {
      deckId,
      clientName,
      clientEmail,
      selectedTierId,
      selectedAddOnIds,
      paymentType,
    } = body;

    // Validate required fields
    if (!deckId || !clientName || !clientEmail) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: deckId, clientName, clientEmail" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(clientEmail)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate payment type
    if (paymentType && !["credit", "debit"].includes(paymentType)) {
      return NextResponse.json(
        { success: false, error: "Invalid payment type. Must be 'credit' or 'debit'" },
        { status: 400 }
      );
    }

    // Load deck content
    const deckContent = await loadDeckContent(deckId);
    if (!deckContent) {
      return NextResponse.json(
        { success: false, error: `Deck not found: ${deckId}` },
        { status: 404 }
      );
    }

    // Extract pricing from deck
    const pricing = extractPricingFromDeck(deckContent);
    if (!pricing) {
      return NextResponse.json(
        { success: false, error: "No pricing information found in deck" },
        { status: 400 }
      );
    }

    // Load base SOW content (optional)
    const baseSOW = await loadSOWContent(deckId);

    // Build selection object
    const selection: EngagementSelection = {
      deckId,
      clientName,
      clientEmail,
      selectedTierId,
      selectedAddOnIds: selectedAddOnIds ?? [],
      paymentType: paymentType ?? "credit",
    };

    // Build webhook payload
    const payload = buildWebhookPayload(selection, pricing, baseSOW);

    // Check if Make.com webhook is configured
    const webhookUrl = env.MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
      // Log payload for debugging when webhook isn't configured
      console.log("Make.com webhook not configured. Payload:", JSON.stringify(payload, null, 2));
      return NextResponse.json({
        success: true,
        message: "Engagement recorded (webhook not configured)",
      });
    }

    // Send to Make.com webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();
      console.error("Make.com webhook error:", errorText);
      return NextResponse.json(
        { success: false, error: "Failed to process engagement. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Engagement started! Check your email for next steps.",
    });
  } catch (error) {
    console.error("Start engagement error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
