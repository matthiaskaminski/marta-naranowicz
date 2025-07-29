'use client';

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useRef, forwardRef } from 'react';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky font-semibold top-0 h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      <div className='max-w-4xl mx-auto px-8'>
        <h1 className='2xl:text-7xl text-6xl font-semibold text-center tracking-tight leading-[120%] mb-8'>
          O mnie
        </h1>
        <p className='text-xl text-center mb-12 leading-relaxed'>
          Jestem Marta, specjalistka od sztucznej inteligencji z pasją do transformacji biznesu. 
          Pomagam firmom odkryć potencjał AI w automatyzacji procesów, analizie danych i optymalizacji decyzji. 
          Moje doświadczenie obejmuje wdrożenia w różnych branżach, od e-commerce po finanse.
        </p>
        <div className='flex justify-center'>
          <motion.a
            href="#wspolpraca"
            className='inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-colors'
          >
            Współpraca
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.85, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], [20, 10, 0]);
  const width = useTransform(scrollYProgress, [0, 0.5, 1], [70, 85, 100]);
  const height = useTransform(scrollYProgress, [0, 0.5, 1], [60, 80, 100]);

  return (
    <motion.section
      className='relative h-screen bg-black flex items-center justify-center'
    >
      <motion.div
        style={{ 
          scale,
          borderRadius,
          width: `${width.get()}%`,
          height: `${height.get()}vh`,
        }}
        className='relative overflow-hidden'
      >
        {/* Mobile image */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Desktop image */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1511884642898-4c92249e20b6)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </motion.div>
    </motion.section>
  );
};

const Component = forwardRef<HTMLElement>((props, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main ref={container} className='relative h-[200vh]'>
        <Section2 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
});

Component.displayName = 'Component';

export default Component;