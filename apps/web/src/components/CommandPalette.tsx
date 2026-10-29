'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import {
  Search,
  FolderGit2,
  Cpu,
  GraduationCap,
  Mail,
  Copy,
  Moon,
  Sun,
  Download,
  Check,
  User,
  X,
  Sparkles,
} from 'lucide-react';

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  category: 'Navigation' | 'Actions' | 'Preferences';
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText(null);
      onClose();
    }, 1200);
  };

  const commands: CommandItem[] = [
    {
      id: 'nav-about',
      title: 'About Natnael Getachew',
      subtitle: 'Overview, credentials, and executive summary',
      icon: <User className="w-4 h-4 text-agency-primary" />,
      category: 'Navigation',
      action: () => {
        window.location.hash = 'about';
        onClose();
      },
    },
    {
      id: 'nav-capabilities',
      title: 'Engineering Capabilities',
      subtitle: 'Frontend, Backend, AI/ML, and QA verification matrix',
      icon: <Cpu className="w-4 h-4 text-agency-cyan" />,
      category: 'Navigation',
      action: () => {
        window.location.hash = 'capabilities';
        onClose();
      },
    },
    {
      id: 'nav-projects',
      title: 'Featured Case Studies',
      subtitle: 'Addis Eats full-stack, TeleBirr simulator & QA suite',
      icon: <FolderGit2 className="w-4 h-4 text-agency-primary" />,
      category: 'Navigation',
      action: () => {
        window.location.hash = 'projects';
        onClose();
      },
    },
    {
      id: 'nav-experience',
      title: 'Experience & Credentials',
      subtitle: 'Defense Univ (MSc AI), Debre Birhan Univ (BSc), M.A.D Tech',
      icon: <GraduationCap className="w-4 h-4 text-agency-amber" />,
      category: 'Navigation',
      action: () => {
        window.location.hash = 'experience';
        onClose();
      },
    },
    {
      id: 'nav-contact',
      title: 'Get In Touch / Contact',
      subtitle: 'Direct email ingress, phone & recruiter message form',
      icon: <Mail className="w-4 h-4 text-agency-emerald" />,
      category: 'Navigation',
      action: () => {
        window.location.hash = 'contact';
        onClose();
      },
    },
    {
      id: 'action-copy-email',
      title: 'Copy Email Address',
      subtitle: 'getachewnatnael55@gmail.com',
      icon: <Copy className="w-4 h-4 text-agency-emerald" />,
      category: 'Actions',
      action: () => copyToClipboard('getachewnatnael55@gmail.com', 'Email copied!'),
    },
    {
      id: 'action-copy-phone',
      title: 'Copy Phone Number',
      subtitle: '+251 983 833 337 (Addis Ababa, Ethiopia)',
      icon: <Copy className="w-4 h-4 text-agency-cyan" />,
      category: 'Actions',
      action: () => copyToClipboard('+251983833337', 'Phone copied!'),
    },
    {
      id: 'action-download-cv',
      title: 'Download Resume / CV (PDF)',
      subtitle: 'Verified software developer & QA intern resume',
      icon: <Download className="w-4 h-4 text-agency-primary" />,
      category: 'Actions',
      action: () => {
        const link = document.createElement('a');
        link.href = '/Natnael_Getachew_Software_CV.pdf';
        link.download = 'Natnael_Getachew_Software_CV.pdf';
        link.click();
        onClose();
      },
    },
    {
      id: 'pref-theme',
      title: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      subtitle: 'Toggle theme appearance',
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-agency-amber" /> : <Moon className="w-4 h-4 text-agency-cyan" />,
      category: 'Preferences',
      action: () => {
        toggleTheme();
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Menu"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-canvas-card border border-cyber shadow-2xl overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-cyber gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search commands, projects, skills, or quick actions..."
            className="w-full bg-transparent text-sm text-gray-100 placeholder-gray-400 focus:outline-none border-none shadow-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-gray-400 hover:text-gray-100 hover:bg-canvas-elevated transition-colors"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Feedback Banner if text copied */}
        {copiedText && (
          <div className="px-4 py-2 bg-agency-emerald/15 border-b border-agency-emerald/30 text-agency-emerald text-xs flex items-center gap-2 font-medium">
            <Check className="w-4 h-4" />
            <span>{copiedText}</span>
          </div>
        )}

        {/* Commands List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-gray-400">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-agency-primary/15 text-agency-primary font-semibold border border-agency-primary/30'
                      : 'text-gray-300 hover:bg-canvas-elevated border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-canvas-elevated border border-cyber">
                      {cmd.icon}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium tracking-tight">
                        {cmd.title}
                      </div>
                      <div className="text-[11px] text-gray-400">{cmd.subtitle}</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-canvas border border-cyber text-gray-400 font-sans">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2.5 bg-canvas-subtle/50 border-t border-cyber flex items-center justify-between text-xs text-gray-400 font-sans">
          <div className="flex items-center gap-2">
            <span>Use</span>
            <kbd className="px-1.5 py-0.5 rounded bg-canvas border border-cyber text-[10px] font-mono">↑</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-canvas border border-cyber text-[10px] font-mono">↓</kbd>
            <span>to navigate</span>
            <kbd className="px-1.5 py-0.5 rounded bg-canvas border border-cyber text-[10px] font-mono">↵</kbd>
            <span>to select</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <span>Software &amp; QA Engineer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
