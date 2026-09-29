import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, BookOpen, User, Building2, Globe2, Zap, CheckCircle2 } from "lucide-react";
import AnimatedNumber from "@/components/AnimatedNumber";
import BookmarkCards from "@/components/BookmarkCards";
import SpecularButton from "@/components/animations/SpecularButton";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24 w-full max-w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/resources/daheltech_hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] -z-10"></div>
        
        <div className="px-4 sm:px-6 py-16 sm:py-20 md:py-32 max-w-7xl mx-auto w-full text-center flex flex-col items-center relative z-10">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-navy-900 max-w-4xl leading-[1.15] mb-6 drop-shadow-sm">
            Learn skills. Build confidence. <span className="text-electric-blue">Create what matters.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 max-w-3xl mb-10 leading-relaxed font-medium drop-shadow-sm">
            Practical technology education for people, organizations and the future of work. Learn data analytics, AI, software engineering and other practical digital skills through structured courses, private training, assessments and technology-powered learning with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700">Dahel Technologies</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16 w-full justify-center max-w-md sm:max-w-none">
            <Link href="/learn" className="bg-navy-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-navy-800 transition-colors flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1 transform w-full sm:w-auto">
              Explore Learning <ArrowRight size={20} />
            </Link>
            <Link href="https://selfany.com/daheltechprivatesessions" target="_blank" className="bg-white text-electric-blue px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-xl border border-blue-100 hover:-translate-y-1 transform w-full sm:w-auto">
              Book a Private Session
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-base font-bold text-gray-800 bg-white/90 backdrop-blur-md px-4 sm:px-8 py-3 sm:py-4 rounded-2xl sm:rounded-full border border-gray-200 shadow-2xl max-w-full">
            <Globe2 size={20} className="text-electric-blue hidden sm:block shrink-0" />
            <span className="flex items-center gap-1 text-electric-blue"><AnimatedNumber end={29000} suffix="+" /> <span className="text-gray-600 font-medium">learners</span></span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="flex items-center gap-1 text-electric-blue"><AnimatedNumber end={6} suffix="+" /> <span className="text-gray-600 font-medium">countries</span></span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="flex items-center gap-1 text-electric-blue"><AnimatedNumber end={80} suffix="+" /> <span className="text-gray-600 font-medium">virtual communities</span></span>
          </div>
        </div>
      </section>

      {/* 2. "WHAT ARE YOU HERE TO DO?" */}
      <section className="bg-gray-50/50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">What brings you here?</h2>
          
          <BookmarkCards />
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
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="relative h-12 w-48 mb-8 shrink-0">
                <Image src="/resources/quizarly_logo_site.png" alt="Quizarly Logo" fill className="object-contain object-left" />
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">Assessment & learning technology.</p>
                <div className="mt-auto">
                  <Link href="https://www.quizarly.com/" target="_blank" className="text-purple-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="relative h-12 w-48 mb-8 shrink-0">
                <Image src="/resources/LOGO 4.png" alt="Checkamo Logo" fill className="object-contain object-left" />
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">Verification technology designed to help people make more informed decisions.</p>
                <div className="mt-auto">
                  <Link href="https://www.checkamo.com/" target="_blank" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="mb-8 mt-2 shrink-0">
                <h3 className="text-3xl font-black text-emerald-900 tracking-tight">Ekko Now</h3>
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">Technology, climate innovation and impact.</p>
                <div className="mt-auto">
                  <Link href="https://www.ekko-now.com/" target="_blank" className="text-emerald-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-24 text-center px-6 max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Ready to start?</h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-10">Learn a skill. Build something. Take the next step.</p>
        <Link href="https://selfany.com/s/DahelTechies" target="_blank">
          <SpecularButton>
            Get Started <ArrowRight size={20} />
          </SpecularButton>
        </Link>
      </section>

    </div>
  );
}
