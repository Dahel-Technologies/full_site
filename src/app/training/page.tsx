import Link from "next/link";
import { ArrowRight, User, Users, BookOpen, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";

export default function TrainingPage() {
  return (
    <div className="pb-24 min-h-screen w-full max-w-full overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-[50vh] md:min-h-[55vh] flex flex-col justify-center px-4 sm:px-6 pt-24 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto w-full text-center">
          <span className="text-purple-700 font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200">
            <BookOpen size={16}/> Dahel Training Pathways
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-navy-900 leading-[1.15] mb-6">
            Choose How You Want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700">Learn & Master Data</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Whether you need intensive 1-on-1 private mentoring or prefer the energy of interactive group cohorts, Dahel Technologies has the perfect pathway for your career goals.
          </p>
        </div>
      </section>

      {/* TWO PATHWAYS SELECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* OPTION 1: PRIVATE SESSIONS */}
          <div className="bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 rounded-3xl p-8 sm:p-12 border-2 border-blue-200 shadow-xl flex flex-col justify-between relative group hover:border-blue-400 transition-all">
            <div className="absolute top-6 right-6 px-3 py-1 bg-electric-blue text-white rounded-full text-xs font-black uppercase tracking-wider">
              1-on-1 Mentorship
            </div>
            
            <div>
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-electric-blue flex items-center justify-center mb-6 shadow-sm">
                <User size={32} />
              </div>

              <h2 className="text-3xl font-black text-navy-900 mb-3">Private Sessions</h2>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Personalized 1-on-1 instruction built around your schedule, learning pace, and specific project needs. Work directly with Microsoft Certified Trainers.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Intensive 3 - 4 weeks per course at your convenience",
                  "Available for Excel, SQL, Tableau, Power BI, Python, R, and AI Engineering",
                  "Personalized curriculum tailored to your background",
                  "Direct instructor accountability and review"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                    <CheckCircle2 size={18} className="text-electric-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/privatesessions"
              className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-electric-blue text-white font-bold py-4 px-8 rounded-full text-base transition-all shadow-md group-hover:scale-[1.02]"
            >
              Explore Private Sessions <ArrowRight size={18} />
            </Link>
          </div>

          {/* OPTION 2: GROUP CLASSES */}
          <div className="bg-gradient-to-br from-purple-50/80 via-white to-pink-50/30 rounded-3xl p-8 sm:p-12 border-2 border-purple-200 shadow-xl flex flex-col justify-between relative group hover:border-purple-400 transition-all">
            <div className="absolute top-6 right-6 px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-black uppercase tracking-wider">
              Cohort-Based
            </div>
            
            <div>
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-6 shadow-sm">
                <Users size={32} />
              </div>

              <h2 className="text-3xl font-black text-navy-900 mb-3">Group Classes</h2>
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Learn alongside peers in structured live batches. Experience real-time discussions, breakout rooms, collaborative capstones, and network building.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Interactive weekend & evening schedules",
                  "Collaborative group capstones and hackathons",
                  "Vibrant student community and peer study rooms",
                  "Cost-effective cohort pricing"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium">
                    <CheckCircle2 size={18} className="text-purple-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/groupclasses"
              className="inline-flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-bold py-4 px-8 rounded-full text-base transition-all shadow-md group-hover:scale-[1.02]"
            >
              Explore Group Classes <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* CORPORATE TRAINING SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12">
        <BorderGlow 
          glowColor="#3b82f6" 
          bgColor="#0f172a"
          className="p-8 sm:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-blue-300 mb-4">
                <Building2 size={14} /> Corporate & Institutional Training
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold mb-4">Upskill Your Entire Team or Workforce</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We design custom training curricula for organizations, SMEs, government ministries, and development partners. Equip your staff with practical, AI-driven data capabilities.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-electric-blue" size={18} /> Customized industry datasets & workflows</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-electric-blue" size={18} /> In-person or remote delivery</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-electric-blue" size={18} /> Measurable competency benchmarks</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a 
                href="https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20am%20inquiring%20about%20Corporate%20Training%20for%20our%20team." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-white text-navy-900 px-6 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-colors shadow-lg"
              >
                Inquire via WhatsApp
              </a>
              <a 
                href="mailto:contactdahelgroup@gmail.com?subject=Corporate%20Training%20Inquiry" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-4 rounded-full font-bold text-base hover:bg-white/20 transition-colors border border-white/20"
              >
                Inquire via Email
              </a>
            </div>
          </div>
        </BorderGlow>
      </section>
    </div>
  );
}
