import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Google Ads Management & Lead Generation System",

  client: {
    name: "Prosperly",
    contactName: "Alexander Noren",
    contactEmail: "alexander@prosperly.com",
  },

  overview:
    "DigitalNova Studio will build and manage a Google Ads lead generation system for Prosperly, targeting business owners searching for review management software. Scope includes keyword research, landing page/funnel build, Google Ads campaign setup and ongoing management, CRM integration, text and email automations, and weekly performance reporting.",

  startDate: "March 15, 2026",
  estimatedCompletion: "Ongoing (month-to-month)",

  deliverables: [
    {
      title: "Google Ads Campaign Management",
      description:
        "Full build and management of Google Ads campaigns targeting business owners searching for review management software.",
      items: [
        "Keyword research and campaign strategy",
        "Campaign setup, audience targeting, and ongoing optimization",
        "A/B testing across keywords, ad copy, and landing page variants",
        "Weekly performance reporting",
      ],
    },
    {
      title: "Landing Page / Funnel Build",
      description:
        "Custom landing page designed to convert high-intent Google search traffic into booked demos.",
      items: [
        "Landing page design and development",
        "Demo booking integration with calendar",
        "Conversion tracking and analytics setup",
      ],
    },
    {
      title: "CRM & Automation Setup",
      description:
        "CRM integration and automated follow-up sequences to maximize demo attendance and lead conversion.",
      items: [
        "CRM integration and lead tracking",
        "Automated text and email follow-up sequences",
        "Demo reminder automations to reduce no-shows",
      ],
    },
  ],

  timeline: [
    {
      title: "Weeks 1–2: Onboarding & Build (Mid-March)",
      description:
        "Keyword research, landing page build, Google Ads campaign setup, CRM integration, and automation setup.",
      payment: "Setup fee due",
    },
    {
      title: "Week 3: Ads Go Live",
      description:
        "Google Ads campaigns launch. Demos start booking. Tracking and analytics active.",
    },
    {
      title: "Week 4+: Optimize & Scale",
      description:
        "Weekly reporting and iteration. A/B testing keywords, copy, and landing pages. Scale ad spend as cost per demo drops.",
    },
  ],

  payments: [
    {
      description: "Setup Fee (one-time)",
      amount: "$2,500",
      due: "Due at kickoff",
    },
    {
      description: "Monthly Management Fee",
      amount: "$1,000/mo",
      due: "1st of each month (first payment at kickoff)",
    },
    {
      description: "Ad Spend (paid directly to Google)",
      amount: "$1,500/mo",
      due: "Managed within Google Ads",
    },
  ],

  totalInvestment: "$2,500 setup + $1,000/mo management + $1,500/mo ad spend",

  outOfScope: [
    "Ad spend (paid directly to Google by Prosperly)",
    "Organic social media management",
    "Content writing beyond landing page and ad copy",
    "Video production or photography",
    "Third-party software subscriptions (CRM, automation tools, etc.)",
    "Domain registration or DNS management",
    "Meta Ads management (currently handled by another agency)",
  ],

  assumptions: [
    "Prosperly will maintain minimum $1,500/month ad spend throughout engagement",
    "Prosperly will provide Google Ads account access within the first week",
    "Prosperly will provide CRM access for lead tracking and automation setup",
    "Landing page and ad copy approvals will be provided within 48 hours",
    "Client provides feedback within 5 business days",
    "Two revision rounds per Service Agreement",
    "Timeline assumes no major scope changes",
    "No major pricing or offer changes mid-test without prior discussion",
  ],

  notes:
    "Performance Guarantee: 10+ demos/month from Google Ads by end of month 3 (measured from ads launch date), or month 4 management fee is waived. This guarantee is contingent on all assumptions above being met. No long-term contract — engagement is month-to-month. Initial results expected within weeks of launch, benchmark performance within 60-90 days. Payment via ACH preferred.",
};
