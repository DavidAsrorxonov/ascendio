import { AppShell } from "@/components/app/AppShell";
import { ProfileAttentionBanner } from "@/components/profile/ProfileAttentionBanner";
import { ProfileConnectedAccounts } from "@/components/profile/ProfileConnectedAccounts";
import { ProfileInformationForm } from "@/components/profile/ProfileInformationForm";
import { ProfileResumeSection } from "@/components/profile/ProfileResumeSection";

export function ProfilePageContent() {
  return (
    <AppShell>
      <div className="w-full max-w-[920px] space-y-8">
        <ProfileAttentionBanner />
        <ProfileConnectedAccounts />
        <ProfileResumeSection />
        <ProfileInformationForm />
      </div>
    </AppShell>
  );
}
