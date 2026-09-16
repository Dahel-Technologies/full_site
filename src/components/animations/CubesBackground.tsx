"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CubesBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20 bg-navy-900">
      <div className="absolute inset-0 opacity-10">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white border border-white/20 rounded-md"
            style={{
              left: `${(i % 8) * 12.5 + Math.random() * 5}%`,
              top: `${Math.floor(i / 8) * 20 + Math.random() * 10}%`,
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
            }}
            animate={{
              x: mousePosition.x * (Math.random() * 100 - 50),
              y: mousePosition.y * (Math.random() * 100 - 50),
              rotateX: mousePosition.y * 180 + Math.random() * 360,
              rotateY: mousePosition.x * 180 + Math.random() * 360,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-900/90" />
    </div>
  );
}
