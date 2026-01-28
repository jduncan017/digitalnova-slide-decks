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
        subtitle: "You've built a proven product. Now let's build the system to scale it.",
        challenges: [
          {
            text: "$10k MRR, 50k users — product-market fit proven",
            subtext: "You've validated the product. Now it's time to grow intentionally.",
            icon: "TrendingUp",
          },
          {
            text: "B2B pivot ready, but no lead generation system",
            subtext: "Studios need what you've built — they just can't find you yet.",
            icon: "Target",
          },
          {
            text: "Lost 50% organic traffic after rebrand",
            subtext: "The Nolan AI → FinalBit transition hit your SEO hard.",
            icon: "Globe",
          },
          {
            text: "2-person team = limited bandwidth",
            subtext: "You and Hrachya are focused on product. Marketing needs help.",
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
    // Slide 3: The Opportunity
    {
      type: "opportunity",
      content: {
        label: "THE UPSIDE",
        title: "THE OPPORTUNITY",
        subtitle: "You're sitting on a goldmine — the infrastructure is all that's missing.",
        opportunities: [
          {
            icon: "Users",
            factor: "Proven Product, Real Users",
            result: "50k users and $10k MRR from a small team proves the demand is there.",
          },
          {
            icon: "Target",
            factor: "Clear B2B Wedge",
            result: "Indie studios (10-20 people) are underserved by legacy tools like Movie Magic.",
          },
          {
            icon: "TrendingUp",
            factor: "One Unified Platform",
            result: "Your all-in-one AI approach beats competitors who require separate tools.",
          },
        ],
        callout: {
          icon: "DollarSign",
          title: "At $2k/mo per studio, just 2 new B2B customers covers our entire fee.",
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
        subtitle: "A complete B2B lead generation system — from first touch to demo booked.",
        deliverables: [
          {
            number: "01",
            title: "Video Ad Campaigns",
            icon: "Video",
            items: [
              "Meta ads targeting indie filmmakers",
              "Testimonial-style video creatives",
              "Retargeting for site visitors",
            ],
          },
          {
            number: "02",
            title: "B2B Landing Page",
            icon: "Globe",
            items: [
              "Studio-focused messaging",
              "Clear value proposition",
              "Demo booking integration",
            ],
          },
          {
            number: "03",
            title: "CRM & Automations",
            icon: "Settings",
            items: [
              "Lead capture system",
              "Automated follow-up sequences",
              "Pipeline tracking",
            ],
          },
        ],
        options: [
          {
            icon: "Rocket",
            title: "Full-service execution",
            description: "I handle everything — creative, ads, landing page, CRM setup.",
          },
          {
            icon: "Users",
            title: "Collaboration with your team",
            description: "I run campaigns, you handle sales conversations.",
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
        subtitle: "Paid acquisition + conversion funnel working together.",
        leftPanel: {
          icon: "Video",
          title: "Meta Ad Strategy",
          sectionLabel: "Creative & Targeting",
          items: [
            { icon: "Video", title: "Video Ads", description: "Testimonial-style from real filmmakers" },
            { icon: "Target", title: "Audience Targeting", description: "Indie filmmakers & small studios" },
            { icon: "RefreshCw", title: "Retargeting", description: "Site visitors → demo booking" },
            { icon: "BarChart", title: "Weekly Optimization", description: "A/B testing & budget allocation" },
          ],
        },
        rightPanel: {
          icon: "Globe",
          title: "Conversion Funnel",
          sectionLabel: "From Click to Customer",
          items: [
            { icon: "MousePointerClick", title: "Ad Click", description: "Compelling video hooks attention" },
            { icon: "FileText", title: "Landing Page", description: "B2B-focused value proposition" },
            { icon: "Calendar", title: "Demo Booking", description: "Calendly integration" },
            { icon: "Mail", title: "Follow-up Sequence", description: "Automated nurture emails" },
          ],
        },
      },
    },
    // Slide 6: Investment
    {
      type: "pricing",
      content: {
        label: "INVESTMENT",
        title: "YOUR INVESTMENT",
        tiers: [
          {
            title: "SETUP",
            subtitle: "One-time build of your complete lead generation system.",
            price: "$2,500",
            priceLabel: "one-time",
            features: [
              "B2B landing page design & build",
              "CRM setup & automations",
              "Ad creative production",
              "Campaign structure",
              "Tracking & analytics",
            ],
          },
          {
            title: "MANAGEMENT",
            subtitle: "Ongoing optimization and campaign management.",
            price: "$1,500",
            priceLabel: "/month",
            features: [
              "Weekly ad optimization",
              "A/B testing",
              "Performance reporting",
              "Creative refreshes",
              "Strategy adjustments",
            ],
          },
          {
            title: "AD SPEND",
            subtitle: "Budget for Meta ads — goes directly to the platform.",
            price: "$1,500",
            priceLabel: "/month",
            features: [
              "Meta (Facebook/Instagram) ads",
              "Recommended starting budget",
              "Scale up as results prove out",
              "You control the spend",
              "Pause anytime",
            ],
          },
        ],
        connectorIcons: ["ArrowRight", "Plus"],
        note: "Total: ~$3,000/month after setup • First customers typically cover costs within 60 days",
      },
    },
    // Slide 7: Timeline
    {
      type: "timeline",
      content: {
        label: "THE ROADMAP",
        title: "HOW WE GET THERE",
        subtitle: "From kickoff to first B2B leads in your pipeline.",
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
              "Deep dive on your ICP",
              "Messaging & positioning",
              "Ad creative planning",
              "Funnel mapping",
            ],
          },
          {
            period: "WEEK 2",
            title: "Creative Production",
            icon: "Video",
            items: [
              "Video ad scripting",
              "Creative development",
              "Landing page design",
              "Copy & messaging",
            ],
          },
          {
            period: "WEEK 3",
            title: "Build & Setup",
            icon: "Settings",
            items: [
              "Landing page development",
              "CRM configuration",
              "Automation flows",
              "Tracking setup",
            ],
          },
          {
            period: "WEEK 4+",
            title: "Launch & Optimize",
            icon: "Rocket",
            items: [
              "Campaign launch",
              "Daily monitoring",
              "Weekly reports",
              "Ongoing optimization",
            ],
          },
        ],
        note: {
          highlight: "Step 1:",
          text: "Setup deposit → discovery call → we start building immediately.",
        },
      },
    },
    // Slide 8: Next Steps
    {
      type: "cta",
      content: {
        label: "LET'S GO",
        title: "NEXT STEPS",
        subtitle: "Ready to build your B2B lead engine? Let's schedule a quick call to finalize the details.",
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
        sideImage: "/images/film/film-3.webp",
      },
    },
  ],
};
