"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ShoppingBag,
  UserCheck,
  GraduationCap,
  Layers,
  RefreshCw,
  CheckCircle2,
  Globe,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Clock,
  Mail,
  MessageCircle,
  Copy,
  Check,
  FileText,
  CreditCard,
} from "lucide-react";
import {
  detectCurrencySync,
  detectCurrencyAsync,
  savePreferredCurrency,
  SupportedCurrency,
} from "@/utils/geoCurrency";

interface WebsiteCategory {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
  examples: string;
}

const WEBSITE_CATEGORIES: WebsiteCategory[] = [
  {
    id: "business",
    title: "Business & Corporate Website",
    subtitle: "For Companies, SMEs, Agencies & Institutions",
    desc: "A professional, authoritative website that communicates your services, builds credibility, and turns visitors into paying clients.",
    icon: Building2,
    examples: "Company profile, consulting firm, NGO, hospital, real estate, law firm",
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Online Store",
    subtitle: "Sell Physical or Digital Products Online",
    desc: "Complete online storefront with product catalogs, cart checkout, and secure Nigerian & international payment gateways.",
    icon: ShoppingBag,
    examples: "Fashion brand, electronics store, digital bookstore, food & retail delivery",
  },
  {
    id: "portfolio",
    title: "Personal Brand & Portfolio",
    subtitle: "For Executives, Creatives, Authors & Speakers",
    desc: "Bespoke personal websites designed to showcase your biography, career achievements, media, publications, and booking inquiries.",
    icon: UserCheck,
    examples: "Executive portfolio, author/poet platform, filmmaker, consultant, speaker",
  },
  {
    id: "edtech",
    title: "School, Academy & EdTech Platform",
    subtitle: "For Training Centers, Schools & Course Creators",
    desc: "Modern educational portals with course listings, student registration, payment collection, and learning management features.",
    icon: GraduationCap,
    examples: "Tech academy, secondary/tertiary portal, coaching program, online bootcamp",
  },
  {
    id: "webapp",
    title: "Custom Web App / SaaS Platform",
    subtitle: "Tailored Software & Client Portals",
    desc: "Full-stack web applications with user authentication, dashboards, databases, real-time workflows, and custom business logic.",
    icon: Layers,
    examples: "Booking platform, marketplace, verification app, internal admin dashboard",
  },
  {
    id: "redesign",
    title: "Website Redesign & Upgrade",
    subtitle: "Modernize an Existing Website",
    desc: "Transform a slow, outdated, or non-mobile-friendly website into a fast, modern, high-converting digital experience.",
    icon: RefreshCw,
    examples: "UI/UX overhaul, mobile responsiveness fix, speed & SEO optimization, payment integration",
  },
];

const FEATURE_OPTIONS = [
  "Mobile & Tablet Responsive Design",
  "Custom UI/UX & Brand Styling",
  "Online Payments (Paystack / Flutterwave / USD)",
  "WhatsApp & Live Chat Integration",
  "Content Management System (Easy Edits / Blog)",
  "Client Booking / Appointment Form",
  "User Login & Admin Dashboard",
  "SEO & Google Search Optimization",
  "Domain Name & Cloud Hosting Setup",
  "Custom Official Business Emails",
];

const BUDGET_RANGES: Record<SupportedCurrency, string[]> = {
  NGN: [
    "₦150,000 – ₦300,000 (Starter / Landing Page)",
    "₦300,000 – ₦600,000 (Standard Business / Brand Site)",
    "₦600,000 – ₦1,200,000 (E-Commerce / Advanced Platform)",
    "₦1,200,000+ (Custom Web App / Enterprise Solution)",
    "Not sure yet — I need a quote from Dahel",
  ],
  USD: [
    "$250 – $500 (Starter / Landing Page)",
    "$500 – $1,000 (Standard Business / Brand Site)",
    "$1,000 – $2,500 (E-Commerce / Advanced Platform)",
    "$2,500+ (Custom Web App / Enterprise Solution)",
    "Not sure yet — I need a quote from Dahel",
  ],
  EUR: [
    "€230 – €460 (Starter / Landing Page)",
    "€460 – €920 (Standard Business / Brand Site)",
    "€920 – €2,300 (E-Commerce / Advanced Platform)",
    "€2,300+ (Custom Web App / Enterprise Solution)",
    "Not sure yet — I need a quote from Dahel",
  ],
  GBP: [
    "£200 – £400 (Starter / Landing Page)",
    "£400 – £800 (Standard Business / Brand Site)",
    "£800 – £2,000 (E-Commerce / Advanced Platform)",
    "£2,000+ (Custom Web App / Enterprise Solution)",
    "Not sure yet — I need a quote from Dahel",
  ],
  GHS: [
    "GH₵3,500 – GH₵7,000 (Starter / Landing Page)",
    "GH₵7,000 – GH₵14,000 (Standard Business / Brand Site)",
    "GH₵14,000 – GH₵32,000 (E-Commerce / Advanced Platform)",
    "GH₵32,000+ (Custom Web App / Enterprise Solution)",
    "Not sure yet — I need a quote from Dahel",
  ],
};

