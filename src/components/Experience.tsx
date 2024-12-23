'use client';

import { experiences } from '@/data/experiences';
import FadeIn from './animations/FadeIn';
import SlideIn from './animations/SlideIn';
import ExperienceCard from './ExperienceCard';

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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-foreground z-0" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <SlideIn 
                key={index} 
                delay={index * 0.3} 
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <ExperienceCard experience={exp} index={index} />
              </SlideIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 