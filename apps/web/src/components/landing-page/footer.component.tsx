import { Github, Linkedin, Mail, Twitter, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WebRoutes } from "@/lib/constants";

export default function LandingPageFooterComponent() {
  return (
    <footer id="contact" className="border-t bg-muted/50 p-8">
      <div className="px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Workflow className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Lumino</span>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base">
              Automatically track developer contributions and amplify team
              impact with Lumino.
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

          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Product</h3>
            <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>
                <Link
                  href="#features"
                  className="hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#integrations"
                  className="hover:text-foreground transition-colors"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#api"
                  className="hover:text-foreground transition-colors"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href="#security"
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
                  href="#about"
                  className="hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={WebRoutes.Blog}
                  className="hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#careers"
                  className="hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#press"
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
                  href="#help-center"
                  className="hover:text-foreground transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#status"
                  className="hover:text-foreground transition-colors"
                >
                  Status
                </Link>
              </li>
              <li>
                <Link
                  href={WebRoutes.PrivacyPolicy}
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-muted-foreground text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Lumino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
