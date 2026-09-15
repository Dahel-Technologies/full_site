import Link from "next/link";
import { ArrowRight, Star, CheckCircle2, Zap, Globe2 } from "lucide-react";

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
      <section className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
            <div>
              <div className="text-4xl md:text-6xl font-bold text-navy-900 mb-2">5,000+</div>
              <div className="text-gray-500 font-medium">students taught</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-navy-900 mb-2">700+</div>
              <div className="text-gray-500 font-medium">young people supported through digital-skills initiatives</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-navy-900 mb-2">5+</div>
              <div className="text-gray-500 font-medium">countries reached</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-navy-900 mb-2">40%</div>
              <div className="text-gray-500 font-medium">increase in impact following our EdTech rebrand</div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8 leading-snug">
              "We're building technology that helps more people learn, work and participate in the digital economy."
            </h3>
          </div>
        </div>
      </section>

      {/* 10. SUCCESS STORIES */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Real people. Real progress.</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex text-amber-400 mb-6">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-xl md:text-2xl font-medium text-navy-900 mb-8 leading-snug">
                "I secured a mid-senior supervisory role as an analyst in the UK."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-electric-blue font-bold">C</div>
                <div>
                  <div className="font-bold text-navy-900">Chidi</div>
                  <div className="text-gray-500 text-sm">Private Training Student</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex text-amber-400 mb-6">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-xl md:text-2xl font-medium text-navy-900 mb-8 leading-snug">
                "The curriculum was practical and immediately applicable to my daily work."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-magenta-100 rounded-full flex items-center justify-center text-magenta-600 font-bold">A</div>
                <div>
                  <div className="font-bold text-navy-900">Amina</div>
                  <div className="text-gray-500 text-sm">Data Analytics Course</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOR ORGANIZATIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="bg-navy-900 rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl rounded-full" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Building skills at scale?</h2>
                <p className="text-xl text-gray-300 mb-10">
                  Dahel works with organizations, schools, institutions and programs to deliver high-quality technology education and solutions.
                </p>
                <Link href="#work-with-us" className="inline-flex items-center gap-2 bg-white text-navy-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
                  Work With Dahel <ArrowRight size={20} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Digital Skills Training",
                  "AI & Technology Training",
                  "Workforce Development",
                  "Assessment & Testing",
                  "Customized Programs"
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                    <CheckCircle2 className="text-electric-blue mb-4" size={24} />
                    <h4 className="font-bold">{item}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11b. IN THE NEWS */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">In the News</h2>
              <p className="text-lg text-gray-600 max-w-2xl">Read about Dahel Technologies' impact and initiatives across the country.</p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2"><Zap className="text-purple-600"/> Quizarly Impact</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "CRSG Approves STEAM Clubs & Quizarly in Schools", link: "https://news.crossriverstate.gov.ng/crsg-approves-steam-clubs-quizarly-digital-learning-platform-in-secondary-schools/" },
                { title: "Academic-Thon Challenge to Revitalize Public Schools", link: "https://crossriverwatch.com/2025/06/academic-thon-challenge-to-revitalize-award-excellence-in-cross-rivers-public-schools-launched/?amp=1" },
                { title: "Official Visit to Ministry of Education", link: "https://calabargist.com/abasiofiok-akpabio-pays-an-official-visit-to-the-cross-river-state-ministry-of-education/" },
                { title: "Gov Otu Sparks Academic Passion with CRISSAC", link: "https://thenigerianpost.com.ng/governor-otu-sparks-academic-passion-in-public-schools-with-crissac/" }
              ].map((news, i) => (
                <Link key={i} href={news.link} target="_blank" className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-200 group flex flex-col h-full">
                  <p className="font-semibold text-navy-900 mb-4 group-hover:text-electric-blue transition-colors">{news.title}</p>
                  <div className="mt-auto flex justify-between items-center text-sm font-medium text-electric-blue">
                    Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2"><Globe2 className="text-emerald-600"/> NIGCOMSAT Partnership</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Cross River Partners NIGCOMSAT to Train 200 Youths in Digital Tech", link: "https://gazettengr.com/cross-river-partners-nigcomsat-to-train-200-youths-in-digital-tech/" },
                { title: "Cross River Commends NIGCOMSAT for Empowering Youths in Satellite Technology", link: "https://moi.cr.gov.ng/news/cross-river-commends-nigcomsat-for-empowering-youths-in-satellite-technology" }
              ].map((news, i) => (
                <Link key={i} href={news.link} target="_blank" className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors border border-gray-200 group flex flex-col justify-between h-full">
                  <p className="font-semibold text-navy-900 mb-4 group-hover:text-electric-blue transition-colors text-lg">{news.title}</p>
                  <div className="flex justify-between items-center text-sm font-medium text-electric-blue">
                    Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11c. PROGRAMS & WEBINARS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">Programs & Webinars</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Events, conferences, and community engagement by Dahel.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Tech Riff</h3>
              <p className="text-gray-600 mb-6">Join our regular Spaces discussions on the latest in technology.</p>
              <Link href="https://x.com/i/spaces/1yNGaLVjoZVKj" target="_blank" className="text-electric-blue font-medium flex items-center gap-2">Listen on X <ArrowRight size={16}/></Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Job Readiness Conference</h3>
              <p className="text-gray-600 mb-6">Prepare for your next big tech role with expert guidance.</p>
              <span className="text-gray-400 font-medium text-sm bg-gray-100 px-3 py-1 rounded-full">Link coming soon</span>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">African Tech Conference</h3>
              <p className="text-gray-600">A major gathering for tech enthusiasts and professionals.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">Dahel Technologies events in China and Ghana.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">University Partnerships</h3>
              <p className="text-gray-600">Workshops with Arthur Jarvis University Students.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Cross River Quiz</h3>
              <p className="text-gray-600 mb-6">State-wide Quiz Competition.</p>
              <span className="text-gray-400 font-medium text-sm bg-gray-100 px-3 py-1 rounded-full">YouTube video soon</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
