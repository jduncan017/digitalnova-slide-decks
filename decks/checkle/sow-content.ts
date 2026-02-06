import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Meta Ads Management & Lead Generation System",

  client: {
    name: "Checkle",
    contactName: "Cole Rickles",
    contactEmail: "cole@checkle.com",
  },

  overview:
    "DigitalNova Studio will manage Checkle's Meta advertising campaigns with the goal of reducing cost-per-acquisition from ~$250 to sub-$100. Scope includes creative production, systematic A/B testing, lookalike audience targeting, lead nurturing automation (N8N), and weekly performance reporting. A performance guarantee is included: sub-$100 CPA by end of month 3 from ads launch, or month 4 management is free.",

  startDate: "February 23, 2026",
  estimatedCompletion: "Ongoing (month-to-month)",

  deliverables: [
    {
      title: "Meta Ads Campaign Management",
      description:
        "Full management of Meta (Facebook/Instagram) ad campaigns targeting restaurant owners.",
      items: [
        "Campaign strategy, structure, and ongoing optimization",
        "Audience research and lookalike audience builds from existing customer list",
        "A/B testing: lead forms vs demo booking, pricing offers, headlines, CTAs",
        "Budget allocation and bid optimization",
        "Weekly performance reporting with full transparency",
      ],
    },
    {
      title: "Creative Production",
      description:
        "Video and image ad creative designed to lower CPA through systematic testing.",
      items: [
        "Video variants with product splices and new hooks",
        "Static image ad variations",
        "Headline and copy testing across variants",
        "All creative assets remain property of Checkle",
      ],
    },
    {
      title: "Lead Nurturing Automation (N8N)",
      description:
        "Automated follow-up sequences to convert booked demos into attended demos and leads into customers.",
      items: [
        "N8N automation setup and configuration",
        "Post-booking reminder sequences (no-show mitigation)",
        "Lead follow-up email sequences",
        "UpCall integration for lead outreach",
        "Ongoing automation maintenance and optimization",
      ],
    },
    {
      title: "No-Show Mitigation",
      description:
        "Audit and optimize the post-booking funnel to increase demo attendance rates.",
      items: [
        "Review and improve existing reminder sequences",
        "Implement additional touchpoints pre-demo",
        "Track and report on show-up rates",
      ],
    },
  ],

  timeline: [
    {
      title: "Week 1–2: Onboarding & Setup (Feb 23 – Mar 5)",
      description:
        "Account audit, baseline metrics, strategy alignment, lookalike audience setup, first creative batch in production, N8N automation build. Cole continues running existing ads during this period.",
      payment: "First month management due",
    },
    {
      title: "Week 3: Ads Go Live (Mar 6)",
      description:
        "DigitalNova takes over campaign management. New creative variants and A/B tests go live. Testing begins across lead forms, demo booking, and offer variations.",
    },
    {
      title: "Weeks 4–12: Optimize & Scale (Mar – May)",
      description:
        "Weekly reporting and iteration. Kill underperforming ads, scale winners. Adjust targeting, creative, and offers based on data. Scale ad spend once CPA target is hit.",
    },
  ],

  payments: [
    {
      description: "Monthly Management Fee",
      amount: "$1,500/mo",
      due: "1st of each month (first payment Feb 23)",
    },
    {
      description: "Lead Nurturing Automation (N8N)",
      amount: "$50/mo",
      due: "1st of each month",
    },
    {
      description: "Ad Spend (paid directly to Meta)",
      amount: "$3,000/mo",
      due: "Managed within Meta Ads Manager",
    },
  ],

  totalInvestment: "$1,550/mo management + $3,000/mo ad spend",

  outOfScope: [
    "Ad spend (paid directly to Meta by Checkle)",
    "CRM setup or migration (HubSpot access provided by Checkle)",
    "Organic social media management",
    "Content writing beyond ad copy",
    "Third-party software subscriptions (N8N hosting, UpCall fees, etc.)",
  ],

  assumptions: [
    "Checkle will maintain minimum $3,000/month ad spend throughout engagement",
    "Checkle will provide Meta Business Manager and HubSpot access within the first week",
    "Checkle will provide existing customer email list for lookalike audience builds",
    "Creative approvals will be provided within 48 hours to maintain testing velocity",
    "Weekly check-in calls will be attended (reschedule 24hrs ahead, within 3 days)",
    "No major pricing or offer changes mid-test without prior discussion",
    "Cole continues running existing ads until DigitalNova takes over on March 6",
    "UpCall account and access provided by Checkle",
  ],

  notes:
    "Performance Guarantee: Sub-$100 CPA by end of month 3 (measured from ads launch date of March 6, 2026), or month 4 management fee is waived. This guarantee is contingent on all assumptions above being met. Payment via ACH preferred. No long-term contract — engagement is month-to-month. Recommend minimum 3–4 months to see full optimization results.",
};
