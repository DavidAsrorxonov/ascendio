"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  getInsforgeBrowserClient,
  hasInsforgeBrowserConfig,
} from "@/lib/insforge-client";

export function AuthCallbackPanel() {
  const router = useRouter();
  const [message, setMessage] = useState("Finishing sign in...");

  useEffect(() => {
    let isMounted = true;

    async function finishAuth(): Promise<void> {
      if (!hasInsforgeBrowserConfig()) {
        setMessage("Authentication is not configured yet.");
        return;
      }

      const client = getInsforgeBrowserClient();
      const { data, error } = await client.auth.getCurrentUser();

      if (!isMounted) {
        return;
      }

      if (error || !data.user) {
        console.error("[auth/callback]", error);
        setMessage("Sign in could not be completed. Please try again.");
        router.replace("/login");
        return;
      }

      router.replace("/dashboard");
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
