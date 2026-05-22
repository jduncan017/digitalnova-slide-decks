import type { SOWDefinition } from "~/lib/sowSchema";

export const sowContent: SOWDefinition = {
  projectTitle: "Pine Brook Hills HOA Website",

  client: {
    name: "Pine Brook Hills HOA",
    contactName: "David",
  },

  overview:
    "A fresh build of the Pine Brook Hills website that keeps the wildlife photos and mountain feel everyone already loves. The new site will be easier to navigate, and easier to keep up to date. Hosting and all ongoing updates are covered by one flat monthly fee. No logins, nothing for the board to learn, and no surprise bills.",

  startDate: "June 1, 2026",
  estimatedCompletion: "July 6, 2026",

  deliverables: [
    {
      title: "Pages & Content",
      description:
        "Go through the current 38 pages and sort them into a cleaner setup so residents can find what they need fast. All your existing content, PDFs, forms, and images get moved to the new site.",
      items: [
        "Sort the content into a clean, simple layout",
        "Move all your copy, PDFs, and images over",
      ],
    },
    {
      title: "Design",
      description:
        "Keep the wildlife photos and mountain feel that already works. Update the layout and fonts look so it feels modern on any device.",
      items: [
        "Homepage with announcements and quick links",
        "Layouts for committee pages, forms, archives, and payments",
        "Works well on phones and tablets",
      ],
    },
    {
      title: "All Pages Included",
      items: [
        "Homepage with announcements and quick links",
        "Committee pages: HOA, Firewise, Forest Health, Architectural Review, Emergency Plan, Social Committee, Newcomer Welcome, HOA Documents",
        "Forms: ARC Application, Directory Submission, Firewise Mitigation, Newcomer",
        "Archives: Pine Brook Press, PBP Archive, Meeting Minutes",
        "Payment pages: HOA Dues, Community Fund",
      ],
    },
    {
      title: "Hosting & Maintenance (Included)",
      description:
        "The site lives on my hosting. The HOA never pays a separate hosting bill, and never deals with software updates.",
      items: [
        "Hosting and uptime monitoring",
        "Security and software updates handled for you",
        "Content updates by email or message",
        "Bug fixes and small tweaks included",
      ],
    },
  ],

  timeline: [
    {
      title: "Week 1: Plan & Design",
      description:
        "Walk through the current site, sort out the new layout, and show you a homepage mockup. You give the green light before we start building.",
      payment: "$1,750 deposit to start",
    },
    {
      title: "Weeks 2 to 4: Build & Move Content",
      description:
        "Build the new site, move all your content over, hook up PayPal and the dues tracker and Firewise table, and test everything on phone and desktop.",
    },
    {
      title: "Week 5: Review & Launch",
      description:
        "You review the new site before it goes live. Any last tweaks get made. Site launches on the same domain.",
      payment: "$1,750 balance on launch · $200/mo begins",
    },
  ],

  payments: [
    {
      description: "Deposit (50%) to start the build",
      amount: "$1,750",
      due: "Once you approve the Scope of Work",
    },
    {
      description: "Balance (50%) on launch",
      amount: "$1,750",
      due: "When the site goes live (around July 6, 2026)",
    },
    {
      description: "Hosting & maintenance, monthly",
      amount: "$200/mo",
      due: "Monthly, starting at launch",
    },
  ],

  totalInvestment: "$3,500 one-time + $200/mo (hosting & maintenance)",

  outOfScope: [
    "SEO (work to rank in Google searches)",
    "A members-only area with logins",
  ],

  assumptions: [
    "You can get back to me with feedback within about a week at each step",
    "Two rounds of changes per item are included",
    "You give me access to the current site, the HOA PayPal account, and the domain settings",
  ],
};
