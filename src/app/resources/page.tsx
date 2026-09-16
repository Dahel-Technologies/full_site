import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Book } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    { title: "How to Get a Job in Nigeria", desc: "A practical guide to navigating the job market and securing roles.", price: "₦2,700 ($50)", link: "https://selfany.com/getajobfromNigeria", img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80" },
    { title: "Create your CV in 9 steps", desc: "A step-by-step framework for building a standout resume.", price: "Available Now", link: "https://selar.com/CVin9steps", img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&q=80" }
  ];

  return (
    <div className="pb-24 min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-200/30 blur-3xl rounded-full -z-10" />
        <div className="max-w-7xl mx-auto w-full">
          <span className="text-gray-500 font-bold tracking-wider uppercase text-sm mb-4 block flex items-center gap-2"><Book size={16}/> Learning Resources</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-navy-900 max-w-2xl leading-[1.1] mb-6">
            Don't just watch. <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900">Read & Build.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-10">
            Books, guides, templates and practical resources curated by Dahel instructors to accelerate your learning.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 w-full pt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((res, i) => (
            <Link href={res.link} target="_blank" key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl mb-4 relative overflow-hidden group-hover:shadow-lg transition-all border border-gray-200 flex items-center justify-center">
                <Image src={res.img} alt={res.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors" />
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-1 group-hover:text-electric-blue transition-colors">{res.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{res.desc}</p>
              <div className="font-bold text-navy-900">{res.price}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
