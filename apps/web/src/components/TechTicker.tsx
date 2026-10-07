'use client';

import React from 'react';

const TECH_ITEMS = [
  { name: 'Next.js (App Router)', color: 'bg-neon-cyan' },
  { name: 'React 18 & Zustand', color: 'bg-neon-cyan' },
  { name: 'TypeScript & ES6+', color: 'bg-neon-cyan' },
  { name: 'Python OOP & AI Models', color: 'bg-neon-pink' },
  { name: 'TeleBirr API Integration', color: 'bg-neon-emerald' },
  { name: 'REST APIs & Nest.js', color: 'bg-neon-pink' },
  { name: 'Unit Testing & Functional QA', color: 'bg-neon-cyan' },
  { name: 'Android Studio & Kotlin', color: 'bg-neon-emerald' },
  { name: 'PostgreSQL & SQL', color: 'bg-neon-cyan' },
  { name: 'CSS Modules & Tailwind', color: 'bg-neon-pink' },
  { name: 'Git & GitHub Workflows', color: 'bg-neon-emerald' },
];

export default function TechTicker() {
  return (
    <div className="w-full bg-canvas-card/60 border-y border-cyber py-3 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center gap-2">
        <span className="font-mono text-[11px] text-gray-500 font-semibold tracking-wider">
          // CORE PRODUCTION TECH STACK
        </span>
      </div>

      {/* Infinite scrolling ticker track */}
      <div className="flex overflow-hidden relative group">
        <div className="flex space-x-3 shrink-0 animate-ticker">
          {TECH_ITEMS.concat(TECH_ITEMS).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300 hover:border-gray-600 transition-colors whitespace-nowrap"
            >
              <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
