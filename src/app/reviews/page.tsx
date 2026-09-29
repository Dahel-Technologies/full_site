import { Star, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div className="pb-24 min-h-screen bg-gray-50 w-full max-w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-amber-50 to-gray-50 pt-20 sm:pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-100/30 blur-3xl rounded-full -z-10" />
        <div className="max-w-7xl mx-auto w-full text-center flex flex-col items-center">
          <span className="text-amber-600 font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">Success Stories</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-navy-900 max-w-3xl leading-[1.15] mb-6">
            Real people. <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Real progress.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-10">
            See what our students and partners have to say about learning and building with Dahel Technologies.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pt-8">

        <div className="mb-16">
          <Link href="https://youtu.be/BNnOZjqqFTM?si=Pvx1gjwcg5KRESrA" target="_blank" className="block w-full max-w-3xl mx-auto bg-navy-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/30 blur-3xl rounded-full" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-electric-blue transition-colors">
                <PlayCircle size={40} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Watch Video Reviews</h3>
                <p className="text-gray-300">Hear directly from our alumni and community members about their experience learning with us.</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex text-amber-400 mb-6">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <p className="text-xl md:text-2xl font-medium text-navy-900 mb-8 leading-snug">
              "I secured a mid-senior supervisory role as an analyst in the UK."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-electric-blue font-bold">C</div>
              <div>
                <div className="font-bold text-navy-900">Chidi</div>
                <div className="text-gray-500 text-sm">Private Training Student</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex text-amber-400 mb-6">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <p className="text-xl md:text-2xl font-medium text-navy-900 mb-8 leading-snug">
              "The curriculum was practical and immediately applicable to my daily work."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-magenta-100 rounded-full flex items-center justify-center text-magenta-600 font-bold">A</div>
              <div>
                <div className="font-bold text-navy-900">Amina</div>
                <div className="text-gray-500 text-sm">Data Analytics Course</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
