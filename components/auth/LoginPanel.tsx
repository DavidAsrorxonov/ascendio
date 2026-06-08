"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import {
  getInsforgeBrowserClient,
  hasInsforgeBrowserConfig,
} from "@/lib/insforge-client";

type OAuthProvider = "google" | "github";

type AuthStatus = "idle" | "loading" | "checking";

const providerLabels: Record<OAuthProvider, string> = {
  google: "Continue with Google",
  github: "Continue with GitHub",
};

const providerMarks: Record<OAuthProvider, string> = {
  google: "G",
  github: "GH",
};

export function LoginPanel() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<AuthStatus>("checking");
  const [activeProvider, setActiveProvider] = useState<OAuthProvider | null>(
    null,
  );
  const [message, setMessage] = useState<string | null>(null);

  const redirectTo = useMemo(() => {
    if (typeof window === "undefined") {
      return "/callback";
    }

    return `${window.location.origin}/callback`;
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function redirectAuthenticatedUser(): Promise<void> {
      if (!hasInsforgeBrowserConfig()) {
        setStatus("idle");
        setMessage("Authentication is not configured yet.");
        return;
      }

      const client = getInsforgeBrowserClient();
      const { data, error } = await client.auth.getCurrentUser();

      if (!isMounted) {
        return;
      }

      if (error) {
        setStatus("idle");
        return;
      }

      if (data.user) {
        router.replace("/dashboard");
        return;
      }

      setStatus("idle");
    }

    void redirectAuthenticatedUser();

    return () => {
      isMounted = false;
    };
  }, [router]);

  const routeMessage =
    searchParams.get("reason") === "protected"
      ? "Sign in to continue to your workspace."
      : null;
  const visibleMessage = message ?? routeMessage;

  async function handleOAuth(provider: OAuthProvider): Promise<void> {
    if (!hasInsforgeBrowserConfig()) {
      setMessage("Authentication is not configured yet.");
      return;
    }

    setStatus("loading");
    setActiveProvider(provider);
    setMessage(null);

    const client = getInsforgeBrowserClient();
    const { error } = await client.auth.signInWithOAuth(provider, {
      redirectTo,
      additionalParams:
        provider === "google" ? { prompt: "select_account" } : undefined,
    });

    if (error) {
      console.error("[auth/login]", error);
      setStatus("idle");
      setActiveProvider(null);
      setMessage("Could not start sign in. Please try again.");
    }
  }

  return (
    <section className="w-full max-w-112 rounded-xl border border-border bg-surface p-6 shadow-card">
      <div>
        <p className="text-xs font-medium uppercase tracking-normal text-accent">
          Welcome back
        </p>
        <h1 className="mt-3 text-2xl font-semibold leading-8 text-text-primary">
          Sign in to Ascendio
        </h1>
        <p className="mt-2 text-sm font-normal leading-6 text-text-secondary">
          Use your Google or GitHub account to access your job search workspace.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {(["google", "github"] as const).map((provider) => {
          const isActive = activeProvider === provider;
          const isDisabled = status !== "idle";

          return (
            <button
              key={provider}
              type="button"
              disabled={isDisabled}
              onClick={() => {
                void handleOAuth(provider);
              }}
              className="flex h-12 w-full items-center justify-center gap-3 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-text-primary shadow-card transition-colors hover:bg-surface-secondary disabled:cursor-not-allowed disabled:text-text-muted"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface-secondary text-xs font-semibold text-text-dark">
                {providerMarks[provider]}
              </span>
              <span>
                {isActive ? "Redirecting..." : providerLabels[provider]}
              </span>
            </button>
          );
        })}
      </div>

      {visibleMessage ? (
        <p className="mt-4 rounded-md border border-border bg-surface-secondary px-3 py-2 text-sm font-normal leading-5 text-text-secondary">
          {visibleMessage}
        </p>
      ) : null}
    </section>
  );
}
