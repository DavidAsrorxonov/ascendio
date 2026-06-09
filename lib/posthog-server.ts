import { PostHog } from "posthog-node";

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

function hasPostHogServerConfig(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_POSTHOG_KEY &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST,
  );
}

export function createPostHogServer(): PostHog | null {
  if (!hasPostHogServerConfig()) {
    return null;
  }

  return new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
    flushAt: 1,
    flushInterval: 0,
  });
}

export async function capturePostHogServerEvent<
  EventName extends PostHogEventName,
>(
  distinctId: string,
  event: EventName,
  properties: PostHogEventProperties[EventName],
): Promise<void> {
  const posthog = createPostHogServer();

  if (!posthog) {
    return;
  }

  try {
    posthog.capture({
      distinctId,
      event,
      properties,
    });
  } finally {
    await posthog.shutdown();
  }
}
