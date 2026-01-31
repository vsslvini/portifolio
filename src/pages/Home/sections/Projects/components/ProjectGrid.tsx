import { Box } from "@mui/material";
import type { ProjectItem } from "../data/ProjectData";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  items: ProjectItem[];
  onSelect: (item: ProjectItem) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ items, onSelect }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        px: { xs: 2, md: 0 }
      }}>

      {items.map((item) => (
        <ProjectCard
          key={item.id}
          item={item}
          onClick={() => onSelect(item)}
        />
      ))}
    </Box>
  )
}

export default ProjectGrid
