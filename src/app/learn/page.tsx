import Link from "next/link";
import { ArrowRight, BookOpen, Star } from "lucide-react";

export default function LearnPage() {
  return (
    <div className="py-24">
      {/* 3. FEATURED LEARNING */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Learn something useful today.</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Structured, practical courses to build skills you can actually use.</p>
          </div>
          <Link href="https://selfany.com/s/DahelTechies" target="_blank" className="text-electric-blue font-medium flex items-center gap-2 hover:gap-3 transition-all">
            View all courses <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Microsoft Excel", category: "Data Analytics", level: "Beginner → Advanced" },
            { title: "SQL", category: "Data & Databases", level: "Beginner → Intermediate" },
            { title: "Power BI", category: "Business Intelligence", level: "Beginner → Advanced" },
            { title: "Python", category: "Programming • Data • AI", level: "Beginner → Advanced" },
          ].map((course, i) => (
            <div key={i} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all cursor-pointer bg-white flex flex-col h-full">
              <div className="h-48 bg-gray-50 flex items-center justify-center border-b border-gray-100 group-hover:bg-blue-50/50 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-electric-blue">
                  <BookOpen size={28} />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-electric-blue uppercase tracking-wider mb-2">{course.category}</span>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{course.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <span>{course.level}</span>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <span className="text-sm font-medium text-navy-900 flex items-center gap-1 group-hover:text-electric-blue transition-colors">
                    View <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
