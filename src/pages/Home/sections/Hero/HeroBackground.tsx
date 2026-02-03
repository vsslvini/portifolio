import { Box, styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

// O Container Principal (Wrapper) que segura a altura da tela
export const StyledHeroWrapper = styled("div")(({ theme }) => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  position: "relative",
  overflow: "hidden",
}));

const BackgroundGlow = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `
   radial-gradient(
      circle at 50% 0%,        
      ${alpha(theme.palette.primary.main, 0.2)} 0%,
      transparent 70% )
  `,
  pointerEvents: "none",
  zIndex: 0,
}));

const BlueprintGrid = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  opacity: 0.3,
  backgroundImage: `
    linear-gradient(${theme.palette.text.primary} 1px, transparent 1px),
    linear-gradient(90deg, ${theme.palette.text.primary} 1px, transparent 1px)
  `,
  backgroundSize: "80px 80px",
  maskImage: "radial-gradient(ellipse at center, transparent 20%, black 90%)",
  WebkitMaskImage: "radial-gradient(ellipse at center, transparent 15%, black 90%)",
  pointerEvents: "none",
}));

// Exportamos um componente único que já traz o Glow e o Grid juntos
export const HeroBackground = () => {
  return (
    <>
      <BackgroundGlow />
      <BlueprintGrid />
    </>
  )
}
