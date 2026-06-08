export function LoginPanelFallback() {
  return (
    <section className="w-full max-w-112 rounded-xl border border-border bg-surface p-6 shadow-card">
      <p className="text-xs font-medium uppercase tracking-normal text-accent">
        Welcome back
      </p>
      <h1 className="mt-3 text-2xl font-semibold leading-8 text-text-primary">
        Sign in to Ascendio
      </h1>
      <p className="mt-2 text-sm font-normal leading-6 text-text-secondary">
        Loading authentication options...
      </p>
    </section>
  );
}
