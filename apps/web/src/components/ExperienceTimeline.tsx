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
                  Collaborated on native Android apps, translating Figma designs into responsive Material layouts with
                  RecyclerView.
                </li>
                <li>
                  Developed standalone Dictionary mobile app with dynamic SearchView queries and local database caching.
                </li>
                <li>
                  Conducted code reviews, debugged edge cases in memory management, and adhered to Git pull-request flows.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  Android Studio
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-emerald">
                  Java &amp; Kotlin
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  SQLite
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-cyan">
                  RecyclerView
                </span>
              </div>
            </div>

            {/* Experience Card 2: Languages & Communication */}
            <div className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all p-6 space-y-3 relative group">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-bold text-white group-hover:text-neon-cyan transition-colors">
                  Languages &amp; Communication
                </h4>
                <span className="px-2.5 py-0.5 rounded font-mono text-[11px] font-semibold bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                  CV: LANGUAGES
                </span>
              </div>

              <div className="text-xs font-mono text-neon-pink font-semibold">
                Professional Working Proficiency
              </div>

              <ul className="space-y-2.5 text-xs text-gray-300 leading-relaxed list-disc list-outside pl-4 marker:text-neon-cyan">
                <li>
                  <strong className="text-white">English:</strong> Professional working proficiency (technical documentation, code reviews, and remote communication).
                </li>
                <li>
                  <strong className="text-white">Amharic:</strong> Native proficiency.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-cyan">
                  English (Professional)
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-amber-400">
                  Amharic (Native)
                </span>
              </div>
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

            {/* Education Card 1: MSc in Artificial Intelligence */}
            <div className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all p-6 space-y-3 relative group">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-bold text-white group-hover:text-neon-cyan transition-colors">
                  MSc in Artificial Intelligence
                </h4>
                <span className="px-2.5 py-0.5 rounded font-mono text-[11px] font-semibold bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                  2026 — Present
                </span>
              </div>

              <div className="text-xs font-mono text-neon-pink font-semibold">
                Ethiopian Defense University
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                Advanced graduate program focusing on statistical intelligence, computational linguistics, and deep
                neural systems. Coursework: Machine Learning, Statistical Computing, Research Methods and Seminar,
                Natural Language Processing, Deep Learning, Computer Vision.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-cyan">
                  Machine Learning
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  Deep Learning
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-pink">
                  NLP &amp; Vision
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-amber-400">
                  Statistical Computing
                </span>
              </div>
            </div>

            {/* Education Card 2: IBT College of Canada */}
            <div className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all p-6 space-y-3 relative group">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-bold text-white group-hover:text-neon-cyan transition-colors">
                  Advanced Digital Skills: Software Development &amp; QA
                </h4>
                <span className="px-2.5 py-0.5 rounded font-mono text-[11px] font-semibold bg-neon-pink/10 border border-neon-pink/30 text-neon-pink">
                  2026 — Present
                </span>
              </div>

              <div className="text-xs font-mono text-neon-pink font-semibold">
                IBT College of Canada
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                Six-month intensive industry program covering modern full-stack web development, Next.js/React, REST APIs,
                Node.js, QA fundamentals, and Git workflows.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  Next.js &amp; React
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  QA Fundamentals
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-pink">
                  REST APIs &amp; Node.js
                </span>
              </div>
            </div>

            {/* Education Card 3: Debre Birhan University */}
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
                Comprehensive 5-year engineering degree. Relevant coursework: OOP, Data Structures &amp; Algorithms,
                Database Systems, and Software Engineering.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  OOP Architecture
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-cyan">
                  DSA Algorithms
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-amber-400">
                  Database Systems
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-pink">
                  Software Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
