'use client';

import React, { useState, useEffect } from 'react';
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
  FileText,
  RotateCcw,
  WifiOff,
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [hasDraft, setHasDraft] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
    latencyMs?: number;
    canRetry?: boolean;
    mailtoUrl?: string;
  } | null>(null);

  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Restore saved draft on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('contact_form_draft');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          if (parsed.name || parsed.email || parsed.subject || parsed.message) {
            setFormData({
              name: parsed.name || '',
              email: parsed.email || '',
              subject: parsed.subject || '',
              message: parsed.message || '',
            });
            setHasDraft(true);
          }
        }
      }
    } catch {
      // Ignore JSON parse errors
    }
  }, []);

  const updateField = (field: keyof typeof formData, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);

    const hasContent = Boolean(
      updated.name.trim() || updated.email.trim() || updated.subject.trim() || updated.message.trim()
    );
    setHasDraft(hasContent);

    try {
      if (hasContent) {
        localStorage.setItem('contact_form_draft', JSON.stringify(updated));
      } else {
        localStorage.removeItem('contact_form_draft');
      }
    } catch {
      // Ignore localStorage errors
    }
  };

  const clearDraft = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setHasDraft(false);
    try {
      localStorage.removeItem('contact_form_draft');
    } catch {
      // Ignore localStorage errors
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFeedback({
        type: 'error',
        message: 'Please fill out all required fields (Name, Email, Subject, Message).',
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);
    const start = performance.now();

    // 15-second timeout for flaky or ultra-slow connections
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      const data = await res.json();
      const latency = data.dbLatencyMs || Math.round(performance.now() - start);

      if (res.ok && data.success && data.isLiveDelivered) {
        setFeedback({
          type: 'success',
          message: `✔ Message delivered directly to Natnael's inbox! I will review and reply promptly.`,
          latencyMs: latency,
        });
        clearDraft();
      } else {
        const errorMsg =
          data.error ||
          'Could not dispatch to inbox. You can send your message directly using your email client below.';
        const mailto =
          data.mailtoFallback ||
          `mailto:getachewnatnael55@gmail.com?subject=${encodeURIComponent(
            `[Portfolio Inquiry] ${formData.subject}`
          )}&body=${encodeURIComponent(
            `Hi Natnael,\n\n${formData.message}\n\n---\nFrom: ${formData.name} (${formData.email})`
          )}`;
        setFeedback({
          type: 'error',
          message: errorMsg,
          canRetry: true,
          mailtoUrl: mailto,
        });
      }
    } catch (err) {
      clearTimeout(timeoutId);
      const isTimeout = (err as Error)?.name === 'AbortError';
      const msg = isTimeout
        ? 'Request timed out after 15s due to high network latency. Your message is safely preserved in draft.'
        : 'Network dropped or server unreachable. Your message is safely preserved in draft.';
      const mailto = `mailto:getachewnatnael55@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Natnael,\n\n${formData.message}\n\n---\nFrom: ${formData.name} (${formData.email})`
      )}`;

      setFeedback({
        type: 'error',
        message: msg,
        canRetry: true,
        mailtoUrl: mailto,
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
                Currently seeking a Software Developer or QA-focused internship where I can contribute to reliable,
                user-centered digital products and scalable systems.
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
                  aria-label="Copy direct email address to clipboard"
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
                  aria-label="Copy phone number to clipboard"
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
                href="https://github.com/Greyshinobi2013"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-canvas-card border border-cyber hover:border-gray-500 text-gray-200 font-mono text-xs font-semibold transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/natnaelgetachew"
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
                Send a message directly to my inbox. I will review and reply promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-[11px] text-gray-400 font-semibold block uppercase">
                      YOUR NAME
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      aria-required="true"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="e.g. Abebe Bikila"
                      className="w-full px-3 py-2.5 rounded-lg bg-canvas border border-cyber text-gray-100 placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-[11px] text-gray-400 font-semibold block uppercase">
                      YOUR EMAIL
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      aria-required="true"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="e.g. colleague@company.com"
                      className="w-full px-3 py-2.5 rounded-lg bg-canvas border border-cyber text-gray-100 placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-[11px] text-gray-400 font-semibold block uppercase">
                    SUBJECT / ROLE OPPORTUNITY
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    aria-required="true"
                    autoComplete="off"
                    value={formData.subject}
                    onChange={(e) => updateField('subject', e.target.value)}
                    placeholder="e.g. Software Developer Internship / Full-Stack Position"
                    className="w-full px-3 py-2.5 rounded-lg bg-canvas border border-cyber text-gray-100 placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-[11px] text-gray-400 font-semibold block uppercase">
                    MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    aria-required="true"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="Describe your team, timeline, or engineering challenge..."
                    className="w-full px-3 py-2.5 rounded-lg bg-canvas border border-cyber text-gray-100 placeholder-gray-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Draft auto-save indicator */}
                {hasDraft && (
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 bg-canvas-elevated px-3 py-1.5 rounded-md border border-cyber">
                    <div className="flex items-center gap-1.5 text-neon-cyan">
                      <FileText className="w-3.5 h-3.5 shrink-0" />
                      <span>Draft saved locally (safe from network loss)</span>
                    </div>
                    <button
                      type="button"
                      onClick={clearDraft}
                      className="text-gray-500 hover:text-neon-pink flex items-center gap-1 transition-colors text-[10px]"
                      title="Clear saved draft"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Clear</span>
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-neon-pink hover:bg-neon-magenta text-white font-mono text-xs font-bold tracking-wider transition-all shadow-pink-glow disabled:opacity-50 flex items-center justify-center gap-2 active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>SENDING MESSAGE...</span>
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
                    role="status"
                    aria-live="polite"
                    className={`mt-4 p-3.5 rounded-lg border font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fadeIn ${
                      feedback.type === 'success'
                        ? 'bg-neon-emerald/10 border-neon-emerald text-neon-emerald'
                        : 'bg-neon-pink/10 border-neon-pink text-neon-pink'
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-2 min-w-0">
                      {feedback.type === 'success' ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 sm:mt-0" />
                      ) : (
                        <span className="font-bold shrink-0 mt-0.5 sm:mt-0">✖</span>
                      )}
                      <span className="leading-relaxed">{feedback.message}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {feedback.mailtoUrl && (
                        <a
                          href={feedback.mailtoUrl}
                          className="px-2.5 py-1 rounded bg-neon-cyan/20 hover:bg-neon-cyan/40 border border-neon-cyan text-white text-[10px] font-bold tracking-wider uppercase transition-colors flex items-center gap-1"
                        >
                          <Mail className="w-3 h-3" />
                          <span>Open in Mail Client</span>
                        </a>
                      )}

                      {feedback.canRetry && (
                        <button
                          type="button"
                          onClick={() => handleSubmit()}
                          className="px-2.5 py-1 rounded bg-neon-pink/20 hover:bg-neon-pink/40 border border-neon-pink text-white text-[10px] font-bold tracking-wider uppercase transition-colors flex items-center gap-1"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>Retry</span>
                        </button>
                      )}
                    </div>
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
