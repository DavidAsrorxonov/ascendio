"use client";

import { BriefcaseBusiness, LayoutDashboard, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    Icon: LayoutDashboard,
  },
  {
    href: "/find-jobs",
    label: "Find Jobs",
    Icon: BriefcaseBusiness,
  },
  {
    href: "/profile",
    label: "Profile",
    Icon: UserRound,
  },
];

export function AppNavbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex h-16 max-w-450 items-center justify-between px-5 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="JobPilot"
            width={197}
            height={67}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex h-full items-center gap-8 text-sm font-medium"
        >
          {navItems.map(({ href, label, Icon }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                className={`flex h-full items-center gap-2 border-b-2 px-1 transition-colors ${
                  isActive
                    ? "border-accent text-accent"
                    : "border-transparent text-text-secondary hover:text-accent"
                }`}
              >
                <Icon className="size-4" aria-hidden="true" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
