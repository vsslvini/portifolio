import { styled, Box } from "@mui/material"
import { motion } from "framer-motion";
import type { ProjectItem } from "../data/ProjectData";
import type React from "react";


interface BackgroundProps {
  item: ProjectItem;
  onClick: () => void;
  children?: React.ReactNode;
}

const StyledMotionDiv = styled(motion.div)({
  maxWidth: "300px",
  height: "450px",
  aspectRatio: "16/9",
  position: "relative",
  cursor: "pointer"
});

const StyledBoxCard = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 3,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.background.paper}`,
  transition: "all 0.3 cubic-bezier(0.4, 0, 0.2, 1)",
  overflow: "hidden",
  padding: theme.spacing(3),
  // flexDirection: "column",
  // alignItems: "center",
  "&:hover": {
    backgroundColor: "rgba(47, 138, 245, 0.08)",
    borderColor: theme.palette.primary.main,
    boxShadow: `0 4px 20px -5px ${theme.palette.primary.main}40`,
  }

}))


const BackgroundCard: React.FC<BackgroundProps> = ({ item, onClick, children }) => {
  return (
    <StyledMotionDiv
      layoutId={`card-container-${item.id}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <StyledBoxCard>
        {children}
      </StyledBoxCard>
    </StyledMotionDiv>
  )
};

export default BackgroundCard;
