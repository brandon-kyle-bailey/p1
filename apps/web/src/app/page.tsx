"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Check,
  Github,
  Linkedin,
  Mail,
  Menu,
  Shield,
  Star,
  Twitter,
  Users,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";

import placeholderImage from "../../public/placeholder.png";
import stripeImage from "../../public/stripe.png";
import githubImage from "../../public/github.png";
import linearImage from "../../public/linear.png";
import customApiImage from "../../public/customapi.png";
import { ModeToggle } from "../components/theme/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { WebRoutes } from "../lib/constants";

const features = [
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    name: "Smart Task Management",
    title: "Organize and prioritize tasks with ease",
    description:
      "Create, assign, and track tasks with our intuitive board interface. Set priorities, due dates, and dependencies to keep your projects moving forward. Our smart algorithms help you identify bottlenecks before they become problems.",
    items: [
      { icon: "", name: "Drag-and-drop task organization" },
      { icon: "", name: "Automated priority suggestions" },
      { icon: "", name: "Real-time progress tracking" },
    ],
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    name: "Real-time Collaboration",
    title: "Work together seamlessly, wherever you are",
    description:
      "Connect your team with real-time updates, instant messaging, and collaborative workspaces. Share files, leave comments, and get notifications when things change. No more endless email chains or missed updates.",
    items: [
      { icon: "", name: "Instant messaging and comments" },
      { icon: "", name: "File sharing and version control" },
      { icon: "", name: "Smart notification system" },
    ],
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    name: "Advanced Analytics",
    title: "Make data-driven decisions with powerful insights",
    description:
      "Get deep insights into your team's performance with customizable dashboards and detailed reports. Track productivity trends, identify bottlenecks, and optimize your workflows for maximum efficiency.",
    items: [
      { icon: "", name: "Customizable analytics dashboards" },
      { icon: "", name: "Performance trend analysis" },
      { icon: "", name: "Automated reporting" },
    ],
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    name: "Enterprise Security",
    title: "Keep your data safe with bank-level security",
    description:
      "Protect your sensitive project data with enterprise-grade security features. From SSO integration to granular permissions, we ensure your information stays secure while keeping your team productive.",
    items: [
      { icon: "", name: "SSO and SAML integration" },
      { icon: "", name: "Granular access controls" },
      { icon: "", name: "SOC 2 Type II compliance" },
    ],
  },
];

const integrations = [
  {
    image: stripeImage,
    name: "Stripe",
    description: "For billing and invoicing",
  },
  {
    image: githubImage,
    name: "Github",
    description: "Link commits and pull requests to project tasks",
  },
  {
    image: linearImage,
    name: "Linear",
    description: "Link commits and pull requests to project tasks",
  },
  {
    image: customApiImage,
    name: "Custom API",
    description: "Build custom integrations with our REST API",
  },
];

const pricingPlans = [
  {
    priceId: "",
    name: "Starter",
    description: "Perfect for small teams getting started",
    price: "12",
    mostPopular: false,
    features: [
      {
        name: "Up to 10 team members",
      },
      {
        name: "Basic project management",
      },
      {
        name: "Email support",
      },
      {
        name: "5GB storage",
      },
    ],
    buttonText: "Start Free Trial",
  },
  {
    priceId: "",
    name: "Professional",
    description: "Best for growing teams and businesses",
    price: "24",
    mostPopular: true,
    features: [
      {
        name: "Up to 50 team members",
      },
      {
        name: "Advanced project features",
      },
      {
        name: "Priority support",
      },
      {
        name: "100GB storage",
      },
      {
        name: "Advanced analytics",
      },
    ],
    buttonText: "Start Free Trial",
  },
  {
    priceId: "",
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    price: "Custom",
    mostPopular: false,
    features: [
      { name: "Unlimited team members" },
      { name: "Custom integrations" },
      { name: "Dedicated support" },
      { name: "Unlimited storage" },
      { name: "Advanced security" },
    ],

    buttonText: "Contact Sales",
  },
];

const faqs = [
  {
    question: "How long is the free trial?",
    answer:
      "Our free trial lasts 14 days and includes access to all features. No credit card required to start, and you can cancel anytime.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and regular security audits to keep your data safe.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes! We provide email support for all plans, priority support for Professional plans, and dedicated support managers for Enterprise customers.",
  },
  {
    question: "Can I import data from other tools?",
    answer:
      "Yes, we support data import from popular project management tools like Asana, Trello, Monday.com, and more. Our team can help with the migration process.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes! FlowSync is available on iOS and Android. The mobile app includes all core features so you can manage projects on the go.",
  },
];

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
              <Card className="mx-auto max-w-3xl transform transition-all duration-300">
                <CardHeader className="pb-4 sm:pb-6">
                  <div className="flex items-center space-x-1 mb-4 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 animate-pulse"
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
                    <Avatar>
                      <AvatarImage
                        src={`../../public/placeholder.png`}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>{testimonial.author}</AvatarFallback>
                    </Avatar>
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
    </div>
  );
}

