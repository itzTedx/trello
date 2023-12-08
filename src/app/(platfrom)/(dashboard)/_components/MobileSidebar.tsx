"use client";

import { usePathname } from "next/navigation";

import { useMobileSidebar } from "@/hooks/useMobileSidebar";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./Sidebar";

export const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <Button
      onClick={onOpen}
      variant="ghost"
      size="sm"
      className="block md:hidden mr-2"
    >
      <Menu className="h-4 w-4" />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="top">
          <Sidebar storageKey="t-sidebar-mobile-state" />
        </SheetContent>
      </Sheet>
    </Button>
  );
};
