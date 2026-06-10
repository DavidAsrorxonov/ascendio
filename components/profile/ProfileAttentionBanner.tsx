import { CircleAlert } from "lucide-react";

const missingFields = ["PHONE", "LOCATION", "EDUCATION"];

export function ProfileAttentionBanner() {
  return (
    <section className="flex items-center justify-between rounded-xl border border-[color-mix(in_srgb,var(--color-error)_18%,var(--color-border))] bg-surface px-8 py-9 shadow-card">
      <div>
        <div className="flex items-center gap-2">
          <CircleAlert className="size-5 text-error" aria-hidden="true" />
          <h1 className="text-[22px] font-bold leading-7 text-text-primary">
            Profile needs attention
          </h1>
        </div>
        <p className="mt-3 max-w-[460px] text-sm font-medium leading-5 text-text-secondary">
          Complete the missing fields to improve your chance of getting tailored
          matches and generating quality resumes.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {missingFields.map((field) => (
            <span
              key={field}
              className="rounded-sm bg-[color-mix(in_srgb,var(--color-error)_10%,var(--color-surface))] px-2 py-1 text-xs font-bold leading-4 text-error"
            >
              {field}
            </span>
          ))}
        </div>
      </div>

      <div
        className="flex size-32 items-center justify-center rounded-full bg-[conic-gradient(var(--color-error)_0_70%,color-mix(in_srgb,var(--color-error)_14%,var(--color-surface))_70%_100%)]"
        aria-label="Profile completion 70 percent"
      >
        <div className="flex size-22 items-center justify-center rounded-full bg-surface">
          <span className="text-[30px] font-bold leading-9 text-text-primary">
            70%
          </span>
        </div>
      </div>
    </section>
  );
}
