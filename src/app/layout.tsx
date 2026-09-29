import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0a192f",
};

export const metadata: Metadata = {
  title: "Dahel Technologies",
  description: "Dahel is where people learn, build, and access practical technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col font-sans selection:bg-magenta-light selection:text-magenta-600 overflow-x-hidden w-full max-w-full">
        <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden relative">
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0 w-full max-w-full overflow-x-hidden">{children}</main>
          <Footer />
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
