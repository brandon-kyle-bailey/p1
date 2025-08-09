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
import ResetPasswordForm from "@/components/forms/authentication/reset-password.form";
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
          <CardTitle>Reset your password</CardTitle>
          <CardDescription>
            Enter your email address below to reset your password.
          </CardDescription>
          <CardAction>
            <Link href={WebRoutes.Login} className="underline">
              Login
            </Link>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <ResetPasswordForm />
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <DisclaimerComponent />
        </CardFooter>
      </Card>
    </main>
  );
}
