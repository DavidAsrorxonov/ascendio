import { LandingButton } from "@/components/homepage/LandingButton";

export function LandingHero() {
  return (
    <section className="landing-haze border-b border-border px-6 py-20 text-center md:px-12 md:py-24 lg:py-28">
      <h1 className="mx-auto max-w-230 text-5xl font-bold leading-[1.08] text-text-slate md:text-[56px] lg:text-[64px]">
        Job hunting is hard.
        <br />
        Your tools shouldn&apos;t be.
      </h1>
      <p className="mx-auto mt-6 max-w-180 text-base font-normal leading-7 text-text-slate-medium md:text-lg">
        Stop applying blind. Ascendio finds the jobs, researches the companies,
        and gives you everything you need to stand out.
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
