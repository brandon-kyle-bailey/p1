"use client";
import CommandPalleteComponent from "@/components/command-palette.component";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import AvatarComponent from "@/components/avatar.component";
import { ModeToggle } from "./theme/mode-toggle";

export function NavbarComponent() {
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
      <header className="flex items-center gap-2 w-full p-2">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <div className="flex items-center justify-between w-full gap-2">
          <div className="relative w-full md:w-2/5 lg:w-1/5">
            <Button
              variant="outline"
              className="hidden md:flex justify-between items-center gap-2 w-full"
              onClick={() => setOpen(true)}
            >
              <span className="text-muted-foreground overflow-hidden">
                Search or type a command...
              </span>
              <kbd className="text-xs bg-muted -m-1 p-1 rounded border text-muted-foreground">
                ⌘K
              </kbd>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <AvatarComponent />
          </div>
        </div>
      </header>
      <CommandPalleteComponent open={open} setOpen={setOpen} />
    </>
  );
}
