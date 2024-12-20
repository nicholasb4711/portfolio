export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        title: "Software Engineering Co-op",
        company: "Example Company",
        period: "Jan 2023 - June 2023",
        description: [
            "Developed and maintained full-stack web applications using React and Node.js",
            "Implemented responsive designs and improved application performance",
            "Collaborated with cross-functional teams to deliver high-quality solutions"
        ],
        technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"]
    },
    // Add your experiences here
];