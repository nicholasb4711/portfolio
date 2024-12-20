'use client';

import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedButton({ href, children, className }: AnimatedButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="mt-8"
    >
      <a
        href={href}
        className={`${className} transform hover:scale-105 active:scale-95`}
      >
        {children}
      </a>
    </motion.div>
  );
} 