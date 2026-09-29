import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Star } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

export default function LearnPage() {
  const courses = [
    { title: "SPSS Mastery", category: "Data Analytics", level: "All Levels", link: "https://selfany.com/SPSSMastery", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
    { title: "Data Analytics and AI", category: "Data & AI", level: "Beginner → Advanced", link: "https://selfany.com/DataAnayticsClass", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
    { title: "Sheets and Excel with AI", category: "Data Analytics", level: "Beginner → Intermediate", link: "https://selfany.com/sheetsnengineerwithai", img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&q=80" },
    { title: "Cybersecurity Basic", category: "Security", level: "Beginner", link: "https://selar.com/Cyberprogram", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" },
    { title: "All Courses Bundle (3k Offer)", category: "Bundle", level: "All Levels", link: "https://selfany.com/3koffer", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" }
  ];

  return (
    <div className="pb-24 w-full max-w-full overflow-hidden">
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
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for text readability (gradient fades out to reveal video) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent -z-10"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-2xl bg-white/10 backdrop-blur-sm p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/30 shadow-2xl">
            <span className="inline-block bg-blue-100 text-blue-700 font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 px-3 sm:px-4 py-1.5 rounded-full shadow-sm">Dahel Courses</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-navy-900 leading-[1.1] mb-6 drop-shadow-md">
              Learn something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">useful today.</span>
            </h1>
            <p className="text-xl text-gray-900 mb-2 font-bold drop-shadow-md">
              Structured, practical courses to build skills you can actually use in the real world. No fluff, just practical technology.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED LEARNING */}
      <section className="max-w-7xl mx-auto px-6 w-full pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-navy-900 mb-2">Featured Programs</h2>
          </div>
          <Link href="https://selfany.com/s/DahelTechies" target="_blank" className="text-electric-blue font-medium flex items-center gap-2 hover:gap-3 transition-all">
            View all courses <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <SpotlightCard key={i} className="group border border-gray-100 rounded-2xl bg-white hover:shadow-xl hover:border-gray-200 transition-all hover:-translate-y-1 h-full">
              <Link href={course.link} target="_blank" className="flex flex-col h-full relative z-20">
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <Image src={course.img} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors" />
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
              </Link>
            </SpotlightCard>
          ))}
        </div>
      </section>
    </div>
  );
}
