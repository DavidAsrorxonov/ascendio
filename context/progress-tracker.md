# Progress Tracker

Update this file after every completed feature. Any AI agent reading this should immediately know what is done, what is in progress, and what is next.

---

## Current Status

**Phase:** Phase 2 — Profile Page
**Last completed:** 05 Profile Page — Full UI
**Next:** 06 Profile Save Logic

---

## Progress

### Phase 1 — Foundation

- [x] 01 Homepage
- [x] 02 Auth
- [x] 03 PostHog Initialization
- [x] 04 Database Schema

### Phase 2 — Profile Page

- [x] 05 Profile Page — Full UI
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
- 2026-06-09 — Added basic protected placeholder UI for `/dashboard`, `/profile`, and `/find-jobs` to prevent post-auth 404s, with a working sign-out button.
- 2026-06-09 — Hardened OAuth callback handling: the browser now carries only the PKCE verifier, `/api/auth/session` exchanges the OAuth code server-side before setting cookies, and `proxy.ts` verifies the current InsForge user before allowing protected routes.
- 2026-06-09 — PostHog foundation completed with typed browser/server helpers, root provider initialization, client-side identify after OAuth callback, reset on sign-out, and enforcement of the four approved product event names only.
- 2026-06-10 — Profile page full UI built against `context/designs/profile.png` with mock data only. Added a protected app navbar, profile attention banner, resume upload/generate panel, and full profile information form. No save, upload, extraction, or generation logic was wired.
- 2026-06-10 — Profile page UI refined with a LinkedIn connected-account card under the profile attention banner and reusable styled select controls replacing browser-default select presentation.
- 2026-06-10 — Profile select controls were upgraded from native expanded menus to custom token-styled dropdown listboxes so the open state can match the application UI.

---

## Notes

- 2026-06-06 — `npm run build` required network access for `next/font/google` to fetch Inter; build passes after approval.
- 2026-06-06 — Hero and CTA gradient is handled by the `landing-haze` utility, using only existing design tokens and CSS color mixing.
- 2026-06-08 — `npm run lint` passes.
- 2026-06-08 — `npm run build` passes after network approval for the existing Inter font fetch.
- 2026-06-08 — Local browser QA not run by agent because the developer chose to run the dev server locally.
- 2026-06-08 — Recovered OAuth start failure by correcting `.env.local`: `NEXT_PUBLIC_INSFORGE_URL` must be the InsForge backend URL, not the anon key.
- 2026-06-09 — Recovered OAuth post-callback session loss by explicitly exchanging `insforge_code`, saving InsForge tokens into app-domain cookies through `/api/auth/session`, and redirecting sign-ins to `/dashboard`.
- 2026-06-09 — `npm run lint` and `npm run build` pass after adding placeholder app pages; build still needs network access for the existing Inter font fetch.
- 2026-06-09 — Review fixes complete: post-login redirect matches the build plan, protected routes no longer trust cookie presence alone, and sign-out reports local cookie clear failures instead of silently redirecting.
- 2026-06-09 — PostHog setup verified with `npm run lint` and `npm run build`; build still requires network access for the existing Inter font fetch.
- 2026-06-09 — Database schema created directly in InsForge through MCP infrastructure tools. `profiles`, `agent_runs`, `jobs`, and `agent_logs` are live with ownership-scoped RLS policies using `auth.uid()`, practical constraints, indexes, and timestamp triggers.
- 2026-06-09 — Created private InsForge Storage bucket `resumes` for authenticated resume PDF access. No tailoring-specific columns were added because resume tailoring is out of scope.
- 2026-06-10 — Profile page UI verified with `npm run lint` and `npm run build`. Build required network access for the existing Inter font fetch. Browser QA was not run because the developer will run the local server.
- 2026-06-10 — Profile UI refinements verified with `npm run lint` and `npm run build`; build still requires network access for the existing Inter font fetch.
- 2026-06-10 — Custom select dropdown refinement passed `npm run lint`. `npm run build` was blocked by repeated external Google Fonts fetch failures from `fonts.gstatic.com` after the approved network retry, not by TypeScript or lint errors.
