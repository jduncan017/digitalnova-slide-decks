import { createTheme } from "~/lib/theme";

// Theme configuration for SaaS Sales deck
// Target audience: SaaS founders
// Psychology: Growth, success, profit, "green light to proceed"
export const theme = createTheme({
  // Emerald - signals growth, success, money, action
  primary: "#10b981", // Emerald-500
  primaryLight: "#6ee7b7", // Emerald-300 - energetic, optimistic

  // Slightly warmer blacks to feel less cold/corporate
  slideBg: {
    from: "#0a0a0a",
    to: "#141414",
  },
  outerBg: "#1a1a1a",

  // Warm neutrals - less sterile than pure grays
  neutral: {
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a",
  },

  // Slightly warm grays for text
  gray: {
    300: "#d6d6d6",
    400: "#a8a8a8",
    500: "#737373",
  },

  // Client branding
  clientLogo: "/logo.png",
  clientName: "DigitalNova Studio",
});
