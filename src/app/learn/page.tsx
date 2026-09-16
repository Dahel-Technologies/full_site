import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Star } from "lucide-react";

export default function LearnPage() {
  const courses = [
    { title: "SPSS Mastery", category: "Data Analytics", level: "All Levels", link: "https://selfany.com/SPSSMastery", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" },
    { title: "Data Analytics and AI", category: "Data & AI", level: "Beginner → Advanced", link: "https://selfany.com/DataAnayticsClass", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" },
    { title: "Sheets and Excel with AI", category: "Data Analytics", level: "Beginner → Intermediate", link: "https://selfany.com/sheetsnengineerwithai", img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&q=80" },
    { title: "Cybersecurity Basic", category: "Security", level: "Beginner", link: "https://selar.com/Cyberprogram", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" },
    { title: "All Courses Bundle (3k Offer)", category: "Bundle", level: "All Levels", link: "https://selfany.com/3koffer", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" }
  ];

  return (
    <div className="pb-24">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/30 blur-3xl rounded-full -z-10" />
        <div className="max-w-7xl mx-auto w-full">
          <span className="text-electric-blue font-bold tracking-wider uppercase text-sm mb-4 block">Dahel Courses</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-navy-900 max-w-2xl leading-[1.1] mb-6">
            Learn something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">useful today.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-10">
            Structured, practical courses to build skills you can actually use in the real world. No fluff, just practical technology.
          </p>
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
            <Link href={course.link} target="_blank" key={i} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all bg-white flex flex-col h-full hover:-translate-y-1">
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
          ))}
        </div>
      </section>
    </div>
  );
}
