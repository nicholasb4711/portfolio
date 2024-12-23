'use client';

import AboutCard from './AboutCard';
import FadeIn from './animations/FadeIn';

export default function About() {
  return (
    <section id="about" className="py-32 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-8 text-secondary-foreground tracking-tight">
                About Me
              </h2>
            </FadeIn>
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
            <AboutCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
} 