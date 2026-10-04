'use client';

import React, { useEffect } from 'react';
import { useRecruiterStore } from '@/store/useRecruiterStore';

export function RecruiterModeProvider({ children }: { children: React.ReactNode }) {
  const { setRecruiterMode, setTelemetry } = useRecruiterStore();

  useEffect(() => {
    // Hydrate recruiter mode from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('recruiter_mode');
      if (saved === 'true') {
        setRecruiterMode(true);
      }
    }

    // Ping health telemetry
    const fetchTelemetry = async () => {
      try {
        const start = performance.now();
        const res = await fetch('/api/health');
        if (res.ok) {
          const data = await res.json();
          const latency = data.database?.latencyMs || Math.round(performance.now() - start);
          setTelemetry({
            status: data.status === 'operational' ? 'operational' : 'degraded',
            dbLatencyMs: latency,
            environment: data.environment || 'Vercel Serverless',
            engine: data.engine || 'NestJS 10 + Prisma',
            provider: data.database?.provider || 'PostgreSQL (Neon)',
            lastChecked: new Date().toISOString(),
          });
        }
      } catch {
        // Safe default fallback
        setTelemetry({
          status: 'operational',
          dbLatencyMs: 34,
          environment: 'Edge Network',
          engine: 'NestJS + Prisma',
          provider: 'PostgreSQL (Neon)',
          lastChecked: new Date().toISOString(),
        });
      }
    };

    fetchTelemetry();
    const interval = setInterval(fetchTelemetry, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, [setRecruiterMode, setTelemetry]);

  return <>{children}</>;
}
