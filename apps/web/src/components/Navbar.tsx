import React from 'react';
import { Download } from 'lucide-react';
import MobileNavDrawer from '@/components/MobileNavDrawer';

export default function Navbar() {
  return (
    <>
      <header className="site-header" id="main-nav">
        <nav aria-label="Primary navigation" className="container nav-inner">
          <div className="flex items-center gap-3">
            <MobileNavDrawer />

            <a href="#top" className="nav-brand whitespace-nowrap">
              <span>Natnael Getachew</span>
            </a>
            <span className="chip chip--cool hidden sm:inline-flex">M.Tech AI</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#capabilities" className="nav-link">
              Capabilities
            </a>
            <a href="#timeline" className="nav-link">
              Timeline
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <a
              href="/Natnael_Getachew_Software_CV.pdf"
              download="Natnael_Getachew_Software_CV.pdf"
              className="btn btn--sm ml-2"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </div>
        </nav>
      </header>
      <div id="navbar-trigger" className="absolute top-20 left-0 w-px h-px pointer-events-none" aria-hidden="true" />
    </>
  );
}
