import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Website & Lead Generation System",

  client: {
    name: "Veterans Benefit Software",
    contactName: "Don Anton",
  },

  overview:
    "DigitalNova Studio will design and develop a professional 5-page website for Veterans Benefit Software, along with a complete lead generation system including LinkedIn advertising, CRM setup, and automated follow-up sequences. The goal is to establish online presence and generate qualified demo bookings from elder law attorneys.",

  startDate: "February 17, 2026",
  estimatedCompletion: "March 21, 2026",

  deliverables: [
    {
      title: "Professional Website (5 Pages)",
      description: "Custom-designed, mobile-responsive website built for conversion.",
      items: [
        "Home page with value proposition and social proof",
        "How It Works page with product walkthrough",
        "Benefits/ROI page with attorney-focused messaging",
        "About page highlighting 43 years of expertise",
        "Contact/Demo page with calendar integration",
        "SEO foundation and mobile optimization",
      ],
    },
    {
      title: "Demo Booking System",
      description: "Frictionless booking flow integrated with your calendar.",
      items: [
        "Calendar integration (Calendly or similar)",
        "Automated confirmation and reminder emails",
        "No-show follow-up sequences",
      ],
    },
    {
      title: "CRM & Automation Setup",
      description: "Systems to capture, nurture, and track leads.",
      items: [
        "CRM setup and configuration",
        "Lead capture forms",
        "Automated email sequences",
        "Pipeline and reporting dashboards",
      ],
    },
    {
      title: "LinkedIn Advertising",
      description: "Targeted campaigns to reach elder law attorneys.",
      items: [
        "Campaign strategy and structure",
        "Ad creative and copywriting",
        "Audience targeting (9,000 elder law attorneys)",
        "Landing page optimization",
        "Weekly performance reporting",
      ],
    },
  ],

  timeline: [
    {
      title: "Week 1: Discovery & Strategy",
      description: "Kickoff call, brand alignment, funnel strategy, content gathering.",
      payment: "50% deposit due",
    },
    {
      title: "Weeks 2-3: Design & Development",
      description: "Website design, copywriting, page development, mobile optimization.",
    },
    {
      title: "Week 4: Systems Setup",
      description: "CRM integration, automation sequences, ad creative development.",
    },
    {
      title: "Week 5: Launch",
      description: "Website goes live, ads launch, demo bookings begin.",
      payment: "Remaining 50% due",
    },
  ],

  payments: [
    {
      description: "Setup Fee (50% deposit)",
      amount: "$3,250",
      due: "Upon signing",
    },
    {
      description: "Setup Fee (remaining 50%)",
      amount: "$3,250",
      due: "At launch",
    },
    {
      description: "Monthly Retainer",
      amount: "$2,000/mo",
      due: "Monthly, starting at launch",
    },
    {
      description: "Hosting & Maintenance",
      amount: "$100/mo",
      due: "Monthly",
    },
  ],

  totalInvestment: "$6,500 setup + $2,100/mo",

  outOfScope: [
    "Ad spend (recommended $1,500-3,000/mo, paid directly to LinkedIn)",
    "Content writing beyond website copy (blog posts, whitepapers, etc.)",
    "Video production or editing",
    "Software development or modifications to Veterans Benefit Software product",
    "Print materials or offline marketing",
    "Social media management beyond LinkedIn ads",
  ],

  assumptions: [
    "Client will provide timely feedback within 5 business days per the Service Agreement",
    "Client will provide brand assets, logos, and photography as needed",
    "Client will provide access to calendar for booking integration",
    "LinkedIn advertising account will be set up or access provided",
    "Two rounds of design revisions are included per the Service Agreement",
  ],

  notes:
    "This SOW is designed to have your lead generation system live before your new TurboTax-style software launches. Monthly retainer covers ongoing ad management, optimization, and reporting. Retainer can be adjusted or paused with 30 days notice.",
};
