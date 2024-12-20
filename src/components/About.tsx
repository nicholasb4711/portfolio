'use client';

import FadeIn from './animations/FadeIn';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#60a5fa] dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <FadeIn delay={0.2}>
              <p className="text-lg">
                As a senior Computer Science student at Northeastern University, I&apos;ve developed
                a strong foundation in full-stack development with particular expertise in frontend
                technologies.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg">
                My journey in software development has been driven by a passion for creating
                elegant solutions to complex problems. I specialize in modern web technologies
                including React, TypeScript, and Next.js.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4} direction="left">
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
} 