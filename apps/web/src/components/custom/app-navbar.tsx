"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { User } from "next-auth";
import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";

import {
  Calendar,
  Smile,
  User as UserIcon,
  CreditCard,
  Calculator,
  Settings,
} from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";

export function AppNavbar(props: { user: User }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac =
        typeof navigator !== "undefined" && navigator.userAgent.includes("Mac");
      const isShortcut = isMac
        ? e.metaKey && e.key === "k"
        : e.ctrlKey && e.key === "k";

      if (isShortcut) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <>
      <header className="flex items-center gap-2 w-full">
        <SidebarTrigger />
        <div className="flex items-center justify-between w-full gap-2">
          <div className="relative w-full md:max-w-1/5">
            <Button
              variant="outline"
              className="hidden md:flex justify-between items-center gap-2 px-3 w-full max-w-md"
              onClick={() => setOpen(true)}
            >
              <span className="text-muted-foreground">
                Search or type a command...
              </span>
              <kbd className="text-xs bg-muted px-1 rounded border text-muted-foreground">
                ⌘K
              </kbd>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Avatar>
              <AvatarImage src={props.user.image!} alt={props.user.name!} />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem disabled>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Settings">
            <CommandItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
