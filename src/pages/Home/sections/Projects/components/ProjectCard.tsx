import type React from "react";
import type { ProjectItem } from "../data/ProjectData";
import { Typography, useTheme } from "@mui/material"
import { motion } from "framer-motion";
import { Box } from "@mui/material";

interface ProjectCardProps {
  item: ProjectItem;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item, onClick }) => {
  const theme = useTheme();

  return (

    <motion.div
      layoutId={`card-container-${item.id}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        maxWidth: "300px",
        height: "450px",
        aspectRatio: "16/9",
        position: "relative",
        cursor: "pointer"
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
          backgroundColor: theme.palette.background.default,
          border: `1px solid ${theme.palette.background.paper}`,
          transition: "all 0.3 cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",

          "&:hover": {
            backgroundColor: "rgba(47, 138, 245, 0.08)",
            borderColor: theme.palette.primary.main,
            boxShadow: `0 4px 20px -5px ${theme.palette.primary.main}40`,
          }

        }}
      >
        <Box
          className="thech-icon"
          sx={{
            transition: "all 0.3 ease",
            color: theme.palette.text.secondary,
            display: "flex"
          }}
        >
          <motion.div layoutId={`card-title-${item.id}`}>
            <Typography>
              {item.title}
            </Typography>
          </motion.div>
          <motion.div layoutId={`card-text-${item.id}`}>
            <Typography>
              {item.description}
            </Typography>
          </motion.div>
        </Box>

      </Box>


    </motion.div>
  )

}

export default ProjectCard;
