import { ContentSlide } from "@/components/presentation/ContentSlide";
import { DiagramCard } from "@/components/presentation/DiagramCard";

export default function Slide11() {
  return (
    <ContentSlide
      title="What We'll Build Live"
      subtitle="The afternoon shortlist — concrete demos, not slides"
      animationKey="slide-11"
    >
      <DiagramCard
        columns={2}
        items={[
          {
            id: "dashboard",
            title: "Dashboard / Tableau replacement",
            description:
              "Interactive visualization built from natural language — the path most customers care about first.",
          },
          {
            id: "writeback",
            title: "Write-back to Keboola",
            description:
              "Control schedules, send emails, save data — actions triggered from the app, not just charts.",
          },
          {
            id: "authz",
            title: "Authorization & entitlements",
            description:
              "Per-user data access. The unlock for data-selling scenarios where every viewer sees a different slice.",
          },
          {
            id: "kai-in-app",
            title: "Kai inside the app",
            description:
              "Conversational AI embedded in the Data App — show what's possible, deep how-to comes in the afternoon.",
          },
        ]}
      />
    </ContentSlide>
  );
}
