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

}))

const Hero = () => {

  return (
    <>
      <StyledHero>

        <BackgroundGlow />

        <BlueprintGrid />

        <Container
          maxWidth="md"
          sx={{
            textAlign: "center",
          }}
        >

          <Typography variant="h6" color="textSecondary" gutterBottom>Welcome to</Typography>

          <Typography
            variant="h1"
            color="textPrimary"
            sx={{
              fontSize: { xs: "3rem", md: "5rem" },
              fontWeight: 700,
              mb: 2
            }}>
            Vinicius Alencar
          </Typography>

          <Typography variant="h4" color="primary" gutterBottom>
            Developer Portifolio
          </Typography>

        </Container>


      </StyledHero>
    </>
  )

}

export default Hero
