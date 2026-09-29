"use client";

import React, { useRef, useState, useEffect } from "react";

interface SpecularButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  autoAnimate?: boolean;
}

export default function SpecularButton({
  children,
  className = "",
  autoAnimate = true,
  ...props
}: SpecularButtonProps) {
  const btnRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (autoAnimate && !isHovered) {
      let angle = 0;
      const interval = setInterval(() => {
        angle += 0.03;
        if (btnRef.current) {
          const rect = btnRef.current.getBoundingClientRect();
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const radius = Math.max(rect.width, rect.height) * 0.8;
          setPosition({
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
          });
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [autoAnimate, isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden inline-flex
        rounded-full
        bg-navy-900 text-white
        font-bold text-lg
        transition-all duration-300
        hover:scale-105 active:scale-95
        shadow-lg shadow-navy-900/20
        p-[1px] cursor-pointer
        ${className}
      `}
    >
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none rounded-full"
        style={{
          opacity: 1,
          background: `radial-gradient(80px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.6), transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex items-center justify-center bg-navy-900 rounded-full h-full w-full pointer-events-none">
        <div
          className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none rounded-full"
          style={{
            opacity: isHovered || autoAnimate ? 0.8 : 0,
            background: `radial-gradient(120px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
          }}
        />
        <span className="relative z-10 flex items-center gap-2 px-10 py-5 pointer-events-auto">{children}</span>
      </div>
    </div>
  );
}
