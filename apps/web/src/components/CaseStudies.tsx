'use client';

import React, { useState } from 'react';
import { useRecruiterStore } from '@/store/useRecruiterStore';
import {
  ExternalLink,
  Code,
  Search,
  Bookmark,
  CheckCircle,
  Database,
  ArrowUpRight,
  Layers,
  FileCode2,
  Terminal,
  Cpu,
} from 'lucide-react';

export default function CaseStudies() {
  const { isRecruiterMode } = useRecruiterStore();
  const [activeTabFlagship, setActiveTabFlagship] = useState<'overview' | 'schema' | 'store' | 'telebirr'>('overview');
  const [testPhone, setTestPhone] = useState('+251911223344');
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  // Validate Ethiopian TeleBirr Phone Number (+2519... or +2517...)
  const handlePhoneTest = (val: string) => {
    setTestPhone(val);
    const regex = /^(\+251|0)(9|7)\d{8}$/;
    setIsPhoneValid(regex.test(val));
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-canvas border-b border-cyber relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-neon-pink font-semibold tracking-wider">
            <span>:: PROOF OF EXECUTION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Featured Engineering Case Studies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-3xl leading-relaxed">
            Deep dives into full-stack web applications, distributed banking transfer logic, and native offline-first
            mobile apps.
          </p>
        </div>

        {/* SHOWCASE 1: Flagship Addis Eats */}
        <div className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all p-6 sm:p-8 mb-10 shadow-card-glow group">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded bg-neon-pink/15 border border-neon-pink text-neon-pink tracking-wider">
                FULL-STACK WEB APP
              </span>
              <span className="font-mono text-xs text-gray-400">Next.js 14 + TeleBirr API</span>
            </div>
            <a
              href="https://github.com/NatnaelGetachew"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-neon-pink hover:text-white transition-colors"
            >
              <span>VIEW REPOSITORY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Overview */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight group-hover:text-neon-cyan transition-colors">
                Addis Eats — Next-Gen Food Ordering &amp; TeleBirr Gateway
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A high-velocity food delivery platform featuring real-time cart state management via Zustand, localized
                Addis Ababa sub-city delivery fee calculations, strict Ethiopian phone validation regex (+251), and
                administrative order synchronization.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300">
                  Next.js App Router
                </span>
                <span className="px-2.5 py-1 rounded bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300">
                  TypeScript
                </span>
                <span className="px-2.5 py-1 rounded bg-canvas-elevated border border-cyber text-xs font-mono text-neon-pink">
                  Zustand
                </span>
                <span className="px-2.5 py-1 rounded bg-canvas-elevated border border-cyber text-xs font-mono text-neon-cyan">
                  TeleBirr Engine
                </span>
              </div>

              {/* View Repository CTA Button */}
              <div className="pt-2">
                <a
                  href="https://github.com/NatnaelGetachew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-neon-pink hover:bg-neon-magenta text-white font-mono text-xs font-bold transition-all shadow-pink-glow"
                >
                  <span>VIEW REPOSITORY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Technical Specifications Panel */}
            <div className="lg:col-span-5 rounded-lg bg-canvas-elevated border border-cyber p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-cyber">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-200">
                  <span className="text-neon-cyan">♥</span> Technical Specifications
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-neon-emerald">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-emerald pulsing-dot"></span>
                  <span>Production Stack</span>
                </div>
              </div>

              {/* Spec Rows */}
              <div className="space-y-3.5 text-xs">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-200">State &amp; Cart Synchronization</span>
                    <span className="font-mono text-[10px] text-neon-cyan bg-neon-cyan/10 px-1.5 py-0.5 rounded border border-neon-cyan/30">
                      Zustand
                    </span>
                  </div>
                  <p className="text-gray-400 text-[11px] leading-snug">
                    Single source of truth handling real-time item quantities, inventory-hard ceilings, and sub-city localized delivery fees.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-200">TeleBirr Phone Validation</span>
                    <span className="font-mono text-[10px] text-neon-pink bg-neon-pink/10 px-1.5 py-0.5 rounded border border-neon-pink/30">
                      Regex + Schema
                    </span>
                  </div>
                  <p className="text-gray-400 text-[11px] leading-snug">
                    Strict format validation for national phone patterns (+2519... / +2517...) ensuring seamless payment request dispatch.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-200">Admin Operations Dashboard</span>
                    <span className="font-mono text-[10px] text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">
                      Server Actions
                    </span>
                  </div>
                  <p className="text-gray-400 text-[11px] leading-snug">
                    Full menu CRUD interface with atomic inventory status toggling and analytics-ready order logs.
                  </p>
                </div>
              </div>

              {/* Panel Footer */}
              <div className="pt-3 border-t border-cyber flex items-center justify-between font-mono text-[10px] text-gray-400">
                <span className="flex items-center gap-1.5 text-neon-emerald">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-emerald"></span>
                  Live at Local Edge
                </span>
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* RECRUITER MODE EXPANDED INSPECTOR FOR FLAGSHIP APP */}
          {isRecruiterMode && (
            <div className="mt-6 pt-5 border-t border-neon-pink/30 space-y-3 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                <div className="flex items-center gap-2 font-mono text-xs text-neon-pink font-bold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>RECRUITER DEEP-DIVE: UNDER-THE-HOOD IMPLEMENTATION</span>
                </div>
                {/* Tabs */}
                <div className="flex gap-1.5 font-mono text-[11px]">
                  <button
                    onClick={() => setActiveTabFlagship('overview')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTabFlagship === 'overview'
                        ? 'bg-neon-pink text-white font-bold'
                        : 'bg-canvas-elevated text-gray-400 hover:text-white'
                    }`}
                  >
                    Architecture
                  </button>
                  <button
                    onClick={() => setActiveTabFlagship('schema')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTabFlagship === 'schema'
                        ? 'bg-neon-pink text-white font-bold'
                        : 'bg-canvas-elevated text-gray-400 hover:text-white'
                    }`}
                  >
                    Prisma Schema
                  </button>
                  <button
                    onClick={() => setActiveTabFlagship('store')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTabFlagship === 'store'
                        ? 'bg-neon-pink text-white font-bold'
                        : 'bg-canvas-elevated text-gray-400 hover:text-white'
                    }`}
                  >
                    Zustand Store Slice
                  </button>
                  <button
                    onClick={() => setActiveTabFlagship('telebirr')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTabFlagship === 'telebirr'
                        ? 'bg-neon-pink text-white font-bold'
                        : 'bg-canvas-elevated text-gray-400 hover:text-white'
                    }`}
                  >
                    TeleBirr Validator
                  </button>
                </div>
              </div>

              {/* Tab Contents */}
              <div className="rounded-lg bg-canvas border border-cyber p-4 font-mono text-xs overflow-x-auto">
                {activeTabFlagship === 'overview' && (
                  <div className="space-y-2 text-gray-300">
                    <p className="text-neon-cyan font-bold">
                      // Architectural Data Flow &amp; Edge Sync
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px] pt-1">
                      <div className="p-3 rounded bg-canvas-elevated border border-cyber">
                        <span className="text-neon-pink font-bold block mb-1">1. Client Hydration</span>
                        <span>Zustand store hydrates items with local storage fallback; inventory ceilings checked on increment.</span>
                      </div>
                      <div className="p-3 rounded bg-canvas-elevated border border-cyber">
                        <span className="text-neon-cyan font-bold block mb-1">2. Payment Ingress</span>
                        <span>Customer provides Ethiopian mobile (+2519...); regex validated client + server before invoice generation.</span>
                      </div>
                      <div className="p-3 rounded bg-canvas-elevated border border-cyber">
                        <span className="text-neon-emerald font-bold block mb-1">3. Atomic Settlement</span>
                        <span>PostgreSQL transaction reserves inventory rows with SELECT FOR UPDATE preventing oversell.</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTabFlagship === 'schema' && (
                  <pre className="text-gray-300 text-[11px] leading-snug">
{`model Order {
  id              String         @id @default(uuid())
  orderNumber     String         @unique
  customerPhone   String         // Validated (+2519... or +2517...)
  subCity         String         // Bole, Kirkos, Yeka, Arada, etc.
  deliveryFee     Decimal        @db.Decimal(10, 2)
  totalAmount     Decimal        @db.Decimal(10, 2)
  paymentStatus   PaymentStatus  @default(PENDING)
  voucherCode     String?        // e.g. "ADDISLATE20"
  items           OrderItem[]
  createdAt       DateTime       @default(now())

  @@index([customerPhone])
  @@index([createdAt])
}`}
                  </pre>
                )}

                {activeTabFlagship === 'store' && (
                  <pre className="text-gray-300 text-[11px] leading-snug">
{`interface CartStore {
  items: CartItem[];
  voucher: { code: string; discountPct: number } | null;
  addItem: (item: MenuItem) => void;
  updateQuantity: (id: string, qty: number) => void;
  applyVoucher: (code: string) => boolean;
  clearCart: () => void;
  getSubtotal: () => number;
}`}
                  </pre>
                )}

                {activeTabFlagship === 'telebirr' && (
                  <div className="space-y-3">
                    <p className="text-gray-300 text-[11px]">
                      Test national Ethiopian phone regex validator (<code className="text-neon-cyan">/^(\+251|0)(9|7)\d&#123;8&#125;$/</code>):
                    </p>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={testPhone}
                        onChange={(e) => handlePhoneTest(e.target.value)}
                        placeholder="+251911223344"
                        className="px-3 py-1.5 rounded bg-canvas-elevated border border-cyber text-white font-mono text-xs focus:outline-none focus:border-neon-cyan"
                      />
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded border ${
                          isPhoneValid
                            ? 'bg-neon-emerald/10 border-neon-emerald text-neon-emerald'
                            : 'bg-neon-pink/10 border-neon-pink text-neon-pink'
                        }`}
                      >
                        {isPhoneValid ? '✔ VALID ETHIOPIAN PATTERN' : '✖ INVALID TELEBIRR FORMAT'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* SHOWCASE 2 & 3: AddisBank & Android Lexicon (Dual Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SHOWCASE 2: AddisBank */}
          <div className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-card-glow group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-400 tracking-wider">
                  SYSTEMS ARCHITECTURE
                </span>
                <span className="font-mono text-xs text-gray-400">Python • Graphs</span>
              </div>

              <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-neon-cyan transition-colors">
                AddisBank — Core Banking &amp; Liquidity Transfer Graph
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Enterprise-grade Python core banking engine modeling multi-tier accounts, ledger immutability, and
                directed graph liquidity routing between financial branch nodes.
              </p>

              {/* Code Snippet Window */}
              <div className="rounded-lg bg-canvas border border-cyber overflow-hidden font-mono text-[11px]">
                {/* Code Window Header */}
                <div className="px-3 py-2 bg-canvas-elevated border-b border-cyber flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
                    <span className="ml-2 text-gray-400 text-[10px]">transfers/graph.py</span>
                  </div>
                  <span className="text-gray-500 text-[10px]">PYTHON • GRAPH</span>
                </div>

                <pre className="p-3 text-gray-300 overflow-x-auto leading-relaxed">
{`class TransfersGraph:
    def __init__(self):
        self.adj = defaultdict(list)
    
    def route_liquidity(self, src: Branch, dst: Branch, amt: Decimal):
        # Validate node branch-limits and liquidity path
        path = self._find_shortest_liquidity_path(src, dst)
        return self._execute_atomic_transfer(path, amt)`}
                </pre>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-2.5 text-xs text-gray-300 pt-1">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold mt-0.5">[&gt;]</span>
                  <div>
                    <strong className="text-white">Design Patterns:</strong> Implemented Factory pattern for Tiered Accounts, Singleton Registry for currency rates, and Decorators for audit logging.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold mt-0.5">[&gt;]</span>
                  <div>
                    <strong className="text-white">Directed Graph Routing:</strong> <code className="text-neon-cyan font-mono">TransfersGraph</code> calculates optimal inter-branch fund routing with zero balance leakage.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold mt-0.5">[&gt;]</span>
                  <div>
                    <strong className="text-white">Automated Testing:</strong> 100% test coverage with <code className="text-neon-pink font-mono">unittest</code> covering concurrency limits and invariant safeguards.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 mt-6 border-t border-cyber/60 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  Python 3.11
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  Graphs
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-amber-400">
                  unittest
                </span>
              </div>
              <a
                href="https://github.com/NatnaelGetachew"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-neon-cyan hover:text-white transition-colors"
              >
                <span>View Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* SHOWCASE 3: Android Lexicon */}
          <div className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-card-glow group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-neon-emerald/10 border border-neon-emerald/30 text-neon-emerald tracking-wider">
                  MOBILE ENGINEERING
                </span>
                <span className="font-mono text-xs text-gray-400">Android SDK • SQLite</span>
              </div>

              <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-neon-cyan transition-colors">
                Native Android Lexicon &amp; Offline Dictionary
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                High-performance native mobile dictionary application built with Java &amp; Kotlin in Android Studio,
                tailored for instant sub-100ms offline terminology searches.
              </p>

              {/* Mobile App Search UI Preview */}
              <div className="rounded-lg bg-canvas border border-cyber p-3 space-y-2.5 font-sans">
                {/* Search Bar */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-canvas-elevated border border-cyber/80 text-xs">
                  <Search className="w-3.5 h-3.5 text-gray-400" />
                  <span className="text-gray-200 font-mono">poly <span className="text-neon-cyan animate-pulse">|</span> morphism</span>
                </div>

                {/* Lexicon Result 1 */}
                <div className="p-2.5 rounded bg-canvas-card border border-cyber/50 flex items-start justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Polymorphism</span>
                      <span className="text-[10px] text-gray-400 font-mono">(noun)</span>
                    </div>
                    <p className="text-[11px] text-gray-300 mt-0.5">
                      The provision of a single interface to entities of different types.
                    </p>
                  </div>
                  <Bookmark className="w-3.5 h-3.5 text-neon-cyan shrink-0" />
                </div>

                {/* Lexicon Result 2 */}
                <div className="p-2.5 rounded bg-canvas-card border border-cyber/50 flex items-start justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Polyglot Persistence</div>
                    <p className="text-[11px] text-gray-300 mt-0.5">
                      Using multiple data storage technologies for distinct needs.
                    </p>
                  </div>
                  <Bookmark className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-2.5 text-xs text-gray-300 pt-1">
                <div className="flex items-start gap-2">
                  <span className="text-neon-emerald font-mono font-bold mt-0.5">[&gt;]</span>
                  <div>
                    <strong className="text-white">Sub-100ms Query Indexing:</strong> Real-time <code className="text-neon-cyan font-mono">SearchView</code> filtering with debounced SQLite indexed queries.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neon-emerald font-mono font-bold mt-0.5">[&gt;]</span>
                  <div>
                    <strong className="text-white">Offline-First Architecture:</strong> Pre-populated local lexical database with persistent bookmarks and warm-of-the-day caching.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neon-emerald font-mono font-bold mt-0.5">[&gt;]</span>
                  <div>
                    <strong className="text-white">Material Components:</strong> Custom RecyclerView adapters with smooth diff calculations and touch transitions.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 mt-6 border-t border-cyber/60 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  Android Studio
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  Java/Kotlin
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-emerald">
                  SQLite
                </span>
              </div>
              <a
                href="https://github.com/NatnaelGetachew"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-neon-cyan hover:text-white transition-colors"
              >
                <span>View Source</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
