import type { Metadata } from "next";
import { Playfair_Display,Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


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
      className={cn("h-full bg-background", "antialiased", playfair.variable, jakarta_sans.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
