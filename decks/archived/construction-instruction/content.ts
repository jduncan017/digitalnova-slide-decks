import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "construction-instruction",
  meta: {
    title: "Digital Growth Proposal for Construction Instruction",
    preparedFor: "Justin & Ava",
  },
  slides: [
    // Slide 1: Hero
    {
      type: "hero",
      content: {
        title: "Digital Growth Proposal for Construction Instruction",
        subtitle: "Prepared for Justin & Ava",
        heroImage: "/images/construction/1.jpg",
      },
    },

    // Slide 2: Problem — Where CI Is Today
    {
      type: "problem",
      content: {
        label: "WHERE YOU ARE",
        title: "World-Class Content, Invisible Online",
        subtitle:
          "CI is the go-to resource in building science education. But your digital presence doesn't reflect that, leaving revenue on the table.",
        challenges: [
          {
            text: "1,400+ resources locked in PDFs",
            subtext:
              "Google can't index PDF content. Your building science library is invisible to search engines.",
            icon: "FileText",
          },
          {
            text: "Class signup flow is buried",
            subtext:
              "Classes are a consistent revenue driver at $10K–$40K each, but the path to register isn't clear.",
            icon: "MousePointerClick",
          },
          {
            text: "First impressions aren't helping your sponsorship pitches",
            subtext:
              "When manufacturers evaluate a sponsorship, your website is part of the pitch. It could be working harder for you.",
            icon: "Building",
          },
        ],
        sideImage: "/images/construction/2.jpg",
        statsOverlay: {
          label: "Content Library",
          value: "1,400+ PDFs",
          subtext: "invisible to Google",
        },
      },
    },

    // Slide 3: Phase 1 — Content Migration & SEO
    {
      type: "processFlow",
      content: {
        label: "PHASE 1 · 1–2 WEEKS",
        title: "Unlock Your Content",
        subtitle:
          "CI has one of the largest building science content libraries in the industry. Right now, none of it shows up on Google, and it's not readable on mobile. We fix that first.",
        steps: [
          {
            icon: "Database",
            title: "Audit the Full Library",
            description:
              "Catalog all 1,400+ resources. Identify text-based PDFs that can be converted immediately and convert those first.",
          },
          {
            icon: "Code",
            title: "Automated Conversion Pipeline",
            description:
              "Extract text from PDFs, reformat as blog-ready content, and push to WordPress via API.",
          },
          {
            icon: "Search",
            title: "SEO Optimization",
            description:
              "Every converted article gets a proper title, meta description, category tags, and structured content — so Google starts indexing your site.",
          },
          {
            icon: "Wifi",
            title: "Mobile-Readable Content",
            description:
              "What used to be a tiny, pinch-to-zoom PDF becomes a real web page, readable on any device.",
          },
        ],
        sideImage: "/images/construction/3.jpg",
      },
    },

    // Slide 4: Phase 2 — Website Rebuild
    {
      type: "deliverables",
      content: {
        label: "PHASE 2 · 7–8 WEEKS",
        title: "A Website That Converts For You",
        subtitle:
          "A full redesign and rebuild. Modern, mobile-optimized, and built to drive class signups and sponsorship credibility.",
        deliverables: [
          {
            number: "01",
            title: "Core Pages",
            icon: "Layout",
            items: [
              "Home, About, Services, Contact, Team",
              "Modern responsive design — works on every device",
              "Clean navigation that guides visitors to action",
            ],
          },
          {
            number: "02",
            title: "Class & Event Experience",
            icon: "Calendar",
            items: [
              "Dedicated class landing page",
              "Clear registration CTAs on every relevant page",
              "Events calendar with Swoogo integration",
              "Webinar registration pages",
            ],
          },
          {
            number: "03",
            title: "Sponsor & Partner Showcase",
            icon: "Building",
            items: [
              "Stronger partnership page",
              "Manufacturer partner directory",
              "Product pages with video attachments from CMS",
              "Case studies & testimonials",
            ],
          },
          {
            number: "04",
            title: "Content",
            icon: "BookOpen",
            items: [
              "Building Science Library, searchable and browsable",
              "Blog/article pages (converted from PDFs)",
              "Glossary, tools, and calculators rebuilt",
              "Builder vs. manufacturer landing pages",
            ],
          },
        ],
      },
    },

    // Slide 5: Phase 3 — User Segmentation & Ongoing
    {
      type: "pillars",
      content: {
        label: "PHASE 3 · THE LONG GAME",
        title: "Personalize the Experience",
        subtitle:
          "Once the foundation is solid, we layer in the features that make CI's website feel custom-built for every visitor, continuing on a retainer basis.",
        pillars: [
          {
            title: "Account Types & Smart Content",
            description:
              "Account creation with profession selection — builders, remodelers, manufacturers, and salespeople each get a tailored experience with the content they need front and center.",
            icon: "Users",
          },
          {
            title: "Image-Heavy PDF Conversion",
            description:
              "The remaining image-rich construction PDFs — technical diagrams, installation guides, product specs — converted with a refined approach developed during Phase 1.",
            icon: "FileText",
          },
          {
            title: "Updated App Experience",
            description:
              "Improve the app experience to match the website's new design and functionality and make it more user-friendly than ever.",
            icon: "Filter",
          },
        ],
      },
    },

    // Slide 6: How We Work Together
    {
      type: "growthEngine",
      content: {
        label: "HOW WE WORK",
        title: "Embedded, Not Outsourced",
        subtitle:
          "I'm not a vendor who disappears. I work alongside your team with full transparency. Weekly calls, progress reports, and one point of contact for everything.",
        leftPanel: {
          icon: "MessageSquare",
          title: "What You Get Every Week",
          sectionLabel: "CADENCE",
          items: [
            {
              icon: "Calendar",
              title: "Weekly Strategy Call",
              description:
                "30-minute check-in to review progress, get feedback, and align priorities.",
            },
            {
              icon: "BarChart",
              title: "Progress Report",
              description:
                "Clear documentation of what was done, what's next, and any decisions needed.",
            },
            {
              icon: "MessageSquare",
              title: "Direct Communication",
              description:
                "Email, Slack, whatever works — questions answered same day, not next week.",
            },
          ],
        },
        rightPanel: {
          icon: "Shield",
          title: "What Doesn't Change",
          sectionLabel: "YOUR SAFETY NET",
          items: [
            {
              icon: "Database",
              title: "WordPress Stays",
              description:
                "Your content lives in WordPress. Your team manages it the same way they always have.",
            },
            {
              icon: "Lock",
              title: "App Keeps Working",
              description:
                "The database doesn't move. The app keeps referencing the same data. Nothing breaks.",
            },
            {
              icon: "Shield",
              title: "You Own Everything",
              description:
                "All code, all content, all assets are yours. No lock-in, no dependency.",
            },
          ],
        },
      },
    },

    // Slide 7: Before / After — Big Picture
    {
      type: "beforeAfter",
      content: {
        label: "THE BIG PICTURE",
        title: "Where This Takes CI",
        subtitle:
          "Everything we've walked through: content migration, a new site, & personalization.",
        before: {
          label: "TODAY",
          title: "Current State",
          highlight: "Current",
          items: [
            "1,400+ resources invisible to search engines",
            "PDFs unreadable on mobile devices",
            "Class registration buried in navigation",
            "One-size-fits-all experience for every visitor",
            "Website doesn't reflect the quality of CI's work",
            "Sponsor pitches rely on in-person relationships alone",
          ],
        },
        after: {
          label: "AFTER",
          title: "The New CI",
          highlight: "New",
          items: [
            "Hundreds of indexed articles driving organic traffic",
            "Mobile-first content — website and app",
            "Class signups front and center on every page",
            "Tailored experience for builders, manufacturers, and teams",
            "Modern, professional presence that matches CI's reputation",
            "Digital credibility asset for sponsorship conversations",
          ],
        },
      },
    },

    // Slide 8: ROI
    {
      type: "roi",
      content: {
        label: "THE MATH",
        title: "This Pays for Itself",
        description:
          "CI Live classes generate up to $40,000 per session. Sponsorships drive 60% of total revenue. A modern website that drives class signups and strengthens sponsor pitches isn't an expense — it's a revenue multiplier.",
        highlight: "revenue multiplier",
        benefits: [
          {
            icon: "Search",
            title: "Organic Traffic",
            description:
              "1,400+ indexed articles driving builders to your site through Google — for free.",
          },
          {
            icon: "MousePointerClick",
            title: "Class Conversions",
            description:
              "Clear signup flows and prominent CTAs turn visitors into paying attendees.",
          },
          {
            icon: "Building",
            title: "Sponsor Credibility",
            description:
              "A professional digital presence supports your team in closing annual contracts.",
          },
          {
            icon: "TrendingUp",
            title: "Compounding Growth",
            description:
              "SEO compounds over time. Every article indexed is a permanent entry point to CI.",
          },
        ],
        metric: {
          value: "$10K+",
          label: "per class (conservatively)",
          subtext: "Just one extra class pays for this entire engagement",
        },
      },
    },

    // Slide 9: Investment
    {
      type: "valueStack",
      content: {
        label: "INVESTMENT",
        title: "Here's What It Looks Like",
        subtitle:
          "A retainer protects us both, with each phase having a clear scope and timeline.",
        items: [
          {
            icon: "FileText",
            text: "Phase 1: Content migration & SEO — text PDFs to indexed blog posts (1–2 weeks)",
          },
          {
            icon: "Layout",
            text: "Phase 2: Full website redesign and rebuild — 25+ page templates, class landing pages, sponsor showcase (7–8 weeks)",
          },
          {
            icon: "Users",
            text: "Phase 3: User segmentation, personalization, image-heavy PDF conversion (Ongoing)",
          },
          {
            icon: "MessageSquare",
            text: "Weekly strategy calls and progress reports included",
          },
        ],
        totals: [
          { label: "Weekly Retainer", value: "$1,000/wk" },
          { label: "Estimated Project Completion", value: "8–10 weeks" },
          { label: "Phase 3", value: "Ongoing" },
        ],
        note: "No contract. Phase 3 continues as a partnership, site maintenance, new features, etc. on a retainer basis.",
      },
    },

    // Slide 10: CTA
    {
      type: "cta",
      content: {
        label: "LET'S BUILD THIS",
        title: "Next Steps",
        subtitle: "Ready to turn CI's content into a revenue engine?",
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
        sideImage: "/images/blue/blue-4.jpg",
      },
    },
  ],
};
