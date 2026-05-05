import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "travelmation",
  meta: {
    title: "Travelmation Corporate Travel Platform",
    preparedFor: "Mandy Gonzales",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "Travelmation Corporate Travel Platform",
        subtitle:
          "Branded corporate infrastructure for Travelmation's growing corporate division.",
        tagline: "V1 Build Proposal",
        preparedFor: "Mandy Gonzales · Head of Corporate Travel",
        heroImage: "/images/blue/blue-7.jpg",
      },
    },

    // Slide 2: Problem — The Corporate Ceiling
    {
      type: "problem",
      content: {
        label: "WHERE YOU ARE",
        title: "The Corporate Ceiling",
        subtitle:
          "Travelmation's corporate division runs on consumer-grade tooling. As the division grows, that tooling becomes the ceiling on what advisors can credibly pitch to corporate buyers.",
        challenges: [
          {
            text: "Traveljoy is a leisure CRM",
            subtext:
              "No multi-tenant corporate clients, employee profiles, structured travel requests, spend reporting, or policy compliance.",
            icon: "Briefcase",
          },
          {
            text: "Fragmented stack signals amateur",
            subtext:
              "Email, text, phone, Traveljoy. The same toolkit every consumer-grade independent advisor uses.",
            icon: "Layers",
          },
          {
            text: "Branded software is the corporate buyer's bar",
            subtext:
              "Without a portal, Travelmation pitches as a leisure agency wearing a corporate hat — even when the service is excellent.",
            icon: "Building",
          },
          {
            text: "Non-commissionable bookings generate $0",
            subtext:
              "Flights, ground services, foreign vendors. Real work gets done. No revenue is captured.",
            icon: "DollarSign",
          },
        ],
        sideImage: "/images/blue/blue-3.jpg",
        statsOverlay: {
          label: "The Division",
          value: "20-50 advisors",
          subtext: "Year one pilot, out of Travelmation's 2,000+ network",
        },
      },
    },

    // Slide 3: Comparison — Competitive Landscape
    {
      type: "comparison",
      content: {
        label: "THE LANDSCAPE",
        title: "Where Travelmation Corporate Fits",
        subtitle:
          "Three platforms define corporate travel software. Travelmation occupies the underserved space: human advisors with modern infrastructure, built for SMB and mid-market.",
        columns: [
          { name: "Navan" },
          { name: "TravelPerk" },
          { name: "ATPI" },
          { name: "Travelmation Corp", highlighted: true },
        ],
        features: [
          {
            feature: "Human advisors in the loop",
            values: [false, false, true, true],
          },
          {
            feature: "Built for SMB / mid-market",
            values: [true, true, false, true],
          },
          {
            feature: "Branded software experience",
            values: [true, true, true, true],
          },
          {
            feature: "Group travel specialization",
            values: [false, false, true, true],
          },
          {
            feature: "Transparent service-fee pricing",
            values: [false, false, false, true],
          },
        ],
        footnote:
          "Navan and TravelPerk are tech-first, self-service. ATPI is enterprise-priced and slow to implement. Travelmation is the SMB human-advisor option with the modern wrapper buyers expect.",
      },
    },

    // Slide 4: Deliverables — V1 Scope
    {
      type: "deliverables",
      content: {
        label: "THE BUILD",
        title: "V1 Scope",
        subtitle:
          "Replaces the corporate division's manual workflow with a branded software experience. Small feature set. Architecture built to scale across many advisors and many corporate clients.",
        deliverables: [
          {
            number: "01",
            title: "Branded Corporate Portal",
            icon: "Layout",
            items: [
              "Travelmation-branded client portal",
              "Multi-advisor support",
              "Walled-off data isolation across advisors and clients",
              "Role-based authentication: super admin, advisor, client admin, traveler",
            ],
          },
          {
            number: "02",
            title: "Traveler Profiles",
            icon: "Users",
            items: [
              "Preferences and dietary needs",
              "Loyalty programs",
              "Passport and ID information",
              "Emergency contacts",
            ],
          },
          {
            number: "03",
            title: "Request & Booking Workflow",
            icon: "Send",
            items: [
              "Structured travel request submission",
              "Advisor workflow with status tracking",
              "Itinerary upload and structured trip data",
              "New → in progress → booked → done",
            ],
          },
          {
            number: "04",
            title: "Reporting & Insight",
            icon: "BarChart",
            items: [
              "Per-company spend reporting",
              "Per-employee spend reporting",
              "Structured booking history",
              "Foundation for compliance and YoY views",
            ],
          },
        ],
        options: [
          {
            icon: "Database",
            title: "Multi-tenant architecture",
            description:
              "Three-level isolation (host → advisor → client → traveler) modeled correctly from the first commit.",
          },
          {
            icon: "Zap",
            title: "Event-driven foundation",
            description:
              "Plaid, Stripe Issuing, virtual cards hang off existing actions in future phases — no refactor.",
          },
          {
            icon: "Code",
            title: "Modern stack",
            description:
              "Built for ergonomics and longevity. Future phases ship in weeks, not months.",
          },
        ],
      },
    },

    // Slide 5: Opportunity — Three Revenue Levers
    {
      type: "opportunity",
      content: {
        label: "THE UPSIDE",
        title: "Three Revenue Levers",
        subtitle:
          "Each lever stands alone. Combined, they reposition the corporate division as a growth engine for Travelmation.",
        opportunities: [
          {
            icon: "DollarSign",
            factor: "Capture Non-Commissionable Revenue",
            result:
              "3% service fee on flights, ground, and foreign vendors. $4,500-6,000 per year recovered on a $300K-spend client that previously generated nothing.",
          },
          {
            icon: "Lock",
            factor: "Retention via Platform Stickiness",
            result:
              "Profiles, history, and reports inside a Travelmation portal create real switching costs. Multi-year accounts replace contract-by-contract churn.",
          },
          {
            icon: "Sparkles",
            factor: "Sales Tool & Differentiator",
            result:
              "Branded software puts Travelmation agents in the small minority who look like real infrastructure partners. Doubles as a host-agency recruiting angle.",
          },
        ],
        callout: {
          icon: "Rocket",
          title: "$125K-$145K projected new revenue contribution year one.",
          subtitle:
            "Against a year-one platform cost of roughly $20K. Build pays for itself with one credentialized win.",
        },
      },
    },

    // Slide 6: Pricing — Client Service Fee Model Options
    {
      type: "pricing",
      content: {
        label: "REVENUE MODEL",
        title: "Client Service Fee Options",
        subtitle:
          "The 3% fee on non-commissionable bookings is the baseline. Layered options below let Travelmation capture more value without overpricing any single client.",
        tiers: [
          {
            title: "OPTION A: CAPPED %",
            subtitle:
              "Recommended starting point. Simple, defensible, no surprises.",
            price: "3%",
            priceLabel: "On bookings up to $1,500",
            monthly: "$45 flat fee on bookings above $1,500",
            features: [
              "Fits SMB and mid-market budgets",
              "Competitive vs TMC transaction fees on big tickets",
              "Preserves margin on smaller bookings",
              "Easy to communicate to corporate buyers",
            ],
            recommended: true,
          },
          {
            title: "OPTION B: REPORTING TIER",
            subtitle: "Layered upsell as the division grows.",
            price: "$200-500",
            priceLabel: "/month per company",
            features: [
              "Basic reporting included with any account",
              "Premium dashboards & custom analytics",
              "Year-over-year comparisons",
              "Industry benchmarking",
              "Layers cleanly on top of any fee model",
            ],
          },
          {
            title: "OPTION C: GROUP SURCHARGE",
            subtitle: "Captures complexity where Mandy's specialty lives.",
            price: "5-8%",
            priceLabel: "On group event coordination",
            features: [
              "Standard 3% on individual bookings",
              "Premium for retreats, incentive trips, conferences",
              "Or flat per-event coordination fee",
              "Higher-margin work, properly priced",
            ],
          },
        ],
        note: "Recommended start: Option A as base. Add B and C as the division grows and proves out which clients want which.",
      },
    },

    // Slide 7: Timeline — Phased Roadmap
    {
      type: "timeline",
      content: {
        label: "THE ROADMAP",
        title: "Phased Build",
        subtitle:
          "V1 is Phase 1 of a longer trajectory. Future phases are scoped and funded separately as the division proves the model.",
        layout: "arrow",
        steps: [
          {
            period: "PHASE 1",
            title: "V1 Launch",
            icon: "Rocket",
            highlight: true,
            items: [
              "Branded corporate portal",
              "Multi-advisor + multi-tenant architecture",
              "Traveler profiles + request workflow",
              "Basic spend reporting",
              "Pilot with 20-50 corporate-focused advisors",
            ],
          },
          {
            period: "PHASE 2",
            title: "Scale & Automate",
            icon: "Settings",
            items: [
              "Plaid integration for expense capture",
              "Automated approval workflows",
              "Compliance + YoY reporting",
              "Traveler safety alerts",
              "Advisor onboarding flows",
            ],
          },
          {
            period: "PHASE 3",
            title: "Expand & Differentiate",
            icon: "Sparkles",
            items: [
              "Stripe Issuing virtual cards",
              "Optional self-service booking",
              "Group travel module",
              "Native mobile app",
              "AI itinerary parsing + policy checks",
            ],
          },
        ],
        note: {
          highlight: "Each phase is funded separately,",
          text: "justified by data and learnings from the previous phase.",
        },
      },
    },

    // Slide 8: ROI — Year One Math
    {
      type: "roi",
      content: {
        label: "THE MATH",
        title: "Year One ROI",
        description:
          "Conservative scenario, twelve months after V1 launches. Even one credentialized corporate win pays for the build inside the first month of bookings.",
        highlight: "6x to 7x",
        benefits: [
          {
            icon: "Target",
            title: "5 New Accounts",
            description:
              "Avg 25 employees, $200K spend each. ~$75K combined commission and fee revenue.",
          },
          {
            icon: "TrendingUp",
            title: "Improved Retention",
            description:
              "Extending avg client tenure by one year recovers ~$30K from would-be-churned accounts.",
          },
          {
            icon: "DollarSign",
            title: "Recovered Service Fees",
            description:
              "3% on previously non-commissionable bookings: $20K-$40K across new and existing clients.",
          },
          {
            icon: "Shield",
            title: "Pays Within First Month",
            description:
              "Even one retained corporate account covers the V1 build cost outright.",
          },
        ],
        metric: {
          value: "6-7x",
          label: "Year One ROI",
          subtext: "$125K-$145K new revenue vs. ~$20K total platform cost",
        },
      },
    },

    // Slide 9: Projections — Growth Trajectory
    {
      type: "projections",
      content: {
        label: "THE TRAJECTORY",
        title: "What Growth Looks Like",
        subtitle:
          "Three scenarios for the corporate division based on adoption speed and how quickly the platform becomes a sales asset in pitch meetings.",
        scenarios: [
          {
            id: "optimize",
            label: "Optimize",
            description:
              "Steady, predictable growth as Mandy's team onboards corporate clients and refines the pitch.",
            curve: "steady",
            default: true,
          },
          {
            id: "accelerate",
            label: "Accelerate",
            description:
              "Strong initial response from corporate buyers + aggressive advisor adoption = rapid growth.",
            curve: "fast",
          },
          {
            id: "pivot",
            label: "Pivot & Recover",
            description:
              "First quarter reveals needed adjustments to fee model or onboarding. Adjust, then recover stronger.",
            curve: "recovery",
          },
        ],
        phases: [
          { month: 1, label: "Launch" },
          { month: 2, label: "Pilot" },
          { month: 3, label: "Refine" },
          { month: 4, label: "Scale" },
        ],
        totalMonths: 6,
      },
    },

    // Slide 10: Pricing With Add-ons — Build Investment
    {
      type: "pricingWithAddons",
      content: {
        label: "INVESTMENT",
        title: "What It Costs to Build",
        basePackage: {
          label: "V1 BUILD",
          title: "Travelmation Corporate Platform",
          description:
            "Three to five week timeline. Scoping, design, build, deployment, and 30 days of post-launch fixes and tweaks.",
          price: "$10K-$15K",
          priceLabel: "One-time build fee",
          features: [
            "Branded multi-tenant corporate portal",
            "Role-based auth + walled-off data isolation",
            "Traveler profiles + structured request workflow",
            "Itinerary upload + advisor status tracking",
            "Per-company and per-employee spend reporting",
            "Modern, event-driven architecture for Phase 2/3",
            "30 days post-launch bug fixes and tweaks included",
          ],
        },
        addOns: {
          featured: {
            icon: "Settings",
            title: "Ongoing Retainer",
            subtitle:
              "The difference between maintained infrastructure and a build that decays in six months.",
            price: "~$500",
            priceLabel: "/month",
            monthly: "Begins at launch",
            features: [
              "Hosting + uptime monitoring",
              "Security patches + dependency updates",
              "Small bug fixes + minor feature requests",
              "On-call availability when something breaks",
            ],
          },
          items: [
            {
              name: "Phase 2 Build",
              description:
                "Plaid expense capture, approval workflows, compliance reporting, safety alerts. Separate scope.",
              price: "TBD",
            },
            {
              name: "Phase 3 Build",
              description:
                "Stripe Issuing virtual cards, group travel module, native mobile, AI policy checks. Separate scope.",
              price: "TBD",
            },
          ],
        },
        note: "Build fee reflects the value of working infrastructure — not hourly rate. New features beyond the monthly retainer allowance are scoped and billed separately.",
      },
    },

    // Slide 11: CTA
    {
      type: "cta",
      content: {
        label: "LET'S GO",
        title: "READY TO BUILD",
        subtitle:
          "Three to five weeks to a working V1. Then the corporate division has the infrastructure it's been missing.",
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
        sideImage: "/images/blue/blue-2.jpg",
      },
    },
  ],
};
