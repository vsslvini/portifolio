import React from "react";
import { Box, Tooltip, Zoom } from "@mui/material";
import type { TechItem } from "./TechData";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

interface TechCardProps {
  item: TechItem;
  onClick: () => void;
}

const TechCard: React.FC<TechCardProps> = ({ item, onClick }) => {
  const theme = useTheme();
  const Icon = item.icon;

  return (
    <Tooltip
      title={item.name}
      arrow
      TransitionComponent={Zoom}
      placement="top"
    >
      <motion.div
        layoutId={`card-container-${item.name}`}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          // CORREÇÃO AQUI: Removemos width: "100%" e definimos o tamanho fixo ou fit-content
          width: "100px",
          height: "100px",
          position: "relative",
          cursor: "pointer" // Movemos o cursor para o elemento pai
        }}
      >
        <Box
          sx={{
            width: "100%", // Agora ele preenche os 100px do pai (motion.div)
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            overflow: "hidden",

            "&:hover": {
              backgroundColor: "rgba(47, 138, 245, 0.08)",
              borderColor: theme.palette.primary.main,
              boxShadow: `0 4px 20px -5px ${theme.palette.primary.main}40`,

              "& .tech-icon": {
                color: theme.palette.text.primary,
                transform: "scale(1.1) translateY(-2px)",
                filter: "drop-shadow(0 0 8px rgba(47, 138, 245, 0.6))",
              }
            }
          }}
        >
          <Box
            className="tech-icon"
            sx={{
              transition: "all 0.3s ease",
              color: theme.palette.text.secondary,
              fontSize: "2.5rem",
              display: "flex"
            }}
          >
            <motion.div layoutId={`card-icon-${item.name}`}>
              <Icon />
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </Tooltip>
  );
};

export default TechCard;
