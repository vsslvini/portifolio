import type React from "react";
import type { TechItem } from "../data/TechData";
import { Box } from "@mui/material";
import TechCard from "./TechCard";



interface TechGridProps {
  items: TechItem[];
  onSelect: (item: TechItem) => void;
}


const TechGrid: React.FC<TechGridProps> = ({ items, onSelect }) => {
  return (

    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        px: { xs: 2, md: 0 }
      }}
    >

      {items.map((item) => (
        <TechCard
          key={item.name}
          item={item}
          onClick={() => onSelect(item)}
        />
      ))}
    </Box>
  );
};


export default TechGrid
