import { createTheme } from "~/lib/theme";

// Light theme for The Bradley Law Firm, PLLC
// The firm's deep green (#265b3b) carries every accent, line and highlight.
// The brand gold (#b0953a) is not used as an accent at all: it lives in the
// page gradient and the card tints, so the whole deck reads warm without the
// gold competing with the green for attention.
export const theme = createTheme({
  mode: "light",

  primary: "#265b3b",
  primaryLight: "#4f9d6d",
  primaryDark: "#163824",

  // Warm, gold-biased paper rather than a neutral white
  slideBg: {
    from: "#ffffff",
    to: "#faf6ea",
  },
  outerBg: "#f0eade",

  // Card fills and borders tinted with the brand gold
  neutral: {
    600: "rgba(176, 149, 58, 0.10)",
    700: "rgba(176, 149, 58, 0.26)",
    800: "rgba(176, 149, 58, 0.06)",
    900: "rgba(176, 149, 58, 0.04)",
    // 950 is the foreground colour of the arrow inside the primary circle on the
    // before/after slide, so in a light theme it has to be light, not a faint tint.
    950: "#faf6ea",
  },

  // Text sits in the green family so it belongs to the same world as the accent
  gray: {
    300: "#13291c",
    400: "#4c5a50",
    500: "#8a8f83",
  },

  clientLogo: "/logos/bradley-law-1.png",
  clientName: "The Bradley Law Firm, PLLC",
});
