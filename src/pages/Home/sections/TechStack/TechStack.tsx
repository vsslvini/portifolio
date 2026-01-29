import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";

// Imports organizados
import { techData, type TechItem } from "./data/TechData";
import TechGrid from "./components/TechGrid"; // <--- Novo import
import TechModal from "./components/TechModal";

const TechStack: React.FC = () => {
  // Estado (State Management)
  const [selectedItem, setSelectedItem] = useState<TechItem | null>(null);

  return (
    <Box id="tech-stack" sx={{ py: 10, position: "relative" }}>
      <Container maxWidth="lg">
        {/* Cabeçalho (Pode ser componentizado no futuro, mas ok por enquanto) */}
        <Box mb={6} textAlign="center">
          <Typography variant="subtitle1" sx={{ color: "primary.main", mb: 1 }}>
            // 02. SYSTEM CAPACITY
          </Typography>
          <Typography variant="h2" sx={{ fontFamily: "monospace", letterSpacing: "-2px" }}>
            Tech Stack
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Clique nos módulos para ver detalhes da arquitetura.
          </Typography>
        </Box>

        {/* --- A MUDANÇA ESTÁ AQUI --- */}
        {/* O Controlador apenas delega a tarefa para o Grid */}
        <TechGrid
          items={techData}
          onSelect={setSelectedItem} // Passa a função de controle de estado
        />
        {/* --------------------------- */}

      </Container>

      {/* Camada de Overlay (Modal) */}
      <AnimatePresence>
        {selectedItem && (
          <TechModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </Box>
  );
};

export default TechStack;
