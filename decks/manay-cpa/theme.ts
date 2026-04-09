import { createTheme } from "~/lib/theme";

export const theme = createTheme({
  mode: "light",

  primary: "#D4952B",
  primaryLight: "#E8B44E",

  slideBg: {
    from: "#ffffff",
    to: "#FFF8ED",
  },
  outerBg: "#e2e8f0",

  neutral: {
    600: "rgba(15, 23, 42, 0.06)",
    700: "rgba(15, 23, 42, 0.12)",
    800: "rgba(15, 23, 42, 0.04)",
    900: "rgba(15, 23, 42, 0.02)",
    950: "rgba(15, 23, 42, 0.01)",
  },

  gray: {
    300: "#0f172a",
    400: "#475569",
    500: "#94a3b8",
  },

  clientLogo: "/logos/manay_logo.webp",
  clientName: "Manay CPA",
});
