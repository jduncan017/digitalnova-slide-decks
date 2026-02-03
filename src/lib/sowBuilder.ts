import type { SOWDefinition, SOWDeliverable, SOWPayment } from "./sowSchema";
import type { DeckDefinition } from "./deckSchema";

export interface EngagementSelection {
  /** Deck ID to pull content from */
  deckId: string;
  /** Client name */
  clientName: string;
  /** Client email */
  clientEmail: string;
  /** Selected tier ID (for PricingSlide) */
  selectedTierId?: string;
  /** Selected add-on IDs */
  selectedAddOnIds: string[];
  /** Payment type preference */
  paymentType: "credit" | "debit";
}

export interface PricingItem {
  id: string;
  name: string;
  price: string;
  priceLabel?: string;
  monthly?: string;
  description?: string;
  features?: string[];
  sowDeliverables?: SOWDeliverable[];
  type: "tier" | "basePackage" | "featuredAddOn" | "addOn" | "requiredAddOn";
  isRequired?: boolean;
}

export interface ExtractedPricing {
  tiers: PricingItem[];
  addOns: PricingItem[];
  note?: string;
}

/**
 * Parse a price string like "$2,500" or "$1,500/mo" into a number
 */
export function parsePrice(priceStr: string): number {
  const cleaned = priceStr.replace(/[^0-9.]/g, "");
  return parseFloat(cleaned) || 0;
}

/**
 * Format a number as a price string
 */
export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

/**
 * Extract pricing data from deck content
 */
export function extractPricingFromDeck(
  deckContent: DeckDefinition
): ExtractedPricing | null {
  const tiers: PricingItem[] = [];
  const addOns: PricingItem[] = [];
  let note: string | undefined;

  for (const slide of deckContent.slides) {
    // Handle standard pricing slide
    if (slide.type === "pricing") {
      const content = slide.content;
      note = content.note;

      // Extract tiers
      content.tiers.forEach((tier, index) => {
        tiers.push({
          id: tier.id ?? `tier-${index}`,
          name: tier.title,
          price: tier.price,
          priceLabel: tier.priceLabel,
          monthly: tier.monthly,
          description: tier.subtitle,
          features: tier.features,
          sowDeliverables: tier.sowDeliverables,
          type: "tier",
        });
      });

      // Extract add-ons from pricing slide
      if (content.addOns?.required) {
        content.addOns.required.forEach((addon, index) => {
          addOns.push({
            id: addon.id ?? `required-addon-${index}`,
            name: addon.name,
            price: addon.price,
            description: addon.description,
            sowDeliverables: addon.sowDeliverables,
            type: "requiredAddOn",
            isRequired: true,
          });
        });
      }

      if (content.addOns?.optional) {
        content.addOns.optional.forEach((addon, index) => {
          addOns.push({
            id: addon.id ?? `optional-addon-${index}`,
            name: addon.name,
            price: addon.price,
            description: addon.description,
            sowDeliverables: addon.sowDeliverables,
            type: "addOn",
          });
        });
      }
    }

    // Handle pricing with add-ons slide
    if (slide.type === "pricingWithAddons") {
      const content = slide.content;
      note = content.note;

      // Extract base package as a tier
      tiers.push({
        id: content.basePackage.id ?? "base-package",
        name: content.basePackage.title,
        price: content.basePackage.price,
        priceLabel: content.basePackage.priceLabel,
        description: content.basePackage.description,
        features: content.basePackage.features,
        sowDeliverables: content.basePackage.sowDeliverables,
        type: "basePackage",
      });

      // Extract featured add-on
      if (content.addOns?.featured) {
        const featured = content.addOns.featured;
        addOns.push({
          id: featured.id ?? "featured-addon",
          name: featured.title,
          price: featured.price,
          priceLabel: featured.priceLabel,
          monthly: featured.monthly,
          description: featured.subtitle,
          features: featured.features,
          sowDeliverables: featured.sowDeliverables,
          type: "featuredAddOn",
        });
      }

      // Extract smaller add-ons
      if (content.addOns?.items) {
        content.addOns.items.forEach((item, index) => {
          addOns.push({
            id: item.id ?? `addon-${index}`,
            name: item.name,
            price: item.price,
            description: item.description,
            sowDeliverables: item.sowDeliverables,
            type: "addOn",
          });
        });
      }
    }
  }

  if (tiers.length === 0 && addOns.length === 0) {
    return null;
  }

  return { tiers, addOns, note };
}

/**
 * Calculate totals from selected items
 */
export function calculateTotals(
  selectedTier: PricingItem | undefined,
  selectedAddOns: PricingItem[]
): {
  setupTotal: number;
  monthlyTotal: number;
  addOnsTotal: number;
} {
  let setupTotal = 0;
  let monthlyTotal = 0;
  let addOnsTotal = 0;

  // Add tier pricing
  if (selectedTier) {
    const tierPrice = parsePrice(selectedTier.price);
    if (selectedTier.priceLabel?.includes("month") || selectedTier.priceLabel?.includes("/mo")) {
      monthlyTotal += tierPrice;
    } else {
      setupTotal += tierPrice;
    }
    if (selectedTier.monthly) {
      monthlyTotal += parsePrice(selectedTier.monthly);
    }
  }

  // Add add-ons pricing
  for (const addon of selectedAddOns) {
    const addonPrice = parsePrice(addon.price);
    if (addon.priceLabel?.includes("month") || addon.priceLabel?.includes("/mo")) {
      monthlyTotal += addonPrice;
    } else {
      addOnsTotal += addonPrice;
    }
    if (addon.monthly) {
      monthlyTotal += parsePrice(addon.monthly);
    }
  }

  return { setupTotal, monthlyTotal, addOnsTotal };
}

