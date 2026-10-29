'use client';

import React, { useState, useEffect } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { Download, Menu, X, Sun, Moon, Search, Sparkles } from 'lucide-react';
import CommandPalette from './CommandPalette';

export default function Navbar() {
  const { theme, toggleTheme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('portfolio_theme');
    if (saved === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setTheme]);

  // Real-time Scroll-Spy Observer
  useEffect(() => {
    const sectionIds = ['about', 'capabilities', 'projects', 'experience', 'contact'];
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Global keyboard shortcut for Command Palette (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl bg-canvas/80 border-b border-cyber shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Monogram */}
          <a href="#about" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl bg-canvas-card border border-cyber group-hover:border-agency-primary/60 flex items-center justify-center font-mono text-xs font-extrabold text-agency-primary transition-all shadow-sm group-hover:scale-105 card-specular">
              <span>NG</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-agency-emerald pulsing-dot" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white group-hover:text-agency-primary transition-colors">
                Natnael Getachew
              </span>
              <span className="text-[11px] font-mono text-gray-400 group-hover:text-gray-300">
                Software &amp; QA Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links with Real-Time Scroll-Spy Active Indicator */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 p-1.5 rounded-full bg-canvas-card/75 border border-cyber backdrop-blur-md text-xs font-medium text-gray-300 card-specular">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full transition-all tracking-wide ${
                    isActive
                      ? 'bg-agency-primary text-white font-semibold shadow-sm'
                      : 'hover:text-white hover:bg-canvas-elevated text-gray-300'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={() => setCmdOpen(true)}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-canvas-card border border-cyber hover:border-gray-500 text-gray-400 hover:text-gray-200 text-xs transition-all group card-specular active:scale-[0.98]"
              title="Open Command Palette (⌘K)"
              aria-label="Open command palette"
            >
              <Search className="w-3.5 h-3.5 group-hover:text-agency-primary transition-colors" />
              <span>Quick actions</span>
              <kbd className="px-1.5 py-0.5 rounded bg-canvas-elevated border border-cyber text-[10px] text-gray-400 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Availability Pill */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-agency-emerald/10 border border-agency-emerald/30 text-xs text-agency-emerald font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-agency-emerald pulsing-dot" />
              <span>Available for hire</span>
            </div>

            {/* Download CV Action */}
            <a
              href="/Natnael_Getachew_Software_CV.pdf"
              download="Natnael_Getachew_Software_CV.pdf"
              aria-label="Download Natnael Getachew Software Engineering CV PDF"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-agency-primary hover:bg-agency-primary-hover text-white text-xs font-semibold tracking-normal transition-all shadow-agency-sm active:scale-[0.98]"
              title="Download verified resume / CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Resume</span>
              <span className="xs:hidden">CV</span>
            </a>

            {/* Light/Dark Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-canvas-card border border-cyber hover:border-gray-500 text-gray-300 hover:text-white transition-all flex items-center justify-center active:scale-[0.98] card-specular"
              title={mounted && theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle Theme"
            >
              {mounted && theme === 'light' ? (
                <Moon className="w-4 h-4 text-agency-primary" />
              ) : (
                <Sun className="w-4 h-4 text-agency-amber" />
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-canvas-card border border-cyber text-gray-300 hover:text-white transition-colors active:scale-[0.98]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-canvas-card/95 border-b border-cyber px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl animate-fade-in">
            <div className="flex items-center justify-between py-2 border-b border-cyber text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5 text-agency-emerald">
                <span className="w-1.5 h-1.5 rounded-full bg-agency-emerald pulsing-dot" />
                <span>Open for Engineering &amp; QA Roles</span>
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCmdOpen(true);
                }}
                className="text-agency-primary flex items-center gap-1 font-medium"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
              </button>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-agency-primary/15 text-agency-primary font-semibold'
                        : 'text-gray-200 hover:bg-canvas-elevated hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="/Natnael_Getachew_Software_CV.pdf"
                download="Natnael_Getachew_Software_CV.pdf"
                className="w-full py-2.5 rounded-xl bg-agency-primary hover:bg-agency-primary-hover text-white text-xs font-semibold flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download resume (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Command Palette Modal */}
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  );
}
