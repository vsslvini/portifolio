import { Box, Typography, styled, keyframes } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// A animação de flutuar
const float = keyframes`
  0% { transform: translateY(0px); opacity: 1; }
  50% { transform: translateY(10px); opacity: 0.5; }
  100% { transform: translateY(0px); opacity: 1; }
`;

const ScrollWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 40,
  // left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(1),
  zIndex: 3,
  animation: `${float} 2s infinite ease-in-out`,
  cursor: "pointer", // Adiciona feedback visual de que é clicável
  userSelect: "none" // Evita selecionar o texto sem querer
}));

const ScrollIndicator = () => {
  return (
    <ScrollWrapper>
      <Typography
        variant="caption"
        sx={{
          color: "text.secondary",
          letterSpacing: "0.2em",
          textTransform: "uppercase"
        }}
      >
        Scroll Down
      </Typography>
      <KeyboardArrowDownIcon sx={{ color: "primary.main" }} />
    </ScrollWrapper>
  );
};

export default ScrollIndicator;
