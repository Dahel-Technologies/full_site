import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import SplitFlapText from "@/components/animations/SplitFlapText";

export default function AIPage() {
  return (
    <div className="pb-24 min-h-screen w-full max-w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-magenta-50 to-white pt-20 sm:pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-magenta-100/30 blur-3xl rounded-full -z-10" />
        <div className="max-w-7xl mx-auto w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-sm text-magenta-600 mb-6">
            <Sparkles size={28} className="sm:w-8 sm:h-8" />
          </div>
          <span className="text-magenta-600 font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 block">Dahel AI Tools</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-navy-900 max-w-3xl leading-[1.2] mb-6 flex flex-col items-center gap-3 sm:gap-4">
            <SplitFlapText text="LEARNING IS CHANGING" className="text-lg sm:text-2xl md:text-5xl" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-600 to-purple-600">So are we.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-10">
            Use AI to learn faster, practice better and turn ideas into practical outcomes.
          </p>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pt-8">
        
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
