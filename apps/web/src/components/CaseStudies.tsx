import React from 'react';
import {
  Globe,
  Layers,
  Utensils,
  ExternalLink,
  Github,
} from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  period: string;
  bgColor: string;
  icon: React.ReactNode;
  tags: string[];
  description: string;
  stackDetail: string;
  highlights: string[];
  liveUrl: string;
  githubUrl: string;
  badgeText: string;
}

const projects: Project[] = [
  {
    title: 'Addis Eats — Vanilla Web App & Admin Dashboard',
    subtitle: 'v1 Pure ES6+ & DOM Engineering',
    period: 'Jul 2026',
    bgColor: '#b45309',
    icon: <Globe className="w-9 h-9 text-white" />,
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'LocalStorage', 'SessionStorage'],
    description:
      'Responsive food ordering app and admin operations dashboard developed with zero external UI libraries using pure HTML5, CSS3, and ES6+ standards.',
    stackDetail: 'HTML5 • CSS3 • JavaScript (ES6+) • LocalStorage / SessionStorage',
    highlights: [
      'Developed responsive food ordering app and admin operations dashboard using pure HTML5, CSS3, and ES6+.',
      'Engineered client-side cart calculations, live search filtering, and session-guarded admin authentication.',
    ],
    liveUrl: 'https://addis-eats-m2.vercel.app/',
    githubUrl: 'https://github.com/IBT-Qiyas-Full-Stack-Academy/sq2-natnael-getachew/tree/main/module-02-html-css-javascript/mini-projects/addis-eats',
    badgeText: 'Vanilla Web Flagship',
  },
  {
    title: 'Addis Eats — React Single-Page Application (SPA)',
    subtitle: 'v2 Modular React & State Synchronization',
    period: 'Aug 2026',
    bgColor: '#0891b2',
    icon: <Layers className="w-9 h-9 text-white" />,
    tags: ['React 18', 'Vite', 'Zustand', 'React Router DOM', 'Recharts', 'Pure CSS'],
    description:
      'High-velocity modular Single-Page Application architected with React 18, Vite, and Zustand persist middleware for resilient local state synchronization.',
    stackDetail: 'React 18 • Vite • Zustand • React Router DOM • Recharts • Pure CSS',
    highlights: [
      'Built modular SPA using Zustand with persist middleware for reliable local storage state syncing.',
      'Implemented real-time stock decrements and automated frosted out-of-stock overlay handling for 16+ meals.',
    ],
    liveUrl: 'https://addis-eats-react-sigma.vercel.app/',
    githubUrl: 'https://github.com/IBT-Qiyas-Full-Stack-Academy/sq2-natnael-getachew/tree/main/module-03-react-nextjs/Projects/addis-eats-react',
    badgeText: 'React 18 SPA',
  },
  {
    title: 'Addis Eats — Next.js Full-Stack App Router Edition',
    subtitle: 'v3 Enterprise Server/Client Platform',
    period: 'Sep 2026',
    bgColor: '#0a74db',
    icon: <Utensils className="w-9 h-9 text-white" />,
    tags: ['Next.js (App Router)', 'React 18', 'TypeScript', 'Zustand', 'Recharts', 'CSS Modules'],
    description:
      'Full-stack ordering platform ported to Next.js App Router featuring server/client boundaries, live TeleBirr payment rails, and automated delay escalation.',
    stackDetail: 'Next.js (App Router) • React 18 • TypeScript • Zustand • Recharts • CSS Modules',
    highlights: [
      'Ported ordering platform to Next.js App Router with server/client boundaries, dynamic routes, and TeleBirr checkout.',
      'Engineered live delivery tracking countdown and delay escalation pipeline with 20% apology discount voucher.',
    ],
    liveUrl: 'https://addis-eats-next-d49.vercel.app/',
    githubUrl: 'https://github.com/IBT-Qiyas-Full-Stack-Academy/sq2-natnael-getachew/tree/main/module-03-react-nextjs/Projects/addis-eats-next',
    badgeText: 'Full-Stack Flagship',
  },
];

export default function CaseStudies() {
  return (
    <section id="projects" className="section-inverted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block font-mono text-xs font-semibold tracking-widest uppercase text-diogo-blue mb-1">
            // Selected Works &amp; Architecture
          </span>
          <h2>Portfolio</h2>
          <h3>My top projects</h3>
        </div>

        {/* Project Cards Grid - 3 Addis Eats Editions in Chronological Order */}
        <div className="top-projects-grid">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card"
              style={{ backgroundColor: project.bgColor }}
            >
              <div className="card-content">
                <div className="card-emblem">{project.icon}</div>
                <h4>{project.title}</h4>
                <div className="flex items-center justify-center gap-1.5 flex-wrap mb-3 text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-black/25 text-white font-semibold">
                    {project.period}
                  </span>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-black/25 text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p>{project.description}</p>
                <ul className="text-xs space-y-1.5 mb-3 opacity-95 list-disc list-inside">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-xs font-mono bg-black/20 p-2.5 rounded mt-auto space-y-1">
                  <div>
                    <strong>Stack:</strong> {project.stackDetail}
                  </div>
                </div>
              </div>
              <div className="card-actions">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-white/85 hover:text-white transition-colors"
                  aria-label={`${project.title} Source Code`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded bg-white text-gray-900 hover:bg-gray-100 font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm inline-flex items-center gap-1.5"
                  aria-label={`${project.title} Live preview`}
                >
                  <span>Live preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
