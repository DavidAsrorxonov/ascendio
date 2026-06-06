import Image from "next/image";

export function DashboardPreview() {
  return (
    <section className="overflow-hidden border-b border-border bg-surface-tertiary px-5 pt-12 md:px-20 md:pt-16">
      <Image
        src="/images/dashboard-demo.png"
        alt="Ascendio dashboard preview"
        width={2394}
        height={1208}
        priority
        className="mx-auto w-full max-w-350"
      />
    </section>
  );
}
