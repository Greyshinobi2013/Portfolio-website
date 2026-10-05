# Natnael Getachew — Full-Stack Engineer & Systems Architect

> **Production-Grade Full-Stack Portfolio & Interactive Recruiter Showcase**  
> Built with Next.js (App Router), NestJS 12 Serverless, PostgreSQL, and Prisma ORM.

[![Full Monorepo Build](https://img.shields.io/badge/Build-Passing-10B981?style=for-the-badge&logo=githubactions&logoColor=white)](#-production-build--quality-standards)
[![TypeScript Strict](https://img.shields.io/badge/TypeScript-Strict%20Mode-00F2FE?style=for-the-badge&logo=typescript&logoColor=black)](#-architecture--technology-stack)
[![NestJS v12](https://img.shields.io/badge/NestJS-v12.1.2-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](#-architecture--technology-stack)
[![Vulnerabilities](https://img.shields.io/badge/Vulnerabilities-0%20Audit-10B981?style=for-the-badge&logo=snyk&logoColor=white)](#-security--reliability-safeguards)
[![Open to Work](https://img.shields.io/badge/Status-Available%20for%20Hire-FF2A5F?style=for-the-badge)](#-candidate-profile--contact)

---

## 🎯 Executive Summary for Technical Recruiters & Engineering Managers

Welcome to the engineering portfolio and recruiter showcase of **Natnael Getachew** — a Computer Engineering graduate (BSc, Debre Birhan University) and Advanced Software Development trainee (IBT College of Canada).

This platform was built to demonstrate **real-world production competencies** through live architectural proofs:
- **No static mockups or placeholder code**: Every interaction, from terminal queries to database writes, executes against live endpoints.
- **Full-stack monorepo engineering**: Decoupled, type-safe architecture hosting a high-performance **Next.js** frontend and a dedicated **NestJS 12** serverless backend.
- **Enterprise resilience**: Strict input sanitization, IP-based rate limiting, connection pooling, and sub-2-second telemetry alerts.

---

## ⚡ What Makes This Showcase Unique

### 1. ⚡ Recruiter & Architecture Deep-Dive Mode
Built directly into the top navigation bar and persisted via **Zustand**, this toggle allows technical evaluators to look beneath the UI surface:
- **Database & Prisma Models**: View the relational schema, foreign key constraints, and indexing strategy for each project.
- **Algorithmic Complexity**: Inspect Big-O time and space complexity analyses (e.g., $O(V + E)$ graph traversal).
- **Zustand & Client State Models**: Inspect state slices, store actions, and concurrency guard logic.
- **Wire Payload Inspector**: View live JSON payload formatting and validation schemas before transmission.

### 2. 📡 Real-Time Database & Serverless Health Telemetry
The cybernetic profile HUD executes real-time queries against PostgreSQL via NestJS and Prisma (`GET /api/health`), outputting roundtrip latency metrics in milliseconds (e.g., `⚡ DB Ping: 25ms`). Recruiters can trigger live pings on-demand.

### 3. `>_` Interactive Dev Console / Terminal CLI
Recruiters and engineers can open a floating retro-cyber terminal (`>_`) to interact with the portfolio using developer command-line workflows:
- `ping`: Benchmarks backend roundtrip and database latency.
- `skills`: Streams a structured JSON breakdown of technical proficiencies.
- `projects`: Returns architecture summaries and direct source links.
- `contact <email> <message>`: Dispatches an inquiry directly from the command line.
- `recruiter`: Toggles deep-dive architecture mode.

### 4. 🚀 Instant Ingress Webhook & Notification Pipeline
Submitting inquiries through the UI contact form or CLI terminal triggers an atomic transactional write to PostgreSQL (`ContactMessage` table) while measuring exact database latency, followed by an asynchronous dispatch to Natnael's private Telegram bot.

---

## 🛠️ Architecture & Technology Stack

| Layer | Technology | Key Capabilities & Highlights |
| :--- | :--- | :--- |
| **Frontend** | **Next.js (App Router) & React 18** | Turbopack compilation, Server Components, SSR/SSG hydration, zero layout shift. |
| **State & Store** | **Zustand** | Lightweight, reactive client-side store with `localStorage` persistence. |
| **Styling & HUD** | **Tailwind CSS v4 & PostCSS** | Custom cyber-dark design tokens (`#080B10`, `#0D111A`, `#FF2A5F`, `#00F2FE`, `#10B981`). |
| **Backend API** | **NestJS 12 (Express Engine)** | Modular architecture, Dependency Injection, serverless-ready for Vercel edge functions. |
| **ORM & Database** | **Prisma ORM & PostgreSQL (Neon)** | Type-safe queries, connection pooling, indexed search fields, schema migrations. |
| **Security & Guards** | **`class-validator` & `@nestjs/throttler`** | Strict DTO payloads, automated sanitization, 5 requests/min per IP rate limiting. |
| **Tooling & Monorepo** | **npm Workspaces & TypeScript 5.8+** | Unified monorepo structure, strict typing with 0 compiler errors, unified scripts. |

---

## 📂 Featured Case Studies

### 🍕 Addis Eats — Next-Gen Food Ordering & TeleBirr Gateway
- **Stack**: Next.js App Router, TypeScript, Zustand, TeleBirr Engine.
- **Engineering Highlights**:
  - Engineered client state cart engine with hard inventory ceilings and sub-city localized delivery fee algorithms.
  - Implemented strict Ethiopian mobile pattern validation (`^(\+251|0)(9|7)\d{8}$`) ensuring zero malformed payment transactions.
  - Atomic checkout workflow backed by PostgreSQL row isolation.

### 🏦 AddisBank — Core Banking & Liquidity Transfer Graph
- **Stack**: Python 3.11, Directed Graphs, Design Patterns, `unittest`.
- **Engineering Highlights**:
  - Implemented the Factory pattern for tiered account instantiation, Singleton Registry for exchange rates, and Decorators for audit logs.
  - Developed `TransfersGraph.route_liquidity()` using directed graph traversal to calculate optimal inter-branch fund routing with zero balance leakage.
  - 100% test coverage validating concurrency locks and invariant safeguards.

### 📱 Native Android Lexicon & Offline Dictionary
- **Stack**: Android SDK, Java/Kotlin, SQLite.
- **Engineering Highlights**:
  - Sub-100ms offline terminology indexing with debounced SQLite search queries.
  - Pre-populated local database with persistent bookmarking and cache warming.
  - Custom `RecyclerView` adapters with `DiffUtil` calculations maintaining smooth 60fps scrolling.

---

## 📁 Monorepo Structure

```text
portfolio-monorepo/
├── vercel.json                           # Unified serverless ingress routing
├── package.json                          # Monorepo workspaces config
├── .env.example                          # Environment template
├── README.md                             # Documentation
│
├── apps/
│   ├── api/                              # NestJS 12 Backend
│   │   ├── prisma/
│   │   │   └── schema.prisma             # PostgreSQL data models
│   │   ├── src/
│   │   │   ├── contact/                  # Contact controller, service, & DTOs
│   │   │   ├── health/                   # Live latency telemetry controller
│   │   │   ├── app.module.ts             # Throttler and feature modules
│   │   │   └── main.ts                   # Vercel serverless export
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── web/                              # Next.js Frontend
│       ├── public/
│       │   ├── avatar.png                # Candidate portrait
│       │   └── Natnael_Getachew_Software_CV.pdf # Downloadable resume
│       ├── src/
│       │   ├── app/                      # Next.js App Router & API fallbacks
│       │   ├── components/               # Navbar, Hero, CyberCard, Showcase, Terminal
│       │   └── store/                    # Zustand recruiter mode & telemetry state
│       ├── tailwind.config.ts
│       └── package.json
```

---

## 🔒 Security & Reliability Safeguards

- **Strict Payload Validation**: Ingress DTOs enforce field types, maximum character lengths, and regex schemas via `class-validator`.
- **DDoS & Spam Protection**: Contact routes are protected by `@nestjs/throttler` (5 requests/minute per client IP), returning HTTP 429 when limits are exceeded.
- **Zero Known Vulnerabilities**: Verified via `npm audit` with 0 high or critical vulnerabilities across all 340+ packages.
- **Resilient Fallback Telemetry**: Built-in graceful degradation keeps local offline evaluations functional without requiring immediate Neon DB credentials.

---

## 🚀 Local Development Setup

### 1. Clone & Install
```bash
git clone https://github.com/Greyshinobi2013/Portfolio-website.git
cd Portfolio-website
npm install
```

### 2. Generate Prisma Client
```bash
npx prisma generate --schema=apps/api/prisma/schema.prisma
```

### 3. Run Development Environment
```bash
# Starts NestJS API (port 4000) and Next.js Web (port 3000) concurrently:
npm run dev

# Or run individual applications:
npm run dev:web    # Frontend on http://localhost:3000
npm run dev:api    # Backend API on http://localhost:4000
```

### 4. Build for Production
```bash
npm run build
```

---

## 👤 Candidate Profile & Contact

**Natnael Getachew**  
*Full-Stack Software Engineer & Systems Architect*  
📍 **Location:** Addis Ababa, Ethiopia *(Open to Remote & Relocation Opportunities)*  
📧 **Email:** [getachewnatnael55@gmail.com](mailto:getachewnatnael55@gmail.com)  
📞 **Phone / Telegram:** [+251 983 833 337](tel:+251983833337)  
🐙 **GitHub:** [github.com/Greyshinobi2013](https://github.com/Greyshinobi2013)  
💼 **LinkedIn:** [linkedin.com/in/natnael-getachew](https://linkedin.com/in/natnael-getachew)  
📄 **Resume:** Available for direct download via the portfolio navbar (`Natnael_Getachew_Software_CV.pdf`).