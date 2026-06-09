import { createServerClient, setAuthCookies } from "@insforge/sdk/ssr";
import { NextResponse } from "next/server";

type SessionRequestBody = {
  code?: unknown;
  codeVerifier?: unknown;
};

function isSessionRequestBody(value: unknown): value is SessionRequestBody {
  return Boolean(value && typeof value === "object");
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (
      !isSessionRequestBody(body) ||
      typeof body.code !== "string" ||
      typeof body.codeVerifier !== "string"
    ) {
      return NextResponse.json(
        { success: false, error: "Invalid session payload" },
        { status: 400 },
      );
    }

    const client = createServerClient({
      baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL,
      anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY,
    });

    const { data, error } = await client.auth.exchangeOAuthCode(
      body.code,
      body.codeVerifier,
    );

    if (error || !data?.accessToken || !data.user) {
      console.error("[auth/session]", error);
      return NextResponse.json(
        { success: false, error: "Could not complete sign in" },
        { status: 401 },
      );
    }

    const response = NextResponse.json({
      success: true,
      data: { user: data.user },
    });

    setAuthCookies(response.cookies, {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
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
