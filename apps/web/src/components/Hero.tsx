'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, FileText } from 'lucide-react';

const rotatingRoles = [
  'Software Engineer',
  'QA Engineer',
  'AI specialist',
  'MSc AI Scholar',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [wipingClass, setWipingClass] = useState('wiping-in');
  const [copyTooltip, setCopyTooltip] = useState('Click to Copy: getachewnatnael55@gmail.com');

  useEffect(() => {
    const interval = setInterval(() => {
      setWipingClass('wiping-out');
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
        setWipingClass('wiping-in');
      }, 450);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText('getachewnatnael55@gmail.com');
      setCopyTooltip('Copied to Clipboard! ✓');
      setTimeout(() => {
        setCopyTooltip('Click to Copy: getachewnatnael55@gmail.com');
      }, 2000);
    }
  };

  return (
    <section id="about" className="splash">
      {/* Profile Picture */}
      <img
        src="/avatar.webp"
        alt="Natnael Getachew"
        className="profile-picture"
      />

      {/* Availability Badge */}
      <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
        <span className="w-2 h-2 rounded-full bg-emerald-400 pulsing-dot"></span>
        <span>Available for Software &amp; QA Internships</span>
      </div>

      {/* Main Heading */}
      <h1>Natnael Getachew</h1>

      {/* Roles Subtitle with Rotating Gradient Text Wiping Animation */}
      <div className="hero-role-wrapper">
        <div className="hero-role-track" id="hero-role-track">
          <span className={`rotating-gradient-text ${wipingClass}`}>
            {rotatingRoles[roleIndex]}
          </span>
        </div>
      </div>

      {/* Narrative Bio Paragraph */}
      <p className="max-w-2xl text-gray-300 text-sm sm:text-base leading-relaxed px-4 mb-4">
        Computer Engineering graduate from{' '}
        <strong className="text-white font-semibold">Debre Birhan University</strong>, postgraduate{' '}
        <strong className="text-white font-semibold">MSc Artificial Intelligence scholar</strong> at Ethiopian Defense University,
        and IBT College of Canada Software &amp; QA Engineering trainee. Specializing in React, Next.js App Router, Tailwind CSS, strict Javascript/TypeScript, Python, Linux, Version Control System.
      </p>

      {/* Language & Communication Badges */}
      <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
          <span className="w-1.5 h-1.5 rounded-full bg-diogo-cyan"></span>
          English: Professional Working
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          Amharic: Native
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-diogo-brandBlue hover:bg-blue-600 text-white font-medium text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
        >
          <span>Explore Projects</span>
          <ArrowDown className="w-4 h-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider transition-all border border-white/20 active:scale-95"
        >
          <Mail className="w-4 h-4 text-emerald-400" />
          <span>Get in Touch</span>
        </a>
        <a
          href="/Natnael_Getachew_Software_CV.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/5 hover:bg-white/15 text-gray-200 font-medium text-xs uppercase tracking-wider transition-all border border-white/10 active:scale-95"
        >
          <FileText className="w-4 h-4 text-diogo-cyan" />
          <span>Verified CV</span>
        </a>
      </div>

      {/* Socials Row with Optimized Inline SVG Icons & Animated Backgrounds */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {/* GitHub */}
        <div className="has-tooltip">
          <a
            href="https://github.com/Greyshinobi2013"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn-animated"
            aria-label="GitHub Profile"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>
          <div className="tooltip">GitHub: @Greyshinobi2013</div>
        </div>

        {/* LinkedIn */}
        <div className="has-tooltip">
          <a
            href="https://www.linkedin.com/in/natnael-getachew-25b8211ba"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn-animated"
            aria-label="LinkedIn Profile"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
            </svg>
          </a>
          <div className="tooltip">LinkedIn: Natnael Getachew</div>
        </div>

        {/* Smart 1-Click Copy Email & Ingress */}
        <div className="has-tooltip">
          <button
            onClick={handleCopyEmail}
            className="social-btn-animated"
            aria-label="Copy Email (getachewnatnael55@gmail.com)"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </button>
          <div className="tooltip" id="hero-copy-tooltip">{copyTooltip}</div>
        </div>

        {/* Location Badge */}
        <div className="has-tooltip">
          <div className="p-3 rounded-full text-emerald-400 bg-charcoal-200/90 border border-white/10 flex items-center gap-2 px-4 shadow-elevation-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulsing-dot"></span>
            <span className="text-xs font-mono font-medium text-gray-200">Addis Ababa, ET (UTC+3)</span>
          </div>
          <div className="tooltip">Location: Addis Ababa, Ethiopia</div>
        </div>
      </div>

      {/* Quick Metrics Bar */}
      <div className="mt-12 max-w-4xl mx-auto w-full pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">Core</div>
          <div className="text-xs font-semibold text-gray-200 mt-1">Engineering Focus</div>
          <div className="text-[11px] text-gray-400">React, TypeScript, Nest.js, Python</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">100%</div>
          <div className="text-xs font-semibold text-gray-200 mt-1">Code Quality</div>
          <div className="text-[11px] text-gray-400">Strict TypeScript &amp; QA suites</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">MSc</div>
          <div className="text-xs font-semibold text-gray-200 mt-1">AI Specialization</div>
          <div className="text-[11px] text-gray-400">Defense Univ AI Scholar</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">&lt; 24h</div>
          <div className="text-xs font-semibold text-gray-200 mt-1">Response Guarantee</div>
          <div className="text-[11px] text-gray-400">Recruiter direct channel</div>
        </div>
      </div>

      {/* Scroll Indicator Cue */}
      <a
        href="#projects"
        aria-label="Scroll down to Projects portfolio"
        className="mt-8 inline-flex flex-col items-center gap-1.5 text-gray-400 hover:text-diogo-cyan transition-colors group"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
          Explore Work
        </span>
        <svg className="w-4 h-4 text-diogo-cyan animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
