import type React from "react";
import type { ProjectItem } from "../data/ProjectData";
import { Typography, useTheme, Chip, Stack, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import BackgroundCard from "./BackgroundCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; // Ícone para a categoria

interface ProjectCardProps {
  item: ProjectItem;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item, onClick }) => {
  const theme = useTheme();

  return (
    <BackgroundCard item={item} onClick={onClick}>

      {/* --- CABEÇALHO (Categoria + Título) --- */}
      <motion.div layoutId={`card-header-${item.id}`}>

        {/* Badge da Categoria (Pequeno e sutil acima do título) */}
        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 1 }}>
          <LocalOfferIcon sx={{ fontSize: 14, color: theme.palette.text.secondary }} />
          <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
            {item.category}
          </Typography>
        </Stack>

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {item.title}
        </Typography>
      </motion.div>

      {/* --- CORPO (Imagem) --- */}
      {/* Container da imagem com proporção fixa para não quebrar o layout */}
      <Box sx={{
        flexGrow: 1,
        my: 2,
        width: '100%',
        height: '160px', // Altura fixa para todos os cards ficarem iguais
        borderRadius: 2,
        overflow: 'hidden', // Corta a imagem se ela for maior que o container
        backgroundColor: theme.palette.action.hover // Cor de fundo enquanto carrega
      }}>
        {/* Renderização Condicional: Só mostra imagem se existir no JSON */}
        {item.imageUrl ? (
          <Box
            component="img"
            src={item.imageUrl}
            alt={item.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // "Cover" garante que a imagem preencha tudo sem esticar
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' } // Zoom suave na imagem ao passar o mouse
            }}
          />
        ) : (
          // Fallback caso não tenha imagem (um ícone ou texto)
          <Box sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="caption" color="text.secondary">Sem Imagem</Typography>
          </Box>
        )}
      </Box>

      {/* --- DESCRIÇÃO CURTA (Opcional) --- */}
      {/* Limita o texto a 2 linhas e coloca "..." no final */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          mb: 2,
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2, // Número máximo de linhas
        }}
      >
        {item.description}
      </Typography>

      {/* --- TAGS (Stack Técnica) --- */}
      <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', gap: 1 }}>
        {/* Mapeando o techStack novo */}
        {item.techStack.slice(0, 3).map((tech) => (
          <Chip
            key={tech}
            label={tech}
            size="small"
            variant="outlined"
            sx={{
              borderColor: theme.palette.divider,
              color: theme.palette.text.secondary,
              fontSize: '0.7rem',
              height: '24px'
            }}
          />
        ))}
        {item.techStack.length > 3 && (
          <Chip label={`+${item.techStack.length - 3}`} size="small" variant="outlined" sx={{ height: '24px' }} />
        )}
      </Stack>

      {/* --- RODAPÉ (Botão) --- */}
      <Box sx={{ width: '100%', mt: 'auto' }}>
        <Button
          variant="outlined"
          fullWidth
          endIcon={<ArrowForwardIcon />}
          onClick={onClick}
          sx={{
            borderRadius: '20px',
            textTransform: 'none',
            borderWidth: '2px',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            '&:hover': {
              borderWidth: '2px',
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
              transform: 'translateY(-2px)',
              boxShadow: `0 4px 10px ${theme.palette.primary.main}40`
            }
          }}
        >
          Ver Detalhes
        </Button>
      </Box>

    </BackgroundCard>
  )
}

export default ProjectCard;
