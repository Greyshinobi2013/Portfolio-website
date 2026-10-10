# Portfolio & Case Studies Showcase — Security & Access Control Specification (`AUTH.md`)

**Course:** CodeOps Full Stack Software Development  
**Module:** Module 3 · Frontend: React & Next.js · Capstone Project Alignment (Week 9 · Day 45)  
**Author:** Natnael Getachew (`Greyshinobi2013`)  
**Repository:** `portfolio-website`  
**Live Production URL:** [https://portfolio-website-rho-three-54.vercel.app](https://portfolio-website-rho-three-54.vercel.app)  

---

## 1. Architectural Strategy: Defense-in-Depth for Public Portfolio

In a publicly accessible engineering portfolio and developer case studies platform, the threat model centers on:
1. **Malicious Ingress Protection:** Cross-Site Scripting (XSS) and header injection via public ingress endpoints (`/api/contact`).
2. **Denial-of-Service (DoS) & Spam Flooding:** Bot attacks exhausting outbound mail quotas.
3. **Secret Leakage Prevention:** Preventing SMTP credentials, private API keys, and environment variables from leaking into the client JavaScript bundle.

```
       [ Incoming HTTP Request ]
                   │
                   ▼
    ┌─────────────────────────────┐
    │  Layer 1: Edge & Network    │  ──> Vercel Edge firewall & rate limiting
    │  (WAF / Origin Protection)  │      Blocks malicious scanners & DDoS bursts
    └──────────────┬──────────────┘
                   │ Allowed
                   ▼
    ┌─────────────────────────────┐
    │  Layer 2: Route / Handler   │  ──> Next.js Route Handler Validation
    │  (Schema & Type Checking)   │      Email regex check, payload size limit, required fields
    └──────────────┬──────────────┘
                   │ Validated
                   ▼
    ┌─────────────────────────────┐
    │  Layer 3: Sanitization      │  ──> HTML entity encoding (escapeHtml)
    │  (Point of Side Effect)     │      Strips script injections before SMTP dispatch
    └─────────────────────────────┘
```

---

## 2. Decision Table One: Who May Access What

| Route or Handler | Who May Access | Protected By | What That Proves |
| :--- | :--- | :--- | :--- |
| **`/` (Home & Case Studies)** | Everyone (Public) | Static Prerender (SSG/ISR) | Public developer showcase; indexable and CDN cacheable. |
| **`/api/health`** | Everyone / Uptime Bots | Route Handler (GET) | Lightweight telemetry endpoint; verifies system responsiveness without side effects. |
| **`/api/contact`** | Public Visitors & Recruiters | Input Validation + HTML Escaping + Method Guard | Protects outbound mail server from malformed payloads, script injections, and abuse. |
| **Outbound Email Pipeline** | Authorized Ingress Only | Server Secrets (`GMAIL_APP_PASSWORD`) | Dispatches notification emails without exposing SMTP credentials to the browser. |

---

## 3. Threat Mitigation & Defensive Implementations

### 3.1 Attack Mitigation #1: Cross-Site Scripting (XSS) via Contact Payloads
* **Vector:** An attacker submits `<script>alert('pwned')</script>` or malicious iframe payloads through the recruiter contact form.
* **Defense:** Explicit server-side HTML entity escaping applied before rendering HTML email templates:
  ```typescript
  // apps/web/src/app/api/contact/route.ts
  function escapeHtml(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  ```
* **Result:** **REPELLED.** Executable code is neutralized into benign text entities.

### 3.2 Attack Mitigation #2: Environment Secret Leakage Audit
* **Vector:** Exposing SMTP credentials or API tokens in client-side bundles.
* **Defense:** Strict environment hygiene. Server secrets (`GMAIL_APP_PASSWORD`, `DATABASE_URL`) strictly omit the `NEXT_PUBLIC_` prefix. Next.js App Router compiler completely excludes them from client-facing JavaScript chunks.

### 3.3 Attack Mitigation #3: Method & Route Tampering
* **Vector:** Attacker calls unsupported HTTP methods (e.g., `DELETE`, `PUT`) or sends empty JSON payloads.
* **Defense:** Route handlers strictly expose allowed HTTP verbs (`POST` for contact, `GET` for health). Payloads without required fields are rejected immediately with `400 Bad Request`.
