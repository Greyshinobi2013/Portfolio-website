'use client';

import React, { useState } from 'react';
import { useRecruiterStore } from '@/store/useRecruiterStore';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Github,
  Linkedin,
  Clock,
  Sparkles,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

export default function ContactSection() {
  const { isRecruiterMode } = useRecruiterStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
    latencyMs?: number;
  } | null>(null);

  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFeedback({
        type: 'error',
        message: 'Please fill out all required fields.',
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);
    const start = performance.now();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      const latency = data.dbLatencyMs || Math.round(performance.now() - start);

      if (res.ok && data.success) {
        setFeedback({
          type: 'success',
          message: `Saved to PostgreSQL in ${latency}ms — Instant alert dispatched to Natnael's phone`,
          latencyMs: latency,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFeedback({
          type: 'error',
          message: data.error || 'Failed to dispatch inquiry. Please try again.',
        });
      }
    } catch (err) {
      setFeedback({
        type: 'error',
        message: 'Network error communicating with API. Please check connection.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-canvas border-b border-cyber relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-amber-400 font-semibold tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>:: LET&apos;S CONNECT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s Build Something Exceptional Together
              </h2>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                Currently available for software developer internships, junior full-stack engineering roles, and
                high-impact technology collaborations.
              </p>
            </div>

            {/* Direct Channels List */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email Box */}
              <div className="p-3.5 rounded-xl bg-canvas-card border border-cyber flex items-center justify-between group hover:border-neon-cyan/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-wider">
                      DIRECT EMAIL
                    </span>
                    <span className="text-gray-200 font-medium select-all">
                      getachewnatnael55@gmail.com
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('getachewnatnael55@gmail.com', 'email')}
                  className="p-1.5 rounded hover:bg-canvas-elevated text-gray-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-neon-emerald" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone / Telegram Box */}
              <div className="p-3.5 rounded-xl bg-canvas-card border border-cyber flex items-center justify-between group hover:border-neon-pink/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-neon-pink/10 border border-neon-pink/30 text-neon-pink">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-wider">
                      PHONE / TELEGRAM
                    </span>
                    <span className="text-gray-200 font-medium select-all">
                      +251 983 833 337
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+251983833337', 'phone')}
                  className="p-1.5 rounded hover:bg-canvas-elevated text-gray-400 hover:text-white transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-neon-emerald" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Box */}
              <div className="p-3.5 rounded-xl bg-canvas-card border border-cyber flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-amber-400/10 border border-amber-400/30 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-wider">
                      PHYSICAL LOCATION
                    </span>
                    <span className="text-gray-200 font-medium">
                      Addis Ababa, Ethiopia (Open to Remote)
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-amber-400/30 bg-amber-400/10 text-amber-400">
                  RELOCATE / REMOTE
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="https://github.com/NatnaelGetachew"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-canvas-card border border-cyber hover:border-gray-500 text-gray-200 font-mono text-xs font-semibold transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/natnael-getachew"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-canvas-card border border-cyber hover:border-neon-cyan text-gray-200 hover:text-neon-cyan font-mono text-xs font-semibold transition-colors"
              >
                <Linkedin className="w-4 h-4 text-neon-cyan" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Dark Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-canvas-card border border-cyber p-6 sm:p-8 shadow-card-glow relative">
              <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-gray-400 mb-6 font-mono">
                Drop an opportunity inquiry, code question, or collaboration proposal below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] text-gray-400 font-semibold block uppercase">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Abebe Bikila"
                      className="w-full px-3 py-2.5 rounded-lg bg-canvas border border-cyber text-gray-100 placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] text-gray-400 font-semibold block uppercase">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. colleague@company.com"
                      className="w-full px-3 py-2.5 rounded-lg bg-canvas border border-cyber text-gray-100 placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label className="text-[11px] text-gray-400 font-semibold block uppercase">
                    SUBJECT / ROLE OPPORTUNITY
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Developer Internship / Full-Stack Position"
                    className="w-full px-3 py-2.5 rounded-lg bg-canvas border border-cyber text-gray-100 placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="text-[11px] text-gray-400 font-semibold block uppercase">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your team, timeline, or engineering challenge..."
                    className="w-full px-3 py-2.5 rounded-lg bg-canvas border border-cyber text-gray-100 placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-neon-pink hover:bg-neon-magenta text-white font-mono text-xs font-bold tracking-wider transition-all shadow-pink-glow disabled:opacity-50 flex items-center justify-center gap-2 active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>DISPATCHING TO INGRESS...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Feedback Toast */}
                {feedback && (
                  <div
                    className={`mt-4 p-3 rounded-lg border font-mono text-xs flex items-center gap-2 animate-fadeIn ${
                      feedback.type === 'success'
                        ? 'bg-neon-emerald/10 border-neon-emerald text-neon-emerald'
                        : 'bg-neon-pink/10 border-neon-pink text-neon-pink'
                    }`}
                  >
                    {feedback.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    ) : (
                      <span className="font-bold">✖</span>
                    )}
                    <span>{feedback.message}</span>
                  </div>
                )}

                {/* Recruiter Mode Wire Payload Preview */}
                {isRecruiterMode && (
                  <div className="mt-4 pt-3 border-t border-neon-pink/30 font-mono text-[10px] space-y-1.5 animate-fadeIn">
                    <div className="text-neon-pink font-bold flex items-center gap-1">
                      <Terminal className="w-3 h-3" />
                      <span>API INGRESS INSPECTOR: POST /api/contact</span>
                    </div>
                    <pre className="p-2.5 rounded bg-canvas border border-cyber text-gray-400 overflow-x-auto">
{JSON.stringify(
  {
    endpoint: '/api/contact',
    method: 'POST',
    rateLimit: '5 requests / min (per IP)',
    headers: { 'Content-Type': 'application/json' },
    body: {
      name: formData.name || '<name>',
      email: formData.email || '<email>',
      subject: formData.subject || '<subject>',
      message: formData.message || '<message>',
    },
  },
  null,
  2
)}
                    </pre>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
