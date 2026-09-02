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
        subtitle: "The software your corporate division has been missing.",
        tagline: "V1 Build Proposal",
        preparedFor: "Mandy Gonzales · Corporate Travel Lead",
        heroImage: "/images/blue/blue-7.jpg",
      },
    },

    // Slide 2: Problem
    {
      type: "problem",
      content: {
        label: "WHERE YOU ARE",
        title: "What Today's Stack Can't Do",
        subtitle:
          "Email, text, phone, Traveljoy. They all work for booking a FIT trip, and fall apart when a 50-employee company asks how their travel spend broke down last quarter.",
        challenges: [
          {
            text: "Email and spreadsheets don't impress corporate buyers",
            subtext:
              "Companies want to log in somewhere where they can see all their travel data. When they don't see software, they assume you don't have any.",
            icon: "Layers",
          },
          {
            text: "Flights pay zero commission",
            subtext:
              "Flights and other non-commissionable bookings generate real work and zero revenue. The more corporate work you take on, the more this hurts.",
            icon: "DollarSign",
          },
          {
            text: "No data, no leverage",
            subtext:
              "Without spend reports, you can't show clients their savings or negotiate better deals with suppliers. Renewals turn into price defenses.",
            icon: "BarChart",
          },
        ],
        sideImage: "/images/blue/blue-3.jpg",
        statsOverlay: {
          label: "Today",
          value: "$0 captured",
          subtext: "on every flight booked",
        },
      },
    },

    // Slide 3: Comparison
    {
      type: "comparison",
      content: {
        label: "THE LANDSCAPE",
        title: "Where Travelmation Fits",
        subtitle:
          "Three players dominate corporate travel software. Travelmation slots into the gap none of them serve well: small and mid-size companies that want a real human, not an app.",
        columns: [
          { name: "Navan" },
          { name: "Perk Travel" },
          { name: "ATPI" },
          { name: "Travelmation Corp (V1)", highlighted: true },
        ],
        features: [
          {
            feature: "Real human advisors",
            values: [false, false, true, true],
          },
          {
            feature: "Built for small and mid-size companies",
            values: [true, true, false, true],
          },
          {
            feature: "Branded software",
            values: [true, true, true, true],
          },
          {
            feature: "Group travel expertise",
            values: [false, false, true, true],
          },
          {
            feature: "Simple, transparent pricing",
            values: [false, false, false, true],
          },
        ],
        footnote:
          "Navan and Perk Travel are apps with no humans. ATPI has humans but only takes huge enterprise clients. Travelmation is the human option for the everyday business.",
      },
    },

    // Slide 4: Deliverables
    {
      type: "deliverables",
      content: {
        label: "PHASE 1",
        title: "What We're Building",
        subtitle:
          "A small set of features that turn corporate from email-based work into a real platform.",
        connector: "none",
        deliverables: [
          {
            number: "01",
            title: "Client Portal",
            icon: "Layout",
            items: [
              "Branded login for corporate clients.",
              "Multiple advisors share one platform.",
              "Each advisor only sees assigned clients.",
              "Different access for owners, advisors, company admins, and employees.",
            ],
          },
          {
            number: "02",
            title: "Employee Profiles",
            icon: "Users",
            items: [
              "Travel preferences and dietary needs.",
              "Frequent flyer and loyalty programs.",
              "Passport and ID info.",
              "Emergency contacts.",
            ],
          },
          {
            number: "03",
            title: "Booking Requests",
            icon: "Send",
            items: [
              "Simple form travel request form.",
              "Advisors track requests from approval to completion.",
              "Live itineraries, visible to everyone.",
            ],
          },
          {
            number: "04",
            title: "Fees & Reporting",
            icon: "DollarSign",
            items: [
              "Automatic 3% fee collection via Stripe.",
              "No manual reconciliation.",
              "Spend broken down by traveler, trip, and company.",
              "Clients see what they spent and saved.",
            ],
          },
        ],
      },
    },

    // Slide 5: Pricing — Client Service Fee Options
    {
      type: "pricing",
      content: {
        label: "REVENUE MODEL",
        title: "Ideas for Charging Corporate Clients",
        subtitle:
          "These three options stack on top to capture more value as the division grows.",
        tiers: [
          {
            title: "1. Per-Booking + Cap",
            subtitle: "Mirrors how TMCs price, with a cap for high spenders.",
            price: "$15 or 3%",
            monthly: "Whichever is greater",
            features: [
              "Capped at $45 / traveler / trip.",
              "Floor protects revenue.",
              "Familiar structure to corporate buyers.",
              "Beats competitors on price.",
            ],
            recommended: true,
          },
          {
            title: "2. Premium Reports",
            subtitle: "Optional add-on as the division grows.",
            price: "$200-500",
            priceLabel: "/ month",
            monthly: "Per company",
            features: [
              "Custom dashboards and analytics.",
              "Year-over-year comparisons.",
              "Industry benchmarks.",
              "Stacks on top of any fee model.",
            ],
          },
          {
            title: "3. Implementation Fee",
            subtitle: "One-time, scales with company size.",
            price: "$250-$500",
            priceLabel: "base",
            monthly: "+ $10-$15 per employee",
            features: [
              "Scales with company size.",
              "Covers profile setup & training.",
              "Protects advisor time.",
              "Standard practice for mid-market TMCs.",
            ],
          },
        ],
        note: "Start with Option 1. Layer 2 and 3 on top as the division grows and proves out which clients want which.",
      },
    },

    // Slide 7: Build Investment
    {
      type: "pricingWithAddons",
      content: {
        label: "INVESTMENT",
        title: "What It Costs to Build",
        basePackage: {
          label: "Version 1 Build",
          title: "Travelmation Corporate Platform",
          description:
            "Three to five weeks from kickoff to launch. Includes design, build, deployment. Maintenance included in mandatory retainer.",
          price: "$14,500",
          priceLabel: "One-time build fee",
          features: [
            "Client portal: corporate clients log into a curated experience.",
            "Automatic 3% fee collection: no chasing invoices.",
            "Structured trip requests: no more back-and-forth emails.",
            "Employee profiles: preferences, loyalty programs, etc.",
            "Spend reports: clients see what they spent and saved.",
            "Multiple advisors: each with their own clients and bookings.",
            "Mobile-ready: works on any device.",
            "Hosted on your domain: feels like part of Travelmation.",
          ],
        },
        addOns: {
          featured: {
            icon: "Settings",
            title: "Ongoing Retainer",
            subtitle:
              "Pays for hosting, security, and maintenance. When something breaks, we fix it.",
            price: "~$500",
            priceLabel: "/month after launch",
            features: [
              "Hosting and uptime monitoring.",
              "Security and dependency updates.",
              "Bug fixes and minor tweaks.",
              "On-call availability when something breaks.",
            ],
          },
          items: [
            {
              name: "Phase 2 Build",
              description:
                "Automatic expense capture & reporting, approval workflows, compliance reports, safety alerts. Plus additional features we discover from customer feedback.",
              price: "TBD",
            },
            {
              name: "Phase 3 Build",
              description:
                "Virtual payment cards, group travel management features, mobile app, AI policy checks. Plus additional features we discover from customer feedback.",
              price: "TBD",
            },
          ],
        },
      },
    },

    // Slide 7: Opportunity
    {
      type: "opportunity",
      content: {
        label: "THE UPSIDE",
        title: "Three Ways It Pays Back",
        subtitle:
          "Each one stands alone. Together they turn corporate travel from a small division of Travelmation into a real growth engine.",
        connectorIcon: "Plus",
        opportunities: [
          {
            icon: "DollarSign",
            factor: "Get Paid on Flights",
            result:
              "$400/seat × 50 people × 3% = $600 per group trip — on bookings that previously paid zero. Repeats on every single group trip.",
          },
          {
            icon: "Lock",
            factor: "Keep Clients Longer",
            result:
              "Employee profiles, trip history, and reports live inside Travelmation. Every year on the platform compounds switching costs that didn't exist before.",
          },
          {
            icon: "Sparkles",
            factor: "Win More Pitches",
            result:
              "Branded software is what wins corporate pitch meetings against email-and-spreadsheet competitors. Plus it signals corporate-capable advisors to want to work with you.",
          },
        ],
        callout: {
          icon: "Rocket",
          title: "Flights alone pay back the build.",
          subtitle:
            "3 group trips a month × $600 = $21,600/yr — well over the $14,500 build. Retention and new wins are upside on top.",
        },
      },
    },

    // Slide 8: CTA
    {
      type: "cta",
      content: {
        label: "LET'S GO",
        title: "READY TO BUILD",
        subtitle:
          "Take Travelmation's Corporate Division from email-based work to a real platform.",
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
