import {
  type CookieOptions,
  type CookieStore,
  DEFAULT_ACCESS_TOKEN_COOKIE,
  DEFAULT_REFRESH_TOKEN_COOKIE,
  updateSession,
} from "@insforge/sdk/ssr";
import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/profile", "/find-jobs"];

function isProtectedPath(pathname: string): boolean {
  return protectedRoutes.some((route) => {
    return pathname === route || pathname.startsWith(`${route}/`);
  });
}

class RequestCookieAdapter implements CookieStore {
  constructor(private readonly request: NextRequest) {}

  get(name: string) {
    return this.request.cookies.get(name);
  }

  set(): unknown {
    return undefined;
  }

  delete(): unknown {
    return undefined;
  }
}

class ResponseCookieAdapter implements CookieStore {
  constructor(private readonly response: NextResponse) {}

  get(name: string) {
    return this.response.cookies.get(name);
  }

  set(name: string, value: string, options?: CookieOptions): unknown;
  set(options: { name: string; value: string } & CookieOptions): unknown;
  set(
    nameOrOptions: string | ({ name: string; value: string } & CookieOptions),
    value?: string,
    options?: CookieOptions,
  ): unknown {
    if (typeof nameOrOptions === "string") {
      return this.response.cookies.set(nameOrOptions, value ?? "", options);
    }

    return this.response.cookies.set(nameOrOptions);
  }

  delete(name: string): unknown;
  delete(options: { name: string } & CookieOptions): unknown;
  delete(nameOrOptions: string | ({ name: string } & CookieOptions)): unknown {
    if (typeof nameOrOptions === "string") {
      return this.response.cookies.delete(nameOrOptions);
    }

    return this.response.cookies.delete(nameOrOptions.name);
  }
}

export async function proxy(request: NextRequest) {
  const response = NextResponse.next({ request });
  const pathname = request.nextUrl.pathname;

  if (!isProtectedPath(pathname)) {
    return response;
  }

  const session = await updateSession({
    baseUrl: process.env.NEXT_PUBLIC_INSFORGE_URL,
    anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY,
    requestCookies: new RequestCookieAdapter(request),
    responseCookies: new ResponseCookieAdapter(response),
  });

  const hasAccessToken = Boolean(
    session.accessToken ?? request.cookies.get(DEFAULT_ACCESS_TOKEN_COOKIE),
  );
  const hasRefreshToken = Boolean(
    request.cookies.get(DEFAULT_REFRESH_TOKEN_COOKIE),
  );

  if (hasAccessToken || hasRefreshToken) {
    return response;
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("reason", "protected");

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/find-jobs/:path*"],
};
