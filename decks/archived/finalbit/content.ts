import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "finalbit",
  meta: {
    title: "Growth Proposal for FinalBit",
    preparedFor: "Anna Sargsyan",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "Growth Proposal for FinalBit",
        subtitle: "Prepared for Anna Sargsyan",
        heroImage: "/images/film/film-2.webp",
      },
    },

    // Slide 2: Your Situation
    {
      type: "problem",
      content: {
        label: "WHERE YOU ARE",
        title: "Your Situation",
        subtitle:
          "You've built a proven product. Now let's build the system to scale it.",
        challenges: [
          {
            text: "$10k MRR, 50k users — product-market fit proven",
            subtext:
              "You've validated the product. Now it's time to grow intentionally.",
            icon: "TrendingUp",
          },
          {
            text: "B2B pivot ready, but no lead generation system",
            subtext:
              "Studios need what you've built — they just can't find you yet.",
            icon: "Target",
          },
          {
            text: "Lost 50% organic traffic after rebrand",
            subtext: "The Nolan AI → FinalBit transition hit your SEO hard.",
            icon: "Globe",
          },
          {
            text: "2-person team = limited bandwidth",
            subtext:
              "You and Hrachya are focused on product. Marketing needs help.",
            icon: "Users",
          },
        ],
        sideImage: "/images/film/film-1.webp",
        statsOverlay: {
          label: "Goal",
          value: "5 B2B customers/mo",
          subtext: "predictable pipeline, not referrals",
        },
      },
    },

    // Slide 3: The Gap
    {
      type: "beforeAfter",
      content: {
        label: "THE GAP",
        title: "50k Users, Zero B2B Pipeline",
        subtitle:
          "You have a product studios would pay for — but no system to get it in front of them.",
        before: {
          label: "Today",
          title: "Organic Growth Only",
          highlight: "Only",
          items: [
            "Lost SEO traffic from rebrand — recovering slowly",
            "No dedicated B2B lead generation system",
            "Relying on organic discovery and word of mouth",
            "Studios don't know you exist yet",
          ],
        },
        after: {
          label: "The Fix",
          title: "Growth Runs on Autopilot",
          highlight: "Autopilot",
          items: [
            "Targeted Meta ads reach indie filmmakers daily",
            "B2B landing page speaks directly to studios",
            "Demo bookings land on your calendar automatically",
            "CRM nurtures leads while you focus on product",
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
          "A simple four-step system to get qualified studio demos on your calendar.",
        steps: [
          {
            icon: "Video",
            title: "Video Ads Reach Filmmakers",
            description:
              "Testimonial-style creatives on Meta targeting indie filmmakers and small studios.",
          },
          {
            icon: "Globe",
            title: "Landing Page Converts",
            description:
              "B2B-focused messaging that speaks to studio pain points, not individual users.",
          },
          {
            icon: "Calendar",
            title: "Demo Gets Booked",
            description:
              "Calendar integration, no friction — qualified leads book directly.",
          },
          {
            icon: "Settings",
            title: "CRM Nurtures the Lead",
            description:
              "Automated follow-up sequences keep you top of mind until they're ready.",
          },
        ],
        sideImage: "/images/film/film-3.webp",
      },
    },

    // Slide 5: Why Studios Will Choose You
    {
      type: "opportunity",
      content: {
        label: "THE EDGE",
        title: "Why Studios Will Choose You",
        subtitle:
          "You're not competing with Movie Magic on features — you're replacing a broken workflow.",
        opportunities: [
          {
            icon: "Layers",
            factor: "All-in-One Platform",
            result:
              "Competitors require 3-4 separate tools. You're one platform for the entire workflow.",
          },
          {
            icon: "DollarSign",
            factor: "Price Point That Works",
            result:
              "At $2k/mo, you're accessible to indie studios who can't afford enterprise tools.",
          },
          {
            icon: "Zap",
            factor: "AI-Native, Not Bolted On",
            result:
              "Built with AI from day one — not legacy software with AI features added.",
          },
        ],
        callout: {
          icon: "Target",
          title: "Your ICP: Indie studios with 10-20 people.",
          subtitle:
            "Big enough to need real tools, small enough to be underserved by legacy players.",
        },
      },
    },

    // Slide 6: Realistic Expectations
    {
      type: "opportunity",
      content: {
        label: "SETTING EXPECTATIONS",
        title: "Realistic Expectations",
        subtitle: "Here's what success looks like at this budget level.",
        opportunities: [
          {
            icon: "Users",
            factor: "5-10 Demos/Month",
            result:
              "At $1,500/mo ad spend, this is a realistic target for a niche B2B audience in the first month.",
          },
          {
            icon: "Target",
            factor: "Quality Over Quantity",
            result:
              "We're targeting studio leads and producers — people who can actually buy.",
          },
          {
            icon: "TrendingUp",
            factor: "Scalable System",
            result:
              "Once we dial in what works, you can increase budget and scale results.",
          },
        ],
        callout: {
          icon: "Shield",
          title: "This isn't about flooding your inbox with leads.",
          subtitle:
            "It's about getting the right studios in front of your product.",
        },
      },
    },

    // Slide 7: The Math
    {
      type: "roi",
      content: {
        label: "THE MATH",
        title: "Two Customers Cover Everything",
        description:
          "At $2,000/mo per studio, just 2 new B2B customers cover our entire monthly fee. Everything after that is pure growth.",
        highlight: "2 new B2B customers",
        benefits: [
          {
            icon: "Shield",
            title: "No Long-Term Contract",
            description: "Month-to-month after setup",
          },
          {
            icon: "TrendingUp",
            title: "Prove It First",
            description: "We earn the long-term by delivering results",
          },
          {
            icon: "BarChart",
            title: "Full Transparency",
            description: "Weekly reports, you see everything",
          },
          {
            icon: "Target",
            title: "You Control Ad Spend",
            description: "Scale up or pause anytime",
          },
        ],
        metric: {
          value: "2",
          label: "studio customers to break even",
          subtext: "Then it's pure ROI",
        },
      },
    },

    // Slide 8: Timeline
    {
      type: "timeline",
      content: {
        label: "THE ROADMAP",
        title: "Timeline",
        subtitle: "From kickoff to live ads in 3 weeks.",
        headerAlign: "left",
        layout: "arrow",
        steps: [
          {
            period: "WEEK 1",
            title: "Discovery & Strategy",
            icon: "FileText",
            highlight: true,
            items: [
              "Deep dive on your ICP",
              "Messaging & positioning",
              "Ad creative planning",
              "Landing page wireframes",
            ],
          },
          {
            period: "WEEK 2",
            title: "Build",
            icon: "Settings",
            items: [
              "Landing page development",
              "Video ad production",
              "CRM & automation setup",
              "Tracking configuration",
            ],
          },
          {
            period: "WEEK 3+",
            title: "Launch & Optimize",
            icon: "Rocket",
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
          text: "Ads live within 3 weeks of kickoff. Results start immediately, benchmark results within 60 days.",
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
              "Initial tests reveal needed pivots. We adjust strategy, then recover stronger. This is normal for niche B2B audiences.",
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
              "Strong initial response + aggressive optimization = rapid growth. This happens when messaging resonates immediately with your target audience.",
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

    // Slide 10: Investment
    {
      type: "pricing",
      content: {
        label: "INVESTMENT",
        title: "Your Investment",
        tiers: [
          {
            title: "SETUP",
            subtitle: "One-time build of your lead gen system.",
            price: "$2,500",
            priceLabel: "one-time",
            features: [
              "B2B landing page design & build",
              "Video ad creative production",
              "CRM setup & automations",
              "Campaign structure & tracking",
            ],
          },
          {
            title: "MANAGEMENT",
            subtitle: "Ongoing optimization and reporting.",
            price: "$1,500",
            priceLabel: "/month",
            features: [
              "Weekly ad optimization",
              "A/B testing & creative refreshes",
              "Performance reporting",
              "Strategy adjustments",
            ],
          },
          {
            title: "AD SPEND",
            subtitle: "Paid directly to Meta.",
            price: "$1,500",
            priceLabel: "/month",
            features: [
              "Meta (Facebook/Instagram) ads",
              "Recommended starting budget",
              "Scale up as results prove out",
              "You control the spend",
            ],
          },
        ],
        connectorIcons: ["ArrowRight", "Plus"],
        note: "Ad spend is separate — paid directly to Meta, not to us.",
      },
    },

    // Slide 11: Next Steps
    {
      type: "cta",
      content: {
        label: "LET'S GO",
        title: "Next Steps",
        subtitle: "Ready to build your B2B lead engine?",
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
        sideImage: "/images/film/film-3.webp",
      },
    },
  ],
};
