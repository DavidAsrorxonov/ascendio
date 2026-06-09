"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  hasInsforgeBrowserConfig,
  INSFORGE_OAUTH_CODE_VERIFIER_STORAGE_KEY,
} from "@/lib/insforge-client";

export function AuthCallbackPanel() {
  const router = useRouter();
  const [message, setMessage] = useState("Finishing sign in...");

  useEffect(() => {
    let isMounted = true;

    async function finishAuth(): Promise<void> {
      try {
        if (!hasInsforgeBrowserConfig()) {
          setMessage("Authentication is not configured yet.");
          return;
        }

        const code = new URLSearchParams(window.location.search).get(
          "insforge_code",
        );

        if (!code) {
          setMessage("Sign in could not be completed. Please try again.");
          router.replace("/login");
          return;
        }

        const codeVerifier = window.sessionStorage.getItem(
          INSFORGE_OAUTH_CODE_VERIFIER_STORAGE_KEY,
        );

        if (!codeVerifier) {
          setMessage("Sign in could not be completed. Please try again.");
          router.replace("/login");
          return;
        }

        const sessionResponse = await fetch("/api/auth/session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            code,
            codeVerifier,
          }),
        });

        window.sessionStorage.removeItem(
          INSFORGE_OAUTH_CODE_VERIFIER_STORAGE_KEY,
        );

        if (!isMounted) {
          return;
        }

        if (!sessionResponse.ok) {
          console.error("[auth/callback]", await sessionResponse.text());
          setMessage("Sign in could not be completed. Please try again.");
          router.replace("/login");
          return;
        }

        router.replace("/dashboard");
      } catch (error) {
        console.error("[auth/callback]", error);
        setMessage("Sign in could not be completed. Please try again.");
        router.replace("/login");
      }
    }

    void finishAuth();

    return () => {
      isMounted = false;
    };
  }, [router]);

  return (
    <section className="w-full max-w-112 rounded-xl border border-border bg-surface p-6 text-center shadow-card">
      <div className="mx-auto h-10 w-10 rounded-full border border-border bg-accent-muted p-2">
        <div className="h-full w-full rounded-full bg-accent" />
      </div>
      <h1 className="mt-4 text-base font-semibold leading-6 text-text-primary">
        {message}
      </h1>
      <p className="mt-2 text-sm font-normal leading-6 text-text-secondary">
        You will be redirected automatically.
      </p>
    </section>
  );
}
