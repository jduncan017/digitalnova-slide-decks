import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Website Redesign",

  client: {
    name: "Colorado Business CPA",
    contactName: "Natalya Itu",
  },

  overview:
    "DigitalNova Studio will design and develop a modern, SEO-optimized 11-page website for Colorado Business CPA. The new site will clearly communicate services, improve search visibility, and convert visitors into leads — ready before peak tax season.",

  startDate: "February 3, 2026",
  estimatedCompletion: "March 7, 2026",

  deliverables: [
    {
      title: "Website Redesign (11 Pages)",
      description:
        "Modern, professional website built on Framer with SEO foundation.",
      items: [
        "Homepage with clear value proposition",
        "Services index page",
        "About / Team page (all 15 team members)",
        "Resources page (tax guides, tools)",
        "Careers page",
        "Contact page with discovery call booking",
      ],
    },
    {
      title: "Service Pages (5 Pages)",
      description:
        "Dedicated landing pages for each service line, optimized for SEO.",
      items: [
        "Tax Planning and Tax Preparation",
        "Accounting and Bookkeeping (CAS - Client Accounting Services)",
        "Tax Advisory Service (TAS)",
        "CFO Services",
        "Business Valuations (advisory on business sales and acquisitions)",
      ],
    },
    {
      title: "SEO Foundation",
      description:
        "Technical SEO setup to maintain and improve search rankings.",
      items: [
        "Clean, semantic URL structure",
        "Schema markup for local business",
        "All redirects from old URLs handled",
        "Meta titles and descriptions",
        "Mobile and tablet optimization",
      ],
    },
    {
      title: "Site Features",
      description: "Functionality and integrations.",
      items: [
        "Contact forms with email notifications",
        "Discovery call booking integration",
        "Built on Framer for easy self-editing",
        "Fast load times",
      ],
    },
  ],

  timeline: [
    {
      title: "Week 1: Kickoff & Assets",
      description:
        "Kickoff call, Google Analytics setup, assets collected (logo, photos, content).",
      payment: "50% deposit due",
    },
    {
      title: "Week 2: Design & Approval",
      description:
        "Homepage design, service page layouts, your feedback & approval.",
    },
    {
      title: "Weeks 3-4: Build & Optimize",
      description:
        "Full site build in Framer, mobile responsiveness, SEO implementation, forms & integrations.",
    },
    {
      title: "Week 5: Launch & Training",
      description:
        "Final review, URL redirects, DNS transfer, Framer editing walkthrough.",
      payment: "Remaining 50% due",
    },
  ],

  payments: [
    {
      description: "Deposit (50%)",
      amount: "$2,500",
      due: "Upon signing",
    },
    {
      description: "Final payment (50%)",
      amount: "$2,500",
      due: "At website launch",
    },
    {
      description: "Hosting & Maintenance",
      amount: "$30/mo",
      due: "Monthly, starting at launch",
    },
  ],

  totalInvestment: "$5,000",

  outOfScope: [
    "Google Business Profile optimization (opted out)",
    "Blog setup and content (opted out)",
    "Logo design or brand identity work",
    "Ongoing SEO services or link building",
  ],

  assumptions: [
    "Client will provide timely feedback within 5 business days per the Service Agreement",
    "Client will provide team photos, headshots, and any required imagery",
    "Client will provide or approve copy for service descriptions",
    "Client will provide access to domain registrar for DNS transfer at launch",
    "Two rounds of design revisions are included per the Service Agreement",
    "Existing content (tax guides, resources) will be provided or approved for migration",
  ],

  notes:
    "Timeline targets launch before peak tax season. Site will be built on Framer, giving you full access to make simple edits yourself after launch.",
};
