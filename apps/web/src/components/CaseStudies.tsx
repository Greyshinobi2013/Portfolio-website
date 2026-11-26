'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: 'v1' | 'v2' | 'v3';
  versionLabel: string;
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  description: string;
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
  badgeText: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

const projects: Project[] = [
  {
    id: 'v3',
    versionLabel: 'v3',
    title: 'Addis Eats: Next.js Full-Stack App Router Edition',
    subtitle: 'Next.js App Router & TeleBirr Checkout',
    period: 'Sep 2026',
    tags: ['Next.js (App Router)', 'React 18', 'TypeScript', 'Zustand', 'Recharts', 'CSS Modules'],
    description:
      'Ordering platform built on Next.js App Router with TeleBirr checkout and delivery escalation.',
    highlights: [
      'Ported ordering platform to Next.js App Router with server/client boundaries, dynamic routes, and TeleBirr checkout.',
      'Engineered live delivery tracking countdown and delay escalation pipeline with 20% apology discount voucher.',
    ],
    liveUrl: 'https://addis-eats-next-d49.vercel.app/',
    githubUrl:
      'https://github.com/IBT-Qiyas-Full-Stack-Academy/sq2-natnael-getachew/tree/main/module-03-react-nextjs/Projects/addis-eats-next',
    badgeText: 'Next.js App Router',
    imageSrc: '/projects/addis-eats-v3.webp',
    imageAlt: 'Addis Eats v3 Next.js App Router storefront featuring express delivery and TeleBirr & CBE Birr payments',
    imageWidth: 1440,
    imageHeight: 706,
  },
  {
    id: 'v2',
    versionLabel: 'v2',
    title: 'Addis Eats: React Single-Page Application (SPA)',
    subtitle: 'Modular React & Persistent State Sync',
    period: 'Aug 2026',
    tags: ['React 18', 'Vite', 'Zustand', 'React Router DOM', 'Recharts', 'Pure CSS'],
    description:
      'Single-page storefront with persistent local storage syncing and live meal availability overlays.',
    highlights: [
      'Built modular SPA using Zustand with persistent middleware for reliable local storage state syncing.',
      'Implemented real-time stock decrements and automated frosted out-of-stock overlay handling for 16+ meals.',
    ],
    liveUrl: 'https://addis-eats-react-sigma.vercel.app/',
    githubUrl:
      'https://github.com/IBT-Qiyas-Full-Stack-Academy/sq2-natnael-getachew/tree/main/module-03-react-nextjs/Projects/addis-eats-react',
    badgeText: 'React 18 SPA',
    imageSrc: '/projects/addis-eats-v2.webp',
    imageAlt: "Addis Eats v2 React single-page application showing hero menu navigation and Today's Specials",
    imageWidth: 1440,
    imageHeight: 706,
  },
  {
    id: 'v1',
    versionLabel: 'v1',
    title: 'Addis Eats: Vanilla Web App & Admin Dashboard',
    subtitle: 'Pure HTML5, CSS3 & ES6+ Engineering',
    period: 'Jul 2026',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'LocalStorage', 'SessionStorage'],
    description:
      'Food ordering storefront and admin dashboard built without external UI libraries.',
    highlights: [
      'Developed responsive food ordering app and admin operations dashboard using pure HTML5, CSS3, and ES6+.',
      'Engineered client-side cart calculations, live search filtering, and session-guarded admin authentication.',
    ],
    liveUrl: 'https://addis-eats-m2.vercel.app/',
    githubUrl:
      'https://github.com/IBT-Qiyas-Full-Stack-Academy/sq2-natnael-getachew/tree/main/module-02-html-css-javascript/mini-projects/addis-eats',
    badgeText: 'Vanilla Web App',
    imageSrc: '/projects/addis-eats-v1.webp',
    imageAlt: 'Addis Eats v1 dark-mode ordering storefront with search bar, category filters, and admin access',
    imageWidth: 1280,
    imageHeight: 811,
  },
];

export default function CaseStudies() {
  const [activeId, setActiveId] = useState<'v1' | 'v2' | 'v3'>('v3');
  const project = projects.find((p) => p.id === activeId) ?? projects[0];

  return (
    <section id="projects" className="section-band">
      <div className="container">
        <div className="section-head">
          <div className="space-y-3">
            <h2>Addis Eats, v1 to v3</h2>
            <p className="lead">
              Key projects from the CV: vanilla ES6+ storefront, React 18 SPA, and Next.js App Router edition.
            </p>
          </div>

          <div className="workbench-tabs" role="tablist" aria-label="Select Addis Eats edition">
            {projects.map((item) => {
              const selected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${item.id}`}
                  id={`tab-${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  className="workbench-tab"
                >
                  <span>{item.versionLabel}</span>
                  <span className="text-muted">{item.period}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Workbench Capture */}
        <div
          id={`panel-${project.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${project.id}`}
          className="panels"
        >
          <div className="panel-cell flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip chip--cool measured">{project.versionLabel}</span>
                <span className="chip">{project.badgeText}</span>
                <span className="measured text-xs">{project.period}</span>
              </div>
              <h3 className="text-ink">{project.title}</h3>
              <p className="text-muted text-sm">{project.subtitle}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--sm"
                aria-label={`${project.title} Source Code`}
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>Code</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--sm"
                aria-label={`${project.title} Live preview`}
              >
                <span>Live preview</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="panel-cell--deep">
            <figure
              key={project.id}
              className="workbench-shot workbench-panel-enter"
              data-slot={`addis-eats-${project.id}`}
              data-kind="product"
              data-alt={project.imageAlt}
            >
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                width={project.imageWidth}
                height={project.imageHeight}
                sizes="(max-width: 960px) 100vw, 1280px"
              />
            </figure>
          </div>

          <div
            key={`${project.id}-details`}
            className="panel-cell grid grid-cols-1 lg:grid-cols-12 gap-6 workbench-panel-enter"
          >
            <div className="lg:col-span-7 space-y-3">
              <p className="text-ink-2 text-base max-w-[65ch]">{project.description}</p>
              <ul className="space-y-2 text-sm text-muted list-disc pl-5 max-w-[65ch]">
                {project.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 space-y-3 lg:border-l lg:border-rule lg:pl-6">
              <div className="text-sm font-medium text-ink">Stack</div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
