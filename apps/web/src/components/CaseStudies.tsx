'use client';

import React, { useState } from 'react';
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
  Cpu,
} from 'lucide-react';

export default function CaseStudies() {
  const [activeTabFlagship, setActiveTabFlagship] = useState<'overview' | 'schema' | 'store' | 'telebirr' | 'qa'>('overview');
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
            Architected responsive, full-stack web applications and robust front-ends using Next.js (App Router),
            React 18, modern JavaScript (ES6+)/TypeScript, and TeleBirr checkout.
          </p>
        </div>

        {/* SHOWCASE 1: Flagship Addis Eats */}
        <div className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all p-6 sm:p-8 mb-10 shadow-card-glow group">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded bg-neon-pink/15 border border-neon-pink text-neon-pink tracking-wider">
                FULL-STACK WEB APP
              </span>
              <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded bg-neon-emerald/15 border border-neon-emerald text-neon-emerald tracking-wider flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> QA: TEST SUITE &amp; BOUNDARY VERIFICATION
              </span>
              <span className="font-mono text-xs text-gray-400 hidden sm:inline">Next.js 14 + TeleBirr API</span>
            </div>
            <a
              href="https://github.com/Greyshinobi2013"
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
                Full-stack ordering platform ported to Next.js App Router with server/client boundaries, dynamic routes,
                and TeleBirr checkout. Features real-time cart synchronization via Zustand, localized Addis Ababa sub-city
                delivery fee calculation, live delivery tracking countdown, and a delay escalation pipeline with a 20% apology discount voucher.
              </p>

              {/* Multi-Edition Evolution Pills */}
              <div className="p-3 rounded-lg bg-canvas border border-cyber/80 space-y-1.5 font-mono text-[11px]">
                <div className="text-neon-cyan font-bold text-[10px] tracking-wider uppercase">// Triad Project Architecture</div>
                <div className="text-gray-300">
                  <span className="text-white font-semibold">• Next.js Full-Stack (Sep 2026):</span> App Router, dynamic routes, TeleBirr checkout, delivery tracking.
                </div>
                <div className="text-gray-400">
                  <span className="text-gray-200 font-semibold">• React SPA (Aug 2026):</span> Zustand with persist middleware, frosted out-of-stock overlay for 16+ meals.
                </div>
                <div className="text-gray-400">
                  <span className="text-gray-200 font-semibold">• Vanilla Web App (Jul 2026):</span> Pure ES6+, client cart calculations, session-guarded admin auth.
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 rounded bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300">
                  Next.js App Router
                </span>
                <span className="px-2.5 py-1 rounded bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300">
                  React 18
                </span>
                <span className="px-2.5 py-1 rounded bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300">
                  TypeScript
                </span>
                <span className="px-2.5 py-1 rounded bg-canvas-elevated border border-cyber text-xs font-mono text-neon-pink">
                  Zustand
                </span>
                <span className="px-2.5 py-1 rounded bg-canvas-elevated border border-cyber text-xs font-mono text-neon-cyan">
                  TeleBirr API
                </span>
                <span className="px-2.5 py-1 rounded bg-canvas-elevated border border-cyber text-xs font-mono text-gray-400">
                  CSS Modules
                </span>
              </div>

              {/* View Repository CTA Button */}
              <div className="pt-2">
                <a
                  href="https://github.com/Greyshinobi2013"
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

          {/* TECHNICAL ARCHITECTURE & SPECIFICATIONS EXPLORER */}
          <div className="mt-6 pt-5 border-t border-cyber/60 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
              <div className="flex items-center gap-2 font-mono text-xs text-neon-cyan font-bold">
                <Cpu className="w-3.5 h-3.5" />
                <span>TECHNICAL ARCHITECTURE &amp; SPECIFICATION EXPLORER</span>
              </div>
              {/* Tabs */}
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
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
                <button
                  onClick={() => setActiveTabFlagship('qa')}
                  className={`px-2.5 py-1 rounded transition-colors flex items-center gap-1 ${
                    activeTabFlagship === 'qa'
                      ? 'bg-neon-emerald text-black font-bold'
                      : 'bg-canvas-elevated text-neon-emerald hover:text-white'
                  }`}
                >
                  <CheckCircle className="w-3 h-3" />
                  <span>QA &amp; Test Matrix</span>
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

              {activeTabFlagship === 'qa' && (
                <div className="space-y-4 font-mono text-xs animate-fadeIn">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-cyber">
                    <span className="text-neon-emerald font-bold flex items-center gap-1.5 text-xs">
                      <CheckCircle className="w-3.5 h-3.5" />
                      QA TEST SUITE &amp; VERIFICATION MATRIX
                    </span>
                    <span className="text-[10px] text-gray-400 bg-canvas-elevated px-2 py-0.5 rounded border border-cyber">
                      UNIT TESTING &bull; FUNCTIONAL QA &bull; BOUNDARY ASSERTIONS
                    </span>
                  </div>

                  {/* Structured QA Test Scenarios Table */}
                  <div className="rounded border border-cyber overflow-hidden bg-canvas-elevated/50">
                    <table className="w-full text-[11px] text-left border-collapse">
                      <thead>
                        <tr className="bg-canvas-card border-b border-cyber text-gray-400 uppercase text-[10px]">
                          <th className="p-2.5 font-bold">Test Suite / Module</th>
                          <th className="p-2.5 font-bold">Assertion Category</th>
                          <th className="p-2.5 font-bold">Target Specification</th>
                          <th className="p-2.5 font-bold text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-cyber/40 text-gray-300">
                        <tr>
                          <td className="p-2.5 font-semibold text-white">TeleBirr Gateway Regex</td>
                          <td className="p-2.5 text-neon-cyan">Pattern &amp; Format Validation</td>
                          <td className="p-2.5 text-gray-400">Accepts +2519/+2517 (10-12 digits); rejects non-Ethiopian and malformed lengths.</td>
                          <td className="p-2.5 text-neon-emerald font-bold text-right">✔ Verified</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-semibold text-white">Cart Inventory Ceilings</td>
                          <td className="p-2.5 text-neon-emerald">Boundary Value Analysis</td>
                          <td className="p-2.5 text-gray-400">Enforces stock ceilings per meal; triggers frosted out-of-stock overlay on 0 items.</td>
                          <td className="p-2.5 text-neon-emerald font-bold text-right">✔ Verified</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-semibold text-white">Delivery Delay Escalation</td>
                          <td className="p-2.5 text-neon-pink">State Resilience &amp; Timers</td>
                          <td className="p-2.5 text-gray-400">30-min countdown trigger; injects 20% apology discount voucher while guarding mutation.</td>
                          <td className="p-2.5 text-neon-emerald font-bold text-right">✔ Verified</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-semibold text-white">Zustand Persist Hydration</td>
                          <td className="p-2.5 text-amber-400">Session Resilience</td>
                          <td className="p-2.5 text-gray-400">Preserves cart items and calculated sub-city fees across reloads and offline drops.</td>
                          <td className="p-2.5 text-neon-emerald font-bold text-right">✔ Verified</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* QA Assertion Pillars */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-[11px]">
                    <div className="p-2.5 rounded bg-canvas-elevated border border-cyber">
                      <span className="text-neon-emerald font-bold block mb-1">Boundary Value QA</span>
                      <span className="text-gray-400 leading-snug">Zero-item checkout assertions, maximum quantity caps, and double-click race condition prevention.</span>
                    </div>
                    <div className="p-2.5 rounded bg-canvas-elevated border border-cyber">
                      <span className="text-neon-cyan font-bold block mb-1">Idempotency Assertions</span>
                      <span className="text-gray-400 leading-snug">Ensures TeleBirr webhook retries do not trigger duplicate order confirmation or double-billing.</span>
                    </div>
                    <div className="p-2.5 rounded bg-canvas-elevated border border-cyber">
                      <span className="text-neon-pink font-bold block mb-1">State Resilience QA</span>
                      <span className="text-gray-400 leading-snug">Validated LocalStorage draft hydration and session clearance when browser network drops.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SHOWCASE 2 & 3: React SPA & Vanilla Web App (Dual Column from CV) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SHOWCASE 2: Addis Eats — React SPA Edition */}
          <div className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-card-glow group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan tracking-wider">
                  MODULAR SPA • AUG 2026
                </span>
                <span className="font-mono text-xs text-gray-400">React 18 • Vite • Zustand</span>
              </div>

              <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-neon-cyan transition-colors">
                Addis Eats — React Single-Page Application (SPA)
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Modular single-page application built using Zustand with persist middleware for reliable local storage
                state syncing, real-time stock decrements, and dynamic meal inventory handling.
              </p>

              {/* Code Snippet / State Architecture Preview */}
              <div className="rounded-lg bg-canvas border border-cyber overflow-hidden font-mono text-[11px]">
                <div className="px-3 py-2 bg-canvas-elevated border-b border-cyber flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
                    <span className="ml-2 text-gray-400 text-[10px]">store/useCartStore.ts</span>
                  </div>
                  <span className="text-gray-500 text-[10px]">ZUSTAND • PERSIST</span>
                </div>

                <pre className="p-3 text-gray-300 overflow-x-auto leading-relaxed">
{`export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      stock: 16, // Real-time stock decrement
      decrementStock: (mealId) => set(s => handleStock(s, mealId)),
    }),
    { name: 'addis-eats-cart-storage' }
  )
);`}
                </pre>
              </div>

              {/* Bullets directly from CV */}
              <div className="space-y-2.5 text-xs text-gray-300 pt-1">
                <div className="flex items-start gap-2">
                  <span className="text-neon-cyan font-mono font-bold mt-0.5">[&gt;]</span>
                  <div>
                    <strong className="text-white">Zustand Persist Middleware:</strong> Built modular SPA using Zustand with persist middleware for reliable local storage state syncing across user sessions.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neon-cyan font-mono font-bold mt-0.5">[&gt;]</span>
                  <div>
                    <strong className="text-white">Real-Time Stock Handling:</strong> Implemented real-time stock decrements and automated frosted out-of-stock overlay handling for 16+ meals.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neon-cyan font-mono font-bold mt-0.5">[&gt;]</span>
                  <div>
                    <strong className="text-white">Analytics &amp; Routing:</strong> Integrated Recharts for sales telemetry and React Router DOM for client-side navigation.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neon-emerald font-mono font-bold mt-0.5">[✔]</span>
                  <div>
                    <strong className="text-neon-emerald">Automated State &amp; Boundary QA:</strong> Validated persist hydration resilience under throttling and out-of-stock overlay boundary assertions with unit test suites.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 mt-6 border-t border-cyber/60 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  React 18
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  Vite
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-cyan">
                  Zustand
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-pink">
                  Recharts
                </span>
              </div>
              <a
                href="https://github.com/Greyshinobi2013"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-neon-cyan hover:text-white transition-colors shrink-0"
              >
                <span>Code / Repo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* SHOWCASE 3: Addis Eats — Vanilla Web App & Admin Dashboard */}
          <div className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-card-glow group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-amber-400 tracking-wider">
                  PURE ES6+ • JUL 2026
                </span>
                <span className="font-mono text-xs text-gray-400">HTML5 • CSS3 • LocalStorage</span>
              </div>

              <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-neon-cyan transition-colors">
                Addis Eats — Vanilla Web App &amp; Admin Dashboard
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Responsive food ordering application and administrative operations dashboard developed from the ground
                up using pure HTML5, CSS3, and modern ECMAScript (ES6+).
              </p>

              {/* Code Snippet Window */}
              <div className="rounded-lg bg-canvas border border-cyber overflow-hidden font-mono text-[11px]">
                <div className="px-3 py-2 bg-canvas-elevated border-b border-cyber flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
                    <span className="ml-2 text-gray-400 text-[10px]">auth/sessionGuard.js</span>
                  </div>
                  <span className="text-gray-500 text-[10px]">PURE JS • AUTH</span>
                </div>

                <pre className="p-3 text-gray-300 overflow-x-auto leading-relaxed">
{`// Session-Guarded Admin Authentication
function guardAdminRoute() {
  const sessionToken = sessionStorage.getItem('admin_token');
  if (!sessionToken || !verifySession(sessionToken)) {
    window.location.replace('/login.html');
  }
}`}
                </pre>
              </div>

              {/* Bullets directly from CV */}
              <div className="space-y-2.5 text-xs text-gray-300 pt-1">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold mt-0.5">[&gt;]</span>
                  <div>
                    <strong className="text-white">Responsive Web Architecture:</strong> Developed responsive food ordering app and admin operations dashboard using pure HTML5, CSS3, and ES6+.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold mt-0.5">[&gt;]</span>
                  <div>
                    <strong className="text-white">Reactive Cart &amp; Live Search:</strong> Engineered client-side cart calculations and live search filtering without external frontend dependencies.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold mt-0.5">[&gt;]</span>
                  <div>
                    <strong className="text-white">Session Guard Security:</strong> Engineered session-guarded admin authentication with LocalStorage and SessionStorage persistence.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-neon-emerald font-mono font-bold mt-0.5">[✔]</span>
                  <div>
                    <strong className="text-neon-emerald">Security &amp; Regression QA:</strong> Verified session token expiration assertions and route redirect integrity across positive and negative auth scenarios.
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 mt-6 border-t border-cyber/60 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  HTML5
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300">
                  CSS3
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-amber-400">
                  JavaScript (ES6+)
                </span>
                <span className="px-2 py-0.5 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-neon-emerald">
                  SessionStorage
                </span>
              </div>
              <a
                href="https://github.com/Greyshinobi2013"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-neon-cyan hover:text-white transition-colors shrink-0"
              >
                <span>Code / Repo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
