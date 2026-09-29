import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Globe2, Newspaper } from "lucide-react";
import CubesBackground from "@/components/animations/CubesBackground";
import KingfisherHero from "@/components/KingfisherHero";

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

  const dahelNews = [
    { title: "Skill Up Workshop with AIESEC", source: "Luma", link: "https://luma.com/63ptybt3", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
    { title: "Dahel Techies Make Strides In Technical Education, Community Empowerment", source: "Nairaland", link: "https://www.nairaland.com/7769625/tech-dahel-techies-make-strides", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80" },
    { title: "We are making strides in tech education & empowerment", source: "BusinessDay", link: "https://businessday.ng/news/article/we-are-making-strides-in-tech-education-empowerment-techies/", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80" },
    { title: "Empowering Africa, One Techie at a Time: David Francis Effiong on Dahel Techies' Mission", source: "THISDAY", link: "https://www.thisdaylive.com/2024/08/16/empowering-africa-one-techie-at-a-time-david-francis-effiong-on-dahel-techies-mission/", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80" }
  ];

  return (
    <div className="pb-24 bg-white min-h-screen w-full max-w-full overflow-hidden">
      {/* HERO SECTION */}
      <KingfisherHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pt-8">
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

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2"><Newspaper className="text-blue-600"/> Press & Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dahelNews.map((news, i) => (
              <Link key={i} href={news.link} target="_blank" className="bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all border border-gray-100 group flex flex-col h-full hover:-translate-y-1">
                <div className="h-40 relative overflow-hidden bg-gray-100">
                  <Image src={news.img} alt={news.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest rounded-full w-max mb-3 border border-blue-100">{news.source}</span>
                  <p className="font-semibold text-navy-900 mb-4 group-hover:text-blue-600 transition-colors">{news.title}</p>
                  <div className="mt-auto flex justify-between items-center text-sm font-medium text-blue-600">
                    {news.link.includes('luma.com') ? 'View Event' : 'Read Article'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
