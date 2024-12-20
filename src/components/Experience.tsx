'use client';

import { experiences } from '@/data/experiences';
import FadeIn from './animations/FadeIn';
import SlideIn from './animations/SlideIn';

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12 text-secondary-foreground">Experience</h2>
        </FadeIn>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <SlideIn key={index} delay={index * 0.2} direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-2" />
                
                <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
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