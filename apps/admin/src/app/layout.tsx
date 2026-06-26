import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "@sip-happens/shared/globals.css";
import { cn } from "@/lib/utils";
import {
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@sip-happens/shared";
import AppSidebar from "@/components/AppSidebar";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const jakarta_sans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sip Happens Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full bg-background",
        "antialiased",
        playfair.variable,
        jakarta_sans.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        {" "}
        <SidebarProvider>
          <div>
            <SidebarHeader className="p-5">
              <h1 className="headline-md">Sip Happens</h1>
              <p className="text-sm">Admin Portal</p>
            </SidebarHeader>
            <AppSidebar />
          </div>
          <main className="w-full">
            {children}
            <footer className="mt-lg border-t border-outline-variant/10 py-5 px-5 bg-surface-container">
                <p className="text-on-surface-variant label-sm">
                  © 2026 Sip Happens Artisanal Café. Admin Console v1.0.0
                </p>
            </footer>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
