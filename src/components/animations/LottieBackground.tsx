"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LottieBackground({ src, className = "" }: { src: string, className?: string }) {
  return (
    <div className={`absolute inset-0 -z-20 overflow-hidden pointer-events-none opacity-40 ${className}`}>
      <DotLottieReact
        src={src}
        loop
        autoplay
        className="w-full h-full object-cover scale-150"
      />
    </div>
  );
}
