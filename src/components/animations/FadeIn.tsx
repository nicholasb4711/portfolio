'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function FadeIn({ children, delay = 0, direction = 'up' }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const directionOffset = {
    up: 50,
    down: -50,
    left: 50,
    right: -50
  }[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: directionOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.21, 1.02, 0.73, 0.96]
      }}
    >
      {children}
    </motion.div>
  );
} 