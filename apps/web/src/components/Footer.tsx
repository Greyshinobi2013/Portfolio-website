import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-paper py-12">
      <div className="container space-y-6">
        <div className="space-y-2 max-w-[65ch]">
          <p className="text-lg font-medium text-ink">Natnael Getachew</p>
          <p className="text-sm text-muted leading-relaxed">
            Software &amp; QA Engineering Intern, Master of Technology in Artificial Intelligence candidate,
            and Computer Engineering graduate.
          </p>
          <p className="text-sm text-cool">Addis Ababa, Ethiopia</p>
        </div>

        <nav aria-label="Footer links" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <a href="#about" className="inline-link">
            Overview
          </a>
          <a href="#projects" className="inline-link">
            Projects
          </a>
          <a href="#capabilities" className="inline-link">
            Skills
          </a>
          <a href="#timeline" className="inline-link">
            Timeline
          </a>
          <a href="#contact" className="inline-link">
            Contact
          </a>
          <a
            href="https://github.com/Greyshinobi2013"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/natnaelgetachew/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
          >
            LinkedIn
          </a>
          <a href="mailto:getachewnatnael55@gmail.com" className="inline-link">
            Email
          </a>
          <a
            href="/Natnael_Getachew_Software_CV.pdf"
            download="Natnael_Getachew_Software_CV.pdf"
            className="inline-link"
          >
            Verified CV
          </a>
        </nav>

        <div className="pt-6 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted">
          <p>Natnael Getachew, 2026</p>
          <p>Next.js 16 and TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
