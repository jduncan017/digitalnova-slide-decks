import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Brand Refresh + Website Redesign",

  client: {
    name: "Couples Therapy Services",
    contactName: "Brianna Brunner",
  },

  overview:
    "DigitalNova Studio will deliver a complete brand refresh and website redesign for Couples Therapy Services. Scope includes a refined logo, a brand strategy guide, and a modern website that simplifies navigation, showcases each therapist, preserves SEO equity, and integrates with the Admirra CRM.",

  startDate: "May 18, 2026",
  estimatedCompletion: "June 26, 2026 (6 weeks)",

  deliverables: [
    {
      title: "Brand Development — Complete Brand Package",
      description:
        "Refined logo and full brand strategy guide to anchor the website and all future marketing collateral (business cards, referral materials, social).",
      items: [
        "Logo refinement — improved readability, current aesthetic preserved",
        "Logo files in PNG, SVG, JPG, and PDF",
        "Brand Strategy Guide: typography & color palette",
        "Mission, values, and audience analysis",
        "Communication guidelines and mood board",
      ],
    },
    {
      title: "Website Design & Development",
      description:
        "Modern, scannable website that streamlines the current 71-page site to ~47 focused pages while preserving organic traffic. Platform (Framer or custom Next.js) finalized at kickoff.",
      items: [
        "Redesigned core pages: Home, About, Services, Therapists, Workshops/Programs, Resources, Blog, Fees/Insurance, Contact",
        "Therapist showcase: directory index + ~10 individual profile pages with bios, credentials, specialties, and booking links",
        "Content consolidation: service & modality pages folded into a focused Services hub",
        "Blog migration of all current posts with proper redirects to preserve SEO",
        'Streamlined site architecture and navigation that guides visitors from "I need help" to "I want to book"',
        "Workshop & program calendar (easy to update via CMS)",
        "Homepage couples therapy assessment quiz",
        "Downloadable therapy guide for lead collection",
        "Forms connected to Admirra CRM",
        "SEO redirects (50+) to preserve current rankings",
      ],
    },
    {
      title: "Launch Support",
      description:
        "Everything required to take the site live cleanly and hand it off to your team.",
      items: [
        "Domain setup and DNS migration",
        "Search Console & GA4 baseline",
        "60-minute training session on the CMS / editor",
        "2 weeks of post-launch support",
      ],
    },
  ],

  timeline: [
    {
      title: "Week 1: Kickoff & Foundations (May 18–22)",
      description:
        "Deposit + contract signed. Site audit, content inventory, sitemap approval, analytics baseline. Brand questionnaire returned.",
      payment: "30% deposit due at kickoff",
    },
    {
      title: "Weeks 2–3: Brand + Base Site Design (May 25 – Jun 5)",
      description:
        "Logo refinement and brand strategy delivered. Website design concept reviewed and revised. Homepage finished with all features.",
    },
    {
      title: "Weeks 4–5: Build & Integrations (Jun 8 – Jun 21)",
      description:
        "All pages and features built. Blog and content migration. CMS setup for therapists, workshops, and blog. Forms and Admirra CRM integration.",
      payment: "30% second payment due after brand delivery / start of build",
    },
    {
      title: "Week 6: QA, Training & Launch (Jun 22 – Jun 26)",
      description:
        "Testing and performance tuning. SEO redirects in place. Domain setup, launch, 60-minute training session.",
      payment: "Final 40% due at launch",
    },
  ],

  investmentBreakdown: {
    items: [
      {
        description: "Brand Development — Complete Brand Package",
        amount: "$1,500",
        note: "Logo refinement + Brand Strategy Guide",
      },
      {
        description: "Website Design & Development",
        amount: "$7,800",
        note: "Full redesign, ~10 therapist profiles, blog migration, CRM integration, SEO redirects",
      },
    ],
    subtotal: "$9,300",
    discount: { label: "20% Discount", amount: "-$1,860" },
    total: "$7,440",
    recurring: [
      {
        description: "Site Hosting",
        amount: "$25–30/mo",
        note: "Framer (~$30/mo) or Supabase (~$25/mo) for custom Next.js. Paid directly to vendor. Specific platform finalized at kickoff.",
      },
      {
        description: "Website Maintenance Plan",
        amount: "$150/mo",
        note: "Optional. Includes bug fixes, image swaps, text updates, and minor content tweaks. Does not include new pages, new features, or new sections.",
      },
    ],
  },

  payments: [
    {
      description: "Initial Deposit (30%)",
      amount: "$2,232",
      due: "At kickoff (Week 1)",
    },
    {
      description: "Second Payment (30%)",
      amount: "$2,232",
      due: "After brand delivery / start of website build",
    },
    {
      description: "Final Payment (40%)",
      amount: "$2,976",
      due: "At website launch",
    },
  ],

  totalInvestment: "$7,440 (20% discount applied)",

  outOfScope: [
    "Therapist Matching Quiz — quoted separately at $2,500, available as a follow-on engagement",
    "Therapist intro/bio video production and video hosting platform setup — can be added later when videos are ready (~$300 setup)",
    "Ad spend and ad campaign management",
    "Domain registration and SSL renewal (~$10–60/year)",
    "Third-party software subscriptions (hosting, database, CRM, calendar tools)",
  ],

  assumptions: [
    "Two-business-day feedback windows on revisions and approvals",
    "Client provides access to GoDaddy (domain), Google Search Console, GA4, Admirra CRM, and current website",
    "Two rounds of revisions per phase per Service Agreement",
    "Timeline assumes no major scope changes mid-build",
  ],

  notes:
    "Therapist Matching Quiz currently postponed. Same for therapist intro videos — easy add when assets are ready.",

  paymentLink: "https://pay.gocardless.com/BRT01KR4RX90EMYDAD66WSSQTD89G",
  paymentLinkCC: "https://buy.stripe.com/8x228q1MH4igaTOgQ6d7q08",
};
