"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import IridescentButton from "@/components/IridescentButton";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isSpecialPage = pathname === "/privatesessions" || pathname === "/groupclasses";
  const isHome = pathname === "/";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <Image 
              src="/DahelTechnologies_logo.png" 
              alt="Dahel Technologies" 
              width={160} 
              height={60} 
              className="w-auto h-12 object-contain mix-blend-multiply" 
              priority 
            />
          </Link>
          
          {/* Home Link - only bold on home page */}
          <Link 
            href="/" 
            className={`text-sm transition-colors ${
              isHome 
                ? "font-bold text-navy-900" 
                : "font-normal text-gray-600 hover:text-navy-900"
            }`}
          >
            Home
          </Link>
        </div>
        
        {/* Navigation items */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5 text-sm">
          {/* Primary session links */}
          <div className="flex items-center gap-2 mr-2">
            <Link 
              href="/privatesessions" 
              className={`px-3.5 py-1.5 rounded-full transition-all text-xs font-semibold tracking-wider ${
                pathname === "/privatesessions" 
                  ? "bg-navy-900 text-white shadow-sm" 
                  : "text-gray-700 hover:text-navy-900 hover:bg-gray-100"
              }`}
            >
              Private Sessions
            </Link>
            <Link 
              href="/groupclasses" 
              className={`px-3.5 py-1.5 rounded-full transition-all text-xs font-semibold tracking-wider ${
                pathname === "/groupclasses" 
                  ? "bg-purple-700 text-white shadow-sm" 
                  : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
              }`}
            >
              Group Classes
            </Link>
          </div>

          {/* Other headers: blurred and dimmed when /privatesessions or /groupclasses is open */}
          <div className={`flex items-center gap-4 xl:gap-5 transition-all duration-300 ${
            isSpecialPage 
              ? "opacity-25 blur-[1px] hover:blur-none hover:opacity-100" 
              : "opacity-100 blur-none font-medium text-gray-600"
          }`}>
            <Link href="/about" className="hover:text-electric-blue transition-colors">About Us</Link>
            <Link href="/learn" className="hover:text-electric-blue transition-colors">Learn</Link>
            <Link href="/training" className="hover:text-electric-blue transition-colors">Training</Link>
            <Link href="/quizarly" className="hover:text-electric-blue transition-colors">Quizarly</Link>
            <Link href="/resources" className="hover:text-electric-blue transition-colors">Books & Resources</Link>
            <Link href="/news" className="hover:text-electric-blue transition-colors">News</Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <IridescentButton href="/build-with-us">
            Succeed & Build With Us
          </IridescentButton>
          <IridescentButton href="/payments">
            Proceed with Payments
          </IridescentButton>
        </div>

        <button 
          className="lg:hidden text-gray-900 p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top-2">
          <div className="flex flex-col px-6 py-6 gap-3 text-lg text-navy-900">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`py-2.5 border-b border-gray-100 ${isHome ? "font-bold text-navy-900" : "font-medium text-gray-700"}`}
            >
              Home
            </Link>
            <Link 
              href="/privatesessions" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`py-2.5 border-b border-gray-100 font-semibold ${pathname === "/privatesessions" ? "text-electric-blue" : "text-gray-800"}`}
            >
              Private Sessions
            </Link>
            <Link 
              href="/groupclasses" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`py-2.5 border-b border-gray-100 font-semibold ${pathname === "/groupclasses" ? "text-purple-600" : "text-gray-800"}`}
            >
              Group Classes
            </Link>
            
            {/* Other headers on mobile: blurred when on special pages */}
            <div className={`flex flex-col gap-2 pt-2 ${
              isSpecialPage ? "opacity-30 blur-[0.5px] hover:blur-none hover:opacity-100 transition-all" : "opacity-100"
            }`}>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-2 text-base text-gray-600 hover:text-electric-blue">About Us</Link>
              <Link href="/learn" onClick={() => setMobileMenuOpen(false)} className="py-2 text-base text-gray-600 hover:text-electric-blue">Learn</Link>
              <Link href="/training" onClick={() => setMobileMenuOpen(false)} className="py-2 text-base text-gray-600 hover:text-electric-blue">All Training</Link>
              <Link href="/quizarly" onClick={() => setMobileMenuOpen(false)} className="py-2 text-base text-gray-600 hover:text-electric-blue">Quizarly</Link>
              <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="py-2 text-base text-gray-600 hover:text-electric-blue">Books & Resources</Link>
              <Link href="/news" onClick={() => setMobileMenuOpen(false)} className="py-2 text-base text-gray-600 hover:text-electric-blue">News</Link>
            </div>
            
            <div className="flex flex-col gap-3 mt-4 pt-2">
              <IridescentButton href="/build-with-us" className="w-full justify-center">
                Succeed & Build With Us
              </IridescentButton>
              <IridescentButton href="/payments" className="w-full justify-center">
                Proceed with Payments
              </IridescentButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
