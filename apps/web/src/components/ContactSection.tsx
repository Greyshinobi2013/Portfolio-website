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
  MessageSquare,
  ArrowRight,
  ExternalLink,
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
  const [currentTime, setCurrentTime] = useState('');

  // Live Addis Ababa Clock
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

  const subjectPills = [
    'Software Developer Role',
    'QA Engineer Internship',
    'Full-Stack Project',
    'Technical Advisory',
  ];

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFeedback({
        type: 'error',
        message: 'Please complete all required fields (Name, Email, Subject, Message).',
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

      const elapsed = Math.round(performance.now() - start);

      if (res.ok) {
        setFeedback({
          type: 'success',
          message: 'Message dispatched successfully to Natnael Getachew. I will respond within 24 hours.',
          latencyMs: elapsed,
        });
        clearDraft();
      } else {
        const mailto = `mailto:getachewnatnael55@gmail.com?subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(
          `Hi Natnael,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        setFeedback({
          type: 'error',
          message: 'API dispatch delayed. Your message draft is safely preserved below, or click below to send via your email client.',
          latencyMs: elapsed,
          canRetry: true,
          mailtoUrl: mailto,
        });
      }
    } catch {
      const elapsed = Math.round(performance.now() - start);
      const mailto = `mailto:getachewnatnael55@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Hi Natnael,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setFeedback({
        type: 'error',
        message: 'Network connection interrupted. Draft is preserved. Use direct email fallback below.',
        latencyMs: elapsed,
        canRetry: true,
        mailtoUrl: mailto,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-canvas border-b border-cyber relative scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-agency-emerald/10 border border-agency-emerald/20 text-agency-emerald text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT RECRUITER &amp; INQUIRY INGRESS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Exceptional Together
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            Actively seeking a <strong className="text-white font-medium">Software Developer</strong> or{' '}
            <strong className="text-white font-medium">Quality Assurance (QA)</strong> internship.
            Reach out via the interactive form below or direct channels.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* =========================================================================
              LEFT COLUMN: DIRECT CHANNELS & TIMEZONE BEACON
             ========================================================================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* Availability & Response Commitment Card */}
            <div className="rounded-2xl bg-canvas-card border border-cyber p-6 space-y-4 shadow-agency-card card-specular">
              <div className="flex items-center justify-between pb-3 border-b border-cyber">
                <span className="text-xs font-mono text-gray-400 font-bold uppercase">
                  AVAILABILITY STATUS
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-agency-emerald/10 border border-agency-emerald/30 text-agency-emerald text-[11px] font-mono font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-agency-emerald pulsing-dot" />
                  <span>Immediate Start</span>
                </span>
              </div>

              {/* Local Clock */}
              <div className="p-3.5 rounded-xl bg-canvas-elevated border border-cyber flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-4 h-4 text-agency-cyan" />
                  <span>Addis Ababa, Ethiopia (UTC+3):</span>
                </div>
                <span className="text-agency-cyan font-bold">{currentTime || '12:00 PM'}</span>
              </div>

              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex items-center gap-2 text-agency-emerald font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Guaranteed response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-agency-rose shrink-0" />
                  <span>Open to onsite in Addis Ababa &amp; remote global roles</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Channels Card */}
            <div className="rounded-2xl bg-canvas-card border border-cyber p-6 space-y-4 shadow-agency-card card-specular">
              <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                Direct Communication Channels
              </h3>

              {/* Email One-Click Copy */}
              <div className="p-3.5 rounded-xl bg-canvas-elevated border border-cyber flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-agency-primary/10 border border-agency-primary/20 text-agency-primary shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] text-gray-400 block font-sans">Primary Email</span>
                    <a
                      href="mailto:getachewnatnael55@gmail.com"
                      className="text-xs sm:text-sm font-medium text-white hover:text-agency-primary transition-colors truncate block"
                    >
                      getachewnatnael55@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard('getachewnatnael55@gmail.com', 'email')}
                  className="p-2 rounded-lg bg-canvas hover:bg-canvas-card text-gray-400 hover:text-white border border-cyber text-xs transition-colors shrink-0 active:scale-[0.98]"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-agency-emerald" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone One-Click Copy */}
              <div className="p-3.5 rounded-xl bg-canvas-elevated border border-cyber flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-agency-emerald/10 border border-agency-emerald/20 text-agency-emerald shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] text-gray-400 block font-sans">Direct Mobile &amp; WhatsApp</span>
                    <a
                      href="tel:+251983833337"
                      className="text-xs sm:text-sm font-medium text-white hover:text-agency-emerald transition-colors font-mono truncate block"
                    >
                      +251 983 833 337
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard('+251983833337', 'phone')}
                  className="p-2 rounded-lg bg-canvas hover:bg-canvas-card text-gray-400 hover:text-white border border-cyber text-xs transition-colors shrink-0 active:scale-[0.98]"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-agency-emerald" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Social / Messaging Chips */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                <a
                  href="https://linkedin.com/in/natnaelgetachew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-canvas-elevated border border-cyber hover:border-gray-500 text-gray-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-agency-primary" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Greyshinobi2013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-canvas-elevated border border-cyber hover:border-gray-500 text-gray-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://wa.me/251983833337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-canvas-elevated border border-cyber hover:border-gray-500 text-gray-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-agency-emerald" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://t.me/Greyshinobi2013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-canvas-elevated border border-cyber hover:border-gray-500 text-gray-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-agency-cyan" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: INTERACTIVE INQUIRY FORM WITH AUTO-DRAFT
             ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-canvas-card border border-cyber p-6 sm:p-8 shadow-agency-card card-specular">
              {/* Form Top HUD */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-cyber">
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                  Direct Message Ingress
                </span>

                {hasDraft && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-agency-emerald flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-agency-emerald pulsing-dot" />
                      <span>Draft saved locally</span>
                    </span>
                    <button
                      onClick={clearDraft}
                      className="text-xs text-gray-400 hover:text-agency-rose underline flex items-center gap-1 active:scale-[0.98]"
                      title="Clear saved message draft"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Feedback Alert Banner */}
              {feedback && (
                <div
                  className={`p-4 rounded-xl mb-6 text-xs sm:text-sm font-medium ${
                    feedback.type === 'success'
                      ? 'bg-agency-emerald/15 border border-agency-emerald/30 text-agency-emerald'
                      : 'bg-agency-rose/15 border border-agency-rose/30 text-rose-200'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {feedback.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    ) : (
                      <Mail className="w-5 h-5 shrink-0 mt-0.5 text-agency-rose" />
                    )}
                    <div className="space-y-1.5">
                      <p>{feedback.message}</p>
                      {feedback.latencyMs && (
                        <p className="text-xs font-mono opacity-80">
                          Telemetry: Dispatch completed in {feedback.latencyMs}ms.
                        </p>
                      )}
                      {feedback.mailtoUrl && (
                        <div className="pt-2">
                          <a
                            href={feedback.mailtoUrl}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-agency-primary hover:bg-agency-primary-hover text-white text-xs font-semibold transition-colors active:scale-[0.98]"
                          >
                            <span>Open in email client</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Subject Select Pills */}
              <div className="mb-5">
                <label className="block text-xs font-medium text-gray-300 mb-2">
                  Select inquiry type:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {subjectPills.map((pill) => (
                    <button
                      key={pill}
                      type="button"
                      onClick={() => updateField('subject', pill)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all active:scale-[0.98] ${
                        formData.subject === pill
                          ? 'bg-agency-primary text-white border-agency-primary font-semibold shadow-agency-sm'
                          : 'bg-canvas-elevated border-cyber text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      {pill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="e.g. Alex Chen"
                      className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-cyber text-sm text-white placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-cyber text-sm text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Subject / Target Role *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => updateField('subject', e.target.value)}
                    placeholder="e.g. Software Developer Internship Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-cyber text-sm text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-medium text-gray-300">
                      Message &amp; Role Details *
                    </label>
                    <span className="text-xs font-mono text-gray-400">
                      {formData.message.length} characters
                    </span>
                  </div>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="Provide overview of the opportunity, team context, or project scope..."
                    className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-cyber text-sm text-white placeholder-gray-500 resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-gray-400">
                    Draft persists across browser reloads • Zero recruiter loss
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-agency-primary hover:bg-agency-primary-hover disabled:opacity-50 text-white text-xs font-semibold tracking-normal transition-all shadow-agency-glow active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
