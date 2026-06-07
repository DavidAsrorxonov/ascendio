import { LandingButton } from "@/components/homepage/LandingButton";

export function LandingCta() {
  return (
    <section className="landing-haze border-b border-border px-6 py-20 text-center md:px-12 md:py-24">
      <h2 className="mx-auto max-w-235 text-[42px] font-bold leading-[1.12] text-text-slate md:text-[56px]">
        Your next job search can feel a lot less overwhelming
      </h2>
      <p className="mx-auto mt-6 max-w-190 text-base font-normal leading-7 text-text-slate-medium md:text-lg">
        Set up your profile, upload your resume, and start finding matches in
        minutes.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <LandingButton href="/login" variant="primary">
          Get Started <span aria-hidden="true"> &gt;</span>
        </LandingButton>
        <LandingButton href="/find-jobs" variant="secondary">
          Find Your First Match
        </LandingButton>
      </div>
    </section>
  );
}
