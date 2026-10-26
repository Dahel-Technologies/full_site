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
  ArrowUpRight
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";

const TALLY_FORM_URL = "https://tally.so/r/8NNLRl";

export default function ReferralProgramPage() {
  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Calculator State
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [referredCount, setReferredCount] = useState<number>(5);
  const [avgCourseFee, setAvgCourseFee] = useState<number>(60000); // 60,000 NGN or $100 USD

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
      color: "from-blue-600 to-cyan-500",
      accentBg: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      step: "02",
      title: "Share",
      tagline: "Spread the Word",
      desc: "Tell friends, family, colleagues, classmates, and your online community about our training programmes.",
      actionText: "Share via WhatsApp, LinkedIn, Twitter, group chats, or 1-on-1 conversations.",
      icon: Share2,
      color: "from-indigo-600 to-purple-500",
      accentBg: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      step: "03",
      title: "Refer",
      tagline: "Tracked & Verified",
      desc: "Connect interested learners through the approved referral process so your referrals can be tracked.",
      actionText: "Guide your referrals to enrol with your designated referral code or link.",
      icon: Users,
      color: "from-magenta-600 to-pink-500",
      accentBg: "bg-pink-50 text-magenta-600 border-pink-200"
    },
    {
      step: "04",
      title: "Earn 5%",
      tagline: "Direct Payouts",
      desc: "When a referred learner successfully enrols in an eligible course and meets the programme requirements, you earn 5% of the qualifying course fee.",
      actionText: "Receive commission in Naira or USD equivalent according to payout terms.",
      icon: DollarSign,
      color: "from-emerald-600 to-teal-500",
      accentBg: "bg-emerald-50 text-emerald-600 border-emerald-200"
    }
  ];

  const coursesReferrable = [
    {
      title: "Data Analytics",
      description: "End-to-end analytics pipelines, dashboard design, and business data solutions.",
      icon: BarChart3,
      badge: "High Demand",
      color: "text-blue-600 bg-blue-50 border-blue-100"
    },
    {
      title: "Microsoft Excel",
      description: "From essential lookups and pivot tables to advanced formulas and automation.",
      icon: FileSpreadsheet,
      badge: "Core Essential",
      color: "text-emerald-600 bg-emerald-50 border-emerald-100"
    },
    {
      title: "SQL",
      description: "Querying relational databases, complex joins, indexing, and data warehousing.",
      icon: Database,
      badge: "Industry Standard",
      color: "text-indigo-600 bg-indigo-50 border-indigo-100"
    },
    {
      title: "Power BI",
      description: "Business intelligence modeling, DAX calculations, and interactive executive reporting.",
      icon: TrendingUp,
      badge: "Job Ready",
      color: "text-amber-600 bg-amber-50 border-amber-100"
    },
    {
      title: "Tableau",
      description: "Visual analytics, interactive dashboards, and compelling data storytelling.",
      icon: Layers,
      badge: "Visual Power",
      color: "text-cyan-600 bg-cyan-50 border-cyan-100"
    },
    {
      title: "Python",
      description: "Programming for data analysis, Pandas, NumPy, automation, and backend workflows.",
      icon: Code2,
      badge: "Top Versatile",
      color: "text-violet-600 bg-violet-50 border-violet-100"
    },
    {
      title: "Artificial Intelligence",
      description: "Generative AI tools, prompt engineering, AI agents, and emerging technologies.",
      icon: Brain,
      badge: "Future Ready",
      color: "text-pink-600 bg-pink-50 border-pink-100"
    }
  ];

  const whoCanJoinList = [
    {
      role: "Students",
      description: "Share top-tier technical courses with classmates and campus study circles.",
      icon: GraduationCap,
      color: "bg-blue-50 text-blue-700"
    },
    {
      role: "Graduates",
      description: "Help fellow job seekers and batchmates build job-ready digital capabilities.",
      icon: Award,
      color: "bg-purple-50 text-purple-700"
    },
    {
      role: "Working Professionals",
      description: "Recommend high-impact upskilling courses to colleagues and team members.",
      icon: Briefcase,
      color: "bg-emerald-50 text-emerald-700"
    },
    {
      role: "Entrepreneurs",
      description: "Empower your peers and startup ecosystem with actionable data and AI skills.",
      icon: Lightbulb,
      color: "bg-amber-50 text-amber-700"
    },
    {
      role: "Content Creators",
      description: "Monetize your audience by recommending trusted, transformative education.",
      icon: Megaphone,
      color: "bg-pink-50 text-magenta-600"
    },
    {
      role: "Community Leaders",
      description: "Bring high-value career pathways to youth groups, tech clubs, and associations.",
      icon: Users,
      color: "bg-cyan-50 text-cyan-700"
    },
    {
      role: "Alumni Groups",
      description: "Re-engage past cohorts and networks with practical advanced skill modules.",
      icon: HeartHandshake,
      color: "bg-indigo-50 text-indigo-700"
    },
    {
      role: "Friends & Family Members",
      description: "Help siblings, cousins, and friends transition into booming tech professions.",
      icon: Sparkles,
      color: "bg-rose-50 text-rose-700"
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
      answer: "Visit https://tally.so/r/8NNLRl fill the form and we will contact you.",
      link: TALLY_FORM_URL
    }
  ];

  return (
    <div className="bg-white min-h-screen text-navy-900 w-full max-w-full overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-16 sm:pt-20 md:pt-28 pb-20 md:pb-28 px-4 sm:px-6 bg-gradient-to-b from-navy-900 via-navy-800 to-[#0e2142] text-white overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-electric-blue/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-magenta-600/15 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Subtle decorative grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
            backgroundSize: "28px 28px"
          }}
        />

        <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">
          
          {/* BADGE */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-300 mb-6 backdrop-blur-md shadow-lg">
            <Sparkles size={16} className="text-magenta-500 animate-pulse" />
            <span>Dahel Technologies Referral Program</span>
          </div>

          {/* MAIN CATCHPHRASE */}
          <div className="mb-4">
            <span className="text-sm sm:text-lg md:text-xl font-extrabold uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
              REFER. EARN. GROW.
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 max-w-4xl">
            Get Paid When You Refer Students to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Dahel Technologies!
            </span>
          </h1>

          {/* EARN 5% HIGHLIGHT BANNER */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-magenta-600/30 via-purple-600/30 to-blue-600/30 border border-magenta-500/40 px-6 py-3 rounded-2xl mb-8 backdrop-blur-md shadow-xl">
            <DollarSign className="text-magenta-400 shrink-0" size={24} />
            <span className="text-base sm:text-xl font-bold text-white">
              Earn <span className="text-magenta-400 font-extrabold text-lg sm:text-2xl">5%</span> of the course fee for every successful referral.
            </span>
          </div>

          {/* VALUE PROPOSITION PARAGRAPH */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed mb-6 font-normal">
            Your friends, family, siblings, and colleagues want to learn new skills and grow their careers. You can connect them to practical technology training at Dahel Technologies — and earn money when they enrol.
          </p>

          <p className="text-base sm:text-lg text-blue-200 font-semibold mb-10 tracking-wide">
            Your network is an opportunity. Share it. Earn from it. Help someone grow.
          </p>

          {/* CTA BUTTON */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-extrabold text-white uppercase tracking-wider text-sm sm:text-base overflow-hidden transition-all duration-300 bg-gradient-to-r from-electric-blue via-indigo-600 to-magenta-600 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,86,210,0.6)] shadow-xl cursor-pointer"
            >
              <span>JOIN THE REFERRAL PROGRAM</span>
              <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 sm:py-5 rounded-full font-bold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all text-sm sm:text-base backdrop-blur-md"
            >
              <span>How It Works</span>
              <ChevronDown size={18} />
            </a>
          </div>

          {/* REASSURANCE PILLS */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-md">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <CheckCircle2 size={16} /> No teaching required
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5 font-medium text-blue-300">
              <CheckCircle2 size={16} /> No need to be a tech expert
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5 font-medium text-purple-300">
              <CheckCircle2 size={16} /> Just refer people who are ready to learn
            </span>
          </div>

        </div>
      </section>

      {/* SECTION: YOUR CONNECTIONS COULD EARN YOU MONEY */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-slate-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-electric-blue font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-3 block">
              Opportunity In Your Network
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight mb-6">
              Your Connections Could Earn You Money!
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              Imagine earning from simply telling someone about a training opportunity that could help them advance their career. With the Dahel Technologies Referral Program, you earn <strong>5% of the course fee</strong> for every successful, qualifying referral.
            </p>
          </div>

          {/* 4 FEATURE PILLARS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-electric-blue flex items-center justify-center mb-4">
                <DollarSign size={24} />
              </div>
              <h3 className="font-extrabold text-lg text-navy-900 mb-2">5% Per Referral</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Earn 5% of the eligible course fee for every successful referral that enrols.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <Globe2 size={24} />
              </div>
              <h3 className="font-extrabold text-lg text-navy-900 mb-2">NGN or USD Payouts</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Earn in naira or the applicable US-dollar equivalent, according to the programme’s payment terms.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-extrabold text-lg text-navy-900 mb-2">No Cap On Earnings</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Refer as many eligible learners as you can. Your total earnings can grow with your successful referrals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-magenta-600 flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="font-extrabold text-lg text-navy-900 mb-2">Make an Impact</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Make a difference while earning. Help people discover practical skills in data analytics, AI, and technology.
              </p>
            </div>

          </div>

          {/* CALLOUT BANNER */}
          <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-navy-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                The more successful referrals you make, the more you can earn.
              </h3>
              <p className="text-gray-300 text-base">
                Whether you recommend 2 people or 20 people, you get rewarded every time someone begins their learning journey with Dahel.
              </p>
            </div>
            <a
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-white text-navy-900 hover:bg-blue-50 font-extrabold px-8 py-4 rounded-full text-sm sm:text-base transition-all shadow-md flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <span>Join Now</span>
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* INTERACTIVE EARNINGS SIMULATOR */}
      <section className="py-20 px-4 sm:px-6 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator size={14} /> Referral Earnings Simulator
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-navy-900 mb-3">
              See How Much You Could Earn
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
              Test different numbers of student referrals and average course fees to estimate your potential 5% commission earnings.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/40 rounded-3xl p-6 sm:p-10 border-2 border-blue-100 shadow-xl">
            
            {/* Currency switch */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-8 flex-wrap gap-4">
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Select Currency</span>
                <span className="text-sm font-semibold text-navy-900">Calculate in Naira (NGN) or US Dollars (USD)</span>
              </div>
              <div className="inline-flex p-1 bg-gray-100 rounded-xl border border-gray-200">
                <button
                  type="button"
                  onClick={() => handleCurrencySwitch("NGN")}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    currency === "NGN" 
                      ? "bg-white text-electric-blue shadow-sm" 
                      : "text-gray-600 hover:text-navy-900"
                  }`}
                >
                  NGN (₦)
                </button>
                <button
                  type="button"
                  onClick={() => handleCurrencySwitch("USD")}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    currency === "USD" 
                      ? "bg-white text-electric-blue shadow-sm" 
                      : "text-gray-600 hover:text-navy-900"
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            {/* Slider 1: Referred Count */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm sm:text-base font-bold text-navy-900">
                  Number of Successful Referrals
                </label>
                <span className="text-lg sm:text-2xl font-black text-electric-blue bg-blue-50 px-3 py-1 rounded-xl border border-blue-200">
                  {referredCount} {referredCount === 1 ? "student" : "students"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={referredCount}
                onChange={(e) => setReferredCount(parseInt(e.target.value) || 1)}
                className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-electric-blue"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1 font-medium">
                <span>1 referral</span>
                <span>25 referrals</span>
                <span>50 referrals</span>
              </div>
            </div>

            {/* Slider 2: Average Course Price */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm sm:text-base font-bold text-navy-900">
                  Average Qualifying Course Fee
                </label>
                <span className="text-lg sm:text-2xl font-black text-navy-900 bg-gray-100 px-3 py-1 rounded-xl border border-gray-200">
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
                className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-navy-900"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1 font-medium">
                <span>{currency === "NGN" ? "₦20,000" : "$40"}</span>
                <span>{currency === "NGN" ? "₦135,000" : "$270"}</span>
                <span>{currency === "NGN" ? "₦250,000" : "$500"}</span>
              </div>
            </div>

            {/* Calculation Result */}
            <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-300 font-extrabold block mb-1">
                  Estimated 5% Commission Payout
                </span>
                <div className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  {formatCurrency(calculateCommission())}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Based on 5% commission on qualifying course fees. Payouts are made per the programme’s official schedule.
                </p>
              </div>

              <a
                href={TALLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto shrink-0 bg-electric-blue hover:bg-blue-600 text-white font-bold px-6 py-4 rounded-xl text-center text-sm uppercase tracking-wider transition-all shadow-md hover:scale-105 cursor-pointer"
              >
                Claim This Opportunity
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: 25,000+ STUDENTS SOCIAL PROOF */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-purple-900/20 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider">
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

              <p className="text-gray-200 text-lg font-semibold bg-white/5 border border-white/10 p-5 rounded-2xl">
                Now, you can help more people discover those opportunities — and earn a commission when they enrol through your referral.
              </p>

              <p className="text-xl text-blue-300 font-extrabold italic">
                “Don&apos;t just tell people about opportunities. Get rewarded for connecting them to one.”
              </p>
            </div>

            {/* STATS TILES */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
              
              <div className="bg-navy-800/80 border border-navy-700 rounded-3xl p-6 text-center shadow-lg">
                <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                  25,000+
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">
                  Students Reached
                </div>
              </div>

              <div className="bg-navy-800/80 border border-navy-700 rounded-3xl p-6 text-center shadow-lg">
                <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 mb-2">
                  6+
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">
                  Countries Worldwide
                </div>
              </div>

              <div className="bg-navy-800/80 border border-navy-700 rounded-3xl p-6 text-center shadow-lg">
                <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mb-2">
                  5%
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">
                  Commission Per Student
                </div>
              </div>

              <div className="bg-navy-800/80 border border-navy-700 rounded-3xl p-6 text-center shadow-lg">
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

      {/* SECTION: HOW IT WORKS */}
      <section id="how-it-works" className="py-20 md:py-28 px-4 sm:px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-50 hover:bg-white rounded-3xl p-7 border-2 border-gray-100 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black text-gray-300 group-hover:text-navy-900 transition-colors">
                        {item.step}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.accentBg} shadow-xs`}>
                        <Icon size={24} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-navy-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-extrabold text-electric-blue uppercase tracking-wider mb-3">
                      {item.tagline}
                    </p>
                    <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200/70 text-xs text-gray-500 font-normal">
                    {item.actionText}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA AFTER HOW IT WORKS */}
          <div className="text-center">
            <a
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy-900 hover:bg-electric-blue text-white font-extrabold px-9 py-5 rounded-full text-base uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>START REFERRING TODAY</span>
              <ArrowRight size={20} />
            </a>
          </div>

        </div>
      </section>

      {/* SECTION: WHAT CAN YOU REFER? */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-slate-50 border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {coursesReferrable.map((c, i) => {
              const Icon = c.icon;
              return (
                <SpotlightCard
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${c.color}`}>
                        <Icon size={22} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                        {c.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-navy-900 mb-2">
                      {c.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {c.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 size={14} /> 5% Commission Eligible
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {/* IMPACT SUBTEXT */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-sm max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
              Skills That Change Careers
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether someone wants to <strong>improve their CV</strong>, <strong>become more competitive at work</strong>, <strong>change careers</strong>, or <strong>develop practical digital skills</strong>, you can connect them to a learning opportunity.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION: WHO CAN JOIN? */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {whoCanJoinList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-xs hover:shadow-md group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
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

          {/* CALLOUT BANNER */}
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-purple-200/80 rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white mb-4">
              <Sparkles size={24} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3">
              One conversation could lead to a referral.
            </h3>
            <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
              Multiple successful referrals could grow your earnings. Share with course-mates, family WhatsApp groups, LinkedIn connections, and colleagues.
            </p>
            <a
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-purple-700 text-white font-extrabold px-8 py-4 rounded-full text-sm sm:text-base transition-all shadow-md cursor-pointer hover:scale-105"
            >
              <span>Get Started For Free</span>
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* FINAL HIGH-IMPACT CTA SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
        
        {/* Glow circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-electric-blue/20 blur-[140px] rounded-full pointer-events-none" />

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
            Join the Dahel Technologies Referral Program, share our training opportunities, and earn <strong>5% of the course fee</strong> for each successful, qualifying referral.
          </p>

          {/* BIG BUTTON */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full sm:w-auto">
            <a
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-white uppercase tracking-wider text-base sm:text-lg overflow-hidden transition-all duration-300 bg-gradient-to-r from-magenta-600 via-purple-600 to-electric-blue hover:scale-105 hover:shadow-[0_0_50px_rgba(216,17,89,0.7)] shadow-2xl cursor-pointer"
            >
              <span>JOIN THE PROGRAM NOW</span>
              <ArrowUpRight size={22} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <p className="text-sm text-gray-400 font-medium">
            Register for FREE here:{" "}
            <a 
              href={TALLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white underline font-semibold transition-colors"
            >
              {TALLY_FORM_URL}
            </a>
          </p>

        </div>
      </section>

      {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-slate-50 border-t border-gray-200">
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
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all"
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
                      {faq.link && (
                        <div className="mt-4">
                          <a
                            href={faq.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-electric-blue font-bold hover:underline"
                          >
                            <span>Open Registration Form</span>
                            <ExternalLink size={16} />
                          </a>
                        </div>
                      )}
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
          <p className="font-medium text-gray-600 mb-2">
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
