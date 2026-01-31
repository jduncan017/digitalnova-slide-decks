import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "colorado-business-cpa",
  meta: {
    title: "Website Redesign Proposal for Colorado Business CPA",
    preparedFor: "Natalya Itu",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "Website Redesign Proposal",
        subtitle: "Colorado Business CPA",
        tagline: "January 2026",
        heroImage: "/images/blue/blue-7.jpg",
      },
    },

    // Slide 2: The Timing
    {
      type: "opportunity",
      content: {
        label: "THE TIMING",
        title: "A GOOD TIME TO REFRESH",
        subtitle: "Tax season is your highest-traffic window of the year.",
        opportunities: [
          {
            icon: "Calendar",
            factor: "Tax Season is Coming",
            result: "Business owners are actively searching for CPAs in Q1.",
          },
          {
            icon: "Search",
            factor: "Peak Search Volume",
            result: "More people looking means more potential leads.",
          },
          {
            icon: "TrendingUp",
            factor: "Momentum Builds",
            result: "A site that converts captures leads all season long.",
          },
        ],
        callout: {
          icon: "Clock",
          title: "The timing works well.",
          subtitle: "Get in front of business owners actively searching for help.",
        },
      },
    },

    // Slide 3: The Problem
    {
      type: "problem",
      content: {
        label: "WHAT WE FOUND",
        title: "The Problem",
        subtitle: "Your current site isn't working as hard as it could for you.",
        challenges: [
          {
            text: "Visitors can't tell you're a CPA firm",
            subtext: "Homepage doesn't clearly communicate what you do or who you serve.",
            icon: "Monitor",
          },
          {
            text: "Service packages are confusing",
            subtext: "'Growth Package?' 'Strategic CFO?' — visitors don't know where to start.",
            icon: "Target",
          },
          {
            text: "Poor URL structure hurting SEO",
            subtext: "URLs like '/general-6' aren't helping Google understand your site.",
            icon: "Globe",
          },
          {
            text: "No clear customer pathways",
            subtext: "Visitors have to work to find what they need — most won't.",
            icon: "Users",
          },
          {
            text: "Outdated content",
            subtext: "Team photos, book edition, and tax guides need refreshing.",
            icon: "RefreshCw",
          },
        ],
        sideImage: "/images/blue/blue-4.jpg",
        statsOverlay: {
          label: "Bottom Line",
          value: "Site isn't ready",
          subtext: "for paid traffic or serious leads",
        },
      },
    },

    // Slide 4: The Opportunity
    {
      type: "opportunity",
      content: {
        label: "THE UPSIDE",
        title: "THE OPPORTUNITY",
        subtitle: "A few strategic fixes unlock major potential.",
        opportunities: [
          {
            icon: "MessageSquare",
            factor: "Clear Messaging",
            result: "Visitors instantly understand who you are and what you do = higher conversion.",
          },
          {
            icon: "Search",
            factor: "SEO Service Pages",
            result: "Rank for 'Denver CPA,' 'Colorado business tax help,' and more.",
          },
          {
            icon: "Target",
            factor: "Proper Site Structure",
            result: "Foundation for paid ads when you're ready to scale.",
          },
        ],
        callout: {
          icon: "TrendingUp",
          title: "Even without paid ads, a better site converts more of your existing traffic.",
          subtitle: "Every visitor is more likely to become a lead.",
        },
      },
    },

    // Slide 5: The Plan - Overview
    {
      type: "deliverables",
      content: {
        label: "THE PLAN",
        title: "WHAT WE'LL BUILD",
        subtitle: "Based on our call — these are recommendations, and I'm happy to adjust.",
        deliverables: [
          {
            number: "01",
            title: "New Website",
            icon: "Layout",
            items: [
              "11 pages, SEO-optimized",
              "Modern, professional design",
              "Mobile responsive",
              "Fast load times",
            ],
          },
          {
            number: "02",
            title: "Clear Services",
            icon: "FileText",
            items: [
              "Tax Planning & Tax Preparation",
              "Accounting & Bookkeeping (CAS)",
              "Tax Advisory Service (TAS)",
              "CFO Services",
              "Business Valuations",
            ],
          },
          {
            number: "03",
            title: "SEO Foundation",
            icon: "Search",
            items: [
              "Clean URL structure",
              "Schema markup",
              "All redirects handled",
              "No SEO traffic loss",
            ],
          },
        ],
      },
    },

    // Slide 6: The Plan - Sitemap (Two-panel view)
    {
      type: "growthEngine",
      content: {
        label: "SITE STRUCTURE",
        title: "NEW SITEMAP",
        subtitle: "Clear navigation paths for every visitor type.",
        leftPanel: {
          icon: "Layout",
          title: "Main Pages",
          sectionLabel: "Core Site Structure",
          items: [
            { icon: "Globe", title: "Homepage", description: "Clear value prop + service overview" },
            { icon: "FileText", title: "Services Index", description: "Overview of all offerings" },
            { icon: "Users", title: "About / Team", description: "All 15 team members featured" },
            { icon: "BookOpen", title: "Resources", description: "Tax guides, tools, blog" },
            { icon: "Briefcase", title: "Careers", description: "Attract top talent" },
            { icon: "Mail", title: "Contact", description: "Book a discovery call" },
          ],
        },
        rightPanel: {
          icon: "FileText",
          title: "Service Pages",
          sectionLabel: "Dedicated Landing Pages",
          items: [
            { icon: "DollarSign", title: "Tax Planning & Prep", description: "Planning & preparation" },
            { icon: "BarChart", title: "Accounting (CAS)", description: "Client accounting services" },
            { icon: "Lightbulb", title: "Tax Advisory (TAS)", description: "Strategic tax advisory" },
            { icon: "PieChart", title: "CFO Services", description: "Fractional CFO support" },
            { icon: "TrendingUp", title: "Business Valuations", description: "Sales & acquisitions advisory" },
          ],
        },
      },
    },

    // Slide 7: Pricing
    {
      type: "pricingWithAddons",
      content: {
        label: "INVESTMENT",
        title: "Pricing",
        basePackage: {
          label: "BASE PACKAGE",
          title: "Website Redesign",
          description: "Everything you need to convert visitors into leads.",
          price: "$5,000",
          priceLabel: "One-time",
          features: [
            "11 pages, SEO-optimized",
            "Modern responsive design",
            "All redirects handled (no SEO loss)",
            "Schema markup for Google",
            "Built on Framer (easy self-editing)",
            "Mobile & tablet optimized",
          ],
        },
        addOns: {
          featured: {
            icon: "Target",
            title: "Paid Ads Setup",
            subtitle: "Google or Meta campaigns",
            price: "$2,500",
            priceLabel: "setup",
            monthly: "$1,500/mo",
            features: [
              "Funnel landing pages",
              "CRM setup (Go High Level)",
              "Lead qualification flows",
              "Weekly reporting",
            ],
          },
          items: [
            { name: "Blog Setup", description: "SEO content targeting your keywords", price: "$500" },
            { name: "Google Business Profile", description: "Show up in 'CPA near me' searches", price: "$250" },
          ],
        },
        note: "Required: $30/mo for hosting • You retain full access to edit your site",
      },
    },

    // Slide 9: Timeline
    {
      type: "timeline",
      content: {
        label: "THE ROADMAP",
        title: "ONBOARDING & TIMELINE",
        subtitle: "Goal: Live before peak tax season hits.",
        headerAlign: "left",
        layout: "grid",
        steps: [
          {
            period: "WEEK 1",
            title: "Discovery & Strategy",
            icon: "FileText",
            highlight: true,
            items: [
              "Deposit to kick off",
              "Discovery call",
              "Service list finalized",
              "Sitemap & SEO audit",
              "Content collection",
            ],
          },
          {
            period: "WEEKS 2-3",
            title: "Design & Build",
            icon: "Layout",
            items: [
              "Homepage design",
              "Service page designs",
              "Mobile optimization",
              "Your feedback & revisions",
            ],
          },
          {
            period: "WEEKS 3-4",
            title: "Development",
            icon: "Code",
            items: [
              "Full site build in Framer",
              "SEO implementation",
              "Forms & integrations",
              "Testing & QA",
            ],
          },
          {
            period: "WEEK 5",
            title: "Launch",
            icon: "Rocket",
            items: [
              "Final review",
              "URL redirects",
              "DNS transfer (5-10 min)",
              "Post-launch check",
            ],
          },
        ],
        note: {
          highlight: "Target:",
          text: "Live by mid-February — well before peak tax season.",
          subtext: "I can start as soon as January 26th.",
        },
      },
    },

    // Slide 10: Closing / CTA
    {
      type: "cta",
      content: {
        label: "LET'S GO",
        title: "NEXT STEPS",
        subtitle: "Let's get your site converting before tax season peaks.",
        profile: {
          image: "/joshua-duncan.png",
          name: "Josh Duncan",
          title: "Founder, Digital Nova Studio",
        },
        contactItems: [
          { icon: "Mail", text: "josh@digitalnovastudio.com", href: "mailto:josh@digitalnovastudio.com" },
          { icon: "Globe", text: "digitalnovastudio.com", href: "https://digitalnovastudio.com" },
          { icon: "Phone", text: "(315) 276-5928", href: "tel:+13152765928" },
        ],
        sideImage: "/images/blue/blue-2.jpg",
      },
    },
  ],
};
