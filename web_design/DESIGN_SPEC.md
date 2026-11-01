# Professional Portfolio UI/UX Web Design System Specification

> **Subject:** Natnael Getachew — Software Developer & Quality Assurance Engineer (MSc AI Scholar)  
> **Aesthetic Direction:** Swiss / Minimalist Studio Light Mode (`#FFFFFF` / `#F8FAFC` + Slate `#0F172A` + Indigo `#4F46E5`)  
> **Deliverable Format:** Scalable Vector Graphics Artboard (`portfolio_web_design.svg`), Interactive Live Prototype (`index.html`), and Design System Specification (`DESIGN_SPEC.md`)  
> **Target Scope:** Strictly isolated within the `web_design/` folder.

---

## 1. Layout Design (ASCII Architecture Wireframe)

Following `/superdesign` methodology, the interface is architected around an uncluttered single-page reading progression designed for rapid recruiter verification:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [NG] Natnael Getachew             Skills    Education    Projects    Contact  [Resume ↗]│
│      Software Dev & QA Intern                                    ● Available to hire   │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│                                HERO SECTION (Light Mode)                               │
│      ★ MSc AI Scholar • BSc Computer Engineering Graduate                              │
│                                                                                        │
│      Architecting resilient web systems, fintech payment rails,                        │
│      and verified digital products.                                                    │
│                                                                                        │
│      [View projects ↓]       [Contact me ✉]       [Download CV ↗]                     │
│      ────────────────────────────────────────────────────────────────────────────      │
│      Direct Ingress: getachewnatnael55@gmail.com • +251 983 833 337 • Addis Ababa (UTC+3)│
│                                                                                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 01 / SKILLS & TECHNOLOGIES (8 Cards with Authentic Scalable Vector SVG Logos)          │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                    │
│ │ [Next.js]    │ │ [React 18]   │ │ [TypeScript] │ │ [Python & ML]│                    │
│ │ v16 AppRouter│ │ Hooks & SPAs │ │ Strict Types │ │ Neural Models│                    │
│ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘                    │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                    │
│ │ [PostgreSQL] │ │ [Jest & QA]  │ │[Tailwind CSS]│ │ [Git/GitHub] │                    │
│ │ Prisma ORM   │ │ 100% Passing │ │ Modern Tokens│ │ Semantic PRs │                    │
│ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘                    │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 02 / EDUCATIONAL BACKGROUND (Chronological Pedigree Cards)                             │
│ ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ MSc in Artificial Intelligence — Ethiopian Defense University [SCHOLAR • CURRENT]  │ │
│ ├────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ BSc in Computer Engineering — Debre Birhan University        [5-YR GRADUATED 2022] │ │
│ ├────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ Advanced Digital Skills: Dev & QA — IBT College of Canada    [CERTIFIED 2026]      │ │
│ └────────────────────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 03 / FEATURED PROJECTS (3x Addis Eats Web Editions — Android Utility Excluded)         │
│ ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ 01 / Addis Eats — Next.js 16 Full-Stack & TeleBirr Payment Gateway (2026)          │ │
│ │ Sub-city fee calculations • Ethiopian phone regex • Dynamic cart • 30m escalation   │ │
│ ├────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ 02 / Addis Eats — Modular React 18 SPA (Aug 2026)                                  │ │
│ │ Zustand with localStorage persist • Real-time inventory decrement • Recharts graphs│ │
│ ├────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ 03 / Addis Eats — Pure ES6+ Vanilla Web App & Admin Session Guard (Jul 2026)        │ │
│ │ Zero-dependency DOM • SessionStorage auth guards • Role-based isolation            │ │
│ └────────────────────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 04 / CONTACT ME (Direct Ingress + Interactive Gmail Pipeline)                          │
│ ┌────────────────────────────────────┐ ┌─────────────────────────────────────────────┐ │
│ │ DIRECT INGRESS                     │ │ INQUIRY FORM                                │ │
│ │ • Email: getachewnatnael55@gmail...│ │ Subject: [ e.g. Software Dev / QA Role    ] │ │
│ │ • Phone: +251 983 833 337          │ │ Message: [ Project & team requirements... ] │ │
│ │ • Location: Addis Ababa (UTC+3)    │ │                                             │ │
│ │ • Remote: Global Eligibility       │ │ [ SEND TO getachewnatnael55@gmail.com ✉ ]   │ │
│ └────────────────────────────────────┘ └─────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ FOOTER                                                                                 │
│ © 2026 Natnael Getachew • Built with Next.js 16 App Router • Addis Ababa UTC+3 Clock  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Theme & Token Guidelines

