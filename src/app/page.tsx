import Link from "next/link";
import { ArrowRight, Play, BookOpen, User, Building2, Globe2, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 pt-20 md:pt-32 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-navy-900 max-w-4xl leading-[1.1] mb-6">
          Learn skills. Build confidence. <span className="text-electric-blue">Create what matters.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10 leading-relaxed">
          Practical technology education for people, organizations and the future of work. Learn data analytics, AI, software engineering and other practical digital skills through structured courses, private training, assessments and technology-powered learning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full justify-center">
          <Link href="/learn" className="bg-navy-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-navy-800 transition-colors flex items-center justify-center gap-2">
            Explore Learning <ArrowRight size={20} />
          </Link>
          <Link href="https://selfany.com/daheltechprivatesessions" target="_blank" className="bg-electric-light text-electric-blue px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-2">
            Book a Private Session
          </Link>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-500 bg-gray-50 px-6 py-3 rounded-full border border-gray-100">
          <Globe2 size={16} className="text-electric-blue" />
          <span>5,000+ learners</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Nigeria & beyond</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Practical, career-focused learning</span>
        </div>
      </section>

      {/* 2. "WHAT ARE YOU HERE TO DO?" */}
      <section className="bg-gray-50/50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">What brings you here?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-electric-blue mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">I want to learn</h3>
              <p className="text-gray-600 mb-8 flex-1">Courses, programs and resources designed to help you develop practical technology skills.</p>
              <Link href="/learn" className="text-electric-blue font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Explore Courses <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="w-12 h-12 bg-magenta-50 rounded-xl flex items-center justify-center text-magenta-600 mb-6">
                <User size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">I need personal training</h3>
              <p className="text-gray-600 mb-8 flex-1">One-on-one or small-group sessions designed around your schedule, goals and current level.</p>
              <Link href="/training" className="text-magenta-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Book a Session <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Play size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">I want to assess my knowledge</h3>
              <p className="text-gray-600 mb-8 flex-1">Test yourself, create assessments and compete through Quizarly.</p>
              <Link href="/quizarly" className="text-purple-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Explore Quizarly <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">I need technology for my organization</h3>
              <p className="text-gray-600 mb-8 flex-1">Training, digital solutions and technology support for organizations and institutions.</p>
              <Link href="/about" className="text-emerald-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Talk to Dahel <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. PRODUCTS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">More than learning.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We build technology too.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start group">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">Quizarly</h3>
              <p className="text-gray-600 mb-8 flex-1">Assessment & learning technology.</p>
              <Link href="https://www.quizarly.com/" target="_blank" className="text-purple-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Explore <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">Checkamo</h3>
              <p className="text-gray-600 mb-8 flex-1">Verification technology designed to help people make more informed decisions.</p>
              <Link href="#" className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Explore <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start group">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Globe2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">Ekko Now</h3>
              <p className="text-gray-600 mb-8 flex-1">Technology, climate innovation and impact.</p>
              <Link href="#" className="text-emerald-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Explore <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-24 text-center px-6 max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Ready to start?</h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-10">Learn a skill. Build something. Take the next step.</p>
        <Link href="/about" className="inline-flex items-center gap-2 bg-navy-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-navy-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-navy-900/20">
          Explore Dahel <ArrowRight size={20} />
        </Link>
      </section>

    </div>
  );
}
