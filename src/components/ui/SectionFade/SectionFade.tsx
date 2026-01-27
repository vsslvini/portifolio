import { Box, styled } from "@mui/material";

const FadeContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "200px", // Altura do degradê (ajuste conforme a suavidade desejada)
  pointerEvents: "none", // Importante: deixa o clique passar (não bloqueia botões abaixo)

  // O Segredo: Começa transparente e termina na cor exata do fundo do seu tema
  background: `linear-gradient(to bottom, transparent, ${theme.palette.background.default})`,

  zIndex: 2, // Garante que fique acima das linhas do grid
}));

export const SectionFade = () => {
  return <FadeContainer />;
};
