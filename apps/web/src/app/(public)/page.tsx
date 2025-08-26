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
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";

import customApiImage from "../../../public/customapi.png";
import githubImage from "../../../public/github.png";
import linearImage from "../../../public/linear.png";
import heroImage from "../../../public/hero.png";
import jiraImage from "../../../public/jira.png";
import slackImage from "../../../public/slack.png";
import TestimonialsComponent from "@/components/landing-page/testimonials.components";

const features = [
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    name: "Automatic Contribution Tracking",
    title: "Effortlessly capture every code and task contribution",
    description:
      "The-startup integrates seamlessly with GitHub, Linear, Jira, and more to automatically log commits, pull requests, code reviews, and issue updates. No manual entry needed — keep your impact history accurate and up-to-date.",
    items: [
      { icon: "", name: "Real-time sync with developer tools" },
      { icon: "", name: "Detailed commit and PR mapping" },
      { icon: "", name: "Issue and ticket tracking integration" },
    ],
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    name: "Team Impact Visibility",
    title: "Recognize contributions and boost team morale",
    description:
      "The-startup surfaces individual and team contributions through dynamic dashboards and personalized reports. Celebrate wins, identify hidden contributors, and foster a culture of recognition and accountability.",
    items: [
      { icon: "", name: "Personal and team contribution dashboards" },
      { icon: "", name: "Automated impact highlights and summaries" },
      { icon: "", name: "Collaboration insights across projects" },
    ],
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    name: "Powerful Analytics & Insights",
    title: "Drive smarter decisions with data on your development workflow",
    description:
      "Dive deep into contribution trends, productivity metrics, and workflow bottlenecks. Customize reports and get actionable insights that help optimize engineering performance and delivery.",
    items: [
      { icon: "", name: "Customizable analytics dashboards" },
      { icon: "", name: "Trend analysis for commits and issues" },
      { icon: "", name: "Automated impact reports and alerts" },
    ],
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    name: "Enterprise-Grade Security",
    title: "Protect your sensitive contribution and project data",
    description:
      "The-startup ensures your data is safe with SOC 2 Type II compliance, SSO/SAML integration, and granular permissions. Enjoy peace of mind while enabling seamless team collaboration and visibility.",
    items: [
      { icon: "", name: "SSO and SAML support" },
      { icon: "", name: "Granular access control and permissions" },
      { icon: "", name: "SOC 2 Type II certified infrastructure" },
    ],
  },
];

const integrations = [
  {
    image: githubImage,
    name: "GitHub",
    description:
      "Automatically pull commits, pull requests, and code reviews into your contribution history.",
  },
  {
    image: linearImage,
    name: "Linear",
    description:
      "Sync issues, cycles, and status updates to connect code changes with tracked work items.",
  },
  {
    image: jiraImage,
    name: "Jira",
    description:
      "Link tickets and sprints to developer contributions for full project visibility.",
  },
  {
    image: slackImage,
    name: "Slack",
    description:
      "Get contribution highlights and impact summaries delivered directly to your team channels.",
  },
  {
    image: customApiImage,
    name: "Custom API",
    description:
      "Use our REST API to integrate The-startup with any internal tools or workflows you use.",
  },
];

const pricingPlans = [
  {
    priceId: "",
    name: "Starter",
    description:
      "For small teams or individual developers who want to showcase their impact.",
    price: "12",
    mostPopular: false,
    features: [
      { name: "Up to 10 tracked contributors" },
      { name: "GitHub + Linear integration" },
      { name: "Email support" },
      { name: "Basic contribution analytics" },
    ],
    buttonText: "Start Free Trial",
  },
  {
    priceId: "",
    name: "Professional",
    description:
      "Best for growing engineering teams who need advanced insights and recognition tools.",
    price: "24",
    mostPopular: true,
    features: [
      { name: "Up to 50 tracked contributors" },
      { name: "GitHub, Linear, Jira, and more integrations" },
      { name: "Priority support" },
      { name: "Advanced analytics & trends" },
      { name: "Contribution heatmaps & timelines" },
    ],
    buttonText: "Start Free Trial",
  },
  {
    priceId: "",
    name: "Enterprise",
    description:
      "For large organizations needing custom integrations and enterprise-grade security.",
    price: "Custom",
    mostPopular: false,
    features: [
      { name: "Unlimited tracked contributors" },
      { name: "Custom integrations & APIs" },
      { name: "Dedicated success manager" },
      { name: "Enterprise-grade security (SOC 2, SSO, etc.)" },
      { name: "Historical data import & migration" },
    ],
    buttonText: "Contact Sales",
  },
];

