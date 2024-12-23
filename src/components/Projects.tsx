'use client';

import { featuredProjects } from '@/data/projects';
import Link from 'next/link';
import { ProjectCard } from './ProjectCard';
import FadeIn from './animations/FadeIn';
// import { useState } from 'react';

export default function Projects() {
  // const [filter, setFilter] = useState('all');

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-foreground tracking-tight">
              Featured Projects
            </h2>
            <Link 
              href="/projects" 
              className="text-primary hover:text-accent transition-colors flex items-center gap-2 group"
            >
              View All
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </FadeIn>
        
        {/* TODO: Add filter buttons */}
        {/* <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full ${
              filter === 'all' ? 'bg-primary text-white' : 'bg-secondary'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('frontend')}
            className={`px-4 py-2 rounded-full ${
              filter === 'frontend' ? 'bg-primary text-white' : 'bg-secondary'
            }`}
          >
            Frontend
          </button>
          {/* Add more filter buttons */}
        {/* </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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