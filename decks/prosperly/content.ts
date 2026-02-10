import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "prosperly",
  meta: {
    title: "Growth Proposal for Prosperly",
    preparedFor: "Alexander Noren & Adam",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "Growth Proposal for Prosperly",
        subtitle: "Prepared for Alexander Noren & Adam",
        heroImage: "/images/blue/blue-7.jpg",
      },
    },

    // Slide 2: Your Situation
    {
      type: "problem",
      content: {
        label: "WHERE YOU ARE",
        title: "Your Situation",
        subtitle:
          "You've built a great product with a great close rate. The bottleneck is pipeline.",
        challenges: [
          {
            text: "$10K+ MRR, low-ticket SaaS",
            subtext:
              "$20–$150/mo per location. Low price = easy sell, almost zero churn.",
            icon: "TrendingUp",
          },
          {
            text: "Law firms are your sweet spot",
            subtext:
              "60% close rate, <3% churn, ~$3K LTV. They don't haggle on price.",
            icon: "Building",
          },
          {
            text: "Cold email gets you ~10 demos/week",
            subtext:
              "Working well, but single-channel. Goal is 6/day across all channels.",
            icon: "Target",
          },
          {
            text: "Paid ads haven't stuck — yet",
            subtext:
              "Bad Meta agency, Google worked until Google broke it. You're testing Meta with a new team.",
            icon: "DollarSign",
          },
        ],
        sideImage: "/images/blue/blue-4.jpg",
        statsOverlay: {
          label: "Goal",
          value: "6 demos/day",
          subtext: "across all channels",
        },
      },
    },

    // Slide 3: The Gap
    {
      type: "beforeAfter",
      content: {
        label: "THE GAP",
        title: "You're Closing, but Capped on Pipeline",
        subtitle:
          "Cold email gets you 10 demos/week. To hit 6/day, you need a second channel that runs on autopilot.",
        before: {
          label: "Today",
          title: "Single-Channel Dependency",
          highlight: "Capped",
          items: [
            "Cold email only — ~10 demos/week",
            "Tried Meta — bad agency, no results",
            "Tried Google — worked until Google's team broke it",
            "Currently testing Meta with another agency",
          ],
        },
        after: {
          label: "The Fix",
          title: "An Independent, High-Intent Demo Channel",
          highlight: "Scalable",
          items: [
            "Google Ads targeting people searching for review software",
            "Landing page built around the pain points that close deals",
            "Demos book straight into your calendar",
            "Complements cold email + Meta — not competing",
          ],
        },
      },
    },

    // Slide 4: How It Works
    {
      type: "processFlow",
      content: {
        label: "THE SYSTEM",
        title: "How It Works",
        subtitle: "A simple four-step system to get demos on your calendar.",
        steps: [
          {
            icon: "Search",
            title: "We Target High-Intent Keywords",
            description:
              '"Review management software," "get more Google reviews," — people already looking for exactly what you sell.',
          },
          {
            icon: "Globe",
            title: "Landing Page Converts",
            description:
              "Built around the two pain points that close deals: stop chasing happy clients for reviews + filter out unhappy clients before they go public.",
          },
          {
            icon: "Calendar",
            title: "Demo Gets Booked",
            description: "Straight into your calendar.",
          },
          {
            icon: "BarChart",
            title: "We Track Everything",
            description:
              "Weekly reporting, full visibility on cost per demo. You see what's working and what's not.",
          },
        ],
        sideImage: "/images/blue/blue-3.jpg",
      },
    },

    // Slide 5: What We Target
    {
      type: "growthEngine",
      content: {
        label: "THE KEYWORDS",
        title: "What We Target",
        subtitle:
          "Two campaign tiers. Unlike cold outreach, we don't have to pick a vertical — anyone searching is already qualified. The paid landscape is wide open.",
        leftPanel: {
          icon: "Search",
          title: "Software Buyer Keywords",
          sectionLabel: "HIGH INTENT",
          items: [
            {
              icon: "Check",
              title: "review management software",
              description: "1,600 searches/mo — core product search",
            },
            {
              icon: "Check",
              title: "reputation management software",
              description:
                "2,400 searches/mo — broadest category, highest volume",
            },
            {
              icon: "Check",
              title: "Google review management software",
              description: "320 searches/mo — platform-specific",
            },
            {
              icon: "Check",
              title: "reputation management for small business",
              description: "210 searches/mo — ICP qualifier, your exact market",
            },
          ],
        },
        rightPanel: {
          icon: "Target",
          title: "Pain-Point Keywords",
          sectionLabel: "HIGH VOLUME",
          items: [
            {
              icon: "Check",
              title: "how to get more Google reviews",
              description: "720 searches/mo — highest volume pain-point search",
            },
            {
              icon: "Check",
              title: "get more Google reviews",
              description: "590 searches/mo — direct intent, strong volume",
            },
            {
              icon: "Check",
              title: "stop negative Google reviews",
              description: "Prosperly's filtering feature solves this directly",
            },
          ],
        },
      },
    },

    // Slide 6: Investment
    {
      type: "pricing",
      content: {
        label: "INVESTMENT",
        title: "Simple, Transparent Pricing",
        subtitle: "Setup + monthly management. No long-term contract.",
        tiers: [
          {
            title: "SETUP",
            subtitle: "Month 1 — Build your lead gen system.",
            price: "$2,500",
            priceLabel: "one-time",
            features: [
              "Landing page / funnel build",
              "Google Ads campaign setup",
              "Keyword research & strategy",
              "CRM integration",
              "Text & email automations",
              "Tracking & analytics",
            ],
          },
          {
            title: "MONTHLY",
            subtitle: "Ongoing campaign management.",
            price: "$1,000",
            priceLabel: "/month",
            recommended: true,
            features: [
              "Google Ads management",
              "Weekly performance reports",
              "A/B testing & optimization",
              "Landing page updates",
              "No contract — month-to-month",
            ],
          },
        ],
        connectorIcons: ["ArrowRight"],
        note: "Ad spend is separate — $1,500/mo recommended to start. Scale as cost per demo drops.",
      },
    },

    // Slide 7: The Math
    {
      type: "roi",
      content: {
        label: "THE MATH",
        title: "It Pays for Itself",
        description:
          "Conservatively est. 6 new customers/month. At $250 setup & $120/mo each, that's $2,200+ in upfront revenue against a $2,500/mo investment, and then every customer sticks around for ~3 years.",
        highlight: "covers its own cost in month one",
        benefits: [
          {
            icon: "Users",
            title: "6–9 New Customers",
            description:
              "Conservative estimate based on booked demos and close rate",
          },
          {
            icon: "DollarSign",
            title: "$2,200 – $3,600",
            description: "Upfront monthly revenue not including subscriptions.",
          },
        ],
        metric: {
          value: "6+",
          label: "new customers per month",
          subtext: "from one channel, on autopilot",
        },
      },
    },

    // Slide 8: Timeline
    {
      type: "timeline",
      content: {
        label: "THE ROADMAP",
        title: "Timeline",
        subtitle: "From kickoff to live ads in 2 weeks.",
        headerAlign: "left",
        layout: "arrow",
        steps: [
          {
            period: "MID-MARCH",
            title: "Kickoff & Build",
            icon: "Settings",
            highlight: true,
            items: [
              "Keyword research & strategy",
              "Landing page / funnel build",
              "Google Ads campaign setup",
              "CRM + text & email automation setup",
            ],
          },
          {
            period: "WEEK 3",
            title: "Ads Go Live",
            icon: "Rocket",
            items: [
              "Campaigns launch on Google",
              "Demos start booking",
              "Tracking & analytics active",
            ],
          },
          {
            period: "WEEK 4+",
            title: "Optimize & Scale",
            icon: "TrendingUp",
            items: [
              "Weekly reporting & iteration",
              "A/B testing: keywords, copy, landing page",
              "Scale spend as cost per demo drops",
            ],
          },
        ],
        note: {
          highlight: "Timeline:",
          text: "Ads live within 2-3 weeks of kickoff. Initial results within weeks, benchmark performance within 60-90 days.",
        },
      },
    },

    // Slide 9: Projections
    {
      type: "projections",
      content: {
        label: "THE TRAJECTORY",
        title: "What Growth Looks Like",
        subtitle:
          "Three scenarios based on market response and optimization speed.",
        scenarios: [
          {
            id: "pivot",
            label: "Pivot & Recover",
            description:
              "Initial tests reveal needed pivots. We adjust strategy, then recover stronger. This is normal — Google needs optimization time.",
            curve: "recovery",
          },
          {
            id: "optimize",
            label: "Optimize",
            description:
              "Steady, predictable growth as we refine targeting and messaging. Most campaigns follow this pattern with consistent improvement month over month.",
            curve: "steady",
            default: true,
          },
          {
            id: "accelerate",
            label: "Accelerate",
            description:
              "Keywords and messaging click right away. We hit targets early and scale ad spend and expand keyword coverage to drive volume higher.",
            curve: "fast",
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

    // Slide 10: Guarantee
    {
      type: "growthEngine",
      content: {
        label: "THE COMMITMENT",
        title: "Performance-Based Guarantee",
        subtitle:
          "10+ demos/month from Google Ads by end of month 3, or month 4 management is on me.",
        leftPanel: {
          icon: "Shield",
          title: "What Makes This Work",
          sectionLabel: "REQUIREMENTS",
          items: [
            {
              icon: "DollarSign",
              title: "Minimum $1,500/Mo Ad Spend",
              description: "Maintained throughout the engagement",
            },
            {
              icon: "Settings",
              title: "Platform Access",
              description: "Google Ads + CRM access provided within week 1",
            },
            {
              icon: "Calendar",
              title: "Show Up to Calls",
              description: "Reschedule 24hrs ahead, within 3 days",
            },
            {
              icon: "Clock",
              title: "Landing Page Approvals",
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
              icon: "Globe",
              title: "Landing Page & Funnel",
              description: "Custom-built assets are yours to keep",
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

    // Slide 11: Next Steps
    {
      type: "cta",
      content: {
        label: "LET'S GO",
        title: "Next Steps",
        subtitle: "Ready to turn Google into your second demo channel?",
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
        sideImage: "/images/blue/blue-2.jpg",
      },
    },
  ],
};