### Color Tokens (Light Studio Palette)
In accordance with modern CSS token guidelines, colors are specified with clear semantic roles and OKLCH equivalents:

| Semantic Variable | Light Mode Hex | OKLCH Equivalent | Usage |
| :--- | :--- | :--- | :--- |
| `--background` | `#FFFFFF` | `oklch(1 0 0)` | Primary page canvas, card bases |
| `--surface-studio` | `#F8FAFC` | `oklch(0.985 0.005 240)` | Section alternating backgrounds, tags |
| `--foreground` | `#0F172A` | `oklch(0.205 0.035 260)` | Primary headlines, display text |
| `--muted-foreground` | `#64748B` | `oklch(0.556 0.025 255)` | Narrative body text, subtitles |
| `--border-subtle` | `#E2E8F0` | `oklch(0.922 0.008 240)` | Hairline strokes, card boundaries |
| `--primary` | `#4F46E5` | `oklch(0.511 0.224 275)` | Interactive buttons, section tags, accents |
| `--primary-hover` | `#4338CA` | `oklch(0.450 0.220 275)` | Hover states on primary CTAs |
| `--emerald-status` | `#059669` | `oklch(0.600 0.160 160)` | Available to hire beacon, passing indicators |
| `--amber-scholar` | `#F59E0B` | `oklch(0.750 0.160 75)` | MSc AI Scholar pedigree accent |

### Typography Scale
* **Primary Font:** **Plus Jakarta Sans** (Weights: 400, 500, 600, 700, 800)
* **Technical Telemetry & Code:** **JetBrains Mono** (Weights: 500, 600, 700)
* **Scale Breakdown:**
  * Display / Hero: `44px` / `54px`, `font-weight: 800`, `letter-spacing: -0.035em`, `line-height: 1.12`
  * Section Title: `28px` / `32px`, `font-weight: 800`, `letter-spacing: -0.025em`
  * Section Index Tag: `11px` / `12px`, `font-family: 'JetBrains Mono'`, `font-weight: 700`, uppercase
  * Card Titles: `18px` – `22px`, `font-weight: 800`, `letter-spacing: -0.015em`
  * Body Text: `14px` – `16px`, `line-height: 1.6`, `color: #475569`
  * Badges & Badging: `10px` – `12px`, `font-family: 'JetBrains Mono'`, `font-weight: 600`

---

## 3. Animation & Micro-Interactions

Planned micro-syntax for user interactions:

```text
nav-scroll: 280ms cubic-bezier(0.16, 1, 0.3, 1) [backdrop-blur: 16px, border: rgba(226, 232, 240, 0.8)]
button-hover: 180ms ease-out [Y0 → -2px, shadow↗]
button-press: 100ms [S1 → 0.97 → 1]
card-hover: 220ms cubic-bezier(0.16, 1, 0.3, 1) [Y0 → -2px, border: #CBD5E1, shadow: 0 12px 24px -10px rgba(15,23,42,0.08)]
status-ping: 2000ms infinite cubic-bezier(0, 0, 0.2, 1) [scale 1 → 2.2, opacity 0.75 → 0]
toast-in: 300ms ease-out [Y+10 → 0, opacity 0 → 1]
```

---

## 4. Section Specifications

### 01. Header & Navigation Bar
* **Branding:** Left-anchored square monogram badge `NG` in slate `#0F172A` with full name and sub-title.
* **Navigation Links:** Smooth-scroll anchors (`#skills`, `#education`, `#projects`, `#contact`) with color transition to indigo on hover.
* **Utility CTA:** Live emerald status badge (`● Available to hire`) and high-contrast `Resume ↗` button.

