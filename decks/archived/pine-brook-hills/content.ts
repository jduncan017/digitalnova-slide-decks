import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "pine-brook-hills",
  meta: {
    title: "Pine Brook Hills HOA Website Rebuild Proposal",
    preparedFor: "David & the Pine Brook Hills Board",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "Site Rebuild for Pine Brook Hills.",
        subtitle: "Modern, fast, and built to last.",
        tagline: "Website Rebuild Proposal",
        preparedFor: "David · Pine Brook Hills Board",
        heroImage: "/images/wildlife/4.webp",
      },
    },

    // Slide 2: Problem
    {
      type: "problem",
      content: {
        label: "WHERE THINGS STAND",
        title: "Your Website Is Difficult",
        subtitle:
          "It still works, but it's slow to update, hard to navigate, and the board shouldn't have to wrestle with it.",
        challenges: [
          {
            text: "Hard to find things",
            subtext:
              "Residents have to click around to find dues, ARC applications, or meeting minutes. Important info gets buried.",
            icon: "Layers",
          },
          {
            text: "A burden on the webmaster",
            subtext:
              "Updating the site takes technical know-how. That's a lot to ask of a volunteer, and it's the kind of thing that's hard to hand off.",
            icon: "UserX",
          },
          {
            text: "Slow to update",
            subtext:
              "Simple changes like a new newsletter, a meeting minute, or a quick announcement take longer than they should.",
            icon: "Monitor",
          },
        ],
        sideImage: "/images/wildlife/2.webp",
        statsOverlay: {
          label: "Today",
          value: "38 pages",
          subtext: "scattered, no clear structure",
        },
      },
    },

    // Slide 3: Before / After
    {
      type: "beforeAfter",
      content: {
        label: "THE CHANGE",
        title: "Simpler Site, Same Feel",
        before: {
          label: "Today",
          title: "What's There Now",
          highlight: "What's There Now",
          items: [
            "Old theme that's hard to update",
            "38 pages without clear structure",
            "Volunteer has to keep up with the technical side",
            "Forms, payments, and tracking pieced together",
          ],
        },
        after: {
          label: "After",
          title: "What You Get",
          highlight: "What You Get",
          items: [
            "Same wildlife photos and mountain feel, refreshed but not replaced",
            "Clean structure so residents find what they need fast",
            "No logins, no training, nothing for the board to learn",
            "Forms, dues tracking, and payments all in one place",
            "You email me what needs updating, and it gets done",
          ],
        },
      },
    },

    // Slide 4: Process Flow
    {
      type: "processFlow",
      content: {
        label: "HOW IT WORKS",
        title: "Easy, Start to Finish",
        subtitle:
          "I handle everything technical. You and the board just let me know what you'd like changed.",
        steps: [
          {
            icon: "Search",
            title: "Look at What's There",
            description:
              "Review the site pages, PDFs, and forms. Sort out what stays and what goes.",
          },
          {
            icon: "Layout",
            title: "Design & Build",
            description:
              "Keep the wildlife photos and mountain feel that already works. Build everything fresh underneath so it's fast and easy to use.",
          },
          {
            icon: "Database",
            title: "Move Everything Over",
            description:
              "All your content, PDFs, and forms get moved to the new site. PayPal, dues tracker, and Firewise table all hooked up.",
          },
          {
            icon: "Rocket",
            title: "Launch & Maintain",
            description:
              "Site goes live. After that, you email me anything you need updated, like newsletters, minutes, or announcements, and I take care of it.",
          },
        ],
        sideImage: "/images/wildlife/7.webp",
      },
    },

    // Slide 7: Timeline
    {
      type: "timeline",
      content: {
        label: "TIMELINE",
        title: "Launch in 4-5 Weeks",
        subtitle: "Three simple phases. You'll see progress at each step.",
        layout: "arrow",
        steps: [
          {
            period: "Week 1",
            title: "Plan & Design",
            icon: "Search",
            items: [
              "Walk through all 38 pages",
              "Sketch out a cleaner structure",
              "Show you a homepage mockup",
              "You give the green light",
            ],
          },
          {
            period: "Weeks 2 to 4",
            title: "Build & Move Content",
            icon: "Code",
            items: [
              "Build the new site",
              "Move all your content over",
              "Hook up PayPal, dues tracker, Firewise table",
              "Test everything on phone and desktop",
            ],
            highlight: true,
          },
          {
            period: "Week 5",
            title: "Review & Launch",
            icon: "Rocket",
            items: [
              "You review the site before it goes live",
              "Any last tweaks get made",
              "Site goes live on the same domain",
              "From here on, you email me what needs updating",
            ],
          },
        ],
        note: {
          highlight:
            "Timeline assumes you can review within a few days at each step.",
          text: "Having the existing content and PDFs handy keeps things moving.",
        },
      },
    },

    // Slide 8: Pricing
    {
      type: "pricingWithAddons",
      content: {
        label: "PRICING",
        title: "Simple and Flat",
        basePackage: {
          label: "Website Build",
          title: "Full Site Build",
          description:
            "Everything to design, build, and launch the new site. One flat fee, no surprises.",
          price: "$3,500",
          priceLabel: "One-time",
          features: [
            "All 38 pages organized into a clean, easy structure",
            "PayPal set up for dues and community fund",
            "Dues tracker and Firewise table included",
            "Newsletter archive + PDF library",
            "Same domain, I handle transition and hosting",
          ],
        },
        addOns: {
          label: "ONGOING",
          featured: {
            icon: "Settings",
            title: "Hosting & Maintenance",
            subtitle:
              "Everything to keep the site running and up to date. You email me what needs updating, and it gets done.",
            price: "$200",
            priceLabel: "/month",
            features: [
              "Hosting included, no separate hosting bill",
              "Unlimited content updates by email",
              "Site monitoring + security",
            ],
          },
        },
        note: "Hosting and maintenance are bundled together. The HOA pays one flat monthly amount.",
      },
    },

    // Slide 9: CTA
    {
      type: "ctaReviewSOW",
      content: {
        label: "NEXT STEPS",
        title: "Ready When You Are",
        subtitle:
          "Take a look at the full Scope of Work. Once you're comfortable, we can get started.",
        instructions: [
          {
            title: "Look Over the Scope of Work",
            description:
              "It lays out everything that's included, the timeline, and how payment works.",
          },
          {
            title: "Send the Deposit to Start",
            description:
              "ACH or credit card, whichever is easier. We start the week payment clears.",
          },
        ],
        reviewButton: {
          text: "Review Scope of Work",
          icon: "FileText",
        },
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
          { icon: "Phone", text: "(315) 276-5928", href: "tel:+13152765928" },
        ],
        sideImage: "/images/wildlife/1.webp",
      },
    },
  ],
};
