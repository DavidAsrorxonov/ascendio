# Progress Tracker

Update this file after every completed feature. Any AI agent reading this should immediately know what is done, what is in progress, and what is next.

---

## Current Status

**Phase:** Phase 1 — Foundation
**Last completed:** 02 Auth
**Next:** 03 PostHog Initialization

---

## Progress

### Phase 1 — Foundation

- [x] 01 Homepage
- [x] 02 Auth
- [ ] 03 PostHog Initialization
- [ ] 04 Database Schema

### Phase 2 — Profile Page

- [ ] 05 Profile Page — Full UI
- [ ] 06 Profile Save Logic
- [ ] 07 AI Profile Extraction from Resume
- [ ] 08 Resume PDF Generation from Profile

### Phase 3 — Find Jobs Page

- [ ] 09 Find Jobs Page — Full UI
- [ ] 10 Adzuna Job Discovery
- [ ] 11 Filter + Sort + Pagination

### Phase 4 — Job Details Page

- [ ] 12 Job Details Page — Full UI
- [ ] 13 Company Research Agent

### Phase 5 — Dashboard

- [ ] 14 Dashboard Page — Full UI
- [ ] 15 Stats Bar — Real Data
- [ ] 16 Recent Activity — Real Data
- [ ] 17 Analytics Charts — PostHog Data

---

## Decisions Made During Build

- 2026-06-06 — Homepage built directly in `app/page.tsx` as a Server Component because Feature 01 is static UI with no interaction state.
- 2026-06-06 — Reused supplied assets from `public/`: `logo.png`, `dashboard-demo.png`, `jobs-lists.png`, `agnet-log.png`, and `user-icon.png` to match `context/designs/landing-page.png`.
- 2026-06-06 — Added token-backed global utilities `landing-haze` and `section-stripes` in `app/globals.css` so decorative backgrounds avoid hardcoded component colors.
- 2026-06-06 — Refactored homepage into separate components under `components/homepage/` and reduced landing typography/button scale after visual feedback.
- 2026-06-08 — Auth implemented with `@insforge/sdk` SSR helpers from the latest InsForge MCP docs: browser/server clients, refresh route, OAuth login, callback finalizer, and Next 16 `proxy.ts` protection.
- 2026-06-08 — Used `proxy.ts` instead of `middleware.ts` because installed Next 16 docs mark middleware as renamed/deprecated.
- 2026-06-08 — Login UI revised to match the supplied split-card reference: navbar, left marketing panel, right OAuth provider controls, and smaller left headline scale.
- 2026-06-08 — OAuth button icons switched to `lucide-react`: Google uses `Globe` in accent color, GitHub uses `GitBranch` in default text color.

---

## Notes

- 2026-06-06 — `npm run build` required network access for `next/font/google` to fetch Inter; build passes after approval.
- 2026-06-06 — Hero and CTA gradient is handled by the `landing-haze` utility, using only existing design tokens and CSS color mixing.
- 2026-06-08 — `npm run lint` passes.
- 2026-06-08 — `npm run build` passes after network approval for the existing Inter font fetch.
- 2026-06-08 — Local browser QA not run by agent because the developer chose to run the dev server locally.
- 2026-06-08 — Recovered OAuth start failure by correcting `.env.local`: `NEXT_PUBLIC_INSFORGE_URL` must be the InsForge backend URL, not the anon key.
- 2026-06-09 — Recovered OAuth post-callback session loss by explicitly exchanging `insforge_code`, saving InsForge tokens into app-domain cookies through `/api/auth/session`, and redirecting new sign-ins to `/profile`.
