'use client';

import React from 'react';
import {
  Layout,
  Server,
  Code,
  Brain,
  ShieldCheck,
  Wrench,
  CheckCircle2,
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
  specLabel: string;
  specMetric: string;
}

const CAPABILITIES: CapabilityCard[] = [
  {
    id: 'frontend',
    title: 'Frontend Systems',
    tag: 'CV: FRONTEND',
    tagColor: 'text-neon-pink border-neon-pink/30 bg-neon-pink/10',
    icon: <Layout className="w-5 h-5 text-neon-pink" />,
    iconColor: 'border-neon-pink/40 bg-neon-pink/10',
    description:
      'Architected responsive, full-stack web applications and robust front-ends using Next.js (App Router), React 18, and modern JavaScript (ES6+)/TypeScript.',
    skills: ['Next.js (App Router)', 'React 18', 'Zustand', 'Recharts', 'Responsive UI', 'CSS Modules'],
    specLabel: 'App Router Architecture',
    specMetric: 'Next.js App Router | React 18',
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    tag: 'CV: BACKEND & APIS',
    tagColor: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10',
    icon: <Server className="w-5 h-5 text-neon-cyan" />,
    iconColor: 'border-neon-cyan/40 bg-neon-cyan/10',
    description:
      'Constructing REST endpoints, implementing strict JSON schema validation, session guards, and TeleBirr payment API integration.',
    skills: ['REST APIs', 'Node.js', 'Nest.js', 'TeleBirr API Integration', 'JSON Schema', 'Session Guards'],
    specLabel: 'TeleBirr & Security Guards',
    specMetric: 'TeleBirr Gateway | Session Guards',
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    tag: 'CV: LANGUAGES',
    tagColor: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
    icon: <Code className="w-5 h-5 text-amber-400" />,
    iconColor: 'border-amber-400/40 bg-amber-400/10',
    description:
      'Multi-language foundations in modern web scripting, strongly typed applications, object-oriented systems, and database queries.',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'Java', 'Kotlin', 'SQL'],
    specLabel: 'Core Languages',
    specMetric: 'TypeScript • Python • Kotlin • SQL',
  },
  {
    id: 'architecture',
    title: 'Architecture & Quality',
    tag: 'CV: ARCHITECTURE & QA',
    tagColor: 'text-neon-pink border-neon-pink/30 bg-neon-pink/10',
    icon: <ShieldCheck className="w-5 h-5 text-neon-pink" />,
    iconColor: 'border-neon-pink/40 bg-neon-pink/10',
    description:
      'Engineering robust digital products adhering to OOP design patterns, SOLID principles, client storage persistence, and rigorous unit testing.',
    skills: ['Unit Testing (Jest/unittest)', 'Functional QA & Test Plans', 'Boundary Value Analysis', 'OOP Design Patterns', 'SOLID Principles', 'LocalStorage/SessionStorage'],
    specLabel: 'Verification & Quality Spec',
    specMetric: 'SOLID Design • Unit Testing • Functional QA',
  },
  {
    id: 'tools',
    title: 'Tools & Environments',
    tag: 'CV: TOOLS',
    tagColor: 'text-neon-emerald border-neon-emerald/30 bg-neon-emerald/10',
    icon: <Wrench className="w-5 h-5 text-neon-emerald" />,
    iconColor: 'border-neon-emerald/40 bg-neon-emerald/10',
    description:
      'Comprehensive toolchain proficiency across version control, native mobile IDEs, API debugging platforms, and UI wireframing.',
    skills: ['Git / GitHub', 'VS Code', 'Postman', 'Vite', 'Android Studio', 'Linux', 'Figma', 'Google stitch'],
    specLabel: 'Toolchain & Workflows',
    specMetric: 'Git/GitHub • Android Studio • Postman',
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence (MSc)',
    tag: 'CV: EDUCATION & AI',
    tagColor: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10',
    icon: <Brain className="w-5 h-5 text-neon-cyan" />,
    iconColor: 'border-neon-cyan/40 bg-neon-cyan/10',
    description:
      'Postgraduate coursework and research in artificial intelligence at Ethiopian Defense University covering computational learning and neural systems.',
    skills: ['Machine Learning', 'Statistical Computing', 'Research Methods & Seminar', 'Natural Language Processing', 'Deep Learning', 'Computer Vision'],
    specLabel: 'Postgraduate AI Program',
    specMetric: 'MSc AI Scholar | Ethiopian Defense Univ',
  },
];

export default function CapabilitiesGrid() {
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
              className="rounded-xl bg-canvas-card border border-cyber hover:border-gray-600 transition-all duration-300 p-6 flex flex-col justify-between group hover:shadow-card-glow"
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

              {/* Skills Badges & Specification Footnote */}
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

                {/* Technical Pillar Verification (Always Visible) */}
                <div className="pt-3 border-t border-cyber/50 flex flex-wrap items-center justify-between gap-1 text-[11px] font-mono">
                  <span className="text-gray-400">{cap.specLabel}</span>
                  <span className="text-neon-cyan font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald shrink-0" />
                    <span>{cap.specMetric}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
