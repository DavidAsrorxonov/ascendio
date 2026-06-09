# Memory — PostHog Initialization Review

Last updated: 2026-06-09 21:51 JST

## What was built

Phase 1 Feature 03 PostHog Initialization is currently implemented in the working tree.

- Added `lib/posthog-client.ts` with typed helpers for the four approved product events, browser initialization, `identifyPostHogUser()`, and `resetPostHog()`.
- Added `lib/posthog-server.ts` with a typed server capture helper using `posthog-node`, `flushAt: 1`, `flushInterval: 0`, and `shutdown()` in a `finally` block.
- Added `components/analytics/PostHogProvider.tsx` and wrapped the root layout in it.
- `instrumentation-client.ts` also initializes PostHog through the shared helper.
- OAuth callback now identifies the PostHog user after the InsForge session is created; sign-out resets PostHog after auth cookies are cleared.
- Removed previously wizard-added custom auth/CTA event captures from app code, because `context/code-standards.md` allows only `job_search_started`, `job_found`, `profile_completed`, and `company_researched`.
- Updated `context/progress-tracker.md`, `context/ui-registry.md`, and `posthog-setup-report.md` for the current PostHog state.

Important files:

- `lib/posthog-client.ts`
- `lib/posthog-server.ts`
- `components/analytics/PostHogProvider.tsx`
- `instrumentation-client.ts`
- `app/layout.tsx`
- `components/auth/AuthCallbackPanel.tsx`
- `components/app/SignOutButton.tsx`
- `next.config.ts`
- `posthog-setup-report.md`

## Decisions made

- Project-local standards were treated as higher priority than the PostHog Wizard defaults: only the four approved product events remain in code.
- Browser autocapture and pageview capture are disabled so PostHog does not emit generic events outside the approved list.
- The app expects `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`, matching `context/code-standards.md`, rather than the wizard's prior `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` name.
- The PostHog provider is intentionally non-visual and recorded in `context/ui-registry.md` as having no styles.

## Problems solved

- Duplicate/custom wizard events such as sign-in, sign-out, OAuth, and CTA events were removed from the app so future dashboard analytics are based only on the approved feature events.
- PostHog identify/reset is now behind shared helpers, so auth components do not import `posthog-js` directly.
- `npm run lint` passes.
- `./node_modules/.bin/tsc --noEmit` passes.

## Current state

- Review was run and found no TypeScript or lint failures.
- Production build was not re-run to completion after the final `autocapture: false` change because the sandboxed build fails on the known Google Fonts network fetch and the developer said they will run it themselves.
- Potential issue from review: `next.config.ts` still contains PostHog Wizard `/ingest` reverse-proxy rewrites, but `lib/posthog-client.ts` now sends directly to `NEXT_PUBLIC_POSTHOG_HOST`. Decide whether to keep the wizard proxy and set host to `/ingest`, or remove the unused rewrites.
- Potential issue from review: if deployment environments only contain the wizard-created `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`, the current helpers will silently skip initialization. Ensure deployment envs include `NEXT_PUBLIC_POSTHOG_KEY`.
- Minor review note: PostHog is initialized from both `instrumentation-client.ts` and `PostHogProvider`; a guard prevents duplicate init, but the two-entry pattern should be kept intentionally or simplified.

## Next session starts with

Resolve the review decisions before Phase 1 Feature 04 Database Schema:

- Confirm whether the project should preserve the PostHog Wizard reverse proxy by using `/ingest`, or use the project-standard direct host.
- Confirm deployment env variable names for PostHog.
- Run `npm run build` locally with network access for the existing Inter font fetch.
- If the review decisions are accepted as-is, start Phase 1 Feature 04 Database Schema.

## Open questions

- Should PostHog Wizard-generated conversion/auth events remain out of the app permanently, or should `context/code-standards.md` be expanded to allow them?
- Should `instrumentation-client.ts` alone initialize PostHog, or should the root `PostHogProvider` remain as the visible app-level integration point required by the build plan?
