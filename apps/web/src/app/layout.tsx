import "@sip-happens/shared/globals.css";
import { Playfair_Display,Plus_Jakarta_Sans } from "next/font/google";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Footer, Navbar, Toaster } from "@sip-happens/shared";
import Providers from "@/components/Providers";


const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const jakarta_sans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sip Happens",
  description: "A full-stack demo project built to showcase modern web application development. Features a public-facing cafeteria website with a secure admin dashboard, all in a single monorepo.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", playfair.variable, jakarta_sans.variable, "font-sans")}>
      <body>
        <Providers>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 bg-background overflow-y-auto">
            {children}
          </main>
        </div>
        <Toaster position="top-center"/>
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}