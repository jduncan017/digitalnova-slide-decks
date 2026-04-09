import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Google Ads Lead Generation — Starter Plan",

  client: {
    name: "Manay CPA",
    contactName: "Rocio Brandau",
  },

  overview:
    "DigitalNova Studio will build and manage a local Google Ads lead generation system for Manay CPA, targeting small business owners in the Marietta and metro Atlanta area searching for monthly bookkeeping and accounting services. Scope includes keyword research, landing page build, Google Ads campaign setup and ongoing management, CRM lead capture, and monthly performance reporting.",

  startDate: "May 1, 2026",
  estimatedCompletion: "Ongoing (month-to-month)",

  deliverables: [
    {
      title: "Google Ads Campaign Management",
      description:
        "Full build and management of Google Ads campaigns targeting local business owners searching for bookkeeping and accounting services.",
      items: [
        "Keyword research focused on Marietta and metro Atlanta",
        "Campaign setup, local targeting, and ongoing optimization",
        "Ad copy creation and A/B testing",
        "Monthly performance reporting",
      ],
    },
    {
      title: "Landing Page Build",
      description:
        "Custom landing page designed to convert high-intent local search traffic into qualified bookkeeping leads.",
      items: [
        "Landing page design and development",
        "Lead capture form with qualification questions",
        "Conversion tracking and analytics setup",
      ],
    },
    {
      title: "CRM & Lead Capture Setup",
      description:
        "CRM integration to capture, route, and track leads from the campaign.",
      items: [
        "CRM setup and lead routing",
        "Lead notification and tracking",
        "Basic follow-up automation",
      ],
    },
  ],

  timeline: [
    {
      title: "Week 1: Onboarding & Build (May 1–9)",
      description:
        "Kickoff call, keyword research, landing page build, Google Ads campaign setup, and CRM configuration.",
      payment: "First setup payment due",
    },
    {
      title: "Week 2: Launch & Monitor (May 12–16)",
      description:
        "Google Ads campaign goes live. Conversion tracking verified. Daily monitoring during launch week.",
    },
    {
      title: "Weeks 3–4: Optimize (May 19–30)",
      description:
        "Review lead quality with Rocio. Refine keywords, bidding, and ad copy. First monthly performance report delivered.",
      payment: "Second setup payment due",
    },
  ],

  payments: [
    {
      description: "Setup Fee — First Half",
      amount: "$500",
      due: "Due at kickoff (May 1)",
    },
    {
      description: "Setup Fee — Second Half",
      amount: "$500",
      due: "Due at campaign launch (Week 2)",
    },
    {
      description: "Monthly Management Fee",
      amount: "$300/mo",
      due: "1st of each month (first payment at kickoff)",
    },
    {
      description: "Ad Spend (paid directly to Google)",
      amount: "$300/mo",
      due: "Managed within Google Ads",
    },
  ],

  totalInvestment: "$1,000 setup + $300/mo management + $300/mo ad spend",

  outOfScope: [
    "Ad spend (paid directly to Google by Manay CPA)",
    "Website redesign or modifications to manaycpa.com",
    "Content writing beyond landing page and ad copy",
    "Video production or photography",
    "Social media management",
    "Meta Ads management",
    "Email marketing or newsletter campaigns",
    "Third-party software subscriptions (CRM, automation tools, etc.)",
    "Domain registration or DNS management",
  ],

  assumptions: [
    "Manay CPA will maintain minimum $300/month ad spend throughout engagement",
    "Manay CPA will provide Google Ads account access within the first week",
    "Landing page and ad copy approvals will be provided within 5 business days",
    "Client provides feedback within 5 business days",
    "Two revision rounds per Service Agreement",
    "Timeline assumes no major scope changes",
  ],

  notes:
    "No long-term contract — engagement is month-to-month. Can upgrade to Growth or Scale plan at any time as results are proven. Initial results expected within weeks of launch, benchmark performance within 60–90 days.",
};
