'use client';

import React, { useEffect } from 'react';
import { useNetworkStatus } from '@/store/useNetworkStatus';
import { WifiOff } from 'lucide-react';

export default function NetworkBanner() {
  const { isOnline, initNetworkListeners } = useNetworkStatus();

  useEffect(() => {
    const cleanup = initNetworkListeners();
    return cleanup;
  }, [initNetworkListeners]);

  // Only display an unobtrusive indicator when user is completely offline
  if (isOnline) {
    return null;
  }

  return (
    <aside
      aria-label="Offline status notification"
      className="w-full z-40 px-4 py-2 text-xs font-mono transition-all duration-300 border-b bg-rose-950/95 text-rose-200 border-rose-700 shadow-md flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-center gap-2.5">
        <WifiOff className="w-4 h-4 shrink-0 text-rose-400 animate-pulse" />
        <span>
          <strong className="font-bold">OFFLINE MODE:</strong> Network disconnected. Local drafts and cached portfolio content remain safely preserved.
        </span>
      </div>
    </aside>
  );
}
