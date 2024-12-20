const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'nicholasb4711';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  language: string;
  fork: boolean;
  created_at: string;
  updated_at: string;
  size: number;
  default_branch: string;
  open_issues_count: number;
  watchers_count: number;
  license?: {
    name: string;
  };
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const response = await fetch(
    `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        ...(process.env.GITHUB_TOKEN && {
          Authorization: `token ${process.env.GITHUB_TOKEN}`
        })
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }

  const repos = await response.json();
  return repos.filter((repo: GitHubRepo) => !repo.fork); // Filter out forked repositories
} 