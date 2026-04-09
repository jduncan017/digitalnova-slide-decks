import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "manay-cpa",
  meta: {
    title: "Google Ads Lead Generation Proposal for Manay CPA",
    preparedFor: "Rocio Brandau",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "Local Lead Generation",
        subtitle: "Manay CPA",
        tagline: "April 2026",
        heroImage: "/images/orange/orange-7.webp",
      },
    },

    // Slide 2: The Problem
    {
      type: "problem",
      content: {
        label: "THE CHALLENGE",
        title: "Growing the U.S. Market",
        subtitle:
          "Your Turkish market thrives — but the U.S. side needs a dedicated growth engine.",
        challenges: [
          {
            text: "One U.S. salesperson for all 50 states",
            subtext:
              "Rocio is driving revenue solo — inbound alone can't scale the local market.",
            icon: "Users",
          },
          {
            text: "Internal marketing team focused on Turkish market",
            subtext:
              "Most marketing resources and expertise are allocated to the 75% of clients overseas.",
            icon: "Globe",
          },
          {
            text: "No dedicated U.S. ad campaigns",
            subtext:
              "A recent Meta campaign launched, but no Google Ads targeting local bookkeeping searches.",
            icon: "Target",
          },
          {
            text: "Seasonal spikes, inconsistent pipeline",
            subtext:
              "60 new clients in tax season, dropping to 30-40 off-season — monthly recurring needs consistency.",
            icon: "TrendingUp",
          },
        ],
        sideImage: "/images/orange/orange-4.webp",
        statsOverlay: {
          label: "The Gap",
          value: "75% Turkish",
          subtext: "U.S. market is underserved",
        },
      },
    },

    // Slide 3: The Opportunity
    {
      type: "opportunity",
      content: {
        label: "THE OPPORTUNITY",
        title: "LOCAL MARKET, BIG UPSIDE",
        subtitle:
          "Marietta and metro Atlanta are affordable ad markets with high-intent searchers.",
        opportunities: [
          {
            icon: "Globe",
            factor: "Local Ads Are Affordable",
            result:
              "Targeting Marietta and surrounding areas costs a fraction of national CPA keywords.",
          },
          {
            icon: "Search",
            factor: "High-Intent Searches",
            result:
              "People searching 'bookkeeping services near me' are ready to buy — not browsing.",
          },
          {
            icon: "RefreshCw",
            factor: "Recurring Revenue Focus",
            result:
              "Every bookkeeping client at $500/mo is $6,000+/year — compounding value over time.",
          },
        ],
        callout: {
          icon: "DollarSign",
          title: "One new bookkeeping client per month pays for the entire campaign.",
          subtitle:
            "At $500/mo average client value, ROI is achievable from day one.",
        },
      },
    },

    // Slide 4: How It Works
    {
      type: "processFlow",
      content: {
        label: "THE SYSTEM",
        title: "How We Drive Bookkeeping Leads",
        subtitle:
          "A focused Google Ads funnel designed to attract and convert local business owners.",
        steps: [
          {
            icon: "Search",
            title: "Targeted Google Ads",
            description:
              "We run ads targeting high-intent keywords like 'bookkeeping services Marietta,' 'small business accountant Atlanta,' and 'monthly accounting near me.'",
          },
          {
            icon: "Layout",
            title: "Dedicated Landing Page",
            description:
              "Visitors land on a conversion-optimized page highlighting Manay's monthly accounting packages — not your general website.",
          },
          {
            icon: "MessageSquare",
            title: "Lead Capture & Qualification",
            description:
              "Inquiry forms capture business size, service needs, and budget — so Rocio only talks to qualified prospects.",
          },
          {
            icon: "BarChart",
            title: "Weekly Optimization",
            description:
              "We review performance weekly, adjusting bids, keywords, and ad copy to maximize lead quality and minimize cost per acquisition.",
          },
        ],
        sideImage: "/images/orange/orange-5.webp",
      },
    },

    // Slide 5: ROI
    {
      type: "roi",
      content: {
        label: "THE MATH",
        title: "Why This Works",
        description:
          "At $500/mo per bookkeeping client, even conservative conversion rates deliver strong returns.",
        highlight:
          "One new monthly client covers the cost of the starter campaign — everything after is profit.",
        benefits: [
          {
            icon: "Target",
            title: "Laser-Focused Targeting",
            description:
              "Only show ads to business owners actively searching for accounting help in your area.",
          },
          {
            icon: "DollarSign",
            title: "Compounding Revenue",
            description:
              "Each $500/mo client adds $6,000+ annually — the value stacks month over month.",
          },
          {
            icon: "Users",
            title: "Upsell Opportunity",
            description:
              "New bookkeeping clients become candidates for payroll, tax planning, and HR services.",
          },
          {
            icon: "TrendingUp",
            title: "Prove Then Scale",
            description:
              "Start with a small budget, validate the ROI, then increase spend to grow faster.",
          },
        ],
        metric: {
          value: "$6,000+",
          label: "Annual Value Per Client",
          subtext: "At $500/mo avg. bookkeeping retainer",
        },
      },
    },

    // Slide 6: Projections
    {
      type: "projections",
      content: {
        label: "THE TRAJECTORY",
        title: "What Growth Looks Like",
        subtitle:
          "Three scenarios based on market response and optimization speed.",
        scenarios: [
          {
            id: "optimize",
            label: "Optimize",
            description:
              "Steady, predictable growth as we refine targeting and messaging.",
            curve: "steady",
            default: true,
          },
          {
            id: "accelerate",
            label: "Accelerate",
            description:
              "Strong initial response + aggressive optimization = rapid growth.",
            curve: "fast",
          },
          {
            id: "pivot",
            label: "Pivot & Recover",
            description:
              "Initial tests reveal needed pivots. We adjust strategy, then recover stronger.",
            curve: "recovery",
          },
        ],
        phases: [
          { month: 1, label: "Launch" },
          { month: 2, label: "Learn" },
          { month: 3, label: "Optimize" },
          { month: 4, label: "Scale" },
        ],
        totalMonths: 6,
      },
    },

    // Slide 7: Pricing
    {
      type: "pricing",
      content: {
        label: "INVESTMENT",
        title: "Choose Your Starting Point",
        subtitle:
          "All plans include a $1,000 one-time setup fee for landing page, CRM, and campaign buildout.",
        tiers: [
          {
            title: "Starter",
            subtitle: "Prove the concept",
            price: "$600",
            priceLabel: "/mo total",
            features: [
              "$300/mo ad spend",
              "$300/mo management",
              "Google Ads campaign",
              "Landing page",
              "Lead capture forms",
              "Monthly reporting",
            ],
          },
          {
            title: "Growth",
            subtitle: "Consistent pipeline",
            price: "$2,000",
            priceLabel: "/mo total",
            recommended: true,
            features: [
              "$1,000/mo ad spend",
              "$1,000/mo management",
              "Google Ads campaign",
              "Landing page + A/B testing",
              "CRM lead routing",
              "Weekly optimization calls",
            ],
          },
          {
            title: "Scale",
            subtitle: "Maximize market share",
            price: "$3,000",
            priceLabel: "/mo total",
            features: [
              "$1,500/mo ad spend",
              "$1,500/mo management",
              "Google Ads + retargeting",
              "Multiple landing pages",
              "CRM + automated follow-up",
              "Weekly optimization calls",
            ],
          },
        ],
        note: "$1,000 one-time setup fee applies to all plans • No long-term contracts",
      },
    },

    // Slide 8: Timeline
    {
      type: "timeline",
      content: {
        label: "THE ROADMAP",
        title: "ONBOARDING & TIMELINE",
        subtitle: "From kickoff to live ads in under two weeks.",
        headerAlign: "left",
        layout: "arrow",
        steps: [
          {
            period: "WEEK 1",
            title: "Setup & Strategy",
            icon: "Settings",
            highlight: true,
            items: [
              "Kickoff call & onboarding",
              "Keyword research for Marietta/Atlanta",
              "Landing page design & build",
              "CRM & lead routing setup",
              "Ad copy & campaign structure",
            ],
          },
          {
            period: "WEEK 2",
            title: "Launch & Monitor",
            icon: "Rocket",
            items: [
              "Google Ads campaign goes live",
              "Conversion tracking verified",
              "Daily monitoring first week",
              "Initial performance review",
            ],
          },
          {
            period: "WEEKS 3-4",
            title: "Optimize & Scale",
            icon: "TrendingUp",
            items: [
              "Analyze lead quality with Rocio",
              "Refine keywords & bidding",
              "A/B test ad copy & landing page",
              "First monthly performance report",
            ],
          },
        ],
        note: {
          highlight: "Ready to launch:",
          text: "Campaigns can be live within 10 business days of kickoff.",
        },
      },
    },

    // Slide 9: CTA
    {
      type: "cta",
      content: {
        label: "LET'S GO",
        title: "NEXT STEPS",
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
        ],
        sideImage: "/images/orange/orange-2.webp",
      },
    },
  ],
};
