'use client';

import React from 'react';
import ProfileCyberCard from './ProfileCyberCard';
import { MapPin, Phone, Mail, ArrowDownRight, Github, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden cyber-grid">
      {/* Subtle radial ambient gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink font-mono text-xs font-semibold tracking-wider">
              <Star className="w-3.5 h-3.5 fill-neon-pink" />
              <span>SEEKING SOFTWARE DEVELOPER OR QA INTERNSHIP</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.12]">
              Software Developer Intern <br className="hidden sm:inline" />
              <span className="text-neon-pink drop-shadow-[0_0_20px_rgba(255,42,95,0.45)]">Next.js</span> ·{' '}
              <span className="text-neon-cyan drop-shadow-[0_0_20px_rgba(0,242,254,0.45)]">React</span> ·{' '}
              <span className="text-white">JavaScript/TypeScript</span> ·{' '}
              <span className="text-neon-emerald">Python</span>
            </h1>

            {/* Bio Paragraph */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              BSc Computer Engineering graduate from Debre Birhan University (2022), MSc Artificial Intelligence scholar at
              Ethiopian Defense University, and IBT College of Canada Software Development trainee. Architected responsive,
              full-stack web applications and robust front-ends using Next.js (App Router), React 18, and modern
              JavaScript (ES6+)/TypeScript. Seeking a Software Developer or QA-focused internship where I can contribute to
              reliable, user-centered digital products.
            </p>

            {/* Metadata Pills */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs font-mono text-gray-300 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canvas-card border border-cyber hover:border-gray-600 transition-colors">
                <MapPin className="w-3.5 h-3.5 text-neon-cyan" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <a
                href="tel:+251983833337"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canvas-card border border-cyber hover:border-neon-emerald/50 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-neon-emerald" />
                <span>+251 983 833 337</span>
              </a>
              <a
                href="mailto:getachewnatnael55@gmail.com"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canvas-card border border-cyber hover:border-neon-pink/50 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-neon-pink" />
                <span>getachewnatnael55@gmail.com</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neon-pink hover:bg-neon-magenta text-white font-mono text-xs sm:text-sm font-bold tracking-wide transition-all shadow-pink-glow active:scale-95"
              >
                <span>EXPLORE FEATURED PROJECTS</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/Greyshinobi2013"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-canvas-card border border-cyber hover:border-neon-cyan text-gray-200 hover:text-white font-mono text-xs sm:text-sm font-medium transition-all"
              >
                <Github className="w-4 h-4 text-gray-300" />
                <span>GitHub / Source Code</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg hover:bg-canvas-card text-neon-cyan hover:text-white font-mono text-xs sm:text-sm font-medium transition-colors"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Cybernetic Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ProfileCyberCard />
          </div>
        </div>
      </div>
    </section>
  );
}
