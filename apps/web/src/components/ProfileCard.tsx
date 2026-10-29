'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  ShieldCheck,
  Code2,
} from 'lucide-react';

export default function ProfileCard() {
  const [imgSrc, setImgSrc] = useState('/avatar.webp');
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // 3D Tilt & Specular Glare state
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  // Live Addis Ababa (UTC+3) Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Addis_Ababa',
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setCurrentTime(timeStr);
      } catch {
        setCurrentTime('UTC+3 EAT');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('getachewnatnael55@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -5; // max 5 deg tilt
    const rotY = ((x - centerX) / centerX) * 5;
    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm sm:max-w-md mx-auto group perspective-[1000px]"
    >
      {/* Subtle ambient back-glow */}
      <div className="absolute -inset-1 bg-gradient-to-tr from-agency-primary/20 via-agency-cyan/15 to-agency-emerald/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />

      {/* Main Agency Portfolio Card with 3D Tilt */}
      <div
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out, border-color 0.3s ease',
        }}
        className="relative rounded-2xl bg-canvas-card border border-cyber p-5 sm:p-6 shadow-agency-card card-specular group-hover:border-agency-primary/40 overflow-hidden"
      >
        {/* Dynamic Specular Glare Overlay */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}), transparent 60%)`,
          }}
        />

        {/* Card Header: Verification & Status */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-cyber text-xs">
          <div className="flex items-center gap-1.5 text-gray-400 font-mono text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-agency-primary" />
            <span className="font-semibold text-gray-300">VERIFIED ENGINEER</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-agency-emerald/10 border border-agency-emerald/20 text-agency-emerald text-[11px] font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-agency-emerald pulsing-dot" />
            <span>AVAILABLE TO HIRE</span>
          </div>
        </div>

        {/* High-Fidelity Portrait Frame */}
        <div className="relative rounded-xl overflow-hidden border border-cyber bg-canvas-elevated">
          <div className="relative w-full aspect-[4/3] min-h-[250px] sm:min-h-[290px] overflow-hidden">
            <Image
              src={imgSrc}
              alt="Natnael Getachew - Software Developer & QA Engineer"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
              onError={() => setImgSrc('/avatar.png')}
            />

            {/* Gradient shadow for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

            {/* Floating name badge over image */}
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-xs font-mono text-agency-cyan font-semibold">
                  MSc AI Scholar • BSc CompEng
                </span>
              </div>
              <h3 className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight drop-shadow-sm">
                Natnael Getachew
              </h3>
              <p className="text-gray-300 text-xs font-medium">
                Software Developer &amp; Quality Assurance Intern
              </p>
            </div>
          </div>
        </div>

        {/* Live Local Time & Location Pill */}
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="p-2.5 rounded-xl bg-canvas-elevated/70 border border-cyber flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-agency-rose shrink-0" />
            <div className="truncate">
              <span className="text-[10px] text-gray-400 block">LOCATION</span>
              <span className="text-gray-200 font-medium text-[11px]">Addis Ababa, ET</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-canvas-elevated/70 border border-cyber flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-agency-cyan shrink-0" />
            <div className="truncate">
              <span className="text-[10px] text-gray-400 block">LOCAL TIME (EAT)</span>
              <span className="text-agency-cyan font-semibold text-[11px]">
                {currentTime || 'Loading...'}
              </span>
            </div>
          </div>
        </div>

        {/* Core Pillars List */}
        <div className="mt-4 space-y-2 text-xs">
          <div className="flex items-center justify-between py-1.5 border-b border-cyber/50">
            <span className="text-gray-400 text-[11px]">Focus</span>
            <span className="text-gray-200 font-medium">Full-Stack Web &amp; QA Engineering</span>
          </div>
          <div className="flex items-center justify-between py-1.5 border-b border-cyber/50">
            <span className="text-gray-400 text-[11px]">Core Stack</span>
            <span className="text-agency-primary font-mono text-[11px] font-semibold">
              Next.js 16 • React 18 • TypeScript
            </span>
          </div>
          <div className="flex items-center justify-between py-1.5 border-b border-cyber/50">
            <span className="text-gray-400 text-[11px]">AI &amp; Backend</span>
            <span className="text-agency-emerald font-mono text-[11px] font-semibold">
              Python • NestJS • TeleBirr API
            </span>
          </div>
          <div className="flex items-center justify-between py-1.5">
            <span className="text-gray-400 text-[11px]">Education</span>
            <span className="text-gray-300 text-[11px]">Defense Univ (MSc) &amp; DBU (BSc)</span>
          </div>
        </div>

        {/* Quick Connect Channels */}
        <div className="mt-4 pt-3.5 border-t border-cyber flex items-center justify-between gap-2">
          <button
            onClick={handleCopyEmail}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-canvas-elevated hover:bg-canvas text-gray-300 hover:text-white border border-cyber text-xs font-mono transition-all active:scale-95"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-agency-emerald" />
                <span className="text-agency-emerald font-semibold">COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-gray-400" />
                <span>COPY EMAIL</span>
              </>
            )}
          </button>

          <a
            href="https://github.com/Greyshinobi2013"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-canvas-elevated hover:bg-canvas text-gray-300 hover:text-white border border-cyber transition-all"
            title="Visit GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://linkedin.com/in/natnaelgetachew"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-canvas-elevated hover:bg-canvas text-gray-300 hover:text-white border border-cyber transition-all"
            title="Visit LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
