"use client";

import { useState } from "react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Users,
  Calendar,
  BarChart3,
  Shield,
  ArrowRight,
  Star,
  Menu,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import placeholderImage from "../../public/placeholder.png";
import { ModeToggle } from "../components/theme/mode-toggle";

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      content:
        "FlowSync has revolutionized how our team manages projects. The intuitive interface and powerful features have increased our productivity by 40%.",
      author: "Sarah Chen",
      role: "Project Manager, TechCorp",
      avatar: "SC",
    },
    {
      content:
        "The collaboration features are outstanding. Our remote team feels more connected than ever, and project delivery has never been smoother.",
      author: "Michael Rodriguez",
      role: "Team Lead, StartupXYZ",
      avatar: "MR",
    },
    {
      content:
        "The analytics dashboard gives us incredible insights into our workflow. We can identify bottlenecks and optimize our processes like never before.",
      author: "Emily Johnson",
      role: "Operations Director, GrowthCo",
      avatar: "EJ",
    },
    {
      content:
        "Implementation was seamless and the support team was incredibly helpful. We saw immediate improvements in our project delivery times.",
      author: "David Park",
      role: "Engineering Manager, DevCorp",
      avatar: "DP",
    },
    {
      content:
        "The integrations with our existing tools made the transition effortless. FlowSync fits perfectly into our workflow without disruption.",
      author: "Lisa Thompson",
      role: "Product Manager, InnovateCo",
      avatar: "LT",
    },
  ];

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
              <Card className="mx-auto max-w-3xl transform transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4 sm:pb-6">
                  <div className="flex items-center space-x-1 mb-4 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 fill-primary text-primary animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base sm:text-lg lg:text-xl text-center leading-relaxed px-2 sm:px-4">
                    &quot;{testimonial.content}&quot;
                  </CardDescription>
                </CardHeader>
                <CardFooter className="justify-center pt-2 sm:pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Image
                        src={`/transparent_placeholder.png?height=50&width=50&text=${testimonial.avatar}`}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="sm:w-[50px] sm:h-[50px] rounded-full transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"></div>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-sm sm:text-base">
                        {testimonial.author}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Hidden on mobile, visible on tablet+ */}
      <Button
        variant="outline"
        size="icon"
        className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 lg:-translate-x-4 bg-background/80 backdrop-blur-sm hover:bg-background hover:scale-110 transition-all duration-200 shadow-lg"
        onClick={prevTestimonial}
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 lg:translate-x-4 bg-background/80 backdrop-blur-sm hover:bg-background hover:scale-110 transition-all duration-200 shadow-lg"
        onClick={nextTestimonial}
      >
        <ArrowRight className="h-4 w-4" />
      </Button>

      {/* Mobile Navigation Buttons */}
      <div className="flex sm:hidden justify-between mt-4 px-4">
        <Button variant="outline" size="sm" onClick={prevTestimonial}>
          <ArrowRight className="h-3 w-3 rotate-180 mr-1" />
          Previous
        </Button>
        <Button variant="outline" size="sm" onClick={nextTestimonial}>
          Next
          <ArrowRight className="h-3 w-3 ml-1" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-1 sm:space-x-2 mt-6 sm:mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary scale-125 shadow-lg"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-3 sm:mt-4">
        <div className="text-xs text-muted-foreground flex items-center space-x-2">
          <div
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
          ></div>
          <span className="hidden sm:inline">
            {isAutoPlaying ? "Auto-playing" : "Paused"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Workflow className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">FlowSync</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#integrations"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Integrations
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="hidden md:inline-flex">Get Started</Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="px-4 py-4 space-y-4">
              <Link
                href="#features"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#integrations"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Integrations
              </Link>
              <Link
                href="#testimonials"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Sign In
                </Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="p-8">
        <div className="px-4 md:px-6">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-xs sm:text-sm">
                  🚀 New: Real-time Collaboration
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  Sync Your Team&apos;s
                  <span className="text-primary"> Workflow</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0">
                  Streamline project management, enhance team collaboration, and
                  boost productivity with FlowSync&apos;s intuitive platform
                  designed for modern teams.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src={placeholderImage}
                alt="FlowSync Dashboard Preview"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl border w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="p-8 bg-muted/50">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <Badge variant="secondary">Features</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Everything you need to manage projects
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
              Powerful features designed to help teams collaborate effectively
              and deliver projects on time.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Feature 1 - Text Left, Image Right */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4 text-center lg:text-left">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto lg:mx-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Smart Task Management
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Organize and prioritize tasks with ease
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Create, assign, and track tasks with our intuitive board
                  interface. Set priorities, due dates, and dependencies to keep
                  your projects moving forward. Our smart algorithms help you
                  identify bottlenecks before they become problems.
                </p>
                <ul className="space-y-2 text-left max-w-md mx-auto lg:mx-0">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Drag-and-drop task organization
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Automated priority suggestions
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Real-time progress tracking
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative order-first lg:order-last">
                <Image
                  src={placeholderImage}
                  alt="Task Management Dashboard showing organized project boards"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg border w-full h-auto"
                />
              </div>
            </div>

            {/* Feature 2 - Image Left, Text Right */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="relative">
                <Image
                  src={placeholderImage}
                  alt="Team collaboration interface with real-time chat and file sharing"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg border w-full h-auto"
                />
              </div>
              <div className="space-y-4 text-center lg:text-left">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto lg:mx-0">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Real-time Collaboration
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Work together seamlessly, wherever you are
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Connect your team with real-time updates, instant messaging,
                  and collaborative workspaces. Share files, leave comments, and
                  get notifications when things change. No more endless email
                  chains or missed updates.
                </p>
                <ul className="space-y-2 text-left max-w-md mx-auto lg:mx-0">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Instant messaging and comments
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      File sharing and version control
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Smart notification system
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 - Text Left, Image Right */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4 text-center lg:text-left">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto lg:mx-0">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Advanced Analytics
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Make data-driven decisions with powerful insights
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Get deep insights into your team&apos;s performance with
                  customizable dashboards and detailed reports. Track
                  productivity trends, identify bottlenecks, and optimize your
                  workflows for maximum efficiency.
                </p>
                <ul className="space-y-2 text-left max-w-md mx-auto lg:mx-0">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Customizable analytics dashboards
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Performance trend analysis
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Automated reporting
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative order-first lg:order-last">
                <Image
                  src={placeholderImage}
                  alt="Analytics dashboard showing project performance metrics and charts"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg border w-full h-auto"
                />
              </div>
            </div>

            {/* Feature 4 - Image Left, Text Right */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="relative">
                <Image
                  src={placeholderImage}
                  alt="Enterprise security dashboard with access controls and compliance features"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg border w-full h-auto"
                />
              </div>
              <div className="space-y-4 text-center lg:text-left">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto lg:mx-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Enterprise Security
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Keep your data safe with bank-level security
                </p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Protect your sensitive project data with enterprise-grade
                  security features. From SSO integration to granular
                  permissions, we ensure your information stays secure while
                  keeping your team productive.
                </p>
                <ul className="space-y-2 text-left max-w-md mx-auto lg:mx-0">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      SSO and SAML integration
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Granular access controls
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      SOC 2 Type II compliance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="p-8">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <Badge variant="secondary">Integrations</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Connect with your favorite tools
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
              FlowSync integrates seamlessly with the tools your team already
              uses. No need to change your workflow.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-8 sm:mb-12">
            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <Image
                src={placeholderImage}
                alt="Slack integration"
                width={60}
                height={60}
                className="mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Slack</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Get project updates directly in your Slack channels
              </p>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <Image
                src={placeholderImage}
                alt="GitHub integration"
                width={60}
                height={60}
                className="mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                GitHub
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Link commits and pull requests to project tasks
              </p>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <Image
                src={placeholderImage}
                alt="Google Workspace integration"
                width={60}
                height={60}
                className="mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                Google Workspace
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Sync with Google Calendar, Drive, and Gmail
              </p>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <Image
                src={placeholderImage}
                alt="Figma integration"
                width={60}
                height={60}
                className="mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Figma</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Embed design files and track design progress
              </p>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <Image
                src={placeholderImage}
                alt="Zoom integration"
                width={60}
                height={60}
                className="mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Zoom</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Schedule and join meetings directly from tasks
              </p>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <Image
                src={placeholderImage}
                alt="Jira integration"
                width={60}
                height={60}
                className="mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Jira</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Sync issues and track development progress
              </p>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <Image
                src={placeholderImage}
                alt="Salesforce integration"
                width={60}
                height={60}
                className="mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                Salesforce
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Connect customer data with project workflows
              </p>
            </Card>

            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
              <Image
                src={placeholderImage}
                alt="Custom API integration"
                width={60}
                height={60}
                className="mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-[60px] sm:h-[60px]"
              />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                Custom API
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Build custom integrations with our REST API
              </p>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Don&apos;t see your tool? We&apos;re always adding new
              integrations.
            </p>
            <Button
              variant="outline"
              className="w-full sm:w-auto bg-transparent"
            >
              Request Integration
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="p-8">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary">Testimonials</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Trusted by teams worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              See what our customers have to say about FlowSync and how
              it&apos;s improved their team productivity.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="p-8 bg-muted/50">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <Badge variant="secondary">Pricing</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Choose your plan
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
              Flexible pricing options to fit teams of all sizes. Start with our
              free trial.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="relative">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">Starter</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Perfect for small teams getting started
                </CardDescription>
                <div className="mt-4">
                  <span className="text-2xl sm:text-3xl font-bold">$12</span>
                  <span className="text-muted-foreground text-sm sm:text-base">
                    /user/month
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Up to 10 team members
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Basic project management
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">Email support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">5GB storage</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-transparent" variant="outline">
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-primary shadow-lg relative lg:scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="text-xs sm:text-sm">Most Popular</Badge>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">
                  Professional
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Best for growing teams and businesses
                </CardDescription>
                <div className="mt-4">
                  <span className="text-2xl sm:text-3xl font-bold">$24</span>
                  <span className="text-muted-foreground text-sm sm:text-base">
                    /user/month
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Up to 50 team members
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Advanced project features
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Priority support
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">100GB storage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Advanced analytics
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start Free Trial</Button>
              </CardFooter>
            </Card>

            <Card className="relative">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">Enterprise</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  For large organizations with advanced needs
                </CardDescription>
                <div className="mt-4">
                  <span className="text-2xl sm:text-3xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Unlimited team members
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Custom integrations
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Dedicated support
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Unlimited storage
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Advanced security
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-transparent" variant="outline">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="p-8 bg-muted/50">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary">FAQ</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Frequently asked questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Got questions? We&apos;ve got answers. Here are some of the most
              common questions about FlowSync.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long is the free trial?</AccordionTrigger>
                <AccordionContent>
                  Our free trial lasts 14 days and includes access to all
                  features. No credit card required to start, and you can cancel
                  anytime.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I change plans later?</AccordionTrigger>
                <AccordionContent>
                  Yes! You can upgrade or downgrade your plan at any time.
                  Changes take effect immediately, and we&apos;ll prorate any
                  billing adjustments.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. We use enterprise-grade security with SOC 2 Type
                  II compliance, end-to-end encryption, and regular security
                  audits to keep your data safe.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Do you offer customer support?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! We provide email support for all plans, priority support
                  for Professional plans, and dedicated support managers for
                  Enterprise customers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Can I import data from other tools?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we support data import from popular project management
                  tools like Asana, Trello, Monday.com, and more. Our team can
                  help with the migration process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Is there a mobile app?</AccordionTrigger>
                <AccordionContent>
                  Yes! FlowSync is available on iOS and Android. The mobile app
                  includes all core features so you can manage projects on the
                  go.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="outline">Contact Support</Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="p-8">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Ready to sync your team&apos;s workflow?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Join thousands of teams who have already improved their
              productivity with FlowSync. Start your free trial today and
              experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-primary" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t bg-muted/50 p-8">
        <div className="px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Workflow className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">FlowSync</span>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Sync your team&apos;s workflow and boost productivity with our
                intuitive project management platform.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Github className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Product</h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Support</h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Status
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-muted-foreground text-sm sm:text-base">
            <p>
              &copy; {new Date().getFullYear()} FlowSync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
