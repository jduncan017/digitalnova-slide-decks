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
        heroImage: "/images/orange/orange-1.webp",
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
          "People are searching for roofers in Denver every day — and most of your competitors aren't running ads to capture them.",
        opportunities: [
          {
            icon: "Search",
            factor: "Fewer Advertisers Than You'd Think",
            result:
              "Most Denver roofers rely on referrals and yard signs. The ones showing up on Google Ads are a small group — there's room for you.",
          },
          {
            icon: "Calendar",
            factor: "Perfect Timing",
            result:
              "Roofing searches spike hard in summer. Starting now means your campaigns are dialed in and optimized before peak season hits.",
          },
          {
            icon: "DollarSign",
            factor: "You Don't Need Volume",
            result:
              "Commercial jobs run $15K–$80K. You're not chasing hundreds of leads — you need a handful of the right calls every month.",
          },
        ],
        callout: {
          icon: "TrendingUp",
          title: "High-value searches with almost no advertisers.",
          subtitle:
            'Terms like "flat roof repair Denver" and "commercial roof repair Denver" have real search volume and very few companies bidding on them.',
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

    // Slide 5: LSA Explainer — Two Channels, One System
    {
      type: "growthEngine",
      content: {
        label: "TWO CHANNELS, ONE SYSTEM",
        title: "GOOGLE ADS + LOCAL SERVICE ADS",
        subtitle:
          "We run both channels together so you're capturing leads at every level of Google search.",
        leftPanel: {
          icon: "Search",
          title: "Google Search Ads",
          sectionLabel: "TARGETED KEYWORDS",
          items: [
            {
              icon: "Target",
              title: "Precision Targeting",
              description:
                'Your ad shows when someone searches specific terms like "commercial roofing Denver" or "flat roof repair."',
            },
            {
              icon: "Layout",
              title: "Custom Landing Pages",
              description:
                "We build dedicated pages designed to turn clicks into calls — not just your homepage.",
            },
            {
              icon: "BarChart",
              title: "Full Control",
              description:
                "We choose the keywords, set the bids, and optimize based on what's actually driving jobs.",
            },
          ],
        },
        rightPanel: {
          icon: "Shield",
          title: "Local Service Ads",
          sectionLabel: "PAY PER LEAD",
          items: [
            {
              icon: "Star",
              title: "Google Guaranteed",
              description:
                "A trust badge from Google that shows above your ad — builds credibility even without dozens of reviews.",
            },
            {
              icon: "DollarSign",
              title: "Only Pay for Real Leads",
              description:
                "You're charged per verified lead, not per click. Bad leads can be disputed and refunded.",
            },
            {
              icon: "Home",
              title: 'Dominates "Near Me" Searches',
              description:
                "LSAs show at the very top of Google — above regular ads. Huge for residential and local searches.",
            },
          ],
        },
      },
    },

    // Slide 6: Pricing — Google Ads Management
    {
      type: "pricing",
      content: {
        label: "AD MANAGEMENT",
        title: "Choose Your Management Tier",
        subtitle:
          "Both tiers include weekly reporting and full campaign management. The difference is channels and optimization depth.",
        tiers: [
          {
            id: "ads-growth",
            title: "Growth",
            subtitle: "Google Search Ads",
            price: "$1,000/mo",
            priceLabel: "retainer",
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
            subtitle: "Google Search Ads + LSA",
            price: "$1,500/mo",
            priceLabel: "retainer",
            recommended: true,
            features: [
              "Everything in Growth",
              "LSA setup, management & lead disputes",
              "Ongoing Google review request automation",
              "Retargeting campaigns",
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
          ],
        },
        note: "LSA charges and ad spend are paid directly to Google, separate from the retainer.",
      },
    },

    // Slide 7: ROI
    {
      type: "roi",
      content: {
        label: "THE MATH",
        title: "Why The Numbers Work",
        description:
          "Roofing clicks aren't cheap — expect $15–$40+ per click depending on the keyword. But the math still works because of what each job is worth.",
        highlight: "the math still works",
        benefits: [
          {
            icon: "Search",
            title: "7–9 Leads/Month",
            description:
              "At $3,000–5,000/mo ad spend, a 5% conversion rate means roughly 7–9 qualified calls per month from search ads alone.",
          },
          {
            icon: "DollarSign",
            title: "$15K–$80K per Job",
            description:
              "A single residential install starts at $15K. A mid-size commercial job can hit $60K–$80K. Either one covers months of ad spend.",
          },
          {
            icon: "Shield",
            title: "LSA Leads Are Pre-Qualified",
            description:
              "Local Service Ads only charge for verified leads — no wasted spend on random clicks. Bad leads get refunded.",
          },
          {
            icon: "Calendar",
            title: "Summer Peak Ahead",
            description:
              "Roofing searches spike July–September. Starting now means your campaigns are dialed in right when demand hits.",
          },
        ],
        metric: {
          value: "1",
          label: "Job covers 6+ months of ads",
          subtext: "At an average job of $30K–$60K",
        },
      },
    },

    // =============================================
    // ACT 1 CLOSE — Rize Exteriors Ads
    // =============================================

    // Slide 8: Timeline — Rize Ads
    {
      type: "timeline",
      content: {
        label: "RIZE EXTERIORS ROADMAP",
        title: "ADS TIMELINE",
        subtitle: "From kickoff to leads in 3 weeks.",
        layout: "arrow",
        steps: [
          {
            period: "WEEKS 1–3",
            title: "Setup & Strategy",
            icon: "FileText",
            highlight: true,
            items: [
              "Deposit & kickoff",
              "Keyword research & targeting",
              "Landing page design & build",
              "CRM & booking automation",
              "Call tracking & reporting dashboard",
            ],
          },
          {
            period: "WEEK 3",
            title: "Ads Go Live",
            icon: "Rocket",
            items: [
              "Google Ads campaign launched",
              "LSA account live (Scale tier)",
              "Reporting dashboard active",
              "First leads coming in",
            ],
          },
          {
            period: "ONGOING",
            title: "Optimize & Scale",
            icon: "BarChart",
            items: [
              "Weekly performance reports",
              "Bid & keyword optimization",
              "Lead dispute management (LSA)",
              "Scale what's working",
            ],
          },
        ],
      },
    },

    // Slide 9: CTA #1 — Rize Exteriors
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

    // =============================================
    // ACT 2 — Rising Summit Premier Metals
    // =============================================

    // Slide 9: Deliverables — Brand + Website
    {
      type: "deliverables",
      content: {
        label: "RISING SUMMIT PREMIER METALS",
        title: "BUILD THE BRAND & THE SITE",
        subtitle:
          "Rising Summit just started taking jobs. Let's build the digital foundation before momentum stalls.",
        deliverables: [
          {
            number: "01",
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
            number: "02",
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
            number: "03",
            title: "SEO & Marketing",
            icon: "Search",
            items: [
              "Local keyword targeting",
              "Google Business Profile setup",
              "Review automation after every job",
              "Content strategy & blog planning",
              "Built to grow alongside paid ads",
            ],
          },
        ],
      },
    },

    // Slide 10: Pricing — Website + Brand
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

    // Slide 12: Timeline — Rising Summit
    {
      type: "timeline",
      content: {
        label: "RISING SUMMIT ROADMAP",
        title: "WEBSITE TIMELINE",
        subtitle: "Brand first, then build.",
        layout: "arrow",
        steps: [
          {
            period: "WEEK 1",
            title: "Brand Discovery",
            icon: "Sparkles",
            highlight: true,
            items: [
              "Brand discovery workshop",
              "Logo concepts & direction",
              "Color palette & typography",
              "Tone of voice & messaging",
            ],
          },
          {
            period: "WEEKS 2–4",
            title: "Website Build",
            icon: "Layout",
            items: [
              "Custom design based on brand",
              "5-page site build",
              "SEO & lead capture setup",
              "Review rounds & QA",
            ],
          },
          {
            period: "WEEK 4",
            title: "Site Launch",
            icon: "Rocket",
            items: [
              "Final review & approval",
              "Site goes live",
              "Google Business Profile setup",
              "Handoff & training",
            ],
          },
        ],
      },
    },

    // Slide 13: CTA #2 — Final Close
    {
      type: "cta",
      content: {
        label: "LET'S BUILD",
        title: "READY TO START",
        subtitle:
          "Two companies, one partner. Let's get Rize generating leads and Rising Summit off the ground.",
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
        sideImage: "/images/orange/orange-5.webp",
      },
    },
  ],
};
