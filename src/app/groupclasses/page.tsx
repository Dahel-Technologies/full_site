"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Users, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  Award, 
  Sparkles, 
  BookOpen, 
  Building2, 
  ShieldCheck, 
  Layers, 
  Zap, 
  UserCheck, 
  ChevronRight,
  TrendingUp,
  Brain,
  FileSpreadsheet,
  Database,
  BarChart3,
  Phone
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import SpecularButton from "@/components/animations/SpecularButton";

export default function GroupClassesPage() {
  const cohorts = [
    {
      title: "Data Analytics Master Cohort",
      level: "Beginner to Career-Ready",
      tools: "Excel • SQL • Power BI • Business Problem Solving",
      duration: "6 Weeks (Live Interactive Batches)",
      schedule: "Weekend (Saturdays & Sundays) or Weekday Evenings",
      desc: "Our flagship cohort for aspiring data professionals. Learn how to clean messy datasets, build robust databases, and craft executive dashboards that win jobs.",
      highlights: [
        "Hands-on capstone portfolio projects",
        "Live instructor Q&A and code reviews",
        "Collaborative peer breakout rooms",
        "Interview prep & resume optimization"
      ],
      badge: "Most Popular",
      color: "border-blue-200"
    },
    {
      title: "Python for Data & AI Engineering",
      level: "Intermediate",
      tools: "Python • Pandas • NumPy • Matplotlib • AI Agents",
      duration: "8 Weeks (Intensive Labs)",
      schedule: "Tuesday & Thursday Evenings + Weekend Lab",
      desc: "Go beyond spreadsheets. Master algorithmic data pipelines, automation scripts, and integrate modern generative AI models into production workflows.",
      highlights: [
        "Real-world data automation tasks",
        "Intro to Machine Learning & predictive algorithms",
        "AI engineering workflow integration",
        "GitHub repository building"
      ],
      badge: "In-Demand",
      color: "border-purple-200"
    },
    {
      title: "Corporate & Team Upskilling",
      level: "Customized for Organizations",
      tools: "Custom Stack (Excel, BI, Cloud, AI Tools)",
      duration: "Flexible (1 - 4 Weeks)",
      schedule: "Tailored to Company Working Hours",
      desc: "Custom training for departments, SMEs, and government agencies seeking to turn their workforce into data-empowered decision makers.",
      highlights: [
        "Curriculum tailored to your industry data",
        "Pre- and post-training competency assessments",
        "Dedicated corporate project mentors",
        "Executive progress & ROI reports"
      ],
      badge: "Enterprise",
      color: "border-emerald-200"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-24 w-full max-w-full overflow-hidden text-navy-900">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-16 md:pt-20 pb-16 md:pb-24 px-4 sm:px-6 bg-gradient-to-b from-purple-50/40 via-white to-slate-50 border-b border-gray-200/70 overflow-hidden">
        
        {/* INTEGRATED NOTICE BANNER */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-white/95 border border-purple-200/90 rounded-2xl p-4 sm:p-5 shadow-sm backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
              <span className="inline-block bg-purple-700 text-white font-extrabold text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full mr-2 shadow-xs">
                1-ON-1 SESSIONS
              </span>
              <span>
                Need flexible private scheduling or 1-on-1 mentorship tailored directly to your personal pace?
              </span>
            </div>
            <Link
              href="/privatesessions"
              className="inline-flex items-center justify-center bg-navy-900 hover:bg-electric-blue text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:scale-105 shrink-0 shadow-sm gap-1.5"
            >
              Switch to Private Sessions <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 font-bold text-xs uppercase tracking-widest mb-6 shadow-xs">
            <Users size={14} className="text-purple-600" />
            Dahel Technologies Group Classes & Cohorts
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-navy-900 max-w-4xl leading-[1.15] mb-6">
            <span>Learn Together. Build Faster.</span>
            <div className="mt-3 text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600">
              Grow with Ambitious Peers
            </div>
          </h1>

          <p className="text-base sm:text-xl text-gray-700 max-w-3xl mb-8 leading-relaxed font-medium">
            Join a vibrant community of ambitious learners. Dahel Group Classes bring structured curriculum, live instructor coaching, peer accountability, and real-world team projects into an energizing cohort experience.
          </p>

          {/* Quick Perks */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-xs sm:text-sm font-semibold text-gray-700 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl border border-gray-200 shadow-sm max-w-3xl">
            <div className="flex items-center gap-2">
              <Calendar className="text-electric-blue" size={16} />
              <span>Weekend & Evening Batches</span>
            </div>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Users className="text-purple-600" size={16} />
              <span>Collaborative Community</span>
            </div>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Award className="text-green-600" size={16} />
              <span>Certificate of Completion</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-6">
            <a 
              href="https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20am%20interested%20in%20joining%20an%20upcoming%20Group%20Class%20Cohort." 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <SpecularButton className="w-full sm:w-auto justify-center">
                <MessageCircle size={20} className="mr-2 text-green-400" />
                Join Next Cohort on WhatsApp
              </SpecularButton>
            </a>
            
            <Link 
              href="/privatesessions" 
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-navy-900 border-2 border-gray-200 font-bold px-8 py-4 rounded-full text-base transition-all hover:-translate-y-0.5 shadow-sm text-center"
            >
              Prefer 1-on-1? View Private Sessions
            </Link>
          </div>

          <div className="flex flex-col items-center gap-3 text-xs sm:text-sm text-gray-600 font-medium">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <span className="flex items-center gap-1.5">
                <Mail size={16} className="text-electric-blue" /> Inquiries: <a href="mailto:daheltechies@gmail.com" className="text-navy-900 font-bold hover:underline">daheltechies@gmail.com</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={16} className="text-green-600" /> WhatsApp (Nora): <a href="https://wa.me/2347047581704" target="_blank" rel="noopener noreferrer" className="text-navy-900 font-bold hover:underline">+234 704 758 1704</a>
              </span>
            </div>
            
            <div className="bg-purple-50/90 border border-purple-200 px-4 py-2 rounded-full text-xs text-navy-900 font-semibold shadow-2xs">
              For Private Sessions Specific Inquiries, chat with Vael:{" "}
              <a
                href="https://wa.me/13107081983?text=Hello%20Vael!%20I%20have%20an%20inquiry%20regarding%20Dahel%20Private%20Sessions."
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-700 font-extrabold underline hover:text-purple-900"
              >
                +1 (310) 708 1983 →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FEATURED GROUP COHORTS */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-electric-blue font-bold uppercase tracking-wider text-xs sm:text-sm">Upcoming Batches</span>
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 mt-2 mb-4">
              Featured Group Programs
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Cohorts are intentionally kept interactive to ensure every learner can participate, ask questions, and receive constructive feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cohorts.map((cohort, i) => (
              <SpotlightCard 
                key={i}
                className={`bg-white rounded-3xl p-8 border ${cohort.color} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-electric-blue font-bold text-xs uppercase tracking-wider">
                      {cohort.badge}
                    </span>
                    <span className="text-xs text-gray-400 font-bold flex items-center gap-1">
                      <Clock size={12} /> {cohort.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-navy-900 mb-2">{cohort.title}</h3>
                  <div className="text-xs font-bold text-purple-700 uppercase tracking-wide mb-4">
                    {cohort.tools}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {cohort.desc}
                  </p>

                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-6">
                    <div className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Schedule:</div>
                    <div className="text-xs text-gray-600 flex items-center gap-2">
                      <Calendar size={14} className="text-electric-blue shrink-0" />
                      <span>{cohort.schedule}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">What's Included:</div>
                    <ul className="space-y-2">
                      {cohort.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                          <CheckCircle2 size={14} className="text-electric-blue shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20would%20like%20to%20register%20for%20the%20${encodeURIComponent(cohort.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-electric-blue text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors text-center"
                >
                  Apply for this Cohort <ArrowRight size={16} />
                </a>
              </SpotlightCard>
            ))}
          </div>

          {/* PRIVATE SESSIONS COMPARISON BANNER */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-amber-400 font-black uppercase tracking-wider text-xs">Custom Flexibility</span>
              <h3 className="text-2xl sm:text-4xl font-black mt-1 mb-3">Need 100% Personal Instructor Focus?</h3>
              <p className="text-blue-100 text-base leading-relaxed">
                If your work or study schedule clashes with set group times, our <strong>Private Sessions</strong> offer flexible 1-on-1 pacing, customized syllabus depth, and direct mentorship from Microsoft Certified Trainers.
              </p>
            </div>
            <Link 
              href="/privatesessions"
              className="bg-white hover:bg-gray-100 text-navy-900 font-extrabold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shrink-0 shadow-lg text-center"
            >
              Explore Private Sessions →
            </Link>
          </div>

        </div>
      </section>

      {/* 4. WHY LEARN IN A DAHEL GROUP CLASS? */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 mb-4">
              The Power of Group Learning
            </h2>
            <p className="text-lg text-gray-600">
              Why thousands of students thrive in Dahel's cohort model.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Peer Accountability",
                desc: "Stay motivated alongside fellow students pushing toward similar career goals.",
                icon: UserCheck
              },
              {
                title: "Live Interactive Discussions",
                desc: "Ask questions in real time, see different problem-solving angles, and debate real data challenges.",
                icon: MessageCircle
              },
              {
                title: "Team Capstones",
                desc: "Simulate corporate cross-functional project teams. Build portfolio assets that stand out.",
                icon: Layers
              },
              {
                title: "Global Network",
                desc: "Connect with alumni working across Nigeria, the UK, the US, Canada, and elsewhere.",
                icon: Building2
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-electric-blue flex items-center justify-center mb-4">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. REGISTRATION & INQUIRIES */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50 border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-navy-900 mb-4">
            Join the Next Class Batch Today
          </h2>
          <p className="text-gray-600 mb-8 text-base">
            Reach out directly to our admissions team on WhatsApp or send an email to reserve your seat in the next cohort.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2347047581704?text=Hello%20Nora!%20I%20would%20like%20to%20register%20for%20an%20upcoming%20Dahel%20Group%20Class."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-base transition-all shadow-md"
            >
              <MessageCircle size={20} /> Chat with Nora on WhatsApp (+234 704 758 1704)
            </a>
            <a
              href="mailto:daheltechies@gmail.com?subject=Inquiry%20about%20Group%20Classes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-navy-900 border border-gray-200 font-bold py-4 px-8 rounded-full text-base transition-colors"
            >
              <Mail size={18} /> Email Admissions
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
