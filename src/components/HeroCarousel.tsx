"use client";
import React from 'react';
import Image from 'next/image';

interface HeroCarouselProps {
  images: string[];
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  // Repeat the images list 4 times to ensure a seamless infinite marquee on all screen resolutions
  const marqueeImages = [...images, ...images, ...images, ...images];

  return (
    <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden my-4 py-2 select-none">
      {/* Self-contained CSS for seamless infinite loop animation without hover pause */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          gap: 16px;
          animation: marquee-scroll 45s linear infinite;
        }
        @media (min-width: 768px) {
          .marquee-track {
            gap: 24px;
            animation-duration: 65s;
          }
        }
      `}} />

      {/* Marquee viewport */}
      <div className="w-full flex overflow-hidden">
        <div className="marquee-track">
          {marqueeImages.map((imagePath, idx) => (
            <div 
              key={idx} 
              className="relative shrink-0 overflow-hidden"
              draggable={false}
            >
              {/* Sleek, minimal portrait cards showing purely the image without links or texts */}
              <div 
                className="relative aspect-[3/4] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-gray-50 dark:bg-black border border-gray-100 dark:border-gray-800 shadow-sm"
                draggable={false}
              >
                <Image
                  src={imagePath}
                  alt="Portfolio showcase"
                  fill
                  priority={idx < 8}
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 260px, (max-width: 1024px) 300px, 335px"
                  className="object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
