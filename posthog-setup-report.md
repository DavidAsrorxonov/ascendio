<wizard-report>
# PostHog post-wizard report

PostHog is initialized through `instrumentation-client.ts` and the root `PostHogProvider`. Browser and server helpers live in `lib/posthog-client.ts` and `lib/posthog-server.ts`. Users are identified by their InsForge user ID after OAuth completes, and PostHog is reset on sign-out.

| Event | Description | File |
|---|---|---|
| `job_search_started` | Find Jobs button clicked. Properties: `userId`, `jobTitle`, `location`. | Future Feature 10 |
| `job_found` | Each discovered job saved. Properties: `userId`, `source`, `matchScore`. | Future Feature 10 |
| `profile_completed` | User saves a complete profile for the first time. Properties: `userId`. | Future Feature 06 |
| `company_researched` | Company research dossier generated. Properties: `userId`, `jobId`, `company`. | Future Feature 13 |

## Next steps

The current app only has auth and placeholder pages, so the approved product events are exposed as typed helpers and will be emitted as the corresponding product features are built.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
