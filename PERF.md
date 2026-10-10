# Portfolio & Case Studies Showcase — Performance Budget Audit (`PERF.md`)

**Course:** CodeOps Full Stack Software Development  
**Module:** Module 3 · Frontend: React & Next.js · Capstone Project Alignment (Week 9 · Day 45)  
**Author:** Natnael Getachew (`Greyshinobi2013`)  
**Repository:** `portfolio-website`  
**Live Production URL:** [https://portfolio-website-rho-three-54.vercel.app](https://portfolio-website-rho-three-54.vercel.app)  

---

## 1. Executive Summary & Production Performance Goals

A developer portfolio must serve as living proof of engineering discipline. On mobile networks in Addis Ababa and international recruiter connections alike, slow load times, uncompressed media, or jarring Cumulative Layout Shifts reflect poor frontend hygiene.

During this milestone, the portfolio underwent an end-to-end performance audit and optimization pass across Core Web Vitals (LCP, CLS, INP, and First Load JS).

---

## 2. Decision Table Three: The Performance Budget Matrix

*Audited on the live deployed Vercel production build under mobile 4G network throttling and 4x CPU slowdown.*

| Measure | Target | Before (Baseline) | After (Optimized) | Percentage Delta | What Moved It (Root Cause) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **LCP, throttled** | **Under 2.5s** | 4.62s | **1.45s** | **-68.6%** | Converted uncompressed camera portrait to `avatar.webp` with explicit dimensions and preloading. |
| **CLS** | **Under 0.1** | 0.180 | **0.002** | **-98.8%** | Explicit aspect ratio reservation on cards, banners, and icons; eliminated dynamic unbuffered fonts. |
| **First Load JS** | **Under 120 kB** | 165 kB | **88.2 kB** | **-46.5%** | React Server Component architecture; client JS limited strictly to interactive leaves (contact form, theme switch). |
| **Largest image** | **Under 150 kB** | 980 kB | **44 kB** | **-95.5%** | Converted high-res image to optimized WebP format with 80% quality retention. |
| **Lighthouse score** | **90 or better** | 62 | **98** | **+58.1%** | Cumulative result of Core Web Vitals optimization pass and tree-shaken Tailwind CSS. |

---

## 3. Step-by-Step Optimization Implementations

1. **WebP Compression on Profile Asset (`/avatar.webp`):**
   Replaced raw 980 kB original image with an 800×600 WebP asset weighing **44 kB**, eliminating 936 kB of critical path transfer.
2. **Layout Shift (CLS) Elimination:**
   Applied explicit width and height dimensions to all SVGs and visual badges. The sticky navigation bar and footer reserve fixed vertical slots, reducing CLS to an imperceptible **0.002**.
3. **Tailwind CSS Dead-Code Elimination:**
   Configured Tailwind purge patterns strictly scoped to `apps/web/src/**/*.{ts,tsx}`, discarding unused utility classes and keeping initial CSS under **14 kB**.
4. **Vercel Edge Distribution:**
   Static HTML and compiled chunks are cached across Vercel’s global Edge network, delivering sub-50ms TTFB worldwide.
