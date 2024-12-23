'use client';

import { experiences } from '@/data/experiences';
import FadeIn from './animations/FadeIn';
import SlideIn from './animations/SlideIn';

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-4xl font-bold mb-8 pl-8 text-foreground tracking-tight text-start">
            Work Experience
          </h2>
        </FadeIn>
        
        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-foreground z-0" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <SlideIn 
                key={index} 
                delay={index * 0.3} 
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className={`relative flex items-center justify-center min-h-[2rem] ${
                  index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                }`}>
                  {/* Timeline connector */}
                  <div 
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 z-10 ${
                      index % 2 === 0 
                        ? 'right-[calc(50%-1rem)] left-auto w-[calc(50%-4rem)]' 
                        : 'left-[calc(50%-1rem)] right-auto w-[calc(50%-4rem)]'
                    }`}
                  >
                    <div className={`h-[2px] w-full ${
                      index % 2 === 0
                        ? 'bg-gradient-to-l from-foreground to-transparent'
                        : 'bg-gradient-to-r from-foreground to-transparent'
                    }`} />
                  </div>

                  {/* Timeline dot with rings */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 z-20">
                    <div className="absolute w-6 h-6 bg-primary rounded-full" />
                    <div className="relative w-4 h-4 bg-primary rounded-full shadow-lg">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`relative w-full lg:w-[calc(70%-2rem)] z-30 ${
                    index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                  }`}>
                    <div className="bg-card text-card-foreground p-6 rounded-2xl shadow-lg hover-card">
                      <div className="flex flex-col mb-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-bold tracking-tight">{exp.title}</h3>
                            <p className="text-muted-foreground text-sm">{exp.company}</p>
                          </div>
                          <span className="text-primary text-sm font-medium whitespace-nowrap ml-4">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      
                      <ul className="list-none space-y-2 mb-4">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-card-foreground/80 flex items-start text-sm leading-relaxed pl-4 relative">
                            {/* Bullet point */}
                            <span className="absolute left-0 top-[0.6rem] w-1.5 h-1.5 bg-primary rounded-full" />
                            
                            {/* Description text */}
                            <span className="flex-1">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="border-t border-border pt-4">
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2.5 py-1 bg-accent text-secondary-foreground border border-accent rounded-full text-xs font-medium hover:bg-accent/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 