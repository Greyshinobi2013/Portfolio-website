'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDrawer = () => {
    setDrawerOpen(true);
    if (drawerRef.current) {
      drawerRef.current.showModal();
    }
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    if (drawerRef.current) {
      drawerRef.current.close();
    }
  };

  return (
    <>
      <header
        className={`site-header ${
          sticky ? 'navbar--sticky' : 'bg-transparent'
        }`}
        id="main-nav"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mobile Drawer Hamburger */}
            <button
              onClick={openDrawer}
              aria-label="Open Navigation Drawer"
              className="md:hidden p-2 rounded-full text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>

            <h1 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
              <a
                href="#top"
                className="hover:text-diogo-cyan transition-colors flex items-center gap-2"
              >
                <span>Natnael Getachew</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-diogo-blue/20 text-diogo-cyan border border-diogo-cyan/30 hidden sm:inline">
                  MSc AI
                </span>
              </a>
            </h1>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 text-sm font-medium">
            <a
              href="#about"
              className="px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-all uppercase tracking-wider text-xs"
            >
              About
            </a>
            <a
              href="#capabilities"
              className="px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-all uppercase tracking-wider text-xs"
            >
              Capabilities
            </a>
            <a
              href="#projects"
              className="px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-all uppercase tracking-wider text-xs"
            >
              Projects
            </a>
            <a
              href="#timeline"
              className="px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-all uppercase tracking-wider text-xs"
            >
              Timeline
            </a>
            <a
              href="#contact"
              className="px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 transition-all uppercase tracking-wider text-xs"
            >
              Contact
            </a>

            <div className="h-4 w-px bg-white/20 mx-2"></div>

            <a
              href="/Natnael_Getachew_Software_CV.pdf"
              download="Natnael_Getachew_Software_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-diogo-brandBlue hover:bg-blue-600 text-white text-xs font-medium uppercase tracking-wider transition-all shadow-sm active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
          </div>
        </nav>

        {/* Mobile Drawer Native <dialog> */}
        <dialog
          ref={drawerRef}
          id="navbar-drawer"
          className="w-full h-full m-0 p-6 bg-charcoal text-[#e5e5e5] max-w-none max-h-none border-0"
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="font-display font-bold text-lg text-white">Menu Navigation</span>
            <button
              onClick={closeDrawer}
              aria-label="Close Navigation Drawer"
              className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6 flex flex-col gap-3 text-base">
            <a
              href="#about"
              onClick={closeDrawer}
              className="py-2.5 px-3 rounded-lg text-gray-200 hover:bg-white/10"
            >
              About &amp; Overview
            </a>
            <a
              href="#capabilities"
              onClick={closeDrawer}
              className="py-2.5 px-3 rounded-lg text-gray-200 hover:bg-white/10"
            >
              Architecture &amp; Capabilities
            </a>
            <a
              href="#projects"
              onClick={closeDrawer}
              className="py-2.5 px-3 rounded-lg text-gray-200 hover:bg-white/10"
            >
              Featured Top Projects
            </a>
            <a
              href="#timeline"
              onClick={closeDrawer}
              className="py-2.5 px-3 rounded-lg text-gray-200 hover:bg-white/10"
            >
              Career &amp; Academic Timeline
            </a>
            <a
              href="#contact"
              onClick={closeDrawer}
              className="py-2.5 px-3 rounded-lg text-gray-200 hover:bg-white/10"
            >
              Contact &amp; Ingress
            </a>
            <div className="pt-4 border-t border-white/10">
              <a
                href="/Natnael_Getachew_Software_CV.pdf"
                download
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-diogo-brandBlue text-white font-medium"
              >
                <Download className="w-4 h-4" />
                <span>Download Verified CV (PDF)</span>
              </a>
            </div>
          </div>
        </dialog>
      </header>

      {/* Sentinel element for header scroll trigger */}
      <div id="navbar-trigger" className="absolute top-20 left-0 w-px h-px pointer-events-none" />
    </>
  );
}
