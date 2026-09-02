import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "colorado-business-cpa",
  meta: {
    title: "Marketing Funnel Proposal for Colorado Business CPA",
    preparedFor: "Natalya Itu & Aidan",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "Marketing Funnel Proposal",
        subtitle: "Colorado Business CPA",
        tagline: "May 2026",
        heroImage: "/images/blue/blue-7.jpg",
      },
    },

    // Slide 3: The Opportunity
    {
      type: "opportunity",
      content: {
        label: "The Plan",
        title: "Replace Tax Prep Revenue With Advisory",
        opportunities: [
          {
            icon: "Filter",
            factor: "Qualify Before The Call",
            result:
              "Auto-route low-revenue leads to your affiliate firm. Aidan's calendar fills with real prospects only.",
          },
          {
            icon: "DollarSign",
            factor: "Sell On Tangible Savings",
            result:
              'Rainwater-style framing: "clients save $X on average" makes $6K advisory an obvious yes.',
          },
          {
            icon: "Rocket",
            factor: "Own Your Pipeline",
            result:
              "Paid ads + qualified funnel = predictable advisory leads, not just word-of-mouth tax prep.",
          },
        ],
        callout: {
          icon: "TrendingUp",
          title:
            "Replace 300 exiting tax-prep clients with advisory retainers.",
          subtitle:
            "Same revenue, multiples of the margin, a fraction of the season pressure.",
        },
      },
    },

    // Slide 6: Phase Breakdown
    {
      type: "growthEngine",
      content: {
        label: "Two Phases",
        title: "Aligned With Current Availability",
        leftPanel: {
          icon: "Filter",
          title: "Phase 1: Smart Contact Form",
          sectionLabel: "May — Stop the Spam",
          items: [
            {
              icon: "FileText",
              title: "Qualification Flow",
              description:
                "Multi-step form captures revenue, service interest, and timeline upfront.",
            },
            {
              icon: "UserX",
              title: "Affiliate Redirect",
              description: "Non-fit prospects get referred to affiliate.",
            },
            {
              icon: "Share",
              title: "Referral Tracking",
              description:
                "Referrals logged so you can verify what they actually close.",
            },
            {
              icon: "Database",
              title: "CRM Handoff",
              description:
                "Qualified leads hit your CRM with full context. Aidan opens his calendar to real prospects only.",
            },
          ],
        },
        rightPanel: {
          icon: "Rocket",
          title: "Phase 2: Funnel + Ads",
          sectionLabel: "June — Build the engine",
          items: [
            {
              icon: "Layout",
              title: "Funnel Landing Page",
              description: "Dedicated page built for cold paid traffic.",
            },
            {
              icon: "Target",
              title: "Meta Ads",
              description: "Interrupt-style Meta ads for advisory prospects.",
            },
            {
              icon: "DollarSign",
              title: "Tangible-Savings Hook",
              description:
                '"Clients save $X on average" framing, inspired by Rainwater ads.',
            },
            {
              icon: "LineChart",
              title: "Conversion Tracking",
              description:
                "Every click, lead, and close attributed back to channel and campaign.",
            },
          ],
        },
      },
    },

    // Slide 9: Pricing
    {
      type: "pricing",
      content: {
        label: "INVESTMENT",
        title: "Investment Breakdown",
        tiers: [
          {
            id: "phase-1",
            title: "Smart Contact Form",
            subtitle: "Funnel & track leads from the start.",
            price: "$750",
            priceLabel: "Setup",
            features: [
              "Qualification flow on contact page",
              "Affiliate redirect pop-up + tracking",
              "CRM integration (Pipedrive)",
              "Lead routing + email notifications",
              "1 - 2 weeks to ship",
            ],
          },
          {
            id: "phase-2",
            title: "Funnel & Ads Setup",
            subtitle: "Lead Gen Funnel + Ads",
            price: "$1,250",
            priceLabel: "Setup",
            monthly: "+ $1,500/mo management",
            features: [
              "Dedicated funnel landing page",
              "Meta Ads campaign build",
              "Conversion tracking + attribution",
              "Weekly reporting + optimization",
              "Ad spend billed separately (~$2.5K/mo recommended)",
            ],
          },
        ],
        addOns: {
          optional: [
            {
              id: "seo-reports",
              name: "Monthly SEO Reports",
              price: "$100/mo",
              description:
                "Keyword tracking, competitor movement, and content gap analysis. Feeds your Claude blog workflow.",
            },
            {
              id: "ad-video-editing",
              name: "Meta Ad Video Editing",
              price: "$250/video",
              description:
                "Editing, effects, and subtitles for ad creative. Recording not included — you provide raw footage.",
            },
          ],
        },
        note: "Ad spend goes directly to Meta — not billed through DigitalNova.",
      },
    },

    // Slide 10: CTA
    {
      type: "ctaReviewSOW",
      content: {
        label: "LET'S GO",
        title: "NEXT STEPS",
        subtitle:
          "Click below to approve the scope of work we can get started!",
        instructions: [
          {
            title: "Review the Scope of Work",
            description:
              "Full deliverables, timeline, payment schedule, and assumptions.",
          },
          {
            title: "Submit Payment to Get Started",
            description:
              "ACH or credit card. Phase 1 build starts as soon as payment clears.",
          },
        ],
        reviewButton: {
          text: "Review Scope of Work",
          icon: "FileText",
        },
        profile: {
          image: "/joshua-duncan.png",
          name: "Josh Duncan",
          title: "Founder, DigitalNova Studio",
        },
        contactItems: [
          {
            icon: "Mail",
            text: "josh@digitalnovastudio.com",
            href: "mailto:josh@digitalnovastudio.com",
          },
          {
            icon: "Globe",
            text: "digitalnovastudio.com",
            href: "https://digitalnovastudio.com",
          },
          { icon: "Phone", text: "(315) 276-5928", href: "tel:+13152765928" },
        ],
        sideImage: "/images/blue/blue-2.jpg",
      },
    },
  ],
};
