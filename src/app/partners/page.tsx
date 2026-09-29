import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function PartnersPage() {
  return (
    <div className="py-16 md:py-24 min-h-screen w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-navy-900 rounded-3xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-16 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl rounded-full" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Building skills at scale?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Dahel works with organizations, schools, institutions and programs to deliver high-quality technology education and solutions.
              </p>
              <Link href="mailto:contactdahelgroup@gmail.com" className="inline-flex items-center gap-2 bg-white text-navy-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
                Partner With Dahel <ArrowRight size={20} />
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
    </div>
  );
}
