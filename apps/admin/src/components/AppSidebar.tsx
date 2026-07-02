"use client";
import Link from "next/link";
import { Boxes, LayoutPanelTop, LogOut, Utensils } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, SidebarFooter, SidebarHeader } from "@sip-happens/shared";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { loggedOut } from "@/store/services/slice/authSlice";
import { useLogoutMutation } from "@/store/services/api/authApi";

const AppSidebar = () => {
  const pathname = usePathname();
  const dispatch=useDispatch();
  const router = useRouter();
  const loggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const [mounted, setMounted] = useState(false);
  const [logout]=useLogoutMutation({});
  const handleLogout = () => {
        logout().unwrap().then((res) => {console.log("hahha",res);
        });
    router.push("/auth/login");
    dispatch(loggedOut()); 
  }
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (!loggedIn) {
    return null;
  }
  return (
    <div className={"absolute z-20 md:static bg-surface-container h-full"}>
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
        <Link
          className={
            "flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors label-md" +
            (pathname === "/categories"
              ? " bg-secondary-container text-on-secondary-container"
              : "")
          }
          href="/categories"
        >
          {<Boxes />}
          Categories
        </Link>
      </nav>
      <SidebarFooter className="fixed bottom-5 left-3">
        <Button variant={'brown'} leftIcon={<LogOut />} onClick={() => {handleLogout();}} className="w-full">Logout</Button>
      </SidebarFooter>
    </div>
  );
};

export default AppSidebar;
