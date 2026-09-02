import { createTheme } from "~/lib/theme";

export const theme = createTheme({
  mode: "light",

  primary: "#C9A028",
  primaryLight: "#E0BC5A",
  primaryDark: "#9A7A1A",

  slideBg: {
    from: "#ffffff",
    to: "#fdf7e8",
  },
  outerBg: "#e8dfc0",

  neutral: {
    600: "rgba(15, 23, 42, 0.06)",
    700: "rgba(15, 23, 42, 0.12)",
    800: "rgba(15, 23, 42, 0.04)",
    900: "rgba(15, 23, 42, 0.02)",
    950: "rgba(15, 23, 42, 0.01)",
  },

  gray: {
    300: "#0f172a",
    400: "#1e293b",
    500: "#475569",
  },

  clientLogo: "/logos/rize-exteriors.png",
  clientName: "Rize Exteriors",
});
