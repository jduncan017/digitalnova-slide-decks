import { createTheme } from "~/lib/theme";

// Theme configuration for FinalBit deck
// Brand: Dark navy background with bright blue accents
// Modern, tech-forward SaaS aesthetic
export const theme = createTheme({
  // Bright blue - matches their button/icon color
  primary: "#3b82f6",
  primaryLight: "#60a5fa",

  // Dark navy slide backgrounds
  slideBg: {
    from: "#0a0f1a",
    to: "#111827",
  },
  outerBg: "#030712",

  // Semi-transparent whites for cards/boxes (similar to ria-catalyst)
  neutral: {
    600: "rgba(255, 255, 255, 0.12)",
    700: "rgba(255, 255, 255, 0.15)",
    800: "rgba(0, 0, 0, 0.1)",
    900: "rgba(0, 0, 0, 0.25)",
    950: "rgba(0, 0, 0, 0.5)",
  },

  // Text colors - white/light for dark background
  gray: {
    300: "#ffffff",
    400: "#d1d5db",
    500: "#9ca3af",
  },

  // Client branding
  clientLogo: "/logos/finalbit_logo1.png",
  clientName: "FinalBit",
});