/**
 * Build SOW from selections
 */
export function buildSOWFromSelections(
  baseSOW: SOWDefinition | null,
  selection: EngagementSelection,
  pricing: ExtractedPricing,
  selectedTier: PricingItem | undefined,
  selectedAddOns: PricingItem[]
): SOWDefinition {
  const { setupTotal, monthlyTotal, addOnsTotal } = calculateTotals(
    selectedTier,
    selectedAddOns
  );

  // Collect deliverables from selected items
  const deliverables: SOWDeliverable[] = [];

  // Add tier deliverables
  if (selectedTier?.sowDeliverables) {
    deliverables.push(...selectedTier.sowDeliverables);
  } else if (selectedTier) {
    // Fallback: create deliverable from tier features
    deliverables.push({
      title: selectedTier.name,
      description: selectedTier.description,
      items: selectedTier.features,
    });
  }

  // Add add-on deliverables
  for (const addon of selectedAddOns) {
    if (addon.sowDeliverables) {
      deliverables.push(...addon.sowDeliverables);
    } else {
      // Fallback: create deliverable from addon info
      deliverables.push({
        title: addon.name,
        description: addon.description,
        items: addon.features,
      });
    }
  }

  // Build payment schedule
  const payments: SOWPayment[] = [];
  const grandTotal = setupTotal + addOnsTotal;

  if (grandTotal > 0) {
    // 50/50 split for setup
    const deposit = Math.round(grandTotal / 2);
    const balance = grandTotal - deposit;

    payments.push({
      description: "Setup Fee - 50% Deposit",
      amount: formatPrice(deposit),
      due: "Upon signing",
    });

    payments.push({
      description: "Setup Fee - 50% Balance",
      amount: formatPrice(balance),
      due: "At project completion",
    });
  }

  if (monthlyTotal > 0) {
    payments.push({
      description: "Monthly Retainer",
      amount: `${formatPrice(monthlyTotal)}/mo`,
      due: "Starts at launch",
    });
  }

  // Build total investment string
  let totalInvestment = "";
  if (grandTotal > 0) {
    totalInvestment = `${formatPrice(grandTotal)} setup`;
  }
  if (monthlyTotal > 0) {
    totalInvestment += totalInvestment
      ? ` + ${formatPrice(monthlyTotal)}/mo`
      : `${formatPrice(monthlyTotal)}/mo`;
  }

  // Use base SOW as template or create new one
  const sow: SOWDefinition = {
    projectTitle: baseSOW?.projectTitle ?? "Project Engagement",
    client: {
      name: selection.clientName,
      contactName: selection.clientName,
      contactEmail: selection.clientEmail,
    },
    overview:
      baseSOW?.overview ??
      `Engagement including: ${[selectedTier?.name, ...selectedAddOns.map((a) => a.name)].filter(Boolean).join(", ")}.`,
    startDate: baseSOW?.startDate ?? "TBD",
    estimatedCompletion: baseSOW?.estimatedCompletion,
    deliverables:
      deliverables.length > 0 ? deliverables : baseSOW?.deliverables ?? [],
    timeline: baseSOW?.timeline,
    payments,
    totalInvestment,
    outOfScope: baseSOW?.outOfScope,
    assumptions: baseSOW?.assumptions,
    notes: baseSOW?.notes,
    contractLink: baseSOW?.contractLink,
  };

  return sow;
}

/**
 * Format SOW data for Make.com webhook
 */
export interface WebhookPayload {
  deckId: string;
  clientName: string;
  clientEmail: string;
  paymentType: "credit" | "debit";
  selectedTier: PricingItem | null;
  selectedAddOns: PricingItem[];
  totals: {
    setup: number;
    monthly: number;
    addOns: number;
    grandTotal: number;
  };
  sowData: SOWDefinition;
}

export function buildWebhookPayload(
  selection: EngagementSelection,
  pricing: ExtractedPricing,
  baseSOW: SOWDefinition | null
): WebhookPayload {
  // Find selected tier
  const selectedTier = selection.selectedTierId
    ? pricing.tiers.find((t) => t.id === selection.selectedTierId)
    : pricing.tiers[0]; // Default to first tier if none selected

  // Find selected add-ons (always include required ones)
  const requiredAddOns = pricing.addOns.filter((a) => a.isRequired);
  const optionalAddOns = pricing.addOns.filter(
    (a) => !a.isRequired && selection.selectedAddOnIds.includes(a.id)
  );
  const selectedAddOns = [...requiredAddOns, ...optionalAddOns];

  // Build SOW
  const sowData = buildSOWFromSelections(
    baseSOW,
    selection,
    pricing,
    selectedTier,
    selectedAddOns
  );

  // Calculate totals
  const { setupTotal, monthlyTotal, addOnsTotal } = calculateTotals(
    selectedTier,
    selectedAddOns
  );

  return {
    deckId: selection.deckId,
    clientName: selection.clientName,
    clientEmail: selection.clientEmail,
    paymentType: selection.paymentType,
    selectedTier: selectedTier ?? null,
    selectedAddOns,
    totals: {
      setup: setupTotal,
      monthly: monthlyTotal,
      addOns: addOnsTotal,
      grandTotal: setupTotal + addOnsTotal,
    },
    sowData,
  };
}
