import { ContentSlide } from "@/components/presentation/ContentSlide";
import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Enable Data Streams",
    description: "Turn on the integrated telemetry pipeline in Keboola.",
  },
  {
    title: "Create an OpenTelemetry endpoint",
    description: "One URL — store it as a secret in your app.",
  },
  {
    title: "Add one line to your app",
    description: "Telemetry on. Events stream straight into storage tables.",
  },
];

export default function Slide12() {
  return (
    <ContentSlide
      title="Measure What's Used"
      subtitle="OpenTelemetry built-in — decide what to iterate, what to retire"
      animationKey="slide-12"
    >
      <div className="grid grid-cols-3 gap-6 mb-8">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
            className="rounded-2xl border bg-card p-6 shadow-sm"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
              {i + 1}
            </span>
            <h4 className="mt-3 text-xl font-bold text-foreground">{step.title}</h4>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="text-lg text-muted-foreground italic"
      >
        Especially relevant when you're replacing Tableau across many use cases — you need to know what's actually getting used.
      </motion.p>
    </ContentSlide>
  );
}
