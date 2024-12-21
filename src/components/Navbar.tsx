'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl gradient-text transition-colors">
            Nicholas Byrne
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground/80 hover:text-primary transition-colors p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-2 space-y-1">
              {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 