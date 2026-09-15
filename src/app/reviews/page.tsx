import { Star, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div className="bg-gray-50 py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Real people. Real progress.</h2>
            <p className="text-lg text-gray-600 max-w-2xl">See what our students and partners have to say about Dahel Technologies.</p>
          </div>
        </div>

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
