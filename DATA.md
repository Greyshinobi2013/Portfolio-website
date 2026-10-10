# Portfolio & Case Studies Showcase — Data Fetching Strategy (`DATA.md`)

**Course:** CodeOps Full Stack Software Development  
**Module:** Module 3 · Frontend: React & Next.js · Capstone Project Alignment (Week 9 · Day 45)  
**Author:** Natnael Getachew (`Greyshinobi2013`)  
**Repository:** `portfolio-website`  
**Live Production URL:** [https://portfolio-website-rho-three-54.vercel.app](https://portfolio-website-rho-three-54.vercel.app)  

---

## 1. Architectural Strategy & Division of Labor

In accordance with Next.js App Router guidelines:
- **Server Components (RSC):** Render all static portfolio sections, career timeline, case study articles, and SEO metadata at build time (SSG).
- **Route Handlers (`/api/...`):** Execute server-side network dispatch for contact inquiries and telemetry health reporting.
- **Client Stores (Zustand):** Manage browser-local state (Theme mode toggle, network offline telemetry, auto-save message drafts).

---

## 2. Decision Table Two: Where Data Lives & Why

| Data / Interaction | Where, and Why | Storage / Engine | Refresh / Invalidation Rule |
| :--- | :--- | :--- | :--- |
| **Case Studies & Projects** | **Server** — static, indexable, zero TTFB overhead | Prerendered React Server Components | Static Site Generation (Build time) |
| **Experience Timeline & Credentials** | **Server** — public resume data, optimal for crawlers | Prerendered React Server Components | Static Site Generation (Build time) |
| **Contact Message Submission** | **Server Route Handler** — outbound email side effect | Next.js API Route (`POST /api/contact`) | On demand per recruiter submission |
| **System Health Telemetry** | **Server Route Handler** — uptime check | Next.js API Route (`GET /api/health`) | On demand (Live check) |
| **Theme Mode (Cyber Dark / Light)**| **Client Store** — immediate paint without FOUC | Zustand Store with `localStorage` persistence | Instant (0ms client re-render) |
| **Network Status Banner** | **Client Store** — real-time navigator connectivity | Zustand Store (`useNetworkStatus`) | Event listener on `online`/`offline` window events |
| **Contact Form Auto-Draft** | **Client Store** — draft preservation across refresh | Local Storage auto-save | Kept until successfully dispatched |

---

## 3. The "Server Unless User Triggers It" Architectural Principle

1. **Static First:** Every view that does not require interactive state is statically compiled. The entire homepage renders with zero client-side fetch waterfalls, achieving near-zero TTFB on Vercel's global CDN edge.
2. **Client Leaf Components:** Interactivity is strictly scoped to leaf components:
   - `<ThemeToggle />` (Zustand theme switch)
   - `<ContactSection />` (Interactive form with auto-drafting)
   - `<NetworkBanner />` (Offline alert display)
3. **Resilient Network Handling:**
   When an inquiry submission fails due to network dropouts, the form preserves the draft in local storage and provides a direct `mailto:` fallback link, ensuring zero recruiter loss.
