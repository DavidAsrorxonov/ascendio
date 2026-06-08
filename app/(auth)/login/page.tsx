import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { LoginPanel } from "@/components/auth/LoginPanel";
import { LoginPanelFallback } from "@/components/auth/LoginPanelFallback";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-8 md:px-8 md:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-450 flex-col">
        <Link href="/" className="flex w-fit items-center">
          <Image
            src="/logo.png"
            alt="Ascendio"
            width={197}
            height={67}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <div className="flex flex-1 items-center justify-center py-12">
          <Suspense fallback={<LoginPanelFallback />}>
            <LoginPanel />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
