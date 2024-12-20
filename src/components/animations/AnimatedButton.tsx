'use client';

import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedButton({ href, children, className }: AnimatedButtonProps) {
  return (
    <motion.a
      href={href}
      className={`${className} inline-block`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        duration: 0.2,
        initial: { delay: 0.6, duration: 0.5 }
      }}
    >
      {children}
    </motion.a>
  );
} 