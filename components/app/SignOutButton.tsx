"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { getInsforgeBrowserClient } from "@/lib/insforge-client";
import { resetPostHog } from "@/lib/posthog-client";

export function SignOutButton() {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSignOut(): Promise<void> {
    setIsSigningOut(true);
    setMessage(null);

    try {
      const client = getInsforgeBrowserClient();
      const { error } = await client.auth.signOut();

      if (error) {
        console.error("[sign-out]", error);
      }

      const response = await fetch("/api/auth/sign-out", {
        method: "POST",
      });

      if (!response.ok) {
        console.error("[sign-out]", await response.text());
        setMessage("Could not sign out. Please try again.");
        setIsSigningOut(false);
        return;
      }

      resetPostHog();
      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.error("[sign-out]", error);
      setMessage("Could not sign out. Please try again.");
      setIsSigningOut(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        disabled={isSigningOut}
        onClick={() => {
          void handleSignOut();
        }}
        className="rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-text-primary shadow-card transition-colors hover:bg-surface-secondary disabled:cursor-not-allowed disabled:text-text-muted"
      >
        {isSigningOut ? "Signing out..." : "Sign out"}
      </button>

      {message ? (
        <p className="mt-3 text-sm font-normal leading-5 text-error">
          {message}
        </p>
      ) : null}
    </div>
  );
}
