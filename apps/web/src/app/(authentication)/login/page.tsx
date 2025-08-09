import LoginWithGithubForm from "@/components/forms/authentication/login-with-github.form";
import LoginForm from "@/components/forms/authentication/login.form";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WebRoutes } from "@/lib/constants";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";
import DisclaimerComponent from "@/components/disclaimer.component";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <a
        href="#"
        className="flex items-center gap-4 self-center font-medium text-2xl"
      >
        <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
          <GalleryVerticalEnd className="size-4" />
        </div>
        Acme Inc.
      </a>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email address and password below to login to your account
          </CardDescription>
          <CardAction>
            <Link
              href={WebRoutes.Register}
              className="underline text-muted-foreground hover:text-primary"
            >
              Sign Up
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <LoginForm />
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="w-full flex gap-4">
            <LoginWithGithubForm />
            {/* <LoginWithGoogleForm /> */}
          </div>
          <DisclaimerComponent />
        </CardFooter>
      </Card>
    </main>
  );
}
