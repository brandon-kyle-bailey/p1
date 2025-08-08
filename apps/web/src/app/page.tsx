"use client";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { WebRoutes } from "../lib/constants";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

const FEATURES = [
  {
    title: "Elegant UI Kit",
    description: "Crafted with ShadCN components and modern UX best practices.",
  },
  {
    title: "Integrated Payments",
    description: "Seamless Stripe subscription flows ready out of the box.",
  },
  {
    title: "Enterprise-Ready Auth",
    description: "Robust authentication powered by Auth.js and Next.js.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The Startup transformed our product launch timeline from months to weeks. Highly recommended.",
    author: "Jane Doe, Founder",
  },
  {
    quote:
      "A game-changer for SaaS founders — development speed and quality skyrocketed.",
    author: "John Smith, CTO",
  },
  {
    quote:
      "Reliable, beautiful, and well-supported — everything you want in a starter kit.",
    author: "Emily Chen, Product Lead",
  },
];

const PRICING_PLANS = [
  {
    tier: "Free",
    price: "$0",
    features: ["Basic Components", "Community Access"],
  },
  {
    tier: "Startup",
    price: "$199",
    features: ["Stripe & Auth.js", "Lifetime Updates"],
    featured: true,
  },
  {
    tier: "Enterprise",
    price: "Contact Us",
    features: ["Custom Integrations", "Priority Support"],
  },
];

