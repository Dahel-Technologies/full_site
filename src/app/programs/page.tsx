import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PlayCircle, Calendar } from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    { title: "African Tech Conference Day 1", desc: "A major gathering for tech enthusiasts and professionals.", link: "https://www.youtube.com/live/kzwtXvlH9nY?si=2nGr-ibJuGEp0iNF", cta: "Watch Day 1", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
    { title: "African Tech Conference Day 2", desc: "Continuing the discussions with industry leaders.", link: "https://www.youtube.com/live/CzYHdUGJ230?si=X9n4KTRC4k4_0V0W", cta: "Watch Day 2", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=800&q=80" },
    { title: "Job Readiness Conference", desc: "Prepare for your next big tech role with expert guidance.", link: "https://youtu.be/lmDhO9_8In0?si=OFbOPn7YzfiqJDYp", cta: "Watch Video", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" },
    { title: "Graduation Ceremonies", desc: "January Cohort Graduation.", link: "https://youtu.be/S2np0GSU0CY?si=12sefK3sBmzfY1er", cta: "Watch Ceremony", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
    { title: "Global Reach", desc: "Dahel Technologies events in China and Ghana.", link: "https://youtu.be/wNgRQqQpbDI?si=s7-Z4AD5JLGXt8sl", cta: "Watch Video", img: "https://images.unsplash.com/photo-1518653065099-2704a29a0de2?w=800&q=80" },
    { title: "University Partnerships", desc: "EDC Workshops with Arthur Jarvis University Students.", link: "https://youtu.be/5L9I0nvsCiY?si=os7a68hqPd-Rpl62", cta: "Watch Workshop", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80" },
    { title: "Cross River Quiz", desc: "CRISSAC Quiz State-wide Competition.", link: "https://youtu.be/1XPsWLwdIG0?si=v3fc-4X5NUYFCGhd", cta: "Watch Competition", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80" },
    { title: "3MTT Cohort 2 Graduation", desc: "Celebrating our Cohort 2 graduates.", link: "https://youtu.be/-kVB7nWamUA?si=ogeT3Mc9rrv6kAxH", cta: "Watch Video", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80" },
    { title: "3MTT Cohort 1 Picnic", desc: "Fun and networking with Cohort 1.", link: "https://youtu.be/rglnOYvqQEM?si=rfjSRIVsgcbZk3ty", cta: "Watch Highlights", img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80" },
    { title: "3MTT CRS Fellows Day Out", desc: "Cross River State Fellows Day Out.", link: "https://youtu.be/rglnOYvqQEM?si=rfjSRIVsgcbZk3ty", cta: "Watch Highlights", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80" },
    { title: "3MTT Orientation", desc: "Dahel Technologies orientation for new fellows.", link: "https://youtu.be/OBwH_7xqf8o?si=X_dnb-kB4RnKJtjW", cta: "Watch Orientation", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" },
    { title: "Tech Riff", desc: "Join our regular Spaces discussions on the latest in technology.", link: "https://x.com/i/spaces/1yNGaLVjoZVKj", cta: "Listen on X", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80" }
  ];

  return (
    <div className="pb-24 bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/30 blur-3xl rounded-full -z-10" />
        <div className="max-w-7xl mx-auto w-full">
          <span className="text-electric-blue font-bold tracking-wider uppercase text-sm mb-4 block flex items-center gap-2"><Calendar size={16}/> Events & Webinars</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-navy-900 max-w-2xl leading-[1.1] mb-6">
            Dahel Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Programs.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-10">
            Conferences, graduations, community meetups and live tech discussions. See what's happening at Dahel.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 w-full pt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col h-full group hover:shadow-md transition-all hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image src={prog.img} alt={prog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <PlayCircle size={48} className="text-white drop-shadow-md" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-electric-blue transition-colors">{prog.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{prog.desc}</p>
                <Link href={prog.link} target="_blank" className="text-electric-blue font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                  <PlayCircle size={18}/> {prog.cta} <ArrowRight size={16}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
