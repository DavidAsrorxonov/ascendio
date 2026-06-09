# UI Registry

Living document. Updated after every component is built. Read this before building any new component — match existing patterns exactly before inventing new ones.

---

## How to Use

Before building any component:

1. Check if a similar component already exists here
2. If yes — match its exact classes
3. If no — build it following ui-rules.md and ui-tokens.md, then add it here

After building any component — update this file with the component name, file path, and exact classes used.

---

## Components

### Homepage Composition

File: components/homepage/Homepage.tsx
Last updated: 2026-06-06

| Property         | Class                                                      |
| ---------------- | ---------------------------------------------------------- |
| Background       | `bg-surface`                                               |
| Border           | `border-x border-border`                                  |
| Border radius    | none                                                       |
| Text — primary   | `text-text-slate`                                          |
| Text — secondary | none                                                       |
| Spacing          | component sections manage spacing                          |
| Hover state      | none                                                       |
| Shadow           | none                                                       |
| Accent usage     | delegates to child components                              |

**Pattern notes:**
Homepage composition uses a centered `max-w-[1800px]` bordered shell. Individual sections own their visual rhythm.

### Landing Navbar

File: components/homepage/LandingNavbar.tsx
Last updated: 2026-06-06

| Property         | Class                                                |
| ---------------- | ---------------------------------------------------- |
| Background       | `bg-surface`                                         |
| Border           | `border-b border-border`                             |
| Border radius    | `rounded-md` on CTA                                  |
| Text — primary   | `text-sm font-medium text-text-slate`                |
| Text — secondary | none                                                 |
| Spacing          | `h-16 px-5 md:px-12 lg:px-24 gap-10`                 |
| Hover state      | `hover:text-accent`, `hover:bg-overlay-dark`         |
| Shadow           | `shadow-card` on CTA                                 |
| Accent usage     | `bg-overlay text-surface` for primary nav CTA        |

**Pattern notes:**
Navbar matches the project 64px header rule. Logo image uses `h-9 w-auto`; nav text and CTA are intentionally small to avoid screenshot-scale typography.

### Landing Button

File: components/homepage/LandingButton.tsx
Last updated: 2026-06-06

| Property         | Class                                                                  |
| ---------------- | ---------------------------------------------------------------------- |
| Background       | `bg-overlay`, `bg-surface/65`                                          |
| Border           | `border border-border-muted` on secondary                              |
| Border radius    | `rounded-md`                                                           |
| Text — primary   | `text-sm md:text-base font-medium text-surface text-text-slate`        |
| Text — secondary | none                                                                   |
| Spacing          | `px-5 py-3 md:px-6`                                                    |
| Hover state      | `hover:bg-overlay-dark`, `hover:bg-surface`, `transition-colors`       |
| Shadow           | `shadow-card`                                                          |
| Accent usage     | Primary action uses `bg-overlay`; secondary remains white/translucent  |

**Pattern notes:**
Use this button for homepage marketing CTAs. Avoid larger text sizes on landing buttons.

### Landing Hero

File: components/homepage/LandingHero.tsx
Last updated: 2026-06-06

| Property         | Class                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| Background       | `landing-haze`                                                        |
| Border           | `border-b border-border`                                              |
| Border radius    | none                                                                  |
| Text — primary   | `text-5xl md:text-[56px] lg:text-[64px] font-bold text-text-slate`    |
| Text — secondary | `text-base md:text-lg font-normal leading-7 text-text-slate-medium`   |
| Spacing          | `px-6 py-20 md:px-12 md:py-24 lg:py-28 mt-6 mt-8 gap-3`               |
| Hover state      | inherited from `LandingButton`                                        |
| Shadow           | inherited from `LandingButton`                                        |
| Accent usage     | token-backed `landing-haze` utility in `app/globals.css`              |

**Pattern notes:**
Hero uses visible pastel gradient utility and a controlled desktop H1 cap of 64px.

### Dashboard Preview

File: components/homepage/DashboardPreview.tsx
Last updated: 2026-06-06

