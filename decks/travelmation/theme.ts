import { createTheme } from "~/lib/theme";

// Light theme for Travelmation Corporate Travel Platform deck
// Sky blue primary matching the Travelmation wordmark
export const theme = createTheme({
  primary: "#3B95E0",
  primaryLight: "#6BB1EB",
  primaryDark: "#1E78C7",

  slideBg: {
    from: "#ffffff",
    to: "#f8fafc",
  },
  outerBg: "#f1f5f9",

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

  clientLogo: "/logos/travelmation.avif",
  clientName: "Travelmation",
});
