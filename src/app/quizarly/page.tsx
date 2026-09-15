import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function QuizarlyPage() {
  return (
    <div className="py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50 to-transparent -z-10" />
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square max-w-md mx-auto bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-8 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                  <Zap size={24} />
                </div>
                <span className="text-xs font-bold bg-gray-100 px-3 py-1 rounded-full">Quizarly</span>
              </div>
              <h4 className="text-2xl font-bold text-navy-900 mb-4">Python Fundamentals</h4>
              <p className="text-gray-500 mb-8">Test your knowledge on basic Python concepts, data types, and control flows.</p>
              
              <div className="space-y-3 mt-auto">
                <div className="h-14 bg-gray-50 rounded-xl flex items-center px-4 border border-gray-100"><div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-3"></div><div className="h-2 w-1/2 bg-gray-200 rounded"></div></div>
                <div className="h-14 bg-purple-50 rounded-xl flex items-center px-4 border border-purple-200"><div className="w-4 h-4 rounded-full border-4 border-purple-500 mr-3"></div><div className="h-2 w-2/3 bg-purple-200 rounded"></div></div>
                <div className="h-14 bg-gray-50 rounded-xl flex items-center px-4 border border-gray-100"><div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-3"></div><div className="h-2 w-1/3 bg-gray-200 rounded"></div></div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-4 block">Meet Quizarly</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">For tests. For fun. <br/>For life.</h2>
            <p className="text-xl text-gray-600 mb-10">Create assessments. Test knowledge. Track performance. Compete. Learn.</p>
            
            <div className="flex flex-wrap gap-3 mb-12">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">Schools</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">Organizations</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">Professionals</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">Parents</span>
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">Students</span>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div>
                <h4 className="font-bold text-navy-900 mb-2">Create</h4>
                <p className="text-sm text-gray-600">Build powerful quizzes and assessments.</p>
              </div>
              <div>
                <h4 className="font-bold text-navy-900 mb-2">Play</h4>
                <p className="text-sm text-gray-600">Challenge yourself and others.</p>
              </div>
              <div>
                <h4 className="font-bold text-navy-900 mb-2">Understand</h4>
                <p className="text-sm text-gray-600">Use analytics to see what people actually know.</p>
              </div>
            </div>
            
            <Link href="https://www.quizarly.com/" target="_blank" className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-navy-800 transition-colors">
              Explore Quizarly <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
