import { SignOutButton } from "@/components/app/SignOutButton";

type Props = {
  title: string;
  description: string;
  nextAction: string;
};

export function AppPlaceholderCard({ title, description, nextAction }: Props) {
  return (
    <section className="w-full max-w-160 rounded-xl border border-border bg-surface p-6 shadow-card">
      <h1 className="text-2xl font-semibold leading-8 text-text-primary">
        {title}
      </h1>
      <p className="mt-4 text-base font-normal leading-7 text-text-secondary">
        {description}
      </p>
      <p className="mt-3 text-sm font-normal leading-5 text-text-muted">
        {nextAction}
      </p>

      <div className="mt-8">
        <SignOutButton />
      </div>
    </section>
  );
}
