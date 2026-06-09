import { AppPlaceholderCard } from "@/components/app/AppPlaceholderCard";
import { AppShell } from "@/components/app/AppShell";

type Props = {
  title: string;
  description: string;
  nextAction: string;
};

export function AppPlaceholderPage({ title, description, nextAction }: Props) {
  return (
    <AppShell>
      <AppPlaceholderCard
        title={title}
        description={description}
        nextAction={nextAction}
      />
    </AppShell>
  );
}
