"use client";

import React, { useEffect, useRef } from "react";

export default function LetterGlitch() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use clientWidth (excludes scrollbar) to avoid causing overflow
    let width = canvas.width = document.documentElement.clientWidth;
    let height = canvas.height = window.innerHeight;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&?!";
    const fontSize = 18;
    const cols = Math.ceil(width / fontSize);
    const rows = Math.ceil(height / fontSize);
    
    // Create a grid of random characters
    const grid: string[] = [];
    for (let i = 0; i < cols * rows; i++) {
      grid.push(chars[Math.floor(Math.random() * chars.length)]);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `bold ${fontSize}px monospace`;
      
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const index = r * cols + c;
          
          // Randomly mutate some characters
          if (Math.random() < 0.05) {
            grid[index] = chars[Math.floor(Math.random() * chars.length)];
          }

          const char = grid[index];
          
          // Determine color based on random probability to give glitchy highlights
          const rand = Math.random();
          if (rand > 0.98) {
            ctx.fillStyle = "#fcbb00"; // Quizarly Gold
          } else if (rand > 0.95) {
            ctx.fillStyle = "#235DD8"; // Quizarly Blue
          } else if (rand > 0.92) {
            ctx.fillStyle = "#4DE26B"; // Quizarly Green
          } else {
            ctx.fillStyle = "rgba(152, 16, 250, 0.4)"; // Faint Quizarly Purple
          }

          ctx.fillText(char, c * fontSize, r * fontSize + fontSize);
        }
      }
    };

    let animationFrame: number;
    // Draw slower than requestAnimationFrame for a "glitch" stutter effect
    let lastTime = 0;
    const fps = 15;
    const interval = 1000 / fps;

    const loop = (time: number) => {
      if (time - lastTime > interval) {
        draw();
        lastTime = time;
      }
      animationFrame = requestAnimationFrame(loop);
    };
    
    animationFrame = requestAnimationFrame(loop);

    const handleResize = () => {
      width = canvas.width = document.documentElement.clientWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-80"
    />
  );
}
