import { createTheme } from "~/lib/theme";

// Theme configuration for Checkle deck
// Warm coral/peach orange brand with eggshell backgrounds
export const theme = createTheme({
  // Checkle brand coral orange
  primary: "#f28a6b",
  primaryLight: "#F0B08A",
  primaryDark: "#C47A55",

  // Light slide backgrounds - warm white to eggshell gradient
  slideBg: {
    from: "#FFFBF8",
    to: "#FFF8F4",
  },
  outerBg: "#E8E3E0",

  // Cards - light taupe tones
  neutral: {
    600: "#D9D4CF",
    700: "#E5E0DB",
    800: "#F0EBE6",
    900: "#F7F4F0",
    950: "#FCFAF8",
  },

  // Text colors - dark for light background
  gray: {
    300: "#1a1a2e",
    400: "#4a5568",
    500: "#718096",
  },

  // Light mode for dark footer logo
  mode: "light",

  // Client branding
  clientLogo: "/logos/checkle.png",
  clientName: "Checkle",
});
