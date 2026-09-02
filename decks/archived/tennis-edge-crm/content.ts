import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "tennis-edge-crm",
  meta: {
    title: "Growth Proposal for Tennis Edge CRM",
    preparedFor: "Bruce Hartrich",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "Growth Proposal for Tennis Edge CRM",
        subtitle: "Prepared for Bruce Hartrich",
        heroImage: "/images/tennis/tennis-1.webp",
      },
    },

    // Slide 2: Your Situation
    {
      type: "problem",
      content: {
        label: "YOUR SITUATION",
        title: "Great Product, No Pipeline",
        subtitle:
          "You've built a modern CRM that solves real problems for country clubs. Now you need a way to put it in front of decision-makers.",
        challenges: [
          {
            text: "Product just rebuilt and ready to sell",
            subtext:
              "About to pilot with a country club in Boca. Need proof of work, then scale.",
            icon: "Rocket",
          },
          {
            text: "Personal contacts get you started, not scaling",
            subtext:
              "A handful of warm leads, but you need a repeatable channel.",
            icon: "Users",
          },
          {
            text: "Your ICP isn't searching for alternatives",
            subtext:
              "Directors aren't Googling 'better CRM.' They're frustrated, but not actively looking.",
            icon: "Search",
          },
          {
            text: "Meta Ads already proved the model",
            subtext:
              "Previously ran Meta at ~$50/lead for B2B. You know the channel works.",
            icon: "Target",
          },
        ],
        sideImage: "/images/tennis/tennis-2.webp",
        statsOverlay: {
          label: "Prior Meta Performance",
          value: "~$50/lead",
          subtext: "B2B — proven channel",
        },
      },
    },

    // Slide 3: The Gap
    {
      type: "beforeAfter",
      content: {
        label: "THE GAP",
        title: "From Contacts to a Real Pipeline",
        subtitle:
          "Personal outreach gets the first few deals. A systematic funnel gets you the next hundred.",
        before: {
          label: "Today",
          title: "Manual Outreach Only",
          highlight: "Limited",
          items: [
            "Relying on personal network and referrals",
            "Difficult to reach clubs who don't know you exist",
            "Can't scale: every deal requires a personal connection",
          ],
        },
        after: {
          label: "With Us",
          title: "Systematic Demo Pipeline",
          highlight: "Scalable",
          items: [
            "Meta Ads put Tennis Edge in front of club directors daily",
            "Landing page built around the pain points that close deals",
            "Demos book straight onto your calendar",
            "Runs in the background while you close and pilot",
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
        subtitle:
          "A four-step system to get qualified demos with club decision-makers on your calendar.",
        steps: [
          {
            icon: "Target",
            title: "We Target Club Decision-Makers",
            description:
              "Meta Ads targeting tennis directors, and facility owners. Your ICP isn't searching, so we put Tennis Edge in front of them.",
          },
          {
            icon: "Globe",
            title: "Landing Page Converts",
            description:
              "Built around the pain points that resonate: antiquated software, no CRM, losing members without knowing it.",
          },
          {
            icon: "Calendar",
            title: "Demo Gets Booked",
            description:
              "Prospects book a demo directly on your calendar. No back-and-forth, no missed leads. You show up and close.",
          },
          {
            icon: "BarChart",
            title: "We Optimize Weekly",
            description:
              "Full ROI reporting, ad performance, and conversion rates. We iterate on creative, targeting, and messaging to drive cost down.",
          },
        ],
        sideImage: "/images/tennis/tennis-3.webp",
      },
    },

    // Slide 6: The Math
    {
      type: "roi",
      content: {
        label: "THE MATH",
        title: "One Deal Covers the Investment",
        description:
          "At ~$50/lead from Meta, a $1,500/mo ad budget generates roughly 30 leads per month. Even with conservative close rates, the numbers work fast — especially when a single country club is worth $12,000/year.",
        highlight: "one country club covers months of marketing",
        benefits: [
          {
            icon: "Users",
            title: "~30 Leads/Month",
            description:
              "Based on your proven ~$50 CPL from prior Meta campaigns",
          },
          {
            icon: "Calendar",
            title: "10–15 Demos Booked",
            description:
              "Landing page optimized for demo conversion, not just clicks",
          },
          {
            icon: "DollarSign",
            title: "$1,500 – $12,000/yr",
            description:
              "Per client depending on club size — recurring annual revenue",
          },
          {
            icon: "TrendingUp",
            title: "Compounds Over Time",
            description:
              "Every client retained is annual recurring. Your base grows month over month.",
          },
        ],
        metric: {
          value: "$12K",
          label: "per country club, per year",
          subtext: "one close pays for the entire engagement",
        },
      },
    },

    // Slide 7: Timeline
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
              "ICP research & audience building",
              "Landing page / funnel build",
              "Meta Ads campaign setup",
              "Ad creative & copy development",
              "Tracking & analytics setup",
            ],
          },
          {
            period: "WEEK 3",
            title: "Ads Go Live",
            icon: "Rocket",
            items: [
              "Campaigns launch on Meta",
              "Demos start booking",
              "Initial performance data flows in",
            ],
          },
          {
            period: "WEEK 4+",
            title: "Optimize & Scale",
            icon: "TrendingUp",
            items: [
              "Weekly reporting & iteration",
              "A/B testing: creative, audiences, landing page",
              "Scale spend as cost per demo drops",
            ],
          },
        ],
        note: {
          highlight: "Timeline:",
          text: "Ads live within 2–3 weeks of kickoff. Initial results within weeks, benchmark performance within 60–90 days.",
        },
      },
    },

    // Slide 9: Investment
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
              "Meta Ads campaign setup",
              "Audience research & targeting",
              "Ad creative & copy",
              "CRM integration",
              "Tracking & analytics",
            ],
          },
          {
            title: "MONTHLY",
            subtitle: "Ongoing campaign management.",
            price: "$1,500",
            priceLabel: "/month",
            features: [
              "Meta Ads management",
              "Weekly performance reports",
              "A/B testing & optimization",
              "Landing page updates",
              "New ad creative as needed",
              "No contract — month-to-month",
            ],
          },
        ],
        connectorIcons: ["ArrowRight"],
        note: "Ad spend is separate — $1,500/mo recommended to start based on prior campaign performance. Scale as cost per demo drops.",
      },
    },

    // Slide 10: Next Steps
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
        sideImage: "/images/tennis/tennis-4.webp",
      },
    },
  ],
};
