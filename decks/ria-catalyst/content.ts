import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "ria-catalyst",
  meta: {
    title: "Growth Proposal for Ria Catalyst",
    preparedFor: "Julien Baneux",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "Growth Proposal for Ria Catalyst",
        subtitle: "Prepared for Julien Baneux",
        heroImage: "/images/blue/blue-7.jpg",
      },
    },
    // Slide 2: Your Situation (Problem with subtext)
    {
      type: "problem",
      content: {
        label: "WHERE YOU ARE",
        title: "Your Situation",
        subtitle: "You've built something great. Now let's build the system to scale it.",
        challenges: [
          {
            text: "$500k ARR, 100% word of mouth",
            subtext: "Impressive traction — you've proven product-market fit.",
            icon: "TrendingUp",
          },
          {
            text: "Ready to scale, but no marketing system",
            subtext: "Growth potential is there, you just need the engine.",
            icon: "Target",
          },
          {
            text: "No SEO, no email, no sitemap",
            subtext: "You're leaving organic growth completely on the table.",
            icon: "Globe",
          },
          {
            text: "Founder-led sales = bottleneck",
            subtext: "Growth only happens when you personally show up.",
            icon: "Users",
          },
        ],
        sideImage: "/images/blue/blue-4.jpg",
        statsOverlay: {
          label: "Goal",
          value: "Build the engine",
          subtext: "so growth doesn't depend on referrals",
        },
      },
    },
    // Slide 3: The Opportunity
    {
      type: "opportunity",
      content: {
        label: "THE UPSIDE",
        title: "THE OPPORTUNITY",
        subtitle: "Your situation is ideal for growth — you just need the system built.",
        opportunities: [
          {
            icon: "Users",
            factor: "You've Proven Demand",
            result: "$500k ARR from word of mouth alone means the product works.",
          },
          {
            icon: "Target",
            factor: "You Just Need Infrastructure",
            result: "Sitemap, SEO, conversion-focused pages — the basics aren't there yet.",
          },
          {
            icon: "TrendingUp",
            factor: "Then Growth Becomes Predictable",
            result: "Stop relying on referrals. Start generating leads on autopilot.",
          },
        ],
        callout: {
          icon: "DollarSign",
          title: "At your price point, one new premium customer pays our fees entirely, and two pays for marketing entirely.",
          subtitle: "The math works in your favor — you just need the system built.",
        },
      },
    },
    // Slide 4: What I'd Build
    {
      type: "deliverables",
      content: {
        label: "THE PLAN",
        title: "WHAT I'D BUILD FOR YOU",
        subtitle: "Everything you need to turn visitors into qualified demos.",
        deliverables: [
          {
            number: "01",
            title: "Website & Funnel",
            icon: "Globe",
            items: [
              "Fix sitemap & SEO foundation",
              "Conversion-focused pages",
              "Clear value proposition",
            ],
          },
          {
            number: "02",
            title: "Demo Booking System",
            icon: "Calendar",
            items: [
              "Calendly integration",
              "Lead qualification",
              "CRM setup",
            ],
          },
          {
            number: "03",
            title: "Content Engine",
            icon: "FileText",
            items: [
              "SEO-optimized pages",
              "Target corp dev search intent",
              "Organic traffic growth",
            ],
          },
        ],
        options: [
          {
            icon: "Code",
            title: "Option A: I implement directly",
            description: "Full development in Next.js — I handle everything.",
          },
          {
            icon: "Layers",
            title: "Option B: Design + specs handoff",
            description: "I design and document, your dev team builds.",
          },
        ],
      },
    },
    // Slide 5: Growth Engine
    {
      type: "growthEngine",
      content: {
        label: "THE DETAILS",
        title: "GROWTH ENGINE BREAKDOWN",
        subtitle: "Website structure + paid acquisition working together.",
        leftPanel: {
          icon: "Globe",
          title: "Website & Funnel",
          sectionLabel: "Sitemap Structure",
          items: [
            { icon: "Globe", title: "Homepage", description: "Clear value prop + primary CTA" },
            { icon: "FileText", title: "Product / Platform", description: "Feature deep-dive for evaluators" },
            { icon: "Users", title: "Use Cases", description: "RIA vs PE firm positioning" },
            { icon: "BookOpen", title: "Case Studies", description: "Social proof for MDs" },
            { icon: "FileText", title: "Blog / Resources", description: "SEO + thought leadership" },
            { icon: "Calendar", title: "Book a Demo", description: "Conversion endpoint" },
          ],
        },
        rightPanel: {
          icon: "Target",
          title: "Paid Ads Strategy",
          sectionLabel: "LinkedIn-First Approach",
          items: [
            { icon: "Linkedin", title: "LinkedIn Ads", description: "Primary channel for B2B corp dev" },
            { icon: "Target", title: "ICP Targeting", description: "Corp dev titles at RIAs & PE firms" },
            { icon: "RefreshCw", title: "Retargeting", description: "Site visitors → demo booking" },
            { icon: "TrendingUp", title: "Content Ads", description: "Case studies + thought leadership" },
          ],
        },
      },
    },
    // Slide 6: Investment
    {
      type: "pricing",
      content: {
        label: "INVESTMENT",
        title: "CHOOSE YOUR PATH",
        tiers: [
          {
            title: "PAID ACQUISITION",
            subtitle: "You've got a solid brand and website. You just need leads.",
            price: "$2,500",
            priceLabel: "Setup",
            monthly: "$1,500/mo",
            features: [
              "LinkedIn ad campaigns",
              "Landing page/funnel",
              "CRM integration",
              "Weekly reports",
              "A/B testing",
            ],
          },
          {
            title: "GROWTH SYSTEM",
            subtitle: "You need a conversion-focused website AND a lead engine.",
            price: "$5,000",
            priceLabel: "Setup",
            monthly: "$1,500/mo",
            features: [
              "Everything in Paid Acquisition",
              "Website (5 pages)",
              "SEO foundation",
              "Full funnel build",
            ],
            recommended: true,
          },
          {
            title: "COMPLETE REBRAND",
            subtitle: "Starting fresh or your brand isn't working? We rebuild everything.",
            price: "$6,500",
            priceLabel: "Setup",
            monthly: "$1,500/mo",
            features: [
              "Everything in Growth System",
              "Brand strategy",
              "Logo design",
              "Brand guidelines",
              "Messaging framework",
            ],
          },
        ],
        note: "All plans include a 30-minute onboarding call • Retainer starts when we go live",
      },
    },
    // Slide 7: Timeline
    {
      type: "timeline",
      content: {
        label: "THE ROADMAP",
        title: "HOW WE GET THERE",
        subtitle: "A clear path from kickoff to qualified demos in your pipeline.",
        headerAlign: "left",
        layout: "grid",
        steps: [
          {
            period: "WEEK 1",
            title: "Discovery & Planning",
            icon: "FileText",
            highlight: true,
            items: [
              "Deposit to kick off",
              "Final proposal & contract",
              "Discovery call + offer building",
              "Sitemap & SEO audit",
              "Funnel strategy",
            ],
          },
          {
            period: "WEEKS 2-3",
            title: "Site & Funnel Build",
            icon: "Settings",
            items: [
              "Design + copywriting",
              "Page development",
              "Conversion optimization",
              "Testing & QA",
            ],
          },
          {
            period: "WEEK 4",
            title: "Systems Setup",
            icon: "Settings",
            items: [
              "CRM integration",
              "Automation flows",
              "Ad creative development",
              "Campaign structure",
            ],
          },
          {
            period: "WEEK 5+",
            title: "Launch & Optimize",
            icon: "Rocket",
            items: [
              "LinkedIn ad launch",
              "Weekly performance reports",
              "A/B testing",
              "Ongoing optimization",
            ],
          },
        ],
        note: {
          highlight: "Step 1:",
          text: "Setup fee deposit → full proposal → contract signed → we start building.",
        },
      },
    },
    // Slide 8: Next Steps
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
          { icon: "Mail", text: "josh@digitalnovastudio.com", href: "mailto:josh@digitalnovastudio.com" },
          { icon: "Globe", text: "digitalnovastudio.com", href: "https://digitalnovastudio.com" },
          { icon: "Phone", text: "(315) 276-5928", href: "tel:+13152765928" },
        ],
        sideImage: "/images/blue/blue-2.jpg",
      },
    },
  ],
};
