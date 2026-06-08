"use client";

import { createBrowserClient } from "@insforge/sdk/ssr";
import type { InsForgeClient } from "@insforge/sdk";

let insforgeClient: InsForgeClient | null = null;

export function hasInsforgeBrowserConfig(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_INSFORGE_URL &&
      process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY,
  );
}

export function getInsforgeBrowserClient(): InsForgeClient {
  if (!insforgeClient) {
    insforgeClient = createBrowserClient({
      baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL,
      anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY,
    });
  }

  return insforgeClient;
}
