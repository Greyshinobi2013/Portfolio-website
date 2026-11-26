'use client';

import React, { useEffect, useRef } from 'react';

interface TimelineScrollTrackProps {
  children: React.ReactNode;
}

export default function TimelineScrollTrack({ children }: TimelineScrollTrackProps) {
  const listRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let observer: IntersectionObserver | null = null;
    const rafId = requestAnimationFrame(() => {
      const items = Array.from(list.querySelectorAll<HTMLLIElement>('.trail-item'));
      if (items.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            } else if (entry.boundingClientRect.top > 0) {
              entry.target.classList.remove('is-visible');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -12% 0px',
        }
      );

      list.classList.add('js');
      items.forEach((el) => observer?.observe(el));
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <ol ref={listRef} className="trail-list">
      {children}
    </ol>
  );
}
