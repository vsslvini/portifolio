import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5"; // Certifique-se de ter react-icons instalado
import type { TechItem } from "../data/TechData"; // Importando a tipagem
// Importando a tipagem

interface TechModalProps {
  item: TechItem;       // O objeto com os dados (Python, React, etc)
  onClose: () => void;  // Função para fechar o modal
}

const TechModal: React.FC<TechModalProps> = ({ item, onClose }) => {
  const Icon = item.icon;

  return (
    // 1. CONTAINER FIXED: Garante que o modal cubra a tela inteira, centralizado
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999, // Fica na frente de tudo (Navbar, Hero, etc)
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none" // Permite clicar "através" nas bordas (mas o backdrop bloqueia)
      }}
    >
      {/* 2. BACKDROP (FUNDO ESCURO) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // Clicar no escuro fecha o modal
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(6, 9, 16, 0.85)", // Fundo bem escuro
          backdropFilter: "blur(8px)", // Desfoque no fundo do site
          pointerEvents: "auto" // Reabilita o clique aqui
        }}
      />

      {/* 3. O CARD EXPANDIDO (CONTEÚDO) */}
      <motion.div
        layoutId={`card-container-${item.name}`} // A MÁGICA: Conecta com o card pequeno
        style={{
          width: "90%",
          maxWidth: "500px",
          backgroundColor: "#0a0f1c", // Cor de fundo do card (seu tema dark)
          borderRadius: "20px",
          border: "1px solid #2f8af5", // Borda azul neon
          overflow: "hidden",
          position: "relative",
          zIndex: 10,
          pointerEvents: "auto",
          boxShadow: "0 0 50px -10px rgba(47, 138, 245, 0.3)" // Glow azul
        }}
      >
        {/* Botão de Fechar (X) */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "grey.500",
            "&:hover": { color: "white" }
          }}
        >
          <IoClose size={24} />
        </IconButton>

        {/* Conteúdo Interno */}
        <Box sx={{ p: 5, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

          {/* Ícone Animado */}
          <motion.div
            layoutId={`card-icon-${item.name}`} // Conecta com o ícone pequeno
            style={{ fontSize: "5rem", color: "#2f8af5", marginBottom: "1.5rem" }}
          >
            <Icon />
          </motion.div>

          {/* Textos (Entram com Fade-In suave) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: "white" }}>
              {item.name}
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                mb: 3,
                color: "#2f8af5",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "0.8rem"
              }}
            >
              {item.category}
            </Typography>

            <Typography variant="body1" sx={{ color: "grey.400", lineHeight: 1.8, fontSize: "1.1rem" }}>
              {item.details}
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default TechModal;
