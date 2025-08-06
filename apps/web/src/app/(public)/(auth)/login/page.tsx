import Image from "next/image";
import LoginForm from "@/components/custom/forms/login-form";
import LoginWithGithubForm from "@/components/custom/forms/login-with-github-form";
import LoginWithGoogleForm from "@/components/custom/forms/login-with-google-form";
import { Routes } from "@/lib/routes";

export default async function Page() {
  return (
    <div className="h-screen flex justify-center">
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
        <div className="lg:w-1/2 flex flex-col gap-4 p-8 items-center justify-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
          <LoginForm />
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
          <LoginWithGithubForm />
          <LoginWithGoogleForm />
          <div className="w-full text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href={Routes.Register} className="underline underline-offset-4">
              Sign up
            </a>
          </div>
          <div className="w-full text-center text-xs">
            <p>
              By clicking login, you agree to our
              <a href={Routes.Tos} className="underline underline-offset-4">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href={Routes.Tos} className="underline underline-offset-4">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:w-1/2 bg-muted relative lg:block">
        <Image
          src="https://picsum.dev/1000/1000"
          alt="Image"
          fill
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.7] dark:grayscale"
        />
      </div>
    </div>
  );
}
