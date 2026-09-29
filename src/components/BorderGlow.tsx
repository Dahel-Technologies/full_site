import React from 'react';

interface BorderGlowProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  glowColor?: string;
  bgColor?: string;
}

export default function BorderGlow({ 
  children, 
  className = "", 
  containerClassName = "",
  glowColor = "#9810fa",
  bgColor = "#0f172a" 
}: BorderGlowProps) {
  return (
    <div className={`relative p-[1.5px] rounded-[2.5rem] overflow-hidden ${containerClassName}`}>
      <style>{`
        @keyframes border-glow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .border-glow-bg {
          position: absolute;
          inset: -100%;
          background: conic-gradient(from 0deg, transparent 70%, var(--glow) 100%);
          animation: border-glow-spin 4s linear infinite;
        }
      `}</style>
      
      {/* Rotating gradient background */}
      <div 
        className="border-glow-bg z-0" 
        style={{ '--glow': glowColor } as React.CSSProperties}
      />
      
      {/* Inner Content Area */}
      <div 
        className={`relative z-10 h-full w-full rounded-[calc(2.5rem-1.5px)] ${className}`}
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </div>
    </div>
  );
}
