import { createTheme } from "~/lib/theme";

// Theme configuration for Construction Instruction deck
// CI brand blue with light, clean backgrounds
export const theme = createTheme({
  // CI brand blues
  primary: "#1A8BB5",
  primaryLight: "#4BAFD4",
  primaryDark: "#146E91",

  // Light slide backgrounds - cool white to light blue tint
  slideBg: {
    from: "#F8FCFE",
    to: "#F0F8FB",
  },
  outerBg: "#DCE8ED",

  // Cards - light cool gray tones
  neutral: {
    600: "#CDD8DE",
    700: "#D9E4EA",
    800: "#E8F0F4",
    900: "#F2F7FA",
    950: "#F9FCFD",
  },

  // Text colors - dark for light background
  gray: {
    300: "#1a1a2e",
    400: "#4a5568",
    500: "#718096",
  },

  // Light mode
  mode: "light",

  // Client branding
  clientLogo: "/logos/construction-instruction.webp",
  clientName: "Construction Instruction",
});