const faqs = [
  {
    question: "How long is the free trial?",
    answer:
      "The-startup’s free trial lasts 14 days with full access to every feature — including all integrations and analytics. No credit card required, and you can cancel anytime.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Absolutely. You can upgrade, downgrade, or switch plans whenever you need. Changes take effect instantly, and we prorate billing automatically.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. The-startup uses enterprise-grade security, including SOC 2 Type II compliance, end-to-end encryption, and regular security audits to keep your contribution data safe.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes. All plans include email support, Professional plans receive priority response times, and Enterprise customers get a dedicated success manager.",
  },
  {
    question: "Can I integrate with my existing tools?",
    answer:
      "Yes. The-startup connects seamlessly with GitHub, Linear, Jira, and other developer tools. Our team can assist with setup and ensure all historical data is imported.",
  },
  {
    question: "Is there a mobile app?",
    answer: "No.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="p-8 lg:mt-56">
        <div className="px-4 md:px-6">
          <div className="grid gap-8 items-center">
            <div className="space-y-6 sm:space-y-8 text-center">
              <div className="space-y-4 flex flex-col items-center">
                <Badge
                  variant="outline"
                  className="text-secondary dark:text-primary text-sm bg-gradient-to-r from-purple-500 to-blue-500 border-0"
                >
                  🚀 New: Real-Time Contribution Insights
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                  Make Your Developer
                  <span className="text-primary"> Impact Evident</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground lg:w-1/2">
                  Automatically track and visualize your team’s code, tasks, and
                  project contributions with The-startup. Connect GitHub,
                  Linear, Jira, and more for real-time insights that boost
                  productivity and recognition.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
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

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
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

            <div className="lg:p-18">
              <Image
                src={heroImage}
                alt="Developer dashboard showing contribution metrics and team impact insights"
                width={1920}
                height={1080}
                className="rounded-xl shadow-lg border w-full h-auto"
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
              className="text-secondary dark:text-primary text-sm bg-gradient-to-r from-purple-500 to-blue-500 border-0"
            >
              Features
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Everything You Need to Showcase Developer Impact
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
              Powerful tools designed to automatically track contributions,
              surface insights, and help your team grow through recognition and
              data-driven decisions.
            </p>
          </div>

          {features.map((feature, index) => {
            return (
              <div
                key={`${feature.name}-${index}`}
                className="grid gap-8 lg:grid-cols-2 items-center my-16 lg:my-56"
              >
                <div className="space-y-4 text-start">
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
                    {feature.items.map((item, idx) => (
                      <li
                        key={`${item.name}-${idx}`}
                        className="flex items-center space-x-2"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        {item.icon}
                        <span className="text-sm sm:text-base">
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative order-first ${
                    index % 2 !== 0 ? "lg:order-last" : "lg:order-first"
                  }`}
                >
                  <Image
                    src={heroImage}
                    alt={`${feature.name} dashboard showing detailed contribution metrics and developer insights`}
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
              className="text-secondary dark:text-primary text-sm bg-gradient-to-r from-purple-500 to-blue-500 border-0"
            >
              Integrations
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Connect The-startup with Your Developer Tools
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
              The-startup seamlessly integrates with the tools your engineering
              team already loves — from GitHub and Linear to Slack and Jira.
              Keep your workflow intact while unlocking deep contribution
              insights.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 mb-8 sm:mb-12">
            {integrations.map((integration, index) => (
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
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Don&apos;t see your tool? We&apos;re always adding new
              integrations to help you get the full picture of your team’s
              impact.
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
              className="text-secondary dark:text-primary text-sm bg-gradient-to-r from-purple-500 to-blue-500 border-0"
            >
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Trusted by Developer Teams Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Hear from engineering teams how The-startup has helped them
              capture their contributions, boost recognition, and improve
              collaboration.
            </p>
          </div>
          <TestimonialsComponent />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="p-8 bg-muted/50">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 sm:mb-16">
            <Badge
              variant="outline"
              className="text-secondary dark:text-primary text-sm bg-gradient-to-r from-purple-500 to-blue-500 border-0"
            >
              Pricing
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Choose Your Plan
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[800px] mx-auto px-4">
              Flexible pricing options to fit teams of all sizes. Start with our
              14-day free trial—no credit card required.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={`${plan.name}-${index}`}
                className={`relative ${
                  plan.mostPopular
                    ? "lg:scale-105 border-purple-500 shadow-lg shadow-purple-500"
                    : ""
                }`}
              >
                {plan.mostPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md px-3 py-1">
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
                      {typeof plan.price === "string" &&
                      plan.price.toLowerCase() === "custom" ? (
                        plan.price
                      ) : (
                        <>${plan.price}</>
                      )}
                    </span>
                    {plan.price.toLowerCase() !== "custom" && (
                      <span className="text-muted-foreground text-sm sm:text-base">
                        {" "}
                        per seat
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <ul className="space-y-2 sm:space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={`${feature.name}-${idx}`}
                        className="flex items-center space-x-2"
                      >
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm sm:text-base">
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{plan.buttonText}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="p-8 bg-muted/50">
        <div className="px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="outline"
              className="text-secondary dark:text-primary text-sm bg-gradient-to-r from-purple-500 to-blue-500 border-0"
            >
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Have questions about The-startup? Here are answers to some of the
              most common inquiries about how we help you track developer
              contributions and improve team impact.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, index) => (
                <AccordionItem
                  key={`${item.question}-${index}`}
                  value={`item-${index + 1}`}
                >
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
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
              Ready to capture your team&apos;s true impact?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Join thousands of developer teams who trust The-startup to
              automatically track contributions, improve collaboration, and
              boost recognition. Start your free trial today and see the
              difference.
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
    </>
  );
}
