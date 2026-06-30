"use client";
import Link from "next/link";
import { LayoutPanelTop, Utensils } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SidebarHeader } from "@sip-happens/shared";

const AppSidebar = () => {
  const pathname = usePathname();
  const [loggedIn, setLoggedIn] = useState(true);
  if (!loggedIn) {
    return null;
  }
  return (
    <div className={"absolute z-20 md:static bg-surface-container h-screen"}>
      <SidebarHeader className="p-5">
        <h1 className="headline-md">Sip Happens</h1>
        <p className="text-sm">Admin Portal</p>
      </SidebarHeader>

      <nav className="flex flex-col px-4 space-y-2 mt-4">
        <Link
          className={
            "flex items-center gap-3 px-4 py-3 rounded-xl label-md text-on-surface-variant" +
            (pathname === "/"
              ? " bg-secondary-container text-on-secondary-container"
              : "")
          }
          href="/"
        >
          {<LayoutPanelTop />}
          Overview
        </Link>
        <Link
          className={
            "flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors label-md" +
            (pathname === "/menu-management"
              ? " bg-secondary-container text-on-secondary-container"
              : "")
          }
          href="/menu-management"
        >
          {<Utensils />}
          Menu Management
        </Link>
      </nav>
    </div>
  );
};

export default AppSidebar;
