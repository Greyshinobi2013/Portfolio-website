'use client';

import React from 'react';
import { ArrowUp, ShieldCheck, Heart, Sparkles, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-canvas-card border-t border-cyber pt-12 pb-8 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Narrative */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-canvas-elevated border border-cyber flex items-center justify-center font-bold text-agency-primary">
                NG
              </div>
              <div>
                <div className="font-bold text-white text-sm tracking-tight">
                  Natnael Getachew
                </div>
                <div className="text-[11px] text-gray-400">
                  Software Developer &amp; Quality Assurance Intern
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-xs font-sans leading-relaxed max-w-sm">
              MSc Artificial Intelligence scholar at Ethiopian Defense University and BSc Computer Engineering graduate.
              Architecting resilient full-stack systems and test-verified software.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-agency-emerald">
              <span className="w-2 h-2 rounded-full bg-agency-emerald pulsing-dot" />
              <span>Available for Software Development &amp; QA Internships</span>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-1.5 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About &amp; Overview
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">
                  Capabilities &amp; Architecture
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Case Studies
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience &amp; Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Ingress
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Telemetry & Ingress */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">
              System Telemetry &amp; Ingress
            </div>
            <ul className="space-y-1.5 text-gray-400">
              <li>
                <a
                  href="/api/health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-agency-emerald transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-agency-emerald" />
                  <span>API Telemetry Health Check (/api/health)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Greyshinobi2013/Portfolio-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Source Code Repository (GitHub)
                </a>
              </li>
              <li>
                <a
                  href="/Natnael_Getachew_Software_CV.pdf"
                  download="Natnael_Getachew_Software_CV.pdf"
                  className="hover:text-agency-primary transition-colors"
                >
                  Download Resume / CV (PDF)
                </a>
              </li>
              <li className="text-gray-500 pt-1">
                Addis Ababa, Ethiopia (UTC+3)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 border-t border-cyber flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <div className="flex flex-wrap items-center gap-2">
            <span>© 2026 NATNAEL GETACHEW.</span>
            <span>•</span>
            <span>NEXT.JS 16 APP ROUTER</span>
            <span>•</span>
            <span>TYPESCRIPT STRICT</span>
            <span>•</span>
            <span>REACT 18</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canvas-elevated hover:bg-canvas text-gray-400 hover:text-white border border-cyber transition-all active:scale-95"
            title="Scroll to top of page"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-agency-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
}
