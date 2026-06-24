import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 bg-background overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}