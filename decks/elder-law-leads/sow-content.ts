import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Meta Ads Management — Attorney & Home Care Campaigns",

  client: {
    name: "ElderLaw Leads",
    contactName: "Don Quante",
  },

  overview:
    "DigitalNova Studio will build and manage two parallel Meta ad campaigns for ElderLaw Leads — one targeting elder law and VA-accredited attorneys, one targeting home care agency decision-makers. The goal is qualified demo appointments on your calendar for both audiences. Scope includes landing page rebuilds, ad creative, campaign management, booking automations, and weekly reporting against a single dashboard.",

  startDate: "April 27, 2026",
  estimatedCompletion: "Ongoing (month-to-month, 3-month evaluation window)",

  deliverables: [
    {
      title: "Funnel & Landing Pages",
      description:
        "Rebuild existing attorney and home care landing pages on our stack so we can track, A/B test, and iterate without dependency on external platforms.",
      items: [
        "Two landing pages rebuilt (attorney funnel + home care funnel)",
        "Calendly booking integration for both calendars",
        "Call tracking & attribution",
        "Marketing analytics & heatmap tools installed",
      ],
    },
    {
      title: "Meta Ads Management",
      description:
        "Full management of Facebook and Instagram ad campaigns for both audiences.",
      items: [
        "Audience research & targeting for attorneys and home care decision-makers",
        "Ad creative and copy production",
        "Multiple ad sets tested in parallel per audience",
        "Ongoing bid, creative, and audience optimization",
      ],
    },
    {
      title: "Automations & Reporting",
      description:
        "Follow-up automations to protect show rate, plus a unified reporting dashboard across both campaigns.",
      items: [
        "Booking confirmation & reminders",
        "Weekly reporting dashboard (spend, leads, bookings, show rate)",
        "Weekly video walkthrough of performance",
        "Direct access to Meta Ads Manager",
      ],
    },
  ],

  timeline: [
    {
      title: "Weeks 1–2: Setup & Launch (Apr 27 – May 10)",
      description:
        "Kickoff, landing pages rebuilt, automations and reporting configured, creative scripted and produced. Ads go live end of week 2.",
      payment: "Setup fee + first month management due at kickoff",
    },
    {
      title: "Month 1: Data & Early Leads (May)",
      description:
        "Ads live. First data comes in, ad sets tested in parallel, first demos start landing on calendar. Weekly reports begin.",
    },
    {
      title: "Months 2–3: Optimize or Pivot (Jun – Jul)",
      description:
        "Scale what's working. If leads aren't landing, we make harder pivots on creative, targeting, or platform. Evaluation at end of month 3 — scale or stop.",
    },
  ],

  payments: [
    {
      description: "One-Time Setup Fee",
      amount: "$2,000",
      due: "At kickoff",
    },
    {
      description: "Monthly Management Retainer",
      amount: "$2,000/mo",
      due: "Due at Ad launch, then on the same day every month after",
    },
    {
      description: "Ad Spend (paid directly to Meta)",
      amount: "$2,500/mo recommended",
      due: "Managed within Meta Ads Manager",
    },
  ],

  totalInvestment: "$2,000 setup + $2,000/mo management + $2,500/mo ad spend",

  outOfScope: [
    "Organic social media management",
    "Third-party software subscriptions (calendar, CRM, etc.)",
  ],

  assumptions: [
    "ElderLaw Leads maintains minimum $2,500/month ad spend for first 3 months",
    "Meta Business Manager access provided within the first week",
    "Creative and copy approvals provided within 48 hours",
    "Calendly account for both audiences are live and accessible",
    "3-month minimum evaluation window",
  ],

  paymentLinkCC: "https://buy.stripe.com/cNiaEW0IDbKI3rm43kd7q02",
};
