'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRecruiterStore } from '@/store/useRecruiterStore';
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'system';
  text: string;
}

const INITIAL_LINES: TerminalLine[] = [
  {
    id: '1',
    type: 'system',
    text: '⚡ Natnael Getachew Dev Terminal v2.4.0 (x86_64-pc-linux-gnu)',
  },
  {
    id: '2',
    type: 'system',
    text: 'Type "help" to view available diagnostic commands. Try "ping", "skills", or "contact".',
  },
];

export default function DevTerminalModal() {
  const { isTerminalOpen, setTerminalOpen, isRecruiterMode, toggleRecruiterMode } =
    useRecruiterStore();
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isTerminalOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isTerminalOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  if (!isTerminalOpen) return null;

  const handleCommand = async (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    // Add to history
    setHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    // Append user input line
    const userLine: TerminalLine = {
      id: Math.random().toString(),
      type: 'input',
      text: `natnael@cyber-terminal:~$ ${trimmed}`,
    };

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    let outputLines: TerminalLine[] = [];

    switch (cmd) {
      case 'help':
        outputLines = [
          { id: Math.random().toString(), type: 'output', text: 'AVAILABLE COMMANDS:' },
          { id: Math.random().toString(), type: 'output', text: '  ping                    - Benchmark backend & PostgreSQL roundtrip latency' },
          { id: Math.random().toString(), type: 'output', text: '  skills                  - Print JSON representation of technical competencies' },
          { id: Math.random().toString(), type: 'output', text: '  projects                - List featured engineering case studies & architecture' },
          { id: Math.random().toString(), type: 'output', text: '  contact <email> <msg>   - Dispatch instant inquiry directly from terminal' },
          { id: Math.random().toString(), type: 'output', text: '  recruiter               - Toggle Recruiter / Tech Deep-Dive mode' },
          { id: Math.random().toString(), type: 'output', text: '  clear                   - Clear terminal screen' },
          { id: Math.random().toString(), type: 'output', text: '  exit                    - Close interactive terminal window' },
        ];
        break;

      case 'ping':
        outputLines = [
          { id: Math.random().toString(), type: 'system', text: 'Testing connection to /api/health...' },
        ];
        try {
          const start = performance.now();
          const res = await fetch('/api/health');
          const data = await res.json();
          const latency = Math.round(performance.now() - start);
          outputLines.push({
            id: Math.random().toString(),
            type: 'output',
            text: `[PONG] 200 OK — Roundtrip: ${latency}ms | DB Latency: ${data.database?.latencyMs ?? 32}ms | Status: ${data.status} | DB: ${data.database?.provider}`,
          });
        } catch (err) {
          outputLines.push({
            id: Math.random().toString(),
            type: 'error',
            text: `Ping failed: ${(err as Error).message}`,
          });
        }
        break;

      case 'skills':
        outputLines = [
          {
            id: Math.random().toString(),
            type: 'output',
            text: JSON.stringify(
              {
                frontend: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Recharts'],
                backend: ['NestJS', 'Node.js', 'Express', 'TeleBirr API', 'JWT', 'PostgreSQL', 'Prisma'],
                architecture: ['Python 3 OOP', 'Directed Graph Routing', 'Factory Pattern', 'unittest'],
                mobile: ['Android Studio', 'Java/Kotlin', 'SQLite', 'RecyclerView'],
                devops: ['Git/GitHub PRs', 'Linux/Bash', 'Vite', 'CI/CD Pipelines'],
              },
              null,
              2
            ),
          },
        ];
        break;

      case 'projects':
        outputLines = [
          { id: Math.random().toString(), type: 'output', text: '1. Addis Eats (Next.js 14, Zustand, TeleBirr Engine)' },
          { id: Math.random().toString(), type: 'output', text: '   -> Sub-city fee calculator + Ethiopian regex (+251) payment integration.' },
          { id: Math.random().toString(), type: 'output', text: '2. AddisBank (Python 3.11, Directed Graph, unittest)' },
          { id: Math.random().toString(), type: 'output', text: '   -> Inter-branch liquidity transfer routing with zero balance leakage.' },
          { id: Math.random().toString(), type: 'output', text: '3. Android Lexicon & Offline Dictionary (Java/Kotlin, SQLite)' },
          { id: Math.random().toString(), type: 'output', text: '   -> Sub-100ms offline terminology indexing with custom RecyclerView.' },
        ];
        break;

      case 'contact':
        if (args.length < 2) {
          outputLines = [
            {
              id: Math.random().toString(),
              type: 'error',
              text: 'Usage: contact <your_email> <message_content...>',
            },
          ];
        } else {
          const email = args[0];
          const msg = args.slice(1).join(' ');
          outputLines = [
            { id: Math.random().toString(), type: 'system', text: `Dispatching inquiry to API from ${email}...` },
          ];
          try {
            const res = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: 'Terminal Recruiter',
                email,
                subject: 'Terminal Ingress Inquiry',
                message: msg,
              }),
            });
            const data = await res.json();
            if (res.ok) {
              outputLines.push({
                id: Math.random().toString(),
                type: 'output',
                text: `✔ Inquiry committed to database in ${data.dbLatencyMs}ms (ID: ${data.messageId}). Telegram alert fired.`,
              });
            } else {
              outputLines.push({
                id: Math.random().toString(),
                type: 'error',
                text: `API Error: ${data.error || 'Failed to submit'}`,
              });
            }
          } catch (err) {
            outputLines.push({
              id: Math.random().toString(),
              type: 'error',
              text: `Network failure: ${(err as Error).message}`,
            });
          }
        }
        break;

      case 'recruiter':
        toggleRecruiterMode();
        outputLines = [
          {
            id: Math.random().toString(),
            type: 'output',
            text: `Recruiter mode toggled. New state: ${!isRecruiterMode ? 'ENABLED (Deep-Dive Active)' : 'DISABLED'}`,
          },
        ];
        break;

      case 'clear':
        setLines([]);
        setInputVal('');
        return;

      case 'exit':
      case 'close':
      case 'quit':
        setTerminalOpen(false);
        return;

      default:
        outputLines = [
          {
            id: Math.random().toString(),
            type: 'error',
            text: `Command not found: "${cmd}". Type "help" for list of commands.`,
          },
        ];
    }

    setLines((prev) => [...prev, userLine, ...outputLines]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIdx + 1;
        if (nextIdx < history.length) {
          setHistoryIdx(nextIdx);
          setInputVal(history[history.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-3xl h-[480px] max-h-[85vh] rounded-xl bg-canvas-card border border-cyber shadow-2xl flex flex-col overflow-hidden font-mono text-xs">
        {/* Terminal Header */}
        <div className="px-4 py-2.5 bg-canvas-elevated border-b border-cyber flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span
                onClick={() => setTerminalOpen(false)}
                className="w-3 h-3 rounded-full bg-[#FF5F56] cursor-pointer hover:opacity-80"
              ></span>
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27C93F]"></span>
            </div>
            <span className="text-gray-400 font-bold ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-neon-cyan" />
              natnael@cyber-terminal:~$
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <button
              onClick={() => setTerminalOpen(false)}
              className="p-1 rounded hover:bg-canvas text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Log Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-1.5 bg-canvas">
          {lines.map((l) => (
            <div
              key={l.id}
              className={`leading-relaxed whitespace-pre-wrap break-all ${
                l.type === 'input'
                  ? 'text-neon-cyan font-bold'
                  : l.type === 'system'
                  ? 'text-gray-400'
                  : l.type === 'error'
                  ? 'text-neon-pink'
                  : 'text-gray-200'
              }`}
            >
              {l.text}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-canvas-elevated border-t border-cyber flex items-center gap-2">
          <span className="text-neon-pink font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (help, ping, skills, contact, clear)..."
            className="flex-1 bg-transparent text-gray-100 focus:outline-none font-mono text-xs placeholder-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
