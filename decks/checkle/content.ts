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
            title: "Creative Testing",
            description:
              "Video variants with product splices, not just avatar swaps. Find what actually moves the needle.",
          },
          {
            icon: "MessageSquare",
            title: "Copy & Offer Testing",
            description:
              "Headlines, CTAs, and offer positioning (50% first month test). Systematic, not random.",
          },
          {
            icon: "Calendar",
            title: "No-Show Mitigation",
            description:
              "Audit reminder sequences, tighten the funnel post-booking. Booked demos that actually show up.",
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
        subtitle: "You keep running your current ads until I'm ready to take over.",
        headerAlign: "left",
        layout: "arrow",
        steps: [
          {
            period: "WEEK 1-2",
            title: "Onboarding & Creative",
            icon: "Settings",
            highlight: true,
            items: [
              "Account audit & baseline metrics",
              "Strategy alignment",
              "First creative batch in production",
            ],
          },
          {
            period: "WEEK 3",
            title: "Takeover",
            icon: "Rocket",
            items: [
              "I take over campaign management",
              "New creative variants go live",
              "Testing begins",
            ],
          },
          {
            period: "WEEK 4+",
            title: "Optimize & Scale",
            icon: "TrendingUp",
            items: [
              "Weekly reporting & iteration",
              "Kill losers, scale winners",
              "Adjust based on data",
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
          { icon: "Settings", text: "Campaign management & optimization" },
          { icon: "Video", text: "Creative production (video variants)" },
          { icon: "MessageSquare", text: "Copy & offer testing" },
          { icon: "BarChart", text: "Weekly reporting & analysis" },
        ],
        totals: [
          { label: "Monthly Management", value: "$1,500" },
          { label: "Setup Fee", value: "$0" },
          { label: "Ad Spend (separate)", value: "$3,000/mo" },
        ],
        note: "No long-term contract — month-to-month. Recommend 3-4 months to see full results. Scale ad spend once CPA target is hit.",
      },
    },

    // Slide 7: Guarantee
    {
      type: "growthEngine",
      content: {
        label: "THE COMMITMENT",
        title: "Performance-Based Guarantee",
        subtitle:
          "Sub-$150 CPA by end of month 3 (from ads launch), or month 4 is on me.",
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
