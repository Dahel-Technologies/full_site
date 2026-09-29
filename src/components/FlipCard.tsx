import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FlipCardProps {
  title: string;
  desc: string;
  price: string;
  link: string;
  img: string;
}

export default function FlipCard({ title, desc, price, link, img }: FlipCardProps) {
  return (
    <Link href={link} target="_blank" className="flip-card-container block aspect-[3/4] w-full">
      <style>{`
        .flip-card-container {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card-container:hover .flip-card-inner,
        .flip-card-container:focus-visible .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid #e5e7eb;
        }
        .flip-card-front {
          background-color: #f3f4f6;
        }
        .flip-card-back {
          background-color: #0a1628; /* navy-900 */
          color: white;
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      `}</style>
      
      <div className="flip-card-inner shadow-md hover:shadow-xl transition-shadow">
        
        {/* FRONT */}
        <div className="flip-card-front">
          <Image src={img} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
            <h3 className="font-bold text-white text-xl mb-1 drop-shadow-md leading-tight">{title}</h3>
            <div className="text-white/90 font-medium text-sm drop-shadow">{price}</div>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card-back">
          <h3 className="font-bold text-xl mb-4 leading-tight">{title}</h3>
          <p className="text-gray-300 text-sm mb-8 leading-relaxed">{desc}</p>
          <div className="bg-electric-blue text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide w-full max-w-[200px] border border-blue-500 shadow-lg hover:bg-blue-600 transition-colors">
            Get it now
          </div>
        </div>
        
      </div>
    </Link>
  );
}
