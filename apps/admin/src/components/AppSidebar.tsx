"use client";
import Link from "next/link";
import { Boxes, LayoutPanelTop, LogOut, Utensils } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  Button,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "@sip-happens/shared";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { loggedOut } from "@/store/services/slice/authSlice";
import { useLogoutMutation } from "@/store/services/api/authApi";
import { cn } from "@/lib/utils";

const AppSidebar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const cookieToken =
  typeof document !== "undefined"
    ? document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1]
    : undefined;
  const loggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const [logout] = useLogoutMutation({});
  const { openMobile,setOpenMobile } = useSidebar();
  const handleLogout = () => {
    logout()
      .unwrap()
      .then((res) => {
        console.log(res);
      });
    router.push("/auth/login");
    dispatch(loggedOut());
  };

  if (!loggedIn && !cookieToken) {
    return null;
  }
  return (
    <div
      className={cn("static w-2xs z-20 md:fixed bg-surface-container h-full",
        "md:translate-x-0 md:block",
        openMobile ? "translate-x-0" : "-translate-x-full hidden"
      )}
    >
      <SidebarHeader className="p-5 flex">
        <div>
          <h1 className="headline-md">Sip Happens</h1>
          <p className="text-sm">Admin Portal</p>
        </div>
        <SidebarTrigger className="md:hidden" onClick={()=>{setOpenMobile(true)}} />
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
      <SidebarFooter className="absolute -bottom-90 lg:bottom-1/11 left-3">
        <Button
          variant={"brown"}
          leftIcon={<LogOut />}
          onClick={() => {
            handleLogout();
          }}
          className="w-full"
        >
          Logout
        </Button>
      </SidebarFooter>
    </div>
  );
};

export default AppSidebar;
