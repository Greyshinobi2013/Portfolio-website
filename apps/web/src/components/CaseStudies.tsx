'use client';

import React, { useState } from 'react';
import {
  Utensils,
  Brain,
  ShieldCheck,
  Smartphone,
  ExternalLink,
  Play,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';

interface SubCity {
  name: string;
  fee: number;
}

const subCities: SubCity[] = [
  { name: 'Bole', fee: 120 },
  { name: 'Kirkos', fee: 100 },
  { name: 'Yeka', fee: 140 },
  { name: 'Arada', fee: 90 },
];

interface QATest {
  id: number;
  name: string;
  scope: string;
  status: 'READY' | 'RUNNING' | 'PASS' | 'FAIL';
  assertion: string;
}

const initialQATests: QATest[] = [
  { id: 1, name: 'Phone Ingress Regex', scope: '^(\\+251|0)(9|7)\\d{8}$', status: 'PASS', assertion: '100% Validated' },
  { id: 2, name: 'Sub-City Fee Matrix', scope: 'Boundary values: 90–140 ETB', status: 'PASS', assertion: 'Exact match' },
  { id: 3, name: 'USSD Push Idempotency', scope: 'UUID v4 transaction idempotency', status: 'PASS', assertion: '0 duplicate charges' },
  { id: 4, name: '30-Min Delay Escalation', scope: 'Automated 20% voucher injection', status: 'PASS', assertion: 'Voucher applied' },
  { id: 5, name: 'Offline Storage Fallback', scope: 'State recovery on network cut', status: 'PASS', assertion: 'Cart preserved' },
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'qa'>('simulator');
  const [phone, setPhone] = useState('+251911223344');
  const [selectedSubCity, setSelectedSubCity] = useState<SubCity>(subCities[0]);
  const [simLoading, setSimLoading] = useState(false);
  const [simFeedback, setSimFeedback] = useState<{
    success: boolean;
    txId?: string;
    msg: string;
  } | null>(null);

  const [qaTests, setQaTests] = useState<QATest[]>(initialQATests);
  const [qaRunning, setQaRunning] = useState(false);
  const [qaProgress, setQaProgress] = useState(100);

  const mealPrice = 440;
  const totalPrice = mealPrice + selectedSubCity.fee;

  const handleSimulate = () => {
    const val = phone.trim().replace(/\s+/g, '');
    const isValid = /^(\+251|0)(9|7)\d{8}$/.test(val);

    if (!isValid) {
      setSimFeedback({
        success: false,
        msg: 'Invalid Ethiopian Format: Please enter a valid number starting with +2519, +2517, 09, or 07 followed by 8 digits.',
      });
      return;
    }

    setSimLoading(true);
    setSimFeedback(null);

    setTimeout(() => {
      const txId = `ET-TB-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSimLoading(false);
      setSimFeedback({
        success: true,
        txId,
        msg: `Simulated prompt authorized on mobile handset. 30-min countdown timer engaged for ${selectedSubCity.name} delivery.`,
      });
    }, 900);
  };

  const handleRunQASuite = () => {
    setQaRunning(true);
    setQaProgress(20);

    setQaTests((prev) =>
      prev.map((t) => ({ ...t, status: 'RUNNING' }))
    );

    setTimeout(() => {
      setQaProgress(60);
    }, 400);

    setTimeout(() => {
      setQaProgress(100);
      setQaRunning(false);
      setQaTests((prev) =>
        prev.map((t) => ({ ...t, status: 'PASS' }))
      );
    }, 850);
  };

  const scrollToTheater = (tab: 'simulator' | 'qa') => {
    setActiveTab(tab);
    const el = document.getElementById('interactive-theater');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section-inverted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-1">
          <span className="inline-block font-mono text-xs font-semibold tracking-widest uppercase text-diogo-blue mb-1">
            // Selected Works &amp; Architecture
          </span>
          <h2>Portfolio</h2>
          <h3>My top projects</h3>
        </div>

        {/* Project Cards Grid with Distinct Brand Identities */}
        <div className="top-projects-grid">
          {/* Card 1: Addis Eats Multi-Tier Platform */}
          <div className="project-card" style={{ backgroundColor: '#0a74db' }}>
            <div className="card-content">
              <div className="card-emblem">
                <Utensils className="w-9 h-9 text-white" />
              </div>
              <h4>Addis Eats — Multi-Tier Platform</h4>
              <div className="flex items-center justify-center gap-1.5 flex-wrap mb-3 text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-black/25 text-white">v3 Next.js 16 App Router</span>
                <span className="px-2 py-0.5 rounded bg-black/25 text-white">v2 React 18 SPA</span>
                <span className="px-2 py-0.5 rounded bg-black/25 text-white">v1 Pure ES6+</span>
              </div>
              <p>
                Full-stack food delivery system architected across three progressive engineering iterations: from zero-dependency vanilla ES6+ session authentication to modular React 18 SPA with Zustand persistence, culminating in an enterprise Next.js 16 App Router platform with live TeleBirr payment rails.
              </p>
              <div className="text-xs font-mono bg-black/20 p-2.5 rounded mb-3 space-y-1">
                <div><strong>Stack:</strong> Next.js 16 • React 18 • TypeScript • TeleBirr API</div>
                <div><strong>Architecture:</strong> 3 Progressive Iterations • 100% QA Score</div>
              </div>
            </div>
            <div className="card-actions">
              <span className="text-xs font-mono opacity-80">Full-Stack Flagship</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollToTheater('simulator')}
                  className="px-3 py-1.5 rounded bg-white text-blue-700 hover:bg-gray-100 font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
                >
                  Try Simulator ↓
                </button>
                <a
                  href="https://github.com/Greyshinobi2013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded bg-white/20 hover:bg-white/30 text-white text-xs transition-colors"
                  aria-label="GitHub Repository"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Neural Edge — Computer Vision & Deep Learning */}
          <div className="project-card" style={{ backgroundColor: '#1e293b' }}>
            <div className="card-content">
              <div className="card-emblem" style={{ background: 'rgba(56, 189, 248, 0.18)' }}>
                <Brain className="w-9 h-9 text-sky-400" />
              </div>
              <h4>Neural Edge — AI Classifier</h4>
              <div className="flex items-center justify-center gap-1.5 flex-wrap mb-3 text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">PyTorch</span>
                <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">OpenCV</span>
                <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">Python 3.12</span>
              </div>
              <p>
                Postgraduate artificial intelligence research at Ethiopian Defense University. Implements deep convolutional neural network (CNN) architectures for automated visual defect detection, edge-accelerated inference pipelines, and matrix-optimized mathematical models.
              </p>
              <div className="text-xs font-mono bg-black/30 p-2.5 rounded mb-3 space-y-1">
                <div><strong>Research:</strong> Ethiopian Defense Univ (MSc AI)</div>
                <div><strong>Focus:</strong> Convolutional Networks • Matrix Optimization</div>
              </div>
            </div>
            <div className="card-actions">
              <span className="text-xs font-mono opacity-80 text-sky-300">MSc AI Research</span>
              <a
                href="https://github.com/Greyshinobi2013"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-sky-500 text-white hover:bg-sky-600 font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm inline-flex items-center gap-1"
              >
                <span>View Research</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 3: Sentinel QA — Test Automation Framework */}
          <div className="project-card" style={{ backgroundColor: '#0f766e' }}>
            <div className="card-content">
              <div className="card-emblem" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
                <ShieldCheck className="w-9 h-9 text-emerald-300" />
              </div>
              <h4>Sentinel QA — Automation Suite</h4>
              <div className="flex items-center justify-center gap-1.5 flex-wrap mb-3 text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-500/30">Jest</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-500/30">Playwright</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200 border border-emerald-500/30">CI/CD</span>
              </div>
              <p>
                Enterprise quality assurance test framework engineered per IBT College of Canada software standards. Features automated boundary value analysis (BVA), equivalence partitioning, idempotency verification, and mock fintech failure recovery suites.
              </p>
              <div className="text-xs font-mono bg-black/25 p-2.5 rounded mb-3 space-y-1">
                <div><strong>Standards:</strong> IBT College of Canada QA Curriculum</div>
                <div><strong>Coverage:</strong> 100% Boundary Assertions • Zero Regressions</div>
              </div>
            </div>
            <div className="card-actions">
              <span className="text-xs font-mono opacity-80 text-emerald-200">Automated QA</span>
              <button
                onClick={() => scrollToTheater('qa')}
                className="px-3 py-1.5 rounded bg-white text-teal-800 hover:bg-gray-100 font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
              >
                Run Suite (5) ↓
              </button>
            </div>
          </div>

          {/* Card 4: Android Developer Apprenticeship */}
          <div className="project-card" style={{ backgroundColor: '#434343' }}>
            <div className="card-content">
              <div className="card-emblem">
                <Smartphone className="w-9 h-9 text-white" />
              </div>
              <h4>Android Apprenticeship</h4>
              <div className="flex items-center justify-center gap-1.5 flex-wrap mb-3 text-[11px] font-mono">
                <span className="px-2 py-0.5 rounded bg-black/25 text-gray-200">Android Studio</span>
                <span className="px-2 py-0.5 rounded bg-black/25 text-gray-200">Kotlin</span>
                <span className="px-2 py-0.5 rounded bg-black/25 text-gray-200">SQLite</span>
              </div>
              <p>
                Native mobile software development at M.A.D Technologies. Translated Figma wireframes into responsive Material Design layouts with RecyclerView in Java and Kotlin. Developed a standalone Dictionary utility app with dynamic SQLite database caching.
              </p>
              <div className="text-xs font-mono bg-black/20 p-2.5 rounded mb-3 space-y-1">
                <div><strong>Stack:</strong> Android Studio • Java • Kotlin • SQLite</div>
                <div><strong>Role:</strong> Mobile Developer Intern (2022–2023)</div>
              </div>
            </div>
            <div className="card-actions">
              <span className="text-xs font-mono opacity-80">Native Mobile</span>
              <span className="px-3 py-1.5 rounded bg-white/20 text-white font-semibold text-xs tracking-wider uppercase">
                M.A.D Tech
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
             INTERACTIVE CASE STUDY THEATER: TELEBIRR SIMULATOR & QA RUNNER
             ========================================================================= */}
        <div id="interactive-theater" className="mt-16 max-w-5xl mx-auto rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8 shadow-elevation-2 text-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
            <div>
              <span className="text-xs font-bold font-mono uppercase text-diogo-blue tracking-wider block mb-1">
                Live Engineering Sandbox
              </span>
              <h4 className="font-display font-bold text-xl sm:text-2xl text-gray-900">
                Addis Eats TeleBirr Simulator &amp; QA Suite
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <button
                id="tab-sim-btn"
                onClick={() => setActiveTab('simulator')}
                className={`px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'simulator'
                    ? 'bg-diogo-brandBlue text-white shadow-sm'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                TeleBirr USSD Sim
              </button>
              <button
                id="tab-qa-btn"
                onClick={() => setActiveTab('qa')}
                className={`px-3.5 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'qa'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                QA Test Runner (5)
              </button>
            </div>
          </div>

          {/* TAB 1: Live Interactive TeleBirr USSD Push Simulator */}
          {activeTab === 'simulator' && (
            <div id="tab-simulator" className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Ethiopian Phone Number (TeleBirr)
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded border border-gray-300 font-mono text-sm focus:border-diogo-blue focus:outline-none bg-white"
                    placeholder="+2519... or 09..."
                  />
                  <span className="text-[11px] text-gray-500 mt-1 block">
                    Regex check: <code className="bg-gray-200 px-1 py-0.5 rounded font-mono">^(\+251|0)(9|7)\d{8}$</code>
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Addis Ababa Delivery Sub-City
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {subCities.map((sc) => (
                      <button
                        key={sc.name}
                        type="button"
                        onClick={() => setSelectedSubCity(sc)}
                        className={`subcity-btn py-2 px-1 rounded border text-center text-xs font-semibold transition-colors cursor-pointer ${
                          selectedSubCity.name === sc.name
                            ? 'bg-blue-50 border-blue-600 text-blue-700'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {sc.name}
                        <span className="block text-[10px] font-mono">{sc.fee} ETB</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSimulate}
                  disabled={simLoading}
                  className="w-full py-2.5 rounded bg-diogo-brandBlue hover:bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {simLoading ? (
                    <>
                      <span className="animate-spin mr-1">◌</span>
                      <span>Dispatching USSD push to {phone}...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Dispatch Simulated TeleBirr USSD Push</span>
                    </>
                  )}
                </button>
              </div>

              <div className="md:col-span-6 bg-white p-4 rounded-lg border border-gray-200 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-gray-100 text-gray-500 font-sans">
                  <span className="font-semibold text-xs">Transaction Telemetry</span>
                  <span className="text-emerald-600 font-mono font-bold">API Ingress HTTP 200</span>
                </div>
                <div className="space-y-1 text-gray-700">
                  <div className="flex justify-between font-sans">
                    <span>Meal Combo (Doro Wat + Shiro):</span>
                    <span className="font-mono">{mealPrice}.00 ETB</span>
                  </div>
                  <div className="flex justify-between font-sans">
                    <span>Delivery Fee ({selectedSubCity.name}):</span>
                    <span className="font-mono">{selectedSubCity.fee}.00 ETB</span>
                  </div>
                  <div className="flex justify-between font-sans font-bold text-gray-900 pt-2 border-t border-gray-200 text-sm">
                    <span>Total Settlement:</span>
                    <span className="text-blue-700 font-mono">{totalPrice}.00 ETB</span>
                  </div>
                </div>

                <div
                  role="status"
                  aria-live="polite"
                  className={`p-3 rounded space-y-1 font-sans ${
                    simFeedback
                      ? simFeedback.success
                        ? 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                        : 'bg-red-50 border border-red-200 text-red-800'
                      : 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                  }`}
                >
                  {simFeedback ? (
                    simFeedback.success ? (
                      <>
                        <div className="font-bold flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span>TeleBirr Authorization Confirmed ✓</span>
                        </div>
                        <div>
                          <strong>Transaction Hash:</strong>{' '}
                          <code className="font-mono text-emerald-900">{simFeedback.txId}</code>
                        </div>
                        <div className="text-xs text-gray-700">{simFeedback.msg}</div>
                      </>
                    ) : (
                      <>
                        <div className="font-bold flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          <span>Validation Error</span>
                        </div>
                        <div className="text-xs">{simFeedback.msg}</div>
                      </>
                    )
                  ) : (
                    <>
                      <div className="font-bold flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <span>Ready to dispatch payment push</span>
                      </div>
                      <div className="text-xs text-gray-600">
                        Clicking the dispatch button simulates real-world USSD prompt dispatch to the user&apos;s mobile wallet.
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Automated QA Test Suite Runner */}
          {activeTab === 'qa' && (
            <div id="tab-qa" className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">
                    Automated Boundary QA &amp; Resilience Test Suite
                  </h5>
                  <p className="text-xs text-gray-500">
                    Live assertion runner simulating Jest and Functional Test matrix for Addis Eats fintech rails.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleRunQASuite}
                  disabled={qaRunning}
                  className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-75"
                >
                  <RotateCcw className={`w-3.5 h-3.5 ${qaRunning ? 'animate-spin' : ''}`} />
                  <span>{qaRunning ? 'Executing...' : 'Run All Tests (5)'}</span>
                </button>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full transition-all duration-300"
                  style={{ width: `${qaProgress}%` }}
                />
              </div>

              {/* Test Items Table */}
              <div className="border border-gray-200 rounded-lg overflow-hidden bg-white font-mono text-xs divide-y divide-gray-100">
                {qaTests.map((test) => (
                  <div key={test.id} className="p-3 flex items-center justify-between">
                    <div>
                      <span className="text-gray-900 font-bold block">{test.name}</span>
                      <span className="text-gray-500 text-[11px] font-sans">{test.scope}</span>
                    </div>
                    <div className="text-right">
                      <span
                        className={`font-bold inline-flex items-center gap-1 ${
                          test.status === 'PASS'
                            ? 'text-emerald-600'
                            : test.status === 'RUNNING'
                            ? 'text-amber-500'
                            : 'text-gray-500'
                        }`}
                      >
                        {test.status === 'PASS' && <CheckCircle className="w-3.5 h-3.5" />}
                        {test.status === 'RUNNING' && <span className="animate-spin mr-1">◌</span>}
                        <span>{test.assertion}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
