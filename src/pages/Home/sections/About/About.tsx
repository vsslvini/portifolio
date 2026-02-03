import { Box, Container, Grid, Typography } from "@mui/material"
import { ProfileFrame } from "./ProfileFrame"
import theme from "../../../../theme"

const About = () => {
  return (
    <>
      <Container id="about" maxWidth="lg" sx={{ py: 12 }}>


        <Grid container spacing={8} alignItems="center">

          {/* Lado da imagem*/}
          <Grid size={{ xs: 12, md: 5 }}>
            <ProfileFrame>
              <Box
                component="img"
                src="images/eu.png"
                alt="Vinicius Alencar"
                sx={{
                  width: "100%",
                  height: "100%",
                  // Mantém a proporção sem distorcer, focando no topo (rosto)
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                  filter: "grayscale(20%) contrast(110%)",
                  transition: "0.4s ease-in-out",
                  "&:hover": {
                    filter: "none",
                    transform: "scale(1.02)",
                  }
                }}
              />
            </ProfileFrame>
          </Grid>
          {/* Lado da imagem*/}

          <Grid size={{ xs: 12, md: 7 }}>
            <Box display="flex" flexDirection="column" gap={3} sx={{
              px: { xs: 4, md: 0 },
              textAlign: { xs: "justify", md: "left" },
            }}>
              <Box
                display="flex" flexDirection="column" gap={3}
                sx={{
                  px: { xs: 4, md: 0 },
                  textAlign: { xs: "center", md: "left" }
                }}
              >

                <Typography variant="subtitle1" color="primary">
              // 01. About Me
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.text.primary
                  }}
                >
                  Vinicius Alencar
                </Typography>

                {/* Subtítulo de Cargo */}
                <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 400 }}>
                  Software Engineer & Backend Specialist
                </Typography>

              </Box>
              {/* Label do topo - Usando subtitle1 (Mono) conforme seu tema */}
              {/* Texto Descritivo - Usando body1 (Inter, lineHeight 1.7) */}
              <Typography variant="body1" paragraph>
                Atuo como Engenheiro de Software focado no desenvolvimento de soluções completas e escaláveis. Com experiência prática em
                <strong> React Native </strong>e <strong>Python</strong> , transformo requisitos complexos em aplicações robustas, cuidando
                desde a arquitetura do banco de
                dados até a interface final.
              </Typography>

              <Typography variant="body1">
                Minha atuação combina a precisão técnica da Pesquisa e Desenvolvimento em IA com a agilidade necessária para o mercado.
                Meu foco está na qualidade do código, padrões de projeto e na entrega de valor real através da tecnologia.
              </Typography>

            </Box>

          </Grid>

        </Grid>


      </Container >
    </>
  )
}

export default About
