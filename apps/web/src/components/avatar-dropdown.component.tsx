import { LogOut } from "lucide-react";
import { User } from "next-auth";
import { SignOutServerAction } from "../actions/authentication/server/sign-out.action";
import AvatarComponent from "./avatar.component";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SidebarMenuButton } from "./ui/sidebar";

export default function AvatarDropdownComponent({
  isMobile,
  user,
  children,
}: Readonly<{
  isMobile: boolean;
  user: User;
  children?: React.ReactNode;
}>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <AvatarComponent user={user} />
          {children}
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        side={isMobile ? "bottom" : "right"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <AvatarComponent user={user} />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a
            className="w-full flex justify-start gap-2 items-center"
            onClick={() => SignOutServerAction()}
          >
            <LogOut />
            Log out
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
