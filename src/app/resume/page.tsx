'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-primary hover:text-primary/80 transition-colors mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-foreground">Resume</h1>
        </div>

        <div className="bg-card rounded-lg shadow-lg p-8">
            {/* Download button */}
          <motion.a
            href="/Resume - Nicholas Byrne (1_26_25).pdf"
            download="Nicholas_Byrne_Resume.pdf"
            className="inline-flex mb-3 items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </motion.a>
          {/* Preview iframe */}
          <iframe
            src="/Resume - Nicholas Byrne (1_26_25).pdf"
            className="w-full h-[1100px] mb-8 rounded border border-border"
            title="Resume Preview"
          />
        </div>
      </div>
    </main>
  );
} 