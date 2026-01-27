import { Typography, Stack } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// --- IMPORTS MODULARES (Ajustados para a tua estrutura) ---

// 1. Fundo (está na mesma pasta do Hero)
import { HeroBackground, StyledHeroWrapper } from "./HeroBackground";

// 2. Componentes UI Globais (navegamos 4 pastas para trás para chegar a src/components)
import TechContainer from "../../../../components/ui/TechContainer/TechContainer";
import ScrollIndicator from "../../../../components/ScrollIndicator/ScrollIndicator";
import SocialButton from "../../../../components/SocialButton/SocialButton";
import { SectionFade } from "../../../../components/ui/SectionFade/SectionFade";

const Hero = () => {
  return (
    <StyledHeroWrapper>
      
      {/* 1. Camada de Fundo (Grid + Glow) */}
      <HeroBackground />

      {/* 2. Container Central com as Bordas Técnicas */}
      <TechContainer>

        <Typography variant="subtitle1" gutterBottom>
          Welcome to
        </Typography>

        <Typography variant="h1" gutterBottom>
          Vinicius Alencar
        </Typography>

        <Typography variant="h2" sx={{ mb: 4 }}>
          &lt;Developer Portfolio /&gt;
        </Typography>

        {/* Barra Social */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ position: "relative", zIndex: 10, mt: 4 }}
        >
          {/* Mantemos o component="a" para o link funcionar corretamente */}
          <SocialButton 
            component="a" 
            href="https://github.com/vsslvini/" 
            target="_blank"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </SocialButton>

          <SocialButton 
            component="a" 
            href="https://linkedin.com/in/vsslvini" 
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </SocialButton>

          <SocialButton 
            component="a" 
            href="mailto:vsslviniciussousa@gmail.com"
            aria-label="Email"
          >
            <EmailIcon />
          </SocialButton>
        </Stack>

      </TechContainer>

      {/* 3. Indicador de Scroll Animado */}
      <ScrollIndicator />
      <SectionFade />
    </StyledHeroWrapper>
  )
}

export default Hero;
