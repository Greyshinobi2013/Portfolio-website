'use client';

import React from 'react';
import { useRecruiterStore } from '@/store/useRecruiterStore';
import {
  Layout,
  Server,
  Network,
  Smartphone,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Code2,
} from 'lucide-react';

interface CapabilityCard {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  icon: React.ReactNode;
  iconColor: string;
  description: string;
  skills: string[];
  recruiterSpec: {
    label: string;
    details: string;
    metric: string;
  };
}

const CAPABILITIES: CapabilityCard[] = [
  {
    id: 'frontend',
    title: 'Modern Web Systems',
    tag: 'FRONTEND CORE',
    tagColor: 'text-neon-pink border-neon-pink/30 bg-neon-pink/10',
    icon: <Layout className="w-5 h-5 text-neon-pink" />,
    iconColor: 'border-neon-pink/40 bg-neon-pink/10',
    description:
      'Architecting responsive, accessible user interfaces with React 18 concurrencies, Next.js App Router, SSR/SSG patterns, and predictable state hydration.',
    skills: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Recharts'],
    recruiterSpec: {
      label: 'SSR & Hydration Benchmark',
      details: 'Strict client/server component segregation with zero hydration mismatch and sub-800ms First Contentful Paint.',
      metric: 'Lighthouse: 100/100 | LCP: 0.72s',
    },
  },
  {
    id: 'backend',
    title: 'APIs & Distributed Logic',
    tag: 'BACKEND & SERVICES',
    tagColor: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10',
    icon: <Server className="w-5 h-5 text-neon-cyan" />,
    iconColor: 'border-neon-cyan/40 bg-neon-cyan/10',
    description:
      'Constructing REST endpoints, implementing strict schema validation, security session guards, payment gateway hooks, and database interfaces.',
    skills: ['REST API Design', 'Node.js & Express', 'TeleBirr API', 'JSON Schema', 'JWT Auth', 'Postman'],
    recruiterSpec: {
      label: 'Security & Throttling Spec',
      details: 'NestJS ThrottlerGuard (5 req/min per IP), DTO validation via class-validator, and atomic PostgreSQL connection pooling.',
      metric: 'Rate-Limit: 5 req/min | P99: 42ms',
    },
  },
  {
    id: 'architecture',
    title: 'OOP & Data Structures',
    tag: 'ARCHITECTURE',
    tagColor: 'text-neon-amber border-neon-amber/30 bg-neon-amber/10',
    icon: <Network className="w-5 h-5 text-neon-amber" />,
    iconColor: 'border-neon-amber/40 bg-neon-amber/10',
    description:
      'Architecting enterprise Python engines utilizing Design Patterns (Factory, Registry, Decorator), directed graph algorithms, and comprehensive unittest suites.',
    skills: ['Python 3 OOP', 'Directed Graph Routing', 'Factory Pattern', 'unittest', 'Ledger Consistency'],
    recruiterSpec: {
      label: 'Graph Routing Algorithmic Complexity',
      details: 'Directed acyclic liquidity graph traversal avoiding cyclic locks with O(V + E) Dijkstra shortest capacity path.',
      metric: 'Complexity: O(V + E) | Invariant: 0 Leakage',
    },
  },
  {
    id: 'mobile',
    title: 'Native Mobile Development',
    tag: 'MOBILE',
    tagColor: 'text-neon-emerald border-neon-emerald/30 bg-neon-emerald/10',
    icon: <Smartphone className="w-5 h-5 text-neon-emerald" />,
    iconColor: 'border-neon-emerald/40 bg-neon-emerald/10',
    description:
      'Building responsive Android applications in Android Studio using Java/Kotlin, RecyclerView diffing, ViewBinding, and local SQLite data persistence.',
    skills: ['Android Studio', 'Java & Kotlin', 'SQLite', 'RecyclerView', 'Offline Caching'],
    recruiterSpec: {
      label: 'Mobile Storage & Frame Rate Spec',
      details: 'B-tree indexed SQLite database with Async DiffUtil background recalculation maintaining locked 60fps scrolling.',
      metric: 'Query: < 8ms | Refresh: 60 FPS Lock',
    },
  },
  {
    id: 'devops',
    title: 'Engineering Disciplines & DevOps',
    tag: 'WORKFLOWS & TOOLCHAIN',
    tagColor: 'text-neon-pink border-neon-pink/30 bg-neon-pink/10',
    icon: <GitBranch className="w-5 h-5 text-neon-pink" />,
    iconColor: 'border-neon-pink/40 bg-neon-pink/10',
    description:
      'Adhering to strict Git branching patterns, pull-request peer reviews, automated regression checks, CI/CD pipeline principles, and high-fidelity Figma translation.',
    skills: ['GIT & PR Reviews', 'Linux / Bash', 'Vite & Next Bundlers', 'Figma UI', 'CI Pipeline Testing'],
    recruiterSpec: {
      label: 'Continuous Integration Blueprint',
      details: 'Automated GitHub Actions linting, strict TypeScript build gating, and atomic preview environments with zero deployment drift.',
      metric: 'CI Pipeline: Automated | Tests: 100% Gated',
    },
  },
  {
    id: 'qa',
    title: 'Testing & Quality Assurance',
    tag: 'TESTING & VERIFICATION',
    tagColor: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10',
    icon: <ShieldCheck className="w-5 h-5 text-neon-cyan" />,
    iconColor: 'border-neon-cyan/40 bg-neon-cyan/10',
    description:
      'Engineering robust test suites covering unit tests, integration assertions, API scenario automation, regression suites, and boundary condition checks.',
    skills: ['Unit Testing', 'Regression Checks', 'API Scenario Automation', 'Coverage Analysis', 'Mock Services'],
    recruiterSpec: {
      label: 'Verification & Coverage Metric',
      details: 'Python unittest + Jest frontend scenario tests asserting state transitions, negative edge cases, and arithmetic tolerances.',
      metric: 'Coverage: High-Yield | Fail-Safe Design',
    },
  },
];

