'use client';

import React, { useState, useEffect } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('portfolio_theme');
    if (saved === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [setTheme]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-canvas/85 border-b border-cyber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#about" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-canvas-card border border-neon-cyan/40 flex items-center justify-center font-mono text-xs font-bold text-neon-cyan group-hover:border-neon-pink group-hover:text-neon-pink transition-colors">
            NG
          </div>
          <span className="font-semibold text-sm tracking-wide text-white group-hover:text-neon-cyan transition-colors">
            Natnael<span className="text-neon-cyan">.dev</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-7 text-xs font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-neon-cyan transition-colors tracking-wide py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Status Pill: OPEN TO INTERNSHIPS */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neon-emerald/10 border border-neon-emerald/30 text-[11px] font-mono text-neon-emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-emerald pulsing-dot"></span>
            <span className="tracking-wider">OPEN TO INTERNSHIPS</span>
          </div>

          {/* Download CV Button */}
          <a
            href="/Natnael_Getachew_Software_CV.pdf"
            download="Natnael_Getachew_Software_CV.pdf"
            aria-label="Download Natnael Getachew Software Engineering CV PDF"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neon-pink hover:bg-neon-magenta text-white font-mono text-xs font-bold transition-all shadow-pink-glow active:scale-95"
            title="Download Natnael Getachew Software Engineering CV"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">DOWNLOAD CV</span>
            <span className="xs:hidden">CV</span>
          </a>

          {/* Light/Dark Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded bg-canvas-card border border-cyber hover:border-amber-400 text-gray-300 hover:text-amber-400 font-mono text-xs transition-colors flex items-center justify-center group active:scale-95"
            title={mounted && theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle Light and Dark Mode"
          >
            {mounted && theme === 'light' ? (
              <Moon className="w-4 h-4 text-neon-cyan group-hover:-rotate-12 transition-transform" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded text-gray-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canvas-card border-b border-cyber px-4 pt-3 pb-5 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded bg-canvas-elevated text-gray-200 hover:text-neon-cyan"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            {/* Mobile Download CV */}
            <a
              href="/Natnael_Getachew_Software_CV.pdf"
              download="Natnael_Getachew_Software_CV.pdf"
              className="flex items-center justify-center gap-2 py-2 px-3 rounded text-xs font-mono font-bold bg-neon-pink text-white text-center shadow-pink-glow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD CV (PDF)</span>
            </a>

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded text-xs font-mono border bg-canvas-elevated border-cyber text-gray-300 hover:text-white"
            >
              {mounted && theme === 'light' ? (
                <>
                  <Moon className="w-4 h-4 text-neon-cyan" />
                  <span>Switch to Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Switch to Light Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
