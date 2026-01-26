import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2f8af5",
    },
    secondary: {
      main: "#f5f5f5",
    },
    background: {
      default: "#060910", 
      paper: "#0a0f1c" 
    },
    text: {
      primary: "#ffffff",
      secondary: "#aebbc9"
    }
  },
  typography: {
    fontFamily: "Atkinson Hyperlegible Mono",

    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },

    h2: {
      fontSize: "2.4rem",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
