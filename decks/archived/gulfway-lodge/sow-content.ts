import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Logo Design — Gulfway Lodge",

  client: {
    name: "Gulfway Lodge",
    contactName: "Marcela Sabatino",
  },

  overview:
    "Design of a professional logo for Gulfway Lodge, a fishing camp property in Louisiana. The logo will align with the existing PRT parent brand — maintaining the established blue and yellow color palette and a similar typographic feel, while giving Gulfway Lodge its own clean, professional identity.",

  startDate: "March 17, 2026",
  estimatedCompletion: "March 31, 2026",

  deliverables: [
    {
      title: "Custom Logo Design",
      description:
        "A professional logo rooted in PRT's existing blue and yellow brand colors and font style.",
      items: [
        "2 initial logo concepts — distinct directions for review",
        "2 rounds of revisions to refine the selected concept",
        "Final file package — high-res PNG, SVG vector, and PDF formats for print and digital use",
      ],
    },
  ],

  timeline: [
    {
      title: "March 17: Project Kickoff",
      description:
        "Deposit received, project begins. Alignment on direction, references, and any additional input.",
      payment: "$300 deposit due",
    },
    {
      title: "March 24: Initial Concepts Delivered",
      description:
        "2 distinct logo concepts presented for Marcela and partner to review and select a direction.",
    },
    {
      title: "March 31: Revisions & Final Delivery",
      description:
        "Selected concept refined through up to 2 rounds of revisions. Final files delivered.",
      payment: "$300 balance due upon delivery",
    },
  ],

  payments: [
    { description: "Deposit (50%)", amount: "$300", due: "Upon signing" },
    {
      description: "Final balance (50%)",
      amount: "$300",
      due: "Upon delivery of final logo files",
    },
  ],

  totalInvestment: "$600",

  outOfScope: [
    "Brand guidelines or style guide document",
    "Business card or stationery design",
    "Social media assets or templates",
    "Signage design or mockups",
    "Website design or development",
    "Additional logo concepts beyond the 2 included",
    "Revisions beyond the 2 rounds included",
  ],

  assumptions: [
    "Client provides feedback within 5 business days",
    "Client provides any reference materials or inspiration at kickoff",
    "Timeline assumes no major scope changes",
    "PRT brand assets (colors, fonts) are available for reference",
  ],

  paymentLink: "https://pay.gocardless.com/BRT0004JJ7FDX8B",
  paymentLinkCC: "https://buy.stripe.com/6oU6oG4YT5mke60arId7q06",
};
