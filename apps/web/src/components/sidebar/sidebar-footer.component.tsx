import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ChevronsUpDown } from "lucide-react";
import { User } from "next-auth";
import AvatarDropdownComponent from "@/components/avatar-dropdown.component";

export default function SidebarFooterComponent({ user }: { user: User }) {
  const { isMobile } = useSidebar();

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <AvatarDropdownComponent isMobile={isMobile} user={user}>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs">{user.email}</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </AvatarDropdownComponent>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
