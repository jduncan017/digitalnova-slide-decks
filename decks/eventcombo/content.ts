import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "eventcombo",
  meta: {
    title: "Growth Proposal for EventCombo",
    preparedFor: "Saroosh Gull",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "Growth Proposal for EventCombo",
        subtitle: "Prepared for Saroosh Gull",
        heroImage: "/images/blue/blue-1.jpg",
      },
    },

    // Slide 2: Your Situation
    {
      type: "problem",
      content: {
        label: "WHERE YOU ARE",
        title: "Your Situation",
        subtitle:
          "You've built a strong foundation. The challenge now is visibility.",
        challenges: [
          {
            text: "$120K MRR, growing 2x",
            subtext: "Targeting 5x — you need a scalable acquisition channel.",
            icon: "TrendingUp",
          },
          {
            text: "Enterprise clients locked in",
            subtext: "Porsche, Deloitte, CBRE, Columbia — serious credibility.",
            icon: "Building",
          },
          {
            text: "Outbound working, inbound starting",
            subtext: "2-3 quality leads per day from content is a great sign.",
            icon: "Target",
          },
          {
            text: "Integration capabilities = key differentiator",
            subtext:
              "Salesforce, HubSpot, Marketo — this is your edge vs. competitors.",
            icon: "Layers",
          },
        ],
        sideImage: "/images/blue/blue-2.jpg",
        statsOverlay: {
          label: "Goal",
          value: "5x growth",
          subtext: "with predictable lead gen",
        },
      },
    },

    // Slide 3: The Gap
    {
      type: "beforeAfter",
      content: {
        label: "THE GAP",
        title: "You're Invisible to High-Intent Buyers",
        subtitle:
          "Buyers searching for event software → Google → Find competitors → You lose deals you never knew existed.",
        before: {
          label: "Today",
          title: "Great Product, Zero Visibility",
          highlight: "Little",
          items: [
            "Ranking page 4+ for high-intent keywords",
            "Organic traffic mostly from hosted events, not buyers",
            "Integration keywords (your differentiator) = invisible",
            "Competitors winning deals you never see",
          ],
        },
        after: {
          label: "The Fix",
          title: "Targeted Visibility for Ready Buyers",
          highlight: "Ready",
          items: [
            "Google Ads on long-tail, high-intent keywords",
            "Landing pages built for C-suite decision makers",
            "Integration messaging front and center",
            "Track everything → prove ROI → scale what works",
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
          "A simple four-step system to get qualified demos on your calendar.",
        steps: [
          {
            icon: "Target",
            title: "We Target High-Intent Buyers",
            description:
              "Google Ads on long-tail keywords where buyers are actively searching.",
          },
          {
            icon: "Globe",
            title: "Landing Page Converts",
            description:
              "Integration-focused messaging built for C-suite decision makers.",
          },
          {
            icon: "Calendar",
            title: "Demo Gets Booked",
            description:
              "Calendar integration, no friction — qualified leads book directly.",
          },
          {
            icon: "BarChart",
            title: "CRM Tracks Everything",
            description:
              "Weekly reporting, full ROI visibility, data-driven optimization.",
          },
        ],
        sideImage: "/images/blue/blue-3.jpg",
      },
    },

    // Slide 5: What We Target
    {
      type: "opportunity",
      content: {
        label: "THE KEYWORDS",
        title: "What We Target",
        subtitle:
          "Long-tail, high-intent keywords where buyers are ready to evaluate — and you're invisible.",
        connectorIcon: "Plus",
        opportunities: [
          {
            icon: "Layers",
            factor: "Integration Keywords",
            result:
              '"event management software Salesforce integration" — your differentiator, zero visibility.',
          },
          {
            icon: "Building",
            factor: "Enterprise Keywords",
            result:
              '"enterprise event registration platform" — decision makers searching, you are not showing.',
          },
          {
            icon: "Target",
            factor: "Platform-Specific Keywords",
            result:
              '"event software HubSpot integration" — buyers self-qualifying for exactly what you offer.',
          },
        ],
        callout: {
          icon: "Search",
          title:
            "These aren't high-volume keywords — they're high-value keywords.",
          subtitle:
            "Lower competition, higher intent, better conversion rates.",
        },
      },
    },

    // Slide 6: Realistic Expectations
    {
      type: "opportunity",
      content: {
        label: "SETTING EXPECTATIONS",
        title: "Realistic Expectations",
        subtitle: "C-suite enterprise ≠ volume game. Quality over quantity.",
        opportunities: [
          {
            icon: "Users",
            factor: "5-15 Qualified Demos/Month",
            result:
              "At this budget and audience, this is realistic. These are decision-makers, not tire-kickers.",
          },
          {
            icon: "Target",
            factor: "Quality Over Quantity",
            result:
              "We're targeting heads of marketing and VPs — not event planners who can't buy.",
          },
          {
            icon: "DollarSign",
            factor: "One Deal Changes Everything",
            result:
              "At enterprise pricing, one closed deal covers this entire engagement for the year.",
          },
        ],
        callout: {
          icon: "Shield",
          title: "This isn't about flooding your inbox with leads.",
          subtitle:
            "It's about getting the right people in front of your sales team.",
        },
      },
    },

    // Slide 7: The Math (moved before pricing)
    {
      type: "roi",
      content: {
        label: "THE MATH",
        title: "One Deal Covers Everything",
        description:
          "At enterprise pricing, 1 closed deal likely pays for months of marketing. Everything after that is pure growth.",
        highlight: "1 closed deal",
        benefits: [
          {
            icon: "Shield",
            title: "No Long-Term Contract",
            description: "Month-to-month during trial",
          },
          {
            icon: "TrendingUp",
            title: "Lower Budget = Lower Risk",
            description: "Start at $1,500/mo ad spend, not $10K",
          },
          {
            icon: "BarChart",
            title: "Full Transparency",
            description: "Weekly reports, you see everything",
          },
          {
            icon: "Target",
            title: "Prove It First",
            description: "We earn the long-term by delivering results",
          },
        ],
        metric: {
          value: "1",
          label: "enterprise deal to break even",
          subtext: "Then it's pure ROI",
        },
      },
    },

    // Slide 8: Investment
    {
      type: "pricing",
      content: {
        label: "INVESTMENT",
        title: "Start With a Trial",
        subtitle: "3 months to prove it works, then scale.",
        tiers: [
          {
            title: "TRIAL PERIOD",
            subtitle: "Prove the ROI before committing long-term.",
            price: "$2,500",
            priceLabel: "Setup",
            monthly: "$1,500/mo",
            features: [
              "Landing page/funnel build",
              "Google Ads campaign setup",
              "CRM integration",
              "Weekly performance reports",
              "No contract — month-to-month",
            ],
            recommended: false,
          },
          {
            title: "POST-TRIAL",
            subtitle: "Once we've proven results.",
            price: "$2,000",
            priceLabel: "/month",
            features: [
              "Everything from trial",
              "A/B testing & optimization",
              "Expanded keyword targeting",
              "Ongoing optimization",
            ],
          },
        ],
        connectorIcons: ["ArrowRight"],
        note: "Ad spend is separate at $1,500 - $2,000/mo to start.",
      },
    },

    // Slide 9: Timeline
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
            period: "MID-FEBRUARY",
            title: "Kickoff",
            icon: "Rocket",
            highlight: true,
            items: [
              "Discovery call + offer audit",
              "Keyword research & strategy",
              "Landing page wireframes",
            ],
          },
          {
            period: "WEEK 1-2",
            title: "Build",
            icon: "Settings",
            items: [
              "Landing page development",
              "Ad campaign structure",
              "CRM integration setup",
              "Tracking & analytics",
            ],
          },
          {
            period: "WEEK 3+",
            title: "Launch & Optimize",
            icon: "Target",
            items: [
              "Ads go live",
              "Demos start booking",
              "Weekly reporting begins",
              "Ongoing A/B testing",
            ],
          },
        ],
        note: {
          highlight: "Timeline:",
          text: "Ads live within 2-3 weeks of kickoff. Results start immediately, with benchmark results within 30 days.",
        },
      },
    },

    // Slide 10: Next Steps
    {
      type: "cta",
      content: {
        label: "LET'S GO",
        title: "Next Steps",
        subtitle: "Ready to get enterprise buyers finding you on Google?",
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
        sideImage: "/images/blue/blue-4.jpg",
      },
    },
  ],
};