export default function Page() {
  const router = useRouter();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "The Startup",
    description:
      "Powerful, off-the-shelf SaaS starter template for developers who want to launch production-ready applications with minimal effort.",
    brand: {
      "@type": "Brand",
      name: "The Startup",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "199",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <Head>
        <title>The Startup – SaaS Starter Template</title>
        <meta
          name="description"
          content="Launch your SaaS product faster with The Startup, a modern starter template built with Next.js, ShadCN, Stripe, and more."
        />
        <meta
          property="og:title"
          content="The Startup – SaaS Starter Template"
        />
        <meta
          property="og:description"
          content="Off-the-shelf SaaS starter template for developers to build production-ready applications quickly."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="bg-background text-foreground min-h-screen font-sans antialiased">
        {/* Navigation */}
        <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
          <nav
            className="max-w-7xl mx-auto flex items-center justify-between py-6 px-8"
            aria-label="Primary navigation"
          >
            <h1 className="text-3xl font-extrabold tracking-tight text-primary transition-colors hover:text-primary/80">
              <Link href="/" aria-label="Home">
                The Startup
              </Link>
            </h1>

            <ul className="hidden md:flex space-x-10 text-lg font-medium tracking-wide text-muted-foreground">
              <li>
                <a
                  href="#features"
                  className="hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-primary transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-primary transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => router.push(WebRoutes.Login)}
                className="text-sm font-semibold px-5 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition focus:outline-none focus:ring-4 focus:ring-primary/50"
                aria-label="Go to Dashboard"
              >
                Dashboard
              </button>
            </div>

            {/* Mobile menu button placeholder */}
            <div className="md:hidden">
              <button
                aria-label="Open menu"
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => alert("Mobile menu not implemented")}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <main>
          <section
            className="relative flex items-center justify-center h-screen px-6 text-center bg-gradient-to-br from-primary/20 via-background to-background"
            aria-label="Hero section"
          >
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-6xl font-extrabold leading-tight tracking-tight text-balance drop-shadow-lg">
                Build. Launch. Scale.{" "}
                <span className="text-primary underline decoration-4 decoration-primary/50">
                  Effortlessly
                </span>
                .
              </h2>
              <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Premium SaaS starter template designed for founders who demand
                excellence.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
                <button
                  className="flex items-center justify-center gap-3 px-10 py-5 text-lg rounded-full shadow-lg bg-primary text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/60 transition"
                  onClick={() => router.push(WebRoutes.Register)}
                  aria-label="Get started with The Startup"
                >
                  Get Started
                  <ArrowRightIcon className="w-5 h-5" />
                </button>
                <a
                  href="#features"
                  className="flex items-center justify-center gap-3 px-10 py-5 text-lg rounded-full border-2 border-muted text-foreground hover:border-primary hover:text-primary transition focus:outline-none focus:ring-4 focus:ring-primary/40"
                >
                  Explore Features
                  <ArrowRightIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Features */}
          <section
            id="features"
            className="py-36 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-14"
            aria-label="Features"
          >
            {FEATURES.map(({ title, description }, idx) => (
              <article
                key={idx}
                className="bg-card rounded-3xl p-12 shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 cursor-default group"
                tabIndex={0}
                aria-describedby={`feature-desc-${idx}`}
              >
                <h3 className="text-primary mb-3 text-5xl font-extrabold group-hover:scale-110 transition-transform">
                  {title.split(" ")[0]}
                </h3>
                <h4 className="text-3xl font-semibold mb-5">{title}</h4>
                <p
                  id={`feature-desc-${idx}`}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  {description}
                </p>
              </article>
            ))}
          </section>

          {/* Testimonials */}
          <section
            id="testimonials"
            className="py-36 bg-gradient-to-br from-muted/20 to-background px-6"
            aria-label="Testimonials"
          >
            <h2 className="text-5xl font-bold text-center mb-20 tracking-wide">
              What Founders Are Saying
            </h2>
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14">
              {TESTIMONIALS.map(({ quote, author }, idx) => (
                <blockquote
                  key={idx}
                  className="bg-card rounded-3xl p-10 shadow-lg border border-muted/50 hover:shadow-xl transition cursor-default"
                >
                  <div className="flex flex-col items-center text-center">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 text-primary mb-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.17 6.13a7.49 7.49 0 0 1 1.83-1.51c1.65-.93 3.58-1.1 5.37-.49a8.24 8.24 0 0 1 4.12 3.09 12.08 12.08 0 0 1-1.31 1.5c-1.07 1.02-2.66 1.59-4.49 1.5a7.31 7.31 0 0 1-2.58-.64L7.17 6.13zM4.1 10.2a11.7 11.7 0 0 0 1.56 4.15 12.16 12.16 0 0 0 1.84 2.85 13.3 13.3 0 0 0 2.1 1.83c1.61.99 3.53 1.5 5.31 1.27a9.3 9.3 0 0 0 5.65-2.95 7.96 7.96 0 0 0 1.58-3.19 9.22 9.22 0 0 0-.59-5.18c-1.2-3.07-4.58-5.04-8.06-4.65a9.9 9.9 0 0 0-6.21 4.27 9.4 9.4 0 0 0-1.57 4.01z" />
                    </svg>
                    <p className="italic text-lg leading-relaxed mb-6">
                      &ldquo;{quote}&rdquo;
                    </p>
                    <footer className="font-semibold text-lg text-primary">
                      {author}
                    </footer>
                  </div>
                </blockquote>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section
            id="pricing"
            className="py-36 px-6 max-w-7xl mx-auto text-center"
            aria-label="Pricing plans"
          >
            <h2 className="text-5xl font-extrabold mb-20 tracking-wide">
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {PRICING_PLANS.map(({ tier, price, features, featured }, idx) => (
                <section
                  key={idx}
                  className={`rounded-3xl p-12 shadow-lg transition-transform transform ${
                    featured
                      ? "border-4 border-primary scale-105 bg-primary/10"
                      : "border border-muted hover:shadow-xl hover:scale-[1.03]"
                  } cursor-default`}
                  aria-labelledby={`plan-${tier.toLowerCase()}-title`}
                >
                  <h3
                    id={`plan-${tier.toLowerCase()}-title`}
                    className={`text-3xl font-extrabold mb-6 ${
                      featured ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {tier}
                  </h3>
                  <p className="text-6xl font-extrabold mb-10 tracking-tight text-foreground">
                    {price}
                  </p>
                  <ul
                    className="text-muted-foreground mb-12 space-y-4 text-lg text-left max-w-xs mx-auto"
                    role="list"
                  >
                    {features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-3">
                        <CheckIcon className="w-6 h-6 text-primary flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full rounded-full py-4 text-lg font-semibold transition focus:outline-none focus:ring-4 focus:ring-primary/50 ${
                      featured
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-background border border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                    aria-label={
                      tier === "Enterprise"
                        ? "Contact sales for Enterprise plan"
                        : `Get started with ${tier} plan`
                    }
                    onClick={() => {
                      if (tier === "Enterprise") {
                        router.push(WebRoutes.Contact);
                      } else {
                        router.push(WebRoutes.Register);
                      }
                    }}
                  >
                    {tier === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </button>
                </section>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section
            className="py-32 bg-gradient-to-r from-primary to-secondary text-white text-center px-6"
            aria-label="Call to action"
          >
            <h2 className="text-5xl font-extrabold mb-8 tracking-wide drop-shadow-lg">
              Supercharge Your SaaS Today
            </h2>
            <p className="text-xl max-w-xl mx-auto mb-14 leading-relaxed">
              Join top-tier founders building the next generation of SaaS
              products.
            </p>
            <button
              className="inline-flex items-center justify-center gap-4 px-14 py-5 text-lg rounded-full bg-white text-primary font-semibold hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/50 transition shadow-lg"
              onClick={() => router.push(WebRoutes.Register)}
              aria-label="Get The Startup Template now"
            >
              Get The Startup Template
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </section>
        </main>

        <footer
          className="py-10 text-center text-muted-foreground text-sm font-mono"
          role="contentinfo"
        >
          © {new Date().getFullYear()} The Startup. All rights reserved.
        </footer>
      </div>
    </>
  );
}
