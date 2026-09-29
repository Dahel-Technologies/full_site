import Link from "next/link";
import { ArrowRight, User, Building2, BookOpen, CheckCircle2 } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";

export default function TrainingPage() {
  return (
    <div className="pb-24 min-h-screen w-full max-w-full overflow-hidden">
      {/* HERO SECTION */}
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
          <span className="text-purple-700 font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 flex items-center gap-2 drop-shadow-sm"><BookOpen size={16}/> Professional Training</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-navy-900 max-w-2xl leading-[1.15] mb-6 drop-shadow-sm">
            Focused, guided <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-pink-700">learning.</span>
          </h1>
          <p className="text-xl text-gray-900 max-w-2xl mb-10 font-medium drop-shadow-md">
            For when you need more than just a course. Get direct guidance, curriculum, and accountability.
          </p>
        </div>
      </section>

      {/* 4. PRIVATE & GROUP TRAINING */}
      <section className="bg-navy-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Your schedule. <br/><span className="text-electric-blue">Your goals.</span> <br/>Your learning.</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Private training built around you. Whether you're a busy professional, student, entrepreneur or someone changing careers, work directly with a Dahel instructor on the skills you need.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {["Microsoft Excel", "SQL", "Power BI", "Tableau", "Python", "Data Analytics & AI"].map(skill => (
                  <span key={skill} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <Link href="https://selfany.com/daheltechprivatesessions" target="_blank" className="inline-flex items-center gap-2 bg-electric-blue text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-600 transition-colors">
                Book a Private Session <ArrowRight size={20} />
              </Link>
            </div>
            
            <BorderGlow 
              glowColor="#3b82f6" 
              bgColor="#0f172a"
              className="p-8 md:p-12 bg-white/5"
            >
              <h3 className="text-2xl font-bold mb-4">Need training for your team?</h3>
              <p className="text-gray-300 mb-8">We also provide customized group and organizational training to upskill your workforce with practical technology.</p>
              
              <ul className="space-y-4 mb-10 text-gray-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-electric-blue" size={20} /> Tailored curriculum</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-electric-blue" size={20} /> Flexible delivery (In-person or remote)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-electric-blue" size={20} /> Progress tracking and assessments</li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.me/2347047581704" target="_blank" className="flex-1 inline-flex items-center gap-2 bg-white text-navy-900 px-6 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors justify-center">
                  Book via WhatsApp
                </Link>
                <Link href="mailto:daheltechies@gmail.com" className="flex-1 inline-flex items-center gap-2 bg-white/10 text-white px-6 py-4 rounded-full font-medium text-lg hover:bg-white/20 transition-colors border border-white/20 justify-center">
                  Book via Email
                </Link>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>
    </div>
  );
}
