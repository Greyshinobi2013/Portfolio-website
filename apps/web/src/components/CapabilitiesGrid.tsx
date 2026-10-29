'use client';

import React, { useState } from 'react';
import {
  Layout,
  Server,
  Code,
  Brain,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Terminal,
  Zap,
  Gauge,
  Smartphone,
  GitBranch,
} from 'lucide-react';

export default function CapabilitiesGrid() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'qa'>('all');

  return (
    <section
      id="capabilities"
      className="py-16 md:py-24 bg-canvas border-b border-cyber relative scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-agency-primary/10 border border-agency-primary/20 text-agency-primary text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING CAPABILITIES &amp; ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Technical Architecture &amp; Production Disciplines
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            Constructed with rigorous engineering principles: zero-waterfall Server Components,
            strictly validated payment gateways, and automated boundary quality assurance.
          </p>
        </div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* =========================================================================
              BENTO 1 (HERO 2-COL): FRONTEND SYSTEMS & NEXT.JS 16
             ========================================================================= */}
          <div className="lg:col-span-2 rounded-2xl bg-canvas-card border border-cyber p-6 sm:p-8 flex flex-col justify-between shadow-agency-card card-specular hover:border-agency-primary/50 transition-all duration-300 group">
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-agency-primary/10 border border-agency-primary/20 text-agency-primary">
                    <Layout className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-agency-primary font-bold block">
                      CORE ARCHITECTURE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-agency-primary transition-colors">
                      Frontend Systems &amp; Next.js 16 (App Router)
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agency-emerald/10 border border-agency-emerald/30 text-agency-emerald font-mono text-[11px] font-semibold">
                  <Gauge className="w-3.5 h-3.5" />
                  <span>LIGHTHOUSE 100</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Architecting high-velocity web applications using Next.js App Router (RSC), React 18, and Zustand.
                Enforcing strict separation of server-rendered static content and interactive client leaves to eliminate
                network waterfalls and achieve zero cumulative layout shift (CLS).
              </p>

              {/* Interactive Performance & Architecture Visualizer */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Visualizer 1: Lighthouse Metrics */}
                <div className="p-4 rounded-xl bg-canvas-elevated/70 border border-cyber space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold block">
                    Vercel Edge Performance Audit
                  </span>
                  <div className="grid grid-cols-4 gap-2 text-center font-mono">
                    <div className="p-2 rounded-lg bg-canvas border border-cyber">
                      <span className="text-agency-emerald font-extrabold text-base block">100</span>
                      <span className="text-[9px] text-gray-400 block uppercase">PERF</span>
                    </div>
                    <div className="p-2 rounded-lg bg-canvas border border-cyber">
                      <span className="text-agency-emerald font-extrabold text-base block">100</span>
                      <span className="text-[9px] text-gray-400 block uppercase">A11Y</span>
                    </div>
                    <div className="p-2 rounded-lg bg-canvas border border-cyber">
                      <span className="text-agency-emerald font-extrabold text-base block">100</span>
                      <span className="text-[9px] text-gray-400 block uppercase">BEST</span>
                    </div>
                    <div className="p-2 rounded-lg bg-canvas border border-cyber">
                      <span className="text-agency-emerald font-extrabold text-base block">100</span>
                      <span className="text-[9px] text-gray-400 block uppercase">SEO</span>
                    </div>
                  </div>
                </div>

                {/* Visualizer 2: RSC Data Flow Tree */}
                <div className="p-4 rounded-xl bg-canvas-elevated/70 border border-cyber space-y-2 font-mono text-[11px]">
                  <span className="text-[10px] uppercase tracking-wider text-agency-cyan font-bold block">
                    Zero-Waterfall Hydration Tree
                  </span>
                  <div className="space-y-1 text-gray-300">
                    <div className="flex items-center gap-1.5 text-white">
                      <span className="text-agency-primary">▸</span>
                      <span>RootLayout &amp; Static Views</span>
                      <span className="text-[9px] text-agency-emerald ml-auto font-semibold">SSG Edge</span>
                    </div>
                    <div className="flex items-center gap-1.5 pl-3 text-gray-400">
                      <span className="text-agency-cyan">↳</span>
                      <span>Interactive Leaves &amp; Drawers</span>
                      <span className="text-[9px] text-agency-cyan ml-auto font-semibold">Client RSC</span>
                    </div>
                    <div className="flex items-center gap-1.5 pl-6 text-gray-400">
                      <span className="text-agency-amber">↳</span>
                      <span>Zustand Localized State</span>
                      <span className="text-[9px] text-agency-amber ml-auto font-semibold">0ms Sync</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stack Pills */}
            <div className="pt-4 border-t border-cyber/60 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {['Next.js 16', 'React 18', 'TypeScript Strict', 'Zustand', 'Tailwind CSS'].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-canvas border border-cyber text-xs font-mono text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <span className="text-[11px] font-mono text-agency-primary font-semibold">
                WCAG 2.1 AA Compliant
              </span>
            </div>
          </div>

          {/* =========================================================================
              BENTO 2 (1-COL): QUALITY ASSURANCE & VERIFICATION
             ========================================================================= */}
          <div className="rounded-2xl bg-canvas-card border border-cyber p-6 sm:p-7 flex flex-col justify-between shadow-agency-card card-specular hover:border-agency-emerald/50 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-agency-emerald/10 border border-agency-emerald/20 text-agency-emerald">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-agency-emerald px-2 py-0.5 rounded-full bg-agency-emerald/10 border border-agency-emerald/30 font-bold">
                  VERIFIED DEPLOY
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-agency-emerald transition-colors mb-2">
                Software Quality Assurance &amp; Boundary Testing
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                Engineering test plans that subject digital products to boundary value analysis, idempotency verification,
                and simulated network failure paths.
              </p>

              <div className="space-y-2 p-3 rounded-xl bg-canvas-elevated/70 border border-cyber text-xs font-mono mb-4">
                <div className="flex items-center justify-between text-gray-300">
                  <span className="text-gray-400">Boundary Assertions:</span>
                  <span className="text-agency-emerald font-semibold">Zero-Defect Standard</span>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <span className="text-gray-400">Network Resilience:</span>
                  <span className="text-agency-cyan font-semibold">Auto-save Draft &amp; Fallback</span>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <span className="text-gray-400">Test Framework:</span>
                  <span className="text-white font-semibold">Jest &amp; Functional QA</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-cyber/60 flex flex-wrap gap-1.5">
              {['Boundary Analysis', 'Unit Testing', 'Positive/Negative QA', 'Regression Testing'].map((item, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-canvas border border-cyber text-[11px] font-mono text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* =========================================================================
              BENTO 3 (1-COL): ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
             ========================================================================= */}
          <div className="rounded-2xl bg-canvas-card border border-cyber p-6 sm:p-7 flex flex-col justify-between shadow-agency-card card-specular hover:border-agency-amber/50 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-agency-amber/10 border border-agency-amber/20 text-agency-amber">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-agency-amber px-2 py-0.5 rounded-full bg-agency-amber/10 border border-agency-amber/30 font-bold">
                  POSTGRADUATE SCHOLAR
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-agency-amber transition-colors mb-2">
                Artificial Intelligence &amp; Neural Systems
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                Pursuing an MSc in AI at Ethiopian Defense University. Researching deep neural architectures,
                computer vision, and algorithmic optimization using Python OOP and modern scientific stacks.
              </p>

              <div className="p-3 rounded-xl bg-canvas-elevated/70 border border-cyber space-y-1.5 text-xs font-mono mb-4">
                <div className="text-gray-300">
                  <span className="text-agency-amber font-semibold">Institution:</span> Ethiopian Defense Univ
                </div>
                <div className="text-gray-300">
                  <span className="text-agency-cyan font-semibold">Core Language:</span> Python (OOP &amp; ML)
                </div>
                <div className="text-gray-400 text-[11px]">
                  Specializing in computer vision models and neural network fine-tuning.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-cyber/60 flex flex-wrap gap-1.5">
              {['Python 3', 'Neural Networks', 'Computer Vision', 'Deep Learning', 'Data Pipelines'].map((item, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-canvas border border-cyber text-[11px] font-mono text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* =========================================================================
              BENTO 4 (HERO 2-COL): FINTECH & TELEBIRR API INGRESS
             ========================================================================= */}
          <div className="lg:col-span-2 rounded-2xl bg-canvas-card border border-cyber p-6 sm:p-8 flex flex-col justify-between shadow-agency-card card-specular hover:border-agency-cyan/50 transition-all duration-300 group">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-agency-cyan/10 border border-agency-cyan/20 text-agency-cyan">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-agency-cyan font-bold block">
                      FINTECH &amp; DISTRIBUTED INGRESS
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-agency-cyan transition-colors">
                      Fintech Ingress &amp; TeleBirr Gateway Integration
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agency-cyan/10 border border-agency-cyan/30 text-agency-cyan font-mono text-[11px] font-semibold">
                  <span>TELEBIRR API v2</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Constructing production payment gateways with strict national phone number validation, localized
                sub-city delivery calculation, and automated delay escalation triggers.
              </p>

              {/* Fintech Pipeline Stepper Visual */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-6 font-mono text-xs">
                <div className="p-3 rounded-xl bg-canvas-elevated/70 border border-cyber">
                  <span className="text-agency-primary text-[10px] font-bold block mb-1">01 / VALIDATE</span>
                  <span className="text-white font-semibold block text-[11px]">Regex Payload</span>
                  <span className="text-gray-400 text-[10px] block mt-1">+2519... or 09...</span>
                </div>

                <div className="p-3 rounded-xl bg-canvas-elevated/70 border border-cyber">
                  <span className="text-agency-cyan text-[10px] font-bold block mb-1">02 / CALCULATE</span>
                  <span className="text-white font-semibold block text-[11px]">Sub-City Fee</span>
                  <span className="text-gray-400 text-[10px] block mt-1">Bole, Kirkos, Yeka</span>
                </div>

                <div className="p-3 rounded-xl bg-canvas-elevated/70 border border-cyber">
                  <span className="text-agency-emerald text-[10px] font-bold block mb-1">03 / DISPATCH</span>
                  <span className="text-white font-semibold block text-[11px]">USSD Push</span>
                  <span className="text-gray-400 text-[10px] block mt-1">TeleBirr Gateway</span>
                </div>

                <div className="p-3 rounded-xl bg-canvas-elevated/70 border border-cyber">
                  <span className="text-agency-amber text-[10px] font-bold block mb-1">04 / ESCALATE</span>
                  <span className="text-white font-semibold block text-[11px]">Delay Guard</span>
                  <span className="text-gray-400 text-[10px] block mt-1">&gt;30m 20% Voucher</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-cyber/60 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {['TeleBirr API', 'NestJS', 'REST APIs', 'PostgreSQL', 'Session Guards', 'JSON Schema'].map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-canvas border border-cyber text-xs font-mono text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
              <span className="text-[11px] font-mono text-agency-emerald font-semibold">
                Idempotent Webhook Handling
              </span>
            </div>
          </div>

          {/* =========================================================================
              BENTO 5 (1-COL): NATIVE MOBILE ENGINEERING
             ========================================================================= */}
          <div className="rounded-2xl bg-canvas-card border border-cyber p-6 sm:p-7 flex flex-col justify-between shadow-agency-card card-specular hover:border-agency-rose/50 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-agency-rose/10 border border-agency-rose/20 text-agency-rose">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-agency-rose px-2 py-0.5 rounded-full bg-agency-rose/10 border border-agency-rose/30 font-bold">
                  MOBILE APPRENTICESHIP
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-agency-rose transition-colors mb-2">
                Native Mobile Engineering (Android &amp; Kotlin)
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                Commercial experience at M.A.D Technologies. Translating Figma wireframes into responsive
                Material Design layouts with RecyclerView and local SQLite caching.
              </p>

              <div className="space-y-1.5 p-3 rounded-xl bg-canvas-elevated/70 border border-cyber text-xs font-mono mb-4">
                <div className="text-gray-300">
                  <span className="text-agency-rose font-semibold">Experience:</span> M.A.D Technologies
                </div>
                <div className="text-gray-300">
                  <span className="text-agency-cyan font-semibold">Persistence:</span> SQLite Local Database
                </div>
                <div className="text-gray-400 text-[11px]">
                  Engineered standalone Dictionary app with dynamic SearchView querying.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-cyber/60 flex flex-wrap gap-1.5">
              {['Android Studio', 'Kotlin', 'Java', 'SQLite', 'RecyclerView'].map((item, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-canvas border border-cyber text-[11px] font-mono text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* =========================================================================
              BENTO 6 (HERO 2-COL): TOOLCHAINS & ENGINEERING STANDARDS
             ========================================================================= */}
          <div className="lg:col-span-2 rounded-2xl bg-canvas-card border border-cyber p-6 sm:p-8 flex flex-col justify-between shadow-agency-card card-specular hover:border-gray-400 transition-all duration-300 group">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-canvas-elevated border border-cyber text-agency-primary">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold block">
                      DEVELOPER DISCIPLINES
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-white transition-colors">
                      Engineering Standards, Toolchains &amp; Workflows
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas-elevated border border-cyber text-gray-300 font-mono text-[11px]">
                  <GitBranch className="w-3.5 h-3.5 text-agency-emerald" />
                  <span>STRICT FEATURE-BRANCH WORKFLOW</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Adhering to strict Git feature-branch pull requests, code reviews, Postman API regression collections,
                and Figma design system fidelity for pixel-perfect implementations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-canvas-elevated/70 border border-cyber space-y-1">
                  <span className="text-agency-primary font-bold block text-[11px]">Git &amp; GitHub</span>
                  <p className="text-gray-400 text-[11px] leading-snug">
                    Meaningful semantic commits, clean pull-request descriptions, and branch hygiene.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-canvas-elevated/70 border border-cyber space-y-1">
                  <span className="text-agency-cyan font-bold block text-[11px]">API Tooling</span>
                  <p className="text-gray-400 text-[11px] leading-snug">
                    Postman environment variables, automated endpoint assertions, and mock servers.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-canvas-elevated/70 border border-cyber space-y-1">
                  <span className="text-agency-emerald font-bold block text-[11px]">Linux &amp; Shell</span>
                  <p className="text-gray-400 text-[11px] leading-snug">
                    Bash scripting, process managers, and container-ready server environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-cyber/60 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {['Git', 'GitHub PRs', 'Postman', 'Linux / Bash', 'Figma', 'VS Code'].map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-canvas border border-cyber text-xs font-mono text-gray-300">
                    {item}
                  </span>
                ))}
              </div>
              <span className="text-[11px] font-mono text-gray-400">
                Adheres to SOLID &amp; Clean Architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
