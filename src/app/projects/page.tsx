import { getGitHubRepos, GitHubRepo } from '@/services/github';
import { ProjectCard } from '@/components/ProjectCard';
import { featuredProjects } from '@/data/projects';
import Link from 'next/link';

export const revalidate = 3600; // Revalidate every hour

function convertGitHubRepoToProject(repo: GitHubRepo) {
  return {
    title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
    description: repo.description || 'No description available',
    technologies: repo.topics.length ? repo.topics : [repo.language].filter(Boolean),
    githubUrl: repo.html_url,
    liveUrl: repo.homepage || undefined,
    stars: repo.stargazers_count,
    language: repo.language,
    createdAt: repo.created_at,
    updatedAt: repo.updated_at,
    size: repo.size,
    branch: repo.default_branch,
    issues: repo.open_issues_count,
    watchers: repo.watchers_count,
    license: repo.license?.name
  };
}

export default async function ProjectsPage() {
  const repos = await getGitHubRepos();
  const githubProjects = repos.map(convertGitHubRepoToProject);
  
  // Combine featured and GitHub projects, removing duplicates
  const allProjects = [
    ...featuredProjects,
    ...githubProjects.filter(
      ghProject => !featuredProjects.some(
        fp => fp.githubUrl === ghProject.githubUrl
      )
    )
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link 
            href="/" 
            className="text-primary hover:text-primary/80 transition-colors mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-foreground">All Projects</h1>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectCard key={project.githubUrl || index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
} 