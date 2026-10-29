'use client';

import React, { useState } from 'react';
import {
  ExternalLink,
  Code,
  Search,
  CheckCircle,
  Database,
  ArrowUpRight,
  Layers,
  FileCode2,
  Cpu,
  Sparkles,
  Smartphone,
  Play,
  RotateCcw,
  ShieldCheck,
  Check,
  SmartphoneNfc,
  Eye,
  ShoppingBag,
  Clock,
  Lock,
  Utensils,
  Plus,
} from 'lucide-react';

type FilterCategory = 'all' | 'fullstack' | 'frontend' | 'mobile';

interface QATestCase {
  id: string;
  name: string;
  category: string;
  target: string;
  durationMs: number;
  status: 'idle' | 'running' | 'passed';
}

const INITIAL_TESTS: QATestCase[] = [
  {
    id: 'test-1',
    name: 'TeleBirr Phone Regex & Carrier Detect',
    category: 'Validation',
    target: 'Accepts +2519/+2517; rejects non-Ethiopian length & chars',
    durationMs: 14,
    status: 'passed',
  },
  {
    id: 'test-2',
    name: 'Sub-City Localized Delivery Engine',
    category: 'Calculations',
    target: 'Computes correct tiered delivery fee for 10 Addis sub-cities',
    durationMs: 18,
    status: 'passed',
  },
  {
    id: 'test-3',
    name: 'Cart Inventory Hard Ceilings',
    category: 'Boundary QA',
    target: 'Prevents quantity increment above available meal stock',
    durationMs: 9,
    status: 'passed',
  },
  {
    id: 'test-4',
    name: 'Delivery Delay Escalation (20% Voucher)',
    category: 'State Resilience',
    target: 'Triggers apology discount voucher injection on 30m delay',
    durationMs: 22,
    status: 'passed',
  },
  {
    id: 'test-5',
    name: 'Zustand LocalStorage Persist Hydration',
    category: 'Hydration',
    target: 'Rehydrates cart state seamlessly across browser reloads',
    durationMs: 11,
    status: 'passed',
  },
];

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [activeTabFlagship, setActiveTabFlagship] = useState<
    'preview' | 'overview' | 'simulator' | 'qa' | 'schema'
  >('preview');

  // TeleBirr Simulator State
  const [phone, setPhone] = useState('+251911223344');
  const [selectedSubCity, setSelectedSubCity] = useState<'Bole' | 'Kirkos' | 'Yeka' | 'Arada'>('Bole');
  const [simulating, setSimulating] = useState(false);
  const [simResult, setSimResult] = useState<{
    success: boolean;
    txId: string;
    carrier: string;
    totalAmount: number;
    message: string;
  } | null>(null);

  // QA Suite Interactive Runner State
  const [tests, setTests] = useState<QATestCase[]>(INITIAL_TESTS);
  const [isRunningQA, setIsRunningQA] = useState(false);

  // Validate Ethiopian TeleBirr Phone Number
  const isValidEthiopianPhone = (val: string) => {
    return /^(\+251|0)(9|7)\d{8}$/.test(val.replace(/\s+/g, ''));
  };

  const detectCarrier = (val: string) => {
    const clean = val.replace(/\s+/g, '');
    if (clean.startsWith('+2519') || clean.startsWith('09')) return 'Ethio Telecom (TeleBirr)';
    if (clean.startsWith('+2517') || clean.startsWith('07')) return 'Safaricom Ethiopia (M-PESA)';
    return 'Unknown Network';
  };

  const getSubCityFee = (subCity: string) => {
    switch (subCity) {
      case 'Bole': return 120;
      case 'Kirkos': return 100;
      case 'Yeka': return 140;
      case 'Arada': return 90;
      default: return 120;
    }
  };

  const handleSimulatePayment = () => {
    if (!isValidEthiopianPhone(phone)) return;
    setSimulating(true);
    setSimResult(null);

    setTimeout(() => {
      const carrier = detectCarrier(phone);
      const deliveryFee = getSubCityFee(selectedSubCity);
      const subtotal = 440;
      const totalAmount = subtotal + deliveryFee;
      const txId = `ET-TB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

      setSimResult({
        success: true,
        txId,
        carrier,
        totalAmount,
        message: `TeleBirr USSD push dispatched to ${phone}. Transaction authorized.`,
      });
      setSimulating(false);
    }, 1100);
  };

  const runAllQATests = () => {
    setIsRunningQA(true);
    setTests((prev) => prev.map((t) => ({ ...t, status: 'idle' })));

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < INITIAL_TESTS.length) {
        const idToUpdate = INITIAL_TESTS[currentIndex].id;
        setTests((prev) =>
          prev.map((t) => (t.id === idToUpdate ? { ...t, status: 'running' } : t))
        );

        setTimeout(() => {
          setTests((prev) =>
            prev.map((t) => (t.id === idToUpdate ? { ...t, status: 'passed' } : t))
          );
        }, 180);

        currentIndex++;
      } else {
        clearInterval(interval);
        setIsRunningQA(false);
      }
    }, 280);
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-canvas border-b border-cyber relative scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-agency-primary/10 border border-agency-primary/20 text-agency-primary text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected work &amp; case studies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-[-0.025em]">
              Featured Engineering Case Studies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
              Real-world systems constructed with modern architecture: full-stack Next.js App Router,
              TeleBirr payment gateways, modular React SPAs, and native Android applications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-canvas-card border border-cyber text-xs card-specular">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all active:scale-[0.98] ${
                activeFilter === 'all'
                  ? 'bg-agency-primary text-white font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Projects (4)
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-3 py-1.5 rounded-lg transition-all active:scale-[0.98] ${
                activeFilter === 'fullstack'
                  ? 'bg-agency-primary text-white font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Full-Stack &amp; Fintech
            </button>
            <button
              onClick={() => setActiveFilter('frontend')}
              className={`px-3 py-1.5 rounded-lg transition-all active:scale-[0.98] ${
                activeFilter === 'frontend'
                  ? 'bg-agency-primary text-white font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              SPAs &amp; Web
            </button>
            <button
              onClick={() => setActiveFilter('mobile')}
              className={`px-3 py-1.5 rounded-lg transition-all active:scale-[0.98] ${
                activeFilter === 'mobile'
                  ? 'bg-agency-primary text-white font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Mobile &amp; Kotlin
            </button>
          </div>
        </div>

        {/* =========================================================================
            FLAGSHIP CASE STUDY: ADDIS EATS FULL-STACK & TELEBIRR GATEWAY
           ========================================================================= */}
        {(activeFilter === 'all' || activeFilter === 'fullstack') && (
          <div className="rounded-2xl bg-canvas-card border border-cyber p-6 sm:p-8 mb-10 shadow-agency-card card-specular group transition-all duration-300 hover:border-agency-primary/40">
            {/* Top Badge Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-agency-primary/15 border border-agency-primary/30 text-agency-primary">
                  Flagship full-stack system
                </span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-agency-emerald/10 border border-agency-emerald/30 text-agency-emerald flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>QA: 100% passing test suite</span>
                </span>
                <span className="text-xs font-mono text-gray-400 hidden sm:inline">
                  Next.js App Router • TeleBirr Ingress • Zustand
                </span>
              </div>

              <a
                href="https://github.com/Greyshinobi2013"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-agency-primary hover:text-white transition-colors font-medium active:scale-[0.98]"
              >
                <span>Source repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Split Header Info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Narrative */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-agency-primary transition-colors">
                  Addis Eats — Next-Gen Food Ordering &amp; TeleBirr Gateway
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Full-stack food ordering platform architected with Next.js App Router, server/client component
                  boundaries, and TeleBirr checkout. Features real-time cart synchronization via Zustand, localized
                  Addis Ababa sub-city delivery fee calculations, live delivery tracking countdown, and an automated
                  delay escalation pipeline with 20% apology discount voucher injection.
                </p>

                {/* Evolution Triad Bar */}
                <div className="p-4 rounded-xl bg-canvas-elevated/80 border border-cyber space-y-2 text-xs">
                  <div className="text-agency-cyan font-mono font-bold text-[11px] uppercase tracking-wider">
                    // Multi-Edition Evolution &amp; Architectural Growth
                  </div>
                  <div className="text-gray-200">
                    <strong className="text-white">• Next.js Full-Stack (Sep 2026):</strong> App Router, dynamic route handlers, TeleBirr checkout, delivery tracking.
                  </div>
                  <div className="text-gray-300">
                    <strong className="text-gray-200">• React Modular SPA (Aug 2026):</strong> Zustand with persist middleware, frosted out-of-stock overlay for 16+ meals.
                  </div>
                  <div className="text-gray-400">
                    <strong className="text-gray-300">• Pure ES6+ Vanilla App (Jul 2026):</strong> Framework-free cart calculations, session-guarded admin portal.
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['Next.js 16 (App Router)', 'React 18', 'TypeScript', 'Zustand', 'TeleBirr API', 'Tailwind CSS'].map(
                    (tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Right Column: Architectural Highlights Card */}
              <div className="lg:col-span-5 rounded-xl bg-canvas-elevated border border-cyber p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-cyber">
                  <span className="font-mono text-xs font-bold text-gray-200 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-agency-primary" />
                    <span>Technical Architecture Specs</span>
                  </span>
                  <span className="text-[10px] font-mono text-agency-emerald flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-agency-emerald pulsing-dot" />
                    <span>Edge Verified</span>
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex items-center justify-between mb-1 font-semibold text-gray-200">
                      <span>State &amp; Cart Synchronization</span>
                      <span className="text-[10px] font-mono text-agency-cyan px-2 py-0.5 rounded bg-agency-cyan/10 border border-agency-cyan/20">
                        Zustand
                      </span>
                    </div>
                    <p className="text-gray-400 text-[11px] leading-snug">
                      Single source of truth handling real-time item quantities, inventory-hard ceilings, and sub-city localized delivery fees.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1 font-semibold text-gray-200">
                      <span>TeleBirr Phone Validation</span>
                      <span className="text-[10px] font-mono text-agency-primary px-2 py-0.5 rounded bg-agency-primary/10 border border-agency-primary/20">
                        Regex + Schema
                      </span>
                    </div>
                    <p className="text-gray-400 text-[11px] leading-snug">
                      Strict format validation for national phone patterns (<code className="text-agency-cyan">^(\+251|0)(9|7)\d&#123;8&#125;$</code>) ensuring zero malformed transactions.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1 font-semibold text-gray-200">
                      <span>Delay Escalation Pipeline</span>
                      <span className="text-[10px] font-mono text-agency-amber px-2 py-0.5 rounded bg-agency-amber/10 border border-agency-amber/20">
                        State Guard
                      </span>
                    </div>
                    <p className="text-gray-400 text-[11px] leading-snug">
                      30-minute delivery countdown with automated 20% apology voucher injection upon threshold breach.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-cyber flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span className="text-agency-emerald font-semibold">100% TypeScript Strict</span>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>

            {/* INTERACTIVE CASE STUDY THEATER TABS */}
            <div className="mt-8 pt-6 border-t border-cyber space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-agency-cyan font-semibold">
                  <Cpu className="w-4 h-4 text-agency-primary" />
                  <span>Interactive Engineering &amp; Product Inspector</span>
                </div>

                {/* Tab Controls */}
                <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-canvas-elevated border border-cyber text-xs card-specular">
                  <button
                    onClick={() => setActiveTabFlagship('preview')}
                    className={`px-3 py-1.5 rounded-lg transition-all active:scale-[0.98] flex items-center gap-1.5 ${
                      activeTabFlagship === 'preview'
                        ? 'bg-agency-primary text-white font-semibold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5 text-agency-cyan" />
                    <span>Live UI Mockup</span>
                  </button>

                  <button
                    onClick={() => setActiveTabFlagship('simulator')}
                    className={`px-3 py-1.5 rounded-lg transition-all active:scale-[0.98] flex items-center gap-1.5 ${
                      activeTabFlagship === 'simulator'
                        ? 'bg-agency-cyan text-white font-semibold'
                        : 'text-agency-cyan hover:text-white'
                    }`}
                  >
                    <SmartphoneNfc className="w-3.5 h-3.5" />
                    <span>TeleBirr Simulator</span>
                  </button>

                  <button
                    onClick={() => setActiveTabFlagship('qa')}
                    className={`px-3 py-1.5 rounded-lg transition-all active:scale-[0.98] flex items-center gap-1.5 ${
                      activeTabFlagship === 'qa'
                        ? 'bg-agency-emerald text-white font-semibold'
                        : 'text-agency-emerald hover:text-white'
                    }`}
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>QA Suite Runner</span>
                  </button>

                  <button
                    onClick={() => setActiveTabFlagship('overview')}
                    className={`px-3 py-1.5 rounded-lg transition-all active:scale-[0.98] ${
                      activeTabFlagship === 'overview'
                        ? 'bg-agency-primary text-white font-semibold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    System Flow
                  </button>

                  <button
                    onClick={() => setActiveTabFlagship('schema')}
                    className={`px-3 py-1.5 rounded-lg transition-all active:scale-[0.98] ${
                      activeTabFlagship === 'schema'
                        ? 'bg-agency-primary text-white font-semibold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Prisma Schema
                  </button>
                </div>
              </div>

              {/* Tab Display Panel */}
              <div className="rounded-xl bg-canvas border border-cyber p-5 sm:p-6 overflow-hidden">
                {/* 1. Live UI Product Mockup Frame */}
                {activeTabFlagship === 'preview' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between text-xs text-gray-400 pb-2 border-b border-cyber">
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <ShoppingBag className="w-4 h-4 text-agency-primary" />
                        <span>Interactive Product Frame • Addis Eats Food Ordering App</span>
                      </div>
                      <span className="text-xs text-agency-emerald font-medium">Interactive Preview</span>
                    </div>

                    {/* Mac Browser Mockup Frame */}
                    <div className="rounded-2xl border border-cyber bg-canvas-card overflow-hidden shadow-2xl card-specular">
                      {/* Browser Chrome Header */}
                      <div className="px-4 py-3 bg-canvas-elevated border-b border-cyber flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <div className="flex-1 max-w-sm mx-auto px-3 py-1 rounded-lg bg-canvas border border-cyber flex items-center justify-center gap-2 text-xs font-mono text-gray-400">
                          <Lock className="w-3 h-3 text-agency-emerald" />
                          <span>https://addis-eats.vercel.app/order</span>
                        </div>
                        <div className="text-xs text-gray-400">Next.js 16 + TeleBirr</div>
                      </div>

                      {/* Mockup Body Content */}
                      <div className="p-5 sm:p-6 space-y-6">
                        {/* Mock App Nav */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-cyber">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-agency-primary flex items-center justify-center text-white font-bold text-xs">
                              AE
                            </div>
                            <div>
                              <span className="font-extrabold text-white text-sm">Addis Eats</span>
                              <span className="text-xs text-gray-400 block">Deliver to: Bole, Addis Ababa</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-1 rounded-full bg-agency-primary/15 border border-agency-primary/30 text-agency-primary text-xs font-semibold">
                              🛒 Cart: 2 Items (440 ETB)
                            </span>
                          </div>
                        </div>

                        {/* Guaranteed Delivery Notice Banner */}
                        <div className="p-3 rounded-xl bg-agency-cyan/10 border border-agency-cyan/25 flex items-center gap-2.5 text-xs text-agency-cyan">
                          <Clock className="w-4 h-4 shrink-0" />
                          <span>
                            <strong>30-Min Guarantee:</strong> If driver ETA exceeds 30m, 20% discount voucher (<code className="text-white font-bold font-mono">ADDISLATE20</code>) auto-injects!
                          </span>
                        </div>

                        {/* Menu Items Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {/* Meal 1 */}
                          <div className="p-4 rounded-xl bg-canvas border border-cyber space-y-3 relative">
                            <div className="flex justify-between items-start">
                              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-agency-primary/10 text-agency-primary border border-agency-primary/20">
                                Popular
                              </span>
                              <span className="font-mono text-xs font-bold text-white">280 ETB</span>
                            </div>
                            <div>
                              <h5 className="font-bold text-white text-sm">Special Doro Wat</h5>
                              <p className="text-xs text-gray-400 mt-1 leading-snug">
                                Slow-simmered chicken leg in berbere with hard-boiled egg &amp; teff injera.
                              </p>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t border-cyber/50 text-xs font-mono">
                              <span className="text-agency-emerald">Stock: 3 left</span>
                              <button className="px-2 py-1 rounded bg-agency-primary text-white font-semibold text-xs active:scale-[0.98]">
                                In Cart (1)
                              </button>
                            </div>
                          </div>

                          {/* Meal 2 */}
                          <div className="p-4 rounded-xl bg-canvas border border-cyber space-y-3 relative">
                            <div className="flex justify-between items-start">
                              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-agency-emerald/10 text-agency-emerald border border-agency-emerald/20">
                                Fast Prep
                              </span>
                              <span className="font-mono text-xs font-bold text-white">160 ETB</span>
                            </div>
                            <div>
                              <h5 className="font-bold text-white text-sm">Shiro Tegabino</h5>
                              <p className="text-xs text-gray-400 mt-1 leading-snug">
                                Sizzling seasoned chickpea claypot prepared with spiced clarified butter.
                              </p>
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t border-cyber/50 text-xs font-mono">
                              <span className="text-agency-emerald">Stock: 8 left</span>
                              <button className="px-2 py-1 rounded bg-agency-primary text-white font-semibold text-xs active:scale-[0.98]">
                                In Cart (1)
                              </button>
                            </div>
                          </div>

                          {/* Meal 3: Frosted Out-of-Stock Overlay (Feature from CV) */}
                          <div className="p-4 rounded-xl bg-canvas border border-cyber space-y-3 relative overflow-hidden">
                            {/* Frosted out-of-stock overlay */}
                            <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center text-center p-2">
                              <span className="text-xs font-semibold text-agency-rose px-2.5 py-1 rounded bg-agency-rose/15 border border-agency-rose/30">
                                Sold Out
                              </span>
                              <span className="text-xs text-gray-300 mt-1">
                                Frosted inventory ceiling triggered
                              </span>
                            </div>

                            <div className="flex justify-between items-start opacity-40">
                              <span className="text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-400">
                                Classic
                              </span>
                              <span className="font-mono text-xs text-gray-400">240 ETB</span>
                            </div>
                            <div className="opacity-40">
                              <h5 className="font-bold text-white text-sm">Tibs Firfir Special</h5>
                              <p className="text-xs text-gray-400 mt-1 leading-snug">
                                Sautéed prime beef cubes infused in berbere gravy with torn injera.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Order Checkout Bar */}
                        <div className="p-4 rounded-xl bg-canvas-elevated border border-cyber flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                          <div>
                            <span className="text-gray-400 block text-xs">Subtotal (440 ETB) + Bole Delivery (120 ETB):</span>
                            <span className="text-base font-extrabold text-white font-mono">560.00 ETB Total</span>
                          </div>

                          <div className="flex items-center gap-2 w-full sm:w-auto">
                            <button
                              onClick={() => setActiveTabFlagship('simulator')}
                              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-agency-primary hover:bg-agency-primary-hover text-white font-semibold flex items-center justify-center gap-1.5 transition-all shadow-agency-sm active:scale-[0.98]"
                            >
                              <SmartphoneNfc className="w-3.5 h-3.5" />
                              <span>Proceed with TeleBirr Payment</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. System Flow Overview */}
                {activeTabFlagship === 'overview' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="text-xs font-mono text-agency-cyan font-bold">
                      // Architectural Data Flow &amp; Edge Synchronization
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div className="p-4 rounded-xl bg-canvas-elevated border border-cyber space-y-2">
                        <div className="text-agency-primary font-mono font-bold text-[11px] uppercase">
                          1. Server &amp; Client Boundary
                        </div>
                        <p className="text-gray-300 leading-relaxed text-[11px]">
                          Static views render via React Server Components at build time. Interactivity is isolated
                          to leaf components (cart drawers, phone validation, live delay timers), minimizing client JS bundles.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-canvas-elevated border border-cyber space-y-2">
                        <div className="text-agency-cyan font-mono font-bold text-[11px] uppercase">
                          2. TeleBirr Fintech Ingress
                        </div>
                        <p className="text-gray-300 leading-relaxed text-[11px]">
                          User enters Ethiopian mobile number (+2519... / +2517...). Dual-pass validation runs on client
                          and server route handler before sending signed payment request payload to TeleBirr gateway.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-canvas-elevated border border-cyber space-y-2">
                        <div className="text-agency-emerald font-mono font-bold text-[11px] uppercase">
                          3. Atomic Settlement &amp; QA
                        </div>
                        <p className="text-gray-300 leading-relaxed text-[11px]">
                          Inventory decrement is guarded against race conditions. Delivery countdown initiates with an
                          automated trigger that injects 20% apology discount voucher if driver ETA exceeds 30 minutes.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Interactive TeleBirr Simulator */}
                {activeTabFlagship === 'simulator' && (
                  <div className="space-y-5 animate-fade-in">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-cyber">
                      <div>
                        <h4 className="font-bold text-white text-sm">
                          Interactive TeleBirr Payment &amp; Sub-City Calculator Simulator
                        </h4>
                        <p className="text-xs text-gray-400">
                          Test the real Ethiopian phone regex validator (<code className="text-agency-cyan">^(\+251|0)(9|7)\d&#123;8&#125;$</code>) and localized delivery fee logic.
                        </p>
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-agency-emerald/10 text-agency-emerald border border-agency-emerald/30 font-semibold">
                        LIVE SIMULATOR
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      {/* Controls */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-mono text-gray-300 mb-1.5 font-medium">
                            Ethiopian Phone Number:
                          </label>
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+251911223344"
                              className="w-full px-3.5 py-2 rounded-xl bg-canvas-elevated border border-cyber text-white font-mono text-xs focus:border-agency-primary"
                            />
                            <button
                              onClick={() => setPhone('+251712345678')}
                              className="px-2.5 py-2 rounded-xl bg-canvas-elevated border border-cyber text-[10px] font-mono text-gray-300 hover:text-white shrink-0"
                              title="Test Safaricom"
                            >
                              Safaricom
                            </button>
                            <button
                              onClick={() => setPhone('0911223344')}
                              className="px-2.5 py-2 rounded-xl bg-canvas-elevated border border-cyber text-[10px] font-mono text-gray-300 hover:text-white shrink-0"
                              title="Test Ethio Telecom (Local 09)"
                            >
                              Ethio Tel
                            </button>
                          </div>
                          <div className="mt-1.5 flex items-center justify-between text-[11px] font-mono">
                            <span className={isValidEthiopianPhone(phone) ? 'text-agency-emerald' : 'text-agency-rose'}>
                              {isValidEthiopianPhone(phone) ? '✔ Valid Ethiopian Pattern' : '✖ Invalid Phone Pattern'}
                            </span>
                            <span className="text-gray-400">Detected: {detectCarrier(phone)}</span>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-gray-300 mb-1.5 font-medium">
                            Addis Ababa Sub-City Destination:
                          </label>
                          <div className="grid grid-cols-4 gap-2 text-xs font-mono">
                            {(['Bole', 'Kirkos', 'Yeka', 'Arada'] as const).map((sc) => (
                              <button
                                key={sc}
                                onClick={() => setSelectedSubCity(sc)}
                                className={`py-2 px-1.5 rounded-xl border text-center transition-all ${
                                  selectedSubCity === sc
                                    ? 'bg-agency-primary text-white border-agency-primary font-bold shadow-sm'
                                    : 'bg-canvas-elevated border-cyber text-gray-300 hover:border-gray-500'
                                }`}
                              >
                                {sc}
                                <span className="block text-[10px] opacity-75">{getSubCityFee(sc)} ETB</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <button
                          onClick={handleSimulatePayment}
                          disabled={!isValidEthiopianPhone(phone) || simulating}
                          className="w-full py-2.5 rounded-xl bg-agency-primary hover:bg-agency-primary-hover disabled:opacity-50 text-white text-xs font-semibold transition-all shadow-agency-sm flex items-center justify-center gap-2 active:scale-[0.98]"
                        >
                          {simulating ? (
                            <>
                              <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>Dispatching USSD push via TeleBirr...</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5" />
                              <span>Dispatch simulated TeleBirr checkout</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Receipt Preview */}
                      <div className="rounded-xl bg-canvas-elevated border border-cyber p-4 font-mono text-xs space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-cyber text-gray-400 text-xs font-sans">
                          <span className="font-medium">Transaction telemetry</span>
                          <span className="text-agency-emerald font-mono">HTTP 200 Ingress</span>
                        </div>

                        <div className="space-y-1.5 text-xs text-gray-300">
                          <div className="flex justify-between font-sans">
                            <span>Subtotal (2x Combo Meals):</span>
                            <span className="font-mono">440.00 ETB</span>
                          </div>
                          <div className="flex justify-between font-sans">
                            <span>Delivery Fee ({selectedSubCity}):</span>
                            <span className="font-mono">{getSubCityFee(selectedSubCity)}.00 ETB</span>
                          </div>
                          <div className="flex justify-between font-bold text-white pt-2 border-t border-cyber/50 font-sans">
                            <span>Total Payable:</span>
                            <span className="text-agency-emerald font-mono">
                              {440 + getSubCityFee(selectedSubCity)}.00 ETB
                            </span>
                          </div>
                        </div>

                        {simResult && (
                          <div className="mt-3 p-3 rounded-lg bg-agency-emerald/10 border border-agency-emerald/30 text-agency-emerald space-y-1 animate-fade-in text-xs font-sans">
                            <div className="font-bold flex items-center gap-1.5">
                              <CheckCircle className="w-3.5 h-3.5" />
                              <span>TeleBirr authorization confirmed</span>
                            </div>
                            <div>Transaction Hash: <strong className="text-white font-mono">{simResult.txId}</strong></div>
                            <div className="text-gray-300">{simResult.message}</div>
                            <div className="text-xs text-agency-cyan font-medium pt-1">
                              • 30-minute delivery countdown active. Delay escalation voucher ready.
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Interactive QA Suite */}
                {activeTabFlagship === 'qa' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-cyber">
                      <div>
                        <h4 className="font-bold text-white text-sm">
                          Automated QA Test Suite &amp; Boundary Assertions
                        </h4>
                        <p className="text-xs text-gray-400">
                          Functional test matrix verifying boundary values, idempotency, and state persistence.
                        </p>
                      </div>

                      <button
                        onClick={runAllQATests}
                        disabled={isRunningQA}
                        className="px-3.5 py-1.5 rounded-xl bg-agency-emerald hover:bg-agency-emerald/90 text-white text-xs font-semibold transition-all flex items-center gap-1.5 disabled:opacity-50 active:scale-[0.98]"
                      >
                        {isRunningQA ? (
                          <>
                            <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Running suite...</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5" />
                            <span>Run QA test suite</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full bg-canvas rounded-full h-1.5 overflow-hidden border border-cyber">
                      <div
                        className="bg-agency-emerald h-full transition-all duration-300 ease-out"
                        style={{
                          width: `${(tests.filter((t) => t.status === 'passed').length / tests.length) * 100}%`,
                        }}
                      />
                    </div>

                    {/* Test Table */}
                    <div className="rounded-xl border border-cyber overflow-hidden bg-canvas-elevated">
                      <table className="w-full text-xs font-mono text-left">
                        <thead>
                          <tr className="bg-canvas border-b border-cyber text-gray-400 text-xs">
                            <th className="p-3 font-semibold font-sans">Test Specification</th>
                            <th className="p-3 font-semibold hidden sm:table-cell font-sans">Category</th>
                            <th className="p-3 font-semibold hidden md:table-cell font-sans">Assertion Detail</th>
                            <th className="p-3 font-semibold text-right font-sans">Result</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-cyber/40 text-gray-300">
                          {tests.map((t) => (
                            <tr key={t.id} className="hover:bg-canvas-card/60 transition-colors">
                              <td className="p-3 font-semibold text-white font-sans">
                                {t.name}
                              </td>
                              <td className="p-3 text-agency-cyan text-xs hidden sm:table-cell font-sans">
                                {t.category}
                              </td>
                              <td className="p-3 text-gray-400 text-xs hidden md:table-cell font-sans">
                                {t.target}
                              </td>
                              <td className="p-3 text-right">
                                {t.status === 'running' && (
                                  <span className="inline-flex items-center gap-1 text-agency-amber text-xs font-sans">
                                    <div className="w-2.5 h-2.5 border-2 border-agency-amber/30 border-t-agency-amber rounded-full animate-spin" />
                                    <span>Running...</span>
                                  </span>
                                )}
                                {t.status === 'passed' && (
                                  <span className="inline-flex items-center gap-1 text-agency-emerald font-semibold text-xs font-mono">
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Pass ({t.durationMs}ms)</span>
                                  </span>
                                )}
                                {t.status === 'idle' && (
                                  <span className="text-gray-500 text-xs font-sans">Queued</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="p-3 rounded-xl bg-canvas-elevated/80 border border-cyber flex items-center justify-between text-xs font-sans">
                      <span className="text-agency-emerald font-semibold flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4" />
                        <span>Coverage: {tests.filter((t) => t.status === 'passed').length}/5 Passing Tests • 0 Regressions</span>
                      </span>
                      <span className="text-gray-400 text-xs">Framework: Jest &amp; Boundary Assertions</span>
                    </div>
                  </div>
                )}

                {/* 5. Prisma Schema */}
                {activeTabFlagship === 'schema' && (
                  <div className="space-y-3 font-mono text-xs animate-fade-in">
                    <div className="flex items-center justify-between text-gray-400 text-xs">
                      <span>prisma/schema.prisma</span>
                      <span className="text-agency-primary font-medium">PostgreSQL Data Contract</span>
                    </div>
                    <pre className="p-4 rounded-xl bg-canvas-elevated border border-cyber text-gray-300 text-[11px] leading-relaxed overflow-x-auto">
{`model Order {
  id              String         @id @default(uuid())
  orderNumber     String         @unique
  customerPhone   String         // Validated Ethiopian Regex: ^(\\+251|0)(9|7)\\d{8}$
  subCity         String         // Bole, Kirkos, Yeka, Arada
  deliveryFee     Decimal        @db.Decimal(10, 2)
  totalAmount     Decimal        @db.Decimal(10, 2)
  paymentStatus   PaymentStatus  @default(PENDING) // PENDING, SETTLED, FAILED
  voucherCode     String?        // Injected upon >30m delivery breach
  items           OrderItem[]
  createdAt       DateTime       @default(now())

  @@index([customerPhone])
  @@index([createdAt])
}`}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            SECONDARY SHOWCASES: REACT SPA & VANILLA ES6+ (Dual Column)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* SHOWCASE 2: Addis Eats React SPA Edition */}
          {(activeFilter === 'all' || activeFilter === 'frontend') && (
            <div className="rounded-2xl bg-canvas-card border border-cyber p-6 sm:p-7 flex flex-col justify-between shadow-agency-card card-specular group transition-all duration-300 hover:border-agency-primary/40">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-agency-cyan/10 border border-agency-cyan/30 text-agency-cyan">
                    Modular SPA • Aug 2026
                  </span>
                  <span className="text-xs text-gray-400 font-mono">React 18 • Vite • Zustand</span>
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-agency-cyan transition-colors">
                  Addis Eats — Modular React Single-Page Application
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Modular single-page application built using Zustand with persist middleware for reliable local storage
                  state syncing, real-time stock decrements, and frosted out-of-stock overlay handling for 16+ meals.
                </p>

                {/* Code Snippet Window */}
                <div className="rounded-xl bg-canvas border border-cyber overflow-hidden font-mono text-[11px]">
                  <div className="px-3.5 py-2 bg-canvas-elevated border-b border-cyber flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-gray-400 text-[10px]">store/useCartStore.ts</span>
                    </div>
                    <span className="text-gray-400 text-[10px] font-sans font-medium">Zustand Persist</span>
                  </div>

                  <pre className="p-3.5 text-gray-300 overflow-x-auto leading-relaxed">
{`export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      stock: 16, // Real-time stock decrement
      decrementStock: (id) => set(s => handleStock(s, id)),
    }),
    { name: 'addis-eats-cart-storage' }
  )
);`}
                  </pre>
                </div>

                <div className="space-y-2 text-xs text-gray-300 pt-1 font-sans">
                  <div className="flex items-start gap-2">
                    <span className="text-agency-cyan font-bold mt-0.5">✔</span>
                    <div>
                      <strong className="text-white">Persist State Hydration:</strong> Zero state loss across browser reloads or temporary network drops.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-agency-cyan font-bold mt-0.5">✔</span>
                    <div>
                      <strong className="text-white">Real-Time Stock Decrement:</strong> Automated frosted overlay on exhausted menu items.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-agency-cyan font-bold mt-0.5">✔</span>
                    <div>
                      <strong className="text-white">Sales Telemetry:</strong> Integrated Recharts for visual sales analytics.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-cyber flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {['React 18', 'Vite', 'Zustand', 'Recharts'].map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/Greyshinobi2013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-agency-cyan hover:text-white transition-colors active:scale-[0.98] font-medium"
                >
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* SHOWCASE 3: Vanilla ES6+ Web App & Admin Dashboard */}
          {(activeFilter === 'all' || activeFilter === 'frontend') && (
            <div className="rounded-2xl bg-canvas-card border border-cyber p-6 sm:p-7 flex flex-col justify-between shadow-agency-card card-specular group transition-all duration-300 hover:border-agency-primary/40">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-agency-amber/10 border border-agency-amber/30 text-agency-amber">
                    Pure ES6+ • Jul 2026
                  </span>
                  <span className="text-xs text-gray-400 font-mono">HTML5 • CSS3 • LocalStorage</span>
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-agency-amber transition-colors">
                  Addis Eats — Vanilla Web App &amp; Admin Dashboard
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Responsive food ordering application and administrative operations dashboard developed from the ground
                  up using pure HTML5, CSS3, and ECMAScript (ES6+) without external UI frameworks.
                </p>

                {/* Code Snippet Window */}
                <div className="rounded-xl bg-canvas border border-cyber overflow-hidden font-mono text-[11px]">
                  <div className="px-3.5 py-2 bg-canvas-elevated border-b border-cyber flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-gray-400 text-[10px]">auth/sessionGuard.js</span>
                    </div>
                    <span className="text-gray-400 text-[10px] font-sans font-medium">Pure JS Auth Guard</span>
                  </div>

                  <pre className="p-3.5 text-gray-300 overflow-x-auto leading-relaxed">
{`function guardAdminRoute() {
  const token = sessionStorage.getItem('admin_token');
  if (!token || !verifySession(token)) {
    window.location.replace('/login.html');
  }
}`}
                  </pre>
                </div>

                <div className="space-y-2 text-xs text-gray-300 pt-1 font-sans">
                  <div className="flex items-start gap-2">
                    <span className="text-agency-amber font-bold mt-0.5">✔</span>
                    <div>
                      <strong className="text-white">Zero External Dependencies:</strong> Lightweight pure JS client cart calculations and live filtering.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-agency-amber font-bold mt-0.5">✔</span>
                    <div>
                      <strong className="text-white">Session Guard Security:</strong> Token verification with SessionStorage persistence.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-agency-amber font-bold mt-0.5">✔</span>
                    <div>
                      <strong className="text-white">Regression Testing:</strong> Verified route redirect integrity across positive and negative scenarios.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-cyber flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {['HTML5', 'CSS3', 'JavaScript ES6+', 'SessionStorage'].map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/Greyshinobi2013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-agency-amber hover:text-white transition-colors active:scale-[0.98] font-medium"
                >
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* =========================================================================
            SHOWCASE 4: ANDROID DEVELOPER APPRENTICESHIP (M.A.D TECHNOLOGIES)
           ========================================================================= */}
        {(activeFilter === 'all' || activeFilter === 'mobile') && (
          <div className="rounded-2xl bg-canvas-card border border-cyber p-6 sm:p-7 shadow-agency-card card-specular group transition-all duration-300 hover:border-agency-primary/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-agency-rose/10 border border-agency-rose/30 text-agency-rose">
                    Native Mobile Apprenticeship
                  </span>
                  <span className="text-xs text-gray-400">
                    M.A.D Technologies • Addis Ababa, Ethiopia (2022 — 2023)
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-agency-rose transition-colors">
                  Native Android Developer Apprenticeship &amp; Dictionary Utility
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Collaborated on commercial native Android applications, translating Figma wireframes into responsive
                  Material Design layouts using RecyclerView, Java, and Kotlin. Built a standalone Dictionary mobile app
                  with dynamic SearchView querying and local SQLite database caching.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {['Android Studio', 'Java', 'Kotlin', 'SQLite', 'RecyclerView', 'Material Design 3'].map((item, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 p-4 rounded-xl bg-canvas-elevated border border-cyber space-y-2 text-xs">
                <div className="text-agency-rose font-bold flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4" />
                  <span>Key Engineering Deliverables</span>
                </div>
                <ul className="space-y-1.5 text-gray-300 text-xs list-disc list-outside pl-4">
                  <li>Translated Figma wireframes into RecyclerView adapters.</li>
                  <li>Engineered local SQLite caching for instant offline word lookups.</li>
                  <li>Conducted Git feature branch reviews and memory leak debugging.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
