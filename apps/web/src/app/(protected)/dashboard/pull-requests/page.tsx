"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Plus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  GitPullRequest,
  Building2,
  GitBranch,
  Clock,
  MessageSquare,
  User,
  ExternalLink,
  CheckCircle,
  XCircle,
  Target,
  Users,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockPullRequests } from "@/lib/mock-data";
import DashboardHeaderComponent from "@/components/dashboard/header.component";

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

  const analytics = useMemo(() => {
    const totalPRs = filteredPRs.length;
    const closedPRs = filteredPRs.filter((pr) => pr.state === "closed").length;
    const totalCommits = filteredPRs.reduce(
      (sum, pr) => sum + pr.commits.length,
      0,
    );
    const uniqueOrgs = new Set(filteredPRs.map((pr) => pr.organization)).size;
    const uniqueRepos = new Set(filteredPRs.map((pr) => pr.repository)).size;

    const avgTimeToMerge = filteredPRs
      .filter((pr) => pr.state === "closed" && pr.duration_ms)
      .reduce((sum, pr, _, arr) => sum + pr.duration_ms! / arr.length, 0);

    const avgTimeToMergeDays = Math.round(
      avgTimeToMerge / (1000 * 60 * 60 * 24),
    );

    return {
      totalPRs,
      closedPRs,
      totalCommits,
      uniqueOrgs,
      uniqueRepos,
      avgTimeToMergeDays,
      mergeRate: totalPRs > 0 ? Math.round((closedPRs / totalPRs) * 100) : 0,
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

  return (
    <>
      <DashboardHeaderComponent
        title={"Pull Requests"}
        description={
          "Track your code contributions across organizations and repositories"
        }
      />

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search pull requests..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-muted/50"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filters:</span>
          </div>

          <Select value={selectedOrg} onValueChange={setSelectedOrg}>
            <SelectTrigger className="w-[180px] bg-muted/50">
              <SelectValue placeholder="All Organizations" />
              <ChevronDown className="h-4 w-4 opacity-50" />
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
            <SelectTrigger className="w-[180px] bg-muted/50">
              <SelectValue placeholder="All Repositories" />
              <ChevronDown className="h-4 w-4 opacity-50" />
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
            <SelectTrigger className="w-[140px] bg-muted/50">
              <SelectValue placeholder="All States" />
              <ChevronDown className="h-4 w-4 opacity-50" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        Showing {itemsPerPage} of {mockPullRequests.length} pull requests
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedPRs.map((pr) => (
          <Card
            key={pr.external_id}
            className="hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header with icon and status */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-lg">
                      <GitPullRequest className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">
                        {truncateText(pr.title, 40)}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        {pr.state === "closed" ? (
                          <CheckCircle className="h-3 w-3 text-green-500" />
                        ) : (
                          <XCircle className="h-3 w-3 text-orange-500" />
                        )}
                        <span className="text-xs text-muted-foreground capitalize">
                          {pr.state}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-4 rounded-full ${pr.state === "closed" ? "bg-green-500" : "bg-orange-500"} relative`}
                    >
                      <div
                        className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform ${pr.state === "closed" ? "translate-x-4" : "translate-x-0.5"}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {pr.body
                    ? truncateText(pr.body, 100)
                    : "No description provided"}
                </p>

                {/* Organization and Repository */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{pr.organization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GitBranch className="h-4 w-4 text-muted-foreground" />
                    <span>{pr.repository}</span>
                  </div>
                </div>

                {/* Features/Stats */}
                <div className="space-y-2">
                  <p className="text-sm font-medium">Stats:</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GitBranch className="h-3 w-3 text-green-500" />
                      <span>{pr.commits.length} commits</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MessageSquare className="h-3 w-3 text-green-500" />
                      <span>{pr.comments} comments</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-3 w-3 text-green-500" />
                      <span>By {pr.author}</span>
                    </div>
                    {pr.duration_ms && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 text-green-500" />
                        <span>{formatDuration(pr.duration_ms)} duration</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 bg-transparent"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    className={`flex-1 ${pr.state === "closed" ? "bg-green-600 hover:bg-green-700" : "bg-primary hover:bg-primary/90"}`}
                    asChild
                  >
                    <a href={pr.url} target="_blank" rel="noopener noreferrer">
                      Open on GitHub
                    </a>
                  </Button>
                </div>

                {/* Date info */}
                <div className="text-xs text-muted-foreground pt-2 border-t">
                  Created {formatDate(pr.created_at)} • Updated{" "}
                  {formatDate(pr.updated_at)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>

          <span className="text-sm text-muted-foreground px-4">
            Page {currentPage} of {totalPages}
          </span>

          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="gap-1"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </>
  );
}
