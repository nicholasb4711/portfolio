'use client';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg">
              As a senior Computer Science student at Northeastern University, I&apos;ve developed
              a strong foundation in full-stack development with particular expertise in frontend
              technologies.
            </p>
            <p className="text-lg">
              My journey in software development has been driven by a passion for creating
              elegant solutions to complex problems. I specialize in modern web technologies
              including React, TypeScript, and Next.js.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Frontend</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>SQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 