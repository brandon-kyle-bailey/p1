import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Workflow } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  product: [
    { url: "/#features", name: "Features" },
    { url: "/#integrations", name: "integrations" },
    { url: "/#testimonials", name: "Testimonials" },
    { url: "/#pricing", name: "Pricing" },
    { url: "/#faq", name: "FAQ" },
  ],
  company: [
    { url: "/about", name: "About Us" },
    { url: "/careers", name: "Careers" },
    { url: "/contact", name: "Contact" },
  ],
  resources: [
    { url: "/docs", name: "Documentation" },
    { url: "/help-center", name: "Help Center" },
    { url: "/blog", name: "Blog" },
    { url: "/status", name: "Status" },
  ],
  legal: [
    { url: "/privacy-policy", name: "Privacy Policy" },
    { url: "/terms-of-service", name: "Terms of Service" },
    { url: "/cookie-policy", name: "Cookie Policy" },
  ],
};

export default function LandingPageFooterComponent() {
  return (
    <footer id="contact" className="border-t p-8 bg-background">
      <div className="flex flex-col justify-between gap-4">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Workflow className="h-5 w-5 text-primary-foreground" />
            </div>
            <Link href="/" className="text-xl font-bold">
              The-startup
            </Link>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base">
            Automatically track developer contributions and amplify team impact
            with The-startup.
          </p>
          <div className="flex space-x-4">
            <Button size="icon" variant="ghost" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" aria-label="Email">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {Object.keys(footerLinks).map((section) => {
          const links = footerLinks[section as keyof typeof footerLinks];
          return (
            <div key={section} className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold capitalize">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h3>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.url}
                      className="hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-muted-foreground text-sm sm:text-base">
        <p>
          &copy; {new Date().getFullYear()} The-startup. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
