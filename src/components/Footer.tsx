import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-bold text-2xl tracking-tight mb-4">DAHEL TECHNOLOGIES</h3>
            <p className="text-gray-400 max-w-sm mb-6">
              Technology • Education • Impact
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="mailto:contactdahelgroup@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={16}/> contactdahelgroup@gmail.com (Partnerships)</a>
              <a href="mailto:daheltechies@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={16}/> daheltechies@gmail.com (Inquiries)</a>
              <a href="https://wa.me/2347047581704" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors"><MessageCircle size={16}/> +234 704 758 1704 (WhatsApp - Nora)</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Learn</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="https://selfany.com/s/DahelTechies" target="_blank" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="https://selfany.com/daheltechprivatesessions" target="_blank" className="hover:text-white transition-colors">Private Training</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Group Training</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Books & Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="https://www.quizarly.com/" target="_blank" className="hover:text-white transition-colors">Quizarly</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Checkamo</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Ekko Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Impact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
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
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">Facebook</Link>
            <Link href="#" className="hover:text-white transition-colors">X</Link>
          </div>
          <p>© 2026 Dahel Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
