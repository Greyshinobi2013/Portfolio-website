'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Cpu, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProfileCyberCard() {
  const [imgSrc, setImgSrc] = useState('/avatar.webp');

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto group">
      {/* Outer ambient glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-pink/30 to-neon-cyan/30 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>

      {/* Main Cybernetic Card */}
      <div className="relative rounded-xl bg-canvas-card border border-cyber p-4 sm:p-5 shadow-card-glow text-xs font-mono">
        {/* Top HUD Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-cyber/60">
          <span className="text-gray-400 font-bold tracking-wider text-[11px]">
            ID: DEV-2026-ETH
          </span>
          <div className="flex items-center gap-1.5 text-neon-emerald">
            <span className="w-2 h-2 rounded-full bg-neon-emerald pulsing-dot"></span>
            <span className="text-[11px] font-bold tracking-widest uppercase">AVAILABLE TO HIRE</span>
          </div>
        </div>

        {/* Photo Container with Cyber Border */}
        <div className="relative rounded-lg overflow-hidden border border-cyber group-hover:border-neon-pink/60 transition-colors bg-canvas-elevated">
          {/* Portrait Image */}
          <div className="relative w-full aspect-[4/3] min-h-[260px] sm:min-h-[300px] bg-zinc-900 overflow-hidden">
            <Image
              src={imgSrc}
              alt="Natnael Getachew - Software Developer Intern"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-center filter contrast-105"
              priority
              onError={() => setImgSrc('/avatar.png')}
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent opacity-85 pointer-events-none"></div>

            {/* Name & Subtitle overlay at bottom of photo */}
            <div className="absolute bottom-2.5 left-3 right-3">
              <h3 className="font-sans font-extrabold text-base sm:text-lg text-white tracking-tight drop-shadow-md">
                Natnael Getachew
              </h3>
              <p className="text-neon-cyan font-mono text-[11px] sm:text-xs font-medium tracking-wide drop-shadow">
                Software Developer Intern | Next.js · React · Python
              </p>
            </div>
          </div>
        </div>

        {/* Metadata Table */}
        <div className="mt-4 space-y-2.5 text-[11px]">
          <div className="flex items-center justify-between py-1.5 border-b border-cyber/40">
            <span className="text-gray-400 uppercase tracking-wider font-semibold">ROLE</span>
            <span className="text-gray-100 font-medium font-sans">Software Developer / QA Intern</span>
          </div>

          <div className="flex items-center justify-between py-1.5 border-b border-cyber/40">
            <span className="text-gray-400 uppercase tracking-wider font-semibold">CORE STACK</span>
            <span className="text-neon-cyan font-semibold">Next.js • React 18 • TypeScript • Python</span>
          </div>

          <div className="flex items-center justify-between py-1.5 border-b border-cyber/40">
            <span className="text-gray-400 uppercase tracking-wider font-semibold">LOCATION</span>
            <span className="text-gray-300 font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3 text-neon-pink" />
              Addis Ababa, Ethiopia (UTC+3)
            </span>
          </div>

          <div className="flex items-center justify-between py-1.5">
            <span className="text-gray-400 uppercase tracking-wider font-semibold">OPPORTUNITY</span>
            <span className="flex items-center gap-1.5 text-neon-emerald font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald" />
              Seeking Developer / QA Internship
            </span>
          </div>
        </div>

        {/* Architecture Spec Grid (Always Visible) */}
        <div className="mt-4 pt-3 border-t border-cyber/60 bg-canvas-elevated/50 -mx-4 -mb-4 p-4 rounded-b-xl space-y-2">
          <div className="flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1 text-neon-cyan">
              <Cpu className="w-3 h-3" /> CORE ARCHITECTURE PILLARS
            </span>
            <span className="text-neon-pink">NEXT.JS APP ROUTER</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-300 font-mono">
            <div className="p-1.5 rounded bg-canvas border border-cyber">
              <span className="text-gray-400 block text-[9px] uppercase">FRONTEND</span>
              <span className="text-neon-cyan font-bold">Next.js 14 + Zustand</span>
            </div>
            <div className="p-1.5 rounded bg-canvas border border-cyber">
              <span className="text-gray-400 block text-[9px] uppercase">BACKEND &amp; DB</span>
              <span className="text-neon-emerald font-bold">Nest.js + PostgreSQL</span>
            </div>
            <div className="p-1.5 rounded bg-canvas border border-cyber">
              <span className="text-gray-400 block text-[9px] uppercase">PAYMENTS</span>
              <span className="text-white font-bold">TeleBirr API Integration</span>
            </div>
            <div className="p-1.5 rounded bg-canvas border border-cyber">
              <span className="text-gray-400 block text-[9px] uppercase">METHODOLOGY</span>
              <span className="text-neon-pink font-bold">SOLID &amp; Functional QA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
