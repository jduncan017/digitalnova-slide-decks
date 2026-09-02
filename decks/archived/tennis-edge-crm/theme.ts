import { createTheme } from "~/lib/theme";

// Theme configuration for Tennis Edge CRM deck
// Brand: Dark background with bright green accents (matches their website)
export const theme = createTheme({
  // Bright green from their website
  primary: "#39E075",
  primaryLight: "#5AE893",

  // Dark slide backgrounds with subtle green tint
  slideBg: {
    from: "#070f0b",
    to: "#0c1610",
  },
  outerBg: "#030805",

  // Semi-transparent whites for cards/boxes on dark background
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
  clientLogo: "/logos/tennis-edge.png",
  clientName: "Tennis Edge CRM",
});
