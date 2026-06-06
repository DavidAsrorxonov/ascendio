import Image from "next/image";

export function TestimonialSection() {
  return (
    <section className="border-b border-border bg-surface px-8 py-18 text-center md:px-24 md:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
        Success Stories
      </p>
      <blockquote className="mx-auto mt-8 max-w-[1000px] text-[28px] font-medium leading-[1.4] text-text-slate md:text-[36px]">
        &ldquo;I used to spend my evenings copy-pasting resumes. Now I open my
        dashboard to see interviews waiting. It feels like cheating. Had 3
        offers on the table simultaneously.&rdquo;
      </blockquote>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Image
          src="/images/user-icon.png"
          alt="Tom Wilson"
          width={56}
          height={56}
          className="rounded-md border border-border"
        />
        <div className="text-left">
          <p className="text-base font-bold text-text-slate">Tom Wilson</p>
          <p className="text-sm font-normal text-text-slate-medium">
            Junior Developer
          </p>
        </div>
      </div>
    </section>
  );
}
