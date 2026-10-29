'use client';

import React from 'react';
import ProfileCard from './ProfileCard';
import {
  ArrowDownRight,
  Github,
  Mail,
  ArrowRight,
  ShieldCheck,
  Code2,
  Cpu,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export default function Hero() {
  const metrics = [
    { label: 'Engineering Systems', value: '4+', desc: 'Next.js, React SPA, Pure ES6+, Android' },
    { label: 'Code Quality', value: '100%', desc: 'Strict TypeScript & boundary QA test suites' },
    { label: 'AI Specialization', value: 'MSc', desc: 'Defense University AI scholar & BSc CompEng' },
    { label: 'Response Guarantee', value: '< 24h', desc: 'Direct recruiter & engineering inbox' },
  ];

  return (
    <section id="about" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden hero-gradient-mesh scroll-mt-20 md:scroll-mt-24">
      {/* Subtle background ambient mesh */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Beacon Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agency-primary/10 border border-agency-primary/25 text-agency-primary text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-agency-emerald pulsing-dot" />
              <span>Available for Software Developer &amp; QA Internships</span>
            </div>

            {/* High-Impact Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-[-0.03em] leading-[1.12]">
                Architecting resilient web systems, fintech payment rails, and verified digital products.
              </h1>
            </div>

            {/* Narrative Bio */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Computer Engineering graduate from <strong className="text-white font-medium">Debre Birhan University</strong>,{' '}
              postgraduate <strong className="text-white font-medium">MSc Artificial Intelligence scholar</strong> at Ethiopian Defense University,
              and IBT College of Canada Software Development &amp; QA graduate. Specializing in Next.js App Router,
              strict TypeScript, Python, and production TeleBirr payment gateway engineering.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-agency-primary hover:bg-agency-primary-hover text-white text-xs sm:text-sm font-semibold tracking-normal transition-all shadow-agency-glow active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-primary"
              >
                <span>Explore case studies</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-canvas-card border border-cyber hover:border-agency-primary text-gray-200 hover:text-white text-xs sm:text-sm font-medium transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-primary"
              >
                <Mail className="w-4 h-4 text-agency-emerald" />
                <span>Get in touch</span>
              </a>

              <a
                href="https://github.com/Greyshinobi2013"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-canvas-card border border-cyber hover:border-gray-500 text-gray-300 hover:text-white text-xs sm:text-sm font-medium transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-primary"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Agency Metrics Bar */}
            <div className="pt-6 border-t border-cyber grid grid-cols-2 sm:grid-cols-4 gap-4">
              {metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-200">{m.label}</div>
                  <div className="text-[11px] text-gray-400 leading-tight">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Executive Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
