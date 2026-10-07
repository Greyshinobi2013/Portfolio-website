import { create } from 'zustand';

export type EffectiveConnectionType = 'slow-2g' | '2g' | '3g' | '4g' | 'unknown';

export interface NetworkState {
  isOnline: boolean;
  effectiveType: EffectiveConnectionType;
  saveData: boolean;
  downlink: number | null;
  rtt: number | null;
  isSlowNetwork: boolean;
  isBannerDismissed: boolean;
  dismissBanner: () => void;
  updateNetworkState: () => void;
  initNetworkListeners: () => () => void;
}

export const useNetworkStatus = create<NetworkState>((set, get) => ({
  isOnline: true,
  effectiveType: 'unknown',
  saveData: false,
  downlink: null,
  rtt: null,
  isSlowNetwork: false,
  isBannerDismissed: false,

  dismissBanner: () => set({ isBannerDismissed: true }),

  updateNetworkState: () => {
    if (typeof window === 'undefined') return;

    const isOnline = navigator.onLine;
    // Network Information API (Chrome, Edge, Android Chrome, Opera)
    const conn =
      (navigator as unknown as { connection?: { effectiveType?: string; saveData?: boolean; downlink?: number; rtt?: number; addEventListener?: (event: string, cb: () => void) => void } })
        .connection;

    const effectiveType = (conn?.effectiveType as EffectiveConnectionType) || (isOnline ? '4g' : 'unknown');
    const saveData = Boolean(conn?.saveData);
    const downlink = typeof conn?.downlink === 'number' ? conn.downlink : null;
    const rtt = typeof conn?.rtt === 'number' ? conn.rtt : null;

    const isSlow =
      !isOnline ||
      saveData ||
      effectiveType === 'slow-2g' ||
      effectiveType === '2g' ||
      effectiveType === '3g' ||
      (rtt !== null && rtt > 600);

    if (isSlow) {
      document.documentElement.classList.add('slow-connection');
    } else {
      document.documentElement.classList.remove('slow-connection');
    }

    if (saveData) {
      document.documentElement.classList.add('save-data');
    } else {
      document.documentElement.classList.remove('save-data');
    }

    set({
      isOnline,
      effectiveType,
      saveData,
      downlink,
      rtt,
      isSlowNetwork: isSlow,
    });
  },

  initNetworkListeners: () => {
    if (typeof window === 'undefined') return () => {};

    const { updateNetworkState } = get();
    updateNetworkState();

    const handleOnline = () => updateNetworkState();
    const handleOffline = () => updateNetworkState();

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const conn = (
      navigator as unknown as {
        connection?: {
          addEventListener?: (event: string, cb: () => void) => void;
          removeEventListener?: (event: string, cb: () => void) => void;
        };
      }
    ).connection;

    const handleConnChange = () => updateNetworkState();
    if (conn && typeof conn.addEventListener === 'function') {
      conn.addEventListener('change', handleConnChange);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (conn && typeof conn.removeEventListener === 'function') {
        conn.removeEventListener('change', handleConnChange);
      }
    };
  },
}));
