
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
      "Solução para gestão de microempreendimentos que permite o controle de vendas, estoque e clientes diretamente pelo celular. O foco principal é a autonomia do usuário em ambientes com conectividade limitada.",
    techStack: ["React Native", "Expo Router", "SQLite", "TypeScript"],
    repoLink: "https://github.com/vsslvini/BizApp",
    highlight: "Arquitetura Offline-First com persistência local via SQLite e roteamento moderno com Expo Router.",
    imageUrl: "images/Home.png",
  },
  {
    id: 2,
    title: "Mini Kanban Fullstack",
    category: "Fullstack",
    description:
      "Gerenciador de tarefas baseado na metodologia Kanban. Possui suporte a temas (dark/light), persistência de dados e uma interface fluida com funcionalidades de arrastar e soltar.",
    techStack: ["Go (Golang)", "React", "TypeScript", "Docker", "Nginx"],
    repoLink: "https://github.com/vsslvini/Kanban",
    highlight: "Sistema containerizado com Docker Compose, utilizando Nginx como Proxy Reverso e backend em Go com controle de concorrência (Mutex).",
    imageUrl: "images/mini_kanban.png",
  },
];
