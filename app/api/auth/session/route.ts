import { setAuthCookies } from "@insforge/sdk/ssr";
import { NextResponse } from "next/server";

type SessionRequestBody = {
  accessToken?: unknown;
  refreshToken?: unknown;
};

function isSessionRequestBody(value: unknown): value is SessionRequestBody {
  return Boolean(value && typeof value === "object");
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!isSessionRequestBody(body) || typeof body.accessToken !== "string") {
      return NextResponse.json(
        { success: false, error: "Invalid session payload" },
        { status: 400 },
      );
    }

    const response = NextResponse.json({ success: true });

    setAuthCookies(response.cookies, {
      accessToken: body.accessToken,
      refreshToken:
        typeof body.refreshToken === "string" ? body.refreshToken : undefined,
    });

    return response;
  } catch (error) {
    console.error("[auth/session]", error);
    return NextResponse.json(
      { success: false, error: "Failed to save session" },
      { status: 500 },
    );
  }
}
