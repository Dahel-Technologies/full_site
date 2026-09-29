"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, User, Play, Building2 } from 'lucide-react';

export default function BookmarkCards() {
  const cards = [
    {
      title: "I want to learn",
      desc: "Courses, programs and resources designed to help you develop practical technology skills.",
      link: "/learn",
      cta: "Explore Courses",
      icon: <BookOpen size={20} />,
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      color: "from-blue-600 to-blue-400",
      flagColor: "bg-blue-600"
    },
    {
      title: "I need training",
      desc: "One-on-one or small-group sessions designed around your schedule, goals and current level.",
      link: "/training",
      cta: "Book a Session",
      icon: <User size={20} />,
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      color: "from-magenta-600 to-pink-500",
      flagColor: "bg-pink-500"
    },
    {
      title: "Assess knowledge",
      desc: "Test yourself, create assessments and compete through Quizarly.",
      link: "/quizarly",
      cta: "Explore Quizarly",
      icon: <Play size={20} />,
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      color: "from-purple-600 to-purple-400",
      flagColor: "bg-purple-500"
    },
    {
      title: "For organization",
      desc: "Training, digital solutions and technology support for organizations and institutions.",
      link: "/about",
      cta: "Talk to Dahel",
      icon: <Building2 size={20} />,
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      color: "from-emerald-600 to-teal-400",
      flagColor: "bg-emerald-500"
    }
  ];

  return (
    <div className="card-rail grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
      <style>{`
        .card-rail:has(.bm-card:hover) .bm-card:not(:hover),
        .card-rail:has(.bm-card:focus-visible) .bm-card:not(:focus-visible) {
          opacity: 0.58;
          transform: scale(0.96);
        }
        
        .bm-card {
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), 
                      opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
          mask-image: radial-gradient(16px at 50% 100%, transparent 15px, #000 16px);
          -webkit-mask-image: radial-gradient(16px at 50% 100%, transparent 15px, #000 16px);
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          min-height: 380px;
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }

        .bm-card:hover, .bm-card:focus-visible {
          transform: translateY(-6%) scale(1.04);
          z-index: 10;
          outline: none;
        }

        .bm-art {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: grayscale(1) contrast(1.05);
          transition: filter 0.6s ease-out;
          z-index: 1;
        }

        .bm-card:hover .bm-art, .bm-card:focus-visible .bm-art {
          filter: grayscale(0) saturate(1.25);
        }

        .bm-bloom {
          position: absolute;
          inset: 0;
          opacity: 0;
          mix-blend-mode: screen;
          filter: blur(7px) saturate(1.3);
          transition: opacity 0.6s ease-out;
          z-index: 2;
        }

        .bm-card:hover .bm-bloom, .bm-card:focus-visible .bm-bloom {
          opacity: 0.8;
        }

        .bm-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%);
          z-index: 3;
        }

        .bm-flag {
          position: absolute;
          top: 0;
          right: 24px;
          width: 36px;
          height: 48px;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 76%, 0 100%);
          transform: translateY(-8%);
          transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          z-index: 5;
          display: flex;
          justify-content: center;
          padding-top: 8px;
          color: white;
        }

        .bm-card:hover .bm-flag, .bm-card:focus-visible .bm-flag {
          transform: translateY(0);
        }

        .bm-content {
          position: relative;
          z-index: 4;
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 32px 24px 40px;
          color: white;
        }
      `}</style>

      {cards.map((card, i) => (
        <Link href={card.link} key={i} className="bm-card shadow-xl group">
          <div className="bm-art" style={{ backgroundImage: `url(${card.img})` }} />
          <div className={`bm-bloom bg-gradient-to-t ${card.color}`} />
          <div className="bm-overlay" />
          
          <div className={`bm-flag ${card.flagColor}`}>
            {card.icon}
          </div>

          <div className="bm-content">
            <h3 className="text-2xl sm:text-3xl font-black mb-4 drop-shadow-xl tracking-tight leading-tight pt-8 sm:pt-12 text-white">{card.title}</h3>
            <p className="text-sm sm:text-base text-gray-100 mb-8 flex-1 leading-relaxed drop-shadow-md font-medium">{card.desc}</p>
            <div className="inline-flex items-center justify-center sm:justify-start gap-2 group-hover:gap-4 transition-all mt-auto bg-white/25 backdrop-blur-md px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-white font-bold tracking-wide border border-white/40 shadow-xl w-full sm:w-max max-w-full text-sm sm:text-base">
              {card.cta} <ArrowRight size={18} className="drop-shadow-sm shrink-0" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
