import { Suspense } from "react";

import { LoginPanel } from "@/components/auth/LoginPanel";
import { LoginPanelFallback } from "@/components/auth/LoginPanelFallback";
import { LandingNavbar } from "@/components/homepage/LandingNavbar";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <LandingNavbar />
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-450 items-center justify-center px-5 py-12 md:px-12 lg:px-24">
        <div className="w-full max-w-280">
          <Suspense fallback={<LoginPanelFallback />}>
            <LoginPanel />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
