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
    once: true, 
    margin: "-50px",
    amount: 0.1
  });

  const xOffset = direction === 'left' ? -50 : 50;

  return (
    <motion.div
      ref={ref}
      className="will-change-[transform,opacity] gpu-accelerated"
      initial={{ opacity: 0, x: xOffset }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : xOffset
      }}
      transition={{
        duration: 0.4,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
} 