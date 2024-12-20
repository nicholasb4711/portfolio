import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/Projects';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link 
            href="/" 
            className="text-blue-500 hover:text-blue-600 transition-colors mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold">All Projects</h1>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
} 