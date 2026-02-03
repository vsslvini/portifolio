import React from "react";
import { Box, IconButton, Typography, Button, Divider, Chip } from "@mui/material";
import type { ProjectItem } from "../data/ProjectData";
import { motion } from "framer-motion";
import { IoClose, IoLogoGithub, IoOpenOutline } from "react-icons/io5";

interface ProjectModalProps {
  item: ProjectItem;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose }) => {
  const techBlue = "#2f8af5";
  const bgDark = "#0a0f1c";

  if (!item) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(6, 9, 16, 0.9)", // Mais escuro para focar no modal
          backdropFilter: "blur(8px)", // Mais blur
          pointerEvents: "auto",
        }}
      />

      {/* Card do Modal - AGORA MAIOR */}
      <motion.div
        layoutId={`card-container-${item.id}`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        style={{
          width: "95%", // Ocupa quase toda a largura em mobile
          maxWidth: "1200px", // AUMENTADO: De 850px para 1200px (Largo)
          height: "90vh", // AUMENTADO: Ocupa 90% da altura da tela
          backgroundColor: bgDark,
          border: `1px solid ${techBlue}`,
          borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
          zIndex: 10,
          pointerEvents: "auto",
          boxShadow: `0 0 60px -15px rgba(47, 138, 245, 0.4)`, // Brilho mais forte
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* --- Header Fixo --- */}
        <Box sx={{
          p: 3,
          borderBottom: "1px solid rgba(47, 138, 245, 0.2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(90deg, rgba(47,138,245,0.05) 0%, transparent 100%)"
        }}>
          <Box>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography
                variant="caption"
                sx={{
                  color: techBlue,
                  fontFamily: "monospace",
                  border: `1px solid ${techBlue}`,
                  px: 1,
                  py: 0.5,
                  borderRadius: "4px"
                }}
              >
                ID: {item.id.toString().padStart(3, '0')}
              </Typography>
              <Typography variant="overline" color="gray" sx={{ letterSpacing: 2 }}>
                  // {item.category.toUpperCase()}
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ color: "white", mt: 1, fontWeight: 700, fontFamily: "monospace" }}>
              {item.title}
            </Typography>
          </Box>

          <IconButton
            onClick={onClose}
            sx={{
              color: techBlue,
              border: "1px solid rgba(47, 138, 245, 0.3)",
              borderRadius: "8px",
              "&:hover": { bgcolor: "rgba(47, 138, 245, 0.1)", border: `1px solid ${techBlue}` }
            }}
          >
            <IoClose size={24} />
          </IconButton>
        </Box>

        {/* --- Conteúdo Principal (Scrollavel) --- */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Coluna em mobile, Linha em desktop

            // Scrollbar Customizada Tech
            "&::-webkit-scrollbar": { width: "6px" },
            "&::-webkit-scrollbar-track": { background: "rgba(0,0,0,0.2)" },
            "&::-webkit-scrollbar-thumb": {
              background: techBlue,
              borderRadius: "0",
            }
          }}
        >

          {/* COLUNA 1: IMAGEM (Agora ocupa 50% em desktop para mais impacto) */}
          <Box sx={{
            width: { xs: "100%", md: "50%" },
            minHeight: { xs: "300px", md: "auto" },
            borderRight: { md: "1px solid rgba(47, 138, 245, 0.2)" },
            borderBottom: { xs: "1px solid rgba(47, 138, 245, 0.2)", md: "none" },
            position: "relative",
            bgcolor: "black",
            overflow: "hidden"
          }}>
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            ) : (
              <Box sx={{
                width: "100%", height: "100%",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                background: "radial-gradient(circle at center, rgba(47,138,245,0.15) 0%, rgba(10,15,28,1) 70%)",
                backgroundImage: `linear-gradient(rgba(47, 138, 245, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(47, 138, 245, 0.1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px" // Grid effect
              }}>
                <Typography variant="h6" sx={{ fontFamily: "monospace", color: techBlue }}>
                  [ NO_SIGNAL ]
                </Typography>
                <Typography variant="caption" sx={{ fontFamily: "monospace", color: "gray" }}>
                  Image Data Not Found
                </Typography>
              </Box>
            )}
            {/* Tech Overlay na imagem */}
            <Box sx={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: "100px",
              background: "linear-gradient(to top, #0a0f1c 0%, transparent 100%)"
            }} />
          </Box>

          {/* COLUNA 2: DETALHES */}
          <Box sx={{
            width: { xs: "100%", md: "50%" },
            p: { xs: 3, md: 5 }, // Mais padding interno
            display: "flex",
            flexDirection: "column",
            gap: 4
          }}>

            {/* Descrição */}
            <Box>
              <Typography variant="overline" color="text.secondary" sx={{ fontFamily: "monospace", display: "block", mb: 1 }}>
                // SYSTEM_DESCRIPTION
              </Typography>
              <Typography variant="h6" color="#d1d5db" sx={{ fontWeight: 300, lineHeight: 1.6, fontSize: "1.1rem" }}>
                {item.description}
              </Typography>
            </Box>

            {/* Highlight Box Maior */}
            <Box sx={{
              p: 3,
              border: `1px dashed ${techBlue}`,
              bgcolor: "rgba(47, 138, 245, 0.03)",
              borderRadius: "8px",
              position: "relative"
            }}>
              <Box sx={{ position: "absolute", top: -10, left: 20, bgcolor: bgDark, px: 1 }}>
                <Typography variant="caption" sx={{ color: techBlue, fontFamily: "monospace", fontWeight: "bold" }}>
                  ⚠ ARCHITECTURE_HIGHLIGHT
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: "#e0e0e0", fontStyle: "italic", fontFamily: "monospace" }}>
                "{item.highlight}"
              </Typography>
            </Box>

            {/* Tech Stack */}
            <Box>
              <Typography variant="overline" color="text.secondary" sx={{ fontFamily: "monospace", display: "block", mb: 2 }}>
                // MODULES_LOADED
              </Typography>
              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                {item.techStack.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    sx={{
                      borderRadius: "4px",
                      bgcolor: "transparent",
                      color: techBlue,
                      border: "1px solid rgba(47, 138, 245, 0.3)",
                      fontFamily: "monospace",
                      fontSize: "0.85rem",
                      height: "32px",
                      "&:hover": { bgcolor: "rgba(47, 138, 245, 0.1)", borderColor: techBlue }
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Spacer para empurrar botões para baixo se sobrar espaço */}
            <Box sx={{ flex: 1 }} />

            <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 2 }} />

            {/* Footer Actions */}
            <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
              {item.repoLink && (
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<IoLogoGithub />}
                  href={item.repoLink}
                  target="_blank"
                  sx={{
                    py: 1.5,
                    mb: 5,
                    borderColor: "gray", color: "white",
                    textTransform: "none", fontFamily: "monospace", fontSize: "1rem",
                    "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.05)" }
                  }}
                >
                  View Source Code
                </Button>
              )}

              {item.demoLink && (
                <Button
                  fullWidth
                  variant="contained"
                  endIcon={<IoOpenOutline />}
                  href={item.demoLink}
                  target="_blank"
                  sx={{
                    py: 1.5,
                    bgcolor: techBlue, color: "black",
                    textTransform: "none", fontFamily: "monospace", fontWeight: "bold", fontSize: "1rem",
                    "&:hover": { bgcolor: "#5ba2f7", boxShadow: "0 0 20px rgba(47,138,245,0.5)" }
                  }}
                >
                  Launch Demo
                </Button>
              )}
            </Box>

          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ProjectModal;
