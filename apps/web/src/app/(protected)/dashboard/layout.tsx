import { AppSidebar } from "@/components/sidebar.component";
import { NavbarComponent } from "@/components/navbar.component";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import getCookiesStore from "@/hooks/get-cookies-store.hook";
import { Cookies } from "@/lib/constants";
import { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const [, , getCookie] = await getCookiesStore();
  const defaultOpen = getCookie(Cookies.SidebarState) === "true";

  return (
    <SessionProvider session={session}>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar session={session!} />
        <SidebarInset className="p-2 bg-inherit">
          <NavbarComponent />
          <main className="min-h-screen lg:p-8 flex flex-col gap-8">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </SessionProvider>
  );
}
