"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Award, 
  MessageCircle, 
  Mail, 
  Copy, 
  Check, 
  Sparkles, 
  BookOpen, 
  Zap, 
  Star, 
  AlertTriangle, 
  Percent, 
  Phone, 
  Globe2, 
  Compass, 
  ChevronRight,
  TrendingUp,
  Brain,
  Terminal,
  Database,
  BarChart3,
  PieChart,
  FileSpreadsheet
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import BorderGlow from "@/components/BorderGlow";
import SpecularButton from "@/components/animations/SpecularButton";
import ShinyText from "@/components/animations/ShinyText";

export default function PrivateSessionsPage() {
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [copiedBank, setCopiedBank] = useState(false);
  const [activeCourseFilter, setActiveCourseFilter] = useState<string>("all");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const courses = [
    {
      id: "excel",
      title: "Microsoft Excel",
      badge: "The Power of Everyday Data",
      icon: FileSpreadsheet,
      iconColor: "text-emerald-500",
      accentBg: "from-emerald-500/20 to-teal-500/10",
      borderAccent: "border-emerald-200 hover:border-emerald-400",
      priceNGN: "₦110,999",
      priceUSD: "$200",
      duration: "3 - 4 Weeks (At your convenience)",
      tagline: "Learn how to transform raw data into powerful business insights!",
      topics: [
        "Data Cleaning & Professional Formatting",
        "Advanced Formulas & Dynamic Functions (XLOOKUP, INDEX/MATCH)",
        "Interactive Pivot Tables & Dynamic Charts",
        "Executive Excel Dashboards & Workflow Automation"
      ],
      gains: [
        "Mastery in Excel for corporate data management & reporting",
        "Confidence to handle high-stakes corporate or business datasets efficiently"
      ],
      popular: false
    },
    {
      id: "sql",
      title: "SQL",
      badge: "Speak the Language of Databases",
      icon: Database,
      iconColor: "text-blue-500",
      accentBg: "from-blue-500/20 to-indigo-500/10",
      borderAccent: "border-blue-200 hover:border-blue-400",
      priceNGN: "₦120,999",
      priceUSD: "$220",
      duration: "3 - 4 Weeks (At your convenience)",
      tagline: "Query. Retrieve. Analyze. The universal backbone of all data operations.",
      topics: [
        "Introduction to Relational Databases & Schema Structures",
        "Complex SELECT Queries, INNER/LEFT/FULL JOINS, GROUP BY & Subqueries",
        "Advanced Data Filtering, Sorting & Aggregation Functions",
        "Database Architecture, Constraints & Normalization Basics"
      ],
      gains: [
        "The ability to extract critical insights from massive production databases",
        "An unbeatable competitive edge in any data, finance, or business analytics role"
      ],
      popular: false
    },
    {
      id: "tableau",
      title: "Tableau",
      badge: "Visualize Insights, Tell Stories",
      icon: PieChart,
      iconColor: "text-amber-500",
      accentBg: "from-amber-500/20 to-orange-500/10",
      borderAccent: "border-amber-200 hover:border-amber-400",
      priceNGN: "₦120,999",
      priceUSD: "$220",
      duration: "3 - 4 Weeks (At your convenience)",
      tagline: "Bring your data to life with stunning visuals and interactive executive dashboards.",
      topics: [
        "Tableau Interface, Connections & Live vs Extract Data Sources",
        "Custom Charts, Scatter Plots, Heatmaps, Dual-Axis & Filters",
        "Interactive Dashboards with Dynamic Actions & Tooltips",
        "Data Storytelling, Visual Narrative & Presentation Best Practices"
      ],
      gains: [
        "The skill to build business-ready visual dashboards that impress employers & clients",
        "High-demand data visualization expertise that commands top salaries"
      ],
      popular: false
    },
    {
      id: "powerbi",
      title: "Power BI",
      badge: "Turn Data into Decisions",
      icon: BarChart3,
      iconColor: "text-yellow-500",
      accentBg: "from-yellow-500/20 to-amber-500/10",
      borderAccent: "border-yellow-200 hover:border-yellow-400",
      priceNGN: "₦150,999",
      priceUSD: "$280",
      duration: "3 - 4 Weeks (At your convenience)",
      tagline: "Microsoft’s flagship enterprise tool for powerful business intelligence & automated reporting.",
      topics: [
        "Power Query ETL: Data Ingestion, Cleaning & Transformation",
        "Data Modeling & Relationships (Star Schema, Snowflake Schema)",
        "DAX Formulas, Calculated Columns, Measures & Time Intelligence",
        "Dashboard Building, Power BI Service, Workspaces & Scheduled Refresh"
      ],
      gains: [
        "Hands-on experience building production-grade enterprise BI solutions",
        "The strategic capability to help modern businesses make faster, data-backed decisions"
      ],
      popular: true
    },
    {
      id: "python",
      title: "Python for Data & AI",
      badge: "Automate, Analyze, and Predict",
      icon: Terminal,
      iconColor: "text-indigo-500",
      accentBg: "from-indigo-500/20 to-purple-500/10",
      borderAccent: "border-indigo-200 hover:border-indigo-400",
      priceNGN: "₦180,999",
      priceUSD: "$350",
      duration: "3 - 4 Weeks (At your convenience)",
      tagline: "The world’s #1 programming language for scalable data analysis, automation, and predictive modeling.",
      topics: [
        "Python Fundamentals, Data Structures & Pythonic Syntax",
        "Data Manipulation with NumPy & Pandas",
        "Exploratory Data Analysis & Visualizations with Matplotlib and Seaborn",
        "Machine Learning Fundamentals & Real-World Capstone Automations"
      ],
      gains: [
        "A rock-solid technical foundation to thrive in Data Science and Machine Learning",
        "The superpower to automate repetitive business workflows and analyze complex data like a pro"
      ],
      popular: false
    },
    {
      id: "ai-engineering",
      title: "AI Engineering",
      badge: "The Future of Work in 2026",
      icon: Brain,
      iconColor: "text-purple-500",
      accentBg: "from-purple-500/20 to-pink-500/10",
      borderAccent: "border-purple-300 hover:border-purple-500 ring-2 ring-purple-500/20",
      priceNGN: "₦200,000",
      priceUSD: "$350",
      duration: "3 - 4 Weeks (At your convenience)",
      tagline: "Your practical roadmap to becoming an AI Engineer and mastering modern autonomous agents.",
      topics: [
        "How to use AI as a Data Analyst in Microsoft Excel and Google Sheets",
        "Powerful, actionable steps to becoming an in-demand AI Engineer in 2026",
        "How AI automates complex reporting, analysis, and strategic decision-making",
        "Advanced Prompt Engineering techniques that deliver reliable results",
        "Building AI workflows and agentic pipelines that save 10+ hours every week",
        "The best curated free and open-source AI tools every modern professional must know"
      ],
      gains: [
        "A practical roadmap to work remotely, freelance globally, or build AI-powered products",
        "Mastery of modern generative AI, agentic systems, and intelligence automation"
      ],
      popular: true
    },
    {
      id: "r",
      title: "R for Statistical Analysis",
      badge: "The Language of Statistical Precision",
      icon: TrendingUp,
      iconColor: "text-rose-500",
      accentBg: "from-rose-500/20 to-pink-500/10",
      borderAccent: "border-rose-200 hover:border-rose-400",
      priceNGN: "₦180,999",
      priceUSD: "$350",
      duration: "3 - 4 Weeks (At your convenience)",
      tagline: "Tailor-made for researchers, scientific analysts, and statisticians who value computational precision.",
      topics: [
        "R Environment Setup, RStudio & Functional Programming Basics",
        "Advanced Data Wrangling & Manipulation using dplyr and tidyr",
        "Publication-Grade Visualizations with ggplot2",
        "Statistical Modeling, Regression, ANOVA & Rigorous Hypothesis Testing"
      ],
      gains: [
        "Deep analytical and statistical thinking skills sought after by academic and research bodies",
        "Proficiency in producing research-grade data pipelines and replicable scientific analyses"
      ],
      popular: false
    }
  ];

  const filteredCourses = activeCourseFilter === "all" 
    ? courses 
    : courses.filter(c => c.id === activeCourseFilter);

  return (
    <div className="bg-white min-h-screen pb-24 w-full max-w-full overflow-hidden text-navy-900">
      
      {/* 1. TOP NOTICE BAR: GROUP CLASSES VS PRIVATE SESSIONS */}
      <aside aria-label="Announcement" className="bg-gradient-to-r from-blue-900 via-navy-900 to-indigo-950 text-white px-4 py-3.5 border-b border-blue-800/60 sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 justify-center sm:justify-start font-medium">
            <span className="bg-amber-400 text-navy-900 text-[11px] font-black uppercase px-2 py-0.5 rounded tracking-wider shrink-0">
              Note
            </span>
            <span>
              Fees differ for <strong className="text-blue-200">Private Online</strong> vs <strong className="text-blue-200">Private Offline</strong> sessions! Prefer collaborative cohorts?
            </span>
          </div>
          <Link 
            href="/groupclasses" 
            className="inline-flex items-center gap-1.5 bg-electric-blue hover:bg-blue-600 text-white font-bold px-3.5 py-1.5 rounded-full text-xs transition-all hover:scale-105 shrink-0 shadow-sm"
          >
            CLICK HERE IF YOU WANT GROUP SESSIONS <ArrowRight size={14} />
          </Link>
        </div>
      </aside>

      {/* 2. HERO SECTION */}
      <section className="relative pt-16 sm:pt-20 md:pt-28 pb-16 md:pb-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-electric-blue font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles size={14} className="text-electric-blue" />
            Dahel Technologies Private Sessions
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-navy-900 max-w-5xl leading-[1.1] mb-6">
            Learn the Tools that Power the World's Data:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600">
              Excel • SQL • Tableau • Power BI • Python • R
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mb-8 leading-relaxed font-medium">
            Ready to master the tools top companies use to make data-driven decisions? Join Dahel Technologies' Private Sessions — designed for individuals and professionals who want hands-on, career-ready skills in the most in-demand tech courses today.
          </p>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed">
            Each course is intensive, interactive, and tailored to your specific learning pace — helping you move from a beginner to a confident practitioner in just a few weeks!
          </p>

          {/* Quick Stats & Benefits Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-12 text-xs sm:text-sm font-semibold text-gray-700 bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-lg max-w-4xl">
            <div className="flex items-center gap-2">
              <Calendar className="text-electric-blue" size={18} />
              <span><strong>3 - 4 Weeks</strong> per course</span>
            </div>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Clock className="text-electric-blue" size={18} />
              <span>At your personal convenience</span>
            </div>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Award className="text-purple-600" size={18} />
              <span>Microsoft Certified Mentors</span>
            </div>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-600" size={18} />
              <span>1-on-1 Personalized Attention</span>
            </div>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-6">
            <a 
              href="https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20am%20interested%20in%20enrolling%20in%20your%20Private%20Sessions." 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <SpecularButton className="w-full sm:w-auto justify-center">
                <MessageCircle size={20} className="mr-2 text-green-400" />
                Book via WhatsApp (Nora)
              </SpecularButton>
            </a>
            
            <a 
              href="#pricing" 
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-navy-900 border-2 border-gray-200 font-bold px-8 py-4 rounded-full text-base transition-all hover:-translate-y-0.5 shadow-sm text-center"
            >
              View Fee per Course
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-medium pt-2">
            <span className="flex items-center gap-1.5">
              <Mail size={16} className="text-electric-blue" /> Inquiries: <a href="mailto:daheltechies@gmail.com" className="text-navy-900 font-bold hover:underline">daheltechies@gmail.com</a>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={16} className="text-green-600" /> WhatsApp: <a href="https://wa.me/2347047581704" target="_blank" rel="noopener noreferrer" className="text-navy-900 font-bold hover:underline">+234 704 758 1704</a>
            </span>
          </div>

        </div>
      </section>

      {/* 3. FEE PER COURSE (PRICING GRID WITH CURRENCY TOGGLE) */}
      <section id="pricing" className="py-20 px-4 sm:px-6 bg-slate-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-electric-blue font-bold uppercase tracking-wider text-xs sm:text-sm">Transparent Investment</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 mt-2 mb-4">
              💼 Fee per Course
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Each course takes at least 3-4 weeks and is arranged around your personal daily or weekly schedule.
            </p>

            {/* Currency Toggle */}
            <div className="mt-6 inline-flex p-1 bg-white rounded-xl shadow-sm border border-gray-200">
              <button
                onClick={() => setCurrency("NGN")}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  currency === "NGN" 
                    ? "bg-navy-900 text-white shadow-md" 
                    : "text-gray-600 hover:text-navy-900"
                }`}
              >
                🇳🇬 Nigerian Naira (₦)
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  currency === "USD" 
                    ? "bg-navy-900 text-white shadow-md" 
                    : "text-gray-600 hover:text-navy-900"
                }`}
              >
                🌎 US Dollar ($ USD)
              </button>
            </div>
          </div>

          {/* Pricing Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <div 
                  key={course.id}
                  className={`bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between relative ${
                    course.popular 
                      ? "border-purple-300 ring-2 ring-purple-500/20 shadow-md" 
                      : "border-gray-200"
                  }`}
                >
                  {course.popular && (
                    <span className="absolute -top-3 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      High Demand
                    </span>
                  )}

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gray-50 border border-gray-100 ${course.iconColor}`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-navy-900 leading-tight">{course.title}</h3>
                        <span className="text-xs text-gray-500 font-medium">3-4 Weeks Private</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-3xl font-black text-navy-900 tracking-tight">
                        {currency === "NGN" ? course.priceNGN : course.priceUSD}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">
                        {currency === "NGN" ? `or ${course.priceUSD}` : `or ${course.priceNGN}`} per course
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 mb-6 leading-relaxed line-clamp-2">
                      {course.tagline}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20want%20to%20register%20for%20the%20${encodeURIComponent(course.title)}%20Private%20Session.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-electric-blue text-white font-bold py-2.5 px-4 rounded-xl text-sm transition-colors text-center"
                  >
                    Enroll in {course.title} <ArrowRight size={15} />
                  </a>
                </div>
              );
            })}
          </div>

          {/* MULTI-COURSE DISCOUNT CALLOUT */}
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-navy-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-blue-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-400 text-navy-900 rounded-2xl shrink-0">
                <Percent size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-2">Want to enroll for more than 3 courses?</h3>
                <p className="text-blue-100 text-base max-w-xl">
                  You may qualify for an exclusive multi-course bundle discount! Build a comprehensive data science stack with our dedicated program advisors.
                </p>
              </div>
            </div>
            <a 
              href="https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20would%20like%20to%20enroll%20for%20more%20than%203%20courses%20and%20request%20the%20multi-course%20discount."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-300 text-navy-900 font-extrabold px-6 py-3.5 rounded-full text-sm md:text-base transition-transform hover:scale-105 shrink-0 shadow-lg text-center"
            >
              Claim Bundle Discount →
            </a>
          </div>

        </div>
      </section>

      {/* 4. DETAILED COURSE-BY-COURSE CURRICULUM */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-electric-blue font-bold uppercase tracking-wider text-xs sm:text-sm">Deep-Dive Syllabus</span>
            <h2 className="text-3xl sm:text-5xl font-black text-navy-900 mt-2 mb-4">
              What You Will Learn In Each Private Course
            </h2>
            <p className="text-lg text-gray-600">
              No generic theory. Every module is built around real-world industry files, corporate workflows, and practical applications.
            </p>
          </div>

          <div className="space-y-12">
            {courses.map((course, idx) => {
              const Icon = course.icon;
              return (
                <div 
                  key={course.id}
                  id={course.id}
                  className="bg-slate-50/70 border border-gray-200 rounded-3xl p-6 sm:p-8 md:p-12 transition-all hover:shadow-lg relative overflow-hidden"
                >
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Course Header & Value Prop */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold text-gray-700 mb-4 shadow-sm">
                          <Icon size={14} className={course.iconColor} />
                          {course.badge}
                        </div>

                        <h3 className="text-2xl sm:text-4xl font-black text-navy-900 mb-3 tracking-tight">
                          {course.title}
                        </h3>

                        <p className="text-base sm:text-lg text-gray-700 font-medium mb-6 leading-relaxed">
                          {course.tagline}
                        </p>

                        <div className="bg-white p-4 rounded-2xl border border-gray-200 mb-6 shadow-sm">
                          <div className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">Tuition Fee</div>
                          <div className="text-2xl sm:text-3xl font-black text-navy-900">
                            {currency === "NGN" ? course.priceNGN : course.priceUSD}{" "}
                            <span className="text-sm text-gray-500 font-normal">
                              ({currency === "NGN" ? course.priceUSD : course.priceNGN})
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                            <Clock size={12} /> {course.duration}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <a
                          href={`https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20would%20like%20to%20enroll%20in%20the%20${encodeURIComponent(course.title)}%20Private%20Session.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-electric-blue text-white font-bold py-3.5 px-6 rounded-xl text-base transition-colors shadow-md"
                        >
                          Register for {course.title} <ArrowRight size={18} />
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Topics & What You Gain */}
                    <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
                      
                      <div className="mb-8">
                        <h4 className="text-sm font-black uppercase tracking-wider text-navy-900 mb-4 flex items-center gap-2">
                          <BookOpen size={16} className="text-electric-blue" />
                          Topics Include:
                        </h4>
                        <ul className="space-y-3">
                          {course.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                              <CheckCircle2 size={18} className="text-electric-blue shrink-0 mt-0.5" />
                              <span className="font-medium">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-6 border-t border-gray-100 bg-blue-50/50 p-4 rounded-xl">
                        <h4 className="text-xs font-black uppercase tracking-wider text-navy-900 mb-3 flex items-center gap-2">
                          <Award size={16} className="text-purple-600" />
                          What You'll Gain:
                        </h4>
                        <ul className="space-y-2">
                          {course.gains.map((gain, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-800 font-semibold">
                              <span className="text-electric-blue font-bold">✓</span>
                              <span>{gain}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE DAHEL TECHNOLOGIES? (CREDIBILITY & SOCIAL PROOF) */}
      <section className="py-24 px-4 sm:px-6 bg-navy-900 text-white relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-navy-900 to-navy-950 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-electric-blue font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-1">
              <Star size={16} className="text-amber-400 fill-amber-400" /> Proven Track Record & Global Standing
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2 mb-6">
              🌟 Why Choose Dahel Technologies?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 leading-relaxed">
              We are recognized by the Federal Government of Nigeria having worked with the <strong>National Information Technology Development Agency (NITDA)</strong> and the <strong>Nigeria Jubilee Fellowship Programme</strong>. We have also worked with the <strong>US Embassy and Alumni Community</strong> across Kenya, Nigeria, Angola, and elsewhere.
            </p>
            <p className="text-sm sm:text-base text-blue-200 mt-4">
              We have trained over <strong>20,000+ students</strong> in at least <strong>6 countries</strong> including the United States, the UK, and the African Community in China.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "One-on-One Mentorship",
                desc: "Learn directly from Microsoft Certified Trainers and industry veterans who teach at your exact comfort level.",
                icon: Users
              },
              {
                title: "Practical, Project-Based",
                desc: "Zero fluff, only real-world corporate use cases, portfolio artifacts, and hands-on projects you can showcase.",
                icon: Zap
              },
              {
                title: "Lifetime Support",
                desc: "We don't abandon you when the course finishes. Receive guidance, community access, and mentoring long after class ends.",
                icon: ShieldCheck
              },
              {
                title: "Certificate of Completion",
                desc: "Earn a recognized certificate to validate your high-income skills to top employers, recruiters, and clients worldwide.",
                icon: Award
              }
            ].map((pillar, i) => (
              <div 
                key={i} 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-electric-blue/20 text-electric-blue flex items-center justify-center mb-4">
                  <pillar.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Transform Career Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl sm:text-4xl font-black mb-3">🔥 Your Data Career Starts Here</h3>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don’t just learn — transform your skillset, your career trajectory, and your global earning power.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20am%20ready%20to%20register%20for%20a%20Private%20Session." 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-navy-900 hover:bg-gray-100 font-extrabold px-8 py-4 rounded-full text-base transition-transform hover:scale-105 shadow-xl text-center"
              >
                Register Now on WhatsApp
              </a>
              <Link 
                href="/groupclasses"
                className="w-full sm:w-auto bg-navy-900/60 hover:bg-navy-900 text-white border border-white/30 font-bold px-8 py-4 rounded-full text-base transition-all text-center"
              >
                Or Explore Group Classes →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. BANK TRANSFER & PAYMENT DETAILS */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-10">
            <span className="text-electric-blue font-bold uppercase tracking-wider text-xs sm:text-sm">Convenient Payments</span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 mt-2 mb-3">
              Want to Make a Bank Transfer Instead?
            </h2>
            <p className="text-gray-600">
              Direct, instantaneous bank transfers are supported for Nigerian and international accounts.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-lg">
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Account Card */}
              <div className="bg-navy-900 text-white rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                <div className="text-xs font-bold uppercase tracking-wider text-electric-blue mb-4">Official Payment Account</div>
                
                <div className="space-y-4 relative z-10">
                  <div>
                    <span className="text-xs text-gray-400 uppercase">Bank Name</span>
                    <div className="text-xl font-black">Moniepoint Microfinance Bank</div>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 uppercase">Account Name</span>
                    <div className="text-lg font-bold">Dahel Consultants and Techies</div>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs text-gray-400 uppercase">Account Number</span>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-3xl font-mono font-black text-amber-400 tracking-wider">
                        7047581704
                      </span>
                      <button
                        onClick={() => copyToClipboard("7047581704")}
                        className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-bold"
                        title="Copy Account Number"
                      >
                        {copiedBank ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                        <span>{copiedBank ? "Copied!" : "Copy"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proof of Payment Submission Instructions */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">Instructions after Transfer:</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Once payment is completed, please send your proof of payment immediately to our admissions desk for instantaneous receipt verification and course onboarding.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://wa.me/2347047581704?text=Hello%20Nora!%20I%20have%20completed%20a%20bank%20transfer%20for%20my%20Dahel%20Private%20Session.%20Here%20is%20my%20proof%20of%20payment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-green-200 bg-green-50/50 hover:bg-green-50 text-green-800 transition-colors"
                  >
                    <MessageCircle size={22} className="text-green-600 shrink-0" />
                    <div className="text-left">
                      <div className="text-xs font-bold uppercase text-green-900">Send via WhatsApp line (Nora)</div>
                      <div className="text-sm font-semibold text-green-700">+234 704 758 1704</div>
                    </div>
                  </a>

                  <a
                    href="mailto:financedahelgroup@gmail.com?subject=Proof%20of%20Payment%20-%20Private%20Session"
                    className="flex items-center gap-3 p-3.5 rounded-xl border border-blue-200 bg-blue-50/50 hover:bg-blue-50 text-blue-800 transition-colors"
                  >
                    <Mail size={22} className="text-blue-600 shrink-0" />
                    <div className="text-left">
                      <div className="text-xs font-bold uppercase text-blue-900">Send via Email (Finance)</div>
                      <div className="text-sm font-semibold text-blue-700">financedahelgroup@gmail.com</div>
                    </div>
                  </a>
                </div>

                <div className="text-xs text-gray-500 pt-2 border-t border-gray-100 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-green-600 shrink-0" />
                  <span>Prefer online card checkout? Visit our secure <Link href="/payments" className="text-electric-blue font-bold hover:underline">Payments Portal</Link>.</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. FINAL STICKY/BOTTOM CTA */}
      <section className="py-16 px-4 sm:px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-navy-900 mb-4">
            Ready to secure your dedicated 1-on-1 instructor?
          </h2>
          <p className="text-gray-600 mb-8 text-base">
            Private slots are strictly limited per month to ensure absolute instructor dedication and high-touch support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20would%20like%20to%20register%20and%20secure%20my%20Private%20Session."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-electric-blue hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-base transition-all shadow-lg hover:shadow-blue-500/30"
            >
              <MessageCircle size={20} /> Register on WhatsApp (+234 704 758 1704)
            </a>
            <Link
              href="/groupclasses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-navy-900 font-bold py-4 px-8 rounded-full text-base transition-colors"
            >
              Switch to Group Sessions <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
