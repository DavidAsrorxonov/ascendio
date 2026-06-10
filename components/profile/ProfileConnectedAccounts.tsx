export function ProfileConnectedAccounts() {
  return (
    <section className="rounded-xl border border-border bg-surface p-8 shadow-card">
      <div>
        <h2 className="text-[22px] font-bold leading-7 text-text-primary">
          Connected Accounts
        </h2>
        <p className="mt-3 text-lg font-normal leading-7 text-text-secondary">
          Connect your LinkedIn to let the agent handle manual apply with
          LinkedIn workflows.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-6 rounded-xl border border-border bg-surface px-8 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex size-14 items-center justify-center rounded-lg bg-linkedin-light">
            <span className="flex size-9 items-center justify-center rounded-sm bg-linkedin text-lg font-bold leading-none text-linkedin-foreground">
              in
            </span>
          </div>

          <div>
            <h3 className="text-xl font-bold leading-7 text-text-primary">
              LinkedIn
            </h3>
            <p className="text-base font-normal leading-6 text-text-muted">
              Not connected
            </p>
          </div>
        </div>

        <button
          type="button"
          className="w-full rounded-xl bg-linkedin px-8 py-4 text-xl font-medium leading-7 text-linkedin-foreground shadow-card transition-colors hover:bg-info-dark sm:w-auto"
        >
          Connect LinkedIn
        </button>
      </div>
    </section>
  );
}
