import { ContentSlide } from "@/components/presentation/ContentSlide";
import { motion } from "framer-motion";

const STEPS = [
  {
    label: "Yesterday",
    title: "Single file",
    description: "Streamlit-style: one .py and you're done.",
  },
  {
    label: "Today",
    title: "Bring your own git repo",
    description: "Follow the structure, connect the repo, it boots. Works — but too much friction for business users.",
  },
  {
    label: "Coming next",
    title: "Fully hosted applications",
    description: "Keboola hosts the whole app. Users describe what they want, no GitHub account or repo to manage. Best UX, minimum effort. Ready — not yet in production.",
  },
];

export default function Slide09() {
  return (
    <ContentSlide
      title="From Repo to Hosted"
      subtitle="Closing the gap between developer power and business UX"
      animationKey="slide-09"
    >
      <div className="grid grid-cols-3 gap-6">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
            className="rounded-2xl border bg-card p-6 shadow-sm"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {step.label}
            </span>
            <h4 className="mt-2 text-xl font-bold text-foreground">{step.title}</h4>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </ContentSlide>
  );
}
