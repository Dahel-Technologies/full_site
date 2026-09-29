"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface IridescentButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  theme?: 'light' | 'dark';
}

export default function IridescentButton({ href, children, className = "", theme = "light" }: IridescentButtonProps) {
  const isDark = theme === 'dark';
  
  return (
    <Link href={href} className={`ir-pill ${isDark ? 'ir-pill-dark' : ''} ${className}`}>
      <style>{`
        .ir-pill {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 8px 24px 8px 8px;
          border-radius: 9999px;
          background: rgba(10, 22, 40, 0.06);
          border: 1px solid rgba(10, 22, 40, 0.15);
          color: #030712;
          text-decoration: none;
          font-family: system-ui, -apple-system, sans-serif;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: 0.1em;
          font-weight: 800;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .ir-pill:hover {
          background: rgba(10, 22, 40, 0.08);
        }

        .ir-pill-dark {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .ir-pill-dark:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        .ir-disc {
          position: relative;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #0a1628;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        
        .ir-pill-dark .ir-disc {
          background: #ffffff;
          color: #0a1628;
        }

        .ir-icon {
          position: relative;
          z-index: 2;
        }

        .ir-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: conic-gradient(from 0turn, transparent 0 58%, #ff6ea9 68%, #ffd36e 76%, #6ef0ff 84%, transparent 92%);
          mask: radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2.5px));
          -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2.5px), #000 calc(100% - 2.5px));
          animation: ir-orbit 2.6s linear infinite, ir-hue 7s linear infinite;
          z-index: 1;
        }

        .ir-pill:hover .ir-ring {
          animation-play-state: paused, running;
        }

        @keyframes ir-orbit {
          to { transform: rotate(1turn); }
        }

        @keyframes ir-hue {
          to { filter: hue-rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ir-ring {
            animation: none;
            transform: rotate(45deg);
          }
        }
      `}</style>
      
      <div className="ir-disc">
        <ArrowRight size={16} className="ir-icon" />
        <div className="ir-ring" />
      </div>
      
      {children}
    </Link>
  );
}
