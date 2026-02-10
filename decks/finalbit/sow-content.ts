import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "B2B Lead Generation System",

  client: {
    name: "FinalBit",
    contactName: "Anna Sargsyan & Khachatur Gharibyan",
  },

  overview:
    "A complete B2B lead generation system to drive qualified studio demos through Meta ads. This engagement includes a conversion-focused landing page, video ad creative, CRM setup with automations, and ongoing campaign management to help FinalBit acquire indie studio customers.",

  startDate: "February 10, 2026",
  estimatedCompletion: "Ads live by March 3, 2026",

  deliverables: [
    {
      title: "Landing Page (Framer)",
      description:
        "B2B-focused landing page hosted on booking.finalbit.com subdomain.",
      items: [
        "Conversion-optimized design for studio decision-makers",
        "Clear value proposition and differentiators",
        "Demo booking integration",
        "Mobile-responsive layout",
        "Framer hosting setup ($10/mo)",
      ],
    },
    {
      title: "Video Ad Creative",
      description:
        "Testimonial-style video ads for Meta (Facebook/Instagram) targeting indie filmmakers and studios.",
      items: [
        "Ad creative strategy and scripting",
        "Video production/editing",
        "Multiple ad variations for A/B testing",
        "Creative refreshes as needed",
      ],
    },
    {
      title: "CRM & Automation Setup",
      description:
        "Pipedrive CRM with Intercom integration and automated follow-up sequences.",
      items: [
        "Pipedrive CRM configuration (Lite plan, $14/user/mo)",
        "Intercom integration for lead sync",
        "Google Calendar booking integration",
        "Email/SMS reminder automations",
        "Lead tracking and pipeline setup",
      ],
    },
    {
      title: "Meta Ads Campaign",
      description:
        "Full campaign build and ongoing management targeting indie studios.",
      items: [
        "Meta Business account setup",
        "Campaign structure and audience targeting",
        "ICP targeting: indie studios with 10-20 people",
        "Conversion tracking setup",
        "Weekly optimization and A/B testing",
        "Performance reporting",
      ],
    },
  ],

  timeline: [
    {
      title: "Week 1: Discovery & Strategy",
      description:
        "Deep dive on ICP, messaging, offer building, ad creative planning, landing page wireframes.",
      payment: "Setup fee due ($2,500)",
    },
    {
      title: "Week 2: Build",
      description:
        "Landing page development, video ad production, CRM setup, automation configuration, tracking setup.",
    },
    {
      title: "Week 3+: Launch & Optimize",
      description:
        "Ads go live, demos start booking, weekly reporting begins, ongoing A/B testing and optimization.",
    },
    {
      title: "Month 2: Ongoing Management",
      description:
        "Continued campaign optimization, A/B testing, creative refreshes, and weekly performance reporting.",
      payment: "Monthly retainer begins ($1,500/mo)",
    },
  ],

  payments: [
    {
      description: "Setup Fee",
      amount: "$2,500",
      due: "Upon signing",
    },
    {
      description: "Monthly Management",
      amount: "$1,500/mo",
      due: "Starts Month 2",
    },
    {
      description: "Framer Hosting",
      amount: "$10/mo",
      due: "Billed by Framer directly",
    },
    {
      description: "Pipedrive CRM (Lite)",
      amount: "$14/user/mo",
      due: "Billed by Pipedrive directly",
    },
  ],

  totalInvestment: "$2,500 setup + $1,500/mo",

  outOfScope: [
    "Ad spend (paid directly to Meta, recommended $1,500/mo starting budget)",
    "Instagram/Facebook page creation or management",
    "Social media content creation or posting",
  ],

  assumptions: [
    "Client will provide access to Meta Business account with ads permissions",
    "Subdomain booking.finalbit.com will be pointed to Framer landing page",
    "Client will use existing Google Workspace for calendar booking (free)",
    "Client will provide timely feedback within 5 business days",
    "Two rounds of design revisions included per the Service Agreement",
  ],

  paymentLink: "https://pay.gocardless.com/BRT0004B5RWWCBP",
};
