import type { ReactNode } from "react";

import { AppNavbar } from "@/components/app/AppNavbar";

type Props = {
  children: ReactNode;
};

export function AppShell({ children }: Props) {
  return (
    <main className="min-h-screen bg-background">
      <AppNavbar />
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-450 items-start justify-center px-5 py-8 md:px-12">
        {children}
      </div>
    </main>
  );
}
