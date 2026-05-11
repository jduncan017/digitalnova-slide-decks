import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle:
    "Brand Refresh + Website Redesign + Therapist Matching Quiz + Video Setup",

  client: {
    name: "Couples Therapy Services",
    contactName: "Brianna Brunner",
  },

  overview:
    "DigitalNova Studio will deliver a complete brand refresh and website redesign for Couples Therapy Services. Scope includes a refined logo, a brand strategy guide, a modern website that simplifies navigation and showcases each therapist, a therapist matching quiz that routes visitors to the right provider, and a video hosting setup for therapist intro videos. The new site preserves SEO equity and integrates with the Admirra CRM.",

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
        "Modern, scannable website that streamlines the current 71-page site to ~47 focused pages while preserving organic traffic. Built on custom Next.js, hosted on Supabase.",
      items: [
        "Redesigned core pages: Home, About, Services, Therapists, Workshops/Programs, Resources, Blog, Fees/Insurance, Contact",
        "Therapist showcase: directory index + ~10 individual profile pages with bios, credentials, specialties, and booking links",
        "Content consolidation: service & modality pages folded into a focused Services hub",
        "Blog migration of all current posts with proper redirects to preserve SEO",
        'Streamlined site architecture and navigation that guides visitors from "I need help" to "I want to book"',
        "Workshop & program calendar (easy to update via CMS)",
        "Downloadable therapy guide for lead collection",
        "Forms connected to Admirra CRM",
        "SEO redirects (50+) to preserve current rankings",
      ],
    },
    {
      title: "Therapist Matching Quiz",
      description:
        "Interactive quiz that helps visitors identify the right therapist based on their needs, preferences, and presenting issues. Increases qualified bookings and reduces friction at the top of the funnel.",
      items: [
        "Quiz UX/UI design that matches the refreshed brand",
        "Question flow and scoring logic developed with clinical input",
        "Matching algorithm that maps responses to therapist specialties",
        "Results page with recommended therapist(s) and booking CTAs",
        "Lead capture integrated with Admirra CRM",
        "Admin-editable questions and matching rules via CMS",
      ],
    },
    {
      title: "Therapist Intro Video Setup",
      description:
        "Hosting and embed setup for therapist intro/bio videos on individual profile pages. Client provides finished video files; we handle the platform and integration.",
      items: [
        "Video hosting platform setup (Vimeo or equivalent)",
        "Embed components on therapist profile pages",
        "Performance-optimized playback (lazy load, responsive sizing)",
        "Documentation for swapping/updating videos via CMS",
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
      title: "Weeks 4–5: Build, Quiz & Integrations (Jun 8 – Jun 21)",
      description:
        "All pages and features built. Therapist matching quiz designed, scored, and wired to Admirra. Video hosting platform set up and embeds in place on therapist pages. Blog and content migration. CMS setup for therapists, workshops, and blog. Forms and Admirra CRM integration.",
      payment: "30% second payment due after brand delivery / start of build",
    },
    {
      title: "Week 6: QA, Training & Launch (Jun 22 – Jun 26)",
      description:
        "Testing and performance tuning across site, quiz, and video embeds. SEO redirects in place. Domain setup, launch, 60-minute training session.",
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
      {
        description: "Therapist Matching Quiz",
        amount: "$2,500",
        note: "Quiz design, scoring logic, matching algorithm, Admirra CRM integration",
      },
      {
        description: "Therapist Intro Video Setup",
        amount: "$300",
        note: "Video hosting platform setup + embeds on therapist profile pages",
      },
    ],
    subtotal: "$12,100",
    discount: { label: "20% Discount", amount: "-$2,420" },
    total: "$9,680",
    recurring: [
      {
        description: "Site Hosting + Database",
        amount: "$25/mo",
        note: "Required. Hosts the custom Next.js site and database. Paid directly to the hosting vendor.",
      },
      {
        description: "Website Maintenance Plan",
        amount: "$150/mo",
        note: "Required. Includes bug fixes, image swaps, text updates, and minor content tweaks. Does not include new pages, new features, or new sections.",
      },
    ],
  },

  payments: [
    {
      description: "Initial Deposit (30%)",
      amount: "$2,904",
      due: "At kickoff (Week 1)",
    },
    {
      description: "Second Payment (30%)",
      amount: "$2,904",
      due: "After brand delivery / start of website build",
    },
    {
      description: "Final Payment (40%)",
      amount: "$3,872",
      due: "At website launch",
    },
  ],

  totalInvestment:
    "$9,680 one-time + $175/mo recurring (Hosting $25 + Maintenance $150)",

  outOfScope: [
    "Therapist intro/bio video production (filming and editing) — client provides finished video files",
    "Ad spend and ad campaign management",
    "Domain registration and SSL renewal (~$10–60/year)",
    "Third-party software subscriptions (hosting, database, CRM, calendar tools, video hosting)",
  ],

  assumptions: [
    "Two-business-day feedback windows on revisions and approvals",
    "Client provides access to GoDaddy (domain), Google Search Console, GA4, Admirra CRM, and current website",
    "Two rounds of revisions per phase per Service Agreement",
    "Timeline assumes no major scope changes mid-build",
  ],

  notes:
    "Therapist Matching Quiz and Therapist Intro Video Setup are now included in scope. Quiz launches with the site; video embeds activate as soon as client delivers finished video files.",

  paymentLink: "https://pay.gocardless.com/BRT01KRC6X4ZWCRH0P1APVNXFFJWK",
  paymentLinkCC: "https://buy.stripe.com/8x2bJ02QL2a81jefM2d7q09",
};
