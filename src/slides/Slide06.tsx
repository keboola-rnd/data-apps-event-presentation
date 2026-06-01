import { ContentSlide } from "@/components/presentation/ContentSlide";
import { ComparisonView } from "@/components/presentation/ComparisonView";

export default function Slide06() {
  return (
    <ContentSlide
      title="LLMs: From Clunky to One-Shot"
      subtitle="Code generation worked — but the experience changed dramatically"
      animationKey="slide-06"
    >
      <ComparisonView
        left={{
          title: "Early LLMs (2024–2025)",
          items: [
            "One prompt → a dashboard, in theory",
            "Output looked generic",
            "Multiple iterations needed",
            "Missing the analyst's reasoning",
          ],
          variant: "negative",
        }}
        right={{
          title: "Reasoning models",
          items: [
            "\"Think like a data analyst\" actually works",
            "One-shot produces polished dashboards",
            "Detail, structure, real context",
            "No code knowledge required",
          ],
          variant: "positive",
        }}
      />
    </ContentSlide>
  );
}
