"use client";

import { GitBranch, Globe, ShieldCheck } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import {
  getInsforgeBrowserClient,
  hasInsforgeBrowserConfig,
  INSFORGE_OAUTH_CODE_VERIFIER_STORAGE_KEY,
} from "@/lib/insforge-client";

type OAuthProvider = "google" | "github";

type AuthStatus = "idle" | "loading" | "checking";

const providerLabels: Record<OAuthProvider, string> = {
  google: "Continue with Google",
  github: "Continue with GitHub",
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
    const { data, error } = await client.auth.signInWithOAuth(provider, {
      redirectTo,
      additionalParams:
        provider === "google" ? { prompt: "select_account" } : undefined,
      skipBrowserRedirect: true,
    });

    if (error || !data.url || !data.codeVerifier) {
      console.error("[auth/login]", error);
      setStatus("idle");
      setActiveProvider(null);
      setMessage("Could not start sign in. Please try again.");
      return;
    }

    window.sessionStorage.setItem(
      INSFORGE_OAUTH_CODE_VERIFIER_STORAGE_KEY,
      data.codeVerifier,
    );
    window.location.assign(data.url);
  }

  return (
    <section className="grid overflow-hidden rounded-xl border border-border bg-surface shadow-card lg:grid-cols-[1.08fr_0.92fr]">
      <div className="landing-haze border-b border-border px-6 py-10 md:px-10 md:py-14 lg:border-b-0 lg:border-r lg:px-12 lg:py-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/75 px-3 py-1 text-xs font-medium text-text-secondary shadow-card">
          <ShieldCheck aria-hidden="true" className="h-4 w-4 text-accent" />
          <span>OAuth secured by InsForge</span>
        </div>

        <h1 className="mt-9 max-w-120 text-[42px] font-bold leading-[1.08] text-text-slate md:text-[52px]">
          Sign in and let the agent prep your next application.
        </h1>
        <p className="mt-6 max-w-115 text-base font-normal leading-7 text-text-slate-medium md:text-lg">
          Connect with Google or GitHub to start building your profile, matching
          jobs, and creating tailored application materials.
        </p>
        <p className="mt-12 text-sm font-medium leading-5 text-text-secondary">
          New users are routed to the dashboard after sign-in.
        </p>
      </div>

      <div className="flex items-center px-6 py-10 md:px-12 lg:px-14">
        <div className="w-full">
          <p className="text-sm font-normal leading-5 text-text-secondary">
            Welcome to
          </p>
          <h2 className="mt-2 text-[28px] font-semibold leading-9 text-text-primary">
            Ascendio
          </h2>
          <p className="mt-4 text-sm font-normal leading-5 text-text-secondary">
            Choose your preferred provider to continue.
          </p>

          <div className="mt-10 flex flex-col gap-3">
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
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:bg-surface-secondary disabled:cursor-not-allowed disabled:text-text-muted"
                >
                  {provider === "google" ? (
                    <Globe aria-hidden="true" className="h-5 w-5 text-accent" />
                  ) : (
                    <GitBranch
                      aria-hidden="true"
                      className="h-5 w-5 text-text-primary"
                    />
                  )}
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
        </div>
      </div>
    </section>
  );
}
