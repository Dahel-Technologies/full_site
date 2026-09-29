"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, BookOpen, Briefcase, Zap, FileText, Users, Layers } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/learn", label: "Learn", icon: BookOpen },
  { href: "/training", label: "Training", icon: Briefcase },
  { href: "/quizarly", label: "Quizarly", icon: Zap },
  { href: "/news", label: "News", icon: FileText },
  { href: "/build-with-us", label: "Build", icon: Users },
  { href: "/resources", label: "Books", icon: Layers },
];

export default function BottomNav() {
  const pathname = usePathname();

  // Don't show on home page
  if (pathname === "/") return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] w-full max-w-full overflow-hidden">
      <div className="flex items-stretch overflow-x-auto scrollbar-none w-full">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`relative flex flex-col items-center justify-center gap-1 px-3 py-2.5 min-w-[64px] flex-1 shrink-0 transition-all duration-200 ${
                isActive
                  ? "text-electric-blue bg-blue-50/80"
                  : "text-gray-500 hover:text-electric-blue hover:bg-gray-50"
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              <span className={`text-[10px] font-semibold whitespace-nowrap ${isActive ? "text-electric-blue" : ""}`}>
                {label}
              </span>
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-electric-blue rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
