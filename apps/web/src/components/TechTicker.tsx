'use client';

import React from 'react';
import { Layers, ShieldCheck, Cpu, Code2, Smartphone, Terminal } from 'lucide-react';

interface TechBadge {
  name: string;
  category: string;
  dotColor: string;
}

const TECH_ITEMS: TechBadge[] = [
  { name: 'Next.js 16 (App Router)', category: 'Frontend', dotColor: 'bg-agency-cyan' },
  { name: 'React 18 & Zustand', category: 'Frontend', dotColor: 'bg-agency-primary' },
  { name: 'TypeScript Strict', category: 'Language', dotColor: 'bg-agency-cyan' },
  { name: 'TeleBirr Payment Gateway', category: 'Fintech API', dotColor: 'bg-agency-emerald' },
  { name: 'Python OOP & AI Models', category: 'AI / MSc', dotColor: 'bg-agency-amber' },
  { name: 'NestJS & Node.js', category: 'Backend', dotColor: 'bg-agency-rose' },
  { name: 'Unit Testing & Boundary QA', category: 'Testing', dotColor: 'bg-agency-emerald' },
  { name: 'Android Studio & Kotlin', category: 'Mobile', dotColor: 'bg-agency-primary' },
  { name: 'PostgreSQL & SQL', category: 'Database', dotColor: 'bg-agency-cyan' },
  { name: 'Tailwind CSS & CSS Modules', category: 'Styling', dotColor: 'bg-agency-primary' },
  { name: 'Git & GitHub Workflows', category: 'DevOps', dotColor: 'bg-agency-emerald' },
];

export default function TechTicker() {
  return (
    <div className="w-full bg-canvas-card/40 border-y border-cyber py-3.5 overflow-hidden select-none relative">
      {/* Edge feathering masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling track */}
      <div className="flex overflow-hidden relative group">
        <div className="flex space-x-3 shrink-0 animate-ticker group-hover:[animation-play-state:paused]">
          {TECH_ITEMS.concat(TECH_ITEMS).map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-elevated/70 border border-cyber text-xs font-mono text-gray-300 hover:border-gray-500 transition-colors whitespace-nowrap"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
              <span className="font-semibold text-white">{item.name}</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                • {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
