"use client";
import { Menu, Workflow } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { WebRoutes } from "../../lib/constants";
import { Button } from "../ui/button";
import { useState } from "react";

const navigationLinks = [
  { url: "/#features", name: "Features" },
  { url: "/#integrations", name: "integrations" },
  { url: "/#testimonials", name: "Testimonials" },
  { url: "/#pricing", name: "Pricing" },
  { url: "/#faq", name: "FAQ" },
  { url: "/#contact", name: "Contact" },
];

export default function LandingPageHeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Workflow className="h-5 w-5 text-primary-foreground" />
          </div>
          <Link href="/" className="text-xl font-bold">
            The-startup
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden md:inline-flex">
            <ModeToggle />
          </div>
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
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="px-4 py-4 space-y-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t flex flex-col w-full gap-2">
              <ModeToggle />
              <Link href={WebRoutes.Login}>
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href={WebRoutes.Register}>
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
