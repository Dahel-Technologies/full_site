import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/DahelTechnologies_logo.png" alt="Dahel Technologies" width={160} height={60} className="w-auto h-12 object-contain" priority />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
          <Link href="/learn" className="hover:text-electric-blue transition-colors">Learn</Link>
          <Link href="/training" className="hover:text-electric-blue transition-colors">Training</Link>
          <Link href="/quizarly" className="hover:text-electric-blue transition-colors">Quizarly</Link>
          <Link href="/resources" className="hover:text-electric-blue transition-colors">Books & Resources</Link>
          <Link href="/ai" className="hover:text-electric-blue transition-colors">AI Tools</Link>
          <Link href="/about" className="hover:text-electric-blue transition-colors">About</Link>
        </div>

        <div className="hidden md:flex items-center">
          <Link href="/about" className="flex items-center gap-2 bg-navy-900 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-navy-800 transition-colors">
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>

        <button className="md:hidden text-gray-900">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
