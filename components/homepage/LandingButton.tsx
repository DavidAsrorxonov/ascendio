import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  variant: "primary" | "secondary";
};

export function LandingButton({ children, href, variant }: Props) {
  const classes =
    variant === "primary"
      ? "bg-overlay text-surface hover:bg-overlay-dark"
      : "border border-border-muted bg-surface/65 text-text-slate hover:bg-surface";

  return (
    <Link
      href={href}
      className={`rounded-md px-5 py-3 text-sm font-medium shadow-card transition-colors md:px-6 md:text-base ${classes}`}
    >
      {children}
    </Link>
  );
}
