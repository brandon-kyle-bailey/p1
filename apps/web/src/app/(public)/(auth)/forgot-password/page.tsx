import Image from "next/image";
import ResetPasswordForm from "@/components/custom/forms/rest-password-form";
import { Routes } from "@/lib/routes";

export default async function Page() {
  return (
    <div className="h-screen flex justify-center">
      <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
        <div className="lg:w-1/2 flex flex-col gap-4 p-8 items-center justify-center">
          <h1 className="text-2xl font-bold">Reset your password</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to reset your password
          </p>
          <ResetPasswordForm />
          <div className="w-full text-center text-sm">
            Already know your password?{" "}
            <a href={Routes.Login} className="underline underline-offset-4">
              Log in
            </a>
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