### 02. Hero Section
* **Editorial Headline:** *"Architecting resilient web systems, fintech payment rails, and verified digital products."*
* **Pedigree Callout:** Master's degree scholarship in Artificial Intelligence at Ethiopian Defense University and 5-year Computer Engineering degree.
* **Direct Recruiter Ingress Strip:** Single-row horizontal bar containing:
  * Personal Email: `getachewnatnael55@gmail.com`
  * Direct Phone: `+251 983 833 337`
  * Location: `Addis Ababa, Ethiopia (UTC+3)`
  * External Links: GitHub & LinkedIn profiles

### 03. Skills Section (with Scalable Vector SVG Logos)
Each of the 8 skill cards includes an authentic vector SVG logo embedded directly into the layout:
1. **Next.js**: Official monochrome inverted badge with stylized 'N' vector path.
2. **React 18**: Official triple-ellipse electron orbit in cyan `#0EA5E9`.
3. **TypeScript**: Official blue `#3178C6` square badge with TS typography.
4. **Python & ML**: Official dual-serpent mark in blue `#387EB8` and yellow `#FFE052`.
5. **PostgreSQL**: Official database elephant silhouette in `#336791`.
6. **Jest QA**: Verification shield with checkmark badge in crimson `#C21325`.
7. **Tailwind CSS**: Dual wind wave vector in cyan `#06B6D4`.
8. **Git & GitHub**: Branching tree commit node vector in `#F05032`.

### 04. Educational Background
Chronological card progression:
1. **MSc in Artificial Intelligence** — Ethiopian Defense University, College of Engineering (Postgraduate Program | Current Scholar).
2. **BSc in Computer Engineering** — Debre Birhan University, Faculty of Computing (5-Year Engineering Degree | Graduated 2022).
3. **Advanced Digital Skills: Software Development & QA** — IBT College of Canada (Certified 2026).

### 05. Featured Projects (Curated Web Systems)
* **Strict Constraint**: **The Native Android Dictionary Utility is strictly omitted**. Only production web editions are presented:
  1. **Addis Eats — Next-Gen Food Ordering & TeleBirr Gateway (2026)**
     * Stack: Next.js 16, React 18, TypeScript, TeleBirr API, Zustand, Jest QA.
     * Highlights: Sub-city delivery fee calculations across 10 Addis Ababa zones, Ethiopian phone regex (`^(\+251|0)(9|7)\d{8}$`), dynamic cart, and 30-min escalation timers.
  2. **Addis Eats — Modular React 18 SPA (Aug 2026)**
     * Stack: React 18, Vite, Zustand Persist Middleware, Recharts, Tailwind CSS.
     * Highlights: LocalStorage rehydration across browser refreshes, real-time stock decrements, and frosted out-of-stock overlay ceilings for exhausted items.
  3. **Addis Eats — Pure ES6+ Vanilla Architecture (Jul 2026)**
     * Stack: Pure HTML5, CSS3, ECMAScript (ES6+), SessionStorage.
     * Highlights: Zero-dependency admin dashboard with session authentication guards and regression redirects.

### 06. Contact Me Section
* **Left Ingress:** Direct email, phone/WhatsApp, location, and remote work availability statement.
* **Interactive Form:**
  * Field 1: **Subject** (Required) — e.g. "Software Developer / QA Intern Opportunity".
  * Field 2: **Message** (Required) — Multi-line textarea for project and team inquiry.
  * Send Button: **"Send to getachewnatnael55@gmail.com ✉"** which automatically formats the inquiry and launches the mail client directly addressed to your Gmail with pre-filled payload.

### 07. Footer Section
* Brand signature, secondary navigation sitemap, tech stack indicator, and a real-time Addis Ababa Local Time (UTC+3) clock.

---

## 5. Deliverable Files in `web_design/`

* [**`index.html`**](file:///home/tech_shinobi/Documents/my_projects/portfolio-webiste/web_design/index.html): Standalone, zero-build-step interactive web prototype utilizing Tailwind CSS, Lucide Icons, and Google Fonts.
* [**`portfolio_web_design.svg`**](file:///home/tech_shinobi/Documents/my_projects/portfolio-webiste/web_design/portfolio_web_design.svg): 1440 × 3360 px Scalable Vector Graphics artboard renderable in any browser or vector graphic software (Figma, Illustrator).
* [**`DESIGN_SPEC.md`**](file:///home/tech_shinobi/Documents/my_projects/portfolio-webiste/web_design/DESIGN_SPEC.md): Design system tokens, layout wireframes, and component rules.
