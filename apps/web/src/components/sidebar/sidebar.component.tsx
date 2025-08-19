"use client";

import { Command, SquareTerminal } from "lucide-react";
import * as React from "react";

import { Sidebar, SidebarRail } from "@/components/ui/sidebar";

import { WebRoutes } from "@/lib/constants";
import { Session } from "next-auth";
import SidebarContentComponent from "./sidebar-content.component";
import SidebarHeaderComponent from "./sidebar-header.component";
import SidebarFooterComponent from "./sidebar-footer.component";

export const data = {
  team: {
    name: "The-startup",
    logo: Command,
    plan: "Free",
  },
  navMain: [
    {
      title: "Dashboard",
      url: WebRoutes.Dashboard,
      icon: SquareTerminal,
      isActive: true,
    },
  ],
};

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar> & { session: Session }) {
  return (
    <Sidebar variant="floating" collapsible="icon" {...props}>
      <SidebarHeaderComponent team={data.team} />
      <SidebarContentComponent items={data.navMain} />
      <SidebarFooterComponent user={props.session.user} />
      <SidebarRail />
    </Sidebar>
  );
}
