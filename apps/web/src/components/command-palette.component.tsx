"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Code2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { WebRoutes } from "../lib/constants";
import { data } from "@/components/sidebar/sidebar.component";

export default function CommandPalleteComponent(props: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const router = useRouter();

  function handleSelect(url: string) {
    props.setOpen(false); // close dialog
    router.push(url); // navigate
  }

  return (
    <CommandDialog open={props.open} onOpenChange={props.setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => handleSelect(WebRoutes.Dashboard)}>
            <Code2 className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Links">
          {data.navMain.map((nav, navIndex) => (
            <CommandItem
              key={`${navIndex}-${navIndex}`}
              onSelect={() => handleSelect(nav.url)}
            >
              <nav.icon className="mr-2 h-4 w-4" />
              <span>{nav.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
