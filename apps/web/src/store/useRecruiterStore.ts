import { create } from 'zustand';

export interface TelemetryState {
  status: 'operational' | 'connecting' | 'degraded';
  dbLatencyMs: number;
  environment: string;
  engine: string;
  provider: string;
  lastChecked: string;
}

interface RecruiterStore {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
  setRecruiterMode: (val: boolean) => void;

  isTerminalOpen: boolean;
  toggleTerminal: () => void;
  setTerminalOpen: (val: boolean) => void;

  telemetry: TelemetryState;
  setTelemetry: (telemetry: Partial<TelemetryState>) => void;
}

export const useRecruiterStore = create<RecruiterStore>((set) => ({
  isRecruiterMode: false,
  toggleRecruiterMode: () =>
    set((state) => {
      const next = !state.isRecruiterMode;
      if (typeof window !== 'undefined') {
        localStorage.setItem('recruiter_mode', next ? 'true' : 'false');
      }
      return { isRecruiterMode: next };
    }),
  setRecruiterMode: (val: boolean) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('recruiter_mode', val ? 'true' : 'false');
    }
    set({ isRecruiterMode: val });
  },

  isTerminalOpen: false,
  toggleTerminal: () => set((state) => ({ isTerminalOpen: !state.isTerminalOpen })),
  setTerminalOpen: (val: boolean) => set({ isTerminalOpen: val }),

  telemetry: {
    status: 'operational',
    dbLatencyMs: 38,
    environment: 'Vercel Serverless',
    engine: 'NestJS 10 + Prisma',
    provider: 'PostgreSQL (Neon)',
    lastChecked: new Date().toISOString(),
  },
  setTelemetry: (newTelemetry) =>
    set((state) => ({
      telemetry: { ...state.telemetry, ...newTelemetry },
    })),
}));
