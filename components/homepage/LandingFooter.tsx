import Image from "next/image";
import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="flex flex-col gap-8 bg-surface px-8 py-14 md:flex-row md:items-center md:justify-between md:px-16">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Ascendio"
          width={197}
          height={67}
          className="h-9 w-auto"
        />
      </Link>
      <nav
        aria-label="Footer navigation"
        className="flex flex-col gap-5 text-sm font-normal text-text-slate sm:flex-row sm:gap-10"
      >
        <Link href="/dashboard" className="hover:text-accent">
          Dashboard
        </Link>
        <Link href="/privacy-policy" className="hover:text-accent">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-accent">
          Terms &amp; Condition
        </Link>
      </nav>
    </footer>
  );
}
