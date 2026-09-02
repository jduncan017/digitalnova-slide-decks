import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "checkle",
  meta: {
    title: "Growth Proposal for Checkle",
    preparedFor: "Cole Rickles",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "Growth Proposal for Checkle",
        subtitle: "Prepared for Cole Rickles",
        heroImage: "/images/orange/orange-1.webp",
      },
    },

    // Slide 2: Your Situation
    {
      type: "problem",
      content: {
        label: "WHERE YOU ARE",
        title: "Your Situation",
        subtitle:
          "You've built something that works. The challenge is making the math scale.",
        challenges: [
          {
            text: "$30K MRR, ~600 restaurants",
            subtext:
              "Product-market fit is proven. This isn't a product problem.",
            icon: "TrendingUp",
          },
          {
            text: "80% close rate when prospects show up",
            subtext: "Sales isn't the problem — getting qualified demos is.",
            icon: "Target",
          },
          {
            text: "One ArcAds video carrying all the weight",
            subtext:
              "No systematic creative testing. No headline/CTA variations.",
            icon: "Video",
          },
          {
            text: "$250 CPA on demos, target is sub-$100",
            subtext: "The math doesn't scale yet. Cut CPA to double ad spend.",
            icon: "DollarSign",
          },
        ],
        sideImage: "/images/orange/orange-2.webp",
        statsOverlay: {
          label: "Goal",
          value: "Sub-$100 CPA",
          subtext: "so you can scale profitably",
        },
      },
    },

    // Slide 3: Why I'm a Fit
    {
      type: "successFactors",
      content: {
        label: "WHY ME",
        title: "Why I'm a Fit",
        subtitle:
          "12 years in hospitality operations. I know how restaurant owners think.",
        factors: [
          {
            factor: "Hospitality Background",
            result:
              "12 years in restaurant/bar operations — I understand what messages land with owners.",
          },
          {
            factor: "Current B2B SaaS Results",
            result:
              "Running Meta ads at $80 CPA for SaaS founders ($10K+ MRR) — a harder TAM than restaurants.",
          },
          {
            factor: "Out-Test, Not Out-Spend",
            result:
              "I'm not going to throw money at your problem. I'm going to test my way to your target CPA.",
          },
          {
            factor: "Small Team, High Attention",
            result:
              "Six clients total. You're not account #47 at a big agency.",
          },
        ],
        differentiator: {
          text: "I don't need to learn your industry. I've worked in it. That's the difference between guessing and knowing.",
          highlight: "I know how your clients think.",
        },
      },
    },

    // Slide 4: How It Works
    {
      type: "processFlow",
      content: {
        label: "THE SYSTEM",
        title: "The Levers We'll Pull",
        subtitle: "Disciplined testing, clear reporting, relentless iteration.",
        steps: [
          {
            icon: "Video",
            title: "Creative & A/B Testing",
            description:
              "Video variants with product splices. Lead forms vs demo booking, pricing offers, headline variations — systematic testing.",
          },
          {
            icon: "Users",
            title: "Lookalike Audiences",
            description:
              "Upload your existing customer list to build lookalike audiences. Target restaurant owners who match your best customers.",
          },
          {
            icon: "Settings",
            title: "Lead Nurturing Automation",
            description:
              "N8N-powered sequences: follow-up emails, UpCall integration, and no-show mitigation. No lead falls through the cracks.",
          },
          {
            icon: "BarChart",
            title: "Weekly Reporting",
            description:
              "You see everything — no black box. Full transparency on what's working and what's not.",
          },
        ],
        sideImage: "/images/orange/orange-3.webp",
      },
    },

    // Slide 5: Timeline
    {
      type: "timeline",
      content: {
        label: "THE ROADMAP",
        title: "Timeline",
        subtitle:
          "You keep running your current ads until I'm ready to take over.",
        headerAlign: "left",
        layout: "arrow",
        steps: [
          {
            period: "FEB 23 – MAR 5",
            title: "Onboarding & Creative",
            icon: "Settings",
            highlight: true,
            items: [
              "Account audit & baseline metrics",
              "Strategy alignment & lookalike audiences",
              "First creative batch in production",
              "N8N lead nurturing automation setup",
            ],
          },
          {
            period: "MAR 6",
            title: "Ads Go Live",
            icon: "Rocket",
            items: [
              "I take over campaign management",
              "New creative variants go live",
              "A/B testing: lead forms vs demo booking",
            ],
          },
          {
            period: "MAR – MAY",
            title: "Optimize & Scale",
            icon: "TrendingUp",
            items: [
              "Weekly reporting & iteration",
              "Kill losers, scale winners",
              "Scale ad spend once CPA target hit",
            ],
          },
        ],
      },
    },

    // Slide 6: Investment
    {
      type: "valueStack",
      content: {
        label: "INVESTMENT",
        title: "Simple, No-BS Pricing",
        subtitle:
          "Your stack is ready. We're jumping straight into optimization.",
        items: [
          {
            icon: "MessageSquare",
            text: "A/B testing: lead forms, demos, offers, copy",
          },
          {
            icon: "Users",
            text: "Lookalike audience targeting from your customer list",
          },
          {
            icon: "Zap",
            text: "N8N lead nurturing automation + UpCall integration",
          },
          { icon: "BarChart", text: "Weekly reporting & analysis" },
        ],
        totals: [
          { label: "Monthly Management", value: "$1,500" },
          { label: "Lead Nurturing (N8N)", value: "$50/mo" },
          { label: "Setup Fee", value: "$0" },
          { label: "Ad Spend (separate)", value: "$3,000/mo" },
        ],
        note: "No long-term contract — month-to-month. Recommend 3-4 months to see full results. Scale ad spend once CPA target is hit. Guarantee: sub-$100 CPA by end of month 3 or month 4 is free.",
      },
    },

    // Slide 7: Guarantee
    {
      type: "growthEngine",
      content: {
        label: "THE COMMITMENT",
        title: "Performance-Based Guarantee",
        subtitle:
          "Sub-$100 CPA by end of month 3 (from ads launch), or month 4 is on me.",
        leftPanel: {
          icon: "Shield",
          title: "What Makes This Work",
          sectionLabel: "REQUIREMENTS",
          items: [
            {
              icon: "DollarSign",
              title: "Minimum Ad Spend",
              description: "$3,000/mo maintained throughout",
            },
            {
              icon: "Settings",
              title: "Platform Access",
              description: "HubSpot + Meta provided within week 1",
            },
            {
              icon: "Calendar",
              title: "Show Up to Calls",
              description: "Reschedule 24hrs ahead, within 3 days",
            },
            {
              icon: "Clock",
              title: "Creative Approvals",
              description: "Within 48 hours to keep momentum",
            },
            {
              icon: "MessageSquare",
              title: "No Surprise Changes",
              description: "No major offer/pricing shifts mid-test",
            },
          ],
        },
        rightPanel: {
          icon: "Gift",
          title: "What You Get Either Way",
          sectionLabel: "GUARANTEED",
          items: [
            {
              icon: "BarChart",
              title: "Weekly Reporting",
              description: "Full visibility from day one",
            },
            {
              icon: "Video",
              title: "Creative Assets",
              description: "All video variants are yours to keep",
            },
            {
              icon: "Search",
              title: "Full Transparency",
              description: "You see what's working and what's not",
            },
          ],
        },
      },
    },

    // Slide 8: Next Steps
    {
      type: "cta",
      content: {
        label: "LET'S GO",
        title: "Next Steps",
        subtitle: "Ready to cut your CPA in half?",
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
          {
            icon: "Phone",
            text: "(315) 276-5928",
            href: "tel:+13152765928",
          },
        ],
        sideImage: "/images/orange/orange-4.webp",
      },
    },
  ],
};
