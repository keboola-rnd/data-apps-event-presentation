import { ContentSlide } from "@/components/presentation/ContentSlide";
import { DiagramCard } from "@/components/presentation/DiagramCard";

export default function Slide13() {
  return (
    <ContentSlide
      title="Use Cases"
      subtitle="What customers are doing today"
      animationKey="slide-13"
    >
      <DiagramCard
        columns={2}
        items={[
          {
            id: "groupon",
            title: "Groupon — Tableau replacement",
            description:
              "Moving most use cases to Data Apps. Motivation isn't new features — it's licensing and consolidation. One place to build everything.",
          },
          {
            id: "ai-workflow",
            title: "AI workflow with full context",
            description:
              "Keboola MCP + CLI plug straight into Cloud Desktop (e.g. Claude). \"Got an email, here's the Jira ticket → build a Data App for it.\" Tableau / Power BI don't support this.",
          },
        ]}
      />
    </ContentSlide>
  );
}
