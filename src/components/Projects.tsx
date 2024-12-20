'use client';

import { projects } from '@/data/projects';
import Link from 'next/link';
import { ProjectCard } from './ProjectCard';

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link 
            href="/projects" 
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            View All Projects →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
} 