| Property         | Class                                      |
| ---------------- | ------------------------------------------ |
| Background       | `bg-surface-tertiary`                      |
| Border           | `border-b border-border`                   |
| Border radius    | none                                       |
| Text — primary   | none                                       |
| Text — secondary | none                                       |
| Spacing          | `px-5 pt-12 md:px-20 md:pt-16`             |
| Hover state      | none                                       |
| Shadow           | asset includes mockup shadow               |
| Accent usage     | none                                       |

**Pattern notes:**
Use supplied PNG mockups for preview fidelity; do not rebuild screenshot interiors in markup unless the design requires interaction.

### Feature Split Section

File: components/homepage/FeatureSplitSection.tsx
Last updated: 2026-06-06

| Property         | Class                                                                  |
| ---------------- | ---------------------------------------------------------------------- |
| Background       | `bg-surface`, `bg-surface-muted`                                       |
| Border           | `border-b border-border`, `divide-y divide-border`, `border-l-2`       |
| Border radius    | none                                                                   |
| Text — primary   | `text-[38px] md:text-[44px] lg:text-[52px]`, `text-xl font-bold`       |
| Text — secondary | `text-base md:text-lg font-normal leading-7 text-text-slate-medium`    |
| Spacing          | `px-8 py-14 md:px-16 lg:py-16`, row `px-8 py-8 md:px-16`               |
| Hover state      | none                                                                   |
| Shadow           | none                                                                   |
| Accent usage     | `border-l-accent`, `border-l-success`                                  |

**Pattern notes:**
Use this shared section for two-column marketing feature bands. It intentionally reduces heading, body, and image max widths so sections do not dominate the viewport.

### Striped Divider

File: components/homepage/StripedDivider.tsx
Last updated: 2026-06-06

| Property         | Class                         |
| ---------------- | ----------------------------- |
| Background       | `section-stripes`             |
| Border           | `border-b border-border`      |
| Border radius    | none                          |
| Text — primary   | none                          |
| Text — secondary | none                          |
| Spacing          | `h-20`                        |
| Hover state      | none                          |
| Shadow           | none                          |
| Accent usage     | none                          |

**Pattern notes:**
Divider uses a token-backed global utility to recreate the light hatched bands from the reference.

### Testimonial Section

File: components/homepage/TestimonialSection.tsx
Last updated: 2026-06-06

| Property         | Class                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| Background       | `bg-surface`                                                          |
| Border           | `border-b border-border`, avatar `border border-border`               |
| Border radius    | `rounded-md` avatar                                                   |
| Text — primary   | `text-[28px] md:text-[36px] font-medium text-text-slate`              |
| Text — secondary | `text-sm font-normal text-text-slate-medium`                          |
| Spacing          | `px-8 py-18 md:px-24 md:py-24 mt-8 gap-4`                             |
| Hover state      | none                                                                  |
| Shadow           | none                                                                  |
| Accent usage     | `text-accent` eyebrow                                                 |

**Pattern notes:**
Testimonial quote scale should stay below hero scale.

### Landing CTA

File: components/homepage/LandingCta.tsx
Last updated: 2026-06-06

| Property         | Class                                                               |
| ---------------- | ------------------------------------------------------------------- |
| Background       | `landing-haze`                                                      |
| Border           | `border-b border-border`                                            |
| Border radius    | inherited from `LandingButton`                                      |
| Text — primary   | `text-[42px] md:text-[56px] font-bold text-text-slate`              |
| Text — secondary | `text-base md:text-lg font-normal leading-7 text-text-slate-medium` |
| Spacing          | `px-6 py-20 md:px-12 md:py-24 mt-6 mt-8 gap-3`                      |
| Hover state      | inherited from `LandingButton`                                      |
| Shadow           | inherited from `LandingButton`                                      |
| Accent usage     | token-backed `landing-haze` utility                                 |

**Pattern notes:**
Bottom CTA is slightly smaller than hero and reuses the same button scale.

### Landing Footer

File: components/homepage/LandingFooter.tsx
Last updated: 2026-06-06

