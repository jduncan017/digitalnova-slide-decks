import type { DeckDefinition } from "~/lib/deckSchema";

export const deckContent: DeckDefinition = {
  id: "gulfway-lodge",
  meta: {
    title: "Gulfway Lodge — Logo Design",
    preparedFor: "Marcela Sabatino",
  },
  slides: [
    {
      type: "hero",
      content: {
        title: "GULFWAY LODGE",
        subtitle: "Logo Design Proposal",
        tagline: "A clean, professional identity rooted in the PRT brand.",
        heroImage: "/images/blue/blue-7.jpg",
        preparedFor: "Marcela Sabatino",
      },
    },
    {
      type: "cta",
      content: {
        label: "LET'S GO",
        title: "NEXT STEPS",
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
