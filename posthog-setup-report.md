<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into Ascendio. PostHog is initialised via `instrumentation-client.ts` (the Next.js 15.3+ recommended pattern) and routed through a reverse proxy configured in `next.config.ts` so that tracking requests are less likely to be intercepted by ad-blockers. A shared server-side client (`lib/posthog-server.ts`) is used in API routes. Users are identified by their InsForge user ID immediately after OAuth completes, and `posthog.reset()` is called on sign-out to keep sessions clean.

| Event | Description | File |
|---|---|---|
| `cta_clicked` | User clicked a landing page CTA button (Get Started or Find Your First Match). Properties: `variant`, `href`. | `components/homepage/LandingButton.tsx` |
| `oauth_initiated` | User clicked a sign-in OAuth provider button. Properties: `provider` (google / github). | `components/auth/LoginPanel.tsx` |
| `sign_in_completed` | OAuth callback finished successfully and the user session was created. User is identified via `posthog.identify()` at this point. | `components/auth/AuthCallbackPanel.tsx` |
| `sign_in_failed` | OAuth callback failed. Properties: `reason` (session_error / exception). | `components/auth/AuthCallbackPanel.tsx` |
| `sign_out_clicked` | User clicked the sign-out button. `posthog.reset()` called after server confirms sign-out. | `components/app/SignOutButton.tsx` |
| `session_created` | **Server-side.** OAuth code exchange succeeded and session cookies were set. Properties: `email`, `$anon_distinct_id`. | `app/api/auth/session/route.ts` |
| `sign_out_completed` | **Server-side.** Auth cookies were cleared, completing the sign-out flow. | `app/api/auth/sign-out/route.ts` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behaviour, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/461938/dashboard/1687089)
- [Sign-in conversion funnel (wizard)](https://us.posthog.com/project/461938/insights/RNUeVXvX)
- [Daily sign-ins (wizard)](https://us.posthog.com/project/461938/insights/DTucRq8b)
- [CTA clicks by variant (wizard)](https://us.posthog.com/project/461938/insights/NBUHWTFY)
- [Sign-in failure rate (wizard)](https://us.posthog.com/project/461938/insights/afdk38At)
- [OAuth provider breakdown (wizard)](https://us.posthog.com/project/461938/insights/NGMI9Ay6)

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
