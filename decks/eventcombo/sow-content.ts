import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Google Ads Lead Generation System",

  client: {
    name: "EventCombo",
    contactName: "Saroosh Gull",
  },

  overview:
    "A targeted Google Ads campaign to drive qualified enterprise demo bookings for EventCombo's event management platform. This engagement focuses on long-tail, high-intent keyword targeting to reach C-suite decision makers actively searching for event software with integration capabilities. EventCombo's team will handle landing page development with strategic direction from DigitalNova.",

  startDate: "February 16, 2026",
  estimatedCompletion: "Ads live by February 28, 2026",

  deliverables: [
    {
      title: "Google Ads Campaign Setup & Management",
      description:
        "Full campaign build targeting high-intent enterprise buyers.",
      items: [
        "Long-tail keyword research & strategy (integration-focused, enterprise-specific)",
        "Campaign structure and ad copy creation",
        "A/B testing and ongoing optimization",
        "Weekly performance reports with full ROI visibility",
      ],
    },
    {
      title: "Landing Page Strategy & Direction",
      description:
        "Strategic guidance for EventCombo's team to build a conversion-focused landing page.",
      items: [
        "Landing page wireframes and messaging direction",
        "Integration-focused content recommendations for C-suite audience",
        "Demo booking flow optimization",
        "Review and optimization notes on completed page",
      ],
    },
    {
      title: "Tracking & Analytics",
      description: "End-to-end tracking to measure campaign performance.",
      items: [
        "Conversion tracking setup",
        "CRM integration for lead tracking",
        "ROI reporting and attribution",
      ],
    },
  ],

  timeline: [
    {
      title: "Step 1: Setup Fee & Kickoff",
      description:
        "Review scope of work, sign contract, and submit setup fee. Once received, detailed landing page breakdown and messaging direction are delivered to EventCombo's team.",
      payment: "$1,000 setup fee due",
    },
    {
      title: "Feb 16: Kickoff Meeting",
      description:
        "Alignment on landing page progress, Google Ads strategy review, and campaign structure finalization.",
    },
    {
      title: "Feb 28: Ads Live",
      description:
        "Google Ads campaign launches. Demo bookings begin. Weekly reporting starts. Monthly retainer begins.",
      payment: "$1,000/mo retainer starts",
    },
    {
      title: "Ongoing: Optimize & Scale",
      description:
        "Continuous A/B testing, keyword refinement, and performance optimization. Monthly check-ins.",
    },
  ],

  payments: [
    {
      description: "Setup Fee",
      amount: "$1,000",
      due: "Upon signing",
    },
    {
      description: "Trial Management (Months 1-3)",
      amount: "$1,000/mo",
      due: "Starts at ads launch",
    },
    {
      description: "Post-Trial Management (Month 4+)",
      amount: "$2,500/mo",
      due: "Monthly",
    },
  ],

  totalInvestment: "$1,000 setup + $1,000/mo (3 months) → $2,500/mo after",

  outOfScope: [
    "Landing page development (handled by EventCombo's team)",
    "CRM software or third-party tool subscriptions",
    "Content writing beyond ad copy and landing page direction",
    "SEO or organic search optimization",
  ],

  assumptions: [
    "EventCombo will provide access to Google Ads account by February 20",
    "EventCombo's team will complete the landing page per DigitalNova's specifications by February 20",
    "Client will provide timely feedback within 5 business days",
    "Landing page will include demo booking integration",
    "Ad spend budget of $2,500/mo is paid directly to Google by EventCombo",
  ],

  notes:
    "Trial period (months 1-3) at $1,000/mo — prove the ROI before scaling. Post-trial rate of $2,500/mo includes expanded keyword targeting, advanced optimization, and funnel A/B testing. No long-term contract — month-to-month after setup.",

  paymentLink: "https://pay.gocardless.com/BRT0004C7MKAY6J",
  paymentLinkCC: "https://buy.stripe.com/bJeeVc0ID5mk6Dy2Zgd7q04",
};
