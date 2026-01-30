import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "veterans-benefit-software",
  meta: {
    title: "Growth Proposal for Veterans Benefit Software",
    preparedFor: "Don Anton",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "Growth Proposal for Veterans Benefit Software",
        subtitle: "Prepared for Don Anton",
        heroImage: "/images/orange/orange-1.webp",
      },
    },

    // Slide 2: Your Situation (Problem)
    {
      type: "problem",
      content: {
        label: "WHERE YOU ARE",
        title: "Your Situation",
        subtitle: "You've got an incredible product, proven demand, and deep expertise. Now you need the infrastructure to scale.",
        challenges: [
          {
            text: "97 customers, $200k ARR, near-zero churn",
            subtext: "The product works — attorneys love it and renew every year.",
            icon: "TrendingUp",
          },
          {
            text: "9,000 attorneys, only 1% penetration",
            subtext: "Massive untapped market waiting to be captured.",
            icon: "Target",
          },
          {
            text: "No website, no funnel, no B2B marketing",
            subtext: "You're invisible to the 8,900 attorneys who need this.",
            icon: "Globe",
          },
          {
            text: "Software modernization in progress",
            subtext: "TurboTax-style app is 60 days out — you need the sales engine ready.",
            icon: "Code",
          },
        ],
        sideImage: "/images/orange/orange-3.webp",
        statsOverlay: {
          label: "The Gap",
          value: "99% untapped",
          subtext: "8,900 attorneys don't know you exist",
        },
      },
    },

    // Slide 3: The Opportunity
    {
      type: "opportunity",
      content: {
        label: "THE GAP",
        title: "THE LEAK IN YOUR FUNNEL",
        subtitle: "Attorneys hear about you → Google your name → Find nothing → Trust drops → Deal stalls.",
        opportunities: [
          {
            icon: "Search",
            factor: "You're Invisible Online",
            result: "No website means 8,900 attorneys can't find you, research you, or build confidence before reaching out.",
          },
          {
            icon: "Shield",
            factor: "Credibility Without Proof",
            result: "You're a national speaker with 13k LinkedIn connections — but prospects can't verify that when they Google you.",
          },
          {
            icon: "Database",
            factor: "4,500 Contacts, Nowhere to Send Them",
            result: "You have names, emails, and phone numbers of your exact ICP. Where do you point them?",
          },
        ],
        callout: {
          icon: "Rocket",
          title: "Your new app launches in 60 days.",
          subtitle: "Come out of the gate with a professional presence that converts — not a gap that loses deals.",
        },
      },
    },

    // Slide 4: How It Works (Process Flow)
    {
      type: "processFlow",
      content: {
        label: "THE SYSTEM",
        title: "How It Works",
        subtitle: "A simple system that puts qualified demos on your calendar daily.",
        steps: [
          {
            icon: "Target",
            title: "We Find Your Attorneys",
            description: "LinkedIn ads target accredited elder law attorneys actively looking for VA benefits tools.",
          },
          {
            icon: "Globe",
            title: "Landing Page Converts",
            description: "Attorney-focused messaging speaks directly to their pain points and shows clear ROI.",
          },
          {
            icon: "Calendar",
            title: "Demo Gets Booked",
            description: "Calendar integration lets them book directly. No friction, no back-and-forth.",
          },
          {
            icon: "Settings",
            title: "Automation Nurtures",
            description: "CRM sequences send reminders, follow up no-shows, and keep leads warm.",
          },
        ],
        sideImage: "/images/orange/orange-4.webp",
      },
    },

    // Slide 5: Portfolio - Our Work
    {
      type: "portfolio",
      content: {
        label: "OUR WORK",
        title: "WHAT WE BUILD",
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

    // Slide 6: Website + LinkedIn Strategy (combined)
    {
      type: "growthEngine",
      content: {
        label: "THE DETAILS",
        title: "WEBSITE + AD STRATEGY",
        subtitle: "What we build and how we drive traffic.",
        leftPanel: {
          icon: "Globe",
          title: "Website Sitemap",
          sectionLabel: "5-PAGE SITE",
          items: [
            {
              icon: "Home",
              title: "Home",
              description: "Value prop, social proof, primary CTA",
            },
            {
              icon: "Play",
              title: "How It Works",
              description: "Product walkthrough, TurboTax-style messaging",
            },
            {
              icon: "TrendingUp",
              title: "Benefits / ROI",
              description: "Why attorneys should care, revenue math",
            },
            {
              icon: "User",
              title: "About",
              description: "Don's 43 years expertise, speaker background",
            },
            {
              icon: "Calendar",
              title: "Contact / Demo",
              description: "Calendar embed, direct booking",
            },
          ],
        },
        rightPanel: {
          icon: "Linkedin",
          title: "LinkedIn Ads",
          sectionLabel: "TARGETING & RESULTS",
          items: [
            {
              icon: "Users",
              title: "9,000 Elder Law Attorneys",
              description: "Job title + practice area filters",
            },
            {
              icon: "DollarSign",
              title: "$50-150 CPL",
              description: "B2B SaaS benchmark",
            },
            {
              icon: "Calendar",
              title: "8-15 Demos/Month",
              description: "At $1,500-3,000 ad spend",
            },
          ],
        },
      },
    },

    // Slide 8: Investment (Pricing)
    {
      type: "pricing",
      content: {
        label: "INVESTMENT",
        title: "CHOOSE YOUR PATH",
        tiers: [
          {
            title: "LAUNCH",
            subtitle: "Get demos on your calendar. Fast.",
            price: "$2,500",
            priceLabel: "Setup",
            monthly: "$2,000/mo",
            features: [
              "Demo booking funnel",
              "CRM setup + automations",
              "LinkedIn ads",
              "Ad creative & copy",
              "Weekly reporting",
            ],
          },
          {
            title: "GROWTH",
            subtitle: "Website + funnel + ads. The full system.",
            price: "$6,500",
            priceLabel: "Setup",
            monthly: "$2,000/mo",
            features: [
              "Everything in Launch",
              "Professional website (5 pages)",
              "SEO foundation",
              "Product walkthrough page",
              "Long-term visibility",
            ],
            recommended: true,
          },
        ],
        addOns: {
          required: [
            { name: "Hosting & maintenance", price: "$100/mo" },
          ],
          optional: [
            { name: "Funnel optimization & A/B testing", price: "+$150/mo" },
            { name: "Brand strategy & identity", price: "$1,500" },
            { name: "Email sequence setup", price: "$1,000" },
            { name: "Webinar funnel integration", price: "$750" },
          ],
        },
        note: "Ad spend is separate (recommended $1,500-3,000/mo to start) • Retainer begins at launch",
      },
    },

    // Slide 9: ROI - The Math (moved after pricing)
    {
      type: "roi",
      content: {
        label: "THE MATH",
        title: "The Numbers Work in Your Favor",
        description: "Each attorney you close is worth $1,800/year to you. At $2,000/month retainer, you only need 2 new customers to cover our entire fee. Everything after that is profit.",
        highlight: "2 new customers",
        benefits: [
          {
            icon: "DollarSign",
            title: "$1,800/yr Revenue",
            description: "Per attorney customer you close",
          },
          {
            icon: "TrendingUp",
            title: "Near-Zero Churn",
            description: "They renew year after year",
          },
          {
            icon: "Shield",
            title: "No Long Contracts",
            description: "Month-to-month after setup",
          },
          {
            icon: "Zap",
            title: "Fast Results",
            description: "Ads live within 5 weeks",
          },
        ],
        metric: {
          value: "2",
          label: "customers to break even",
          subtext: "Then it's pure profit",
        },
      },
    },

    // Slide 10: Timeline
    {
      type: "timeline",
      content: {
        label: "THE ROADMAP",
        title: "HOW WE GET THERE",
        subtitle: "From kickoff to demos on your calendar in 5 weeks — ready before your software launches.",
        headerAlign: "left",
        layout: "grid",
        steps: [
          {
            period: "WEEK 1",
            title: "Discovery & Offer",
            icon: "FileText",
            highlight: true,
            items: [
              "Deposit to kick off",
              "Discovery call",
              "Brand & messaging alignment",
              "Funnel strategy",
            ],
          },
          {
            period: "WEEKS 2-3",
            title: "Website & Funnel Build",
            icon: "Globe",
            items: [
              "Design + copywriting",
              "Page development",
              "Demo booking flow",
              "Mobile optimization",
            ],
          },
          {
            period: "WEEK 4",
            title: "Systems & Ads Setup",
            icon: "Settings",
            items: [
              "CRM integration",
              "Automation sequences",
              "Ad creative development",
              "Campaign structure",
            ],
          },
          {
            period: "WEEK 5+",
            title: "Launch & Optimize",
            icon: "Rocket",
            items: [
              "Ads go live",
              "Demo bookings start",
              "Weekly reporting",
              "Ongoing optimization",
            ],
          },
        ],
        note: {
          highlight: "Timeline:",
          text: "Mid-February start → Live by mid-March → Ready before your software launches.",
        },
      },
    },

    // Slide 11: Next Steps
    {
      type: "cta",
      content: {
        label: "LET'S GO",
        title: "NEXT STEPS",
        subtitle: "Let's get this engine built so you're ready to scale when the software drops.",
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
        sideImage: "/images/orange/orange-5.webp",
      },
    },
  ],
};
