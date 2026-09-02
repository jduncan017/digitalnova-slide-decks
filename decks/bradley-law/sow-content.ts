import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Website Rebuild and Growth Program",

  client: {
    name: "The Bradley Law Firm, PLLC",
    contactName: "J. Anthony Bradley",
  },

  overview:
    "We will rebuild bradley-law.com as a 17 page foundation site, with the veterans benefits practice retargeted from Germantown-only to national coverage. The firm's existing agency continues running Google Ads untouched until the new site launches. At launch, all accounts transfer into the firm's name and DigitalNova takes over ad management, reporting and an ongoing content program of four new pages per month.",

  startDate: "September 15, 2026",
  estimatedCompletion: "November 10, 2026",

  deliverables: [
    {
      title: "Discovery and Content Map",
      description:
        "Completed in the first two weeks, before any build work begins. Delivered as a written plan for the firm to review and approve.",
      items: [
        "Full content map: every planned page, its target search term and monthly search volume",
        "Site architecture and navigation structure for approval",
        "Ownership and access audit covering ad account, Google Business Profile, domain, hosting and phone number",
        "Google Search Console and Analytics review, with a documented traffic baseline",
        "Redirect plan for all retired pages from the existing site",
        "Written summary of what the firm currently owns and what will transfer at launch",
      ],
    },
    {
      title: "Foundation Website Build (17 pages)",
      description:
        "Built from scratch: modern, clean, fast and designed to convert visitors into consultations, with the veterans benefits section written for national rather than Germantown-only coverage.",
      items: [
        "5 core pages: home, about the firm, attorney profile, testimonials, contact",
        "7 veterans benefits pages: Aid and Attendance hub, survivors pension, VA Form 21-2680, pay chart, assisted living benefits, pension eligibility, VA accredited attorney",
        "5 Tennessee pages: Shelby County Probate Court, TennCare eligibility, probate, powers of attorney, estate planning hub",
        "Full 301 redirect map covering all retired URLs from the existing site",
        "Schema markup including FAQPage and Attorney, with named author attribution",
        "Site speed, accessibility and mobile optimization",
      ],
    },
    {
      title: "Launch and Ownership Transfer",
      description:
        "All account changes happen at launch, not before. The firm's current agency continues running Google Ads without interruption until this point. The firm owns every asset and account throughout; nothing is held by DigitalNova.",
      items: [
        "New site goes live with the full redirect map in place",
        "Domain, hosting, ad account, tracking and Google Business Profile confirmed as owned by the firm, and transferred into the firm's name where they are not",
        "Google Ads campaigns rebuilt against the new pages",
        "Conversion tracking installed from click through to booked consultation",
        "Atty.ai integration for call and chat qualification data",
        "Reporting dashboard set up with weekly cost per qualified lead",
      ],
    },
    {
      title: "Monthly Growth Retainer",
      description:
        "Begins at site launch and continues month to month.",
      items: [
        "4 new cluster pages per month, built against the published content map",
        "Ongoing Google Ads management and optimization",
        "AI search visibility tracking across ChatGPT, Perplexity and Google AI Overviews",
        "Monthly performance report including citation share and cost per qualified lead",
        "Website hosting, maintenance, updates and security (normally $100 per month, waived while the retainer is active)",
      ],
    },
    {
      title: "Optional Add-On: Logo Refresh Package",
      description:
        "Quoted separately at $500 one time. Not required for the build and can be added at any point.",
      items: [
        "Logo redrawn as clean vector artwork suitable for modern web use",
        "Horizontal, stacked and icon-only variations",
        "Light and dark versions, plus a single-color version for print and signage",
        "Favicon and social profile crops",
        "Exported in SVG, PNG and PDF with a short usage guide",
      ],
    },
  ],

  timeline: [
    {
      title: "Weeks 1 to 2: Kickoff",
      description:
        "Content map delivered, site architecture approved, ownership and access audit completed. Build begins.",
      payment: "Deposit due at signing",
    },
    {
      title: "Weeks 3 to 6: Planned pause",
      description:
        "Scheduled parental leave, disclosed in advance and already reflected in these dates. The firm's current campaigns continue running as they are.",
    },
    {
      title: "By week 8: Launch and Handover",
      description:
        "All 17 pages live with the redirect map in place, accounts transferred into the firm's name, Google Ads rebuilt and taken over.",
      payment: "Balance due at launch",
    },
    {
      title: "Month 3 onward: Content Engine",
      description:
        "Four new pages per month, ongoing ad management, monthly reporting.",
      payment: "Retainer begins",
    },
  ],

  payments: [
    {
      description: "Foundation build deposit",
      amount: "$4,800",
      due: "On signing",
    },
    {
      description: "Foundation build balance",
      amount: "$4,800",
      due: "At site launch",
    },
    {
      description: "Growth retainer",
      amount: "$2,500 per month",
      due: "Monthly, beginning at site launch",
    },
    {
      description: "Logo refresh package (optional)",
      amount: "$500",
      due: "On request, invoiced separately",
    },
  ],

  totalInvestment: "$9,600 build + $2,500/mo (optional logo package $500)",

  outOfScope: [
    "Google Ads spend, billed directly to the firm's own account",
    "Atty.ai subscription and usage fees, billed directly by Atty.ai",
    "Video production and photography",
    "Print materials and social media management",
    "Legal review of website content",
    "Domain registration and third-party subscriptions",
    "State expansion pages beyond the foundation build (quoted separately)",
  ],

  assumptions: [
    "Client provides feedback within 5 business days at each review stage",
    "Client provides logo files, photography and any existing brand assets",
    "Client provides access to hosting, domain, Google Ads, Google Business Profile and Atty.ai",
    "Two revision rounds per the DigitalNova Service Agreement",
    "All legal content is reviewed and approved by the firm before publication",
    "Timeline assumes no major scope changes after kickoff",
    "The firm's existing agency continues running Google Ads until launch; no changes are made to those campaigns beforehand",
    "The four week pause in weeks 3 to 6 is scheduled parental leave and is already reflected in the dates above",
    "Retainer is month to month with 30 days notice to cancel",
  ],

  notes:
    "The veterans benefits pages are written for national coverage on the basis that the firm holds VA accreditation and accepts claims nationwide. All benefit figures and eligibility thresholds published on the site will carry a visible last-updated date and will be refreshed annually as part of the retainer.",
};
