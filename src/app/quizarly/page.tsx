import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, Trophy, Target, Sparkles, Brain } from "lucide-react";
import LetterGlitch from '@/components/LetterGlitch';
import BorderGlow from '@/components/BorderGlow';

export default function QuizarlyPage() {
  return (
    <div className="py-16 md:py-24 min-h-screen overflow-hidden w-full max-w-full relative bg-[#020617]">
      {/* Dynamic Background — strictly clipped inside container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <LetterGlitch />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] max-w-full bg-[#9810fa]/20 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] max-w-full bg-[#235DD8]/20 blur-[100px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] left-[10%] w-[300px] h-[300px] max-w-full bg-[#4DE26B]/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 pt-6 md:pt-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-1 relative z-20 w-full max-w-full">
            <div className="mb-6 md:mb-8">
              <Image src="/resources/quizarly_logo_site.png" alt="Quizarly" width={200} height={65} className="object-contain w-auto h-10 sm:h-12 md:h-16" priority />
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Learn. Compete.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcbb00] to-[#f97316]">Dominate.</span>
            </h2>
            
            <p className="text-base sm:text-xl md:text-2xl text-slate-300 mb-8 md:mb-10 font-medium max-w-lg leading-relaxed">
              Gamify your learning experience. Create powerful assessments, challenge yourself, and track your true performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12 w-full">
              <Link href="https://player.quizarly.com/quizme" target="_blank" className="group relative inline-flex items-center justify-center gap-3 bg-[#9810fa] hover:bg-[#ac4bff] text-white px-6 py-4 rounded-2xl font-bold text-base sm:text-xl transition-all shadow-[0_0_40px_-10px_#9810fa] hover:scale-105 active:scale-95 text-center w-full sm:w-auto">
                <Brain size={22} className="group-hover:rotate-12 transition-transform shrink-0" />
                Take a Quiz
              </Link>
              <Link href="https://www.quizarly.com/" target="_blank" className="group inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-6 py-4 rounded-2xl font-bold text-base sm:text-xl transition-all backdrop-blur-sm text-center w-full sm:w-auto">
                Explore Platform <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 bg-white/5 p-5 sm:p-6 rounded-3xl border border-white/10 backdrop-blur-md w-full">
              <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/20 shadow-lg shadow-[#fcbb00]/10 shrink-0">
                  <Target className="text-[#fcbb00]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg sm:text-xl tracking-wide">Assess</h4>
                  <p className="text-xs sm:text-base text-slate-300 font-medium leading-relaxed">Build beautiful, interactive quizzes instantly.</p>
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/20 shadow-lg shadow-[#ac4bff]/10 shrink-0">
                  <Zap className="text-[#ac4bff]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg sm:text-xl tracking-wide">Engage</h4>
                  <p className="text-xs sm:text-base text-slate-300 font-medium leading-relaxed">Run real-time challenges and tournaments.</p>
                </div>
              </div>
              <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/20 shadow-lg shadow-[#22c55e]/10 shrink-0">
                  <Trophy className="text-[#22c55e]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg sm:text-xl tracking-wide">Win</h4>
                  <p className="text-xs sm:text-base text-slate-300 font-medium leading-relaxed">Track scores, climb ranks, and earn rewards.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating UI Elements — desktop only to avoid mobile overflow */}
          <div className="order-2 relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              
              {/* Main Card */}
              <BorderGlow 
                containerClassName="absolute inset-0 z-20 transform hover:-translate-y-2 transition-transform duration-500 shadow-[0_0_50px_rgba(152,16,250,0.2)]"
                className="p-10 flex flex-col bg-[#0f172a]/95 backdrop-blur-2xl"
                glowColor="#9810fa"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="w-16 h-16 bg-[#9810fa]/20 text-[#c07eff] rounded-2xl flex items-center justify-center border border-[#9810fa]/30">
                    <Brain size={32} />
                  </div>
                  <span className="text-sm font-bold bg-[#fcbb00] text-black px-4 py-2 rounded-full shadow-[0_0_15px_rgba(252,187,0,0.4)] tracking-wide">LIVE QUIZ</span>
                </div>
                <h4 className="text-3xl font-bold text-white mb-3">Python Fundamentals</h4>
                <p className="text-slate-400 mb-8 text-lg">Which of the following is the correct way to output "Hello" in Python?</p>
                
                <div className="space-y-4 mt-auto">
                  <div className="h-16 bg-white/5 rounded-2xl flex items-center px-6 border border-white/10 hover:bg-white/10 cursor-pointer transition-colors">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-500 mr-4 flex-shrink-0"></div>
                    <span className="text-slate-300 font-medium text-lg font-mono">1. Print("Hello")</span>
                  </div>
                  <div className="h-16 bg-[#9810fa]/20 rounded-2xl flex items-center px-6 border border-[#9810fa]/50 shadow-[0_0_20px_rgba(152,16,250,0.25)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    <div className="w-6 h-6 rounded-full border-4 border-[#c07eff] mr-4 flex items-center justify-center flex-shrink-0">
                      <div className="w-2.5 h-2.5 bg-[#c07eff] rounded-full"></div>
                    </div>
                    <span className="text-white font-bold text-lg font-mono tracking-wide">2. print("Hello")</span>
                  </div>
                  <div className="h-16 bg-white/5 rounded-2xl flex items-center px-6 border border-white/10 hover:bg-white/10 cursor-pointer transition-colors">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-500 mr-4 flex-shrink-0"></div>
                    <span className="text-slate-300 font-medium text-lg font-mono">3. echo "Hello"</span>
                  </div>
                </div>
              </BorderGlow>
              
              {/* Floating Element 1 */}
              <div className="absolute -right-8 top-12 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl z-30 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#22c55e]/20 text-[#22c55e] rounded-xl flex items-center justify-center">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300 font-bold uppercase tracking-wider">Rank</div>
                    <div className="text-white font-black text-lg">#1 Global</div>
                  </div>
                </div>
              </div>

              {/* Floating Element 2 */}
              <div className="absolute -left-10 bottom-24 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl z-30 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#fcbb00]/20 text-[#fcbb00] rounded-xl flex items-center justify-center">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300 font-bold uppercase tracking-wider">Combo</div>
                    <div className="text-white font-black text-lg">12x Streak</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
