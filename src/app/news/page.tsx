import Link from "next/link";
import { ArrowRight, Zap, Globe2 } from "lucide-react";

export default function NewsPage() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">In the News</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Read about Dahel Technologies' impact and initiatives across the country.</p>
          </div>
        </div>

        <div className="mb-16">
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
    </div>
  );
}
