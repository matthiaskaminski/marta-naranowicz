"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StickyImageHeroProps {
  imageSrc: string;
  imageAlt: string;
  scrollDistance?: number; // Distance to scroll while image scales
}

export default function StickyImageHero({ 
  imageSrc, 
  imageAlt,
  scrollDistance = 1000 
}: StickyImageHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scale image from small size to full screen size
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.5]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [16, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${scrollDistance}px` }}
    >
      {/* Sticky container that stays in place while image scales */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            scale: imageScale,
          }}
        >
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{
              borderRadius,
            }}
            onError={(e) => {
              console.error('Image failed to load:', imageSrc);
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', imageSrc);
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}