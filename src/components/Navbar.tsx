'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Nicholas Byrne
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-blue-500">About</Link>
            <Link href="#projects" className="hover:text-blue-500">Projects</Link>
            <Link href="#experience" className="hover:text-blue-500">Experience</Link>
            <Link href="#contact" className="hover:text-blue-500">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="#about" className="block hover:text-blue-500 py-2">About</Link>
              <Link href="#projects" className="block hover:text-blue-500 py-2">Projects</Link>
              <Link href="#experience" className="block hover:text-blue-500 py-2">Experience</Link>
              <Link href="#contact" className="block hover:text-blue-500 py-2">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 