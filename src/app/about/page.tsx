import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedNumber from "@/components/AnimatedNumber";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-0 pb-24">
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
    </div>
  );
}
