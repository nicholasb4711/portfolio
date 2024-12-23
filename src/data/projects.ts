export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
  stars?: number;
  language?: string;
  createdAt?: string;
  updatedAt?: string;
  size?: number;
  branch?: string;
  issues?: number;
  watchers?: number;
  license?: string;
}

// Keep this for featured projects that you want to customize
export const featuredProjects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features responsive design and dark mode support.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/nicholasb4711/portfolio",
    liveUrl: "https://nicholasbyrne.dev",
    featured: true
  },
  {
    title: "Life Manager",
    description: "LifeManager is a personal project that I'm building to help me manage my life, as well as clients lives, specifically by creating workout, nutrition, and sleep plans for them. The platform includes an e-commerce component for fitness accessories and supplements.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/nicholasb4711/LifeManager",
    liveUrl: "https://nicholasbyrne.dev",
    featured: true
  }
]; 