'use client';

import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Download,
  Languages,
  Sparkles,
  MapPin,
  FileText,
  ExternalLink,
} from 'lucide-react';

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-canvas border-b border-cyber relative scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-agency-primary/10 border border-agency-primary/20 text-agency-primary text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background &amp; credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-[-0.025em]">
            Journey, Experience &amp; Academic Credentials
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
            Rigorous academic foundations in Computer Engineering combined with postgraduate AI research
            and hands-on software development &amp; QA apprenticeships.
          </p>
        </div>

        {/* Dual-Column Layout: Left (Industry Experience) & Right (Academic Credentials) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* =========================================================================
              LEFT COLUMN: PROFESSIONAL EXPERIENCE
             ========================================================================= */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-cyber">
              <Briefcase className="w-4 h-4 text-agency-primary" />
              <h3 className="text-xs font-semibold text-white tracking-wide uppercase">
                Industry Experience &amp; Apprenticeships
              </h3>
            </div>

            {/* Experience Card 1: Android Developer Intern */}
            <div className="rounded-2xl bg-canvas-card border border-cyber p-6 space-y-3.5 relative group hover:border-agency-primary/40 transition-all duration-300 shadow-agency-card card-specular">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-agency-primary transition-colors">
                  Android Developer Intern
                </h4>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-agency-emerald/10 border border-agency-emerald/30 text-agency-emerald">
                  2022 — 2023
                </span>
              </div>

              <div className="text-xs text-agency-primary font-semibold flex items-center gap-1.5">
                <span>M.A.D Technologies</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">Addis Ababa, Ethiopia</span>
              </div>

              <ul className="space-y-2 text-xs text-gray-300 leading-relaxed list-disc list-outside pl-4 marker:text-agency-primary">
                <li>
                  Collaborated on commercial native Android applications, translating Figma designs into responsive Material layouts with RecyclerView.
                </li>
                <li>
                  Developed standalone Dictionary mobile app with dynamic SearchView queries and local SQLite database caching for offline lookups.
                </li>
                <li>
                  Conducted code reviews, debugged edge cases in memory management, and adhered to Git pull-request workflows.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-cyber/50">
                {['Android Studio', 'Java & Kotlin', 'SQLite', 'RecyclerView', 'Material Design 3'].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience Card 2: CodeOps Trainee & Contributor */}
            <div className="rounded-2xl bg-canvas-card border border-cyber p-6 space-y-3.5 relative group hover:border-agency-cyan/40 transition-all duration-300 shadow-agency-card card-specular">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-agency-cyan transition-colors">
                  Full-Stack Software Development Trainee
                </h4>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-agency-cyan/10 border border-agency-cyan/30 text-agency-cyan">
                  2026
                </span>
              </div>

              <div className="text-xs text-agency-cyan font-semibold">
                CodeOps Capstone Engineering • Web &amp; API Systems
              </div>

              <ul className="space-y-2 text-xs text-gray-300 leading-relaxed list-disc list-outside pl-4 marker:text-agency-cyan">
                <li>
                  Architected production portfolio and three iterations of the Addis Eats ordering platform (Next.js 16, React SPA, and ES6+).
                </li>
                <li>
                  Integrated TeleBirr fintech API ingress with localized sub-city fee calculation and automated delay escalation pipelines.
                </li>
                <li>
                  Authored comprehensive test plans, boundary value assertions, and network resilience handling with zero data loss.
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-cyber/50">
                {['Next.js App Router', 'React 18', 'TypeScript', 'TeleBirr API', 'Zustand', 'Jest QA'].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="rounded-2xl bg-canvas-card border border-cyber p-6 space-y-3 relative group hover:border-agency-emerald/40 transition-all duration-300 shadow-agency-card card-specular">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-agency-emerald" />
                  <h4 className="text-base font-bold text-white group-hover:text-agency-emerald transition-colors">
                    Communication &amp; Languages
                  </h4>
                </div>
                <span className="text-xs text-gray-400 font-medium">Global Collaboration</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                <div className="p-3 rounded-xl bg-canvas-elevated border border-cyber">
                  <span className="text-white font-bold block mb-0.5">English</span>
                  <span className="text-agency-emerald text-xs font-semibold block mb-1">
                    Professional Working Proficiency
                  </span>
                  <p className="text-gray-400 text-xs">
                    Technical documentation, asynchronous PR reviews, and cross-functional team communication.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-canvas-elevated border border-cyber">
                  <span className="text-white font-bold block mb-0.5">Amharic</span>
                  <span className="text-agency-cyan text-xs font-semibold block mb-1">
                    Native Proficiency
                  </span>
                  <p className="text-gray-400 text-xs">
                    Full native fluency for localized Ethiopian market development and TeleBirr fintech alignment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: ACADEMIC CREDENTIALS & DEGREES
             ========================================================================= */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-cyber">
              <GraduationCap className="w-4 h-4 text-agency-amber" />
              <h3 className="text-xs font-semibold text-white tracking-wide uppercase">
                Academic Degrees &amp; Certified Honors
              </h3>
            </div>

            {/* Degree 1: MSc in Artificial Intelligence */}
            <div className="rounded-2xl bg-canvas-card border border-cyber p-6 space-y-3.5 relative group hover:border-agency-amber/40 transition-all duration-300 shadow-agency-card card-specular">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-agency-amber transition-colors">
                  MSc in Artificial Intelligence
                </h4>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-agency-amber/10 border border-agency-amber/30 text-agency-amber">
                  Scholar • Current
                </span>
              </div>

              <div className="text-xs text-agency-amber font-semibold flex items-center gap-1.5">
                <span>Ethiopian Defense University</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">Postgraduate Research</span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                Postgraduate degree focused on applied machine learning, neural networks, computer vision,
                and algorithm design using Python OOP and modern scientific computing toolchains.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-cyber/50">
                {['Neural Networks', 'Computer Vision', 'Deep Learning', 'Python OOP', 'Model Optimization'].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Degree 2: BSc in Computer Engineering */}
            <div className="rounded-2xl bg-canvas-card border border-cyber p-6 space-y-3.5 relative group hover:border-agency-primary/40 transition-all duration-300 shadow-agency-card card-specular">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-agency-primary transition-colors">
                  BSc in Computer Engineering
                </h4>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-agency-primary/10 border border-agency-primary/30 text-agency-primary">
                  Graduated 2022
                </span>
              </div>

              <div className="text-xs text-agency-primary font-semibold flex items-center gap-1.5">
                <span>Debre Birhan University</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-400">Faculty of Computing</span>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                Comprehensive 5-year engineering foundation in computer systems architecture, data structures &amp;
                algorithms, software engineering methodologies, database management systems, and networking.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-cyber/50">
                {['Computer Architecture', 'Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'OOP'].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Certification: IBT College of Canada */}
            <div className="rounded-2xl bg-canvas-card border border-cyber p-6 space-y-3.5 relative group hover:border-agency-cyan/40 transition-all duration-300 shadow-agency-card card-specular">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-agency-cyan transition-colors">
                  Advanced Digital Skills: Software Development &amp; QA
                </h4>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-agency-cyan/10 border border-agency-cyan/30 text-agency-cyan">
                  2026
                </span>
              </div>

              <div className="text-xs text-agency-cyan font-semibold">
                IBT College of Canada • Professional Trainee
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                Intensive industry training covering modern web engineering, Next.js, React, software testing standards,
                boundary assertions, and full-stack software delivery.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-cyber/50">
                {['Software QA', 'Boundary Value Testing', 'React & Next.js', 'Clean Code Architecture'].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-canvas-elevated border border-cyber text-xs font-mono text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Official Resume Download Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-agency-primary/15 via-agency-cyan/10 to-canvas-card border border-agency-primary/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <FileText className="w-4 h-4 text-agency-primary" />
                  <span>Download Verified Resume / CV</span>
                </div>
                <p className="text-xs text-gray-300">
                  Detailed PDF including full coursework, credentials, and reference contacts (~98 KB).
                </p>
              </div>

              <a
                href="/Natnael_Getachew_Software_CV.pdf"
                download="Natnael_Getachew_Software_CV.pdf"
                className="px-4 py-2.5 rounded-xl bg-agency-primary hover:bg-agency-primary-hover text-white text-xs font-semibold tracking-normal transition-all shadow-agency-sm flex items-center gap-2 shrink-0 active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
