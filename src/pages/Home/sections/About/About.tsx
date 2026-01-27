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
              <Typography variant="subtitle1" color="text.secondary" sx={{ opacity: 0.5 }}>
                [NO_IMAGE_DATA]
              </Typography>
            </ProfileFrame>
          </Grid>

          {/* Lado da imagem*/}

          <Grid size={{ xs: 12, md: 7 }}>
            <Box display="flex" flexDirection="column" gap={3} sx={{
              px: { xs: 4, md: 0 },
              textAlign: { xs: "center", md: "left"},
            }}>
              {/* Label do topo - Usando subtitle1 (Mono) conforme seu tema */}
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

              {/* Texto Descritivo - Usando body1 (Inter, lineHeight 1.7) */}
              <Typography variant="body1" paragraph>
                Sou Desenvolvedor de Software focado na construção de soluções robustas e escaláveis.
                Minha atuação é guiada por uma visão sólida de <strong>Arquitetura de Software</strong> e <strong>Design Patterns</strong>.
              </Typography>

              <Typography variant="body1">
                Acredito que a excelência técnica vai além do código funcionando; está na estrutura, na manutenibilidade e na eficiência do sistema.
                Com expertise em desenvolvimento Backend e Python, busco unir lógica de negócios a uma engenharia de alto nível.
              </Typography>

            </Box>

          </Grid>

        </Grid>


      </Container >
    </>
  )
}

export default About
