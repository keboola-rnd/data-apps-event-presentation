import { ContentSlide } from "@/components/presentation/ContentSlide";
import { ComparisonView } from "@/components/presentation/ComparisonView";

export default function Slide04() {
  return (
    <ContentSlide
      title="The Streamlit Era"
      subtitle="Why people came — and where BI tools stopped"
      animationKey="slide-04"
    >
      <ComparisonView
        left={{
          title: "Tableau / Power BI / Looker",
          items: [
            "Great at visualization",
            "Hit a wall beyond viz",
            "No custom logic in Python",
            "Click-heavy when speed matters",
          ],
          variant: "negative",
        }}
        right={{
          title: "Streamlit",
          items: [
            "A few lines of Python = a working app",
            "Iterate in seconds, no webdev",
            "Full Python ecosystem available",
            "Analysts shipped apps without help",
          ],
          variant: "positive",
        }}
      />
    </ContentSlide>
  );
}