| Property         | Class                                         |
| ---------------- | --------------------------------------------- |
| Background       | `bg-surface`                                  |
| Border           | none                                          |
| Border radius    | none                                          |
| Text — primary   | `text-sm font-normal text-text-slate`         |
| Text — secondary | none                                          |
| Spacing          | `px-8 py-14 md:px-16 gap-8 sm:gap-10`         |
| Hover state      | `hover:text-accent`                           |
| Shadow           | none                                          |
| Accent usage     | hover only                                    |

**Pattern notes:**
Footer logo matches navbar logo at `h-9 w-auto`; footer nav is deliberately small and quiet.

### Auth Login Panel

File: components/auth/LoginPanel.tsx
Last updated: 2026-06-09

| Property         | Class                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Background       | `bg-surface`, left panel `landing-haze`, badge `bg-surface/75`                                                              |
| Border           | `border border-border`, split divider `lg:border-r`, mobile divider `border-b border-border`                                |
| Border radius    | `rounded-xl` shell, `rounded-full` badge, `rounded-md` buttons                                                              |
| Text — primary   | left headline `text-[42px] md:text-[52px] font-bold text-text-slate`, right title `text-[28px] font-semibold text-text-primary` |
| Text — secondary | `text-base md:text-lg font-normal text-text-slate-medium`, right copy `text-sm font-normal text-text-secondary`             |
| Spacing          | shell `grid`, left `px-6 py-10 md:px-10 md:py-14 lg:px-12 lg:py-16`, right `px-6 py-10 md:px-12 lg:px-14`, buttons `h-12 px-4 py-2 gap-3` |
| Hover state      | `hover:bg-surface-secondary`, `disabled:cursor-not-allowed disabled:text-text-muted`                                        |
| Shadow           | `shadow-card` on shell and badge                                                                                            |
| Accent usage     | Lucide `Globe` and `ShieldCheck` use `text-accent`, Lucide `GitBranch` uses `text-text-primary`, token-backed `landing-haze` |

**Pattern notes:**
Login uses a wide two-column card with a soft token-backed left haze and compact right-side OAuth controls. OAuth buttons use Lucide icons: `Globe` for Google in the accent token and `GitBranch` for GitHub in default text color. The left headline is intentionally smaller than the reference image while keeping the stacked bold rhythm. OAuth starts with manual redirect handling so the PKCE verifier can be carried into the server-owned callback session route.

### Auth Login Fallback

File: components/auth/LoginPanelFallback.tsx
Last updated: 2026-06-08

| Property         | Class                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Background       | `bg-surface`, left panel `landing-haze`, loading bars `bg-surface-secondary`                                                |
| Border           | `border border-border`, split divider `lg:border-r`, mobile divider `border-b border-border`                                |
| Border radius    | `rounded-xl` shell, `rounded-full` loading badge, `rounded-md` loading bars                                                 |
| Text — primary   | `text-[42px] md:text-[52px] font-bold text-text-slate`, right title `text-[28px] font-semibold text-text-primary`           |
| Text — secondary | `text-base md:text-lg font-normal text-text-slate-medium`, right copy `text-sm font-normal text-text-secondary`             |
| Spacing          | left `px-6 py-10 md:px-10 md:py-14 lg:px-12 lg:py-16`, right `px-6 py-10 md:px-12 lg:px-14`, loading bars `mt-10 h-12`, `mt-3 h-12` |
| Hover state      | none                                                                                                                        |
| Shadow           | `shadow-card` on shell and loading badge                                                                                    |
| Accent usage     | token-backed `landing-haze`                                                                                                 |

**Pattern notes:**
Fallback mirrors the split login shell so Suspense loading does not shift the auth page layout.

### Auth Callback Panel

File: components/auth/AuthCallbackPanel.tsx
Last updated: 2026-06-09

