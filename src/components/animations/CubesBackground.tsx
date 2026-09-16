"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CubesBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [cubes, setCubes] = useState<any[]>([]);

  useEffect(() => {
    setIsMounted(true);
    
    // Generate cubes only on client to prevent hydration mismatch
    const newCubes = [...Array(30)].map((_, i) => ({
      left: `${(i % 6) * 16.6 + Math.random() * 8}%`,
      top: `${Math.floor(i / 6) * 22 + Math.random() * 10}%`,
      width: `${Math.random() * 50 + 20}px`,
      height: `${Math.random() * 50 + 20}px`,
      bgOpacity: Math.random() * 0.15,
      animX: Math.random() * 60 - 30,
      animY: Math.random() * 60 - 30,
    }));
    setCubes(newCubes);

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
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20" style={{ backgroundColor: "#0a1628" }}>
      {/* Subtle animated cubes */}
      {isMounted && (
        <div className="absolute inset-0 opacity-20">
          {cubes.map((cube, i) => (
            <motion.div
              key={i}
              className="absolute border border-blue-500/30 rounded-md"
              style={{
                left: cube.left,
                top: cube.top,
                width: cube.width,
                height: cube.height,
                backgroundColor: `rgba(59,130,246,${cube.bgOpacity})`,
              }}
              animate={{
                x: mousePosition.x * cube.animX,
                y: mousePosition.y * cube.animY,
                rotateZ: mousePosition.x * 30,
              }}
              transition={{ type: "spring", stiffness: 40, damping: 25 }}
            />
          ))}
        </div>
      )}
      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.7) 100%)" }} />
    </div>
  );
}