export default function Page() {
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
            <Link href={WebRoutes.Login}>
              <Button variant="ghost" className="hidden md:inline-flex">
                Sign In
              </Button>
            </Link>
            <Link href={WebRoutes.Register}>
              <Button className="hidden md:inline-flex">Get Started</Button>
            </Link>
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
                <Badge
                  variant="outline"
                  className="text-secondary dark:text-primary text-sm bg-gradient-to-r from-purple-500  to-blue-500 border-0"
                >
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
                alt="Team collaboration interface with real-time chat and file sharing"
                width={600}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="p-8 bg-muted/50">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <Badge
              variant="outline"
              className="text-secondary dark:text-primary text-sm bg-gradient-to-r from-purple-500  to-blue-500 border-0"
            >
              Features
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Everything you need to manage projects
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
              Powerful features designed to help teams collaborate effectively
              and deliver projects on time.
            </p>
          </div>

          {features.map((feature, index) => {
            return (
              <div
                key={`${feature.name}-${index}`}
                className="grid gap-8 lg:grid-cols-2 items-center"
              >
                <div className="space-y-4 text-center lg:text-left">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto lg:mx-0">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {feature.name}
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    {feature.title}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 text-left max-w-md mx-auto lg:mx-0">
                    {feature.items.map((item, index) => {
                      return (
                        <li
                          key={`${item.name}-${index}`}
                          className="flex items-center space-x-2"
                        >
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          {item.icon}
                          <span className="text-sm sm:text-base">
                            {item.name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div
                  className={`relative ${index % 2 !== 0 ? "order-first lg:order-last" : "order-last lg:order-first"}`}
                >
                  <Image
                    src={placeholderImage}
                    alt="Task Management Dashboard showing organized project boards"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg border w-full h-auto"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="p-8">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <Badge
              variant="outline"
              className="text-secondary dark:text-primary text-sm bg-gradient-to-r from-purple-500  to-blue-500 border-0"
            >
              Integrations
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Connect with your favorite tools
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
              FlowSync integrates seamlessly with the tools your team already
              uses. No need to change your workflow.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mb-8 sm:mb-12">
            {integrations.map((integration, index) => {
              return (
                <Card
                  key={`${integration.name}-${index}`}
                  className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow shadow-secondary"
                >
                  <Image
                    src={integration.image}
                    alt={integration.name}
                    width={60}
                    height={60}
                    className="mx-auto mb-3 sm:mb-4 w-10 h-10 sm:w-[60px] sm:h-[60px] rounded-lg"
                  />
                  <h3 className="font-semibold mb-2 text-sm sm:text-base">
                    {integration.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                </Card>
              );
            })}
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
            <Badge
              variant="outline"
              className="text-secondary dark:text-primary text-sm bg-gradient-to-r from-purple-500  to-blue-500 border-0"
            >
              Testimonials
            </Badge>
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
            <Badge
              variant="outline"
              className="text-secondary dark:text-primary text-sm bg-gradient-to-r from-purple-500  to-blue-500 border-0"
            >
              Pricing
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Choose your plan
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
              Flexible pricing options to fit teams of all sizes. Start with our
              free trial.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => {
              return (
                <Card
                  key={`${plan.name}-${index}`}
                  className={`relative ${plan.mostPopular ? "lg:scale-105 border-purple-500 shadow-lg shadow-purple-500" : ""}`}
                >
                  {plan.mostPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500  to-blue-500 rounded-md">
                      <Badge className="text-xs sm:text-sm bg-transparent text-primary">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg sm:text-xl">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <span className="text-2xl sm:text-3xl font-bold">
                        {plan.price.toLocaleLowerCase() === "custom" ? "" : "$"}
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm sm:text-base">
                        {" "}
                        Per seat
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <ul className="space-y-2 sm:space-y-3">
                      {plan.features.map((feature, index) => {
                        return (
                          <li
                            key={`${feature.name}-${index}`}
                            className="flex items-center space-x-2"
                          >
                            <Check className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm sm:text-base">
                              {feature.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">{plan.buttonText}</Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="p-8 bg-muted/50">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="outline"
              className="text-secondary dark:text-primary text-sm bg-gradient-to-r from-purple-500  to-blue-500 border-0"
            >
              FAQ
            </Badge>
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
              {faqs.map((item, index) => {
                return (
                  <AccordionItem
                    key={`${item.question}-${index}`}
                    value={`item-${index + 1}`}
                  >
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                );
              })}
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
