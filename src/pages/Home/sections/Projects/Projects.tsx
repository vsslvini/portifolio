import React, { useState } from "react"
import { projectsData, type ProjectItem } from "./data/ProjectData"
import { Box, Container, Typography } from "@mui/material"
import ProjectGrid from "./components/ProjectGrid"
import { AnimatePresence } from "framer-motion"
import ProjectModal from "./components/ProjecModal"

const Projects: React.FC = () => {

  const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null)

  return (
    <Box sx={{ py: 10, position: "relative" }} >
      <Container maxWidth="lg">
        <Box mb={6} textAlign="center" gap={3} >
          <Typography variant="subtitle1" sx={{ color: "primary.main", mb: 1 }}>
            // 03. EXPERIENCES
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: "monospace", letterSpacing: "-2px" }}>
            Projects
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Clique nos projetos para ver detalhes.
          </Typography>
        </Box>

        <ProjectGrid
          items={projectsData}
          onSelect={setSelectedItem}
        />
      </Container>
      <AnimatePresence>
        {selectedItem && (
          <ProjectModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </Box>
  )
}

export default Projects
