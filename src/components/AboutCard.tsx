export default function AboutCard() {
    const skills = {
        frontend: ["TypeScript", "JavaScript", "React", "Next.js", "TailwindCSS"],
        backend: ["Node.js", "Python", "Java", "PostgreSQL", "MySQL", "MongoDB"],
        tools:  ["Vercel", "Git", "Flask", "Docker"]
    };

    return (
        <div className="space-y-8 bg-border shadow-sm hover:shadow-lg hover:box-shadow: 0 0 15px rgba(96, 165, 250, 0.5) border-2 border-primary hover:scale-105 transition-all duration-200 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-card-foreground tracking-tight gradient-text">
                Technical Skills
            </h3>
            
            <div className="grid grid-cols-1 gap-8">
                <div>
                    <h4 className="font-medium mb-4 text-card-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Frontend Development
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {skills.frontend.map((skill, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-medium mb-4 text-card-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Backend Development
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {skills.backend.map((skill, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-medium mb-4 text-card-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {skills.tools.map((skill, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}