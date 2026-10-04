'use client';

import React, { useState } from 'react';
import { useRecruiterStore } from '@/store/useRecruiterStore';
import { Terminal, Download, Zap, Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const { isRecruiterMode, toggleRecruiterMode, toggleTerminal } = useRecruiterStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          {/* Recruiter Mode Toggle */}
          <button
            onClick={toggleRecruiterMode}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono border transition-all ${
              isRecruiterMode
                ? 'bg-neon-pink/15 border-neon-pink text-neon-pink shadow-pink-glow'
                : 'bg-canvas-card border-cyber text-gray-400 hover:text-white hover:border-gray-600'
            }`}
            title="Toggle Recruiter / Tech Deep-Dive Mode"
          >
            <Zap className={`w-3 h-3 ${isRecruiterMode ? 'fill-neon-pink text-neon-pink' : ''}`} />
            <span>RECRUITER MODE: <strong className="font-bold">{isRecruiterMode ? 'ON' : 'OFF'}</strong></span>
          </button>

          {/* Status Pill: OPEN TO WORK */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neon-emerald/10 border border-neon-emerald/30 text-[11px] font-mono text-neon-emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-emerald pulsing-dot"></span>
            <span className="tracking-wider">OPEN TO WORK</span>
          </div>

          {/* Download CV Button */}
          <a
            href="/Natnael_Getachew_Software_CV.pdf"
            download="Natnael_Getachew_Software_CV.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neon-pink hover:bg-neon-magenta text-white font-mono text-xs font-bold transition-all shadow-pink-glow active:scale-95"
            title="Download Natnael Getachew Software Engineering CV"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">DOWNLOAD CV</span>
            <span className="xs:hidden">CV</span>
          </a>

          {/* Dev Terminal Launcher */}
          <button
            onClick={toggleTerminal}
            className="p-1.5 rounded bg-canvas-card border border-cyber hover:border-neon-cyan hover:text-neon-cyan text-gray-300 font-mono text-xs transition-colors flex items-center justify-center"
            title="Launch Interactive Dev Terminal (>_)"
          >
            <span className="font-mono text-xs font-bold text-neon-cyan px-1">&gt;_</span>
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

      {/* Recruiter Mode Active Banner */}
      {isRecruiterMode && (
        <div className="w-full bg-neon-pink/10 border-b border-neon-pink/30 py-1 px-4 text-center font-mono text-[11px] text-neon-pink flex items-center justify-center gap-2 animate-pulse">
          <Zap className="w-3 h-3 fill-neon-pink" />
          <span>RECRUITER &amp; ARCHITECTURE MODE ACTIVE — SQL PLANS, PRISMA MODELS &amp; TELEMETRY UNLOCKED</span>
        </div>
      )}

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
            <button
              onClick={() => {
                toggleRecruiterMode();
                setMobileMenuOpen(false);
              }}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded text-xs font-mono border ${
                isRecruiterMode
                  ? 'bg-neon-pink/20 border-neon-pink text-neon-pink'
                  : 'bg-canvas-elevated border-cyber text-gray-300'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Recruiter Mode: {isRecruiterMode ? 'ACTIVE' : 'DISABLED'}</span>
            </button>
            <div className="flex items-center justify-center gap-2 py-1.5 text-xs text-neon-emerald font-mono">
              <span className="w-2 h-2 rounded-full bg-neon-emerald pulsing-dot"></span>
              <span>Available for Hire &amp; Internships</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
