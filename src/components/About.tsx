'use client';

import FadeIn from './animations/FadeIn';

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-12 text-secondary-foreground">About Me</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <p className="text-lg text-secondary-foreground/90 leading-relaxed">
                As a senior Computer Science student at Northeastern University, I&apos;ve developed
                a strong foundation in full-stack development with particular expertise in frontend
                technologies.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg text-secondary-foreground/90 leading-relaxed">
                My journey in software development has been driven by a passion for creating
                elegant solutions to complex problems. I specialize in modern web technologies
                including React, TypeScript, and Next.js.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4} direction="left">
            <div className="space-y-8 bg-card p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-card-foreground">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-4 text-card-foreground/90">Frontend</h4>
                  <ul className="space-y-3">
                    {["React", "TypeScript", "Next.js", "Tailwind CSS"].map((skill, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-4 text-card-foreground/90">Backend</h4>
                  <ul className="space-y-3">
                    {["Node.js", "Python", "Java", "SQL"].map((skill, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {skill}
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