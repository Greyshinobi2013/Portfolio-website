# Portfolio Web Design Specification: diogotc.com UI/UX Alignment

> **Subject:** Natnael Getachew — Software Developer & Quality Assurance Engineer (MSc AI Scholar)  
> **Source Design System:** Analyzed and extracted via `api-anything` MCP from `https://diogotc.com/`  
> **Live Prototype Deliverable:** [`web_design/index.html`](file:///home/tech_shinobi/Documents/my_projects/portfolio-webiste/web_design/index.html)  
> **Location:** Isolated within the `web_design/` directory.

---

## 1. UI/UX Architecture & Layout Mapping

Following the reverse-engineering analysis of `diogotc.com` conducted via `api-anything`, the interface integrates the following design patterns:

```text
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ [NG] Natnael Getachew (MSc AI)    About   Capabilities   Projects   Timeline   [CV ↗] │
│      Fixed Sticky Header (IntersectionObserver elevation: transparent -> #1b1b1b)      │
├────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                        │
│                      HERO SPLASH (Full Viewport Height: 100vh)                         │
│                    [tsParticles Interactive Constellation Mesh]                        │
│                                                                                        │
│                                  (Avatar WebP 120px)                                   │
│                 ● Available for Software Developer & QA Internships                    │
│                                                                                        │
│                                Natnael Getachew                                        │
│               Software Developer, QA Engineer & MSc AI Scholar                         │
│                                                                                        │
│         [Explore Projects ↓]      [Get in Touch ✉]      [Verified CV ↗]               │
│                                                                                        │
│          Socials & Tooltips: GitHub • LinkedIn • Email • 1-Click Copy • UTC+3 Clock    │
│      ────────────────────────────────────────────────────────────────────────────      │
│      Metrics: 4+ Systems  |  100% Code Quality  |  MSc AI Scholar  |  < 24h Response   │
│                                                                                        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ PORTFOLIO: "My top projects" (Inverted Crisp White Surface: #FFFFFF)                   │
│ ┌───────────────────┐ ┌───────────────────┐ ┌───────────────────┐ ┌───────────────────┐ │
│ │ Addis Eats Next.js│ │ Addis Eats SPA    │ │ Addis Eats ES6+   │ │ Android Native    │ │
│ │ (Brand Blue #0A74)│ │ (Navy #273377)    │ │ (Crimson #E91425) │ │ (Slate #434343)   │ │
│ │ TeleBirr + Zustand│ │ Persist Hydration │ │ Zero Dependencies │ │ M.A.D Technologies│ │
│ └───────────────────┘ └───────────────────┘ └───────────────────┘ └───────────────────┘ │
│                                                                                        │
│ [ LIVE THEATER: TeleBirr Payment Simulator & Automated 5-Test QA Suite Runner ]        │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ ENGINEERING DISCIPLINES (Dark Charcoal Bento: #1B1B1B / #252525)                       │
│ ┌───────────────────────────────────────┐ ┌──────────────────────────────────────────┐ │
│ │ Frontend Systems & Next.js 16 (2-Col) │ │ Software QA & Boundary Testing (1-Col)   │ │
│ │ Lighthouse 100 • Zero-Waterfall Tree  │ │ Zero-Defect • Jest Assertions • Fallback │ │
│ ├───────────────────────────────────────┼──────────────────────────────────────────┤ │
│ │ AI & Neural Systems (1-Col)           │ │ Fintech & TeleBirr API Ingress (2-Col)   │ │
│ │ Defense Univ MSc • Python OOP & ML    │ │ 4-Step: Validate->Calculate->Push->Escalate│
│ └───────────────────────────────────────┘ └──────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ CAREER & ACADEMIC TIMELINE (Alternating Two-Column Spine: 60px Circular Badges)        │
│          (Spine: linear-gradient(180deg, #10b981 0%, #037daf 30px, #10b981 100%))      │
│  [2026—Present]    ● MSc Artificial Intelligence (Ethiopian Defense University)        │
│                    ● CodeOps Full-Stack Capstone (Addis Eats Next.js 16 & TeleBirr)    │
│  [Certified 2026]  ● IBT College of Canada (Advanced Digital Skills: Software & QA)    │
│  [2022—2023]       ● Android Developer Intern (M.A.D Technologies, Addis Ababa)        │
│  [Graduated 2022]  ● BSc in Computer Engineering (Debre Birhan University)             │
│  [Global Fluency]  ● English (Professional Working) & Amharic (Native Fluency)         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ CONTACT ME: Direct Recruiter Channel (Inverted White Surface: #FFFFFF)                 │
│ ┌──────────────────────────────────────┐ ┌───────────────────────────────────────────┐ │
│ │ Direct Ingress Cards                 │ │ Interactive Ingress Contact Form          │ │
│ │ • Email: getachewnatnael55@gmail.com │ │ • Name, Email, Inquiry Role Selector       │ │
│ │ • Phone: +251 92 378 9370            │ │ • Real-Time Routing Simulation             │ │
│ │ • Live Addis Ababa Clock (UTC+3)     │ │ • Instant Feedback Notification            │ │
│ │ • Official Verified CV PDF Download  │ │                                            │ │
│ └──────────────────────────────────────┘ └───────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ REFINED FOOTER                                                                         │
│ Bio Summary • Complete Site Map • Direct Social Links • Copyright Notice               │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Design Tokens & Visual Hierarchy

### A. Color Architecture
* **Dark Charcoal Base:** `#1b1b1b` (Softer on the eyes than pure black `#000000`, matching `diogotc.com`).
* **Elevated Dark Surfaces:** `#242424` / `#212121`.
* **Inverted High-Contrast Surface:** Pure White (`#ffffff`) with `#1b1b1b` typography for high readability in portfolio and contact sections.
* **Primary Accents:**
  * Sky Blue / Cyan: `#037daf` / `#00acff` (Links, focus indicators, active states).
  * Status Emerald: `#10b981` (Verification badges, passing QA states).
  * Amber / Gold: `#f59e0b` (MSc research, pending states).
* **Project Brand Identities:**
  * Addis Eats Flagship (Next.js 16): `#0a74db` (Brand Blue)
  * Addis Eats Modular SPA (React 18): `#273377` (Deep Indigo)
  * Addis Eats Pure ES6+: `#e91425` (Crimson Flame)
  * Android M.A.D Technologies: `#434343` (Graphite Slate)
* **Dual-Layer Elevation Shadows:**
  ```css
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 
              0px 2px 2px 0px rgba(0,0,0,0.14), 
              0px 1px 5px 0px rgba(0,0,0,0.12);
  ```

---

### B. Typography
* **Headline / Display Font:** `Nunito` (Weights: `300` light for 4rem hero titles, `600`, `700` for cards and badges).
* **Body / System Font:** `Roboto` (Weights: `300`, `400`, `500`) with base `18px`, `line-height: 1.45`–`1.6`.
* **Code & Telemetry Font:** `JetBrains Mono` for phone regex, transaction hashes, and terminal logs.

---

### C. Micro-Interactions & Special Effects
1. **Interactive Constellation Canvas:** Driven by `tsParticles` with `preset-links` (`links.enable: true`, distance `110`, opacity `0.45`, density `850`) reacting to mouse movement.
2. **Sticky Navigation Bar:** Dynamically gains `.navbar--sticky` background and elevation shadow through an `IntersectionObserver` observing an 80px scroll sentinel.
3. **Accessible CSS-Only Tooltips:** Utilizes `.has-tooltip` and `.tooltip` with hover, focus-visible, and active opacity transitions.
4. **Native Mobile Drawer:** Accessible `<dialog id="navbar-drawer">` with backdrop blur and smooth open/close lifecycle.
5. **Interactive TeleBirr USSD Simulator:** Validates Ethiopian phone formats (`^(\+251|0)(9|7)\d{8}$`), computes sub-city delivery fees, and dispatches mock USSD authorization.
6. **Automated QA Test Suite Runner:** Executes a 5-test matrix with animated progress bar and live status indicators.

---

## 3. Verification & Assets

* **Live Prototype File:** [`web_design/index.html`](file:///home/tech_shinobi/Documents/my_projects/portfolio-webiste/web_design/index.html)
* **Avatar Asset:** [`web_design/avatar.webp`](file:///home/tech_shinobi/Documents/my_projects/portfolio-webiste/web_design/avatar.webp) (with fallback to `avatar.png`)
* **Verified Resume:** [`web_design/Natnael_Getachew_Software_CV.pdf`](file:///home/tech_shinobi/Documents/my_projects/portfolio-webiste/web_design/Natnael_Getachew_Software_CV.pdf)
