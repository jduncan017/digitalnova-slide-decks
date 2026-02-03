import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Website & Lead Generation System",

  client: {
    name: "Ria Growth Catalyst",
    contactName: "Julien Baneux",
    contactEmail: "julien@riagrowthcatalyst.com",
  },

  overview:
    "A conversion-focused website rebuild and LinkedIn paid ads system to generate qualified demo bookings. This engagement includes a collaborative approach where Julien's team provides initial mockups and content structure, with DigitalNova providing strategic feedback, final development, imagery, and full ads management.",

  startDate: "February 10, 2025",
  estimatedCompletion: "March 2025 (ads launch)",

  deliverables: [
    {
      title: "Website Development (8 Pages)",
      description:
        "Conversion-focused website built in Framer, in collaboration with your team. Includes training on how to edit and manage your site.",
      items: [
        "Landing page with clear value proposition",
        "Pricing page",
        "About page",
        "Resources: Blog",
        "Resources: News",
        "Resources: Case Studies",
        "Contact page",
        "Terms and Conditions",
      ],
    },
    {
      title: "Collaborative Design Process",
      description: "Working alongside Leo to refine mockups and structure.",
      items: [
        "Feedback and direction on mockups",
        "Content structure guidance",
        "Conversion optimization recommendations",
        "Final implementation of approved designs",
      ],
    },
    {
      title: "Imagery & Visual Assets",
      description: "Professional imagery to support the website and ads.",
      items: [
        "Stock imagery selection and licensing",
        "Visual asset optimization",
        "Ad creative imagery",
      ],
    },
    {
      title: "Funnel & CRM Setup",
      description: "Lead capture and booking system integration.",
      items: [
        "Calendar booking integration for demos",
        "Lead qualification flow",
        "CRM setup and integration",
        "Automation flows for lead nurture",
      ],
    },
    {
      title: "LinkedIn Paid Ads",
      description: "Full campaign build and ongoing management.",
      items: [
        "Campaign strategy and structure",
        "Funnel setup",
        "ICP targeting",
        "Ad creative development",
        "Weekly video performance reports",
        "Ongoing A/B testing and optimization",
      ],
    },
  ],

  timeline: [
    {
      title: "Week 1: Discovery & Planning",
      description:
        "Sitemap finalization, content structure review, begin building website.",
      payment: "50% deposit due ($1,250)",
    },
    {
      title: "Weeks 2-3: Review & Finish Build",
      description:
        "Landing page review, iterative feedback on mockups, final design implementation, page development.",
    },
    {
      title: "Week 4: Launch & Systems",
      description: "Website launch, website training.",
      payment: "50% balance due ($1,250)",
    },
    {
      title: "Beginning of March: Ads Setup",
      description:
        "Funnel setup, offer creation, ad creative development, automation setup.",
    },
    {
      title: "Mid to Late March: Ads Launch",
      description: "Ads launch, weekly reporting begins, ongoing optimization.",
      payment: "Monthly retainer begins ($1,500/mo)",
    },
  ],

  payments: [
    {
      description: "Setup Fee - 50% Deposit",
      amount: "$1,250",
      due: "Upon signing",
    },
    {
      description: "Setup Fee - 50% Balance",
      amount: "$1,250",
      due: "At website launch",
    },
    {
      description: "Monthly Retainer (Ads Management)",
      amount: "$1,500/mo",
      due: "Starts at ads launch (March)",
    },
    {
      description: "Cal.com (Calendar Booking)",
      amount: "$15/mo",
      due: "Starts at website launch",
    },
  ],

  totalInvestment: "$2,500 setup + $1,515/mo",

  outOfScope: [
    "Ad spend (paid directly to LinkedIn, recommended $1,500-2,000/mo)",
    "Additional pages beyond proposed sitemap ($250/page)",
    "Content writing beyond website copy (blog posts, whitepapers)",
    "Video production or editing",
    "Photography beyond stock imagery",
    "Ongoing blog/content management after launch",
    "CRM subscription (client's choice of platform)",
  ],

  assumptions: [
    "Julien's team will provide initial mockups and content structure for website pages",
    "Client will provide timely feedback within 5 business days",
    "Client will provide access to domain, CRM, and LinkedIn Ads account",
    "Client owns LinkedIn Ads account; DigitalNova manages campaigns within client's account",
    "Two rounds of design revisions included per the Service Agreement",
    "Website content provided by client is accurate and approved for use",
    "Scope limited to 8 pages as listed; additional pages are $250/page",
  ],

  notes:
    "Setup fee reflects 50% discount due to collaborative approach — your team provides mockups and content structure, we provide strategic feedback, final development, imagery, and full execution. Monthly retainer and recurring fees are standard rates.",

  contractLink:
    "https://www.jotform.com/sign/260299269043059/invite/01kggevcgh5c1957157eacfc14",
};
