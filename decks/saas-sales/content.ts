import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "saas-sales",
  meta: {
    title: "SaaS Growth System",
    preparedFor: "SaaS Founders",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "SaaS Growth System",
        subtitle: "Predictable Growth for SaaS Companies",
        tagline: "Brand Strategy • Website Development • Paid Acquisition",
        heroImage: "/hero4.jpg",
      },
    },
    // Slide 2: Problem
    {
      type: "problem",
      content: {
        label: "SOUND FAMILIAR?",
        title: "Common Growth Challenges",
        subtitle: "Great products don't sell themselves. These are the patterns we see most often.",
        challenges: [
          { text: "A website that gets traffic but not demos", icon: "MousePointerClick" },
          { text: "Ad spend that burns cash without ROI", icon: "DollarSign" },
          { text: "Growth that stalls between $10K and $100K MRR", icon: "TrendingDown" },
          { text: "Your calendar is full of calls, but your pipeline isn't", icon: "Calendar" },
          { text: "Growth depends on you personally showing up", icon: "UserX" },
        ],
        sideImage: "/hero5.jpg",
      },
    },
    // Slide 3: Success Factors
    {
      type: "successFactors",
      content: {
        label: "OUR APPROACH",
        title: "WHY ADS SUCCEED WITH US",
        subtitle: "Paid acquisition works when the entire system is built to convert.",
        factors: [
          { factor: "Ads feed a real funnel", result: "Traffic converts because the destination is built to convert" },
          { factor: "Custom landing pages", result: "Messaging matches the ad, visitors take action" },
          { factor: "Full-stack tracking", result: "Every click, demo, and conversion is attributed" },
          { factor: "One team owns the outcome", result: "No finger-pointing — we're accountable end-to-end" },
        ],
        differentiator: {
          text: "We don't just run ads.",
          highlight: "We build the system that makes them work.",
        },
      },
    },
    // Slide 4: Pillars
    {
      type: "pillars",
      content: {
        label: "THE FULL STACK",
        title: "ONE SYSTEM. ONE PARTNER.",
        subtitle: "Everything required for ads to succeed — handled end-to-end.",
        pillars: [
          { title: "Brand Strategy", description: "Position your SaaS to stand out and attract your ICP.", icon: "Lightbulb" },
          { title: "Conversion Website", description: "Pages built to turn visitors into qualified demos.", icon: "Monitor" },
          { title: "Paid Acquisition", description: "Campaigns that deliver demos at predictable cost.", icon: "TrendingUp" },
        ],
        profile: {
          image: "/joshua-duncan.png",
          name: "Josh Duncan",
          title: "You work directly with me.",
          description: "No junior account managers. No handoffs. One point of contact who understands your business.",
        },
        testimonial: {
          quote: "Josh didn't just design a website — he built a complete brand experience. Within weeks of launch, we were seeing an increase in inquiries.",
          name: "Danielle L.",
          role: "Founder",
        },
      },
    },
    // Slide 5: Portfolio
    {
      type: "portfolio",
      content: {
        label: "PORTFOLIO",
        title: "WORK WE'VE SHIPPED",
        subtitle: "Brand to website to conversion — the full stack.",
        items: [
          { id: "set-1", leftImage: "/brand-proofs/newflower.png", rightImage: "/design-proofs/newflower.png", leftLabel: "Brand Identity", rightLabel: "Web Design" },
          { id: "set-2", leftImage: "/brand-proofs/funnel.png", rightImage: "/design-proofs/scriber.png", leftLabel: "Web Branding", rightLabel: "Pricing Page" },
          { id: "set-3", leftImage: "/brand-proofs/values.png", rightImage: "/design-proofs/newflower-value-section.png", leftLabel: "Brand Identity", rightLabel: "Value Section" },
          { id: "set-4", leftImage: "/brand-proofs/who-what-why.png", rightImage: "/design-proofs/scriber2.jpeg", leftLabel: "Web Branding", rightLabel: "Service Header" },
        ],
        leftTitle: "Brand Design",
        rightTitle: "Web Design",
      },
    },
    // Slide 6: Pricing
    {
      type: "pricing",
      content: {
        label: "CHOOSE YOUR GROWTH PATH",
        title: "SERVICE TIERS",
        tiers: [
          {
            title: "PAID ACQUISITION",
            subtitle: "You've got a solid brand and website. You just need leads.",
            price: "$2,500 Setup",
            monthly: "+ $1,500/mo",
            features: [
              "Ad campaigns (Meta, Google, or LinkedIn)",
              "Landing page/funnel",
              "CRM integration",
              "Weekly reports",
              "A/B testing",
            ],
          },
          {
            title: "GROWTH SYSTEM",
            subtitle: "You need a conversion-focused website AND a lead engine.",
            price: "$5,000 Setup",
            monthly: "+ $1,500/mo",
            features: [
              "Everything in Paid Acquisition",
              "Website (5 pages)",
              "SEO foundation",
              "Full funnel build",
            ],
          },
          {
            title: "COMPLETE REBRAND",
            subtitle: "You're starting fresh or your brand isn't working. We rebuild everything.",
            price: "$6,500 Setup",
            monthly: "+ $1,500/mo",
            features: [
              "Everything in Growth System",
              "Brand strategy",
              "Logo design",
              "Brand guidelines",
              "Messaging framework",
            ],
          },
        ],
      },
    },
    // Slide 7: Timeline
    {
      type: "timeline",
      content: {
        label: "WHAT HAPPENS NEXT",
        title: "YOUR GROWTH TIMELINE",
        steps: [
          {
            period: "TODAY",
            title: "Get Started",
            items: ["Confirm plan", "Sign contract", "Invoice for setup fee"],
          },
          {
            period: "WEEK 1-2",
            title: "Build",
            items: ["30-min onboarding call", "Offer workshop + script", "CRM setup", "Funnel + landing page build", "You record raw video"],
          },
          {
            period: "WEEK 3-4",
            title: "Launch",
            items: ["Video asset production", "You approve everything", "Ads go live", "First leads start coming in"],
          },
        ],
        note: {
          highlight: "Your retainer doesn't start until ads launch.",
          text: "You only pay the setup fee during the build phase.",
          subtext: "Most clients see their first qualified demos within 30 days of launch.",
        },
      },
    },
    // Slide 8: CTA
    {
      type: "cta",
      content: {
        label: "QUESTIONS?",
        title: "LET'S BUILD YOUR GROWTH SYSTEM",
        ctaButton: {
          text: "Schedule a Follow-Up Call",
          href: "https://cal.com/digitalnovastudio/follow-up",
          icon: "Calendar",
        },
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
        sideImage: "/hero.jpg",
      },
    },
  ],
};
