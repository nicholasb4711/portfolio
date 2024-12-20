export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features responsive design and dark mode support.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/nicholasb4711/portfolio",
    liveUrl: "https://nicholasbyrne.dev",
    featured: true
  },
  // Add more projects...
]; 