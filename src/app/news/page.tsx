import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Globe2, Newspaper } from "lucide-react";
import CubesBackground from "@/components/animations/CubesBackground";

export default function NewsPage() {
  const quizarlyNews = [
    { title: "CRSG Approves STEAM Clubs & Quizarly in Schools", link: "https://news.crossriverstate.gov.ng/crsg-approves-steam-clubs-quizarly-digital-learning-platform-in-secondary-schools/", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80" },
    { title: "Academic-Thon Challenge to Revitalize Public Schools", link: "https://crossriverwatch.com/2025/06/academic-thon-challenge-to-revitalize-award-excellence-in-cross-rivers-public-schools-launched/?amp=1", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" },
    { title: "Official Visit to Ministry of Education", link: "https://calabargist.com/abasiofiok-akpabio-pays-an-official-visit-to-the-cross-river-state-ministry-of-education/", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80" },
    { title: "Gov Otu Sparks Academic Passion with CRISSAC", link: "https://thenigerianpost.com.ng/governor-otu-sparks-academic-passion-in-public-schools-with-crissac/", img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80" }
  ];

  const nigcomsatNews = [
    { title: "Cross River Partners NIGCOMSAT to Train 200 Youths in Digital Tech", link: "https://gazettengr.com/cross-river-partners-nigcomsat-to-train-200-youths-in-digital-tech/", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
    { title: "Cross River Commends NIGCOMSAT for Empowering Youths in Satellite Technology", link: "https://moi.cr.gov.ng/news/cross-river-commends-nigcomsat-for-empowering-youths-in-satellite-technology", img: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80" }
  ];

  return (
    <div className="pb-24 bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[50vh] flex items-center">
        <CubesBackground />
        <div className="absolute inset-0 bg-black/40 -z-10" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <span className="text-gray-200 font-bold tracking-wider uppercase text-sm mb-4 block flex items-center gap-2 drop-shadow-md"><Newspaper size={16}/> Press Coverage</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white max-w-2xl leading-[1.1] mb-6 drop-shadow-lg">
            Dahel Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">in the News.</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mb-10 drop-shadow-md font-medium">
            Read about our initiatives, impact, and partnerships across the country as we build the future of technology education.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 w-full pt-8">
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2"><Zap className="text-purple-600"/> Quizarly Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quizarlyNews.map((news, i) => (
              <Link key={i} href={news.link} target="_blank" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:border-purple-200 transition-all border border-gray-100 group flex flex-col h-full hover:-translate-y-1">
                <div className="h-40 relative overflow-hidden bg-gray-100">
                  <Image src={news.img} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-semibold text-navy-900 mb-4 group-hover:text-purple-600 transition-colors">{news.title}</p>
                  <div className="mt-auto flex justify-between items-center text-sm font-medium text-purple-600">
                    Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2"><Globe2 className="text-emerald-600"/> NIGCOMSAT Partnership</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {nigcomsatNews.map((news, i) => (
              <Link key={i} href={news.link} target="_blank" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all border border-gray-100 group flex flex-col justify-between h-full hover:-translate-y-1">
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <Image src={news.img} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-semibold text-navy-900 mb-4 group-hover:text-emerald-600 transition-colors text-lg">{news.title}</p>
                  <div className="mt-auto flex justify-between items-center text-sm font-medium text-emerald-600">
                    Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
