import { clearAuthCookies } from "@insforge/sdk/ssr";
import { NextResponse } from "next/server";

import { getPostHogClient } from "@/lib/posthog-server";

export async function POST(request: Request) {
  const clientDistinctId = request.headers.get("X-POSTHOG-DISTINCT-ID");

  try {
    const posthog = getPostHogClient();
    posthog.capture({
      distinctId: clientDistinctId ?? "anonymous",
      event: "sign_out_completed",
    });
    await posthog.shutdown();

    const response = NextResponse.json({ success: true });
    clearAuthCookies(response.cookies);

    return response;
  } catch (error) {
    console.error("[auth/sign-out]", error);
    return NextResponse.json(
      { success: false, error: "Failed to sign out" },
      { status: 500 },
    );
  }
}
