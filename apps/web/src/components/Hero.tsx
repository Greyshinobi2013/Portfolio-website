import React from 'react';
import Image from 'next/image';
import { ArrowDown, FileText, Mail } from 'lucide-react';
import CopyEmailButton from '@/components/CopyEmailButton';

export default function Hero() {
  return (
    <section id="about" className="hero-stage">
      <div className="container">
        <div className="hero-grid">
          <div className="space-y-6 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip chip--ok">Software &amp; QA Engineering Intern</span>
              <span className="chip">Addis Ababa, Ethiopia</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-ink">Natnael Getachew</h1>
              <p className="lead">
                Computer Engineering graduate and Master of Technology in Artificial Intelligence candidate.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn--primary">
                <span>Explore projects</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn--quiet">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Get in touch</span>
              </a>
              <a
                href="/Natnael_Getachew_Software_CV.pdf"
                download="Natnael_Getachew_Software_CV.pdf"
                className="btn"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>Verified CV</span>
              </a>
            </div>

            <dl className="panels grid-cols-1 sm:grid-cols-2 text-sm">
              <div className="p-4 bg-paper-2">
                <dt className="text-muted text-xs font-medium mb-1">Training &amp; focus</dt>
                <dd className="text-ink-2 text-sm">
                  Completed front-end phase at IBT Ethiopia; progressing into Node.js, NestJS, and PostgreSQL.
                </dd>
              </div>
              <div className="p-4 bg-paper-2">
                <dt className="text-muted text-xs font-medium mb-1">Target role</dt>
                <dd className="text-ink-2 text-sm">
                  Seeking a Software Development Intern position grounded in academic lab instruction and code review.
                </dd>
              </div>
            </dl>
          </div>

          <aside className="panels" aria-label="Engineer record card">
            <div className="panel-cell--deep">
              <figure
                className="hero-portrait-frame"
                data-slot="hero"
                data-alt="Portrait of Natnael Getachew, Software and QA Engineering Intern"
              >
                <Image
                  src="/avatar.webp"
                  alt="Natnael Getachew"
                  width={440}
                  height={440}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 640px) 320px, 420px"
                />
              </figure>
            </div>
            <div className="panel-cell space-y-4">
              <div>
                <p className="text-ink font-medium">Core stack</p>
                <p className="text-muted text-sm">
                  TypeScript, React 18, Next.js (App Router), Node.js, NestJS, PostgreSQL
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-rule text-sm">
                <a
                  href="https://github.com/Greyshinobi2013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  GitHub (@Greyshinobi2013)
                </a>
                <a
                  href="https://www.linkedin.com/in/natnaelgetachew/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  LinkedIn
                </a>
                <CopyEmailButton className="ml-auto" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
