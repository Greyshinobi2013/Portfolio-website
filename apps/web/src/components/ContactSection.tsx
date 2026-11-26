'use client';

import React, { useState } from 'react';
import { Send, Copy, Phone, Check, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Software Development Intern');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [feedback, setFeedback] = useState<{
    success: boolean;
    text: string;
  } | null>(null);

  const triggerShake = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 320);
  };

  const handleCopyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText('getachewnatnael55@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setFeedback({
          success: true,
          text: 'Message delivered. Natnael will get back to you soon.',
        });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFeedback({
          success: false,
          text: data?.error || 'Unable to send message. Please contact directly via email.',
        });
        triggerShake();
      }
    } catch {
      setFeedback({
        success: false,
        text: 'Network error. Please email directly at getachewnatnael55@gmail.com',
      });
      triggerShake();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-band--deep">
      <div className="container">
        <div className="section-head">
          <div className="space-y-3">
            <h2>Internship &amp; Contact Inquiry</h2>
            <p className="lead">Direct contact channels and project messaging.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 panels">
            <div className="panel-cell flex items-start justify-between gap-4">
              <div className="space-y-1 min-w-0">
                <div className="text-xs text-muted font-medium">Direct Email</div>
                <div>
                  <a
                    href="mailto:getachewnatnael55@gmail.com"
                    className="inline-link font-medium text-ink [overflow-wrap:anywhere]"
                  >
                    getachewnatnael55@gmail.com
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn--sm shrink-0"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-ok icon-pop-in" aria-hidden="true" />
                ) : (
                  <Copy className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
            </div>

            <div className="panel-cell flex items-start justify-between gap-4">
              <div className="space-y-1 min-w-0">
                <div className="text-xs text-muted font-medium">Phone</div>
                <div>
                  <a href="tel:+251983833337" className="inline-link measured font-medium whitespace-nowrap">
                    +251 983 833 337
                  </a>
                </div>
              </div>
              <a
                href="tel:+251983833337"
                className="btn btn--sm shrink-0"
                title="Call +251 983 833 337"
                aria-label="Call +251 983 833 337"
              >
                <Phone className="w-4 h-4 text-ok" aria-hidden="true" />
              </a>
            </div>

            <div className="panel-cell space-y-1">
              <div className="text-xs text-muted font-medium">Location</div>
              <div className="text-ink font-medium">Addis Ababa, Ethiopia</div>
            </div>

            <div className="panel-cell space-y-2">
              <div className="text-xs text-muted font-medium">Links</div>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <a
                  href="https://github.com/Greyshinobi2013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link inline-flex items-center gap-1.5"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/natnaelgetachew/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Wired Contact Form */}
          <div className="lg:col-span-7 panels">
            <div className="panel-cell space-y-6">
              <div className="space-y-1">
                <h3 className="text-ink">Send a Message or Internship Inquiry</h3>
                <p className="text-sm text-muted max-w-[65ch]">
                  Reach out regarding Software Development Internships, QA Engineering opportunities, or project collaboration.
                </p>
              </div>

              <form onSubmit={handleSubmit} className={`space-y-4 ${shaking ? 'form-shake' : ''}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-sm font-medium text-ink-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Hiring manager"
                      className="field-input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-sm font-medium text-ink-2">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="field-input"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-ink-2">
                    Inquiry Type
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="field-input"
                  >
                    <option value="Software Development Intern">Software Development Intern</option>
                    <option value="Software & QA Engineering Intern">Software &amp; QA Engineering Intern</option>
                    <option value="Junior Full-Stack Developer Role">Junior Full-Stack Developer Role</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-sm font-medium text-ink-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share role details, team context, or schedule…"
                    className="field-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn--primary w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>{loading ? 'Sending…' : 'Send Enquiry'}</span>
                </button>

                <div role="status" aria-live="polite" className="min-h-[1lh] text-sm">
                  {feedback && (
                    <p
                      className={`p-3 rounded border status-enter ${
                        feedback.success
                          ? 'bg-ok-soft text-ok border-rule-2'
                          : 'bg-bad-soft text-error border-rule-2'
                      }`}
                    >
                      {feedback.text}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
