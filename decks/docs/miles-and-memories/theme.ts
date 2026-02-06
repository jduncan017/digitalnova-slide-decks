import { createTheme } from "~/lib/theme";

export const theme = createTheme({
  primary: "#D63663",
  primaryLight: "#E06B8E",
  primaryDark: "#B82D54",
  slideBg: {
    from: "#FEFCF7",
    to: "#F6F1E4",
  },
  outerBg: "#EDE8DA",
  neutral: {
    600: "#C9C4B7",
    700: "#DDD8CB",
    800: "#FFFFFF",
    900: "#F0EBDE",
    950: "#E8E3D6",
  },
  gray: {
    300: "#3A3A3A",
    400: "#535353",
    500: "#858481",
  },
  mode: "light",
  clientLogo: "/logos/miles-and-memories-logo-full-black.png",
  clientName: "Miles & Memories",
});
