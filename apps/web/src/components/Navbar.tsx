"use client";
import { nomenclature } from "../../../../packages/shared/constants/nomenclature";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../../../../packages/shared/components/ui/button";
import { Switch } from "../../../../packages/shared/components/ui/switch";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { resolvedTheme:theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="h-16 px-6 flex items-center justify-between bg-[#765847]/10">
      <div className="flex items-center gap-3">
        <Link href="/">
          <p className="text-xl font-extrabold text-[#231005]">
            {nomenclature.PRODUCT_NAME}
          </p>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <Link
          href="/"
          className={`text-sm hover:underline underline-offset-8 decoration-[#C68B59] ${
            pathname === "/"
              ? "font-bold underline decoration-[#C68B59] decoration-2"
              : "font-light"
          }`}
        >
          {nomenclature.HOME}
        </Link>
        <Link
          href="/menu"
          className={`text-sm hover:underline underline-offset-8 decoration-[#C68B59] ${
            pathname === "/menu"
              ? "font-bold underline decoration-[#C68B59] decoration-2"
              : "font-light"
          }`}
        >
          {nomenclature.MENU}
        </Link>
        <Link
          href="/gallery"
          className={`text-sm hover:underline underline-offset-8 decoration-[#C68B59] ${
            pathname === "/gallery"
              ? "font-bold underline decoration-[#C68B59] decoration-2"
              : "font-light"
          }`}
        >
          {nomenclature.GALLERY}
        </Link>
        <Link
          href="/about"
          className={`text-sm hover:underline underline-offset-8 decoration-[#C68B59] ${
            pathname === "/about"
              ? "font-bold underline decoration-[#C68B59] decoration-2"
              : "font-light"
          }`}
        >
          {nomenclature.ABOUT}
        </Link>
        <Link
          href="/contact"
          className={`text-sm hover:underline underline-offset-8 decoration-[#C68B59] ${
            pathname === "/contact"
              ? "font-bold underline decoration-[#C68B59] decoration-2"
              : "font-light"
          }`}
        >
          {nomenclature.CONTACT}
        </Link>
      </div>
      <div>
        <Switch
          checked={theme === "dark"}
          onCheckedChange={(checked) =>{ setTheme(checked ? "dark" : "light");
            console.log("checked",checked,theme);
            
          }}
          className="bg-[url('/Container.png')] bg-contain bg-center bg-no-repeat data-[state=checked]:bg-primary mr-3"
        />

        <Button
          variant="brown"
          text="Call to Order"
          size="sm"
          onClick={() => router.push("/contact")}
        />
      </div>
    </div>
  );
};
export default Navbar;
