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
  Check,
  Github,
  Linkedin,
  Mail,
  Shield,
  Star,
  Twitter,
  Users,
  Zap,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import placeholderImage from "@/assets/placeholder-rsreo.png";
import { WebRoutes } from "../lib/constants";

export const metadata: Metadata = {
  title: "Your SaaS — Empower Your Workflow",
  description:
    "Your SaaS helps teams streamline workflows, boost productivity, and manage tasks effortlessly. Try free today!",
  openGraph: {
    title: "Your SaaS — Empower Your Workflow",
    description:
      "Your SaaS helps teams streamline workflows, boost productivity, and manage tasks effortlessly. Try free today!",
    url: "https://www.yoursaas.com",
    siteName: "Your SaaS",
    type: "website",
    images: [{ url: "https://www.yoursaas.com/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your SaaS — Empower Your Workflow",
    description:
      "Your SaaS helps teams streamline workflows, boost productivity, and manage tasks effortlessly. Try free today!",
    images: ["https://www.yoursaas.com/og-image.jpg"],
  },
};

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-24 p-16">
      <header className="sticky top-0 z-50 bg-secondary h-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-lg bg-primary p-2">
              <Zap className="text-secondary" />
            </div>
            <span className="text-xl font-bold">The Startup</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href={WebRoutes.Login} className="hidden md:flex">
              Log in
            </Link>
            <Link href={WebRoutes.Register} className="hidden md:flex">
              <Button className="bg-primary">Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <section>
        <div>
          <div className="flex flex-col justify-center items-center gap-4 p-4">
            <div className="flex flex-col gap-4 justify-center items-center">
              <Badge variant="secondary" className="bg-green-500">
                🚀 New: AI-Powered Automation
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Streamline Your
                <span className="text-green-500"> Workflow</span>
              </h1>
              <p className="text-xl text-gray-600">
                Automate repetitive tasks, boost team productivity, and focus on
                what matters most. StreamLine helps you build efficient
                workflows in minutes, not hours.
              </p>

              <div className="flex gap-4">
                <Button size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={placeholderImage}
                alt="StreamLine Dashboard"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="bg-emerald-100 text-emerald-800"
            >
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Powerful features designed to help teams work smarter, not harder.
              From automation to analytics, we've got you covered.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4 w-full">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Smart Automation</CardTitle>
                <CardDescription>
                  Create powerful workflows that run automatically, saving hours
                  of manual work every week.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Work together seamlessly with real-time updates, comments, and
                  shared workspaces.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Get insights into your team's productivity with detailed
                  reports and performance metrics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  Bank-level security with SOC 2 compliance, SSO, and advanced
                  permission controls.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="bg-emerald-100 text-emerald-800"
            >
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Join thousands of teams who have transformed their productivity
              with StreamLine.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 w-full">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "StreamLine has completely transformed how our team works.
                  We've reduced manual tasks by 80% and our productivity has
                  never been higher."
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center space-x-4">
                <Image
                  src="/professional-woman-headshot.png"
                  alt="Sarah Chen"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Sarah Chen</p>
                  <p className="text-sm text-gray-600">
                    VP of Operations, TechCorp
                  </p>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "The automation features are incredible. What used to take our
                  team hours now happens automatically. It's like having an
                  extra team member."
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center space-x-4">
                <Image
                  src="/professional-man-headshot.png"
                  alt="Michael Rodriguez"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Michael Rodriguez</p>
                  <p className="text-sm text-gray-600">CTO, StartupXYZ</p>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <CardDescription className="text-base">
                  "StreamLine's analytics give us insights we never had before.
                  We can now optimize our processes based on real data, not
                  guesswork."
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center space-x-4">
                <Image
                  src="/professional-woman-headshot.png"
                  alt="Emily Johnson"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">Emily Johnson</p>
                  <p className="text-sm text-gray-600">
                    Head of Marketing, GrowthCo
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="bg-emerald-100 text-emerald-800"
            >
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Choose the plan that's right for your team. All plans include a
              14-day free trial.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>
                  Perfect for small teams getting started
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-600">/user/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Up to 5 team members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Basic automation workflows</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Email support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Basic analytics</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-transparent" variant="outline">
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-emerald-600 shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-emerald-600 text-white">
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professional</CardTitle>
                <CardDescription>
                  Best for growing teams and businesses
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-600">/user/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Up to 25 team members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Advanced automation workflows</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Advanced analytics & reporting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>API access</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>
                  For large organizations with custom needs
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Unlimited team members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Custom workflows & integrations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>24/7 dedicated support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Advanced security & compliance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>On-premise deployment</span>
                </div>
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

      <section>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-center flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to streamline your workflow?
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of teams who have already transformed their
              productivity. Start your free trial today and see the difference
              StreamLine can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-emerald-600" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-emerald-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-emerald-600" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="contact">
        <div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">StreamLine</span>
              </div>
              <p className="text-gray-400">
                Streamline your workflow and boost productivity with our
                powerful automation platform.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product</h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Integrations
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  API
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Status
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Security
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} StreamLine. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
