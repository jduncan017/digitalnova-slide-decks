import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "elder-law-leads",
  meta: {
    title: "Marketing Services Proposal for ElderLaw Leads",
    preparedFor: "Don Quante",
  },
  slides: [
    {
      type: "hero",
      content: {
        title: "MARKETING SERVICES PROPOSAL",
        subtitle: "ElderLaw Leads",
        tagline: "April 2026",
        heroImage: "/images/blue/blue-1.jpg",
        preparedFor: "Don Quante",
      },
    },

    {
      type: "pillars",
      content: {
        label: "THE ENGAGEMENT",
        title: "What We're Building",
        subtitle:
          "Two parallel campaigns — one system, one reporting dashboard, one point of contact.",
        pillars: [
          {
            icon: "Briefcase",
            title: "Elder Law Attorneys",
            description:
              "Fill your calendar with demo calls from elder law and VA-accredited attorneys interested in the ElderLaw Leads platform.",
          },
          {
            icon: "Heart",
            title: "Home Care Agencies",
            description:
              "Generate demo appointments with home care agencies evaluating the calculator tool and done-for-you advertising program.",
          },
          {
            icon: "BarChart",
            title: "One Reporting Layer",
            description:
              "Both campaigns tracked in a single dashboard — ad spend, clicks, bookings, and show rate visible in real time.",
          },
        ],
      },
    },

    {
      type: "processFlow",
      content: {
        label: "THE APPROACH",
        title: "HOW WE RUN ADS",
        subtitle:
          "A focused system built around one outcome: qualified demos on your calendar.",
        steps: [
          {
            icon: "Target",
            title: "Build the Funnel",
            description:
              "Rebuild landing pages so we can track behavior, A/B test, and iterate on the fly. Install marketing software, call tracking, and automations that follow up with every booked demo.",
          },
          {
            icon: "Rocket",
            title: "Launch & Target",
            description:
              "Run meta ads across Facebook and Instagram aimed at elder law attorneys and home care agency decision-makers.",
          },
          {
            icon: "BarChart",
            title: "Report & Optimize",
            description:
              "Weekly performance dashboard covering spend, leads, bookings, and show rate. Multiple ad sets tested in parallel — we kill what doesn't work, scale what does, and give every change 1–2 weeks to prove itself.",
          },
        ],
        sideImage: "/images/blue/blue-4.jpg",
      },
    },

    {
      type: "valueStack",
      content: {
        label: "INVESTMENT",
        title: "What It Costs",
        subtitle:
          "One setup fee covers both campaigns. One monthly retainer covers ongoing management for both audiences.",
        items: [
          {
            icon: "Rocket",
            text: "$2,000 one-time setup — funnels, landing pages, automations, reporting dashboard, ad account structure",
          },
          {
            icon: "Settings",
            text: "$2,000/month retainer — ad management, creative iteration, weekly reporting, both campaigns",
          },
          {
            icon: "DollarSign",
            text: "$2,500/month ad spend (paid directly to Meta, billed separately)",
          },
        ],
        totals: [
          { label: "Setup (one-time)", value: "$2,000" },
          { label: "Management (monthly)", value: "$2,000" },
          { label: "Recommended Ad Spend", value: "$2–3K/mo" },
        ],
        note: "Ad spend goes directly to Meta — not billed through us. Retainer billed monthly after setup.",
      },
    },

    {
      type: "timeline",
      content: {
        label: "ROADMAP",
        title: "WHAT TO EXPECT",
        subtitle: "From kickoff to leads in about two weeks.",
        layout: "arrow",
        steps: [
          {
            period: "WEEKS 1–2",
            title: "Setup & Launch",
            icon: "FileText",
            highlight: true,
            items: [
              "Deposit & kickoff call",
              "Landing pages rebuilt",
              "Automations & reporting built",
              "Creative scripted & produced",
              "Ads go live end of week 2",
            ],
          },
          {
            period: "MONTH 1",
            title: "Data & Early Leads",
            icon: "BarChart",
            items: [
              "First data comes in",
              "Ad sets tested in parallel",
              "First demos on calendar",
              "Weekly reports begin",
            ],
          },
          {
            period: "MONTHS 2–3",
            title: "Optimize or Pivot",
            icon: "TrendingUp",
            items: [
              "Scale what's working",
              "Harder pivots if leads aren't landing",
              "Evaluate together at end of month 3",
              "Decision point: scale or stop",
            ],
          },
        ],
      },
    },

    {
      type: "projections",
      content: {
        label: "THE TRAJECTORY — SCENARIO 1",
        title: "Optimize",
        subtitle:
          "Steady demo flow as we refine audience and creative. Expected baseline for a niche B2B audience.",
        scenarios: [
          {
            id: "optimize",
            label: "Optimize",
            description:
              "Steady, predictable growth as we refine targeting and messaging. Expected baseline for a niche B2B audience.",
            curve: "steady",
            default: true,
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

    {
      type: "projections",
      content: {
        label: "THE TRAJECTORY — SCENARIO 2",
        title: "Accelerate",
        subtitle:
          "Strong early response + fast optimization. LinkedIn-sourced lookalike audience adds scale on top of meta.",
        scenarios: [
          {
            id: "accelerate",
            label: "Accelerate",
            description:
              "Strong initial response combined with aggressive optimization produces rapid growth in booked demos.",
            curve: "fast",
            default: true,
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

    {
      type: "projections",
      content: {
        label: "THE TRAJECTORY — SCENARIO 3",
        title: "Pivot & Recover",
        subtitle:
          "Early tests reveal needed pivots in creative or platform. We adjust, then recover stronger.",
        scenarios: [
          {
            id: "pivot",
            label: "Pivot & Recover",
            description:
              "Initial tests reveal needed pivots in creative or platform. We adjust strategy, then recover stronger.",
            curve: "recovery",
            default: true,
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

    {
      type: "cta",
      content: {
        label: "LET'S GO",
        title: "NEXT STEPS",
        subtitle:
          "Sign off on the proposal, kickoff this week, ads live in about two weeks.",
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
        sideImage: "/images/blue/blue-2.jpg",
      },
    },
  ],
};
