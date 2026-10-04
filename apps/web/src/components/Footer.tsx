'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-canvas border-t border-cyber py-8 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Top Row: Brand & Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-canvas-card border border-cyber flex items-center justify-center font-bold text-neon-cyan">
              NG
            </div>
            <div>
              <div className="font-bold text-white tracking-wide">Natnael Getachew</div>
              <div className="text-[11px] text-neon-cyan font-medium">
                Full-Stack Engineer • Addis Ababa, Ethiopia
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-gray-400 font-semibold tracking-wider">
            <a href="#about" className="hover:text-white transition-colors">
              ABOUT
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              SKILLS
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              PROJECTS
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              EXPERIENCE
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              CONTACT
            </a>
          </nav>
        </div>

        {/* Bottom Row: Copyright & Design Signature */}
        <div className="pt-4 border-t border-cyber/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-gray-500 text-[11px]">
          <div>© 2026 NATNAEL GETACHEW. BUILT WITH PRECISION ARCHITECTURE.</div>
          <div className="text-neon-cyan/80 tracking-wider">
            DESIGNED FOR HIGH-CRAFT WEB ENGINEERING
          </div>
        </div>
      </div>
    </footer>
  );
}
