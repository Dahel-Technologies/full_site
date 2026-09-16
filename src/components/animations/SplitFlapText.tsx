"use client";
import React, { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

export default function SplitFlapText({ text, className = "" }: { text: string, className?: string }) {
  const [displayText, setDisplayText] = useState<string[]>(Array(text.length).fill(" "));

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((currentText) =>
        currentText.map((char, index) => {
          if (index < iteration) {
            return text[index];
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`inline-flex gap-1 ${className}`}>
      {displayText.map((char, i) => (
        <span 
          key={i} 
          className="inline-block bg-navy-900 text-white rounded md:rounded-lg px-2 min-w-[0.8em] text-center shadow-inner relative overflow-hidden"
          style={{ fontFamily: "monospace" }}
        >
          {char === " " ? "\u00A0" : char}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black/40" />
        </span>
      ))}
    </span>
  );
}
