import { ContentSlide } from "@/components/presentation/ContentSlide";
import { DiagramCard } from "@/components/presentation/DiagramCard";

export default function Slide08() {
  return (
    <ContentSlide
      title="Beyond Streamlit: HTTP Wins"
      subtitle="We didn't add 10 frameworks. We made HTTP the only contract."
      animationKey="slide-08"
    >
      <DiagramCard
        columns={2}
        items={[
          {
            id: "api",
            title: "APIs",
            description: "REST, GraphQL, gRPC-Web — anything that answers HTTP",
          },
          {
            id: "web",
            title: "Web apps",
            description: "SPAs, server-rendered, dashboards — anything you serve to a browser",
          },
          {
            id: "python",
            title: "Python",
            description: "Streamlit, FastAPI, Flask, Dash — no framework lock-in",
          },
          {
            id: "anything",
            title: "JS, Go, anything",
            description: "Node, Next.js, Go HTTP — Keboola only asks for the port",
          },
        ]}
      />
    </ContentSlide>
  );
}
