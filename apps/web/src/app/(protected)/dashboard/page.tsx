/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  GitPullRequest,
  GitCommit,
  Clock,
  Code,
  TrendingUp,
  Calendar,
  CheckCircle,
  XCircle,
  AlertCircle,
  GitBranch,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
} from "lucide-react";
import { mockPullRequests } from "../../../lib/mock-data";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [repositoryFilter, setRepositoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("created_at_desc"); // Added sort state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const pullRequestsData = mockPullRequests;

  const filteredPullRequests = useMemo(() => {
    const filtered = pullRequestsData.filter((pr) => {
      const matchesSearch =
        pr.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pr.repository.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pr.organization.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = statusFilter === "all" || pr.state === statusFilter;
      const matchesRepository =
        repositoryFilter === "all" || pr.repository === repositoryFilter;

      return matchesSearch && matchesStatus && matchesRepository;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "created_at_desc":
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        case "created_at_asc":
          return (
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          );
        case "title_asc":
          return a.title.localeCompare(b.title);
        case "title_desc":
          return b.title.localeCompare(a.title);
        case "duration_desc":
          return b.duration_ms! - a.duration_ms!;
        case "duration_asc":
          return a.duration_ms! - b.duration_ms!;
        case "commits_desc":
          return b.commits.length - a.commits.length;
        case "commits_asc":
          return a.commits.length - b.commits.length;
        case "comments_desc":
          return b.comments - a.comments;
        case "comments_asc":
          return a.comments - b.comments;
        case "repository_asc":
          return a.repository.localeCompare(b.repository);
        case "repository_desc":
          return b.repository.localeCompare(a.repository);
        default:
          return 0;
      }
    });

    return filtered;
  }, [pullRequestsData, searchQuery, statusFilter, repositoryFilter, sortBy]); // Added sortBy dependency

  const totalPages = Math.ceil(filteredPullRequests.length / itemsPerPage);
  const paginatedPullRequests = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPullRequests.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPullRequests, currentPage]);

  const totalPullRequests = filteredPullRequests.length;
  const activePullRequests = filteredPullRequests.filter(
    (pr) => pr.state === "open",
  ).length;
  const closedPullRequests = filteredPullRequests.filter(
    (pr) => pr.state === "closed" || pr.state === "merged",
  ).length;
  const totalCommits = filteredPullRequests.reduce(
    (sum, pr) => sum + pr.commits.length,
    0,
  );
  const avgDurationMs =
    filteredPullRequests.length > 0
      ? filteredPullRequests.reduce((sum, pr) => sum + pr.duration_ms!, 0) /
        filteredPullRequests.length
      : 0;
  const avgDurationHours =
    Math.round((avgDurationMs / (1000 * 60 * 60)) * 10) / 10;

  const metrics = {
    totalPullRequests,
    activePullRequests,
    avgDuration: `${avgDurationHours}h`,
    totalCommits,
  };

  const recentPullRequests = paginatedPullRequests.map((pr) => ({
    id: pr.external_id,
    title: pr.title,
    author: pr.author,
    state: pr.state,
    duration: `${Math.round((pr.duration_ms! / (1000 * 60 * 60)) * 10) / 10}h`,
    commits: pr.commits.length,
    repository: pr.repository,
    organization: pr.organization,
    comments: pr.comments,
    created_at: pr.created_at,
  }));

  const uniqueRepositories = [
    ...new Set(pullRequestsData.map((pr) => pr.repository)),
  ];

  const repositoryStats = pullRequestsData.reduce(
    (acc, pr) => {
      const repoName = pr.repository;
      if (!acc[repoName]) {
        acc[repoName] = {
          name: repoName,
          commits: 0,
          pullRequests: 0,
          lastActivity: pr.updated_at,
        };
      }
      acc[repoName].commits += pr.commits.length;
      acc[repoName].pullRequests += 1;
      if (new Date(pr.updated_at) > new Date(acc[repoName].lastActivity)) {
        acc[repoName].lastActivity = pr.updated_at;
      }
      return acc;
    },
    {} as Record<string, any>,
  );

  const repositoryActivity = Object.values(repositoryStats).map(
    (repo: any) => ({
      ...repo,
      lastActivity: new Date(repo.lastActivity).toLocaleDateString(),
    }),
  );

  const getStateIcon = (state: string) => {
    switch (state) {
      case "closed":
      case "merged":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "open":
        return <AlertCircle className="h-4 w-4 text-blue-500" />;
      default:
        return <XCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStateBadgeVariant = (state: string) => {
    switch (state) {
      case "closed":
      case "merged":
        return "default";
      case "open":
        return "secondary";
      default:
        return "destructive";
    }
  };

  const approvalRate =
    totalPullRequests > 0
      ? Math.round((closedPullRequests / totalPullRequests) * 100)
      : 0;
  const avgCommentsPerPR =
    totalPullRequests > 0
      ? Math.round(
          filteredPullRequests.reduce((sum, pr) => sum + pr.comments, 0) /
            totalPullRequests,
        )
      : 0;

  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Dashboard</h1>
          <p className="text-muted-foreground">
            Track your development activity and pull request metrics.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Your Pull Requests
            </CardTitle>
            <GitPullRequest className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metrics.totalPullRequests}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">{closedPullRequests}</span>{" "}
              completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active PRs</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {metrics.activePullRequests}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-blue-500">
                {metrics.activePullRequests}
              </span>{" "}
              awaiting review
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.avgDuration}</div>
            <p className="text-xs text-muted-foreground">Per pull request</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Commits</CardTitle>
            <Code className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.totalCommits}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">
                {totalPullRequests > 0
                  ? Math.round(metrics.totalCommits / metrics.totalPullRequests)
                  : 0}
              </span>{" "}
              avg per PR
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Pull Requests */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Your Recent Pull Requests</CardTitle>
            <CardDescription>
              Your latest contributions across repositories
            </CardDescription>
            <div className="flex flex-col space-y-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search pull requests..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                    <SelectItem value="merged">Merged</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={repositoryFilter}
                  onValueChange={setRepositoryFilter}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Repository" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Repos</SelectItem>
                    {uniqueRepositories.map((repo) => (
                      <SelectItem key={repo} value={repo}>
                        {repo}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <ArrowUpDown className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="created_at_desc">
                      Newest First
                    </SelectItem>
                    <SelectItem value="created_at_asc">Oldest First</SelectItem>
                    <SelectItem value="title_asc">Title A-Z</SelectItem>
                    <SelectItem value="title_desc">Title Z-A</SelectItem>
                    <SelectItem value="duration_desc">
                      Longest Duration
                    </SelectItem>
                    <SelectItem value="duration_asc">
                      Shortest Duration
                    </SelectItem>
                    <SelectItem value="commits_desc">Most Commits</SelectItem>
                    <SelectItem value="commits_asc">Fewest Commits</SelectItem>
                    <SelectItem value="comments_desc">Most Comments</SelectItem>
                    <SelectItem value="comments_asc">
                      Fewest Comments
                    </SelectItem>
                    <SelectItem value="repository_asc">
                      Repository A-Z
                    </SelectItem>
                    <SelectItem value="repository_desc">
                      Repository Z-A
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPullRequests.length > 0 ? (
              <>
                {recentPullRequests.map((pr) => (
                  <div
                    key={pr.id}
                    className="flex items-center space-x-4 rounded-lg border p-4"
                  >
                    <div className="flex-shrink-0">
                      {getStateIcon(pr.state)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{pr.title}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-muted-foreground">
                          #{pr.id}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">
                          {pr.organization}/{pr.repository}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">
                          {pr.comments} comments
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={getStateBadgeVariant(pr.state)}>
                        {pr.state}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <GitCommit className="h-3 w-3" />
                        <span>{pr.commits}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{pr.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between pt-4">
                    <p className="text-sm text-muted-foreground">
                      Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                      {Math.min(
                        currentPage * itemsPerPage,
                        filteredPullRequests.length,
                      )}{" "}
                      of {filteredPullRequests.length} results
                    </p>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Previous
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        Page {currentPage} of {totalPages}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages),
                          )
                        }
                        disabled={currentPage === totalPages}
                      >
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No pull requests found matching your criteria.
              </div>
            )}
          </CardContent>
        </Card>

        {/* Repository Activity */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Repository Activity</CardTitle>
            <CardDescription>Your contributions by repository</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {repositoryActivity.map((repo, index) => (
              <div key={repo.name} className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <GitBranch className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{repo.name}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <GitCommit className="h-3 w-3" />
                      <span>{repo.commits} commits</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <GitPullRequest className="h-3 w-3" />
                      <span>{repo.pullRequests} PRs</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Last activity: {repo.lastActivity}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Activity Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Your Performance Metrics</span>
          </CardTitle>
          <CardDescription>
            Your development productivity and code quality metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">PR Completion Rate</span>
                <span className="text-sm text-muted-foreground">
                  {approvalRate}%
                </span>
              </div>
              <Progress value={approvalRate} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Avg Comments per PR</span>
                <span className="text-sm text-muted-foreground">
                  {avgCommentsPerPR}
                </span>
              </div>
              <Progress
                value={Math.min(avgCommentsPerPR * 10, 100)}
                className="h-2"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Commits per PR</span>
                <span className="text-sm text-muted-foreground">
                  {totalPullRequests > 0
                    ? Math.round(
                        metrics.totalCommits / metrics.totalPullRequests,
                      )
                    : 0}
                </span>
              </div>
              <Progress
                value={
                  totalPullRequests > 0
                    ? Math.min(
                        (metrics.totalCommits / metrics.totalPullRequests) * 10,
                        100,
                      )
                    : 0
                }
                className="h-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
