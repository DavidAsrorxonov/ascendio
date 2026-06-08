export function LoginPanelFallback() {
  return (
    <section className="grid overflow-hidden rounded-xl border border-border bg-surface shadow-card lg:grid-cols-[1.08fr_0.92fr]">
      <div className="landing-haze border-b border-border px-6 py-10 md:px-10 md:py-14 lg:border-b-0 lg:border-r lg:px-12 lg:py-16">
        <div className="h-7 w-48 rounded-full border border-border bg-surface/75 shadow-card" />
        <h1 className="mt-9 max-w-120 text-[42px] font-bold leading-[1.08] text-text-slate md:text-[52px]">
          Sign in and let the agent prep your next application.
        </h1>
        <p className="mt-6 max-w-115 text-base font-normal leading-7 text-text-slate-medium md:text-lg">
          Loading authentication options...
        </p>
      </div>
      <div className="flex items-center px-6 py-10 md:px-12 lg:px-14">
        <div className="w-full">
          <p className="text-sm font-normal leading-5 text-text-secondary">
            Welcome to
          </p>
          <h2 className="mt-2 text-[28px] font-semibold leading-9 text-text-primary">
            Ascendio
          </h2>
          <div className="mt-10 h-12 rounded-md border border-border bg-surface-secondary" />
          <div className="mt-3 h-12 rounded-md border border-border bg-surface-secondary" />
        </div>
      </div>
    </section>
  );
}
