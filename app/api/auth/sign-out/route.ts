import { clearAuthCookies } from "@insforge/sdk/ssr";
import { NextResponse } from "next/server";

export async function POST() {
  try {
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
