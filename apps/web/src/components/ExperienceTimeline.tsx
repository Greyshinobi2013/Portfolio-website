'use client';

import React, { useEffect, useRef } from 'react';
import { Brain, Code2, Smartphone, GraduationCap } from 'lucide-react';

interface TimelineItem {
  id: number;
  category: string;
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
    category: 'Postgraduate Education',
    title: 'MSc in Artificial Intelligence',
    role: 'Ethiopian Defense University • Postgraduate AI Research',
    desc: 'Advanced postgraduate studies focused on machine learning, deep neural network architectures, computer vision, natural language processing (NLP), statistical computing, and algorithmic research using Python OOP and modern scientific toolchains.',
    date: '2026 — Present',
    iconBg: '#f59e0b',
    icon: <Brain className="w-6 h-6 shrink-0 text-white" />,
  },
  {
    id: 2,
    category: 'Professional Training',
    title: 'Advanced Digital Skills: Software Development & QA',
    role: 'IBT College of Canada • Global Technology Training',
    desc: 'Six-month intensive professional training program covering modern full-stack web engineering, Next.js / React 18, REST APIs, Node.js, software quality assurance fundamentals, boundary value analysis (BVA), and enterprise Git workflows.',
    date: '2026 — Present',
    iconBg: '#10b981',
    icon: <Code2 className="w-6 h-6 shrink-0 text-white" />,
  },
  {
    id: 3,
    category: 'Professional Experience',
    title: 'Android Developer Intern',
    role: 'M.A.D Technologies • Addis Ababa, Ethiopia',
    desc: 'Collaborated on native Android applications, translating Figma wireframes into responsive Material Design layouts with RecyclerView in Java and Kotlin. Developed a standalone Dictionary mobile app with dynamic SearchView queries and local SQLite database caching.',
    date: '2022 — 2023',
    iconBg: '#434343',
    icon: <Smartphone className="w-6 h-6 shrink-0 text-white" />,
  },
  {
    id: 4,
    category: 'Undergraduate Education',
    title: 'BSc in Computer Engineering',
    role: 'Debre Birhan University • Faculty of Computing',
    desc: 'Comprehensive 5-year engineering foundation. Relevant coursework: Object-Oriented Programming (OOP), Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, and Software Engineering methodologies.',
    date: '2017 — 2022',
    iconBg: '#0a74db',
    icon: <GraduationCap className="w-6 h-6 shrink-0 text-white" />,
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
          <h3>Milestones, academic degrees, and professional experience</h3>
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
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-diogo-brandBlue block mb-1">
                  {item.category}
                </span>
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
