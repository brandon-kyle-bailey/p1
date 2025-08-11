"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  GitPullRequest,
  Building2,
  GitBranch,
  Clock,
  MessageSquare,
  User,
  ExternalLink,
  DollarSign,
  Timer,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { mockPullRequests } from "@/lib/mock-data";
import DashboardHeaderComponent from "../../../components/dashboard/header.component";

export default function PRDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrg, setSelectedOrg] = useState("all");
  const [selectedRepo, setSelectedRepo] = useState("all");
  const [selectedState, setSelectedState] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Extract unique organizations and repositories
  const organizations = useMemo(() => {
    const orgs = [...new Set(mockPullRequests.map((pr) => pr.organization))];
    return orgs.sort();
  }, []);

  const repositories = useMemo(() => {
    const repos =
      selectedOrg === "all"
        ? [...new Set(mockPullRequests.map((pr) => pr.repository))]
        : [
            ...new Set(
              mockPullRequests
                .filter((pr) => pr.organization === selectedOrg)
                .map((pr) => pr.repository),
            ),
          ];
    return repos.sort();
  }, [selectedOrg]);

  // Filter pull requests
  const filteredPRs = useMemo(() => {
    return mockPullRequests.filter((pr) => {
      const matchesSearch =
        searchTerm === "" ||
        pr.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pr.body?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pr.repository.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pr.organization.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesOrg =
        selectedOrg === "all" || pr.organization === selectedOrg;
      const matchesRepo =
        selectedRepo === "all" || pr.repository === selectedRepo;
      const matchesState =
        selectedState === "all" || pr.state === selectedState;

      return matchesSearch && matchesOrg && matchesRepo && matchesState;
    });
  }, [searchTerm, selectedOrg, selectedRepo, selectedState]);

  const valueAnalytics = useMemo(() => {
    // Estimate dollar value based on commits and complexity
    const avgDeveloperHourlyRate = 75; // $75/hour average
    const avgHoursPerCommit = 2; // 2 hours per commit estimate
    const totalCommits = filteredPRs.reduce(
      (sum, pr) => sum + pr.commits.length,
      0,
    );
    const estimatedHours = totalCommits * avgHoursPerCommit;
    const dollarValue = estimatedHours * avgDeveloperHourlyRate;

    // Calculate total time spent (based on PR duration)
    const totalTimeMs = filteredPRs.reduce(
      (sum, pr) => sum + (pr.duration_ms || 0),
      0,
    );
    const totalHours = Math.round(totalTimeMs / (1000 * 60 * 60));

    // Distribution by organization
    const orgDistribution = filteredPRs.reduce(
      (acc, pr) => {
        acc[pr.organization] = (acc[pr.organization] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

    const distributionData = Object.entries(orgDistribution).map(
      ([org, count]) => ({
        name: org,
        value: count,
        percentage: Math.round((count / filteredPRs.length) * 100),
      }),
    );

    return {
      dollarValue,
      totalHours,
      distributionData,
    };
  }, [filteredPRs]);

  // Pagination
  const totalPages = Math.ceil(filteredPRs.length / itemsPerPage);
  const paginatedPRs = filteredPRs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const formatDuration = (ms: number) => {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    if (days > 0) return `${days}d ${hours % 24}h`;
    return `${hours}h`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Colors for pie chart
  const COLORS = [
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#06b6d4",
  ];

  return (
    <>
      <DashboardHeaderComponent
        title={"Dashboard"}
        description={
          "Track your code contributions across organizations and repositories"
        }
      />

      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search pull requests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Filters:
            </span>
          </div>

          <Select value={selectedOrg} onValueChange={setSelectedOrg}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Organizations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Organizations</SelectItem>
              {organizations.map((org) => (
                <SelectItem key={org} value={org}>
                  {org}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedRepo} onValueChange={setSelectedRepo}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Repositories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Repositories</SelectItem>
              {repositories.map((repo) => (
                <SelectItem key={repo} value={repo}>
                  {repo}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="All States" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Dollar Value Provided
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${valueAnalytics.dollarValue.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Based on estimated development time and market rates
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Time Spent Working
            </CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {valueAnalytics.totalHours}h
            </div>
            <p className="text-xs text-muted-foreground">
              Total development time across all pull requests
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Contribution Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={valueAnalytics.distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {valueAnalytics.distributionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => [`${value} PRs`, name]}
                  />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    formatter={(value) => (
                      <span className="text-xs">{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Showing{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {filteredPRs.length}
          </span>{" "}
          of{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {mockPullRequests.length}
          </span>{" "}
          pull requests
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPRs.map((pr) => (
          <Card
            key={pr.external_id}
            className="hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <GitPullRequest className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 leading-tight mb-2">
                      {truncateText(pr.title, 45)}
                    </h3>
                    <Badge
                      variant={pr.state === "closed" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {pr.state === "closed" ? "Merged" : "Open"}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {pr.body
                    ? truncateText(pr.body, 120)
                    : "No description provided"}
                </p>

                <div className="space-y-2 py-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4 text-gray-400" />
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {pr.organization}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GitBranch className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {pr.repository}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {pr.commits.length} commits
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {pr.comments} comments
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {pr.author}
                    </span>
                  </div>
                  {pr.duration_ms && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {formatDuration(pr.duration_ms)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Details
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={pr.url} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-500">
                  <div className="flex justify-between">
                    <span>Created {formatDate(pr.created_at)}</span>
                    <span>Updated {formatDate(pr.updated_at)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <div className="px-4 py-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Page{" "}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {currentPage}
              </span>{" "}
              of {totalPages}
            </span>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </>
  );
}
