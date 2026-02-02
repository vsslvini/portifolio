// Se você tiver ícones específicos, pode importar aqui ou usar strings mesmo.
// Por enquanto vou usar strings para facilitar, e no componente a gente mapeia para ícones/badges.

export interface ProjectItem {
  id: number;
  title: string;
  category: "Mobile" | "AI & Data" | "Backend" | "Fullstack";
  description: string;
  techStack: string[];
  repoLink?: string; // Opcional, caso seja privado
  demoLink?: string; // Opcional, caso não tenha deploy
  highlight: string; // O "pulo do gato" da arquitetura
  imageUrl?: string; // Caminho da imagem na pasta public
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "BizApp Mobile",
    category: "Mobile",
    description:
      "Aplicação móvel para gestão de negócios locais. Focada em performance e usabilidade offline, permitindo que microempreendedores gerenciem vendas e estoque sem dependência constante de internet.",
    techStack: ["React Native", "Expo", "SQLite", "TypeScript"],
    repoLink: "https://github.com/seu-usuario/bizapp", // Substitua pelo real
    highlight: "Arquitetura Offline-First com persistência local eficiente.",
    imageUrl: "/images/bizapp-cover.png", // Coloque um print na pasta public/images
  },
  {
    id: 2,
    title: "BizApp Mobile",
    category: "Mobile",
    description:
      "Aplicação móvel para gestão de negócios locais. Focada em performance e usabilidade offline, permitindo que microempreendedores gerenciem vendas e estoque sem dependência constante de internet.",
    techStack: ["React Native", "Expo", "SQLite", "TypeScript"],
    repoLink: "https://github.com/seu-usuario/bizapp", // Substitua pelo real
    highlight: "Arquitetura Offline-First com persistência local eficiente.",
    imageUrl: "/images/bizapp-cover.png", // Coloque um print na pasta public/images
  },
  {
    id: 3,
    title: "BizApp Mobile",
    category: "Mobile",
    description:
      "Aplicação móvel para gestão de negócios locais. Focada em performance e usabilidade offline, permitindo que microempreendedores gerenciem vendas e estoque sem dependência constante de internet.",
    techStack: ["React Native", "Expo", "SQLite", "TypeScript"],
    repoLink: "https://github.com/seu-usuario/bizapp", // Substitua pelo real
    highlight: "Arquitetura Offline-First com persistência local eficiente.",
    imageUrl: "/images/bizapp-cover.png", // Coloque um print na pasta public/images
  },
  {
    id: 4,
    title: "BizApp Mobile",
    category: "Mobile",
    description:
      "Aplicação móvel para gestão de negócios locais. Focada em performance e usabilidade offline, permitindo que microempreendedores gerenciem vendas e estoque sem dependência constante de internet.",
    techStack: ["React Native", "Expo", "SQLite", "TypeScript"],
    repoLink: "https://github.com/seu-usuario/bizapp", // Substitua pelo real
    highlight: "Arquitetura Offline-First com persistência local eficiente.",
    imageUrl: "/images/bizapp-cover.png", // Coloque um print na pasta public/images
  },
{
    id: 5,
    title: "BizApp Mobile",
    category: "Mobile",
    description:
      "Aplicação móvel para gestão de negócios locais. Focada em performance e usabilidade offline, permitindo que microempreendedores gerenciem vendas e estoque sem dependência constante de internet.",
    techStack: ["React Native", "Expo", "SQLite", "TypeScript"],
    repoLink: "https://github.com/seu-usuario/bizapp", // Substitua pelo real
    highlight: "Arquitetura Offline-First com persistência local eficiente.",
    imageUrl: "/images/bizapp-cover.png", // Coloque um print na pasta public/images
  },

  {
    id: 6,
    title: "BizApp Mobile",
    category: "Mobile",
    description:
      "Aplicação móvel para gestão de negócios locais. Focada em performance e usabilidade offline, permitindo que microempreendedores gerenciem vendas e estoque sem dependência constante de internet.",
    techStack: ["React Native", "Expo", "SQLite", "TypeScript"],
    repoLink: "https://github.com/seu-usuario/bizapp", // Substitua pelo real
    highlight: "Arquitetura Offline-First com persistência local eficiente.",
    imageUrl: "/images/bizapp-cover.png", // Coloque um print na pasta public/images
  },


];
