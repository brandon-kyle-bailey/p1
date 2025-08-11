import type { GitHubPullRequest } from "./github";

export interface PullRequestAnalyticsData {
  totalPullRequests: number;
  openPullRequests: number;
  closedPullRequests: number;
  mergedPullRequests: number;
  mergeRate: number;
  avgPullRequestSize: number;
  largestPR: { title: string; size: number };
  smallestPR: { title: string; size: number };
  repositoryStats: Array<{ repo: string; count: number }>;
  languageStats: Array<{ language: string; count: number }>;
  monthlyActivity: Array<{ month: string; count: number }>;
  draftCount: number;
}

export class PullRequestAnalytics {
  static generateInsights(
    pullRequests: GitHubPullRequest[],
  ): PullRequestAnalyticsData {
    const totalPullRequests = pullRequests.length;
    const openPullRequests = pullRequests.filter(
      (pr) => pr.state === "open",
    ).length;
    const closedPullRequests = pullRequests.filter(
      (pr) => pr.state === "closed",
    ).length;
    const mergedPullRequests = pullRequests.filter(
      (pr) => pr.state === "merged",
    ).length;
    const draftCount = pullRequests.filter((pr) => pr.draft).length;

    const mergeRate =
      totalPullRequests > 0
        ? Math.round((mergedPullRequests / totalPullRequests) * 100)
        : 0;

    const avgPullRequestSize =
      totalPullRequests > 0
        ? Math.round(
            pullRequests.reduce(
              (sum, pr) => sum + pr.additions + pr.deletions,
              0,
            ) / totalPullRequests,
          )
        : 0;

    // Find largest and smallest PRs
    const prSizes = pullRequests.map((pr) => ({
      title: pr.title,
      size: pr.additions + pr.deletions,
    }));

    const largestPR = prSizes.reduce(
      (max, pr) => (pr.size > max.size ? pr : max),
      prSizes[0] || { title: "N/A", size: 0 },
    );
    const smallestPR = prSizes.reduce(
      (min, pr) => (pr.size < min.size ? pr : min),
      prSizes[0] || { title: "N/A", size: 0 },
    );

    // Repository statistics
    const repoStats = pullRequests.reduce(
      (acc, pr) => {
        return acc;
      },
      {} as Record<string, number>,
    );

    const repositoryStats = Object.entries(repoStats)
      .map(([repo, count]) => ({ repo, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Language statistics
    const langStats = pullRequests.reduce(
      (acc, pr) => {
        return acc;
      },
      {} as Record<string, number>,
    );

    const languageStats = Object.entries(langStats)
      .map(([language, count]) => ({ language, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Monthly activity (last 12 months)
    const monthlyActivity = this.generateMonthlyActivity(pullRequests);

    return {
      totalPullRequests,
      openPullRequests,
      closedPullRequests,
      mergedPullRequests,
      mergeRate,
      avgPullRequestSize,
      largestPR,
      smallestPR,
      repositoryStats,
      languageStats,
      monthlyActivity,
      draftCount,
    };
  }

  private static generateMonthlyActivity(pullRequests: GitHubPullRequest[]) {
    const months = Array.from({ length: 12 }, (_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      return {
        month: date.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        }),
        count: 0,
      };
    }).reverse();

    pullRequests.forEach((pr) => {
      const prDate = new Date(pr.created_at);
      const monthKey = prDate.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });
      const monthData = months.find((m) => m.month === monthKey);
      if (monthData) {
        monthData.count++;
      }
    });

    return months;
  }
}
