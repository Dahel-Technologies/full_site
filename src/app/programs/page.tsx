import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    { title: "African Tech Conference Day 1", desc: "A major gathering for tech enthusiasts and professionals.", link: "https://www.youtube.com/live/kzwtXvlH9nY?si=2nGr-ibJuGEp0iNF", cta: "Watch Day 1" },
    { title: "African Tech Conference Day 2", desc: "Continuing the discussions with industry leaders.", link: "https://www.youtube.com/live/CzYHdUGJ230?si=X9n4KTRC4k4_0V0W", cta: "Watch Day 2" },
    { title: "Job Readiness Conference", desc: "Prepare for your next big tech role with expert guidance.", link: "https://youtu.be/lmDhO9_8In0?si=OFbOPn7YzfiqJDYp", cta: "Watch Video" },
    { title: "Graduation Ceremonies", desc: "January Cohort Graduation.", link: "https://youtu.be/S2np0GSU0CY?si=12sefK3sBmzfY1er", cta: "Watch Ceremony" },
    { title: "Global Reach", desc: "Dahel Technologies events in China and Ghana.", link: "https://youtu.be/wNgRQqQpbDI?si=s7-Z4AD5JLGXt8sl", cta: "Watch Video" },
    { title: "University Partnerships", desc: "EDC Workshops with Arthur Jarvis University Students.", link: "https://youtu.be/5L9I0nvsCiY?si=os7a68hqPd-Rpl62", cta: "Watch Workshop" },
    { title: "Cross River Quiz", desc: "CRISSAC Quiz State-wide Competition.", link: "https://youtu.be/1XPsWLwdIG0?si=v3fc-4X5NUYFCGhd", cta: "Watch Competition" },
    { title: "3MTT Cohort 2 Graduation", desc: "Celebrating our Cohort 2 graduates.", link: "https://youtu.be/-kVB7nWamUA?si=ogeT3Mc9rrv6kAxH", cta: "Watch Video" },
    { title: "3MTT Cohort 1 Picnic", desc: "Fun and networking with Cohort 1.", link: "https://youtu.be/rglnOYvqQEM?si=rfjSRIVsgcbZk3ty", cta: "Watch Highlights" },
    { title: "3MTT CRS Fellows Day Out", desc: "Cross River State Fellows Day Out.", link: "https://youtu.be/rglnOYvqQEM?si=rfjSRIVsgcbZk3ty", cta: "Watch Highlights" },
    { title: "3MTT Orientation", desc: "Dahel Technologies orientation for new fellows.", link: "https://youtu.be/OBwH_7xqf8o?si=X_dnb-kB4RnKJtjW", cta: "Watch Orientation" },
    { title: "Tech Riff", desc: "Join our regular Spaces discussions on the latest in technology.", link: "https://x.com/i/spaces/1yNGaLVjoZVKj", cta: "Listen on X" }
  ];

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">Programs & Webinars</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Events, conferences, and community engagement by Dahel.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col h-full group hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-navy-900 mb-3">{prog.title}</h3>
              <p className="text-gray-600 mb-6 flex-1">{prog.desc}</p>
              <Link href={prog.link} target="_blank" className="text-electric-blue font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                <PlayCircle size={18}/> {prog.cta} <ArrowRight size={16}/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
