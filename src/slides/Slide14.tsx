import { ContentSlide } from "@/components/presentation/ContentSlide";
import { DiagramCard } from "@/components/presentation/DiagramCard";

export default function Slide14() {
  return (
    <ContentSlide
      title="Key Messages"
      subtitle="Three takeaways"
      animationKey="slide-14"
    >
      <DiagramCard
        columns={3}
        items={[
          {
            id: "writeback",
            title: "Data Apps ≠ BI",
            description:
              "They solve what Tableau / Power BI / Looker can't — writeback, custom actions, LLM processing.",
          },
          {
            id: "no-code",
            title: "Streamlit → No-code",
            description:
              "Reasoning models (Christmas 2025) turned Data Apps into a path where users don't need to know code.",
          },
          {
            id: "http",
            title: "HTTP > Frameworks",
            description:
              "We don't chase frameworks — the contract is HTTP. Anything deployable: Python, JS, Go, APIs.",
          },
        ]}
      />
    </ContentSlide>
  );
}
