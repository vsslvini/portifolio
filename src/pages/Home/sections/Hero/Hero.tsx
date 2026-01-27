import { Opacity } from "@mui/icons-material";
import { Box, Container, styled } from "@mui/material"
import { Typography } from "@mui/material"
import { alpha } from "@mui/material/styles";


const StyledHero = styled("div")(({ theme }) => ({
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
    /* Linhas Verticais */
    linear-gradient(${theme.palette.text.primary} 1px, transparent 1px),
    /* Linhas Horizontais */
    linear-gradient(90deg, ${theme.palette.text.primary} 1px, transparent 1px)
  `,
  backgroundSize: "80px 80px",
  maskImage: "radial-gradient(ellipse at center, transparent 20%, black 90%)",
  WebkitMaskImage: "radial-gradient(ellipse at center, transparent 15%, black 90%)", // Para compatibilidade
  pointerEvents: "none",

}));

const TechContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  padding: theme.spacing(4),
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "1px",
    background: `linear-gradient(
      to bottom,
      transparent,
      ${theme.palette.primary.main},
      transparent
    )`,
    Opacity: 0.5,
  },
  "&::before": { left: 0 },
  "&::after": { right: 0 },
}));

const CornerMarker = styled(Box)(({ theme, top, left, right, bottom }: any) => ({
  position: "absolute",
  width: "10px",
  height: "10px",
  borderColor: theme.palette.primary.main,
  borderStyle: "solid",
  borderWidth: 0,
  // Props condicionais para desenhar apenas os cantos necessários
  borderTopWidth: top ? "2px" : 0,
  borderBottomWidth: bottom ? "2px" : 0,
  borderLeftWidth: left ? "2px" : 0,
  borderRightWidth: right ? "2px" : 0,

  top: top ? "-1px" : "auto",
  bottom: bottom ? "-1px" : "auto",
  left: left ? "-1px" : "auto",
  right: right ? "-1px" : "auto",

  opacity: 0.8,
  boxShadow: `0 0 8px ${theme.palette.primary.main}`, // Glow sutil no canto
}));

const Hero = () => {

  return (
    <>
      <StyledHero>

        <BackgroundGlow />

        <BlueprintGrid />

        <TechContainer
          maxWidth="md"
          sx={{
            textAlign: "center",
          }}
        >

          <CornerMarker top left />
          <CornerMarker top right />
          <CornerMarker bottom left />
          <CornerMarker bottom right />

          <Typography variant="subtitle1" gutterBottom>
            Welcome to
          </Typography>

          <Typography variant="h1" gutterBottom>
            Vinicius Alencar
          </Typography>

          <Typography variant="h2">
            &lt;Developer Portfolio /&gt;
          </Typography>

        </TechContainer>


      </StyledHero >
    </>
  )

}

export default Hero