| Property         | Class                                                                     |
| ---------------- | ------------------------------------------------------------------------- |
| Background       | `bg-surface`, indicator outer `bg-accent-muted`, indicator inner `bg-accent` |
| Border           | `border border-border`                                                    |
| Border radius    | `rounded-xl` panel, `rounded-full` indicator                              |
| Text — primary   | `text-base font-semibold text-text-primary`                               |
| Text — secondary | `text-sm font-normal text-text-secondary`                                 |
| Spacing          | `p-6`, `mt-4`, `mt-2`, indicator `p-2`                                    |
| Hover state      | none                                                                      |
| Shadow           | `shadow-card`                                                             |
| Accent usage     | `bg-accent-muted`, `bg-accent` status indicator                           |

**Pattern notes:**
Callback state uses the same auth card shell with a compact accent indicator instead of a decorative loader or new animation pattern. Successful callbacks route to `/dashboard`.

### App Shell

File: components/app/AppShell.tsx
Last updated: 2026-06-09

| Property         | Class                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| Background       | `bg-background`                                                       |
| Border           | inherited from `LandingNavbar`                                        |
| Border radius    | none                                                                  |
| Text — primary   | inherited from child components                                       |
| Text — secondary | inherited from child components                                       |
| Spacing          | `min-h-screen`, content `px-5 py-12 md:px-12`, `min-h-[calc(100vh-64px)]` |
| Hover state      | inherited from `LandingNavbar`                                        |
| Shadow           | inherited from child components                                       |
| Accent usage     | inherited from `LandingNavbar`                                        |

**Pattern notes:**
Protected app pages reuse the landing navbar and center compact placeholder content on the token-backed page background until the full feature pages are built.

### App Placeholder Card

File: components/app/AppPlaceholderCard.tsx
Last updated: 2026-06-09

| Property         | Class                                                                    |
| ---------------- | ------------------------------------------------------------------------ |
| Background       | `bg-surface`                                                             |
| Border           | `border border-border`                                                   |
| Border radius    | `rounded-xl`                                                             |
| Text — primary   | `text-2xl font-semibold leading-8 text-text-primary`                     |
| Text — secondary | `text-base font-normal leading-7 text-text-secondary`, `text-sm text-text-muted` |
| Spacing          | `p-6`, `mt-4`, `mt-3`, action area `mt-8`                                |
| Hover state      | inherited from `SignOutButton`                                           |
| Shadow           | `shadow-card`                                                            |
| Accent usage     | none                                                                     |

**Pattern notes:**
Placeholder cards mirror the screenshot-provided simple post-auth state. Keep these cards quiet and compact until each full feature page replaces them.

### Sign Out Button

File: components/app/SignOutButton.tsx
Last updated: 2026-06-09

| Property         | Class                                                                           |
| ---------------- | ------------------------------------------------------------------------------- |
| Background       | `bg-surface`                                                                    |
| Border           | `border border-border`                                                          |
| Border radius    | `rounded-md`                                                                    |
| Text — primary   | `text-sm font-medium text-text-primary`                                         |
| Text — secondary | disabled `disabled:text-text-muted`, error message `text-sm font-normal leading-5 text-error` |
| Spacing          | button `px-4 py-2`, message `mt-3`                                              |
| Hover state      | `hover:bg-surface-secondary`, `disabled:cursor-not-allowed disabled:text-text-muted` |
| Shadow           | `shadow-card`                                                                   |
| Accent usage     | none                                                                            |

**Pattern notes:**
Use this secondary button style for low-emphasis authenticated actions inside placeholder cards. Failed local sign-out shows a compact human-readable error below the button and keeps the user on the current page.

### PostHog Provider

File: components/analytics/PostHogProvider.tsx
Last updated: 2026-06-09

| Property         | Class             |
| ---------------- | ----------------- |
| Background       | none              |
| Border           | none              |
| Border radius    | none              |
| Text — primary   | none              |
| Text — secondary | none              |
| Spacing          | none              |
| Hover state      | none              |
| Shadow           | none              |
| Accent usage     | none              |

**Pattern notes:**
Non-visual root analytics provider. It must return children without wrappers, classes, or layout effects so instrumentation never changes page composition.
