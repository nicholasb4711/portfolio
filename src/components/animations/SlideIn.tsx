'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'left' | 'right';
}

export default function SlideIn({ children, delay = 0, direction = 'left' }: SlideInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-100px",
    amount: 0.3
  });

  const xOffset = direction === 'left' ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset }}
      animate={isInView ? {
        opacity: 1,
        x: 0
      } : {
        opacity: 0,
        x: xOffset
      }}
      transition={{
        duration: 0.8,
        delay: isInView ? delay : 0,
        ease: [0.21, 1.02, 0.73, 0.99]
      }}
    >
      {children}
    </motion.div>
  );
} 