import { createTheme } from "~/lib/theme";

// Theme configuration for Colorado Business CPA deck
// Light mode matching their website - white background with blue accents
export const theme = createTheme({
  // Light mode for white backgrounds
  mode: "light",

  // Brand blue for accents
  primary: "#1B75BC",
  primaryLight: "#4A9FD4",

  // Light slide backgrounds (white/very light gray)
  slideBg: {
    from: "#ffffff",
    to: "#E8F4FF",
  },
  outerBg: "#e2e8f0",

  // Dark cards/boxes for contrast on light background
  neutral: {
    600: "rgba(15, 23, 42, 0.06)",  // Card gradient light
    700: "rgba(15, 23, 42, 0.12)",  // Borders
    800: "rgba(15, 23, 42, 0.04)",  // Card gradient dark
    900: "rgba(15, 23, 42, 0.02)",  // Subtle bg
    950: "rgba(15, 23, 42, 0.01)",  // Darkest
  },

  // Text colors - dark for light background
  gray: {
    300: "#0f172a",  // Primary text (dark)
    400: "#475569",  // Secondary text
    500: "#94a3b8",  // Muted text
  },

  // Client branding
  clientLogo: "/logos/cbcpa.avif",
  clientName: "Colorado Business CPA",
});
