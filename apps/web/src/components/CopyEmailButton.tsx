'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyEmailButtonProps {
  compact?: boolean;
  className?: string;
}

export default function CopyEmailButton({ compact = false, className = '' }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText('getachewnatnael55@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopyEmail}
      className={`btn btn--sm ${copied ? 'border-ok text-ok' : ''} ${className}`}
      title="Copy Email"
      aria-label="Copy email address getachewnatnael55@gmail.com"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-ok icon-pop-in" aria-hidden="true" />
          {!compact && <span>Copied</span>}
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" aria-hidden="true" />
          {!compact && <span>Copy email</span>}
        </>
      )}
    </button>
  );
}
