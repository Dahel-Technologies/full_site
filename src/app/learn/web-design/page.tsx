import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Play,
  Calendar,
  Award,
  Check,
  GraduationCap,
  Laptop,
  Users,
  BadgeCheck,
  Trophy,
  Globe,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Learn Web Design Course — Dahel Technologies",
  description:
    "Build stunning websites & grow your digital skills. Learn modern web design skills including HTML & CSS, JavaScript, Responsive Design, WordPress, UI/UX Best Practices, and Website Deployment.",
};

export default function LearnWebDesignPage() {
  const registerWhatsAppUrl =
    "https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20would%20like%20to%20enroll%20in%20the%20Web%20Design%20Course.";

  const learningTopics = [
    "HTML & CSS",
    "JavaScript",
    "Responsive Design",
    "WordPress",
    "UI/UX Best Practices",
    "Website Deployment",
  ];

  const targetAudience = [
    "Students and Graduates",
    "Working Professionals",
    "Entrepreneurs and Business Owners",
    "Anyone who wants to build a career in Tech",
  ];

  return (
    <div className="min-h-screen bg-[#f8fbff] text-navy-900 pb-20 w-full max-w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-[#f7faff] to-[#f2f7ff]">
        {/* Decorative soft background shapes */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-blue-100/50 blur-3xl -z-10" />
        <div className="pointer-events-none absolute top-1/2 -left-24 w-[360px] h-[360px] rounded-full bg-pink-100/30 blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* LEFT COLUMN: Course Copy & CTA */}
            <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
              <span className="inline-block bg-[#dceaff] text-[#0c3b87] font-bold text-sm sm:text-base px-5 py-2 rounded-full mb-5 shadow-2xs border border-blue-200/60">
                Web Design Course
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-navy-900 mb-6">
                <span className="block">Build Stunning</span>
                <span className="block">Websites &amp; Grow</span>
                <span className="block text-[#0056D2] mt-1">
                  Your Digital Skills
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed mb-8 max-w-xl">
                Learn modern web design skills and create professional,
                responsive websites — even if you’re a beginner.
              </p>

              {/* Magenta / Hot Pink Pill CTA Button */}
              <div className="flex flex-wrap items-center gap-4 mb-9 w-full sm:w-auto">
                <a
                  href={registerWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff1675] to-[#e0005e] hover:from-[#e0005e] hover:to-[#c20051] text-white font-extrabold text-lg sm:text-xl px-9 py-4 rounded-full shadow-[0_12px_28px_-6px_rgba(224,0,94,0.5)] hover:shadow-[0_16px_32px_-6px_rgba(224,0,94,0.65)] transition-all hover:-translate-y-0.5"
                >
                  <span>Start Learning Today</span>
                  <ArrowRight size={22} />
                </a>
              </div>

              {/* 3 Feature Perks Row */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 pt-2 border-t sm:border-t-0 border-blue-100">
                <div className="flex items-center gap-3 sm:pr-5 sm:border-r border-blue-200">
                  <div className="w-9 h-9 rounded-full bg-[#0056D2] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Play size={16} fill="currentColor" className="ml-0.5" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-navy-900 leading-tight">
                    Learn
                    <br />
                    <span className="font-semibold text-gray-700">
                      Online or Onsite
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:px-5 sm:border-r border-blue-200">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0056D2] flex items-center justify-center shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-navy-900 leading-tight">
                    Flexible
                    <br />
                    <span className="font-semibold text-gray-700">
                      Schedule
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:pl-5">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#0056D2] flex items-center justify-center shrink-0">
                    <Award size={20} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-navy-900 leading-tight">
                    Get a{" "}
                    <span className="font-bold text-navy-900">Certificate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Student at Laptop + Floating HTML5, CSS3, JS, WordPress Cards */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[540px] rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_-15px_rgba(0,86,210,0.15)] border border-blue-100/80">
                <div className="relative w-full aspect-[386/364]">
                  <Image
                    src="/resources/web_design_hero.png"
                    alt="Build Stunning Websites & Grow Your Digital Skills - Dahel Technologies Web Design Course"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  {/* Clean masks over adjacent flyer text edges */}
                  <div
                    className="absolute left-0 top-[25%] w-[9.5%] h-[72%] bg-[#f9fbff]"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute right-[3%] top-0 w-[30%] h-[2.5%] bg-[#e4e9f2]"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "WHAT YOU'LL LEARN" SECTION WITH MULTI-DEVICE SHOWCASE */}
      <section id="what-you-learn" className="py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#e8f1ff] via-[#f2f7ff] to-[#e4eeff] rounded-3xl p-6 sm:p-10 md:p-12 border border-blue-200/70 shadow-[0_10px_35px_-10px_rgba(0,86,210,0.12)]">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Left Checklist */}
              <div className="lg:col-span-5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy-900 mb-2">
                  What You’ll Learn
                </h2>
                <p className="text-base sm:text-lg text-gray-700 font-semibold mb-6">
                  Get hands-on training in:
                </p>

                <ul className="space-y-3.5">
                  {learningTopics.map((topic, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3.5 text-base sm:text-lg font-bold text-navy-900"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#0056D2] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Multi-Device Responsive Mockup (Laptop + Tablet + Phone) */}
              <div className="lg:col-span-7">
                <div className="relative flex items-end justify-center lg:justify-end gap-2 sm:gap-3 pt-4 pb-2">
                  {/* LAPTOP MOCKUP */}
                  <div className="relative w-[62%] sm:w-[58%] flex flex-col items-center">
                    <div className="w-full aspect-[16/10] bg-navy-900 rounded-t-xl sm:rounded-t-2xl p-1.5 sm:p-2.5 shadow-2xl border-2 border-slate-700">
                      <div className="w-full h-full rounded-md sm:rounded-lg overflow-hidden bg-white flex flex-col relative">
                        {/* Mock Browser Top Bar */}
                        <div className="h-5 sm:h-6 bg-white px-2.5 sm:px-4 flex items-center justify-between border-b border-gray-100 text-[7px] sm:text-[9px] font-bold text-navy-900 shrink-0">
                          <span className="text-[#0056D2] font-extrabold">
                            Your Brand
                          </span>
                          <div className="flex items-center gap-2 sm:gap-3 text-gray-500 font-semibold">
                            <span>Home</span>
                            <span>About</span>
                            <span>Services</span>
                            <span>Contact</span>
                          </div>
                        </div>
                        {/* Mock Site Body */}
                        <div className="flex-1 relative overflow-hidden flex">
                          <Image
                            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop"
                            alt="Modern architecture website preview"
                            fill
                            className="object-cover object-right"
                          />
                          <div
                            className="relative z-10 w-[62%] h-full bg-gradient-to-br from-[#004ec2] via-[#0d63e6] to-[#1e78ff]/90 p-3 sm:p-5 flex flex-col justify-center text-white"
                            style={{
                              clipPath:
                                "polygon(0 0, 88% 0, 100% 100%, 0% 100%)",
                            }}
                          >
                            <div className="text-xs sm:text-lg md:text-xl font-black leading-[1.1] mb-2 sm:mb-3 drop-shadow-xs">
                              <div>Dream.</div>
                              <div>Design.</div>
                              <div>Launch.</div>
                            </div>
                            <span className="inline-block w-max bg-[#072969] text-white text-[7px] sm:text-[9px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                              Get Started
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Laptop Base */}
                    <div className="w-[110%] h-2.5 sm:h-3.5 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-b-xl shadow-md border-t border-slate-300 flex justify-center">
                      <div className="w-12 sm:w-16 h-1 bg-slate-400 rounded-b-md" />
                    </div>
                  </div>

                  {/* TABLET MOCKUP */}
                  <div className="relative w-[26%] sm:w-[27%] -ml-4 sm:-ml-6 z-10">
                    <div className="w-full aspect-[3/4] bg-navy-900 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-2xl border-2 border-slate-700 flex flex-col">
                      <div className="w-full h-full rounded-lg overflow-hidden bg-white flex flex-col">
                        <div className="h-4 sm:h-5 bg-white px-2 flex items-center justify-between border-b border-gray-100 text-[6px] sm:text-[7px] font-bold text-navy-900 shrink-0">
                          <span className="text-[#0056D2] font-extrabold">
                            Your Brand
                          </span>
                          <div className="hidden sm:flex items-center gap-1.5 text-gray-500">
                            <span>Home</span>
                            <span>About</span>
                            <span>Services</span>
                          </div>
                        </div>
                        <div className="flex-1 relative overflow-hidden flex">
                          <Image
                            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80&auto=format&fit=crop"
                            alt="Tablet responsive preview"
                            fill
                            className="object-cover object-center"
                          />
                          <div
                            className="relative z-10 w-[68%] h-full bg-gradient-to-br from-[#004ec2] to-[#1e78ff]/95 p-2 sm:p-3 flex flex-col justify-center text-white"
                            style={{
                              clipPath:
                                "polygon(0 0, 86% 0, 100% 100%, 0% 100%)",
                            }}
                          >
                            <div className="text-[9px] sm:text-xs font-black leading-tight mb-1.5">
                              <div>Dream.</div>
                              <div>Design.</div>
                              <div>Launch.</div>
                            </div>
                            <span className="inline-block w-max bg-[#072969] text-white text-[5px] sm:text-[7px] font-bold px-1.5 py-0.5 rounded-full">
                              Get Started
                            </span>
                          </div>
                        </div>
                        <div className="h-4 sm:h-5 bg-white px-2 flex items-center justify-around text-[5px] sm:text-[6px] font-bold text-navy-900 border-t border-gray-100">
                          <span>Portfolio</span>
                          <span>Services</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SMARTPHONE MOCKUP */}
                  <div className="relative w-[14%] sm:w-[15%] -ml-3 sm:-ml-4 z-20">
                    <div className="w-full aspect-[9/18] bg-navy-900 rounded-xl sm:rounded-2xl p-1 sm:p-1.5 shadow-2xl border-2 border-slate-700 flex flex-col">
                      <div className="w-4 sm:w-6 h-1 bg-slate-700 rounded-full mx-auto mb-0.5" />
                      <div className="w-full flex-1 rounded-lg overflow-hidden bg-white flex flex-col">
                        <div className="h-3 sm:h-3.5 bg-white px-1.5 flex items-center justify-between text-[4px] sm:text-[5px] font-extrabold text-[#0056D2]">
                          <span>Your Brand</span>
                          <span>☰</span>
                        </div>
                        <div className="flex-1 relative overflow-hidden flex flex-col">
                          <div className="bg-gradient-to-br from-[#004ec2] to-[#1e78ff] p-1.5 sm:p-2 text-white flex-1 flex flex-col justify-center">
                            <div className="text-[7px] sm:text-[9px] font-black leading-tight mb-1">
                              <div>Dream.</div>
                              <div>Design.</div>
                              <div>Launch.</div>
                            </div>
                            <span className="inline-block w-max bg-[#072969] text-white text-[4px] sm:text-[5px] font-bold px-1.5 py-0.5 rounded-full">
                              Get Started
                            </span>
                          </div>
                          <div className="h-[38%] relative">
                            <Image
                              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80&auto=format&fit=crop"
                              alt="Mobile responsive preview"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "WHY CHOOSE DAHEL TECHNOLOGIES?" SECTION */}
      <section id="why-dahel" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-navy-900 mb-12">
            Why Choose Dahel Technologies?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-blue-200/80 bg-white/70 rounded-3xl p-4 sm:p-8 border border-blue-100/80 shadow-xs">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center px-6 py-6 sm:py-2">
              <div className="relative mb-5 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100/80 text-[#0056D2] flex items-center justify-center shadow-sm">
                  <GraduationCap size={36} strokeWidth={2} />
                </div>
                <div className="absolute -bottom-2 w-12 h-2.5 bg-blue-400/30 rounded-full blur-xs" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 mb-1.5">
                Expert-Led Training
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-snug max-w-[200px]">
                Learn from industry professionals
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center px-6 py-6 sm:py-2">
              <div className="relative mb-5 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100/80 text-[#0056D2] flex items-center justify-center shadow-sm">
                  <Laptop size={34} strokeWidth={2} />
                </div>
                <div className="absolute -bottom-2 w-12 h-2.5 bg-blue-400/30 rounded-full blur-xs" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 mb-1.5">
                Practical Projects
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-snug max-w-[200px]">
                Build real-world websites
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center px-6 py-6 sm:py-2">
              <div className="relative mb-5 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100/80 text-[#0056D2] flex items-center justify-center shadow-sm">
                  <Users size={34} strokeWidth={2} />
                </div>
                <div className="absolute -bottom-2 w-12 h-2.5 bg-blue-400/30 rounded-full blur-xs" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 mb-1.5">
                Supportive Community
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-snug max-w-[200px]">
                Learn, network and grow
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center text-center px-6 py-6 sm:py-2">
              <div className="relative mb-5 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-blue-50 to-blue-100/80 text-[#0056D2] flex items-center justify-center shadow-sm">
                  <BadgeCheck size={36} strokeWidth={2} />
                </div>
                <div className="absolute -bottom-2 w-12 h-2.5 bg-blue-400/30 rounded-full blur-xs" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 mb-1.5">
                Recognised Certificate
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-snug max-w-[200px]">
                Boost your CV and career prospects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "WHO IS THIS COURSE FOR?" BANNER CARD */}
      <section id="who-is-it-for" className="py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#e8f1ff] via-[#f2f7ff] to-[#e6f0ff] rounded-3xl p-6 sm:p-10 border border-blue-200/70 shadow-xs">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Title */}
              <div className="lg:col-span-4">
                <h2 className="text-2xl sm:text-3xl font-black text-navy-900 mb-2">
                  Who Is This Course For?
                </h2>
                <p className="text-base sm:text-lg text-gray-700 font-medium">
                  This course is perfect for:
                </p>
              </div>

              {/* Middle Column: 4 Target Audience Checkmarks */}
              <div className="lg:col-span-5">
                <ul className="space-y-3">
                  {targetAudience.map((audience, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm sm:text-base font-bold text-navy-900"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#0056D2] text-white flex items-center justify-center shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{audience}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Tilted "Turn Your Creativity Into a Career!" Callout */}
              <div className="lg:col-span-3 lg:border-l border-blue-300/80 lg:pl-8 flex flex-col items-center justify-center text-center">
                <div className="transform -rotate-3">
                  <div className="text-xl sm:text-2xl font-black text-navy-900 leading-tight">
                    Turn Your Creativity
                    <br />
                    Into a Career!
                  </div>
                  {/* Magenta Swoop Underline */}
                  <svg
                    viewBox="0 0 220 20"
                    className="w-44 sm:w-48 h-4 mt-1 mx-auto"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 15 C 65 4, 150 2, 216 9"
                      fill="none"
                      stroke="#e60067"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DARK NAVY ENROLLMENT CTA BANNER */}
      <section id="enroll" className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#041026] via-[#0a2351] to-[#041026] text-white px-6 sm:px-10 md:px-14 py-8 sm:py-10 shadow-2xl border border-blue-800/60">
            {/* Subtle glowing background accents */}
            <div className="pointer-events-none absolute -top-20 left-1/3 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 right-1/4 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7 text-center sm:text-left">
                {/* Gold Trophy Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
                  <Trophy size={44} strokeWidth={1.8} />
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
                    Enroll Today and Start Building
                    <br className="hidden sm:inline" /> Your Future in{" "}
                    <span className="text-amber-400">Web Design!</span>
                  </h2>
                </div>
              </div>

              {/* Divider + Magenta Register Now Button */}
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto justify-center shrink-0">
                <div className="hidden lg:block w-px h-14 bg-blue-400/30" />

                <a
                  href={registerWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff1675] to-[#e0005e] hover:from-[#e0005e] hover:to-[#c20051] text-white font-extrabold text-lg sm:text-xl px-9 py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(224,0,94,0.55)] transition-all hover:scale-105"
                >
                  <span>Register Now</span>
                  <ArrowRight size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Flexible Learning Options & Direct Payment Links */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
            <a
              href={registerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex items-center justify-center gap-2.5 text-sm font-bold text-navy-900 shadow-2xs transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={18} className="text-emerald-600 shrink-0" />
              <span>Chat with Admissions on WhatsApp</span>
            </a>

            <Link
              href="/privatesessions"
              className="bg-white hover:bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex items-center justify-center gap-2.5 text-sm font-bold text-navy-900 shadow-2xs transition-all hover:-translate-y-0.5"
            >
              <Sparkles size={18} className="text-electric-blue shrink-0" />
              <span>Prefer 1-on-1 Private Coaching?</span>
            </Link>

            <Link
              href="/payments"
              className="bg-white hover:bg-blue-50/50 border border-blue-100 rounded-2xl p-4 flex items-center justify-center gap-2.5 text-sm font-bold text-navy-900 shadow-2xs transition-all hover:-translate-y-0.5"
            >
              <Globe size={18} className="text-purple-600 shrink-0" />
              <span>Proceed Directly to Payments</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
