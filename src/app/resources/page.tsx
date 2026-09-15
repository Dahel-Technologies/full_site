import Link from "next/link";
import { ArrowRight, Book } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Don't just watch. Read. Practice. Build.</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Books, guides, templates and practical resources from Dahel.</p>
          </div>
          <Link href="#" className="text-electric-blue font-medium flex items-center gap-2 hover:gap-3 transition-all">
            Browse Resources <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl mb-4 relative overflow-hidden group-hover:shadow-lg transition-all border border-gray-200 flex items-center justify-center">
                <Book className="text-gray-300" size={64} />
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-1">Practical Guide {i}</h3>
              <p className="text-gray-500 text-sm mb-3">Short description of the resource goes here.</p>
              <div className="font-bold text-navy-900">₦X / $X</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
