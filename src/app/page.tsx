import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, BookOpen, User, Book, Star, Sparkles, Building2, Globe2, Briefcase, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 pt-20 md:pt-32 max-w-7xl mx-auto w-full text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-navy-900 max-w-4xl leading-[1.1] mb-6">
          Learn skills. Build confidence. <span className="text-electric-blue">Create what matters.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10 leading-relaxed">
          Practical technology education for people, organizations and the future of work. Learn data analytics, AI, software engineering and other practical digital skills through structured courses, private training, assessments and technology-powered learning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full justify-center">
          <Link href="#learn" className="bg-navy-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-navy-800 transition-colors flex items-center justify-center gap-2">
            Explore Learning <ArrowRight size={20} />
          </Link>
          <Link href="#training" className="bg-electric-light text-electric-blue px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-2">
            Book a Private Session
          </Link>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-500 bg-gray-50 px-6 py-3 rounded-full border border-gray-100">
          <Globe2 size={16} className="text-electric-blue" />
          <span>5,000+ learners</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Nigeria & beyond</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">Practical, career-focused learning</span>
        </div>
      </section>

      {/* 2. "WHAT ARE YOU HERE TO DO?" */}
      <section className="bg-gray-50/50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-900 mb-12">What brings you here?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-electric-blue mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">I want to learn</h3>
              <p className="text-gray-600 mb-8 flex-1">Courses, programs and resources designed to help you develop practical technology skills.</p>
              <Link href="#learn" className="text-electric-blue font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Explore Courses <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="w-12 h-12 bg-magenta-50 rounded-xl flex items-center justify-center text-magenta-600 mb-6">
                <User size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">I need personal training</h3>
              <p className="text-gray-600 mb-8 flex-1">One-on-one or small-group sessions designed around your schedule, goals and current level.</p>
              <Link href="#training" className="text-magenta-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Book a Session <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Play size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">I want to assess my knowledge</h3>
              <p className="text-gray-600 mb-8 flex-1">Test yourself, create assessments and compete through Quizarly.</p>
              <Link href="#quizarly" className="text-purple-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Explore Quizarly <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">I need technology for my organization</h3>
              <p className="text-gray-600 mb-8 flex-1">Training, digital solutions and technology support for organizations and institutions.</p>
              <Link href="#organizations" className="text-emerald-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Talk to Dahel <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED LEARNING */}
      <section id="learn" className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Learn something useful today.</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Structured, practical courses to build skills you can actually use.</p>
          </div>
          <Link href="/courses" className="text-electric-blue font-medium flex items-center gap-2 hover:gap-3 transition-all">
            View all courses <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Microsoft Excel", category: "Data Analytics", level: "Beginner → Advanced" },
            { title: "SQL", category: "Data & Databases", level: "Beginner → Intermediate" },
            { title: "Power BI", category: "Business Intelligence", level: "Beginner → Advanced" },
            { title: "Python", category: "Programming • Data • AI", level: "Beginner → Advanced" },
          ].map((course, i) => (
            <div key={i} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all cursor-pointer bg-white flex flex-col h-full">
              <div className="h-48 bg-gray-50 flex items-center justify-center border-b border-gray-100 group-hover:bg-blue-50/50 transition-colors">
                {/* Placeholder for course illustration */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-electric-blue">
                  <BookOpen size={28} />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-electric-blue uppercase tracking-wider mb-2">{course.category}</span>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{course.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                  <span>{course.level}</span>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <span className="text-sm font-medium text-navy-900 flex items-center gap-1 group-hover:text-electric-blue transition-colors">
                    View <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PRIVATE & GROUP TRAINING */}
      <section id="training" className="bg-navy-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Your schedule. <br/><span className="text-electric-blue">Your goals.</span> <br/>Your learning.</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Private training built around you. Whether you're a busy professional, student, entrepreneur or someone changing careers, work directly with a Dahel instructor on the skills you need.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {["Microsoft Excel", "SQL", "Power BI", "Tableau", "Python", "Data Analytics & AI"].map(skill => (
                  <span key={skill} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <Link href="#book" className="inline-flex items-center gap-2 bg-electric-blue text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-600 transition-colors">
                Book a Private Session <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Need training for your team?</h3>
              <p className="text-gray-300 mb-8">We also provide customized group and organizational training to upskill your workforce with practical technology.</p>
              
              <ul className="space-y-4 mb-10 text-gray-300">
                <li className="flex items-center gap-3"><CheckCircle2 className="text-electric-blue" size={20} /> Tailored curriculum</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-electric-blue" size={20} /> Flexible delivery (In-person or remote)</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-electric-blue" size={20} /> Progress tracking and assessments</li>
              </ul>
              
              <Link href="#group" className="inline-flex items-center gap-2 bg-white text-navy-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors w-full justify-center">
                Book Group Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUIZARLY SECTION */}
      <section id="quizarly" className="py-24 overflow-hidden relative">
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
              
              <Link href="#quizarly-app" className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-navy-800 transition-colors">
                Explore Quizarly <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEARNING + AI */}
      <section id="ai" className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm text-magenta-600 mb-6">
              <Sparkles size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">Learning is changing. <span className="text-magenta-600">So are we.</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Use AI to learn faster, practice better and turn ideas into practical outcomes.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "AI Learning Tools", desc: "Learn and practise with AI.", color: "text-blue-600", bg: "bg-blue-50" },
              { title: "AI Studio", desc: "Create assessments and learning materials.", color: "text-purple-600", bg: "bg-purple-50" },
              { title: "AI for Work", desc: "Use AI to improve everyday professional workflows.", color: "text-emerald-600", bg: "bg-emerald-50" },
              { title: "AI Engineering", desc: "Build with AI rather than simply talking about it.", color: "text-magenta-600", bg: "bg-magenta-50" },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="#explore-ai" className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-navy-800 transition-colors">
              Explore AI <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. BOOKS & RESOURCES */}
      <section id="resources" className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Don't just watch. Read. Practice. Build.</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Books, guides, templates and practical resources from Dahel.</p>
          </div>
          <Link href="/resources" className="text-electric-blue font-medium flex items-center gap-2 hover:gap-3 transition-all">
            Browse Resources <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] bg-gray-100 rounded-2xl mb-4 relative overflow-hidden group-hover:shadow-lg transition-all border border-gray-200 flex items-center justify-center">
                <Book className="text-gray-300" size={64} />
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-1">Practical Guide {i}</h3>
              <p className="text-gray-500 text-sm mb-3">Short description of the resource goes here.</p>
              <div className="font-bold text-navy-900">₦X / $X</div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. THE DAHEL DIFFERENCE */}
      <section className="bg-navy-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Why Dahel?</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Practical", desc: "We focus on skills people can actually use." },
              { title: "Human", desc: "Technology doesn't replace good teaching. It supports it." },
              { title: "Accessible", desc: "Learning should not be limited by geography or background." },
              { title: "Outcome-focused", desc: "We care about what learners can do after learning." },
              { title: "Built for what's next", desc: "AI and technology are changing quickly. Our learning evolves with them." },
            ].map((item, i) => (
              <div key={i} className={`${i === 3 ? "md:col-start-1" : ""} ${i === 4 ? "md:col-start-2" : ""}`}>
                <h3 className="text-xl font-bold mb-3 text-electric-blue">{item.title}</h3>
                <p className="text-gray-300 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PROOF / IMPACT */}
      <section className="py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
            <div>
              <div className="text-4xl md:text-6xl font-bold text-navy-900 mb-2">5,000+</div>
              <div className="text-gray-500 font-medium">students taught</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-navy-900 mb-2">700+</div>
              <div className="text-gray-500 font-medium">young people supported through digital-skills initiatives</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-navy-900 mb-2">5+</div>
              <div className="text-gray-500 font-medium">countries reached</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-navy-900 mb-2">40%</div>
              <div className="text-gray-500 font-medium">increase in impact following our EdTech rebrand</div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8 leading-snug">
              "We're building technology that helps more people learn, work and participate in the digital economy."
            </h3>
            <Link href="#story" className="text-electric-blue font-medium flex items-center justify-center gap-2 hover:gap-3 transition-all text-lg">
              Our Story <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. SUCCESS STORIES */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Real people. Real progress.</h2>
            </div>
            <Link href="/stories" className="text-electric-blue font-medium flex items-center gap-2 hover:gap-3 transition-all">
              Read More Stories <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex text-amber-400 mb-6">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-xl md:text-2xl font-medium text-navy-900 mb-8 leading-snug">
                "I secured a mid-senior supervisory role as an analyst in the UK."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-electric-blue font-bold">C</div>
                <div>
                  <div className="font-bold text-navy-900">Chidi</div>
                  <div className="text-gray-500 text-sm">Private Training Student</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex text-amber-400 mb-6">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
              </div>
              <p className="text-xl md:text-2xl font-medium text-navy-900 mb-8 leading-snug">
                "The curriculum was practical and immediately applicable to my daily work."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-magenta-100 rounded-full flex items-center justify-center text-magenta-600 font-bold">A</div>
                <div>
                  <div className="font-bold text-navy-900">Amina</div>
                  <div className="text-gray-500 text-sm">Data Analytics Course</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOR ORGANIZATIONS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="bg-navy-900 rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl rounded-full" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Building skills at scale?</h2>
                <p className="text-xl text-gray-300 mb-10">
                  Dahel works with organizations, schools, institutions and programs to deliver high-quality technology education and solutions.
                </p>
                <Link href="#work-with-us" className="inline-flex items-center gap-2 bg-white text-navy-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
                  Work With Dahel <ArrowRight size={20} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Digital Skills Training",
                  "AI & Technology Training",
                  "Workforce Development",
                  "Assessment & Testing",
                  "Customized Programs"
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                    <CheckCircle2 className="text-electric-blue mb-4" size={24} />
                    <h4 className="font-bold">{item}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. PRODUCTS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-4">More than learning.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We build technology too.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start group">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">Quizarly</h3>
              <p className="text-gray-600 mb-8 flex-1">Assessment & learning technology.</p>
              <Link href="#quizarly" className="text-purple-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Explore <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">Checkamo</h3>
              <p className="text-gray-600 mb-8 flex-1">Verification technology designed to help people make more informed decisions.</p>
              <Link href="#checkamo" className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Explore <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start group">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Globe2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3">Ekko Now</h3>
              <p className="text-gray-600 mb-8 flex-1">Technology, climate innovation and impact.</p>
              <Link href="#ekko" className="text-emerald-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                Explore <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="py-24 text-center px-6 max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">Ready to start?</h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-10">Learn a skill. Build something. Take the next step.</p>
        <Link href="#explore" className="inline-flex items-center gap-2 bg-navy-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-navy-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-navy-900/20">
          Explore Dahel <ArrowRight size={20} />
        </Link>
      </section>

    </div>
  );
}
