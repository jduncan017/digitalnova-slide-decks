import { createTheme } from "~/lib/theme";

// Theme configuration for EventCombo deck
// Bright white background with subtle pink tint and pink/magenta accents
export const theme = createTheme({
  // EventCombo brand pink/magenta
  primary: "#0b90b3",
  primaryLight: "#40d8ff",
  primaryDark: "#003947",

  // Light slide backgrounds with subtle pink tint (matches their site)
  slideBg: {
    from: "#fffafb",
    to: "#fff5f6",
  },
  outerBg: "#e8e3e4",

  // Cards on light background - warm tint, darker = lower brightness not more saturation
  neutral: {
    600: "#e5ddd5",
    700: "#ede5dd",
    800: "#f5ede5",
    900: "#faf5f0",
    950: "#fdfaf7",
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
  clientLogo: "/logos/eventcombo.png",
  clientName: "EventCombo",
});
