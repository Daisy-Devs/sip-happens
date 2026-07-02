"use client";
import { useAppSelector } from "@/store/store";
import { UserCircle2 } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathName = usePathname();
    const loggedIn=useAppSelector((state) => state.auth.isAuthenticated);
    
  if(!loggedIn){
    return null
  }
  return (
    <header className="sticky top-0 w-full bg-background z-40 px-16 py-4 flex justify-between items-center border-b border-outline-variant/10">
      <div>
        <h1 className="headline-lg text-headline-lg text-primary">
          {pathName === "/" ? "Dashboard Overview" : pathName === "/menu-management" ? "Menu Management" : pathName === "/categories" ? "Category Management" : ""}
        </h1>
        <p className="text-on-surface-variant body-md">Welcome back, Alex.</p>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-surface-container rounded-full">
            <UserCircle2 className="w-full h-full" />
          </div>
          <div className="text-right hidden sm:block">
            <p className="font-label-md text-on-surface">Alex Thompson</p>
            <p className="text-xs text-on-surface-variant">
              Store Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
