import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Meta Ads Management — Home Care Campaign",

  client: {
    name: "ElderLaw Leads",
    contactName: "Don Quante",
  },

  overview:
    "DigitalNova Studio will build and manage a Meta ad campaign for ElderLaw Leads targeting home care agency decision-makers. The goal is qualified demo appointments on your calendar. Scope includes landing page rebuild, ad creative, campaign management, booking automations, and weekly reporting against a single dashboard.",

  startDate: "April 27, 2026",
  estimatedCompletion: "Ongoing (month-to-month, 3-month evaluation window)",

  deliverables: [
    {
      title: "Funnel & Landing Page",
      description:
        "Rebuild the home care landing page on our stack so we can track, A/B test, and iterate without dependency on external platforms.",
      items: [
        "Home care landing page rebuilt",
        "Calendly booking integration",
        "Call tracking & attribution",
        "Marketing analytics & heatmap tools installed",
      ],
    },
    {
      title: "Meta Ads Management",
      description:
        "Full management of Facebook and Instagram ad campaigns targeting home care agencies.",
      items: [
        "Audience research & targeting for home care decision-makers",
        "Ad creative and copy production",
        "Multiple ad sets tested in parallel",
        "Ongoing bid, creative, and audience optimization",
      ],
    },
    {
      title: "Automations & Reporting",
      description:
        "Follow-up automations to protect show rate, plus a reporting dashboard for the campaign.",
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
    "Calendly account for home care campaign is live and accessible",
    "3-month minimum evaluation window",
  ],

  paymentLinkCC: "https://buy.stripe.com/cNiaEW0IDbKI3rm43kd7q02",
};
