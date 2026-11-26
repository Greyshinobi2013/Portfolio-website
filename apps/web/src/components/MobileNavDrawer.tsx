'use client';

import React, { useRef } from 'react';
import { Download, Menu, X } from 'lucide-react';

const drawerLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#contact', label: 'Contact' },
];

export default function MobileNavDrawer() {
  const drawerRef = useRef<HTMLDialogElement | null>(null);

  const openDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.showModal();
    }
  };

  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.close();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openDrawer}
        aria-label="Open navigation menu"
        className="md:hidden btn btn--sm"
      >
        <Menu className="w-5 h-5" aria-hidden="true" />
      </button>

      <dialog
        ref={drawerRef}
        id="navbar-drawer"
        aria-label="Mobile navigation"
        className="drawer-dialog w-full h-full m-0 p-6 bg-paper text-ink max-w-none max-h-none border-0"
      >
        <div className="flex items-center justify-between pb-4 border-b border-rule">
          <span className="font-display font-medium text-lg text-ink">Navigation</span>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close navigation menu"
            className="btn btn--sm"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          {drawerLinks.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeDrawer}
              style={{ '--i': idx } as React.CSSProperties}
              className="nav-link drawer-nav-link"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-rule">
            <a
              href="/Natnael_Getachew_Software_CV.pdf"
              download="Natnael_Getachew_Software_CV.pdf"
              onClick={closeDrawer}
              className="btn btn--primary w-full"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Download Verified CV</span>
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
