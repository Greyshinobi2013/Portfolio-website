import React from 'react';
import { Layout, ShieldCheck, Server } from 'lucide-react';

export default function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="section-band--deep">
      <div className="container">
        <div className="section-head">
          <div className="space-y-3">
            <h2>Technical Skills</h2>
            <p className="lead">Languages, front-end engineering, QA practices, and back-end progression.</p>
          </div>
        </div>

        <div className="panels grid-cols-1 lg:grid-cols-12">
          {/* Panel 1: Frontend & Languages */}
          <div className="panel-cell lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Layout className="w-5 h-5 text-cool shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted font-medium">Frontend &amp; Languages</span>
                </div>
                <span className="chip chip--ok">
                  Lighthouse <span className="measured">100</span>
                </span>
              </div>

              <h3 className="text-ink">Frontend Engineering &amp; Core Languages</h3>

              <p className="text-muted text-sm leading-relaxed max-w-[65ch]">
                Completed the front-end phase of IBT Ethiopia&apos;s Software &amp; QA Engineering program across
                JavaScript, TypeScript, vanilla CSS, Tailwind CSS, Python, and Linux.
              </p>

              <div className="pt-4 border-t border-rule grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
                <div>
                  <div className="text-sm font-medium text-ink mb-2">Lighthouse Reading</div>
                  <div className="reading reading-count mb-3" aria-label="Lighthouse score 100">
                    <span className="visually-hidden">100</span>
                  </div>
                  <dl className="grid grid-cols-4 gap-3">
                    <div className="border-t border-rule pt-2 flex flex-col-reverse">
                      <dt className="text-xs text-muted mt-0.5">Perf</dt>
                      <dd className="measured text-sm font-medium">100</dd>
                    </div>
                    <div className="border-t border-rule pt-2 flex flex-col-reverse">
                      <dt className="text-xs text-muted mt-0.5">A11y</dt>
                      <dd className="measured text-sm font-medium">100</dd>
                    </div>
                    <div className="border-t border-rule pt-2 flex flex-col-reverse">
                      <dt className="text-xs text-muted mt-0.5">Best</dt>
                      <dd className="measured text-sm font-medium">100</dd>
                    </div>
                    <div className="border-t border-rule pt-2 flex flex-col-reverse">
                      <dt className="text-xs text-muted mt-0.5">SEO</dt>
                      <dd className="measured text-sm font-medium">100</dd>
                    </div>
                  </dl>
                </div>

                <div className="sm:border-l sm:border-rule sm:pl-6 space-y-2">
                  <div className="text-sm font-medium text-ink">Languages &amp; Tools</div>
                  <p className="text-sm text-muted leading-relaxed">
                    JavaScript (ES6+), TypeScript, Python, HTML5, CSS3, Linux, Bash
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-rule flex flex-wrap gap-2">
              <span className="chip">React 18</span>
              <span className="chip">Next.js (App Router)</span>
              <span className="chip">Vite</span>
              <span className="chip">Tailwind CSS</span>
              <span className="chip">CSS Modules</span>
              <span className="chip">React Router DOM</span>
              <span className="chip">Zustand</span>
              <span className="chip">Recharts</span>
            </div>
          </div>

          {/* Panel 2: QA & Engineering Practices + Tools & Systems */}
          <div className="panel-cell lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                  <span className="text-sm text-muted font-medium">QA &amp; Systems</span>
                </div>
                <span className="chip chip--accent">Lab Instruction</span>
              </div>

              <h3 className="text-ink">QA &amp; Engineering Practices</h3>

              <p className="text-muted text-sm leading-relaxed max-w-[65ch]">
                Grounded in academic lab instruction and rigorous code reviews at Ethiopian Defense University.
              </p>

              <dl className="pt-4 border-t border-rule space-y-2 text-sm">
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-muted">Reviews</dt>
                  <dd className="text-ink-2 text-right">Code Reviews &amp; Design Patterns</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-muted">Diagnostics</dt>
                  <dd className="text-ink-2 text-right">Debugging &amp; Troubleshooting</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-muted">Foundations</dt>
                  <dd className="text-ink-2 text-right">OOP, Data Structures &amp; Algorithms</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-muted">Docs</dt>
                  <dd className="text-ink-2 text-right">Technical Documentation</dd>
                </div>
              </dl>
            </div>

            <div className="pt-4 border-t border-rule space-y-2">
              <div className="text-xs text-muted font-medium">Tools &amp; Systems</div>
              <div className="flex flex-wrap gap-2">
                <span className="chip">Git</span>
                <span className="chip">GitHub</span>
                <span className="chip">Linux</span>
                <span className="chip">VS Code</span>
              </div>
            </div>
          </div>

          {/* Panel 3: Backend & Databases */}
          <div className="panel-cell lg:col-span-12 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted font-medium">
                  <Server className="w-5 h-5 text-cool shrink-0" aria-hidden="true" />
                  <span>Backend &amp; Databases</span>
                </div>
                <h3 className="text-ink">Back-End Engineering &amp; Persistence</h3>
              </div>
              <span className="chip chip--accent">In Progress (IBT Ethiopia)</span>
            </div>

            <p className="text-muted text-sm leading-relaxed max-w-[65ch]">
              Currently progressing into the back-end phase of IBT Ethiopia&apos;s Software &amp; QA Engineering
              program covering Node.js, NestJS, PostgreSQL, and REST APIs.
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-rule">
              <span className="chip">Node.js</span>
              <span className="chip">NestJS</span>
              <span className="chip">PostgreSQL</span>
              <span className="chip">REST APIs</span>
              <span className="chip">LocalStorage / SessionStorage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
