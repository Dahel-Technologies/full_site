"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  DollarSign, 
  Share2, 
  UserCheck, 
  Sparkles, 
  Globe2, 
  GraduationCap, 
  Briefcase, 
  Award, 
  TrendingUp, 
  ExternalLink, 
  ChevronDown, 
  Calculator, 
  FileSpreadsheet, 
  Database, 
  BarChart3, 
  Brain, 
  Code2, 
  HeartHandshake, 
  Lightbulb, 
  Megaphone,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import ShinyText from "@/components/animations/ShinyText";
import IridescentButton from "@/components/IridescentButton";

const TALLY_FORM_URL = "https://tally.so/r/8NNLRl";

export default function ReferralProgramPage() {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Calculator State
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [referredCount, setReferredCount] = useState<number>(5);
  const [avgCourseFee, setAvgCourseFee] = useState<number>(60000); // ₦60,000 or $100

  const handleCurrencySwitch = (curr: "NGN" | "USD") => {
    setCurrency(curr);
    if (curr === "NGN") {
      setAvgCourseFee(60000);
    } else {
      setAvgCourseFee(100);
    }
  };

  const calculateCommission = () => {
    return Math.round(referredCount * avgCourseFee * 0.05);
  };

  const formatCurrency = (val: number) => {
    if (currency === "NGN") {
      return `₦${val.toLocaleString()}`;
    }
    return `$${val.toLocaleString()}`;
  };

  const steps = [
    {
      step: "01",
      title: "Register",
      tagline: "Free & Fast Setup",
      desc: "Join the Dahel Technologies Referral Program.",
      actionText: "Fill out the quick signup form in under 2 minutes.",
      icon: UserCheck,
      badgeColor: "bg-blue-600 text-white shadow-blue-500/30",
      accentBorder: "group-hover:border-blue-400/80 group-hover:shadow-[0_20px_40px_rgba(0,86,210,0.15)]",
      gradient: "from-blue-500/10 to-transparent",
      iconBg: "bg-gradient-to-br from-blue-500 to-electric-blue text-white"
    },
    {
      step: "02",
      title: "Share",
      tagline: "Spread the Word",
      desc: "Tell friends, family, colleagues, classmates, and your online community about our training programmes.",
      actionText: "Share via WhatsApp, LinkedIn, Twitter, group chats, or 1-on-1 conversations.",
      icon: Share2,
      badgeColor: "bg-purple-600 text-white shadow-purple-500/30",
      accentBorder: "group-hover:border-purple-400/80 group-hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)]",
      gradient: "from-purple-500/10 to-transparent",
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600 text-white"
    },
    {
      step: "03",
      title: "Refer",
      tagline: "Tracked & Verified",
      desc: "Connect interested learners through the approved referral process so your referrals can be tracked.",
      actionText: "Guide your referrals to enrol with your designated referral code or link.",
      icon: Users,
      badgeColor: "bg-pink-600 text-white shadow-pink-500/30",
      accentBorder: "group-hover:border-pink-400/80 group-hover:shadow-[0_20px_40px_rgba(216,17,89,0.15)]",
      gradient: "from-pink-500/10 to-transparent",
      iconBg: "bg-gradient-to-br from-pink-500 to-magenta-600 text-white"
    },
    {
      step: "04",
      title: "Earn 5%",
      tagline: "Direct Payouts",
      desc: "When a referred learner successfully enrols in an eligible course and meets the programme requirements, you earn 5% of the qualifying course fee.",
      actionText: "Receive commission in Naira or USD equivalent according to payout terms.",
      icon: DollarSign,
      badgeColor: "bg-emerald-600 text-white shadow-emerald-500/30",
      accentBorder: "group-hover:border-emerald-400/80 group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)]",
      gradient: "from-emerald-500/10 to-transparent",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white"
    }
  ];

  const coursesReferrable = [
    {
      title: "Data Analytics",
      description: "End-to-end analytics pipelines, dashboard design, and business data solutions.",
      icon: BarChart3,
      badge: "Flagship",
      accent: "from-blue-500 to-cyan-500",
      cardGlow: "group-hover:border-blue-400 group-hover:shadow-[0_15px_35px_rgba(0,86,210,0.12)]"
    },
    {
      title: "Microsoft Excel",
      description: "From essential lookups and pivot tables to advanced formulas and automation.",
      icon: FileSpreadsheet,
      badge: "Core Essential",
      accent: "from-emerald-500 to-teal-500",
      cardGlow: "group-hover:border-emerald-400 group-hover:shadow-[0_15px_35px_rgba(16,185,129,0.12)]"
    },
    {
      title: "SQL",
      description: "Querying relational databases, complex joins, indexing, and data warehousing.",
      icon: Database,
      badge: "High Demand",
      accent: "from-indigo-500 to-purple-500",
      cardGlow: "group-hover:border-indigo-400 group-hover:shadow-[0_15px_35px_rgba(99,102,241,0.12)]"
    },
    {
      title: "Power BI",
      description: "Business intelligence modeling, DAX calculations, and interactive executive reporting.",
      icon: TrendingUp,
      badge: "Career Ready",
      accent: "from-amber-500 to-orange-500",
      cardGlow: "group-hover:border-amber-400 group-hover:shadow-[0_15px_35px_rgba(245,158,11,0.12)]"
    },
    {
      title: "Tableau",
      description: "Visual analytics, interactive dashboards, and compelling data storytelling.",
      icon: Layers,
      badge: "Visual Power",
      accent: "from-cyan-500 to-blue-500",
      cardGlow: "group-hover:border-cyan-400 group-hover:shadow-[0_15px_35px_rgba(6,182,212,0.12)]"
    },
    {
      title: "Python",
      description: "Programming for data analysis, Pandas, NumPy, automation, and backend workflows.",
      icon: Code2,
      badge: "Top Versatile",
      accent: "from-violet-500 to-fuchsia-500",
      cardGlow: "group-hover:border-violet-400 group-hover:shadow-[0_15px_35px_rgba(139,92,246,0.12)]"
    },
    {
      title: "Artificial Intelligence",
      description: "Generative AI tools, prompt engineering, AI agents, and emerging technologies.",
      icon: Brain,
      badge: "Future Ready",
      accent: "from-pink-500 to-rose-500",
      cardGlow: "group-hover:border-pink-400 group-hover:shadow-[0_15px_35px_rgba(244,63,94,0.12)]"
    }
  ];

  const whoCanJoinList = [
    {
      role: "Students",
      description: "Share top-tier technical courses with classmates and campus study circles.",
      icon: GraduationCap,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      role: "Graduates",
      description: "Help fellow job seekers and batchmates build job-ready digital capabilities.",
      icon: Award,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      role: "Working Professionals",
      description: "Recommend high-impact upskilling courses to colleagues and team members.",
      icon: Briefcase,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      role: "Entrepreneurs",
      description: "Empower your peers and startup ecosystem with actionable data and AI skills.",
      icon: Lightbulb,
      gradient: "from-amber-500 to-yellow-500"
    },
    {
      role: "Content Creators",
      description: "Monetize your audience by recommending trusted, transformative education.",
      icon: Megaphone,
      gradient: "from-magenta-500 to-pink-500"
    },
    {
      role: "Community Leaders",
      description: "Bring high-value career pathways to youth groups, tech clubs, and associations.",
      icon: Users,
      gradient: "from-sky-500 to-blue-600"
    },
    {
      role: "Alumni Groups",
      description: "Re-engage past cohorts and networks with practical advanced skill modules.",
      icon: HeartHandshake,
      gradient: "from-indigo-500 to-violet-600"
    },
    {
      role: "Friends & Family Members",
      description: "Help siblings, cousins, and friends transition into booming tech professions.",
      icon: Sparkles,
      gradient: "from-rose-500 to-pink-600"
    }
  ];

  const faqs = [
    {
      question: "How much do I earn per referral?",
      answer: "You earn 5% of the eligible course fee for each successful referral."
    },
    {
      question: "Can I refer more than one person?",
      answer: "Yes. You can refer multiple people, subject to the programme rules. Each successful, qualifying referral can earn you a commission."
    },
    {
      question: "Can I refer people outside Nigeria?",
      answer: "You can share Dahel Technologies' training opportunities with interested learners internationally. Available courses, pricing, eligibility, and payment arrangements may vary by location."
    },
    {
      question: "When do I receive my commission?",
      answer: "Commissions are subject to referral tracking, confirmed enrolment and payment, and the official programme's payment schedule."
    },
    {
      question: "How do I join?",
      answer: "Click the Join button above or below to fill the official referral registration form, and our team will get in touch with you."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-navy-900 w-full max-w-full overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-24 md:pb-32 px-4 sm:px-6 bg-gradient-to-b from-[#060e1d] via-navy-900 to-[#0c1d38] text-white overflow-hidden">
        
        {/* Dynamic mesh glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-electric-blue/25 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-magenta-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-10 left-10 w-[400px] h-[300px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.9) 1px, transparent 1px)`,
            backgroundSize: "32px 32px"
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          
          {/* MAIN CATCHPHRASE */}
          <div className="mb-4">
            <span className="text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              REFER. EARN. GROW.
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6 max-w-4xl text-white">
            Get Paid When You Refer Students to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Dahel Technologies!
            </span>
          </h1>

          {/* EARN 5% HIGHLIGHT */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-magenta-600/20 via-purple-600/20 to-blue-600/20 border border-magenta-500/40 px-6 sm:px-8 py-3.5 rounded-2xl mb-8 backdrop-blur-md shadow-[0_0_30px_rgba(216,17,89,0.2)]">
            <div className="w-8 h-8 rounded-full bg-magenta-500/30 flex items-center justify-center text-magenta-300">
              <Zap size={18} />
            </div>
            <span className="text-base sm:text-xl font-bold text-white">
              Earn <span className="text-magenta-400 font-extrabold text-xl sm:text-2xl">5%</span> of the course fee for every successful referral.
            </span>
          </div>

          {/* VALUE PROPOSITION PARAGRAPH */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-6 font-normal">
            Your friends, family, siblings, and colleagues want to learn new skills and grow their careers. You can connect them to practical technology training at Dahel Technologies — and earn money when they enrol.
          </p>

          <p className="text-base sm:text-lg text-blue-200 font-semibold mb-10 tracking-wide">
            Your network is an opportunity. Share it. Earn from it. Help someone grow.
          </p>

          {/* DYNAMIC ANIMATED CTA BUTTON (No static buttons) */}
          <div className="mb-12">
            <IridescentButton
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              theme="dark"
              className="px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-black tracking-wider uppercase shadow-[0_0_40px_rgba(0,86,210,0.5)] hover:scale-105"
            >
              JOIN THE REFERRAL PROGRAM
            </IridescentButton>
          </div>

          {/* REASSURANCE PILLS WITH MODERN GLASS STYLING */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl">
            <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm text-gray-200 font-medium shadow-sm hover:bg-white/10 transition-colors">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              <span>No teaching required</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm text-gray-200 font-medium shadow-sm hover:bg-white/10 transition-colors">
              <CheckCircle2 size={16} className="text-blue-300 shrink-0" />
              <span>No need to be a tech expert</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm text-gray-200 font-medium shadow-sm hover:bg-white/10 transition-colors">
              <CheckCircle2 size={16} className="text-purple-300 shrink-0" />
              <span>Refer people ready to learn</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: YOUR CONNECTIONS COULD EARN YOU MONEY (ELEVATED CARDS) */}
      <section className="py-24 md:py-32 px-4 sm:px-6 bg-slate-50/70 border-b border-gray-200/80 relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-electric-blue font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
              Opportunity In Your Network
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight mb-6">
              Your Connections Could Earn You Money!
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              Imagine earning from simply telling someone about a training opportunity that could help them advance their career. With the Dahel Technologies Referral Program, you earn <strong className="text-navy-900 font-bold">5% of the course fee</strong> for every successful, qualifying referral.
            </p>
          </div>

          {/* 4 ELEVATED INTERACTIVE CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            <div className="group relative bg-white rounded-3xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,86,210,0.12)] hover:border-blue-400/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-electric-blue text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <DollarSign size={26} />
                </div>
                <h3 className="font-black text-xl text-navy-900 mb-2">5% Per Referral</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Earn 5% of the eligible course fee for every successful referral that enrols.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-electric-blue uppercase tracking-wider">
                <span>Direct payout</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(147,51,234,0.12)] hover:border-purple-400/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center mb-6 shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform">
                  <Globe2 size={26} />
                </div>
                <h3 className="font-black text-xl text-navy-900 mb-2">NGN or USD Payouts</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Earn in naira or the applicable US-dollar equivalent, according to the programme’s payment terms.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-purple-600 uppercase tracking-wider">
                <span>Global flexibility</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] hover:border-emerald-400/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <TrendingUp size={26} />
                </div>
                <h3 className="font-black text-xl text-navy-900 mb-2">No Cap On Earnings</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Refer as many eligible learners as you can. Your total earnings can grow with your successful referrals.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600 uppercase tracking-wider">
                <span>Unlimited scale</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-7 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(216,17,89,0.12)] hover:border-pink-400/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-all pointer-events-none" />
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-magenta-600 text-white flex items-center justify-center mb-6 shadow-md shadow-pink-500/20 group-hover:scale-110 transition-transform">
                  <Sparkles size={26} />
                </div>
                <h3 className="font-black text-xl text-navy-900 mb-2">Make an Impact</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Make a difference while earning. Help people discover practical skills in data analytics, AI, and technology.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-magenta-600 uppercase tracking-wider">
                <span>Empower careers</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

          {/* DYNAMIC CALLOUT BANNER (Replaced static button with IridescentButton) */}
          <div className="bg-gradient-to-r from-navy-900 via-[#102347] to-navy-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-navy-700/80 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-electric-blue/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-3 text-center md:text-left relative z-10 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                The more successful referrals you make, the more you can earn.
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Whether you recommend 2 people or 20 people, you get rewarded every time someone begins their learning journey with Dahel.
              </p>
            </div>
            
            <div className="shrink-0 relative z-10">
              <IridescentButton
                href={TALLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                theme="dark"
                className="px-8 py-4 font-bold"
              >
                JOIN THE PROGRAM
              </IridescentButton>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION: INTERACTIVE EARNINGS SIMULATOR (HIGH-TECH FINTECH CARD) */}
      <section className="py-24 px-4 sm:px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200">
              <Calculator size={14} /> Interactive Referral Calculator
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mb-3 tracking-tight">
              See How Much You Could Earn
            </h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto">
              Test different numbers of student referrals and average course fees to estimate your potential 5% commission earnings.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-navy-900 to-[#0e2243] text-white rounded-3xl p-6 sm:p-10 border border-slate-700/60 shadow-[0_20px_50px_rgba(10,25,47,0.3)] relative overflow-hidden">
            
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Currency switch */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 flex-wrap gap-4 relative z-10">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-0.5">Currency Switcher</span>
                <span className="text-sm font-semibold text-white">Select Naira (NGN) or US Dollars (USD)</span>
              </div>
              <div className="inline-flex p-1 bg-white/10 rounded-xl border border-white/15 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => handleCurrencySwitch("NGN")}
                  className={`px-4 py-2 text-xs sm:text-sm font-black rounded-lg transition-all cursor-pointer ${
                    currency === "NGN" 
                      ? "bg-electric-blue text-white shadow-lg" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  NGN (₦)
                </button>
                <button
                  type="button"
                  onClick={() => handleCurrencySwitch("USD")}
                  className={`px-4 py-2 text-xs sm:text-sm font-black rounded-lg transition-all cursor-pointer ${
                    currency === "USD" 
                      ? "bg-electric-blue text-white shadow-lg" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            {/* Slider 1: Referred Count */}
            <div className="mb-8 relative z-10">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm sm:text-base font-bold text-gray-200">
                  Number of Successful Referrals
                </label>
                <span className="text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 bg-white/10 px-3.5 py-1 rounded-xl border border-white/15">
                  {referredCount} {referredCount === 1 ? "student" : "students"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={referredCount}
                onChange={(e) => setReferredCount(parseInt(e.target.value) || 1)}
                className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-blue-400"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>1 referral</span>
                <span>25 referrals</span>
                <span>50 referrals</span>
              </div>
            </div>

            {/* Slider 2: Average Course Price */}
            <div className="mb-10 relative z-10">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm sm:text-base font-bold text-gray-200">
                  Average Qualifying Course Fee
                </label>
                <span className="text-lg sm:text-2xl font-black text-white bg-white/10 px-3.5 py-1 rounded-xl border border-white/15">
                  {formatCurrency(avgCourseFee)}
                </span>
              </div>
              <input
                type="range"
                min={currency === "NGN" ? 20000 : 40}
                max={currency === "NGN" ? 250000 : 500}
                step={currency === "NGN" ? 5000 : 10}
                value={avgCourseFee}
                onChange={(e) => setAvgCourseFee(parseInt(e.target.value) || 0)}
                className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-magenta-500"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>{currency === "NGN" ? "₦20,000" : "$40"}</span>
                <span>{currency === "NGN" ? "₦135,000" : "$270"}</span>
                <span>{currency === "NGN" ? "₦250,000" : "$500"}</span>
              </div>
            </div>

            {/* Calculation Result Display */}
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md relative z-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-300 font-extrabold block mb-1">
                  Estimated 5% Commission Payout
                </span>
                <div className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 tracking-tight">
                  {formatCurrency(calculateCommission())}
                </div>
                <p className="text-xs text-gray-400 mt-2 font-medium">
                  Calculated at 5% of the qualifying course fee according to the programme terms.
                </p>
              </div>

              <div className="w-full sm:w-auto shrink-0">
                <IridescentButton
                  href={TALLY_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  theme="dark"
                  className="w-full justify-center text-sm font-bold"
                >
                  CLAIM YOUR 5%
                </IridescentButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: 25,000+ STUDENTS SOCIAL PROOF */}
      <section className="py-24 md:py-32 px-4 sm:px-6 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-purple-900/20 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
                <Globe2 size={14} /> Proven Track Record & Global Reach
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Over 25,000 Students Across at Least 6 Countries — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Join the Growth!</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Dahel Technologies supports learners in developing practical technology skills for career growth and professional development.
              </p>

              <p className="text-gray-300 text-base leading-relaxed">
                With a learning community spanning <strong>more than 25,000 students in at least six countries</strong>, Dahel is building opportunities for people who want to learn, improve, and prepare for the future.
              </p>

              <p className="text-gray-200 text-lg font-semibold bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                Now, you can help more people discover those opportunities — and earn a commission when they enrol through your referral.
              </p>

              <p className="text-xl text-blue-300 font-extrabold italic">
                “Don&apos;t just tell people about opportunities. Get rewarded for connecting them to one.”
              </p>
            </div>

            {/* STATS TILES (ENHANCED CARDS) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
              
              <div className="bg-gradient-to-br from-navy-800 to-navy-800/60 border border-white/10 hover:border-blue-400/50 rounded-3xl p-6 text-center shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                  25,000+
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">
                  Students Reached
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy-800 to-navy-800/60 border border-white/10 hover:border-purple-400/50 rounded-3xl p-6 text-center shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-2">
                  6+
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">
                  Countries Worldwide
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy-800 to-navy-800/60 border border-white/10 hover:border-emerald-400/50 rounded-3xl p-6 text-center shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mb-2">
                  5%
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">
                  Commission Payout
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy-800 to-navy-800/60 border border-white/10 hover:border-amber-400/50 rounded-3xl p-6 text-center shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300 mb-2">
                  100%
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">
                  Free to Join
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION: HOW IT WORKS (REDESIGNED 4-STEP CARDS) */}
      <section id="how-it-works" className="py-24 md:py-32 px-4 sm:px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-magenta-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
              Clear & Straightforward
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-xl font-bold text-gray-700">
              Four simple steps. One opportunity to earn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-16">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className={`group relative bg-white hover:bg-slate-50/50 rounded-3xl p-7 border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 ${item.accentBorder}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-black text-slate-200 group-hover:text-navy-900 transition-colors">
                        {item.step}
                      </span>
                      <div className={`w-13 h-13 rounded-2xl flex items-center justify-center shadow-md ${item.iconBg} group-hover:scale-110 transition-transform`}>
                        <Icon size={24} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-navy-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-black text-electric-blue uppercase tracking-wider mb-3">
                      {item.tagline}
                    </p>
                    <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 font-medium">
                    {item.actionText}
                  </div>
                </div>
              );
            })}
          </div>

          {/* DYNAMIC ANIMATED CTA (No static buttons) */}
          <div className="flex justify-center">
            <IridescentButton
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base font-bold shadow-xl"
            >
              START REFERRING TODAY
            </IridescentButton>
          </div>

        </div>
      </section>

      {/* SECTION: WHAT CAN YOU REFER? (POLISHED TECH CARDS) */}
      <section className="py-24 md:py-32 px-4 sm:px-6 bg-slate-50/70 border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-electric-blue font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
              Eligible Course Catalog
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight mb-4">
              What Can You Refer?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-normal">
              Help people discover practical training in today’s most sought-after technologies:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {coursesReferrable.map((c, i) => {
              const Icon = c.icon;
              return (
                <SpotlightCard
                  key={i}
                  className={`group bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${c.cardGlow}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${c.accent} shadow-md group-hover:scale-105 transition-transform`}>
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-navy-900 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
                        {c.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-navy-900 mb-2 group-hover:text-electric-blue transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {c.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                    <CheckCircle2 size={15} /> 5% Commission Eligible
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {/* IMPACT SUBTEXT */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-black text-navy-900 mb-3">
              Skills That Change Careers
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether someone wants to <strong>improve their CV</strong>, <strong>become more competitive at work</strong>, <strong>change careers</strong>, or <strong>develop practical digital skills</strong>, you can connect them to a learning opportunity.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION: WHO CAN JOIN? (VIBRANT PERSONAS) */}
      <section className="py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-purple-600 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
              Open to Everyone
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight mb-4">
              Who Can Join?
            </h2>
            <p className="text-xl text-navy-900 font-bold mb-2">
              Almost anyone with a network and a willingness to share an opportunity can get started.
            </p>
            <p className="text-gray-600 text-base sm:text-lg">
              You do not need thousands of followers. Start with the people you already know.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {whoCanJoinList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-purple-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(147,51,234,0.1)] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${item.gradient} mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-black text-navy-900 mb-2 group-hover:text-electric-blue transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CALLOUT BANNER (Replaced static button with IridescentButton) */}
          <div className="bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80 border-2 border-purple-200/90 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-md">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white mb-4 shadow-lg shadow-purple-500/20">
              <Sparkles size={26} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3">
              One conversation could lead to a referral.
            </h3>
            <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
              Multiple successful referrals could grow your earnings. Share with course-mates, family WhatsApp groups, LinkedIn connections, and colleagues.
            </p>
            <div className="inline-flex justify-center">
              <IridescentButton
                href={TALLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 font-bold"
              >
                JOIN THE REFERRAL PROGRAM
              </IridescentButton>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL HIGH-IMPACT CTA SECTION (No static buttons, raw link text removed per instructions) */}
      <section className="py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-navy-900 via-[#0b1a33] to-navy-900 text-white relative overflow-hidden">
        
        {/* Glow circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-electric-blue/20 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          
          <span className="text-magenta-400 font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-4 block">
            REFER. EARN. GROW.
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
            Ready to Earn From Your Network?
          </h2>

          <p className="text-xl sm:text-2xl text-blue-200 font-bold mb-4">
            You already have connections. Now put them to work.
          </p>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-10 font-normal">
            Join the Dahel Technologies Referral Program, share our training opportunities, and earn <strong className="text-white">5% of the course fee</strong> for each successful, qualifying referral.
          </p>

          {/* DYNAMIC ANIMATED BUTTON (The button is enough per instruction) */}
          <div className="mb-4">
            <IridescentButton
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              theme="dark"
              className="px-10 py-5 text-base sm:text-lg font-black tracking-wider shadow-[0_0_50px_rgba(216,17,89,0.5)] hover:scale-105"
            >
              JOIN THE PROGRAM NOW
            </IridescentButton>
          </div>

        </div>
      </section>

      {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 md:py-32 px-4 sm:px-6 bg-slate-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-electric-blue font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Everything you need to know about the Dahel Technologies Referral Program.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-navy-900 hover:text-electric-blue transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-electric-blue" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-slate-50/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION: PROGRAM RULES & LEGAL NOTICE */}
      <section className="py-12 px-4 sm:px-6 bg-gray-100 border-t border-gray-200 text-xs sm:text-sm text-gray-500">
        <div className="max-w-4xl mx-auto text-center leading-relaxed">
          <p className="font-semibold text-gray-700 mb-2">
            Programme Terms & Disclaimers:
          </p>
          <p>
            All commissions are calculated at 5% of the qualifying course fee. Any US-dollar amount is based on the applicable course price and payment terms. Referral tracking, eligibility, and payout conditions are subject to the official programme rules.
          </p>
        </div>
      </section>

    </div>
  );
}
