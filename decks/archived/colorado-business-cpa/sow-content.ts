import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Marketing Funnel",

  client: {
    name: "Colorado Business CPA",
    contactName: "Natalya Itu",
  },

  overview:
    "We'll build a marketing funnel that qualifies leads upfront and turns paid traffic into advisory clients. We'll start with a smart contact form on the existing site, then add a dedicated funnel landing page and Meta Ads campaign.",

  startDate: "May 26, 2026",
  estimatedCompletion: "June 30, 2026",

  deliverables: [
    {
      title: "Smart Contact Form",
      description:
        "Embedded upgrade to the existing contact page with qualification, routing, and tracking.",
      items: [
        "Multi-step form on existing contact page",
        "Revenue + service + timeline qualification logic",
        "Auto pop-up redirect for non-fits to affiliate firm)",
        "Affiliate referral tracking + dashboard",
        "Qualified-lead handoff into Pipedrive CRM",
        "Email notifications + lead routing rules",
      ],
    },
    {
      title: "Funnel Landing Page",
      description:
        "Dedicated landing page built for paid traffic, separate from organic website flow.",
      items: [
        "Custom funnel page (advisory-focused messaging)",
        "Tangible-savings hook (Rainwater-style framing)",
        "Lead qualification baked into the funnel",
        "Conversion tracking + attribution",
      ],
    },
    {
      title: "Meta Ads Campaign Build",
      description: "Meta Ads setup, launch, and ongoing optimization.",
      items: [
        "Interrupt-style creative for advisory prospects",
        "Pixel + conversion tracking installation",
        "Audience setup + initial creative direction",
        "Weekly performance reporting",
      ],
    },
    {
      title: "Optional Add-On — Monthly SEO Reports",
      description:
        "Reporting layer to feed your in-house Claude blog workflow.",
      items: [
        "Keyword ranking tracking",
        "Competitor movement analysis",
        "Content gap identification",
        "Delivered monthly — $100/mo",
      ],
    },
  ],

  timeline: [
    {
      title: "Late May: Contact Form Build",
      description:
        "Setup payment received, form logic + affiliate redirect + CRM integration built and tested.",
      payment: "$750 due to kick off",
    },
    {
      title: "Early June: Contact Form Live",
      description:
        "Smart form goes live on contact page. Tracking dashboards confirmed. Funnel + ads scoping kicks off.",
    },
    {
      title: "June: Funnel + Ads Build",
      description:
        "Funnel landing page design + build, ad creative direction, Meta campaign setup, conversion tracking wired in.",
      payment: "$1,250 due at kickoff",
    },
    {
      title: "Late June: Funnel + Ads Launch",
      description:
        "Funnel goes live, ads launch, algorithm training begins. Optimization runs through July, ready for August extension wave.",
      payment: "$1,500/mo retainer begins",
    },
  ],

  payments: [
    {
      description: "Contact form setup",
      amount: "$750",
      due: "Upon approval (kicks off build)",
    },
    {
      description: "Funnel + ads setup",
      amount: "$1,250",
      due: "At funnel + ads kickoff (~early June)",
    },
    {
      description: "Monthly ads management",
      amount: "$1,500/mo",
      due: "Monthly, starting at ads launch (~late June)",
    },
  ],

  totalInvestment: "$2,000 setup + $1,500/mo (ads management)",

  outOfScope: [
    "Video recording for ad creative (editing available as add-on; raw footage provided by client)",
    "CRM subscription fees (Pipedrive seat, if applicable)",
  ],

  assumptions: [
    "Client will provide timely feedback within 5 business days per the existing Service Agreement",
    "Two rounds of revisions per deliverable are included per the existing Service Agreement",
    "Funnel + ads scope may be adjusted after the contact form launches",
  ],

  notes:
    "Colorado Business CPA is an existing DigitalNova client — work is covered under the original Service Agreement, no new contract required. Monthly ads management is a rolling engagement and can be paused with 30 days' notice.",

  hideContract: true,

  closingMessage:
    "Let me know when you've reviewed and I'll submit the deposit payment via ACH.",
};
