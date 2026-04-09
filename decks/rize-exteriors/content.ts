import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "rize-exteriors",
  meta: {
    title: "Client Acquisition Proposal for Rize Exteriors",
    preparedFor: "Tara Burkhart & Unique Hernandez",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "CLIENT ACQUISITION PROPOSAL",
        subtitle: "Rize Exteriors",
        tagline: "April 2026",
        heroImage: "/images/construction/1.jpg",
        preparedFor: "Tara Burkhart & Unique Hernandez",
      },
    },

    // Slide 2: The Problem
    {
      type: "problem",
      content: {
        label: "SOUND FAMILIAR?",
        title: "What's Holding You Back",
        challenges: [
          {
            text: "Subcontractor work leaves you without reviews",
            subtext:
              "Google rankings require social proof. Without them, you're invisible on search engines.",
            icon: "Star",
          },
          {
            text: "Previous agency delivered spam, not leads",
            subtext: "Money spent, nothing to show for it.",
            icon: "Phone",
          },
          {
            text: "SEO alone is too slow for where you are now",
            subtext:
              "SEO builds over months. You need leads coming in while you build your reputation.",
            icon: "Clock",
          },
          {
            text: "Full installs are the goal — but you're getting repairs",
            subtext:
              "The strategy has to target the right jobs from the start, not just any roofing traffic.",
            icon: "Building",
          },
        ],
        sideImage: "/images/orange/orange-4.webp",
        statsOverlay: {
          label: "The Reality",
          value: "Only small repairs",
          subtext: "no full install jobs from paid spend",
        },
      },
    },

    // Slide 3: The Opportunity
    {
      type: "opportunity",
      content: {
        label: "THE OPPORTUNITY",
        title: "THE MARKET IS WIDE OPEN",
        subtitle:
          "Denver commercial roofing has strong search demand — and surprisingly few advertisers competing for it.",
        opportunities: [
          {
            icon: "Search",
            factor: "Low Competition",
            result:
              "Competition scores of 0.07–0.31 out of 1.0. Not many advertisers are fighting for these terms right now.",
          },
          {
            icon: "Calendar",
            factor: "Perfect Timing",
            result:
              "Search volume spikes hard in summer (July–Sept). Starting in April means you're optimized and ready when it peaks.",
          },
          {
            icon: "DollarSign",
            factor: "High-Value Traffic",
            result:
              "Commercial roofing jobs run $50K–$500K+. You don't need volume — you need the right calls.",
          },
        ],
        callout: {
          icon: "TrendingUp",
          title: "Two keywords with $0 competition right now.",
          subtitle:
            '"Flat roof repair Denver" and "commercial roof repair Denver" have real search volume and almost no one bidding on them.',
        },
      },
    },

    // Slide 4: Process Flow — How Google Ads Works
    {
      type: "processFlow",
      content: {
        label: "THE APPROACH",
        title: "HOW WE RUN ADS",
        subtitle:
          "A focused system built around one outcome: qualified roofing calls.",
        steps: [
          {
            icon: "Target",
            title: "Strategy & Build",
            description:
              "We research the highest-converting keywords for commercial and residential roofing in the Denver/Lakewood area, build a dedicated landing page, and configure automations we can report on.",
          },
          {
            icon: "Rocket",
            title: "Launch & Track",
            description:
              "Ads go live with a custom reporting dashboard so you see exactly what you're spending and what calls are coming in. No guessing, no mystery. Your budget works for you from day one.",
          },
          {
            icon: "BarChart",
            title: "Optimize & Scale",
            description:
              "We review performance on a regular cadence — cutting keywords that waste money and doubling down on what drives full-install calls. Over time, your cost per lead drops and volume grows.",
          },
        ],
        sideImage: "/images/orange/orange-3.webp",
      },
    },

    // Slide 5: Pricing — Google Ads Management
    {
      type: "pricing",
      content: {
        label: "GOOGLE ADS MANAGEMENT",
        title: "Choose Your Investment Level",
        subtitle:
          "Both plans get weekly reporting. The difference is budget scale and advanced tactics.",
        tiers: [
          {
            id: "ads-growth",
            title: "Growth",
            subtitle: "$2,000–3,000/mo ad spend",
            price: "$1,000/mo",
            priceLabel: "retainer",
            recommended: true,
            features: [
              "Core Google Search campaigns",
              "Custom landing page build",
              "Call tracking & attribution",
              "Custom reporting dashboard",
              "CRM setup & booking automation",
              "Weekly performance reports",
              "Dedicated Slack channel",
              "Keyword & bid optimization",
            ],
          },
          {
            id: "ads-scale",
            title: "Scale",
            subtitle: "$3,500–5,000/mo ad spend",
            price: "$1,500/mo",
            priceLabel: "retainer",
            features: [
              "Everything in Growth",
              "Google Local Service Ads (LSA)",
              "Retargeting campaigns",
              "Automated Google review requests",
              "A/B testing on landing page",
              "Competitor keyword targeting",
              "Monthly strategy call",
            ],
          },
        ],
        addOns: {
          required: [
            {
              id: "ads-setup",
              name: "One-Time Setup Fee",
              price: "$1,000",
              description:
                "Funnel & landing page build, reporting dashboard, CRM setup & automations, call tracking, Google review request automation, ad account structure.",
            },
          ],
          optional: [
            {
              id: "seo",
              name: "SEO Management",
              price: "$500/mo",
              description:
                "On-page optimization, local keyword targeting, and content — build long-term rankings alongside paid ads.",
            },
            {
              id: "gbp",
              name: "Google Business Profile",
              price: "$250",
              description:
                "Optimize your GBP listing to appear in 'roofer near me' searches and accelerate review collection.",
            },
            {
              id: "lsa",
              name: "Google Local Service Ads (LSA)",
              price: "$350",
              description:
                "Pay-per-verified-lead ads with a 'Google Guaranteed' badge. Includes verification coordination & account setup. Included in Scale plan.",
            },
          ],
        },
        note: "Ad spend is paid directly to Google — separate from the retainer. LSA ad spend is also billed directly by Google on a pay-per-verified-lead basis.",
      },
    },

    // Slide 6: ROI
    {
      type: "roi",
      content: {
        label: "THE MATH",
        title: "Why The Numbers Work",
        description:
          "Commercial roofing jobs don't need volume — they need close rate. One deal changes everything.",
        highlight: "One deal changes everything.",
        benefits: [
          {
            icon: "Search",
            title: "7–9 Leads/Month",
            description:
              "At $3,500–5,000/mo ad spend, you capture 140–180 clicks with a 5% conversion rate — roughly 7–9 qualified calls per month.",
          },
          {
            icon: "DollarSign",
            title: "$50K+ per job",
            description:
              "Commercial roofing jobs are high-ticket by nature. Even a single mid-size install dwarfs months of ad spend.",
          },
          {
            icon: "TrendingUp",
            title: "Low Competition Now",
            description:
              "Competition scores of 0.07–0.31 out of 1.0 mean you can own these keywords before other advertisers catch on.",
          },
          {
            icon: "Calendar",
            title: "Summer Peak Ahead",
            description:
              "Search volume spikes July–September. Starting in April means your campaigns are dialed in right when demand hits.",
          },
        ],
        metric: {
          value: "1",
          label: "Job covers 12+ months of ads",
          subtext: "At an average commercial job of $80K–$200K",
        },
      },
    },

    // Slide 7: Deliverables — Rising Summit pivot
    {
      type: "deliverables",
      content: {
        label: "WHILE WE'RE AT IT",
        title: "LET'S LAUNCH RISING SUMMIT TOO",
        subtitle:
          "Rising Summit Premier Metals just started taking jobs. Let's build the digital foundation before momentum stalls.",
        deliverables: [
          {
            number: "01",
            title: "Custom Website",
            icon: "Layout",
            items: [
              "5-page custom design",
              "Mobile-first, fast load times",
              "Contact forms & lead capture",
              "On-page SEO optimization",
              "Built to convert visitors into calls",
            ],
          },
          {
            number: "02",
            title: "Brand Package",
            icon: "Sparkles",
            items: [
              "Logo design",
              "Brand discovery workshop",
              "21-page brand essentials guide",
              "Full color palette & fonts",
              "Audience & voice definition",
            ],
          },
          {
            number: "03",
            title: "Why Us",
            icon: "Shield",
            items: [
              "We've done this for roofing before",
              "In-state partner who knows Colorado",
              "Full-service — no juggling vendors",
              "One contact for ads + web + brand",
              "Built for growth, not just launch",
            ],
          },
        ],
      },
    },

    // Slide 7: Pricing — Website Build
    {
      type: "pricingWithAddons",
      content: {
        label: "WEBSITE INVESTMENT",
        title: "Rising Summit Website Package",
        basePackage: {
          id: "website-base",
          label: "SIGNATURE WEBSITE",
          title: "Custom Website Build",
          description:
            "Fully custom design built from scratch to match your brand — not a template.",
          price: "$3,500",
          priceLabel: "one-time",
          features: [
            "5 pages, fully custom design",
            "Mobile & tablet optimized",
            "On-page SEO (meta, structure, schema)",
            "Contact forms & lead capture",
            "Basic integrations (forms, tool embeds)",
            "Fast load times & performance tuned",
          ],
        },
        addOns: {
          featured: {
            id: "brand-package",
            icon: "Sparkles",
            title: "Brand Essentials Package",
            subtitle: "Get your brand off the ground the right way",
            price: "$1,500",
            priceLabel: "one-time",
            features: [
              "Logo design package",
              "Brand discovery workshop",
              "21-page brand essentials guide",
              "Full color palette & typography",
              "Tone of voice & messaging",
            ],
          },
          items: [
            {
              id: "additional-pages",
              name: "Additional Pages",
              description: "Each page beyond the base 5",
              price: "$500/page",
            },
            {
              id: "hosting",
              name: "Hosting",
              description: "Monthly hosting of the site",
              price: "$30/month (required)",
            },
            {
              id: "site-maintenance",
              name: "Site Maintenance",
              description: "Includes Hosting & ongoing site management",
              price: "$100/month",
            },
          ],
        },
      },
    },

    // Slide 9: Timeline
    {
      type: "timeline",
      content: {
        label: "THE ROADMAP",
        title: "HOW WE GET STARTED",
        subtitle: "Rize ads live fast. Rising Summit right behind it.",
        layout: "grid",
        steps: [
          {
            period: "WEEK 1",
            title: "Setup & Strategy",
            icon: "FileText",
            highlight: true,
            items: [
              "Deposit & kickoff",
              "Keyword research & targeting",
              "Landing page design begins",
              "CRM & booking automation",
              "Call tracking configuration",
            ],
          },
          {
            period: "WEEK 2",
            title: "Ads Go Live",
            icon: "Rocket",
            items: [
              "Landing page launched",
              "Google Ads campaign live",
              "Reporting dashboard active",
              "First leads coming in",
            ],
          },
          {
            period: "WEEKS 2–4",
            title: "Rising Summit Build",
            icon: "Layout",
            items: [
              "Brand discovery session",
              "Logo & identity design",
              "Website design & build",
              "Review rounds & QA",
            ],
          },
          {
            period: "ONGOING",
            title: "Optimize & Report",
            icon: "BarChart",
            items: [
              "Regular performance reports",
              "Bid & keyword optimization",
              "Rising Summit site live",
              "Scale what's working",
            ],
          },
        ],
        note: {
          highlight: "Target:",
          text: "Rize ads live within 2 weeks. Rising Summit site launched by week 4.",
        },
      },
    },

    // Slide 10: CTA
    {
      type: "cta",
      content: {
        label: "LET'S GO",
        title: "NEXT STEPS",
        subtitle:
          "Let's turn your roofing work into your own client pipeline — starting now.",
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
        sideImage: "/images/orange/orange-2.webp",
      },
    },
  ],
};
