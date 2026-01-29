import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiGo,
  SiReact, SiNextdotjs, SiDjango, SiFastapi, SiPostgresql,
  SiDocker, SiLinux, SiAmazon, SiFigma, SiGit, SiNeovim
} from "react-icons/si";

// Adicione a propriedade 'details' na interface
export interface TechItem {
  name: string;
  icon: React.ElementType;
  category: "Language" | "Framework" | "Tool" | "DevOps";
  description?: string;
  details: string; // Novo campo
}

// Exemplo de como atualizar os dados (faça isso para todos ou copie abaixo)
export const techData: TechItem[] = [
  {
    name: "Python",
    icon: SiPython,
    category: "Language",
    description: "Deep Learning & Backend",
    details: "Minha linguagem principal para automação, análise de dados e desenvolvimento de IAs com TensorFlow e PyTorch."
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Language",
    description: "Type-safe Frontend",
    details: "Essencial para escalar aplicações React com segurança, garantindo código limpo e manutenível."
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Language",
    description: "Web Core",
    details: "A base da web. Foco em ES6+, manipulação de DOM e programação assíncrona."
  },
  {
    name: "C++",
    icon: SiCplusplus,
    category: "Language",
    description: "Performance",
    details: "Uso em competições de programação e para entender gerenciamento de memória e baixo nível."
  },
  {
    name: "Go",
    icon: SiGo,
    category: "Language",
    description: "Microservices",
    details: "Estudando para construção de microsserviços de alta performance e concorrência."
  },
  {
    name: "React",
    icon: SiReact,
    category: "Framework",
    description: "UI Library",
    details: "Criação de interfaces reativas, componentização e gerenciamento de estado complexo."
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Framework",
    description: "Fullstack React",
    details: "Framework favorito para SSR, otimização de SEO e rotas de API integradas."
  },
  {
    name: "Django",
    icon: SiDjango,
    category: "Framework",
    description: "Robust Backend",
    details: "Framework 'bateries-included' para desenvolvimento rápido de APIs seguras e escaláveis."
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    category: "Framework",
    description: "High Perf API",
    details: "Criação de APIs assíncronas modernas com validação automática de dados (Pydantic)."
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "DevOps",
    description: "Relational DB",
    details: "Modelagem de dados, queries complexas e otimização de banco de dados."
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "DevOps",
    description: "Containerization",
    details: "Padronização de ambientes de desenvolvimento e deploy, garantindo consistência."
  },
  {
    name: "Linux",
    icon: SiLinux,
    category: "DevOps",
    description: "Arch / Kernel",
    details: "Usuário avançado (Arch Linux). Shell Scripting e gerenciamento de servidores."
  },
  {
    name: "AWS",
    icon: SiAmazon,
    category: "DevOps",
    description: "Cloud Infra",
    details: "Deploy de aplicações, gerenciamento de EC2 e S3. (Em aprendizado contínuo)."
  },
  {
    name: "Git",
    icon: SiGit,
    category: "Tool",
    description: "Version Control",
    details: "Fluxo de trabalho profissional, Git Flow, Pull Requests e Code Review."
  },
  {
    name: "Neovim",
    icon: SiNeovim,
    category: "Tool",
    description: "PDE",
    details: "Editor personalizado (Lua) para máxima produtividade sem usar o mouse."
  },
  {
    name: "Figma",
    icon: SiFigma,
    category: "Tool",
    description: "Prototyping",
    details: "Design de interfaces e prototipagem de alta fidelidade antes do código."
  },
];
