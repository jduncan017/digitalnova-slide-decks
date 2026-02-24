import { createTheme } from "~/lib/theme";

export const theme = createTheme({
  primary: "#2563EB",
  primaryLight: "#60A5FA",
  primaryDark: "#1d4ed8",

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
  clientLogo: "/dn-logo-dark.png",
  clientName: "Gulfway Lodge",
});
