'use client';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
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

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-2" />
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 dark:text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 