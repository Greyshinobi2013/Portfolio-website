'use client';

import React from 'react';
import { Layout, CheckSquare, Brain, Server } from 'lucide-react';

export default function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-1">
          <span className="inline-block font-mono text-xs font-semibold tracking-widest uppercase text-diogo-cyan mb-1">
            // Technical Specialization &amp; Systems
          </span>
          <h2>Engineering Disciplines</h2>
          <h3>Technical architecture &amp; core capabilities</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Bento 1: Frontend Systems & Next.js 16 (2-col) */}
          <div className="lg:col-span-2 rounded-xl bg-charcoal-200 border border-white/10 p-6 sm:p-7 shadow-elevation-2 flex flex-col justify-between hover:border-diogo-cyan/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-diogo-blue/20 text-diogo-cyan border border-diogo-cyan/30">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-diogo-cyan uppercase font-mono">Core Stack</span>
                    <h4 className="font-display font-bold text-xl text-white">
                      Frontend Systems &amp; Next.js 16 (App Router)
                    </h4>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  Lighthouse 100
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Architecting high-velocity web applications using Next.js App Router (RSC), React 18, and Zustand. Strict separation of server-rendered static content and interactive client leaves eliminates network waterfalls and achieves zero cumulative layout shift (CLS).
              </p>

              {/* Lighthouse Benchmarks & Zero-Waterfall Tree */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-charcoal-300 p-4 rounded-lg border border-white/5">
                <div className="sm:col-span-6">
                  <span className="text-[11px] font-mono text-gray-400 block mb-2 font-semibold uppercase">
                    Audit Benchmarks:
                  </span>
                  <div className="grid grid-cols-4 gap-2 text-center font-mono">
                    <div className="p-2 rounded bg-charcoal-200 border border-emerald-500/30">
                      <span className="text-emerald-400 font-bold block text-sm">100</span>
                      <span className="text-[10px] text-gray-400 uppercase">Perf</span>
                    </div>
                    <div className="p-2 rounded bg-charcoal-200 border border-emerald-500/30">
                      <span className="text-emerald-400 font-bold block text-sm">100</span>
                      <span className="text-[10px] text-gray-400 uppercase">A11y</span>
                    </div>
                    <div className="p-2 rounded bg-charcoal-200 border border-emerald-500/30">
                      <span className="text-emerald-400 font-bold block text-sm">100</span>
                      <span className="text-[10px] text-gray-400 uppercase">Best</span>
                    </div>
                    <div className="p-2 rounded bg-charcoal-200 border border-emerald-500/30">
                      <span className="text-emerald-400 font-bold block text-sm">100</span>
                      <span className="text-[10px] text-gray-400 uppercase">SEO</span>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-6 font-mono text-xs border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-4 space-y-1">
                  <span className="text-[11px] text-gray-400 block mb-1 font-semibold uppercase font-mono">
                    Zero-Waterfall Tree:
                  </span>
                  <div className="text-emerald-400 font-semibold">▸ RootLayout <span className="text-gray-400 font-normal">— SSG Static Shell</span></div>
                  <div className="text-blue-400 pl-3">↳ Client Leaves <span className="text-gray-400 font-normal">— Interactive Drawers</span></div>
                  <div className="text-amber-400 pl-6">↳ Zustand Persist <span className="text-gray-400 font-normal">— Instant Local Sync</span></div>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">Next.js 16</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">React 18</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">TypeScript Strict</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">Zustand</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">Tailwind CSS</span>
            </div>
          </div>

          {/* Bento 2: Quality Assurance & Boundary QA (1-col) */}
          <div className="rounded-xl bg-charcoal-200 border border-white/10 p-6 sm:p-7 shadow-elevation-2 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  Zero Defect
                </span>
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-2">Quality Assurance &amp; Boundary QA</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                Engineering test plans that subject digital systems to boundary value analysis, idempotency verification, and simulated network failures.
              </p>
              <div className="p-3 rounded-lg bg-charcoal-300 border border-white/5 font-mono text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-gray-400">Boundary Assertions:</span>
                  <span className="text-emerald-400 font-bold">100% Passed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Offline Resilience:</span>
                  <span className="text-blue-400">Auto-Draft Fallback</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Framework:</span>
                  <span className="text-white">Jest &amp; Functional QA</span>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">Boundary Analysis</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">Idempotency</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">Regression QA</span>
            </div>
          </div>

          {/* Bento 3: AI & Neural Systems (1-col) */}
          <div className="rounded-xl bg-charcoal-200 border border-white/10 p-6 sm:p-7 shadow-elevation-2 flex flex-col justify-between hover:border-amber-500/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Brain className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
                  Postgraduate
                </span>
              </div>
              <h4 className="font-display font-bold text-xl text-white mb-2">Artificial Intelligence &amp; Neural Systems</h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                MSc in AI Scholar at Ethiopian Defense University. Researching deep neural architectures, computer vision models, and algorithm optimization with Python OOP.
              </p>
              <div className="p-3 rounded-lg bg-charcoal-300 border border-white/5 font-mono text-xs space-y-1">
                <div><span className="text-amber-400">Institution:</span> Ethiopian Defense Univ</div>
                <div><span className="text-diogo-cyan">Core Language:</span> Python OOP &amp; ML</div>
                <div className="text-[11px] text-gray-400">Computer vision and neural fine-tuning</div>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">Neural Networks</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">Computer Vision</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">Python 3</span>
            </div>
          </div>

          {/* Bento 4: Backend Systems & Distributed API Architecture (2-col) */}
          <div className="lg:col-span-2 rounded-xl bg-charcoal-200 border border-white/10 p-6 sm:p-7 shadow-elevation-2 flex flex-col justify-between hover:border-diogo-blue/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-diogo-blue/20 text-diogo-cyan border border-diogo-cyan/30">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-diogo-cyan uppercase font-mono">Systems &amp; Architecture</span>
                    <h4 className="font-display font-bold text-xl text-white">Backend Systems &amp; Distributed API Architecture</h4>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
                  REST &amp; TeleBirr
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Constructing resilient server architectures with Next.js Server Actions, Python FastAPI, PostgreSQL relational modeling, and production TeleBirr fintech settlement gateways with USSD idempotency keys and automated delay compensation.
              </p>

              {/* 4-Step Stepper */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                <div className="p-3 rounded bg-charcoal-300 border border-white/5">
                  <span className="text-diogo-blue text-xs font-bold block mb-1">01 • Ingress</span>
                  <span className="text-white font-semibold block">FastAPI &amp; Routes</span>
                  <span className="text-gray-400 text-[10px] mt-1 block">Typed API endpoints</span>
                </div>
                <div className="p-3 rounded bg-charcoal-300 border border-white/5">
                  <span className="text-diogo-cyan text-xs font-bold block mb-1">02 • Persistence</span>
                  <span className="text-white font-semibold block">PostgreSQL / SQL</span>
                  <span className="text-gray-400 text-[10px] mt-1 block">Relational modeling</span>
                </div>
                <div className="p-3 rounded bg-charcoal-300 border border-white/5">
                  <span className="text-emerald-400 text-xs font-bold block mb-1">03 • Payments</span>
                  <span className="text-white font-semibold block">TeleBirr USSD</span>
                  <span className="text-gray-400 text-[10px] mt-1 block">Fintech payment push</span>
                </div>
                <div className="p-3 rounded bg-charcoal-300 border border-white/5">
                  <span className="text-amber-400 text-xs font-bold block mb-1">04 • Reliability</span>
                  <span className="text-white font-semibold block">Idempotency Guard</span>
                  <span className="text-gray-400 text-[10px] mt-1 block">Auto-retry &amp; recovery</span>
                </div>
              </div>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">Python FastAPI</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">PostgreSQL</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">TeleBirr Gateway</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">Idempotency Keys</span>
              <span className="px-2 py-0.5 rounded bg-charcoal-300 text-gray-300 font-mono text-xs">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
