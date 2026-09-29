"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const items = [
  { id: 0, title: "DAHEL TECHNOLOGIES", desc: "Technology, education, consulting and workforce development.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
  { id: 1, title: "QUIZARLY", desc: "Assessment and educational technology for accessible learning.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "CHECKAMO", desc: "Digital trust and verification solutions.", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "AI & EMERGING TECH", desc: "Exploring AI, robotics, and responsible innovation.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "WORKFORCE", desc: "Connecting skills with mentorship and opportunities.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" }
];

export default function AccordionRail() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isTouched, setIsTouched] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isTouched || isMobile) return;
    const interval = setInterval(() => {
      setOpenIndex((prev) => (prev + 1) % items.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [isTouched, isMobile]);

  return (
    <div 
      className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-3 md:gap-4 md:h-[500px] overflow-hidden" 
      style={{ containerType: 'inline-size' }}
      ref={railRef}
      onTouchStart={() => setIsTouched(true)}
      onMouseEnter={() => setIsTouched(false)}
    >
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <button
            key={item.id}
            onClick={() => setOpenIndex(i)}
            onMouseEnter={() => !isMobile && setOpenIndex(i)}
            onFocus={() => setOpenIndex(i)}
            className={`
              relative overflow-hidden rounded-2xl md:rounded-3xl outline-none transition-all
              bg-navy-900 cursor-pointer
              focus:ring-4 focus:ring-white/30 group text-left
              ${isMobile ? 'w-full' : 'h-full flex-none'}
            `}
            style={{
              width: isMobile ? '100%' : (isOpen ? '44%' : '13%'),
              height: isMobile ? (isOpen ? '260px' : '64px') : '100%',
              transitionProperty: 'width, height, filter',
              transitionDuration: '0.62s, 0.5s, 0.4s',
              transitionTimingFunction: 'cubic-bezier(.22,1,.36,1)',
              filter: isOpen ? 'brightness(1.05)' : 'brightness(0.8)'
            }}
          >
            {/* The Image Background */}
            <div 
              className="absolute inset-0 transition-transform duration-[1.5s] ease-out pointer-events-none"
              style={{
                transform: isOpen ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover"
                unoptimized
              />
            </div>
            
            {/* Dark scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none transition-opacity duration-700" style={{ opacity: isOpen ? 0.85 : 0.65 }} />

            {/* Content wrapper for open state */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8 overflow-hidden pointer-events-none">
              <div 
                className="flex flex-col gap-2 w-full"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(6px)',
                  transition: 'opacity 0.4s ease 0.12s, transform 0.4s ease 0.12s'
                }}
              >
                <h3 className="text-xl md:text-3xl font-black text-white m-0 tracking-tight leading-tight whitespace-normal">{item.title}</h3>
                <p className="text-white/90 text-sm md:text-base font-medium whitespace-normal w-full leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Closed state title: horizontal row on mobile, rotated on desktop */}
            <div 
              className="absolute inset-0 flex items-center px-6 md:px-0 md:justify-center pointer-events-none"
              style={{
                opacity: isOpen ? 0 : 1,
                transition: 'opacity 0.2s ease',
              }}
            >
              <h3 className="text-base md:text-lg font-bold text-white tracking-wider md:tracking-widest whitespace-nowrap md:-rotate-90 shadow-black drop-shadow-md">
                {item.title}
              </h3>
            </div>
          </button>
        );
      })}
    </div>
  );
}
