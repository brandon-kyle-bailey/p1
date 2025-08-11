/* eslint-disable @typescript-eslint/no-explicit-any */
// GitHub API integration utilities
export interface GitHubOrganization {
  id: number;
  login: string;
  name: string;
  description: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface GitHubTeam {
  id: number;
  name: string;
  slug: string;
  description: string;
  members_count: number;
  repos_count: number;
}

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  state: "open" | "closed";
  created_at: string;
  updated_at: string;
  assignee?: {
    login: string;
    avatar_url: string;
  };
  labels: Array<{
    name: string;
    color: string;
  }>;
}

export interface GitHubPullRequest {
  id: number;
  number: number;
  title: string;
  state: "open" | "closed" | "merged";
  created_at: string;
  updated_at: string;
  merged_at?: string;
  draft: boolean;
  user: {
    login: string;
    avatar_url: string;
  };
  assignee?: {
    login: string;
    avatar_url: string;
  };
  head: {
    ref: string;
    sha: string;
  };
  base: {
    ref: string;
    sha: string;
  };
  labels: Array<{
    name: string;
    color: string;
  }>;
  additions: number;
  deletions: number;
  changed_files: number;
}

export interface GitHubUser {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  email?: string;
}

export class GitHubAPI {
  private baseUrl = "https://api.github.com";
  private token: string;
  private authenticatedUser: GitHubUser | null = null;

  constructor(token: string) {
    this.token = token;
  }

  private async request<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    return response.json();
  }

  async getAuthenticatedUser(): Promise<GitHubUser> {
    if (!this.authenticatedUser) {
      this.authenticatedUser = await this.request<GitHubUser>("/user");
    }
    return this.authenticatedUser;
  }

  async getOrganizations(): Promise<GitHubOrganization[]> {
    return this.request<GitHubOrganization[]>("/user/orgs");
  }

  async getTeams(org: string): Promise<GitHubTeam[]> {
    return this.request<GitHubTeam[]>(`/orgs/${org}/teams`);
  }

  async getRepositories(org?: string): Promise<GitHubRepository[]> {
    const endpoint = org ? `/orgs/${org}/repos` : "/user/repos";
    return this.request<GitHubRepository[]>(endpoint);
  }

  async getUserIssues(): Promise<GitHubIssue[]> {
    const user = await this.getAuthenticatedUser();
    return this.request<GitHubIssue[]>(
      `/search/issues?q=type:issue+author:${user.login}&sort=updated&order=desc`,
    ).then((response) => (response as any).items);
  }

  async getUserPullRequests(): Promise<GitHubPullRequest[]> {
    const user = await this.getAuthenticatedUser();
    return this.request<GitHubPullRequest[]>(
      `/search/issues?q=type:pr+author:${user.login}&sort=updated&order=desc`,
    ).then((response) => (response as any).items);
  }
}
