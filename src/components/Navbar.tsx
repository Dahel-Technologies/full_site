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

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO: Navigates to Home */}
        <Link href="/" className="flex items-center" aria-label="Dahel Technologies Home">
          <Image 
            src="/DahelTechnologies_logo.png" 
            alt="Dahel Technologies" 
            width={160} 
            height={60} 
            className="w-auto h-12 object-contain mix-blend-multiply" 
            priority 
          />
        </Link>
        
        {/* ONLY NECESSARY MENUS AT THE TOP */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-gray-700">
          <Link 
            href="/privatesessions" 
            className={`transition-colors hover:text-electric-blue ${
              pathname === "/privatesessions" ? "text-electric-blue font-bold" : ""
            }`}
          >
            Private
          </Link>
          <Link 
            href="/groupclasses" 
            className={`transition-colors hover:text-electric-blue ${
              pathname === "/groupclasses" ? "text-electric-blue font-bold" : ""
            }`}
          >
            Group
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors hover:text-electric-blue ${
              pathname === "/about" ? "text-electric-blue font-bold" : ""
            }`}
          >
            About Us
          </Link>
          <Link 
            href="/learn" 
            className={`transition-colors hover:text-electric-blue ${
              pathname === "/learn" ? "text-electric-blue font-bold" : ""
            }`}
          >
            Learn
          </Link>
          <Link 
            href="/news" 
            className={`transition-colors hover:text-electric-blue ${
              pathname === "/news" ? "text-electric-blue font-bold" : ""
            }`}
          >
            News
          </Link>
        </div>

        {/* ACTION BUTTONS: SUCCEED & BUILD WITH US and PROCEED WITH PAYMENTS */}
        <div className="hidden lg:flex items-center gap-3">
          <IridescentButton href="/build-with-us">
            Succeed & Build With Us
          </IridescentButton>
          <IridescentButton href="/payments">
            Proceed with Payments
          </IridescentButton>
        </div>

        {/* MOBILE MENU TOGGLE */}
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
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white/98 backdrop-blur-xl shadow-2xl border-b border-gray-200 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top-2">
          <div className="flex flex-col px-6 py-6 gap-3 text-lg text-navy-900">
            <Link 
              href="/privatesessions" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`py-2.5 border-b border-gray-100 font-semibold hover:text-electric-blue ${
                pathname === "/privatesessions" ? "text-electric-blue" : ""
              }`}
            >
              Private
            </Link>
            <Link 
              href="/groupclasses" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`py-2.5 border-b border-gray-100 font-semibold hover:text-electric-blue ${
                pathname === "/groupclasses" ? "text-electric-blue" : ""
              }`}
            >
              Group
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`py-2.5 border-b border-gray-100 font-semibold hover:text-electric-blue ${
                pathname === "/about" ? "text-electric-blue" : ""
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/learn" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`py-2.5 border-b border-gray-100 font-semibold hover:text-electric-blue ${
                pathname === "/learn" ? "text-electric-blue" : ""
              }`}
            >
              Learn
            </Link>
            <Link 
              href="/news" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`py-2.5 border-b border-gray-100 font-semibold hover:text-electric-blue ${
                pathname === "/news" ? "text-electric-blue" : ""
              }`}
            >
              News
            </Link>
            
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
