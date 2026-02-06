import type { OnePagerDefinition } from "~/lib/onepagerSchema";

export const onepagerContent: OnePagerDefinition = {
  // ── Intro Page ──
  title: "Greek Referral Program",
  subtitle: "Turn Your Network Into Cash\n— No Trip Planning Required",
  introDescription:
    "Earn $10 for every person who travels on a trip you referred. No planning, no logistics, no fees — just make an intro and get paid.",

  heroImage:
    "https://images.unsplash.com/photo-1768737676967-5d340e2f86cc?w=1080&q=80&fit=crop",

  stats: [
    { value: "$10", label: "Per Person" },
    { value: "$500", label: "50 Travelers" },
    { value: "$1,000+", label: "100 Travelers" },
  ],

  // ── Details Page ──
  sections: [
    {
      type: "bullets",
      title: "How It Works",
      items: [
        {
          text: "You know a social chair, exec board member, or senior class leader at another university",
          style: "check",
        },
        {
          text: "You introduce them to Miles & Memories",
          style: "check",
        },
        {
          text: "They book a trip with us",
          style: "check",
        },
        {
          text: "You get paid $10 for every person who travels",
          style: "check",
        },
      ],
    },
    {
      type: "math",
      title: "Quick Math",
      rows: [
        { input: "10 people", result: "$100" },
        { input: "20 people", result: "$200" },
        { input: "50 people", result: "$500" },
        { input: "100 people", result: "$1,000" },
      ],
      footer: "And that's just for one intro.",
    },
    {
      type: "callout",
      content:
        "We're looking for connections at Alabama, UNC, Virginia Tech, Miami, USC — or any university with Greek Life travel.",
    },
    {
      type: "comparison",
      title: "Why This Is Easy Money",
      dont: [
        "You don't plan the trip",
        "You don't handle payments",
        "You don't deal with logistics",
      ],
      do: [
        "You just make the intro",
        "We take it from there",
        "You get paid when they travel",
      ],
    },
    {
      type: "steps",
      title: "How to Get Started",
      steps: [
        "Think of someone planning group travel",
        "Send them our info or text us their name",
        "We handle everything from there",
        "Get paid when the group travels",
      ],
    },
  ],

  contact: {
    name: "Mandy Gonzales",
    role: "Founder, Miles & Memories",
    email: "mandy@milesandmemories.net",
    website: "milesandmemories.net",
  },

  closingLine: "Your network is valuable. Let's make it work for you.",
};
