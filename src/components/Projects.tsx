'use client';

import { featuredProjects } from '@/data/projects';
import Link from 'next/link';
import { ProjectCard } from './ProjectCard';
import FadeIn from './animations/FadeIn';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-card-foreground">Featured Projects</h2>
            <Link 
              href="/projects" 
              className="text-primary hover:text-accent transition-colors"
            >
              View All Projects →
            </Link>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
} 