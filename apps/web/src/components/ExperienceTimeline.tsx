'use client';

import React from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-canvas border-b border-cyber relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-neon-pink font-semibold tracking-wider">
            <span>:: BACKGROUND &amp; EVOLUTION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Journey, Experience &amp; Credentials
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-3xl leading-relaxed">
            Academic foundation in Computer Engineering merged with high-velocity software apprenticeships and hands-on
            industry experience.
          </p>
        </div>

        {/* Dual-Column Layout: Left (Experience) & Right (Education) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT: Engineering Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan"></span>
              <h3 className="font-mono text-sm sm:text-base font-bold text-white tracking-wider uppercase">
                Engineering Experience
              </h3>
            </div>

            {/* Experience Card 1: Android Developer Intern */}
            <div className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all p-6 space-y-3 relative group">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-bold text-white group-hover:text-neon-cyan transition-colors">
                  Android Developer Intern
                </h4>
                <span className="px-2.5 py-0.5 rounded font-mono text-[11px] font-semibold bg-neon-emerald/10 border border-neon-emerald/30 text-neon-emerald">
                  2022 — 2023
                </span>
              </div>

              <div className="text-xs font-mono text-neon-pink font-semibold">
                M.A.D Technologies • Addis Ababa, Ethiopia
              </div>

              <ul className="space-y-2 text-xs text-gray-300 leading-relaxed list-disc list-outside pl-4 marker:text-neon-cyan">
                <li>
                  Collaborated with the core engineering group to translate high-fidelity Figma UI wireframes into
                  responsive native Android layouts using ConstraintLayout, ViewBinding, and RecyclerView adapters.
                </li>
                <li>
                  Implemented offline-first SQLite database synchronization, significantly reducing app cold-start
                  alerts.
                </li>
                <li>
                  Conducted code reviews, debugged edge cases in memory management, and adhered to Git pull-request flows.
                </li>
              </ul>
            </div>

            {/* Experience Card 2: Full-Stack Trainee & Project Lead */}
            <div className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all p-6 space-y-3 relative group">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-bold text-white group-hover:text-neon-cyan transition-colors">
                  Full-Stack Trainee &amp; Project Lead
                </h4>
                <span className="px-2.5 py-0.5 rounded font-mono text-[11px] font-semibold bg-neon-pink/10 border border-neon-pink/30 text-neon-pink">
                  2024 — Present
                </span>
              </div>

              <div className="text-xs font-mono text-neon-pink font-semibold">
                IBT Academy Cohort
              </div>

              <ul className="space-y-2 text-xs text-gray-300 leading-relaxed list-disc list-outside pl-4 marker:text-neon-pink">
                <li>
                  Directing team deliverables for full-stack web products, conducting code reviews, implementing test
                  suites, and driving architectural adherence to React 18 &amp; Python design patterns.
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Education & Credentials */}
          <div id="education" className="space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neon-pink"></span>
              <h3 className="font-mono text-sm sm:text-base font-bold text-white tracking-wider uppercase">
                Education &amp; Credentials
              </h3>
            </div>

            {/* Education Card 1: IBT College */}
            <div className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all p-6 space-y-3 relative group">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-bold text-white group-hover:text-neon-cyan transition-colors">
                  Advanced Digital Skills: Software Development &amp; QA
                </h4>
                <span className="px-2.5 py-0.5 rounded font-mono text-[11px] font-semibold bg-neon-pink/10 border border-neon-pink/30 text-neon-pink">
                  2024 — Present
                </span>
              </div>

              <div className="text-xs font-mono text-neon-pink font-semibold">
                IBT College of Canada
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                Intensive industry software engineering curriculum emphasizing modern web architectures (Next.js,
                React, TypeScript), QA test automation, automated CI/CD pipelines, and collaborative software delivery.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  React 18
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  QA Automation
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-pink">
                  REST Architecture
                </span>
              </div>
            </div>

            {/* Education Card 2: Debre Birhan University */}
            <div className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all p-6 space-y-3 relative group">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-bold text-white group-hover:text-neon-cyan transition-colors">
                  BSc in Computer Engineering
                </h4>
                <span className="px-2.5 py-0.5 rounded font-mono text-[11px] font-semibold bg-amber-400/10 border border-amber-400/30 text-amber-400">
                  2017 — 2022
                </span>
              </div>

              <div className="text-xs font-mono text-neon-pink font-semibold">
                Debre Birhan University • Ethiopia
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                Rigorous 5-year engineering degree encompassing core computing foundations: Data Structures &amp;
                Algorithms, Object-Oriented Analysis, Database Systems, Computer Networks, and Microprocessor Systems.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  DSA Algorithms
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-cyan">
                  Distributed Systems
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-amber-400">
                  OOP Architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
