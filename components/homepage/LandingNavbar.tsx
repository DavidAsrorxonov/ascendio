import Image from "next/image";
import Link from "next/link";

export function LandingNavbar() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex h-16 max-w-450 items-center justify-between px-5 md:px-12 lg:px-24">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Ascendio"
            width={197}
            height={67}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-10 text-sm font-medium text-text-slate md:flex"
        >
          <Link href="/dashboard" className="hover:text-accent">
            Dashboard
          </Link>
          <Link href="/find-jobs" className="hover:text-accent">
            Find Jobs
          </Link>
          <Link href="/profile" className="hover:text-accent">
            Profile
          </Link>
        </nav>

        <Link
          href="/login"
          className="rounded-md bg-overlay px-5 py-3 text-sm font-medium text-surface shadow-card transition-colors hover:bg-overlay-dark"
        >
          Start for free
        </Link>
      </div>
    </header>
  );
}
