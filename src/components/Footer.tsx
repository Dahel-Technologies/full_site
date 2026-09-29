import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image src="/DahelTechnologies_logo.png" alt="Dahel Technologies logo" width={60} height={60} className="w-auto h-12 object-contain mix-blend-multiply" />
              <span className="font-bold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Dahel Technologies</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Technology • Education • Impact
            </p>
            <div className="space-y-4 text-sm text-gray-400 mb-8">
              <div className="flex gap-3"><div className="mt-0.5 shrink-0"><MapPin size={16}/></div> <span>730 E McKellips Rd. Tempe, Arizona, 85288.</span></div>
              <div className="flex gap-3"><div className="mt-0.5 shrink-0"><MapPin size={16}/></div> <span>17 CMD Road, Ketu Ikosi, Lagos, Nigeria.</span></div>
              <div className="flex gap-3"><div className="mt-0.5 shrink-0"><MapPin size={16}/></div> <span>82 Calabar Road Miniplex, Calabar, Nigeria.</span></div>
            </div>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="mailto:contactdahelgroup@gmail.com" className="flex items-start gap-3 hover:text-white transition-colors break-all"><Mail size={16} className="shrink-0 mt-0.5"/> <span>contactdahelgroup@gmail.com (Partnerships)</span></a>
              <a href="mailto:daheltechies@gmail.com" className="flex items-start gap-3 hover:text-white transition-colors break-all"><Mail size={16} className="shrink-0 mt-0.5"/> <span>daheltechies@gmail.com (Inquiries)</span></a>
              <a href="https://wa.me/2347047581704" target="_blank" className="flex items-start gap-3 hover:text-white transition-colors break-words"><MessageCircle size={16} className="shrink-0 mt-0.5"/> <span>+234 704 758 1704 (WhatsApp - Nora)</span></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Learn</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="https://selfany.com/s/DahelTechies" target="_blank" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="/training" className="hover:text-white transition-colors">Private Training</Link></li>
              <li><Link href="/training" className="hover:text-white transition-colors">Group Training</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Books & Resources</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Programs & Webinars</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="https://www.quizarly.com/" target="_blank" className="hover:text-white transition-colors">Quizarly</Link></li>
              <li><Link href="https://www.checkamo.com/" target="_blank" className="hover:text-white transition-colors">Checkamo</Link></li>
              <li><Link href="https://www.ekko-now.com/" target="_blank" className="hover:text-white transition-colors">Ekko Now</Link></li>
              <li><Link href="/ai" className="hover:text-white transition-colors">AI Tools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">In the News</Link></li>
              <li><Link href="/partners" className="hover:text-white transition-colors">Partners & Orgs</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Community</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="https://t.me/daheltechies" target="_blank" className="hover:text-white transition-colors">Telegram Community</Link></li>
              <li><Link href="https://t.me/daheltechiesjobs" target="_blank" className="hover:text-white transition-colors">Tech Jobs Board</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="https://www.linkedin.com/company/daheltechnologies/" target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="https://www.instagram.com/dahel_technologies?stkn=MTFmYXg4ZjhkdWI4ZA==" target="_blank" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="https://www.facebook.com/share/1NVtEDe3Df/" target="_blank" className="hover:text-white transition-colors">Facebook</Link>
            <Link href="https://x.com/dahel_techies" target="_blank" className="hover:text-white transition-colors">X</Link>
            <Link href="https://www.tiktok.com/@daheltechies?_r=1&_t=ZS-99kzQ8e3xVw" target="_blank" className="hover:text-white transition-colors">TikTok</Link>
          </div>
          <p className="text-center md:text-right">© 2026 Dahel Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
