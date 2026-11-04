'use client';

import React, { useEffect, useRef } from 'react';
import { Award, Code2, ShieldCheck, Smartphone, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  role: string;
  desc: string;
  date: string;
  iconBg: string;
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'MSc in Artificial Intelligence',
    role: 'Scholar • Postgraduate Research at Ethiopian Defense University',
    desc: 'Advanced postgraduate studies focused on machine learning, deep neural network architectures, computer vision, and algorithm design using Python OOP and modern scientific toolchains.',
    date: '2026 — Present',
    iconBg: '#f59e0b',
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Full-Stack Software Development Trainee',
    role: 'CodeOps Capstone Engineering • Web & API Systems',
    desc: 'Architected production portfolio systems and three iterations of the Addis Eats ordering platform across Next.js 16 App Router, React modular SPA, and pure ES6+. Integrated TeleBirr API fintech ingress and automated QA test plans with zero regressions.',
    date: '2026',
    iconBg: '#037daf',
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Advanced Digital Skills: Software Development & QA',
    role: 'Certified Professional Trainee • IBT College of Canada',
    desc: 'Rigorous training covering modern web engineering, clean code architecture, software QA standards, boundary value testing, and enterprise delivery standards.',
    date: '2024',
    iconBg: '#10b981',
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Mobile Application Development Intern',
    role: 'M.A.D Technologies • Android Engineering',
    desc: 'Collaborated on commercial native Android applications, translating Figma wireframes into responsive Material Design layouts with RecyclerView in Java and Kotlin. Developed a standalone Dictionary mobile app with local SQLite caching.',
    date: '2022 — 2023',
    iconBg: '#e91425',
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'BSc in Computer Engineering',
    role: 'Debre Birhan University • Faculty of Computing',
    desc: 'Comprehensive 5-year engineering foundation covering computer architecture, data structures & algorithms, operating systems, database management systems (DBMS), and software engineering methodologies.',
    date: 'Graduated 2022',
    iconBg: '#0a74db',
    icon: (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
    ),
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.timeline-element');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // Reset card when scrolling back up past it
            if (entry.boundingClientRect.top > 0) {
              entry.target.classList.remove('is-visible');
            }
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Reset when returning to hero
    const hero = document.getElementById('about');
    let heroObserver: IntersectionObserver | null = null;
    if (hero) {
      heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              elements.forEach((el) => el.classList.remove('is-visible'));
            }
          });
        },
        { threshold: 0.25 }
      );
      heroObserver.observe(hero);
    }

    return () => {
      observer.disconnect();
      if (heroObserver) heroObserver.disconnect();
    };
  }, []);

  return (
    <section id="timeline" className="section-dark" style={{ background: '#141414' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-1">
          <span className="inline-block font-mono text-xs font-semibold tracking-widest uppercase text-amber-400 mb-1">
            // Journey &amp; Milestones
          </span>
          <h2>Career &amp; Academic Timeline</h2>
          <h3>Milestones, academic degrees, and professional apprenticeships</h3>
        </div>

        <div className="timeline" ref={containerRef}>
          {timelineData.map((item) => (
            <div key={item.id} className="timeline-element">
              <span
                className="timeline-element-icon"
                style={{ backgroundColor: item.iconBg, color: '#ffffff' }}
              >
                {item.icon}
              </span>
              <div className="timeline-element-content">
                <h4>{item.title}</h4>
                <h5>{item.role}</h5>
                <p>{item.desc}</p>
              </div>
              <span className="timeline-element-date">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
