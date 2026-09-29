"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// Ensure ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollTextRevealProps {
  text: string;
  className?: string;
}

export default function ScrollTextReveal({ text, className = "" }: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const words = containerRef.current?.querySelectorAll(".word");
      if (words && words.length > 0) {
        gsap.to(words, {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: true,
          },
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const words = text.split(" ").map((word, i) => (
    <span key={i} className="word inline-block mr-[0.25em] opacity-20">
      {word}
    </span>
  ));

  return (
    <div ref={containerRef} className={className}>
      {words}
    </div>
  );
}
