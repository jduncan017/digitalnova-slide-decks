import { createTheme } from "~/lib/theme";

// Light theme for Pine Brook Hills HOA — mountain community, forest green accent
export const theme = createTheme({
  primary: "#2d6a4f",
  primaryLight: "#52b788",
  primaryDark: "#1b4332",

  slideBg: {
    from: "#ffffff",
    to: "#f0f7f2",
  },
  outerBg: "#e8f0ea",

  neutral: {
    600: "#cbd5e1",
    700: "#e2e8f0",
    800: "#f1f5f9",
    900: "#e2e8f0",
    950: "#cbd5e1",
  },

  gray: {
    300: "#1e293b",
    400: "#475569",
    500: "#64748b",
  },

  mode: "light",

  clientLogo: "/logos/PBH-Logo-Web-80x80sq.png",
  clientName: "Pine Brook Hills HOA",
});
