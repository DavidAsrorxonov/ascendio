"use client";

import { useEffect, type ReactNode } from "react";

import { initPostHog } from "@/lib/posthog-client";

type Props = {
  children: ReactNode;
};

export function PostHogProvider({ children }: Props) {
  useEffect(() => {
    initPostHog();
  }, []);

  return children;
}

