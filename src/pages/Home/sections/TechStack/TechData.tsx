import {
  SiPython, SiJavascript, SiTypescript, SiCplusplus, SiGo,
  SiReact, SiNextdotjs, SiDjango, SiFastapi, SiPostgresql,
  SiDocker, SiLinux, SiAmazon, SiFigma, SiGit, SiNeovim
} from "react-icons/si";

export interface TechItem {
  name: string;
  icon: React.ElementType;
  category: "Language" | "Framework" | "Tool" | "DevOps";
  description?: string;
}

export const techData: TechItem[] = [
  // Linguagens
  { name: "Python", icon: SiPython, category: "Language", description: "Deep Learning & Backend" },
  { name: "TypeScript", icon: SiTypescript, category: "Language", description: "Type-safe Frontend" },
  { name: "JavaScript", icon: SiJavascript, category: "Language", description: "Web Core" },
  { name: "C++", icon: SiCplusplus, category: "Language", description: "Performance & Systems" },
  { name: "Go", icon: SiGo, category: "Language", description: "Microservices" }, // Adicionado

  // Frameworks
  { name: "React", icon: SiReact, category: "Framework", description: "UI Library" },
  { name: "Next.js", icon: SiNextdotjs, category: "Framework", description: "Fullstack React" }, // Adicionado
  { name: "Django", icon: SiDjango, category: "Framework", description: "Robust Backend" },
  { name: "FastAPI", icon: SiFastapi, category: "Framework", description: "High Perf API" },

  // Tools & DevOps
  { name: "PostgreSQL", icon: SiPostgresql, category: "DevOps", description: "Relational DB" }, // Adicionado
  { name: "Docker", icon: SiDocker, category: "DevOps", description: "Containerization" },
  { name: "Linux", icon: SiLinux, category: "DevOps", description: "Arch / Kernel" },
  { name: "AWS", icon: SiAmazon, category: "DevOps", description: "Cloud Infrastructure" }, // Corrigido para SiAmazon
  { name: "Git", icon: SiGit, category: "Tool", description: "Version Control" },
  { name: "Neovim", icon: SiNeovim, category: "Tool", description: "PDE" },
  { name: "Figma", icon: SiFigma, category: "Tool", description: "Prototyping" },
];
