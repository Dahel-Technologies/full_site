"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HandHeart, Users, Lightbulb, Briefcase, Globe, Monitor, GraduationCap, Trophy, Cpu } from "lucide-react";
import IridescentButton from "@/components/IridescentButton";
import ShinyText from "@/components/animations/ShinyText";
import SpotlightCard from "@/components/SpotlightCard";
import AccordionRail from "@/components/animations/AccordionRail";
import ScrollTextReveal from "@/components/animations/ScrollTextReveal";
import ScrollStack from "@/components/animations/ScrollStack";

export default function BuildWithUsPage() {
  const [currency, setCurrency] = useState<"NGN" | "USD" | "EUR" | "GBP" | "GHS">("NGN");

  return (
    <div className="flex flex-col gap-0 pb-0 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[70vh] flex items-center justify-center bg-navy-900 text-white">
        {/* Background Video / Overlay */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40 mix-blend-screen"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-navy-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full text-center flex flex-col items-center relative z-10 pt-16">
          <span className="text-electric-blue font-bold tracking-wider uppercase text-sm mb-6 flex items-center justify-center gap-2 bg-blue-900/50 px-4 py-2 rounded-full border border-blue-800 backdrop-blur-md">
            Succeed & Build With Us
          </span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight max-w-5xl leading-[1.1] mb-6 flex flex-col items-center justify-center gap-2">
            <ShinyText text="Build the future." speed={3} className="text-white" />
            <ShinyText text="Create opportunity." speed={3.5} className="text-white" />
            <ShinyText text="Grow with us." speed={4} className="text-white" />
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl font-medium mb-8">
            Dahel Technologies is building an ecosystem where people, organizations and ideas come together to learn, create, solve problems and unlock new opportunities through technology.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mb-10">
            Whether you give, partner, mentor, sponsor, hire, collaborate or share your expertise, your contribution helps create opportunities for others — while connecting you to a growing community of people building the future of technology in Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/payments" className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white uppercase tracking-widest text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,86,210,0.6)]">
              <span className="absolute inset-0 bg-electric-blue"></span>
              {/* Noise texture overlay */}
              <span className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></span>
              {/* Shimmer effect */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
              <span className="relative z-10 flex items-center gap-2">Succeed & Build With Us <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY BUILD WITH US? */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Why Build With Us?</h2>
            
            <ScrollTextReveal 
              text="Technology is changing how we learn, work, build businesses and solve problems. But access to the right skills, tools, networks and opportunities is still uneven. Dahel exists to help close that gap. We combine technology, education, workforce development and innovation to help people acquire practical capabilities, build solutions and connect with meaningful opportunities. Your involvement helps us take that work further."
              className="text-2xl md:text-4xl font-bold text-navy-900 leading-snug mb-12 tracking-tight"
            />

            <div className="space-y-6 text-lg text-gray-700">
              
              <p className="text-xl font-bold text-electric-blue mt-8">Your success matters to us.</p>
              <ul className="space-y-3 mt-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-electric-blue mt-1 shrink-0" />
                  <span>When more people gain relevant skills, more organizations find capable talent.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-electric-blue mt-1 shrink-0" />
                  <span>When more innovators have access to resources, more solutions can be built.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-electric-blue mt-1 shrink-0" />
                  <span>When more organizations collaborate, more opportunities can be created.</span>
                </li>
              </ul>
              <p className="font-bold text-navy-900 text-xl mt-6">That is the ecosystem we are building.</p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square bg-blue-50 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent"></div>
               {/* Decorative elements to represent ecosystem */}
               <div className="grid grid-cols-2 gap-4 relative z-10 w-full h-full min-h-[350px]">
                 <div className="relative rounded-2xl overflow-hidden shadow-sm flex flex-col justify-end p-5 h-full transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                   <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" alt="Education" fill className="object-cover -z-10 group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent -z-10"></div>
                   <GraduationCap className="w-8 h-8 text-electric-blue mb-2 relative z-10" />
                   <h3 className="font-bold text-white relative z-10">Education</h3>
                 </div>
                 <div className="relative rounded-2xl overflow-hidden shadow-sm flex flex-col justify-end p-5 h-full transform -translate-y-4 group-hover:-translate-y-6 transition-transform duration-500">
                   <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" alt="Innovation" fill className="object-cover -z-10 group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent -z-10"></div>
                   <Lightbulb className="w-8 h-8 text-electric-blue mb-2 relative z-10" />
                   <h3 className="font-bold text-white relative z-10">Innovation</h3>
                 </div>
                 <div className="relative rounded-2xl overflow-hidden shadow-sm flex flex-col justify-end p-5 h-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                   <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop" alt="Workforce" fill className="object-cover -z-10 group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent -z-10"></div>
                   <Briefcase className="w-8 h-8 text-electric-blue mb-2 relative z-10" />
                   <h3 className="font-bold text-white relative z-10">Workforce</h3>
                 </div>
                 <div className="relative rounded-2xl overflow-hidden shadow-sm flex flex-col justify-end p-5 h-full transform -translate-y-6 group-hover:-translate-y-4 transition-transform duration-500">
                   <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" alt="Ecosystem" fill className="object-cover -z-10 group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent -z-10"></div>
                   <Globe className="w-8 h-8 text-electric-blue mb-2 relative z-10" />
                   <h3 className="font-bold text-white relative z-10">Ecosystem</h3>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOUR SUPPORT CREATES POSSIBILITY */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Your Support Creates Possibility</h2>
            <p className="text-xl text-gray-600">Your contribution can help Dahel expand access to:</p>
          </div>
          
          <ScrollStack items={[
            { icon: GraduationCap, title: "Technology Education", desc: "Support practical learning in Data Analytics, Artificial Intelligence, Software Engineering, Digital Skills and other emerging technology fields." },
            { icon: Monitor, title: "Digital Access", desc: "Help learners and communities access devices, software, connectivity, learning resources and technology infrastructure." },
            { icon: Lightbulb, title: "Innovation", desc: "Support the development of technology products, digital platforms, AI solutions and other African-built innovations." },
            { icon: Briefcase, title: "Workforce Opportunities", desc: "Help connect trained people to internships, jobs, projects, mentorship, entrepreneurship and other pathways into the technology ecosystem." },
            { icon: Cpu, title: "Research & Emerging Tech", desc: "Support experimentation and learning around AI, robotics, climate technology, digital trust and other emerging fields." },
            { icon: Globe, title: "Community Impact", desc: "Help us take technology education and opportunities to more people and communities." }
          ]} />
        </div>
      </section>

      {/* THERE ARE MANY WAYS TO BUILD WITH DAHEL TECHNOLOGIES */}
      <section id="contribute" className="py-24 px-6 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-electric-blue font-bold tracking-wider uppercase text-sm mb-4 block">But this isn't just about giving.</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">There are many ways to build with Dahel Technologies.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: HandHeart, title: "GIVE", desc: "Make a financial contribution toward education, innovation, scholarships, technology access or programmes.", cta: "Give Now", href: "#" },
              { icon: Trophy, title: "SPONSOR", desc: "Sponsor a learner, cohort, programme, competition, scholarship or community initiative.", cta: "Sponsor a Programme", href: "#" },
              { icon: Users, title: "PARTNER", desc: "Co-create programmes, initiatives and opportunities with Dahel.", cta: "Become a Partner", href: "#" },
              { icon: Lightbulb, title: "SHARE YOUR EXPERTISE", desc: "Mentor learners, teach a session, advise a programme or contribute specialist knowledge.", cta: "Become a Mentor", href: "#" },
              { icon: Briefcase, title: "CREATE OPPORTUNITIES", desc: "Hire talent, provide internships, offer projects or create pathways for people trained through the Dahel ecosystem.", cta: "Create Opportunities", href: "#" },
              { icon: Monitor, title: "EQUIP", desc: "Support learners and programmes with laptops, software, cloud credits, connectivity, equipment or other technology resources.", cta: "Equip the Ecosystem", href: "#" }
            ].map((item, i) => (
              <SpotlightCard key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm flex flex-col group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-lg group-hover:bg-electric-blue/20 transition-colors duration-500">
                    <item.icon className="text-electric-blue group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700" size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-400 mb-8 flex-1">{item.desc}</p>
                <Link href={item.href} className="inline-flex items-center gap-2 text-white font-medium hover:text-electric-blue transition-colors group/link">
                  {item.cta} <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S IN IT FOR YOU? - With Animated Numbering */}
      <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
        {/* Colorful background blobs for the glass effect to refract — contained in overflow-hidden */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute top-40 -right-20 w-[500px] h-[500px] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] bg-emerald-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">What's in it for you?</h2>
            <p className="text-2xl text-electric-blue font-medium">Build something that benefits you too.</p>
            <p className="mt-6 text-xl text-gray-600">Building with Dahel isn't simply about giving something away. Depending on how you participate, you can:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Grow your network", desc: "Connect with technology professionals, educators, innovators, organizations and emerging talent." },
              { title: "Discover talent", desc: "Access people developing practical skills across technology and emerging fields." },
              { title: "Build visibility", desc: "Position your organization, expertise or brand within a growing technology ecosystem." },
              { title: "Create opportunities", desc: "Turn partnerships and connections into programmes, projects, employment and innovation." },
              { title: "Share knowledge", desc: "Teach, mentor and contribute your experience while developing relationships with the next generation." },
              { title: "Support meaningful work", desc: "Contribute to initiatives that expand access to technology education and opportunity." },
              { title: "Learn and innovate", desc: "Engage with new ideas, technologies, people and approaches to solving real-world problems." },
            ].map((item, i) => (
              <SpotlightCard key={i} className="relative p-8 border border-white/60 rounded-3xl bg-white/40 backdrop-blur-xl group transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:-translate-y-2 h-full flex flex-col justify-end">
                <div className="absolute -top-6 -right-2 text-[120px] font-black text-navy-900/5 group-hover:text-electric-blue/10 group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-700 z-0 pointer-events-none select-none leading-none">
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                <div className="relative z-10 pt-12">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-electric-blue transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="mt-20 bg-blue-50 rounded-3xl p-10 text-center border border-blue-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500">
              <p className="text-xl text-gray-600 mb-2 uppercase tracking-wider font-bold">The goal is simple:</p>
              <h3 className="text-3xl md:text-4xl font-bold text-navy-900">You grow. Others grow. The ecosystem grows.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSE HOW YOU WANT TO BUILD - With Currency Toggle & Paystack integration */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Choose How You Want To Build</h2>
            <p className="text-xl text-gray-600">Every contribution has a place.</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-200 inline-flex flex-wrap justify-center gap-1">
              {[
                { code: "NGN", label: "₦ NGN" },
                { code: "USD", label: "$ USD" },
                { code: "EUR", label: "€ EUR" },
                { code: "GBP", label: "£ GBP" },
                { code: "GHS", label: "GH₵ GHS" },
              ].map((cur) => (
                <button 
                  key={cur.code}
                  onClick={() => setCurrency(cur.code as "NGN" | "USD" | "EUR" | "GBP" | "GHS")} 
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${currency === cur.code ? "bg-navy-900 text-white shadow-sm" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  {cur.label}
                </button>
              ))}
            </div>
          </div>

          {/* Elpis Live Special Sponsorship Card */}
          <div className="mb-12 max-w-5xl mx-auto">
            <div className="bg-white p-1 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-transform duration-500 border border-gray-100">
              <div className="bg-white p-8 md:p-12 rounded-xl text-navy-900 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="relative z-10 flex-1 text-center md:text-left flex flex-col items-center md:items-start">
                  <div className="mb-6 relative w-48 h-20">
                    <Image src="/resources/elpis_logo_detailed.png" alt="Elpis Live" fill className="object-contain object-center md:object-left" priority />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Sponsor the Competition</h3>
                  <p className="text-gray-600 max-w-xl">
                    Sponsor a learner or team for the upcoming Elpis Live Competition and support practical technology skills development directly.
                  </p>
                </div>
                <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto shrink-0">
                  <a href="https://paystack.shop/pay/elpislivesponsorship" target="_blank" rel="noopener noreferrer" className="bg-[#0ba4db] hover:bg-[#0a8cb8] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-[#0ba4db]/30 flex items-center justify-center gap-2 text-center group">
                    Pay with Paystack <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="https://selfany.com/pay/elpislivesponsorship" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-navy-900 border-2 border-gray-200 font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center text-center">
                    Pay via Selfany
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { amount: { NGN: "₦10,000+", USD: "$10+", EUR: "€10+", GBP: "£10+", GHS: "GH₵100+" }, title: "CONTRIBUTE", desc: "Help us extend access to learning and technology resources." },
              { amount: { NGN: "₦25,000+", USD: "$20+", EUR: "€20+", GBP: "£20+", GHS: "GH₵250+" }, title: "SUPPORT A LEARNER", desc: "Help subsidize access to technology education." },
              { amount: { NGN: "₦50,000+", USD: "$40+", EUR: "€40+", GBP: "£40+", GHS: "GH₵500+" }, title: "SPONSOR LEARNING", desc: "Support a learner's journey through a programme or learning experience." },
              { amount: { NGN: "₦100,000+", USD: "$80+", EUR: "€80+", GBP: "£80+", GHS: "GH₵1,000+" }, title: "EQUIP", desc: "Help provide technology, learning resources or digital access." },
              { amount: { NGN: "₦250,000+", USD: "$200+", EUR: "€200+", GBP: "£200+", GHS: "GH₵2,500+" }, title: "SPONSOR A PROGRAMME", desc: "Support a cohort, community initiative, competition or specialised programme." },
              { amount: { NGN: "₦500,000+", USD: "$400+", EUR: "€400+", GBP: "£400+", GHS: "GH₵5,000+" }, title: "BUILD WITH US", desc: "Support larger innovation, workforce-development or technology initiatives." },
              { amount: { NGN: "CUSTOM", USD: "CUSTOM", EUR: "CUSTOM", GBP: "CUSTOM", GHS: "CUSTOM" }, title: "CREATE SOMETHING TOGETHER", desc: "Let's design a partnership around your goals." }
            ].map((tier, i) => (
              <SpotlightCard key={i} className={`p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between group transition-all duration-300 ${i === 6 ? 'md:col-span-3 lg:col-span-1 bg-navy-900 text-white border-navy-800 hover:-translate-y-1 hover:shadow-xl' : 'bg-white hover:border-blue-200 hover:-translate-y-1 hover:shadow-lg'}`}>
                <div>
                  <div className={`text-3xl font-black mb-2 transition-transform duration-300 group-hover:-translate-y-1 ${i === 6 ? 'text-electric-blue' : 'text-navy-900'}`}>
                    {(tier.amount as Record<"NGN" | "USD" | "EUR" | "GBP" | "GHS", string>)[currency]}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{tier.title}</h3>
                  <p className={`${i === 6 ? 'text-gray-300' : 'text-gray-600'}`}>{tier.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="mt-6 text-sm text-gray-500 italic max-w-2xl mx-auto">
              *Suggested amounts are illustrative. Final contribution levels can be adjusted based on the programme or initiative being supported.
            </p>
          </div>
        </div>
      </section>

      {/* BUILD WITH US AS AN ORGANIZATION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Build With Us As An Organization</h2>
            <p className="text-xl text-electric-blue font-medium mb-8">Your organization can do more than donate.</p>
            <p className="text-lg text-gray-700 mb-8">
              Companies, foundations, government institutions, development organizations and other institutions can work with Dahel to create measurable opportunities.
            </p>
            <IridescentButton href="#">Become an Institutional Partner</IridescentButton>
          </div>
          <div className="flex-1 bg-gray-50 p-10 rounded-3xl border border-gray-100 w-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6 relative z-10">Partnership opportunities include:</h3>
            <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 relative z-10">
              {[
                "Programme sponsorship", "Scholarships", "Workforce development", "Employee volunteering",
                "Technology donations", "Internship pathways", "Innovation challenges", "Research partnerships",
                "Digital skills programmes", "AI & emerging tech initiatives", "Community tech programmes", "CSR initiatives"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-center text-gray-700 group">
                  <CheckCircle2 className="text-electric-blue w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-navy-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE'RE BUILDING */}
      <section className="py-24 px-6 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We're Building</h2>
            <p className="text-xl text-gray-300">One ecosystem. Many possibilities.</p>
          </div>
          
          <div className="mb-20">
            <AccordionRail />
          </div>

          <div className="text-center">
            <IridescentButton href="/" theme="dark">Explore Dahel</IridescentButton>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY MATTERS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Transparency Matters</h2>
          <p className="text-xl text-electric-blue font-medium mb-8">We want you to see the impact.</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16">
            We believe people and organizations should understand how their support contributes to the work. As our support ecosystem grows, we will continue to share meaningful indicators.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              "People reached", "Learners trained", "Scholarships supported", "Technology resources provided",
              "Programmes delivered", "Mentorship opportunities", "Employment & placement outcomes",
              "Innovation projects supported", "Communities reached"
            ].map((item, i) => (
              <span key={i} className="px-5 py-2 bg-blue-50 hover:bg-blue-100 text-navy-900 font-medium rounded-full border border-blue-100 transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>

          <IridescentButton href="#">View Our Impact</IridescentButton>
        </div>
      </section>

      {/* YOUR CONTRIBUTION DOESN'T HAVE TO BE MONEY */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">Your Contribution Doesn't Have To Be Money</h2>
            <p className="text-xl text-gray-600">Give what you have.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "TIME", desc: "Mentor. Teach. Volunteer." },
              { title: "EXPERTISE", desc: "Advise. Review. Build. Share knowledge." },
              { title: "NETWORK", desc: "Introduce us to people and organizations that can help create opportunities." },
              { title: "TECHNOLOGY", desc: "Donate devices, software, cloud resources or infrastructure." },
              { title: "OPPORTUNITIES", desc: "Create internships, jobs, projects and collaborations." },
              { title: "FUNDING", desc: "Sponsor programmes, learners and innovation." },
              { title: "ATTENTION", desc: "Tell someone about what we're building." }
            ].map((item, i) => (
              <SpotlightCard key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-electric-blue transition-colors">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </SpotlightCard>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-electric-blue">Every contribution can move something forward.</h3>
          </div>
        </div>
      </section>

      {/* READY TO SUCCEED & BUILD WITH US? */}
      <section className="py-24 px-6 bg-navy-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Succeed & Build With Us?</h2>
          <p className="text-2xl text-blue-300 font-medium mb-12">Your next opportunity could begin with your contribution.</p>
          <p className="text-xl text-gray-300 mb-12">
            Whether you are an individual, professional, company, institution, mentor, investor, educator or technology enthusiast, there is a place for you in the Dahel ecosystem.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-16 text-lg font-bold text-white tracking-widest uppercase">
            <span>Give</span> • <span>Partner</span> • <span>Mentor</span> • <span>Build</span> • <span>Hire</span> • <span>Learn</span> • <span>Create</span>
          </div>

          <div className="mb-24 flex justify-center">
            <Link href="/payments" className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white uppercase tracking-widest text-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,86,210,0.6)]">
              <span className="absolute inset-0 bg-electric-blue"></span>
              {/* Noise texture overlay */}
              <span className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></span>
              {/* Shimmer effect */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
              <span className="relative z-10 flex items-center gap-2">Proceed to Payment <ArrowRight size={16} /></span>
            </Link>
          </div>

          {/* THANK YOU */}
          <div className="pt-16 border-t border-white/20">
            <h3 className="text-3xl font-bold mb-8 text-electric-blue">THANK YOU</h3>
            <div className="space-y-4 text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              <p>Every person who supports Dahel becomes part of a larger story.</p>
              <p>A story about people gaining skills. Ideas becoming products. Talent finding opportunities.</p>
              <p>Organizations finding capable people. Communities gaining access.</p>
              <p>And technology being used to create meaningful possibilities.</p>
            </div>
            <h4 className="text-2xl md:text-4xl font-bold text-white mb-12">Let's build what comes next — together.</h4>
            
            <div className="text-gray-400">
              <p className="font-bold text-white text-xl tracking-wider mb-2">DAHEL TECHNOLOGIES</p>
              <p className="italic">Technology. Education. Innovation. Opportunity.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
