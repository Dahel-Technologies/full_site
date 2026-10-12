"use client";

import { useState, useRef } from "react";
import Link from "next/link";

interface AnimatedCourseCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

function AnimatedCourseCard({
  children,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.25)",
}: AnimatedCourseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`session-card relative rounded-3xl overflow-hidden transition-all duration-500 bg-white border border-gray-200/90 hover:border-blue-400/80 hover:shadow-[0_20px_50px_-15px_rgba(30,58,138,0.18)] ${className}`}
    >
      {/* Mouse spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 45%)`,
        }}
      />
      {/* Top subtle sheen line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  );
}

export default function PrivateSessionsPage() {
  const [currency, setCurrency] = useState<"NGN" | "USD" | "EUR" | "GBP" | "GHS">("NGN");
  const [copiedBank, setCopiedBank] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const courses = [
    {
      id: "excel",
      title: "Microsoft Excel",
      subtitle: "The Power of Everyday Data",
      priceNGN: "₦110,999",
      priceUSD: "$200",
      priceEUR: "€185",
      priceGBP: "£160",
      priceGHS: "GH₵2,600",
      duration: "3 – 4 Weeks at your convenience",
      tagline: "Learn how to transform raw data into powerful insights!",
      topics: [
        "Data Cleaning & Formatting",
        "Advanced Formulas & Functions",
        "Pivot Tables & Charts",
        "Excel Dashboards & Automation"
      ],
      gains: [
        "Mastery in Excel for data management and reporting",
        "Confidence to handle corporate or business data efficiently"
      ],
      glow: "rgba(16, 185, 129, 0.22)",
      tag: "Everyday Data"
    },
    {
      id: "sql",
      title: "SQL",
      subtitle: "Speak the Language of Databases",
      priceNGN: "₦120,999",
      priceUSD: "$220",
      priceEUR: "€200",
      priceGBP: "£175",
      priceGHS: "GH₵2,850",
      duration: "3 – 4 Weeks at your convenience",
      tagline: "Query. Retrieve. Analyze. The foundational backbone of data analysis and database management.",
      topics: [
        "Introduction to Databases",
        "SELECT, JOIN, GROUP BY & Subqueries",
        "Data Filtering & Sorting",
        "Database Design Basics"
      ],
      gains: [
        "The ability to extract valuable insights from large datasets",
        "An edge in any data, finance, or analytics role"
      ],
      glow: "rgba(59, 130, 246, 0.22)",
      tag: "Core Database"
    },
    {
      id: "tableau",
      title: "Tableau",
      subtitle: "Visualize Insights, Tell Stories",
      priceNGN: "₦120,999",
      priceUSD: "$220",
      priceEUR: "€200",
      priceGBP: "£175",
      priceGHS: "GH₵2,850",
      duration: "3 – 4 Weeks at your convenience",
      tagline: "Bring your data to life with stunning visuals and interactive dashboards.",
      topics: [
        "Tableau Interface & Connections",
        "Charts, Graphs, and Filters",
        "Interactive Dashboards",
        "Storytelling with Data"
      ],
      gains: [
        "The skill to create business-ready dashboards that impress and inform",
        "Data visualization expertise that employers love"
      ],
      glow: "rgba(245, 158, 11, 0.22)",
      tag: "Data Visualization"
    },
    {
      id: "powerbi",
      title: "Power BI",
      subtitle: "Turn Data into Decisions",
      priceNGN: "₦150,999",
      priceUSD: "$280",
      priceEUR: "€260",
      priceGBP: "£220",
      priceGHS: "GH₵3,550",
      duration: "3 – 4 Weeks at your convenience",
      tagline: "Microsoft’s flagship tool for powerful business intelligence and visualization.",
      topics: [
        "Data Import & Transformation",
        "DAX Formulas & Measures",
        "Dashboard Building",
        "Power BI Service & Publishing"
      ],
      gains: [
        "Hands-on experience building real-world BI reports",
        "The ability to help businesses make smarter, faster decisions"
      ],
      glow: "rgba(234, 179, 8, 0.25)",
      tag: "Enterprise BI"
    },
    {
      id: "python",
      title: "Python",
      subtitle: "Automate, Analyze, and Predict",
      priceNGN: "₦180,999",
      priceUSD: "$350",
      priceEUR: "€320",
      priceGBP: "£275",
      priceGHS: "GH₵4,450",
      duration: "3 – 4 Weeks at your convenience",
      tagline: "The world’s most popular programming language for data analysis and AI.",
      topics: [
        "Python Fundamentals & Libraries (NumPy, Pandas)",
        "Data Cleaning & Visualization (Matplotlib, Seaborn)",
        "Basic Machine Learning Concepts",
        "Automations & Real-World Data Projects"
      ],
      gains: [
        "A foundation to enter the world of Data Science and AI",
        "The power to automate and analyze like a pro"
      ],
      glow: "rgba(99, 102, 241, 0.24)",
      tag: "Programming & AI"
    },
    {
      id: "ai-engineering",
      title: "AI Engineering",
      subtitle: "The 2026 Future of Work",
      priceNGN: "₦200,000",
      priceUSD: "$350",
      priceEUR: "€320",
      priceGBP: "£275",
      priceGHS: "GH₵4,450",
      duration: "3 – 4 Weeks at your convenience",
      tagline: "Learn the practical roadmap to becoming an AI Engineer and understand modern autonomous tools, agents, and automations.",
      topics: [
        "How to use AI as a Data Analyst in Microsoft Excel and Google Sheets",
        "Powerful steps to becoming an AI Engineer in 2026",
        "How AI can automate reporting, analysis, and decision-making",
        "Prompt engineering techniques that actually work",
        "AI workflows that save hours every week",
        "The best free AI tools every professional should know"
      ],
      gains: [
        "Practical capability to work remotely, land higher-paying roles, freelance, or build AI-powered products",
        "A solid modern engineering foundation across generative AI models and automation agents"
      ],
      glow: "rgba(168, 85, 247, 0.26)",
      tag: "AI & Agents"
    },
    {
      id: "r",
      title: "R",
      subtitle: "The Language of Statistical Analysis",
      priceNGN: "₦180,999",
      priceUSD: "$350",
      priceEUR: "€320",
      priceGBP: "£275",
      priceGHS: "GH₵4,450",
      duration: "3 – 4 Weeks at your convenience",
      tagline: "Perfect for researchers, analysts, and statisticians who love precision.",
      topics: [
        "R Basics & Environment Setup",
        "Data Manipulation (dplyr, tidyr)",
        "Visualization (ggplot2)",
        "Statistical Modelling & Hypothesis Testing"
      ],
      gains: [
        "Strong analytical and statistical thinking skills",
        "Proficiency in research-grade data analysis"
      ],
      glow: "rgba(244, 63, 94, 0.22)",
      tag: "Statistics & Research"
    }
  ];

  const getCoursePrice = (course: typeof courses[0]) => {
    switch (currency) {
      case "USD": return course.priceUSD;
      case "EUR": return course.priceEUR;
      case "GBP": return course.priceGBP;
      case "GHS": return course.priceGHS;
      default: return course.priceNGN;
    }
  };

  const getCourseComparison = (course: typeof courses[0]) => {
    if (currency === "NGN") {
      return `or ${course.priceUSD}`;
    }
    return `or ${course.priceNGN}`;
  };

  return (
    <div className="bg-slate-50/50 min-h-screen pb-24 w-full max-w-full overflow-hidden text-navy-900 font-sans">
      
      {/* CSS Rail Hover Effect for Interactive Card Motion */}
      <style>{`
        .session-rail:has(.session-card:hover) .session-card:not(:hover) {
          opacity: 0.62;
          transform: scale(0.98);
        }
        .session-card {
          transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), 
                      opacity 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), 
                      box-shadow 0.45s cubic-bezier(0.2, 0.8, 0.2, 1),
                      border-color 0.3s ease;
        }
        .session-card:hover {
          transform: translateY(-8px) scale(1.02);
          z-index: 10;
        }
      `}</style>

      {/* 1. HERO SECTION WITH UNIFIED HEADER */}
      <section className="relative pt-12 sm:pt-16 md:pt-20 pb-16 md:pb-20 px-4 sm:px-6 bg-gradient-to-b from-blue-50/60 via-white to-slate-50 border-b border-gray-200/70">
        
        {/* IMPROVED NOTICE BANNER */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-white/95 border border-amber-300/80 rounded-2xl p-4 sm:p-5 shadow-sm backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
              <span className="inline-block bg-amber-500 text-white font-extrabold text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full mr-2 shadow-xs">
                PLEASE TAKE NOTE
              </span>
              <span>
                Enrollment fees are different for <strong>Private Online Sessions</strong> and <strong>Private Offline Sessions</strong>.
              </span>
            </div>
            <Link
              href="/groupclasses"
              className="inline-flex items-center justify-center bg-navy-900 hover:bg-electric-blue text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:scale-105 shrink-0 shadow-sm"
            >
              Click Here If You Want Group Sessions →
            </Link>
          </div>
        </div>

        {/* HERO TITLE & TWO-LINE COURSE LIST */}
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <div className="text-xs uppercase tracking-widest font-black text-electric-blue mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200">
            DAHEL TECHNOLOGIES PRIVATE SESSIONS
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-navy-900 tracking-tight leading-[1.15] mb-6">
            <span>Learn the Tools that Power the World’s Data</span>
            <div className="mt-4 text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600">
              <div className="leading-tight">Excel • SQL • Tableau</div>
              <div className="leading-tight mt-1 sm:mt-2">Power BI • Python • R</div>
            </div>
          </h1>

          <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed mb-6">
            Ready to master the tools top companies use to make data-driven decisions? Join Dahel Technologies’ Private Sessions — designed for individuals and professionals who want hands-on, career-ready skills in the most in-demand tech courses today.
          </p>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Each course is intensive, interactive, and tailored to your learning pace — helping you move from beginner to confident practitioner in weeks!
          </p>

          {/* DURATION & KEY SPECS STRIP (NO ICONS) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-xs sm:text-sm font-semibold text-gray-700 bg-white/95 px-6 py-4 rounded-2xl border border-gray-200 shadow-sm max-w-3xl">
            <span className="text-navy-900 font-bold">Duration: 3 Weeks per course at your convenience</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span>Each course takes at least 3-4 weeks</span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <span className="text-electric-blue font-bold">1-on-1 Dedicated Mentorship</span>
          </div>

          {/* HERO ACTIONS (NO ICONS) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
            <a
              href="https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20am%20ready%20to%20register%20for%20a%20Private%20Session."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-navy-900 hover:bg-electric-blue text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-md text-center"
            >
              Register via WhatsApp (Nora) →
            </a>
            <a
              href="#fee-per-course"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-navy-900 border-2 border-gray-200 font-bold px-8 py-4 rounded-full text-base transition-all text-center"
            >
              View Fee per Course
            </a>
          </div>

          {/* CONTACT INFO WITH VAEL CHAT OPTION (NO ICONS) */}
          <div className="flex flex-col items-center gap-3 text-xs sm:text-sm text-gray-700 font-medium">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <span>Inquiries: <a href="mailto:daheltechies@gmail.com" className="text-navy-900 font-bold underline">daheltechies@gmail.com</a></span>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <span>WhatsApp (Nora): <a href="https://wa.me/2347047581704" target="_blank" rel="noopener noreferrer" className="text-navy-900 font-bold underline">+234 704 758 1704</a></span>
            </div>
            
            {/* Direct Vael Contact Badge */}
            <div className="bg-blue-50/90 border border-blue-200 px-4 py-2 rounded-full text-xs text-navy-900 font-semibold shadow-2xs">
              For Private Sessions Specific Inquiries, chat with Vael:{" "}
              <a
                href="https://wa.me/13107081983?text=Hello%20Vael!%20I%20have%20an%20inquiry%20regarding%20Dahel%20Private%20Sessions."
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric-blue font-extrabold underline hover:text-blue-800"
              >
                +1 (310) 708 1983 →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FEE PER COURSE (ANIMATED CARDS RAIL WITH MULTI-CURRENCY) */}
      <section id="fee-per-course" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-electric-blue mb-2">Tuition & Investment</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 mb-4">
            Fee per Course
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Intensive, personalized private instruction. Select your preferred currency below.
          </p>

          {/* Currency Toggle (Naira, Dollars, Euros, Pounds, Cedis) */}
          <div className="mt-6 inline-flex flex-wrap justify-center gap-1.5 p-1.5 bg-white rounded-2xl shadow-xs border border-gray-200">
            {[
              { code: "NGN", label: "₦ Naira" },
              { code: "USD", label: "$ Dollars" },
              { code: "EUR", label: "€ Euros" },
              { code: "GBP", label: "£ Pounds" },
              { code: "GHS", label: "GH₵ Cedis" },
            ].map((cur) => (
              <button
                key={cur.code}
                onClick={() => setCurrency(cur.code as "NGN" | "USD" | "EUR" | "GBP" | "GHS")}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  currency === cur.code 
                    ? "bg-navy-900 text-white shadow-xs" 
                    : "text-gray-600 hover:text-navy-900 hover:bg-gray-50"
                }`}
              >
                {cur.label}
              </button>
            ))}
          </div>

          <div className="mt-4 text-xs sm:text-sm text-gray-600">
            For Private Sessions Specific Inquiries, chat with Vael:{" "}
            <a 
              href="https://wa.me/13107081983?text=Hello%20Vael!%20I%20have%20an%20inquiry%20regarding%20Dahel%20Private%20Sessions." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-navy-900 font-extrabold underline hover:text-electric-blue"
            >
              +1 (310) 708 1983
            </a>
          </div>
        </div>

        {/* INTERACTIVE ANIMATED CARDS RAIL */}
        <div className="session-rail grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {courses.map((course) => (
            <AnimatedCourseCard
              key={course.id}
              glowColor={course.glow}
              className="p-6 md:p-7 justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
                    {course.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400">
                    3–4 Weeks
                  </span>
                </div>

                <h3 className="text-2xl font-black text-navy-900 mb-1 tracking-tight">
                  {course.title}
                </h3>
                <div className="text-xs font-semibold text-purple-700 mb-4">
                  {course.subtitle}
                </div>

                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="text-3xl font-black text-navy-900 tracking-tight">
                    {getCoursePrice(course)}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {getCourseComparison(course)} per course
                  </div>
                </div>

                <p className="text-xs text-gray-600 mb-6 leading-relaxed line-clamp-2 font-medium">
                  {course.tagline}
                </p>
              </div>

              <div>
                <a
                  href={`https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20want%20to%20register%20for%20the%20${encodeURIComponent(course.title)}%20Private%20Session.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-navy-900 hover:bg-electric-blue text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors text-center shadow-xs"
                >
                  Enroll in {course.title} →
                </a>

                {/* SELFANY PREMIUM PAYMENT LINK FOR PRIVATE SESSIONS SPECIFICALLY UNDER EXCEL */}
                {course.id === "excel" && (
                  <a
                    href="https://selfany.com/daheltechprivatesessions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold py-2.5 px-3 rounded-xl text-[11px] uppercase tracking-wider transition-all hover:scale-[1.02] text-center shadow-xs"
                  >
                    Make Payments for Premium Experience as Private Student →
                  </a>
                )}
              </div>
            </AnimatedCourseCard>
          ))}
        </div>

        {/* MULTI-COURSE DISCOUNT BOX */}
        <div className="bg-gradient-to-r from-blue-900 via-navy-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-amber-400 mb-1">
              Special Multi-Course Qualification
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-2">
              Want to enroll for more than 3 courses?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl leading-relaxed">
              You may be qualified for a discount! Speak with our program advisors to design your personalized multi-skill learning track.
            </p>
          </div>
          <a
            href="https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20would%20like%20to%20enroll%20for%20more%20than%203%20courses%20and%20request%20the%20multi-course%20discount."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-300 text-navy-900 font-black px-6 py-3.5 rounded-full text-sm transition-transform hover:scale-105 shrink-0 shadow-md text-center"
          >
            Claim Multi-Course Discount →
          </a>
        </div>

      </section>

      {/* 3. IN-DEPTH COURSE SYLLABUS & GAINS */}
      <section className="py-20 px-4 sm:px-6 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-electric-blue mb-2">Curriculum Breakdown</div>
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 mb-4">
              Comprehensive Course Content
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Each course is designed with zero fluff and maximum practical application.
            </p>
          </div>

          <div className="session-rail space-y-10">
            {courses.map((course, idx) => (
              <AnimatedCourseCard
                key={course.id}
                glowColor={course.glow}
                className="p-6 sm:p-10"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Course Overview */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-xs font-black uppercase tracking-wider text-gray-400 mb-2">
                        Course {String(idx + 1).padStart(2, '0')} • {course.tag}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-navy-900 mb-1">
                        {course.title}
                      </h3>
                      <div className="text-sm font-bold text-electric-blue mb-4">
                        {course.subtitle}
                      </div>

                      <p className="text-sm sm:text-base text-gray-700 font-medium mb-6 leading-relaxed">
                        {course.tagline}
                      </p>

                      <div className="bg-slate-50 p-4 rounded-2xl border border-gray-200 mb-6">
                        <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-1">
                          Tuition Fee
                        </div>
                        <div className="text-2xl sm:text-3xl font-black text-navy-900">
                          {getCoursePrice(course)}{" "}
                          <span className="text-xs text-gray-500 font-normal">
                            ({getCourseComparison(course)})
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1 font-medium">
                          Duration: {course.duration}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={`https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20would%20like%20to%20enroll%20in%20the%20${encodeURIComponent(course.title)}%20Private%20Session.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-navy-900 hover:bg-electric-blue text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-colors shadow-xs text-center w-full"
                      >
                        Enroll in {course.title} →
                      </a>

                      {course.id === "excel" && (
                        <a
                          href="https://selfany.com/daheltechprivatesessions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-3 px-5 rounded-xl text-xs uppercase tracking-wider transition-all hover:scale-[1.02] shadow-xs text-center"
                        >
                          Make Payments for Premium Experience as Private Student →
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Topics & What You Gain (NO ICONS) */}
                  <div className="lg:col-span-7 bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-gray-200/90 flex flex-col justify-between">
                    
                    <div className="mb-6">
                      <div className="text-xs font-black uppercase tracking-wider text-navy-900 mb-3 pb-2 border-b border-gray-200">
                        Topics Include:
                      </div>
                      <ul className="space-y-2.5">
                        {course.topics.map((topic, i) => (
                          <li key={i} className="flex items-start text-xs sm:text-sm text-gray-700 font-medium">
                            <span className="text-electric-blue font-bold mr-2.5 select-none">—</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="text-xs font-black uppercase tracking-wider text-purple-900 mb-3 pb-2 border-b border-purple-100">
                        You’ll Gain:
                      </div>
                      <ul className="space-y-2">
                        {course.gains.map((gain, i) => (
                          <li key={i} className="flex items-start text-xs sm:text-sm text-gray-800 font-semibold">
                            <span className="text-purple-600 font-bold mr-2.5 select-none">•</span>
                            <span>{gain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </AnimatedCourseCard>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE DAHEL TECHNOLOGIES? (NO ICONS) */}
      <section className="py-24 px-4 sm:px-6 bg-navy-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-black uppercase tracking-widest text-electric-blue mb-3">
              National & Global Recognition
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-6">
              WHY CHOOSE DAHEL TECHNOLOGIES?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              We are recognized by the Federal Government of Nigeria having worked for the <strong>National Information and Technical Development Agency (NITDA)</strong> and the <strong>Nigeria Jubilee Fellowship Programme</strong>.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4">
              We have also worked with the <strong>US Embassy and Alumni Community</strong> at Kenya, Nigeria, Angola, and elsewhere.
            </p>
            <p className="text-sm sm:text-base text-blue-200 leading-relaxed font-semibold">
              We have worked with over <strong>20,000 students</strong> in at least <strong>6 countries</strong> including the United States, the UK, and the African Community in China.
            </p>
          </div>

          {/* 4 CORE ADVANTAGES (NO ICONS) */}
          <div className="session-rail grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                num: "01",
                title: "One-on-One Mentorship",
                desc: "Learn directly from Microsoft Certified Trainers and industry experts dedicated solely to your pace."
              },
              {
                num: "02",
                title: "Practical, Project-Based Learning",
                desc: "No fluff, only real-world corporate use cases, workflows, and portfolio projects."
              },
              {
                num: "03",
                title: "Lifetime Support",
                desc: "We guide and mentor you even after class ends through alumni communities and advisory."
              },
              {
                num: "04",
                title: "Certificate of Completion",
                desc: "Showcase verified skill mastery and expand your domestic and international career prospects."
              }
            ].map((item, i) => (
              <AnimatedCourseCard
                key={i}
                glowColor="rgba(59, 130, 246, 0.3)"
                className="bg-navy-800/80 border-navy-700 p-6 text-white"
              >
                <div className="text-3xl font-black text-electric-blue mb-3 font-mono">
                  {item.num}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{item.desc}</p>
              </AnimatedCourseCard>
            ))}
          </div>

          {/* TRANSFORM CAREER CALLOUT */}
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-blue-500/30">
            <h3 className="text-2xl sm:text-4xl font-black mb-3">
              Your data career starts here.
            </h3>
            <p className="text-base sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
              Don’t just learn — transform your skillset, career, and income.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20am%20ready%20to%20register%20and%20secure%20my%20private%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-navy-900 font-black px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-lg text-center"
              >
                Register Now to Secure Your Private Session! →
              </a>
              <Link
                href="/groupclasses"
                className="w-full sm:w-auto bg-navy-900/60 hover:bg-navy-900 text-white border border-white/30 font-bold px-8 py-4 rounded-full text-base transition-all text-center"
              >
                View Group Sessions →
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-blue-200 font-medium">
              <span>Email: daheltechies@gmail.com</span>
              <span>|</span>
              <span>WhatsApp: +234 704 758 1704</span>
              <span>|</span>
              <span>Inquiries (Vael): +1 (310) 708 1983</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. BANK TRANSFER DETAILS (NO ICONS) */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-electric-blue mb-2">Direct Payment</div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mb-2">
              Want to make a bank transfer instead?
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Transfer directly to our official corporate account and send your payment proof for instant confirmation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Account Box */}
              <div className="bg-navy-900 text-white rounded-2xl p-6 md:p-8 relative overflow-hidden">
                <div className="text-xs font-black uppercase tracking-wider text-electric-blue mb-4">
                  Official Account Details
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider">Bank Name</span>
                    <div className="text-xl font-black">Moniepoint</div>
                  </div>

                  <div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider">Account Name</span>
                    <div className="text-base sm:text-lg font-bold">Dahel Consultants and Techies</div>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider">Account Number</span>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-3xl font-mono font-black text-amber-400 tracking-wider">
                        7047581704
                      </span>
                      <button
                        onClick={() => copyToClipboard("7047581704")}
                        className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                      >
                        {copiedBank ? "Copied!" : "Copy Number"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions Box */}
              <div className="space-y-5">
                <div>
                  <h3 className="text-base font-bold text-navy-900 mb-1">
                    Send Proof of Payment to:
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Once your transfer is complete, send your receipt immediately to Nora on WhatsApp or email our finance desk.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://wa.me/2347047581704?text=Hello%20Nora!%20I%20have%20completed%20a%20bank%20transfer%20for%20my%20Dahel%20Private%20Session.%20Here%20is%20my%20proof%20of%20payment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3.5 rounded-xl border border-green-200 bg-green-50/60 hover:bg-green-50 text-green-900 transition-colors"
                  >
                    <div className="text-[11px] font-bold uppercase text-green-800">Send to Nora's WhatsApp:</div>
                    <div className="text-sm font-black text-green-950">+234 704 758 1704 →</div>
                  </a>

                  <a
                    href="https://wa.me/13107081983?text=Hello%20Vael!%20I%20have%20an%20inquiry%20regarding%20Dahel%20Private%20Sessions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3.5 rounded-xl border border-blue-200 bg-blue-50/60 hover:bg-blue-50 text-blue-900 transition-colors"
                  >
                    <div className="text-[11px] font-bold uppercase text-blue-800">Private Sessions Specific Inquiries (Vael):</div>
                    <div className="text-sm font-black text-blue-950">+1 (310) 708 1983 →</div>
                  </a>

                  <a
                    href="mailto:financedahelgroup@gmail.com?subject=Proof%20of%20Payment%20-%20Private%20Session"
                    className="block p-3.5 rounded-xl border border-gray-200 bg-gray-50/60 hover:bg-gray-100 text-gray-900 transition-colors"
                  >
                    <div className="text-[11px] font-bold uppercase text-gray-600">Send to Finance Email:</div>
                    <div className="text-sm font-black text-gray-900">financedahelgroup@gmail.com →</div>
                  </a>
                </div>

                <div className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                  Prefer card or multi-currency checkout? Visit our secure <Link href="/payments" className="text-electric-blue font-bold underline">Payments Page</Link>.
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. FINAL REGISTRATION CALL TO ACTION */}
      <section className="py-16 px-4 sm:px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mb-4">
            Secure Your Private Session Slot
          </h2>
          <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
            Private sessions are strictly scheduled around your calendar to guarantee 1-on-1 focus.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20would%20like%20to%20register%20and%20secure%20my%20Private%20Session."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-electric-blue hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-base transition-all shadow-md"
            >
              Register on WhatsApp: +234 704 758 1704 →
            </a>
            <a
              href="https://wa.me/13107081983?text=Hello%20Vael!%20I%20have%20an%20inquiry%20regarding%20Dahel%20Private%20Sessions."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 px-8 rounded-full text-base transition-colors"
            >
              Chat with Vael: +1 (310) 708 1983 →
            </a>
          </div>
          <div className="mt-4">
            <Link
              href="/groupclasses"
              className="text-xs text-gray-500 hover:text-navy-900 font-semibold underline"
            >
              Prefer collaborative cohorts? Switch to Group Sessions →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
