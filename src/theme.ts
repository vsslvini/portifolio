import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#4f8e3e",
    },
  },
  typography: {
    fontFamily: "Atkinson Hyperlegible Mono",

    h1: {
      fontSize: "4.5rem",
    },

    h2: {
      fontSize: "3rem",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
