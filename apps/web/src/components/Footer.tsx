'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-400 text-gray-300 pt-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-3">
            <h2 className="font-display font-bold text-xl text-white">Natnael Getachew</h2>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              Software &amp; QA Engineer. MSc Artificial Intelligence Scholar at Ethiopian Defense University. Architecting high-velocity web systems, strict TypeScript apps, and TeleBirr fintech rails.
            </p>
            <div className="text-xs text-diogo-cyan font-mono">
              Addis Ababa, Ethiopia • Available Globally
            </div>
          </div>

          {/* Col 2: Site Map */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Site Map</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-diogo-cyan transition-colors flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 text-diogo-cyan shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  <span>Home &amp; Hero Splash</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-diogo-cyan transition-colors flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 text-diogo-cyan shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  <span>Top Featured Projects</span>
                </a>
              </li>
              <li>
                <a
                  href="#capabilities"
                  className="text-gray-400 hover:text-diogo-cyan transition-colors flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 text-diogo-cyan shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  <span>Engineering Disciplines</span>
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="text-gray-400 hover:text-diogo-cyan transition-colors flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 text-diogo-cyan shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  <span>Academic &amp; Career Timeline</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-diogo-cyan transition-colors flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 text-diogo-cyan shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                  <span>Contact &amp; Ingress Hub</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3">Channels</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://github.com/Greyshinobi2013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-diogo-cyan transition-colors flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 fill-current shrink-0 text-gray-400 group-hover:text-diogo-cyan transition-colors" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/natnael-getachew-25b8211ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-diogo-cyan transition-colors flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 fill-current shrink-0 text-gray-400 group-hover:text-diogo-cyan transition-colors" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:getachewnatnael55@gmail.com"
                  className="text-gray-400 hover:text-diogo-cyan transition-colors flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-diogo-cyan transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href="/Natnael_Getachew_Software_CV.pdf"
                  download
                  className="text-gray-400 hover:text-diogo-cyan transition-colors flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-diogo-cyan transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                    <line x1="10" x2="8" y1="9" y2="9" />
                  </svg>
                  <span>Verified CV</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 py-4 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <div>&copy; 2026 Natnael Getachew. All rights reserved.</div>
          <div className="font-mono text-[11px]">Crafted with Next.js 16, TypeScript, &amp; Material UI/UX tokens</div>
        </div>
      </div>
    </footer>
  );
}
