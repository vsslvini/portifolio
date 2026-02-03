import { IconButton } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";




const SocialButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  border: `1px solid ${alpha(theme.palette.text.secondary, 0.2)}`,
  background: alpha(theme.palette.background.paper, 0.1),
  backdropFilter: "blur(4px)",
  transition: "all 0.3s ease",

  "&:hover": {
    color: theme.palette.primary.main,
    BorderColor: theme.palette.primary.main,
    background: alpha(theme.palette.primary.main, 0.1),
    transform: "translateY(-2px)",
    boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.4)}`,

  }

}))


export default SocialButton