export default function CapabilitiesGrid() {
  const { isRecruiterMode } = useRecruiterStore();

  return (
    <section id="skills" className="py-16 md:py-24 bg-canvas border-b border-cyber relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-neon-pink font-semibold tracking-wider">
            <span>:: CORE CAPABILITIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Technical Expertise &amp; Architecture
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-3xl leading-relaxed">
            Categorized competencies spanning modern frontend systems, robust backend APIs, algorithmic patterns,
            and native mobile engineering.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              className={`rounded-xl bg-canvas-card border transition-all duration-300 p-6 flex flex-col justify-between group hover:border-gray-600 hover:shadow-card-glow ${
                isRecruiterMode ? 'border-neon-pink/30 bg-canvas-card/90' : 'border-cyber'
              }`}
            >
              <div>
                {/* Card Top: Icon & Category Tag */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-2.5 rounded-lg border ${cap.iconColor}`}>
                    {cap.icon}
                  </div>
                  <span
                    className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border tracking-wider ${cap.tagColor}`}
                  >
                    {cap.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-neon-cyan transition-colors">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Skills Badges & Recruiter Mode Reveal */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-cyber/50">
                  {cap.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded bg-canvas-elevated border border-cyber text-[11px] font-mono text-gray-300 group-hover:border-cyber/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Recruiter Mode Engineering Proof */}
                {isRecruiterMode && (
                  <div className="pt-3 border-t border-neon-pink/30 bg-neon-pink/5 -mx-6 -mb-6 p-4 rounded-b-xl text-[11px] font-mono space-y-1.5 animate-fadeIn">
                    <div className="flex items-center justify-between text-neon-pink font-semibold">
                      <span className="flex items-center gap-1">
                        <Code2 className="w-3.5 h-3.5" /> {cap.recruiterSpec.label}
                      </span>
                      <span className="text-[10px] text-gray-400">SPEC CHECK</span>
                    </div>
                    <p className="text-gray-300 text-[10.5px] leading-tight">
                      {cap.recruiterSpec.details}
                    </p>
                    <div className="pt-1 flex items-center gap-1.5 text-neon-cyan font-bold text-[10px]">
                      <CheckCircle2 className="w-3 h-3 text-neon-emerald" />
                      <span>{cap.recruiterSpec.metric}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
