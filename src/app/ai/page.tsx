import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AIPage() {
  return (
    <div className="bg-gray-50 py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm text-magenta-600 mb-6">
            <Sparkles size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">Learning is changing. <span className="text-magenta-600">So are we.</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Use AI to learn faster, practice better and turn ideas into practical outcomes.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "AI Learning Tools", desc: "Learn and practise with AI.", color: "text-blue-600", bg: "bg-blue-50" },
            { title: "AI Studio", desc: "Create assessments and learning materials.", color: "text-purple-600", bg: "bg-purple-50" },
            { title: "AI for Work", desc: "Use AI to improve everyday professional workflows.", color: "text-emerald-600", bg: "bg-emerald-50" },
            { title: "AI Engineering", desc: "Build with AI rather than simply talking about it.", color: "text-magenta-600", bg: "bg-magenta-50" },
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="#" className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-navy-800 transition-colors">
            Explore AI <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
