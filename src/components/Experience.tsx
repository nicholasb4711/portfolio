'use client';

import { experiences } from '@/data/experiences';
import FadeIn from './animations/FadeIn';
import SlideIn from './animations/SlideIn';

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-16 text-foreground tracking-tight">
            Experience
          </h2>
        </FadeIn>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <SlideIn key={index} delay={index * 0.2} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-2 shadow-lg" />
                
                <div className="bg-card text-card-foreground p-8 rounded-2xl shadow-lg hover-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight">{exp.title}</h3>
                      <p className="text-muted-foreground mt-1 text-sm">{exp.company}</p>
                    </div>
                    <span className="text-primary mt-2 md:mt-0 text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="list-none space-y-3 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-card-foreground/80 flex items-start text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
} 