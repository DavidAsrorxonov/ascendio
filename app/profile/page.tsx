import { AppPlaceholderPage } from "@/components/app/AppPlaceholderPage";

export default function ProfilePage() {
  return (
    <AppPlaceholderPage
      title="Profile"
      description="Profile setup is next after the foundation auth flow is complete."
      nextAction="You are signed in. The full profile form will be built in the next profile phase."
    />
  );
}
