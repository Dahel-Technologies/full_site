import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Info } from "lucide-react";
import AnimatedNumber from "@/components/AnimatedNumber";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0 pb-24 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-100/30 blur-3xl rounded-full -z-10" />
        <div className="max-w-7xl mx-auto w-full text-center flex flex-col items-center">
          <span className="text-electric-blue font-bold tracking-wider uppercase text-sm mb-4 block flex items-center justify-center gap-2"><Info size={16}/> Who We Are</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-navy-900 max-w-3xl leading-[1.1] mb-6">
            We believe in the power of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">practical technology.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-10">
            Dahel Technologies is where people learn, build, and access practical technology. We focus on bridging the gap between theoretical knowledge and real-world application.
          </p>
        </div>
      </section>

      {/* 8. THE DAHEL DIFFERENCE */}
      <section className="bg-navy-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Why Dahel?</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Practical", desc: "We focus on skills people can actually use." },
              { title: "Human", desc: "Technology doesn't replace good teaching. It supports it." },
              { title: "Accessible", desc: "Learning should not be limited by geography or background." },
              { title: "Outcome-focused", desc: "We care about what learners can do after learning." },
              { title: "Built for what's next", desc: "AI and technology are changing quickly. Our learning evolves with them." },
            ].map((item, i) => (
              <div key={i} className={`${i === 3 ? "md:col-start-1" : ""} ${i === 4 ? "md:col-start-2" : ""}`}>
                <h3 className="text-xl font-bold mb-3 text-electric-blue">{item.title}</h3>
                <p className="text-gray-300 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PROOF / IMPACT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
            <div>
              <div className="text-4xl md:text-6xl font-bold text-navy-900 mb-2"><AnimatedNumber end={29000} suffix="+" /></div>
              <div className="text-gray-500 font-medium">students taught</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-navy-900 mb-2"><AnimatedNumber end={80} suffix="+" /></div>
              <div className="text-gray-500 font-medium">virtual communities</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-navy-900 mb-2"><AnimatedNumber end={6} suffix="+" /></div>
              <div className="text-gray-500 font-medium">countries reached</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-navy-900 mb-2"><AnimatedNumber end={40} suffix="%" /></div>
              <div className="text-gray-500 font-medium">increase in impact</div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8 leading-snug">
              "We're building technology that helps more people learn, work and participate in the digital economy."
            </h3>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Meet the Team behind your Dreams</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The people working to make practical technology accessible.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Vael David", role: "Managing Director", img: "/Team/Vael David Managing Director.jpg" },
              { name: "Idiege Inah Omang", role: "CTO", img: "/Team/CTO Idiege Inah Omang.jpg" },
              { name: "Maryann Thompson", role: "Administration and Partnerships", img: "/Team/Administration and Partnerships Maryann Thompson.jpg" },
              { name: "Ejesi Joseph Esorkpenre", role: "Programs and Marketing Manager", img: "/Team/EJESI JOSEPH ESORKPENRE programs and Marketing Manager.jpg" },
              { name: "Ralia Abarshi", role: "Community Manager", img: "/Team/Ralia Abarshi Community Manager.jpeg" },
              { name: "Rose Ogar Okim", role: "Social Media Manager", img: "/Team/ROSE OGAR OKIM Social Media Manager.jpg" },
              { name: "Chimdinma Onwuegbu", role: "Career Mentor and Coach", img: "/Team/Chimdinma Onwuegbu Career Mentor and Coach.jpg" },
              { name: "Ha Ri", role: "Cybersecurity Trainer and Consultant", img: "/Team/Cybersecurity Trainer and Consultant- Ha Ri.jpg" },
              { name: "Chinalurum Clementina", role: "Microsoft Excel Trainer", img: "/Team/Microsoft Excel Trainer Chinalurum Clementina.jpg" },
              { name: "Uchechi Chibuzor", role: "Product Management Trainer", img: "/Team/Uchechi Chibuzor Product Management Trainer and Contractor.jpg" },
              { name: "Matthew Ador", role: "Team Member", img: "/Team/WhatsApp Image 2024-08-09 at 05.37.31 - Matthew Ador.jpeg" },
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 relative bg-gray-200 border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-1">{member.name}</h4>
                <p className="text-sm text-electric-blue font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
