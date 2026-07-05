"use client";
import { useAppSelector } from "@/store/store";
import { SidebarTrigger, Switch } from "@sip-happens/shared";
import { UserCircle2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
const Header = () => {
  const pathName = usePathname();
  const loggedIn = useAppSelector((state) => state.auth.isAuthenticated);
  const User = useAppSelector((state) => state.auth.user);
  const {setTheme,theme} =useTheme()
  if (!loggedIn) {
    return null;
  }
  return (
    <header className="sticky md:pl-80 top-0 left-90 w-full bg-background z-9 px-16 py-4 md:flex justify-between items-center border-b border-outline-variant/10">
        <SidebarTrigger className="md:hidden"/>
        <div>
        <h1 className="headline-lg text-headline-lg text-primary">
          {pathName === "/"
            ? "Dashboard Overview"
            : pathName === "/menu-management"
              ? "Menu Management"
              : pathName === "/categories"
                ? "Category Management"
                : ""}
        </h1>
        <p className="text-on-surface-variant body-md">
          Welcome back, {User?.name?.split(" ")[0]}.
        </p>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <Switch checked={theme === "dark"} onCheckedChange={(prev)=>{setTheme(theme === "dark" ? "light" : "dark")}} className="bg-[url('/Container.png')] bg-contain bg-center bg-no-repeat data-[state=checked]:bg-primary"/>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-surface-container rounded-full hidden md:block">
            <UserCircle2 className="w-full h-full" />
          </div>
          <div className="text-right hidden sm:block">
            <p className="font-label-md text-on-surface">{User?.name}</p>
            <p className="text-xs text-on-surface-variant">{User?.position}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
