// Linear API integration utilities
export interface LinearOrganization {
  id: string;
  name: string;
  urlKey: string;
  createdAt: string;
  updatedAt: string;
}

export interface LinearTeam {
  id: string;
  name: string;
  key: string;
  description?: string;
  color: string;
  issueCount: number;
}

export interface LinearProject {
  id: string;
  name: string;
  description?: string;
  state: string;
  progress: number;
  createdAt: string;
  updatedAt: string;
}

export interface LinearIssue {
  id: string;
  identifier: string;
  title: string;
  description?: string;
  state: {
    name: string;
    color: string;
  };
  priority: number;
  assignee?: {
    name: string;
    email: string;
    avatarUrl?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export class LinearAPI {
  private baseUrl = "https://api.linear.app/graphql";
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  private async request<T>(query: string, variables?: any): Promise<T> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`Linear API error: ${response.statusText}`);
    }

    const data = await response.json();
    if (data.errors) {
      throw new Error(`Linear GraphQL error: ${data.errors[0].message}`);
    }

    return data.data;
  }

  async getOrganization(): Promise<LinearOrganization> {
    const query = `
      query {
        organization {
          id
          name
          urlKey
          createdAt
          updatedAt
        }
      }
    `;
    const data = await this.request<{ organization: LinearOrganization }>(
      query,
    );
    return data.organization;
  }

  async getTeams(): Promise<LinearTeam[]> {
    const query = `
      query {
        teams {
          nodes {
            id
            name
            key
            description
            color
            issues {
              totalCount
            }
          }
        }
      }
    `;
    const data = await this.request<{ teams: { nodes: any[] } }>(query);
    return data.teams.nodes.map((team) => ({
      ...team,
      issueCount: team.issues.totalCount,
    }));
  }

  async getProjects(): Promise<LinearProject[]> {
    const query = `
      query {
        projects {
          nodes {
            id
            name
            description
            state
            progress
            createdAt
            updatedAt
          }
        }
      }
    `;
    const data = await this.request<{ projects: { nodes: LinearProject[] } }>(
      query,
    );
    return data.projects.nodes;
  }

  async getIssues(): Promise<LinearIssue[]> {
    const query = `
      query {
        issues {
          nodes {
            id
            identifier
            title
            description
            state {
              name
              color
            }
            priority
            assignee {
              name
              email
              avatarUrl
            }
            createdAt
            updatedAt
          }
        }
      }
    `;
    const data = await this.request<{ issues: { nodes: LinearIssue[] } }>(
      query,
    );
    return data.issues.nodes;
  }
}
