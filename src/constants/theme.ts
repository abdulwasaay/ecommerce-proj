import type { ThemeOptions } from "@mui/material/styles";

const themePalatte: ThemeOptions = {
  palette: {
    mode: "light",

    // --- BRAND COLORS ---
    primary: {
      main: "#006aff",  // blue color
      light: "#FFEF00", // yellow color
      dark: "#2C6145",  // green color
    },

    secondary: {
      main: "#ef1c1c",  // second red full color
    },

    // --- BACKGROUND COLORS ---
    background: {
      default: "#f5f6f7",
      paper: "#FFFFFF",
    },

    // --- TEXT COLORS ---
    text: {
      primary: "#000000",      // Dark clean black
      secondary: "#FFFFFF",    // Sub tex
      disabled: "#626262"
    },
    divider:"#f2f2f2",

    // --- ACTION COLORS ---
    action: {
      hover: "rgba(0,0,0,0.04)",
      selected: "rgba(0,0,0,0.08)",
      disabled: "rgba(0,0,0,0.3)",
      disabledBackground: "rgba(0,0,0,0.12)",
    },
  },
  typography: {
    fontFamily: "var(--font-outfit)",
  },
};

export default themePalatte