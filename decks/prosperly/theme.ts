import { createTheme } from "~/lib/theme";

export const theme = createTheme({
  primary: "#1890FF",
  primaryLight: "#4DA8FF",
  primaryDark: "#0A6DD9",

  // Light slide backgrounds — white to subtle blue-gray
  slideBg: {
    from: "#FAFCFF",
    to: "#EDF1F7",
  },
  outerBg: "#E2E8F0",

  // Cards — light cool grays
  neutral: {
    600: "#CBD5E1",
    700: "#E2E8F0",
    800: "#EFF3F8",
    900: "#F5F8FC",
    950: "#FAFCFE",
  },

  // Text colors — dark for light background
  gray: {
    300: "#0F172A",
    400: "#475569",
    500: "#64748B",
  },

  mode: "light",

  clientLogo: "/logos/prosperly.png",
  clientName: "Prosperly",
});
