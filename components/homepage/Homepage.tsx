import { DashboardPreview } from "@/components/homepage/DashboardPreview";
import { FeatureSplitSection } from "@/components/homepage/FeatureSplitSection";
import { LandingCta } from "@/components/homepage/LandingCta";
import { LandingFooter } from "@/components/homepage/LandingFooter";
import { LandingHero } from "@/components/homepage/LandingHero";
import { LandingNavbar } from "@/components/homepage/LandingNavbar";
import { StripedDivider } from "@/components/homepage/StripedDivider";
import { TestimonialSection } from "@/components/homepage/TestimonialSection";

const jobSearchFeatures = [
  {
    title: "Find jobs that actually fit",
    description:
      "Search by title and location or paste a job link. Get matched roles you can quickly scan.",
    active: true,
  },
  {
    title: "Know the Company Before You Apply",
    description:
      "Stop guessing what a company is about. Ascendio browses their site and gives you everything you need to apply with confidence.",
  },
  {
    title: "Keep track of every application",
    description:
      "Keep a clear view of every job you've found, tailored. Your activity and progress all stay in one simple place.",
  },
];

const confidenceFeatures = [
  {
    title: "Understand your match score",
    description:
      "See how your profile lines up with each role before you apply. Get a clear breakdown of what fits and what's missing.",
  },
  {
    title: "AI-Powered Job Matching",
    description:
      "Stop guessing which jobs are worth applying to. Ascendio scores every role against your actual skills so you focus on the ones that matter.",
    active: true,
  },
  {
    title: "Focus on the right roles",
    description:
      "Filter out low fit jobs and stay on the ones that actually matter. Spend less time sorting and more time applying.",
  },
];

export function Homepage() {
  return (
    <main className="min-h-screen bg-surface text-text-slate">
      <LandingNavbar />
      <div className="mx-auto max-w-450 border-x border-border bg-surface">
        <LandingHero />
        <DashboardPreview />
        <FeatureSplitSection
          accent="accent"
          imageAlt="Matched jobs list preview"
          imageHeight={889}
          imageSrc="/images/jobs-lists.png"
          imageWidth={1182}
          items={jobSearchFeatures}
          title="Manage Your Job Search With Ease"
        />
        <StripedDivider />
        <FeatureSplitSection
          accent="success"
          imageAlt="Ascendio agent log preview"
          imageFirst
          imageHeight={828}
          imageSrc="/images/agnet-log.png"
          imageWidth={1072}
          items={confidenceFeatures}
          title="Apply With More Confidence, Every Time"
        />
        <StripedDivider />
        <TestimonialSection />
        <StripedDivider />
        <LandingCta />
        <StripedDivider />
        <LandingFooter />
      </div>
    </main>
  );
}
