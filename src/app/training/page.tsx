import Link from "next/link";
import { ArrowRight, User, Users, BookOpen, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";

export default function TrainingPage() {
  return (
    <div className="pb-24 min-h-screen w-full max-w-full overflow-hidden bg-white">
      {/* HERO SECTION WITH ORIGINAL VIDEO ANIMATION */}
      <section className="relative w-full overflow-hidden min-h-[55vh] md:min-h-[60vh] flex flex-col justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-16">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover -z-20"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/40 -z-10"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <span className="text-purple-700 font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 flex items-center gap-2 drop-shadow-sm">
            <BookOpen size={16}/> Professional Training
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-navy-900 max-w-2xl leading-[1.15] mb-6 drop-shadow-sm">
            Focused, guided <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-700">learning.</span>
          </h1>
          <p className="text-xl text-gray-900 max-w-2xl mb-10 font-medium drop-shadow-md">
            For when you need more than just a course. Get direct guidance, curriculum, and accountability.
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
