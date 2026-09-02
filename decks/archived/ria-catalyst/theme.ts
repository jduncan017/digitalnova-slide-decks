import { createTheme } from "~/lib/theme";

// Theme configuration for Ria Catalyst deck
// Dark mode with semi-transparent white cards
// Based on their website: dark teal background with frosted glass elements
export const theme = createTheme({
  // White for accents on dark background
  primary: "rgb(191 219 254)",
  primaryLight: "#e2e8f0",
  primaryDark: "#0369a1", // Darker blue for buttons with white text

  // Dark teal slide backgrounds
  slideBg: {
    from: "#063549",
    to: "#0a4a60",
  },
  outerBg: "#052d3d",

  // Semi-transparent white for cards/boxes
  neutral: {
    600: "rgba(255, 255, 255, 0.15)", // Card gradient light
    700: "rgba(255, 255, 255, 0.20)", // Borders
    800: "rgba(255, 255, 255, 0.08)", // Card gradient dark
    900: "rgba(255, 255, 255, 0.05)", // Subtle bg
    950: "rgba(255, 255, 255, 0.02)", // Darkest
  },

  // Text colors - white/light for dark background
  gray: {
    300: "#ffffff", // Primary text
    400: "#cbd5e1", // Secondary text
    500: "#94a3b8", // Muted text
  },

  // Client branding
  clientLogo: "/logos/ria-catalyst.png",
  clientName: "Ria Catalyst",
});
