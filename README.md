# Natnael Getachew — Software Developer & QA Intern

> **Modern Engineering Portfolio & Technical Case Studies Showcase**  
> Built with Next.js (App Router), React 18, TypeScript, Tailwind CSS, and NestJS API.

[![Live Production](https://img.shields.io/badge/Live%20Demo-Vercel%20Production-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-website-rho-three-54.vercel.app)
[![Next.js 16](https://img.shields.io/badge/Next.js-16%20App%20Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React 18](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript Strict](https://img.shields.io/badge/TypeScript-Strict%20Mode-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Status: Open to Work](https://img.shields.io/badge/Status-Open%20to%20Internships-10B981?style=for-the-badge)](https://portfolio-website-rho-three-54.vercel.app/#contact)

---

## 🌐 Live Deployment

- **Production Website:** [https://portfolio-website-rho-three-54.vercel.app](https://portfolio-website-rho-three-54.vercel.app)
- **API Health Telemetry:** [https://portfolio-website-rho-three-54.vercel.app/api/health](https://portfolio-website-rho-three-54.vercel.app/api/health)
- **Source Repository:** [github.com/Greyshinobi2013/Portfolio-website](https://github.com/Greyshinobi2013/Portfolio-website)

---

## 🎯 Executive Summary for Technical Recruiters & Engineering Managers

Welcome to the professional portfolio of **Natnael Getachew**:
- **Academic Foundation:** BSc in Computer Engineering from Debre Birhan University (2022).
- **Postgraduate Scholar:** MSc in Artificial Intelligence scholar at Ethiopian Defense University.
- **Industry Trainee:** Advanced Digital Skills in Software Development & QA from IBT College of Canada.
- **Career Focus:** Seeking a **Software Developer** or **Quality Assurance (QA)** internship to build and verify resilient, accessible, user-centered digital applications.

This portfolio is built to demonstrate real-world engineering standards:
- **Zero Placeholder Data:** 100% aligned with verified coursework, professional credentials, and authentic projects.
- **Accessible & Responsive:** WCAG 2.1 AA compliant across both Dark and Light modes, with responsive layouts tested from mobile viewports to ultra-wide displays.
- **Network Resilience:** Equipped with local storage auto-save drafts, offline network alerts, and adaptive low-bandwidth styles.
- **Production Email Pipeline:** Multi-tier contact form with Gmail SMTP delivery, FormSubmit automated failover, and local mail client fallback.

---

## 🛠️ Architecture & Technology Stack

| Layer | Technology | Key Capabilities & Highlights |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js 16 (App Router)** | Turbopack compilation, React Server Components (RSC), SSR/SSG hydration, zero layout shift. |
| **UI Library** | **React 18** | Functional components, custom hooks, and concurrent hydration patterns. |
| **Language** | **TypeScript 5 (Strict)** | End-to-end type safety, strict null checks, 0 compiler errors. |
| **State Management** | **Zustand** | Lightweight client stores with `localStorage` persistence (`useThemeStore`, `useNetworkStatus`). |
| **Styling & Design** | **Tailwind CSS & CSS Modules** | Dual-theme palette (Cyber Dark & Crisp Light) with WCAG-compliant accessible contrast ratios. |
| **Backend & Ingress** | **Next.js Route Handlers & NestJS 12** | Modular API architecture, serverless edge routes, and validation pipes. |
| **Messaging & Ingress** | **Nodemailer & FormSubmit** | Professional HTML email templating with automated multi-tier failover. |
| **Testing & QA** | **Functional QA & Test Plans** | Boundary value analysis, idempotency verification, and regex validation. |

---

## 📂 Featured Case Studies

### 1. 🍕 Addis Eats — Next-Gen Food Ordering & TeleBirr Gateway
- **Stack:** Next.js App Router, React 18, TypeScript, Zustand, TeleBirr API.
- **Engineering Highlights:**
  - Architected full-stack food ordering platform with server/client component boundaries and dynamic route handlers.
  - Built real-time cart synchronization using Zustand with localized Addis Ababa sub-city delivery fee calculations.
  - Engineered strict Ethiopian mobile regex validation (`^(\+251|0)(9|7)\d{8}$`) ensuring zero malformed payment transactions.
  - Implemented delivery tracking countdown and delay escalation pipeline with automated 20% apology voucher injection.

### 2. ⚡ Addis Eats — Modular React Single-Page Application (SPA)
- **Stack:** React 18, Vite, Zustand (Persist Middleware), Recharts, React Router DOM.
- **Engineering Highlights:**
  - Built modular SPA using Zustand with persist middleware for reliable local storage state syncing across user sessions.
  - Implemented real-time stock decrements and automated frosted out-of-stock overlay handling for 16+ meals.
  - Integrated Recharts for sales telemetry and client-side navigation.
  - Automated state and boundary QA testing validating persist hydration under network throttling.

### 3. 🛡️ Addis Eats — Vanilla Web App & Admin Dashboard
- **Stack:** Pure HTML5, CSS3, ES6+ JavaScript, LocalStorage / SessionStorage.
- **Engineering Highlights:**
  - Developed responsive ordering app and admin operations dashboard without external frontend frameworks.
  - Engineered client-side cart calculations and live search filtering.
  - Implemented session-guarded admin authentication with LocalStorage and SessionStorage persistence.
  - Verified route redirect integrity and token expiration across positive and negative auth scenarios.

### 4. 📱 Android Developer Apprenticeship
- **Organization:** M.A.D Technologies • Addis Ababa, Ethiopia (2022 — 2023).
- **Stack:** Android Studio, Java, Kotlin, SQLite, Material Design.
- **Engineering Highlights:**
  - Collaborated on native Android applications, translating Figma wireframes into responsive Material layouts with `RecyclerView`.
  - Built standalone Dictionary mobile app with dynamic `SearchView` queries and local SQLite caching.
  - Conducted code reviews, memory leak debugging, and adhered to Git feature-branch workflows.

---

## 📁 Monorepo Structure

```text
portfolio-monorepo/
├── vercel.json                           # Vercel deployment & workspace configuration
├── .vercelignore                         # Build & cache upload exclusion rules
├── package.json                          # Monorepo workspaces definition
├── .env.example                          # Environment template
├── README.md                             # Project documentation
│
├── apps/
│   ├── api/                              # NestJS 12 Backend Workspace
│   │   ├── prisma/
│   │   │   └── schema.prisma             # PostgreSQL schema & data models
│   │   ├── src/
│   │   │   ├── contact/                  # Contact controller, service & DTOs
│   │   │   ├── health/                   # Health telemetry controller
│   │   │   ├── app.module.ts             # Throttler and feature modules
│   │   │   └── main.ts                   # Standalone & serverless bootstrap
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── web/                              # Next.js 16 Web Workspace (Frontend & Ingress)
│       ├── public/
│       │   ├── avatar.webp               # Optimized candidate portrait
│       │   ├── avatar.png                # High-res fallback asset
│       │   └── Natnael_Getachew_Software_CV.pdf # Downloadable resume
│       ├── src/
│       │   ├── app/                      # App Router: layout, page, robots, sitemap
│       │   │   └── api/                  # Serverless Route Handlers (/api/contact, /api/health)
│       │   ├── components/               # Navbar, Hero, ProfileCyberCard, CaseStudies, Contact
│       │   └── store/                    # Zustand stores (useThemeStore, useNetworkStatus)
│       ├── tailwind.config.ts
│       └── package.json
```

---

## 🚀 Local Development Setup

### 1. Prerequisites
- **Node.js**: `v20.x` or `v22.x`
- **npm**: `v10.x` or higher
- **Git**

### 2. Clone Repository
```bash
git clone https://github.com/Greyshinobi2013/Portfolio-website.git
cd Portfolio-website
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create `.env.local` inside `apps/web/` (or copy `.env.example`):
```bash
cp .env.example apps/web/.env.local
```

*(Optional for direct Gmail delivery)*:
```env
GMAIL_USER="your-email@gmail.com"
GMAIL_APP_PASSWORD="your-16-char-app-password"
```

### 5. Run Development Servers
```bash
# Starts both web (Next.js :3000) and api (NestJS :4000) concurrently:
npm run dev

# Or run frontend only:
npm run dev:web
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Production Build Check
```bash
npm run build:web
```

---

## ☁️ Deployment

### Deploying to Vercel
The repository is pre-configured with a modern [`vercel.json`](./vercel.json) that targets the `@portfolio/web` workspace.

```bash
# Deploy to production:
npx vercel --prod
```

Or connect the GitHub repository on [vercel.com](https://vercel.com) with **Root Directory** set to `apps/web`.

---

## 👤 Candidate Profile & Contact

**Natnael Getachew**  
*Software Developer & QA Intern*  
📍 **Location:** Addis Ababa, Ethiopia *(Open to Remote & On-Site Roles)*  
📧 **Email:** [getachewnatnael55@gmail.com](mailto:getachewnatnael55@gmail.com)  
📞 **Phone / WhatsApp:** [+251 983 833 337](tel:+251983833337)  
🐙 **GitHub:** [github.com/Greyshinobi2013](https://github.com/Greyshinobi2013)  
💼 **LinkedIn:** [linkedin.com/in/natnaelgetachew](https://linkedin.com/in/natnaelgetachew)  
📄 **Resume:** Available for direct download via the live portfolio navbar or at [`/Natnael_Getachew_Software_CV.pdf`](https://portfolio-website-rho-three-54.vercel.app/Natnael_Getachew_Software_CV.pdf).