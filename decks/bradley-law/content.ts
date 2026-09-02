import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "bradley-law",
  meta: {
    title: "The Bradley Law Firm Website and Growth Plan",
    preparedFor: "J. Anthony Bradley",
  },
  slides: [
    // 1. Hero
    {
      type: "hero",
      content: {
        title: "Local Roots, National Reach.",
        subtitle:
          "Your estate work covers Memphis. Your VA work covers the country. Your website only covers Germantown.",
        tagline: "Website and Growth Plan",
        preparedFor: "J. Anthony Bradley, The Bradley Law Firm, PLLC",
        heroImage: "/images/law/planet-volumes-2RKetzja9-4-unsplash.webp",
      },
    },

    // 2. What we found
    {
      type: "problem",
      content: {
        label: "WHAT WE FOUND",
        title: "What's Holding You Back",
        subtitle:
          "You website should be working for you, and your marketing ROI should be clear. We'll get you there.",
        challenges: [
          {
            text: "The site ranks for your name, not your services",
            subtext:
              "152 organic visits a month, and about two thirds of those are people typing The Bradley Law Firm into Google. The site works for people who already know you. It is not finding you anyone new.",
            icon: "Search",
          },
          {
            text: "You said you don't know if your current ads are working",
            subtext:
              "A daily email of leads tells you volume. It does not tell you what a signed case costs, and that is the number that decides whether $2,000 a month is a bargain or a leak.",
            icon: "DollarSign",
          },
          {
            text: "The page content is not unique to you",
            subtext:
              "Your revocable trust page ranks in Gardnerville, Nevada. Your power of attorney page ranks in Sale Creek. That is licensed template copy sitting on dozens of law firm sites, and Google treats it accordingly.",
            icon: "Layers",
          },
        ],
        sideImage: "/images/law/nasser-eledroos-pt3tR01-4Fk-unsplash.webp",
        statsOverlay: {
          label: "Organic traffic today",
          value: "152/mo",
          subtext: "Two thirds of it people searching your name",
        },
      },
    },

    // 3. Where you sit
    {
      type: "successFactors",
      content: {
        label: "THE FIELD",
        title: "Where You Sit in Memphis",
        subtitle:
          "These four firms compete with you for estate planning and probate work. This is what Google sends each of them every month.",
        factors: [
          {
            factor: "Mendelson Firm",
            result: "3,666 visitors a month from search.",
          },
          {
            factor: "Douglass Runger",
            result:
              "3,569 visitors a month, across 1,683 different search terms.",
          },
          {
            factor: "Patterson Bray",
            result:
              "996 visitors a month, ranking for 2,626 different searches.",
          },
          {
            factor: "The Bailey Law Firm",
            result: "387 visitors a month, from 666 ranking terms.",
          },
        ],
        differentiator: {
          text: "You get 152 a month, and two thirds of those already knew your name.",
          highlight:
            "Around 50 people a month find you without knowing you existed.",
        },
      },
    },

    // 4. Before / After
    {
      type: "beforeAfter",
      content: {
        label: "THE SHIFT",
        title: "One Firm, Two Markets",
        subtitle:
          "Your estate and probate practice is local, and you should own Memphis for it. Your VA pension work has no geographic limit at all. The site currently treats both as though they were Germantown.",
        before: {
          label: "Today",
          title: "Built for Germantown",
          highlight: "Germantown",
          items: [
            "Written around Germantown, a suburb, rather than Memphis",
            "No rankings at all for Memphis estate planning or probate",
            "No page for Shelby County Probate Court",
            "VA pages ranking #79 for a Coral Gables, Florida keyword",
            "40 blog posts, 3 of which produce any traffic",
          ],
        },
        after: {
          label: "Twelve months in",
          title: "Built for Both",
          highlight: "Both",
          items: [
            "Memphis and Shelby County targeted directly, by name",
            "Estate, trust and probate pages built to convert",
            "A VA pension hub that reaches well past the Mid-South",
            "Around 30 search terms nobody in your market has claimed",
            "Cost per qualified lead in front of you every week",
          ],
        },
      },
    },

    // 5. Where the room is
    {
      type: "opportunity",
      content: {
        label: "WHERE THE ROOM IS",
        title: "Three Terms Nobody Has Claimed",
        subtitle:
          "These terms get a ton of searches each month, and nobody is seriously competing for any of them.",
        opportunities: [
          {
            icon: "Shield",
            factor: "VA Survivors Pension",
            result:
              "1,600 searches a month, low ranking difficulty. These are widows trying to find the benefit their husband earned, which is work you already do every week.",
          },
          {
            icon: "Building",
            factor: "Shelby County Probate Court",
            result:
              "1,300 searches a month, almost no competition. Someone looking up the court by name has a death in the family right now. Not one Memphis firm has a page for it.",
          },
          {
            icon: "FileText",
            factor: "VA Form 21-2680",
            result:
              "2,400 searches a month, low ranking difficulty. People halfway through the paperwork who have hit a wall and need someone to take it over.",
          },
        ],
        connectorIcon: "Plus",
        callout: {
          icon: "Lightbulb",
          title: "What that turns into",
          subtitle:
            "Each search term gets a page, written to answer their search query and rank better than anything ranking today. The page goes up once and keeps bringing people in without you paying for a click.",
          closer:
            "We found about 30 more terms like these while putting this together.",
        },
      },
    },

    // 6. The plan
    {
      type: "deliverables",
      content: {
        label: "THE PLAN",
        title: "A System Built To Scale",
        subtitle:
          "The website is the foundation built to convert. Your content, ads, & integrations bring the leads.",
        connector: "plus",
        deliverables: [
          {
            number: "01",
            title: "A New Website",
            icon: "Layout",
            items: [
              "17 pages, built from scratch",
              "Modern, fast, built to convert",
              "Memphis estate and probate pages",
              "A VA hub that reaches past Tennessee",
              "Every account and page in your name",
            ],
          },
          {
            number: "02",
            title: "Content That Ranks",
            icon: "TrendingUp",
            items: [
              "A published map of every page we build",
              "Four new pages every month",
              "Written to be cited by AI search",
              "Monthly report on where you show up",
            ],
          },
          {
            number: "03",
            title: "Google Ads, Rebuilt",
            icon: "Target",
            items: [
              "Moved into an account you own",
              "Restructured for pension and probate intent",
              "Managed and adjusted every week",
              "Spend follows what is actually converting",
            ],
          },
          {
            number: "04",
            title: "Your Systems, Wired Together",
            icon: "Settings",
            items: [
              "Atty.ai connected to every form and call",
              "Tracking from click to booked consult",
              "Weekly cost per qualified lead",
              "One clear report, not a list of names",
            ],
          },
        ],
      },
    },

    // 7. Timeline
    {
      type: "timeline",
      content: {
        label: "THE ROADMAP",
        title: "What Happens When",
        subtitle:
          "Nothing changes with your current setup until the new site is live.",
        headerAlign: "center",
        layout: "arrow",
        steps: [
          {
            period: "Weeks 1 to 2",
            title: "Kickoff",
            icon: "Search",
            items: [
              "Full content map delivered",
              "Site architecture approved",
              "Build begins",
            ],
          },
          {
            period: "By week 8",
            title: "Live and Handover",
            icon: "Rocket",
            items: [
              "All 17 pages live",
              "Accounts in your name",
              "We take over from SMB Team",
            ],
            highlight: true,
          },
          {
            period: "From launch onward",
            title: "Content Engine",
            icon: "TrendingUp",
            items: [
              "4 new pages a month",
              "Ads managed and reported",
              "AI visibility report",
            ],
          },
        ],
        note: {
          highlight: "Accounted for in the dates above:",
          text: "I have a baby due at the end of September and will be out for about four weeks in October. The map and the build both start before then, the site is still finished by week 8, and your current campaigns keep running throughout.",
        },
      },
    },

    // 8. Investment
    {
      type: "pricingWithAddons",
      content: {
        label: "THE INVESTMENT",
        title: "What It Costs",
        basePackage: {
          label: "THE BUILD",
          title: "Website Rebuild",
          description:
            "Modern, clean and built to convert. 17 pages covering both practices, live by week 8.",
          price: "$9,600",
          priceLabel: "one time",
          features: [
            "17 pages built from scratch",
            "Modern, fast and built to convert",
            "Memphis and Shelby County pages",
            "Veterans benefits hub, built national",
            "Full redirect map, nothing lost",
            "Schema and AI search markup",
            "Atty.ai wired into every form",
            "You own every account and page",
          ],
        },
        addOns: {
          label: "ONGOING",
          featured: {
            icon: "TrendingUp",
            title: "Growth Retainer",
            subtitle: "Begins at launch",
            price: "$2,500",
            priceLabel: "/month",
            features: [
              "4 new pages every month",
              "Google Ads managed and optimized",
              "Weekly cost per qualified lead",
              "AI search visibility report",
              "Hosting and maintenance included",
            ],
          },
          items: [
            {
              name: "Logo refresh package",
              description:
                "Optional. Modern web logo with print and social variations.",
              price: "$500",
            },
          ],
        },
      },
    },

    // 9. The math
    {
      type: "roi",
      content: {
        label: "THE MATH",
        title: "One Case Every Two Months",
        description:
          "A veterans benefits case is worth $5,000 or more to your firm. The retainer is $2,500 a month, so six cases a year covers it. You will have four different ways to get there.",
        highlight: "$5,000 or more",
        benefits: [
          {
            icon: "Search",
            title: "Cases from Google",
            description:
              "Around 30 unclaimed search terms across your two markets, each one becoming a page that brings in people already looking for this work.",
          },
          {
            icon: "Brain",
            title: "Cases from AI search",
            description:
              "Families researching Aid and Attendance ask ChatGPT first. Your pages are written and marked up to be the answer it gives them.",
          },
          {
            icon: "Target",
            title: "Cases from your ads",
            description:
              "The same $2,000 a month, aimed at pension and probate intent instead of broad legal terms, and measured all the way to the signed case.",
          },
          {
            icon: "MessageSquare",
            title: "Cases you already had",
            description:
              "A site built to convert, with Atty.ai catching every call and form, so the people already finding you actually book.",
          },
        ],
        metric: {
          value: "1 case",
          label: "every two months",
          subtext: "covers the entire retainer",
        },
      },
    },

    // 10. Next steps
    {
      type: "ctaReviewSOW",
      content: {
        label: "LET'S GO",
        title: "NEXT STEPS",
        subtitle:
          "Have a look at the scope of work. When you're ready, we'll book a kickoff and get started.",
        instructions: [
          {
            title: "Read the scope",
            description: "Full deliverables, timeline and payment schedule.",
          },
          {
            title: "Deposit and kickoff",
            description: "We start the content map that same week.",
          },
          {
            title: "Access at launch",
            description:
              "Nothing moves off your current setup until the new site is live.",
          },
        ],
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
        sideImage:
          "/images/law/tingey-injury-law-firm-L4YGuSg0fxs-unsplash.webp",
      },
    },
  ],
};
