"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import IridescentButton from "@/components/IridescentButton";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/DahelTechnologies_logo.png" alt="Dahel Technologies" width={160} height={60} className="w-auto h-12 object-contain mix-blend-multiply" priority />
        </Link>
        
        <div className="hidden lg:flex items-center gap-6 font-medium text-sm text-gray-600">
          <Link href="/about" className="hover:text-electric-blue transition-colors">About Us</Link>
          <Link href="/learn" className="hover:text-electric-blue transition-colors">Learn</Link>
          <Link href="/training" className="hover:text-electric-blue transition-colors">Training</Link>
          <Link href="/quizarly" className="hover:text-electric-blue transition-colors">Quizarly</Link>
          <Link href="/resources" className="hover:text-electric-blue transition-colors">Books & Resources</Link>
          <Link href="/news" className="hover:text-electric-blue transition-colors">News</Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
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
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top-2">
          <div className="flex flex-col px-6 py-6 gap-3 font-semibold text-lg text-navy-900">
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-gray-100 hover:text-electric-blue transition-colors">About Us</Link>
            <Link href="/learn" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-gray-100 hover:text-electric-blue transition-colors">Learn</Link>
            <Link href="/training" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-gray-100 hover:text-electric-blue transition-colors">Training</Link>
            <Link href="/quizarly" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-gray-100 hover:text-electric-blue transition-colors">Quizarly</Link>
            <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-gray-100 hover:text-electric-blue transition-colors">Books & Resources</Link>
            <Link href="/news" onClick={() => setMobileMenuOpen(false)} className="py-2.5 border-b border-gray-100 hover:text-electric-blue transition-colors">News</Link>
            
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
