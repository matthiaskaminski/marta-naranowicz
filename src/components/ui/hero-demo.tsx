'use client';

import React from 'react';
import { SmoothScrollHero, MultiImageSmoothScrollHero } from '@/components/ui/smooth-scroll-hero';

export function HeroDemo() {
  const multiImages = [
    {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=600&fit=crop&auto=format",
      alt: "AI Generated Artwork 1",
      scale: [1, 1.5, 2.5] as [number, number, number]
    },
    {
      src: "https://images.unsplash.com/photo-1619028494135-a57c57b7e6d2?w=600&h=600&fit=crop&auto=format",
      alt: "AI Generated Artwork 2",
      scale: [1, 1.3, 3] as [number, number, number]
    },
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop&auto=format",
      alt: "AI Generated Artwork 3",
      scale: [1, 1.8, 2.8] as [number, number, number]
    },
    {
      src: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=600&h=600&fit=crop&auto=format",
      alt: "AI Generated Artwork 4",
      scale: [1, 1.4, 3.2] as [number, number, number]
    }
  ];

  return (
    <div className="space-y-16">
      {/* Single Image Hero */}
      <section>
        <div className="text-center py-16">
          <h2 className="text-4xl font-bold mb-4">Single Image Smooth Scroll Hero</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enhanced scroll-triggered image scaling with smooth animations and improved performance.
          </p>
        </div>
        
        <SmoothScrollHero
          imageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop&auto=format"
          imageAlt="AI Generated Artwork - Single Hero"
          containerHeight="400vh"
          className="bg-gradient-to-b from-background via-background/50 to-background"
        />
      </section>

      {/* Multi Image Hero */}
      <section>
        <div className="text-center py-16">
          <h2 className="text-4xl font-bold mb-4">Multi Image Smooth Scroll Hero</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple images with individual scaling effects and staggered animations.
          </p>
        </div>
        
        <MultiImageSmoothScrollHero
          images={multiImages}
          containerHeight="450vh"
          className="bg-gradient-to-b from-background via-background/30 to-background/80"
        />
      </section>

      {/* Additional content to show scroll effects */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Features of the Enhanced Component</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Smooth Animations</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Spring-based scroll animations using useSpring</li>
                <li>• Enhanced performance with will-change-transform</li>
                <li>• Smooth border radius transitions</li>
                <li>• Multiple transform properties (scale, rotation, opacity)</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Advanced Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Configurable container heights</li>
                <li>• Multi-image support with individual scaling</li>
                <li>• Lenis integration for ultra-smooth scrolling</li>
                <li>• TypeScript support with proper type definitions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}