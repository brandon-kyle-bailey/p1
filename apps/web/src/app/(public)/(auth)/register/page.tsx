import LoginWithGithubForm from "@/components/custom/forms/login-with-github-form";
import LoginWithGoogleForm from "@/components/custom/forms/login-with-google-form";
import Image from "next/image";
import RegisterForm from "@/components/custom/forms/register-form";
import { Routes } from "@/lib/routes";

export default async function Page() {
  return (
    <div className="h-screen flex justify-center">
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
        <div className="lg:w-1/2 flex flex-col gap-4 p-8 items-center justify-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to create your account
          </p>
          <RegisterForm />
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
          <LoginWithGithubForm />
          <LoginWithGoogleForm />
          <div className="w-full text-center text-sm">
            Already have an account?{" "}
            <a href={Routes.Login} className="underline underline-offset-4">
              Login
            </a>
          </div>
          <div className="w-full text-center text-xs">
            <p>
              By clicking register, you agree to our
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
