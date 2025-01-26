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
        company: "RiskAverse",
        period: "Sept 2024 - Dec 2024",
        description: [
            "Developed and maintained scalable web applications using React.js, Next.js, and TypeScript, implementing dynamic UI components and responsive design with Tailwind CSS to enhance user experience across projects",
            "Designed and implemented key features including a dynamic tagging system with real-time filtering, secure authentication flows with Supabase Auth, and dark/light mode theming with shadcn/ui components",
            "Architected PostgreSQL database schemas and enhanced functionality with real-time activity tracking, analytics dashboards, and full-text search capabilities"
        ],
        technologies: ["React.js", "Next.js", "TypeScript", "Flask", "Python", "MongoDB", "PostgreSQL", "Docker", "Selenium", "Jest", "Pytest", "Tailwind CSS", "GitHub Actions", "Firebase", "Auth0"]
    },
    {
        title: "Research Technician Co-op",
        company: "Harvard Medical School",
        period: "Jan 2022 - July 2022",
        description: [
            "Collaborated with members of the Lee Lab in the Neurobiology Department to develop and construct 3D datasets of different modalities and biological models, including the mouse brain, drosophila brain, and human cerebellum",
            "Assisted with the analysis of Connectomic Datasets consisting of >4k neurons and >150k synapses",
            "Reviewed 1000’s of EM segments by tracing neuropathways and making corrections to automated detection while utilizing CATMAID and FlyWire",
            "Constructed graphical data representations of constructed Neurons and relevant statistical information using R",
            "Contributed to the development of computational tools for the lab"
        ],
        technologies: ["R", "Python", "CATMAID", "FlyWire", "Neuroglancer"]
    },
    {
        title: "Project Manager Intern",
        company: "Synchronous - The Social Media Company",
        period: "Mar 2019 - Dec 2021",
        description: [
            "Designed and built websites for clients using HTML, CSS, and other site creation tools",
            "Managed a team of 5 interns, delegating tasks and assignments to be completed on schedule",
            "Analyzed and adapted Social Media Algorithms for business use",
            "Created video and photo advertisements for clients using cameras and drones, editing in Adobe Suite"
        ],
        technologies: ["Wix", "Weebly", "Wordpress", "Shopify", "HTML", "CSS", "JavaScript", "Premiere Pro", "Photoshop"]
    }
    // Add your experiences here
];
