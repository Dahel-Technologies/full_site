import Link from "next/link";
import { ArrowRight, User, Building2, BookOpen, CheckCircle2 } from "lucide-react";

export default function TrainingPage() {
  return (
    <div className="pb-24 min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-purple-50 to-white pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-100/30 blur-3xl rounded-full -z-10" />
        <div className="max-w-7xl mx-auto w-full">
          <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 flex items-center gap-2"><BookOpen size={16}/> Professional Training</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-navy-900 max-w-2xl leading-[1.1] mb-6">
            Focused, guided <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">learning.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-10">
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
            
            <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Need training for your team?</h3>
              <p className="text-gray-300 mb-8">We also provide customized group and organizational training to upskill your workforce with practical technology.</p>
              
              <ul className="space-y-4 mb-10 text-gray-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-electric-blue" size={20} /> Tailored curriculum</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-electric-blue" size={20} /> Flexible delivery (In-person or remote)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-electric-blue" size={20} /> Progress tracking and assessments</li>
              </ul>
              
              <Link href="#" className="inline-flex items-center gap-2 bg-white text-navy-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors w-full justify-center">
                Book Group Training
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
