import { auth } from "@/lib/auth";
import { cookies } from "next/headers";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/app-sidebar";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session?.user) return null;
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar session={session} />
      <SidebarInset className="p-2">
        <SidebarTrigger />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
