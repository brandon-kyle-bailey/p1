"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Filter,
  Github,
  Plus,
  Search,
  Settings,
  XCircle,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import DashboardHeaderComponent from "../../../../components/dashboard/header.component";

interface project {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  status: "connected" | "disconnected" | "error";
  category:
    | "development"
    | "communication"
    | "project-management"
    | "productivity"
    | "storage"
    | "custom";
  features: string[];
  setupUrl?: string;
  popularity: number;
}

const ITEMS_PER_PAGE = 6;

export default function Page() {
  const [projects, setprojects] = useState<project[]>([
    {
      id: "github",
      name: "GitHub",
      description:
        "Connect your repositories for automated deployments and issue tracking",
      icon: <Github className="h-6 w-6" />,
      status: "connected",
      category: "development",
      features: [
        "Repository sync",
        "Pull request automation",
        "Issue tracking",
        "Deployment hooks",
      ],
      setupUrl: "https://github.com/apps/your-app",
      popularity: 95,
    },
    {
      id: "linear",
      name: "Linear",
      description: "Streamline project management and issue tracking workflows",
      icon: <Zap className="h-6 w-6" />,
      status: "connected",
      category: "project-management",
      features: [
        "Issue sync",
        "Project tracking",
        "Team collaboration",
        "Sprint planning",
      ],
      setupUrl: "https://linear.app/projects",
      popularity: 88,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const [customprojectRequest, setCustomprojectRequest] = useState({
    name: "",
    description: "",
    useCase: "",
    email: "",
  });

  const filteredAndSortedprojects = useMemo(() => {
    let filtered = projects;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          project.features.some((feature) =>
            feature.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
      );
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (project) => project.category === selectedCategory,
      );
    }

    // Apply status filter
    if (selectedStatus !== "all") {
      filtered = filtered.filter(
        (project) => project.status === selectedStatus,
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "popularity":
          return b.popularity - a.popularity;
        case "status":
          return a.status.localeCompare(b.status);
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, searchQuery, selectedCategory, selectedStatus, sortBy]);

  const totalPages = Math.ceil(
    filteredAndSortedprojects.length / ITEMS_PER_PAGE,
  );
  const paginatedprojects = filteredAndSortedprojects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const toggleproject = (id: string) => {
    setprojects((prev) =>
      prev.map((project) =>
        project.id === id
          ? {
              ...project,
              status:
                project.status === "connected" ? "disconnected" : "connected",
            }
          : project,
      ),
    );
  };

  const getStatusIcon = (status: project["status"]) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "disconnected":
        return <XCircle className="h-4 w-4 text-gray-400" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getStatusBadge = (status: project["status"]) => {
    switch (status) {
      case "connected":
        return (
          <Badge
            variant="default"
            className="bg-green-100 text-green-800 border-green-200"
          >
            Connected
          </Badge>
        );
      case "disconnected":
        return <Badge variant="secondary">Disconnected</Badge>;
      case "error":
        return <Badge variant="destructive">Error</Badge>;
    }
  };

  const handleCustomprojectsubmit = () => {
    console.log("Custom project request:", customprojectRequest);
    // Reset form
    setCustomprojectRequest({
      name: "",
      description: "",
      useCase: "",
      email: "",
    });
  };

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "development", label: "Development" },
    { value: "communication", label: "Communication" },
    { value: "project-management", label: "Project Management" },
    { value: "productivity", label: "Productivity" },
    { value: "storage", label: "Storage" },
    { value: "custom", label: "Custom" },
  ];

  const statuses = [
    { value: "all", label: "All Statuses" },
    { value: "connected", label: "Connected" },
    { value: "disconnected", label: "Disconnected" },
    { value: "error", label: "Error" },
  ];

  const sortOptions = [
    { value: "popularity", label: "Popularity" },
    { value: "name", label: "Name" },
    { value: "status", label: "Status" },
  ];

  return (
    <>
      {/* Header */}

      <DashboardHeaderComponent
        title={"Projects"}
        description={
          "Connect your favorite tools and services to streamline your workflow"
        }
      />

      <div>
        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 "
              />
            </div>

            {/* Request Custom project Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="whitespace-nowrap">
                  <Plus className="h-4 w-4 mr-2" />
                  Request project
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Request Custom project</DialogTitle>
                  <DialogDescription>
                    Tell us about the project you need and we'll get back to
                    you.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="project-name">project Name</Label>
                    <Input
                      id="project-name"
                      placeholder="e.g., Salesforce, HubSpot"
                      value={customprojectRequest.name}
                      onChange={(e) =>
                        setCustomprojectRequest((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="project-description">Description</Label>
                    <Textarea
                      id="project-description"
                      placeholder="Briefly describe what this project should do..."
                      value={customprojectRequest.description}
                      onChange={(e) =>
                        setCustomprojectRequest((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="use-case">Use Case</Label>
                    <Textarea
                      id="use-case"
                      placeholder="How would you use this project in your workflow?"
                      value={customprojectRequest.useCase}
                      onChange={(e) =>
                        setCustomprojectRequest((prev) => ({
                          ...prev,
                          useCase: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="your@email.com"
                      value={customprojectRequest.email}
                      onChange={(e) =>
                        setCustomprojectRequest((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    onClick={handleCustomprojectsubmit}
                    className="w-full"
                  >
                    Submit Request
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 flex-1">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      Sort by {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {paginatedprojects.length} of{" "}
            {filteredAndSortedprojects.length} projects
          </p>
        </div>

        {/* project Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedprojects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onToggle={toggleproject}
              getStatusIcon={getStatusIcon}
              getStatusBadge={getStatusBadge}
            />
          ))}
        </div>

        {/* Empty State */}
        {paginatedprojects.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters to find what you're
              looking for.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedStatus("all");
                setCurrentPage(1);
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-8">
            <div className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

interface ProjectCardProps {
  project: project;
  onToggle: (id: string) => void;
  getStatusIcon: (status: project["status"]) => React.ReactNode;
  getStatusBadge: (status: project["status"]) => React.ReactNode;
}

function ProjectCard({
  project,
  onToggle,
  getStatusIcon,
  getStatusBadge,
}: ProjectCardProps) {
  const [apiKey, setApiKey] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");

  return (
    <Card className="relative h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <div className="p-2 bg-muted rounded-lg flex-shrink-0">
              {project.icon}
            </div>
            <div className="min-w-0 flex-1">
              <CardTitle className="text-lg truncate">{project.name}</CardTitle>
              <div className="flex items-center space-x-2 mt-1">
                {getStatusIcon(project.status)}
                {getStatusBadge(project.status)}
              </div>
            </div>
          </div>
          <Switch
            checked={project.status === "connected"}
            onCheckedChange={() => onToggle(project.id)}
            className="flex-shrink-0"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <CardDescription className="mb-4 flex-1">
          {project.description}
        </CardDescription>

        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-xs text-muted-foreground">
                +{project.features.length - 3} more features
              </li>
            )}
          </ul>
        </div>

        <div className="flex space-x-2 mt-auto">
          {project.id === "custom-api" ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Configure
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Configure Custom API</DialogTitle>
                  <DialogDescription>
                    Set up your custom API project with authentication and
                    webhook settings.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="api-key">API Key</Label>
                    <Input
                      id="api-key"
                      type="password"
                      placeholder="Enter your API key"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="webhook-url">Webhook URL</Label>
                    <Input
                      id="webhook-url"
                      placeholder="https://your-app.com/webhook"
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline">Test Connection</Button>
                    <Button>Save Configuration</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <>
              {project.status === "connected" ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Configure
                </Button>
              ) : (
                <Button size="sm" className="flex-1">
                  Connect
                </Button>
              )}
              {project.setupUrl && (
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
