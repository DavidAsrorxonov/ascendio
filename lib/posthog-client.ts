"use client";

import posthog from "posthog-js";

type PostHogEventProperties = {
  job_search_started: {
    userId: string;
    jobTitle: string;
    location: string;
  };
  job_found: {
    userId: string;
    source: "search";
    matchScore: number;
  };
  profile_completed: {
    userId: string;
  };
  company_researched: {
    userId: string;
    jobId: string;
    company: string;
  };
};

type PostHogEventName = keyof PostHogEventProperties;

declare global {
  interface Window {
    __ascendioPostHogInitialized?: boolean;
  }
}

function hasPostHogBrowserConfig(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_POSTHOG_KEY &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST,
  );
}

function isPostHogReady(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  if (!window.__ascendioPostHogInitialized) {
    initPostHog();
  }

  return Boolean(window.__ascendioPostHogInitialized);
}

export function initPostHog(): void {
  if (typeof window === "undefined" || window.__ascendioPostHogInitialized) {
    return;
  }

  if (!hasPostHogBrowserConfig()) {
    return;
  }

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
    autocapture: false,
    capture_pageview: false,
  });

  window.__ascendioPostHogInitialized = true;
}

export function identifyPostHogUser(userId: string, email?: string): void {
  if (!isPostHogReady()) {
    return;
  }

  posthog.identify(userId, email ? { email } : undefined);
}

export function resetPostHog(): void {
  if (!isPostHogReady()) {
    return;
  }

  posthog.reset();
}

export function capturePostHogEvent<EventName extends PostHogEventName>(
  event: EventName,
  properties: PostHogEventProperties[EventName],
): void {
  if (!isPostHogReady()) {
    return;
  }

  posthog.capture(event, properties);
}
