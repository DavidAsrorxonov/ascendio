# Memory — Auth Foundation

Last updated: 2026-06-09 15:03 JST

## What was built

Completed Phase 1 Feature 02 Auth from the build plan.

- Added InsForge auth foundation with Google and GitHub OAuth, `/login`, `/callback`, session route, refresh route, sign-out route, and Next 16 `proxy.ts` protection.
- Added protected placeholder pages for `/dashboard`, `/profile`, and `/find-jobs` so authenticated navigation no longer lands on 404s.
- Built auth UI matching the supplied split-card reference, using `lucide-react` icons: Google uses `Globe` with `text-accent`, GitHub uses `GitBranch` with `text-text-primary`.
- Added a working sign-out button with an inline token-based error state when local cookie clearing fails.
- Updated `context/progress-tracker.md` and `context/ui-registry.md` for auth, protected placeholder pages, and review fixes.

Important files:

- `app/(auth)/login/page.tsx`
- `app/(auth)/callback/page.tsx`
- `app/api/auth/session/route.ts`
- `app/api/auth/refresh/route.ts`
- `app/api/auth/sign-out/route.ts`
- `proxy.ts`
- `lib/insforge-client.ts`
- `lib/insforge-server.ts`
- `components/auth/LoginPanel.tsx`
- `components/auth/AuthCallbackPanel.tsx`
- `components/app/AppShell.tsx`
- `components/app/AppPlaceholderPage.tsx`
- `components/app/AppPlaceholderCard.tsx`
- `components/app/SignOutButton.tsx`

## Decisions made

- Use `proxy.ts` instead of `middleware.ts` because installed Next 16 docs mark middleware as renamed/deprecated.
- Redirect authenticated users to `/dashboard` after OAuth, matching `context/project-overview.md` and `context/build-plan.md`.
- Keep OAuth UI custom instead of using prebuilt InsForge auth components.
- Use InsForge SSR helpers for server-owned cookies: callback sends only `insforge_code` and the PKCE verifier to `/api/auth/session`; the route exchanges the code server-side before setting cookies.
- Protected routes verify the current InsForge user via `getCurrentUser()` before allowing access, instead of trusting cookie presence alone.
- Placeholder app pages intentionally stay minimal until the full Profile, Find Jobs, and Dashboard features are built.

## Problems solved

- OAuth start initially failed because `.env.local` had `NEXT_PUBLIC_INSFORGE_URL` set to the anon key instead of the backend URL. It was corrected to `https://u3vy75bd.us-east.insforge.app`.
- Google OAuth previously returned to `/login?reason=protected` because browser SDK session state was not available as app-domain cookies. Fixed by exchanging the OAuth code through `/api/auth/session` and setting InsForge cookies on the app response.
- Review found three auth issues and they were fixed:
  - callback redirect now matches `/dashboard`;
  - session route no longer accepts raw browser-posted access tokens;
  - sign-out no longer silently redirects when local cookie clearing fails.
- `next/font/google` still needs network access during `npm run build` to fetch Inter. Build passes when network access is approved.

## Current state

- `context/progress-tracker.md` marks Phase 1 Feature 02 Auth complete.
- Next planned feature is Phase 1 Feature 03 PostHog Initialization.
- `npm run lint` passes.
- `npm run build` passes with network access for the existing Inter Google Font fetch.
- Working tree is clean at the time this memory was saved.
- Browser/dev-server QA was not run by the assistant because the developer said they will run the app themselves.

## Next session starts with

Run `/remember restore`, then start Phase 1 Feature 03 PostHog Initialization:

- fetch/read current docs for any library/API touched;
- create `lib/posthog-client.ts` and `lib/posthog-server.ts`;
- initialize PostHog in the root app layout;
- wire `posthog.identify()` after successful login and `posthog.reset()` on logout;
- update `context/progress-tracker.md` and `context/ui-registry.md` if any UI changes are made.

## Open questions

- Developer still needs to confirm the OAuth flow visually in their local browser.
- Database schema and RLS are not created yet; that is Phase 1 Feature 04 after PostHog.
