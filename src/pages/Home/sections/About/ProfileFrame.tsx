import { Box, styled } from "@mui/material";

// Este componente é puramente visual. 
// Responsabilidade: Criar a moldura Sci-Fi usando as cores do seu tema.

export const FrameContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "350px", // Tamanho máximo controlado
  aspectRatio: "1/1", // Garante que seja sempre quadrado
  margin: "0 auto", // Centraliza se o container pai for maior

  // Usa a cor do papel do tema, mas com muita transparência para o efeito "vidro"
  backgroundColor: "rgba(10, 15, 28, 0.3)", // Baseado no seu theme.palette.background.paper
  border: `1px solid ${theme.palette.divider}`, // Borda sutil

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden", // Garante que a imagem não vaze os cantos
}));

// Os "Corner Markers" (aquelas linhas nos cantos)
// Usamos pseudo-elementos para não sujar o HTML com divs inúteis
export const CornerMarkers = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none", // Não atrapalha cliques
  zIndex: 2,

  "&::before": {
    content: '""',
    position: "absolute",
    top: -1,
    left: -1,
    width: "24px",
    height: "24px",
    // AQUI: Usando a cor primária do seu tema (#2f8af5)
    borderTop: `2px solid ${theme.palette.primary.main}`,
    borderLeft: `2px solid ${theme.palette.primary.main}`,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -1,
    right: -1,
    width: "24px",
    height: "24px",
    // AQUI: Usando a cor primária do seu tema
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    borderRight: `2px solid ${theme.palette.primary.main}`,
  }
}));

// Componente Wrapper final para facilitar o uso
interface ProfileFrameProps {
  children: React.ReactNode;
}

export const ProfileFrame = ({ children }: ProfileFrameProps) => {
  return (
    <FrameContainer>
      <CornerMarkers />
      {children}
    </FrameContainer>
  );
};
