import type { ReactNode } from "react";

import { LandingNavbar } from "@/components/homepage/LandingNavbar";

type Props = {
  children: ReactNode;
};

export function AppShell({ children }: Props) {
  return (
    <main className="min-h-screen bg-background">
      <LandingNavbar />
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-450 items-start justify-center px-5 py-12 md:px-12">
        {children}
      </div>
    </main>
  );
}
