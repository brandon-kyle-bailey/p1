import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export default function SidebarHeaderComponent({
  team,
}: {
  team: {
    name: string;
    logo: React.ElementType;
    plan: string;
  };
}) {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem className="flex gap-2">
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <team.logo className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{team.name}</span>
            <span className="truncate text-xs">{team.plan}</span>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
