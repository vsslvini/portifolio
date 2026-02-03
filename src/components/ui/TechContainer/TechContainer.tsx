import { Box, Container, styled } from "@mui/material";
import type { ReactNode } from "react";

// Estilo do Container com as linhas laterais (fading)
const StyledContainer = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  padding: theme.spacing(4),
  margin: '0 auto',
  width: 'calc(100% - 32px)', // Garante 16px de cada lado em telas pequenas

  [theme.breakpoints.up('md')]: {
    width: '100%', // Volta ao normal em telas maiores
  },
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
    opacity: 0.5,
  },
  "&::before": { left: 0 },
  "&::after": { right: 0 },
}));

// Interface para os Marcadores
interface CornerMarkerProps {
  $top?: boolean;
  $bottom?: boolean;
  $left?: boolean;
  $right?: boolean;
}

// Estilo dos Marcadores dos Cantos (Lógica dos $props incluída)
const CornerMarker = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$top' && prop !== '$bottom' && prop !== '$left' && prop !== '$right',
})<CornerMarkerProps>(({ theme, $top, $bottom, $left, $right }) => ({
  position: "absolute",
  width: "10px",
  height: "10px",
  borderColor: theme.palette.primary.main,
  borderStyle: "solid",
  borderWidth: 0,

  borderTopWidth: $top ? "2px" : 0,
  borderBottomWidth: $bottom ? "2px" : 0,
  borderLeftWidth: $left ? "2px" : 0,
  borderRightWidth: $right ? "2px" : 0,

  top: $top ? "-1px" : "auto",
  bottom: $bottom ? "-1px" : "auto",
  left: $left ? "-1px" : "auto",
  right: $right ? "-1px" : "auto",

  opacity: 0.8,
  boxShadow: `0 0 8px ${theme.palette.primary.main}`,
}));

interface TechFrameProps {
  children: ReactNode;
}

// O Componente Final que vamos usar
const TechContainer = ({ children }: TechFrameProps) => {
  return (
    <StyledContainer maxWidth="md" sx={{ textAlign: "center" }}>
      {/* Os 4 cantos são gerados automaticamente aqui dentro */}
      <CornerMarker $top $left />
      <CornerMarker $top $right />
      <CornerMarker $bottom $left />
      <CornerMarker $bottom $right />

      {/* O conteúdo (Textos, botões) entra aqui */}
      {children}
    </StyledContainer>
  );
};

export default TechContainer;
