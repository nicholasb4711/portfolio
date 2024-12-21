'use client';

import FadeIn from './animations/FadeIn';

export default function About() {
  return (
    <section id="about" className="py-32 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-16 text-secondary-foreground tracking-tight">
            About Me
          </h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <p className="text-lg text-secondary-foreground leading-relaxed">
                As a senior Computer Science student at Northeastern University, I&apos;ve developed
                a strong foundation in full-stack development with particular expertise in frontend
                technologies.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-secondary-foreground leading-relaxed">
                My journey in software development has been driven by a passion for creating
                elegant solutions to complex problems. I specialize in modern web technologies
                including React, TypeScript, and Next.js.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4} direction="left">
            <div className="space-y-10 bg-card p-8 rounded-2xl shadow-lg hover-card">
              <h3 className="text-2xl font-bold text-card-foreground tracking-tight">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="font-medium mb-6 text-card-foreground">Frontend</h4>
                  <ul className="space-y-4">
                    {["React", "TypeScript", "Next.js", "Tailwind CSS"].map((skill, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        <span className="text-sm font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-6 text-card-foreground">Backend</h4>
                  <ul className="space-y-4">
                    {["Node.js", "Python", "Java", "SQL"].map((skill, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        <span className="text-sm font-medium">{skill}</span>
                      </li>
                    ))}
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