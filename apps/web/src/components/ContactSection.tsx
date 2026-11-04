'use client';

import React, { useState } from 'react';
import { Send, Copy, Phone, Clock, Share2, Check, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Software & QA Internship Offer');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    success: boolean;
    text: string;
  } | null>(null);

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
          text: '✓ Ingress message transmitted successfully. Natnael will respond within 24 hours.',
        });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFeedback({
          success: false,
          text: data?.error || 'Unable to transmit message. Please contact directly via email.',
        });
      }
    } catch (err) {
      setFeedback({
        success: false,
        text: 'Network error. Please email directly at getachewnatnael55@gmail.com',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-inverted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-1">
          <span className="inline-block font-mono text-xs font-semibold tracking-widest uppercase text-diogo-blue mb-1">
            // Collaboration &amp; Ingress
          </span>
          <h2>Contact Me</h2>
          <h3>Direct recruiter channel &amp; engineering ingress</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Ingress Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Ingress Card */}
            <div className="p-5 rounded-lg border border-gray-200 bg-gray-50 flex items-start justify-between shadow-sm">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                  Direct Inbox
                </span>
                <a
                  href="mailto:getachewnatnael55@gmail.com"
                  className="text-sm font-bold text-gray-900 hover:text-diogo-blue transition-colors"
                >
                  getachewnatnael55@gmail.com
                </a>
                <span className="text-xs text-gray-500 block">
                  Typical response within 24 hours
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Ingress Card */}
            <div className="p-5 rounded-lg border border-gray-200 bg-gray-50 flex items-start justify-between shadow-sm">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                  Phone &amp; Telegram
                </span>
                <span className="text-sm font-bold text-gray-900 font-mono">
                  +251 92 378 9370
                </span>
                <span className="text-xs text-gray-500 block">
                  Direct calling &amp; Telegram message ingress
                </span>
              </div>
              <div className="p-2.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Phone className="w-4 h-4 shrink-0" />
              </div>
            </div>

            {/* Location & Working Timezone Card */}
            <div className="p-5 rounded-lg border border-gray-200 bg-gray-50 flex items-start justify-between shadow-sm">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block">
                  Location &amp; Working Timezone
                </span>
                <span className="text-sm font-bold text-gray-900">Addis Ababa, Ethiopia</span>
                <span className="text-xs text-emerald-700 font-mono font-medium block flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 pulsing-dot"></span>
                  UTC+3 (EAT) • Active 08:00 – 18:00 EAT
                </span>
              </div>
              <div className="p-2.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                <Clock className="w-4 h-4 shrink-0" />
              </div>
            </div>

            {/* Developer Channels Card */}
            <div className="p-5 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-between shadow-sm">
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                  Developer Profiles
                </span>
                <div className="flex items-center gap-3 text-xs font-mono font-semibold">
                  <a
                    href="https://github.com/Greyshinobi2013"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-diogo-blue flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-gray-300">•</span>
                  <a
                    href="https://www.linkedin.com/in/natnael-getachew-25b8211ba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-diogo-blue flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="p-2.5 rounded bg-gray-100 text-gray-600 border border-gray-200">
                <Share2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-elevation-2">
            <h4 className="font-display font-bold text-xl text-gray-900 mb-1">
              Send a Message or Project Inquiry
            </h4>
            <p className="text-xs text-gray-500 mb-6">
              Whether you have an internship opportunity, contract work, or a technical inquiry, feel free to reach out.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:border-diogo-blue focus:outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:border-diogo-blue focus:outline-none bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Inquiry Type
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:border-diogo-blue focus:outline-none bg-white"
                >
                  <option value="Software & QA Internship Offer">Software &amp; QA Internship Offer</option>
                  <option value="Junior / Full-Stack Developer Role">Junior / Full-Stack Developer Role</option>
                  <option value="Fintech / TeleBirr Consulting & Contract">Fintech / TeleBirr Consulting &amp; Contract</option>
                  <option value="General Technical Inquiry">General Technical Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello Natnael, I came across your portfolio and would love to discuss an engineering opportunity..."
                  className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-sm focus:border-diogo-blue focus:outline-none bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded bg-diogo-brandBlue hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {loading ? (
                  <>
                    <span className="animate-spin mr-1">◌</span>
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Ingress Message</span>
                  </>
                )}
              </button>

              {feedback && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`p-3 rounded text-center text-xs font-medium ${
                    feedback.success
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {feedback.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
