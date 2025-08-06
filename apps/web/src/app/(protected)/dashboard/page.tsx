import { auth } from "@/lib/auth";
import LogoutForm from "@/components/custom/forms/logout-form";

import Image from "next/image";
import { ModeToggle } from "@/components/custom/mode-toggle";

export default async function Page() {
  const session = await auth();

  if (!session?.user) return null;
  return (
    <div>
      <h1>Dashboard</h1>
      <ModeToggle />
      {session.user.image && (
        <Image
          src={session.user.image!}
          alt="User Avatar"
          width={100}
          height={100}
        />
      )}
      <div>{JSON.stringify(session)}</div>
      <LogoutForm />
    </div>
  );
}
