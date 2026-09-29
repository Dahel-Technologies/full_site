"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface StackItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ScrollStackProps {
  items: StackItem[];
}

export default function ScrollStack({ items }: ScrollStackProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-24 mb-32 flex flex-col gap-8">
      {items.map((item, index) => {
        // We use sticky positioning. The top offset increases slightly for each subsequent card 
        // to create a "stacked folder" look.
        const topOffset = 120 + index * 20; 
        
        return (
          <div
            key={index}
            className="sticky w-full rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 bg-white p-10 md:p-14 flex flex-col md:flex-row gap-8 items-center md:items-start group transition-all"
            style={{
              top: `${topOffset}px`,
              zIndex: index,
            }}
          >
            <div className="w-20 h-20 shrink-0 bg-navy-50 text-electric-blue rounded-2xl flex items-center justify-center overflow-hidden">
              <item.icon size={40} className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <div className="flex flex-col gap-3 flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900">{item.title}</h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
