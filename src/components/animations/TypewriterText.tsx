"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypewriterText({ text, delay = 0.05, className = "" }: { text: string, delay?: number, className?: string }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        currentText += text[currentIndex];
        setDisplayText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay * 1000);

    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block w-[0.2em] h-[0.9em] bg-current ml-[2px] align-middle"
      />
    </span>
  );
}
