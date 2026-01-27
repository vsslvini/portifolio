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
    // Fonte padrão para o corpo (leitura geral)
    fontFamily: "'Inter', sans-serif",

    // O NOME (Impacto visual)
    h1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 800, // Extra Bold
      fontSize: "4.5rem", // Base (será ajustada pelo responsiveFontSizes)
      letterSpacing: "-0.02em",
      color: "#ffffff",
    },

    // SUBTÍTULO ("Developer Portfolio")
    h2: {
      fontFamily: "'Atkinson Hyperlegible Mono', monospace",
      fontSize: "2rem",
      fontWeight: 500,
      color: "#2f8af5", // Usa a cor primary
    },

    // RÓTULOS PEQUENOS ("Welcome to", datas, tags)
    subtitle1: {
      fontFamily: "'Atkinson Hyperlegible Mono', monospace",
      fontSize: "0.875rem",
      letterSpacing: "0.2em", // Aquele espaçamento espaçado chique
      textTransform: "uppercase",
      color: "#aebbc9", // text.secondary
    },

    // Texto corrido (Sobre mim)
    body1: {
      fontFamily: "'Inter', sans-serif",
      lineHeight: 1.7,
    }
  },

  // Opcional: Overrides globais de componentes
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Garante semântica HTML correta
          subtitle1: 'span',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme, { factor: 3 });

export default theme;
