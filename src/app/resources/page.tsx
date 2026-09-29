import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Book } from "lucide-react";
import TypewriterText from "@/components/animations/TypewriterText";
import LottieBackground from "@/components/animations/LottieBackground";
import FlipCard from "@/components/FlipCard";

export default function ResourcesPage() {
  const resources = [
    { title: "How to Get a Job in Nigeria", desc: "A practical guide to navigating the job market and securing roles.", price: "₦2,700 ($50)", link: "https://selfany.com/getajobfromNigeria", img: "/resources/how_to_get_a_job_compressed.jpg" },
    { title: "Create your CV in 9 steps", desc: "A step-by-step framework for building a standout resume.", price: "Available Now", link: "https://selar.com/CVin9steps", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" }
  ];

  return (
    <div className="pb-24 min-h-screen w-full max-w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-20 sm:pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden min-h-[50vh] flex items-center">
        {/* Lottie Animation Background */}
        <LottieBackground src="https://lottie.host/d34c38da-c418-426e-a2f6-429c6ca1d63d/LDYYqC81sY.lottie" className="opacity-15 md:opacity-20 translate-x-1/4" />
        
        {/* Optional overlay to soften the animation if it's too distracting */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] -z-10" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <span className="text-gray-500 font-bold tracking-wider uppercase text-xs sm:text-sm mb-4 flex items-center gap-2"><Book size={16}/> Learning Resources</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-navy-900 max-w-2xl leading-[1.2] mb-6 min-h-[3em] md:min-h-[2em] flex flex-col gap-2">
            <span>Don't just watch.</span>
            <TypewriterText text="Read & Build." delay={0.1} className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900" />
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mb-10 font-medium">
            Books, guides, templates and practical resources curated by Dahel instructors to accelerate your learning.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 w-full pt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((res, i) => (
            <FlipCard 
              key={i} 
              title={res.title} 
              desc={res.desc} 
              price={res.price} 
              link={res.link} 
              img={res.img} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
