import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "@sip-happens/shared/globals.css";
import { cn } from "@/lib/utils";
import {
  SidebarProvider,
} from "@sip-happens/shared";
import AppSidebar from "@/components/AppSidebar";
import Header from "@/components/Header";
import Providers from "@/components/Provider";

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
        <Providers>
        <SidebarProvider>
          {AppSidebar && (
            <div>
              <AppSidebar />
            </div>
          )}
          <main className="w-full h-full">
            <Header />
            {children}
            <footer className="mt-lg fixed bottom-0 w-full border-t border-outline-variant/10 py-5 px-5 bg-surface-container">
              <p className="text-on-surface-variant label-sm">
                © 2026 Sip Happens Artisanal Café. Admin Console v1.0.0
              </p>
            </footer>
          </main>
        </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