export default function DesignWebsiteServicePage() {
  const [currency, setCurrency] = useState<SupportedCurrency>("NGN");
  const [selectedCategory, setSelectedCategory] = useState<string>("business");

  // Client Intake Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [country, setCountry] = useState("");
  const [existingUrl, setExistingUrl] = useState("");
  const [pageCount, setPageCount] = useState("4–7 Pages (Standard Website)");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "Mobile & Tablet Responsive Design",
    "Custom UI/UX & Brand Styling",
    "WhatsApp & Live Chat Integration",
  ]);
  const [brandReadiness, setBrandReadiness] = useState(
    "I have a logo and some content ready"
  );
  const [timeline, setTimeline] = useState("Standard (2 – 4 Weeks)");
  const [budget, setBudget] = useState("");
  const [projectGoals, setProjectGoals] = useState("");
  const [referenceSites, setReferenceSites] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  useEffect(() => {
    const fastCurrency = detectCurrencySync();
    setCurrency(fastCurrency);
    setBudget(BUDGET_RANGES[fastCurrency][1]);

    detectCurrencyAsync().then((detected) => {
      if (detected) {
        setCurrency(detected);
        setBudget(BUDGET_RANGES[detected][1]);
      }
    });
  }, []);

  const handleCurrencyChange = (newCurr: SupportedCurrency) => {
    setCurrency(newCurr);
    savePreferredCurrency(newCurr);
    setBudget(BUDGET_RANGES[newCurr][1]);
  };

  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const currentCategoryObj =
    WEBSITE_CATEGORIES.find((c) => c.id === selectedCategory) ||
    WEBSITE_CATEGORIES[0];

  const buildProjectBriefText = () => {
    return [
      `Hello Dahel Technologies! I want you to design and build a website for me. Here are my project details:`,
      ``,
      `1. CLIENT DETAILS`,
      `• Full Name: ${fullName || "Not provided"}`,
      `• Email: ${email || "Not provided"}`,
      `• Phone / WhatsApp: ${phone || "Not provided"}`,
      `• Business / Brand Name: ${organization || "Not provided"}`,
      `• Country / Location: ${country || "Not provided"}`,
      existingUrl ? `• Existing Website: ${existingUrl}` : null,
      ``,
      `2. WEBSITE SPECIFICATIONS`,
      `• Website Type: ${currentCategoryObj.title}`,
      `• Estimated Size: ${pageCount}`,
      `• Key Features Needed: ${
        selectedFeatures.length > 0
          ? selectedFeatures.join(", ")
          : "Standard features"
      }`,
      `• Brand Assets Readiness: ${brandReadiness}`,
      `• Target Timeline: ${timeline}`,
      `• Estimated Budget (${currency}): ${budget}`,
      ``,
      `3. PROJECT GOALS & DESCRIPTION`,
      `${projectGoals || "No additional description provided."}`,
      referenceSites ? `\n• Reference / Inspiration Websites: ${referenceSites}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const briefText = buildProjectBriefText();
    const whatsappUrl = `https://wa.me/2347047581704?text=${encodeURIComponent(
      briefText
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(buildProjectBriefText());
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  const noraWhatsAppHref = `https://wa.me/2347047581704?text=${encodeURIComponent(
    buildProjectBriefText()
  )}`;
  const vaelWhatsAppHref = `https://wa.me/13107081983?text=${encodeURIComponent(
    buildProjectBriefText()
  )}`;
  const emailHref = `mailto:daheltechies@gmail.com?subject=${encodeURIComponent(
    `Website Design Request — ${organization || fullName || "New Client"}`
  )}&body=${encodeURIComponent(buildProjectBriefText())}`;

  return (
    <div className="min-h-screen bg-slate-50/70 text-navy-900 pb-24 w-full max-w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#061229] via-navy-900 to-[#0d2247] text-white overflow-hidden">
        {/* Background ambient glow */}
        <div className="pointer-events-none absolute -top-24 right-1/4 w-[480px] h-[480px] rounded-full bg-electric-blue/25 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 w-[420px] h-[420px] rounded-full bg-pink-500/15 blur-[130px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Top helpful switch banner for learners vs clients */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-3.5 sm:px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="text-blue-100 font-medium text-center sm:text-left">
                <span className="inline-block bg-electric-blue text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full mr-2">
                  CLIENT SERVICE
                </span>
                This page is for clients who want{" "}
                <strong className="text-white">Dahel Technologies</strong> to
                design &amp; build their website.
              </div>
              <Link
                href="/learn/web-design"
                className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white font-bold px-4 py-2 rounded-xl transition-all shrink-0 border border-white/20"
              >
                <span>Want to Learn Web Design instead?</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 font-bold uppercase tracking-widest text-xs sm:text-sm px-4 py-1.5 rounded-full mb-5">
              <Globe size={15} /> Custom Website Design &amp; Development
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-6">
              Let Us Design &amp; Build a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-pink-400">
                Stunning Website
              </span>{" "}
              for Your Brand
            </h1>

            <p className="text-base sm:text-xl text-blue-100/90 max-w-3xl mx-auto font-medium leading-relaxed mb-8">
              Whether you need a corporate website, an e-commerce store, a
              personal portfolio, or a custom web platform, our engineering and
              design team builds fast, mobile-responsive websites that elevate
              your brand and convert visitors into customers.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#project-brief-form"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#ff1675] to-[#e0005e] hover:from-[#e0005e] hover:to-[#c20051] text-white font-extrabold px-8 py-4 rounded-full text-base sm:text-lg shadow-[0_12px_30px_-6px_rgba(224,0,94,0.55)] transition-all hover:scale-105"
              >
                <span>Tell Us About Your Website</span>
                <ArrowRight size={20} />
              </a>
              <a
                href="https://wa.me/2347047581704?text=Hello%20Dahel%20Technologies!%20I%20want%20you%20to%20design%20a%20website%20for%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold px-7 py-4 rounded-full text-base transition-all"
              >
                <MessageCircle size={18} className="text-emerald-400" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        {/* STEP 1: SELECT WEBSITE TYPE */}
        <section className="bg-white rounded-3xl shadow-md border border-gray-200/90 p-6 sm:p-10 mb-10">
          <div className="mb-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-electric-blue block mb-1.5">
              Step 1 of 2
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 mb-2">
              What kind of website do you want us to build?
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Select the category that best matches your project. Your selection
              will automatically update the project brief below.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WEBSITE_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-left p-5 sm:p-6 rounded-2xl border-2 transition-all flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? "border-electric-blue bg-blue-50/70 shadow-md"
                      : "border-gray-200/80 hover:border-blue-300 hover:bg-gray-50/60"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "bg-electric-blue text-white shadow-xs"
                            : "bg-blue-50 text-electric-blue"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <span
                        className={`w-5 h-5 rounded-full border flex items-center justify-center mt-1 ${
                          isSelected
                            ? "border-electric-blue bg-electric-blue text-white"
                            : "border-gray-300"
                        }`}
                      >
                        {isSelected && <Check size={12} strokeWidth={3} />}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base sm:text-lg text-navy-900 mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-bold text-electric-blue mb-2.5">
                      {cat.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-gray-200/60 text-[11px] text-gray-500 font-medium">
                    <strong className="text-gray-700">Examples:</strong>{" "}
                    {cat.examples}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* STEP 2: CLIENT & PROJECT INFORMATION CAPTURE FORM */}
        <section
          id="project-brief-form"
          className="bg-white rounded-3xl shadow-md border border-gray-200/90 p-6 sm:p-10 mb-12 scroll-mt-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-8 border-b border-gray-100">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-electric-blue block mb-1.5">
                Step 2 of 2 • Client Information &amp; Project Brief
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-navy-900 mb-1">
                Tell Us About Your Website Project
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Complete the form below so our team can review your requirements
                and prepare a tailored proposal &amp; quote.
              </p>
            </div>

            {/* Currency Switcher */}
            <div className="shrink-0">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                Preferred Currency
              </span>
              <div className="inline-flex flex-wrap gap-1 p-1 bg-gray-100 rounded-xl border border-gray-200">
                {(["NGN", "USD", "EUR", "GBP", "GHS"] as SupportedCurrency[]).map(
                  (cur) => (
                    <button
                      key={cur}
                      type="button"
                      onClick={() => handleCurrencyChange(cur)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        currency === cur
                          ? "bg-navy-900 text-white shadow-2xs"
                          : "text-gray-600 hover:text-navy-900"
                      }`}
                    >
                      {cur}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-8">
            {/* PART A: CONTACT & ORGANIZATION DETAILS */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-navy-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-navy-900 text-white text-xs flex items-center justify-center">
                  1
                </span>
                <span>Your Contact &amp; Brand Details</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Phone / WhatsApp Number{" "}
                    <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Business, Brand or Organization Name
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Acme Ventures Ltd"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Country / City
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. Lagos, Nigeria / London, UK"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Existing Website URL (If Redesigning or Upgrading)
                  </label>
                  <input
                    type="url"
                    value={existingUrl}
                    onChange={(e) => setExistingUrl(e.target.value)}
                    placeholder="https://www.yourcurrentsite.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>

            {/* PART B: WEBSITE SCOPE & FEATURES */}
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-sm font-black uppercase tracking-wider text-navy-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-navy-900 text-white text-xs flex items-center justify-center">
                  2
                </span>
                <span>Website Scope, Features &amp; Timeline</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Selected Website Type
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-electric-blue outline-none transition-all text-sm sm:text-base font-semibold text-navy-900 cursor-pointer"
                  >
                    {WEBSITE_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Estimated Number of Pages
                  </label>
                  <select
                    value={pageCount}
                    onChange={(e) => setPageCount(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-electric-blue outline-none transition-all text-sm sm:text-base font-medium text-navy-900 cursor-pointer"
                  >
                    <option value="1–3 Pages (Landing Page / Single-Page Site)">
                      1–3 Pages (Landing Page / Single-Page Site)
                    </option>
                    <option value="4–7 Pages (Standard Website)">
                      4–7 Pages (Standard Website)
                    </option>
                    <option value="8–15 Pages (Comprehensive Corporate / Store)">
                      8–15 Pages (Comprehensive Corporate / Store)
                    </option>
                    <option value="15+ Pages / Custom Web Application">
                      15+ Pages / Custom Web Application
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Preferred Launch Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-electric-blue outline-none transition-all text-sm sm:text-base font-medium text-navy-900 cursor-pointer"
                  >
                    <option value="Urgent (1 – 2 Weeks)">
                      Urgent (1 – 2 Weeks)
                    </option>
                    <option value="Standard (2 – 4 Weeks)">
                      Standard (2 – 4 Weeks)
                    </option>
                    <option value="Flexible (1 – 2 Months)">
                      Flexible (1 – 2 Months)
                    </option>
                    <option value="Just Exploring / Need a Quote First">
                      Just Exploring / Need a Quote First
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Estimated Budget Range ({currency})
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-electric-blue outline-none transition-all text-sm sm:text-base font-semibold text-navy-900 cursor-pointer"
                  >
                    {BUDGET_RANGES[currency].map((range, i) => (
                      <option key={i} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Multi-select Features */}
              <div className="mb-6">
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-3">
                  Key Features Needed (Select all that apply)
                </label>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {FEATURE_OPTIONS.map((feature) => {
                    const active = selectedFeatures.includes(feature);
                    return (
                      <button
                        key={feature}
                        type="button"
                        onClick={() => toggleFeature(feature)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          active
                            ? "border-electric-blue bg-blue-50/80 text-navy-900 shadow-2xs"
                            : "border-gray-200 hover:border-blue-200 text-gray-700 bg-white"
                        }`}
                      >
                        <span
                          className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                            active
                              ? "bg-electric-blue text-white"
                              : "border border-gray-300 bg-white"
                          }`}
                        >
                          {active && <Check size={13} strokeWidth={3} />}
                        </span>
                        <span>{feature}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brand Assets Readiness */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                  Do you have your logo &amp; website content ready?
                </label>
                <select
                  value={brandReadiness}
                  onChange={(e) => setBrandReadiness(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-electric-blue outline-none transition-all text-sm sm:text-base font-medium text-navy-900 cursor-pointer"
                >
                  <option value="I have both logo and written content ready">
                    Yes — I have both my logo and written content ready
                  </option>
                  <option value="I have a logo and some content ready">
                    I have a logo, but I need help structuring the page content
                  </option>
                  <option value="I need Dahel to create my logo, branding, and website content">
                    No — I need Dahel to handle my logo, branding, and website
                    copy
                  </option>
                  <option value="I have an existing website whose content we can upgrade">
                    I have an existing website whose content we can upgrade
                  </option>
                </select>
              </div>
            </div>

            {/* PART C: PROJECT DESCRIPTION & INSPIRATION */}
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-sm font-black uppercase tracking-wider text-navy-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-navy-900 text-white text-xs flex items-center justify-center">
                  3
                </span>
                <span>Project Goals &amp; Reference Websites</span>
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Tell us about your business and what you want the website to
                    achieve <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={projectGoals}
                    onChange={(e) => setProjectGoals(e.target.value)}
                    placeholder="Describe what your business or organization does, who your target audience is, and any specific pages or functionality you want on your website..."
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Reference or Sample Websites You Like (Optional)
                  </label>
                  <input
                    type="text"
                    value={referenceSites}
                    onChange={(e) => setReferenceSites(e.target.value)}
                    placeholder="e.g. stripe.com, apple.com, or any competitor website you admire"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue outline-none transition-all text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>

            {/* SUBMIT & INSTANT DELIVERY OPTIONS */}
            <div className="pt-6 border-t border-gray-200 flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ff1675] to-[#e0005e] hover:from-[#e0005e] hover:to-[#c20051] text-white font-extrabold text-base sm:text-lg px-9 py-4 rounded-full shadow-[0_12px_28px_-6px_rgba(224,0,94,0.5)] transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Submit Website Request via WhatsApp</span>
                  <ArrowRight size={20} />
                </button>

                <a
                  href={emailHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-navy-900 hover:bg-electric-blue text-white font-bold text-sm sm:text-base px-7 py-4 rounded-full transition-all shadow-sm"
                >
                  <Mail size={18} />
                  <span>Submit Request via Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-navy-900 font-bold text-sm px-6 py-4 rounded-full transition-all cursor-pointer"
                >
                  {copiedBrief ? (
                    <>
                      <Check size={16} className="text-emerald-600" />
                      <span className="text-emerald-700">Brief Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Brief</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-500">
                By submitting, your structured project brief will open directly
                with our project team on WhatsApp (<strong>+234 704 758 1704</strong>) or Email (
                <strong>daheltechies@gmail.com</strong>) for immediate review and
                quotation.
              </p>
            </div>
          </form>

          {/* CONFIRMATION PANEL IF SUBMITTED */}
          {isSubmitted && (
            <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 animate-in fade-in duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={22} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-black text-navy-900 mb-1">
                    Your Website Project Brief is Ready!
                  </h4>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    If WhatsApp didn&apos;t open automatically, you can send your
                    captured project brief using any of the direct channels
                    below:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={noraWhatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
                    >
                      <MessageCircle size={16} />
                      <span>Send to Nora (+234 704 758 1704)</span>
                    </a>
                    <a
                      href={vaelWhatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-navy-900 hover:bg-electric-blue text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
                    >
                      <MessageCircle size={16} />
                      <span>Send to Vael (+1 310 708 1983)</span>
                    </a>
                    <a
                      href={emailHref}
                      className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-navy-900 border border-gray-300 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors"
                    >
                      <Mail size={16} />
                      <span>Send via Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* HOW WE BUILD YOUR WEBSITE (4-STEP PROCESS) */}
        <section className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-electric-blue block mb-2">
              Our Delivery Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-navy-900 mb-3">
              How We Bring Your Website to Life
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              A transparent, milestone-driven workflow from initial discovery to
              launch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "We review your project brief, clarify your goals, target audience, and sitemap, and provide a clear timeline and quote.",
              },
              {
                step: "02",
                title: "Custom UI/UX Design",
                desc: "We craft a modern, brand-aligned interface focused on clarity, trust, and seamless user journeys on mobile and desktop.",
              },
              {
                step: "03",
                title: "Development & Integration",
                desc: "Our engineers build your website with fast load times, SEO best practices, payment gateways, and WhatsApp/CRM integrations.",
              },
              {
                step: "04",
                title: "Launch & Handover",
                desc: "We deploy your website to production, connect your custom domain and SSL security, and train your team to manage content.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black text-electric-blue font-mono mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-extrabold text-navy-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY LET DAHEL DESIGN YOUR WEBSITE + ALREADY HAVE AN INVOICE? */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-navy-900 text-white rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-300 block mb-2">
                The Dahel Standard
              </span>
              <h3 className="text-2xl font-black mb-4">
                Why Let Dahel Technologies Build Your Website?
              </h3>
              <ul className="space-y-3.5 text-sm text-gray-200 mb-6">
                <li className="flex items-start gap-3">
                  <Smartphone
                    size={18}
                    className="text-electric-blue shrink-0 mt-0.5"
                  />
                  <span>
                    <strong className="text-white">
                      100% Mobile &amp; Tablet Responsive:
                    </strong>{" "}
                    Designed to look impeccable on phones, tablets, and desktops.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles
                    size={18}
                    className="text-pink-400 shrink-0 mt-0.5"
                  />
                  <span>
                    <strong className="text-white">
                      Conversion-Focused Design:
                    </strong>{" "}
                    Built with clear calls-to-action, trust signals, and fast
                    page performance.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck
                    size={18}
                    className="text-emerald-400 shrink-0 mt-0.5"
                  />
                  <span>
                    <strong className="text-white">
                      Secure Payments &amp; Integrations:
                    </strong>{" "}
                    Paystack, Flutterwave, international payments, WhatsApp, and
                    custom forms.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock
                    size={18}
                    className="text-amber-400 shrink-0 mt-0.5"
                  />
                  <span>
                    <strong className="text-white">
                      Dedicated Support &amp; Maintenance:
                    </strong>{" "}
                    We don&apos;t disappear after launch — we support your
                    growth.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-blue-200 flex flex-wrap gap-4">
              <span>WhatsApp: +234 704 758 1704</span>
              <span>•</span>
              <span>Inquiries (Vael): +1 (310) 708 1983</span>
              <span>•</span>
              <span>daheltechies@gmail.com</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-2xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-electric-blue block mb-2">
                Payments &amp; Invoices
              </span>
              <h3 className="text-2xl font-black text-navy-900 mb-3">
                Already Discussed Your Website Project With Us?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                If you have already received a website development quote or
                invoice from Dahel Technologies, you can complete your milestone
                or project payment securely via our payments hub.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-700 bg-slate-50 p-3.5 rounded-xl border border-gray-100">
                  <FileText size={18} className="text-electric-blue shrink-0" />
                  <span>
                    Pay with your Invoice / Reference Number on our Payments Hub
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-gray-700 bg-slate-50 p-3.5 rounded-xl border border-gray-100">
                  <CreditCard
                    size={18}
                    className="text-emerald-600 shrink-0"
                  />
                  <span>
                    Supports Naira (₦), USD ($), EUR (€), GBP (£), and GHS (GH₵)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/payments"
                className="inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-electric-blue text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors"
              >
                <span>Proceed to Payments</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/learn/web-design"
                className="inline-flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-electric-blue font-bold px-6 py-3.5 rounded-xl text-sm transition-colors"
              >
                <span>Explore Web Design Course</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
