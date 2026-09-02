import { createTheme } from "~/lib/theme";

// Theme configuration for Veterans Benefit Software deck
// Navy background with orange accents - clean, professional for attorneys
export const theme = createTheme({
  // Orange accent color
  primary: "#f97316",
  primaryLight: "#fb923c",

  // Navy slide backgrounds with subtle gradient (bright TL to darker BR)
  slideBg: {
    from: "#1e3a5f",
    to: "#0c1929",
  },
  outerBg: "#080f18",

  // Neutral cards on dark background
  neutral: {
    600: "rgba(255, 255, 255, 0.12)",
    700: "rgba(255, 255, 255, 0.18)",
    800: "rgba(255, 255, 255, 0.06)",
    900: "rgba(255, 255, 255, 0.04)",
    950: "rgba(255, 255, 255, 0.02)",
  },

  // Text colors
  gray: {
    300: "#ffffff",
    400: "#cbd5e1",
    500: "#94a3b8",
  },

  // Client branding - using placeholder logo for now
  clientLogo: "/logo.png",
  clientName: "Veterans Benefit Software",
});
