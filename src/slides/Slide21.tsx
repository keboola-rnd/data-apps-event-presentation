import { motion } from "framer-motion";
import { ContentSlide } from "@/components/presentation/ContentSlide";

interface Solution {
  icon: string;
  challenge: string;
  answer: string;
  nextSlide: number;
}

const SOLUTIONS: Solution[] = [
  { icon: "🌐", challenge: "Hosting", answer: "Fully managed runtime — container, nginx, supervisord, all included.", nextSlide: 22 },
  { icon: "📦", challenge: "Git repository", answer: "Hosted repos. No GitHub account, no infra to run.", nextSlide: 22 },
  { icon: "🔐", challenge: "Authorization", answer: "Plug your OIDC. User identity propagates as a header.", nextSlide: 23 },
  { icon: "🔌", challenge: "Data access", answer: "Scoped workspace. SELECT from your tables, no creds, no DSN.", nextSlide: 24 },
  { icon: "✏️", challenge: "Editing", answer: "Embedded Kai. Users iterate by talking, app redeploys in seconds.", nextSlide: 25 },
  { icon: "📝", challenge: "Audit & compliance", answer: "Every read/write logged. SOC 2-ready, streamable to your SIEM.", nextSlide: 26 },
  { icon: "💤", challenge: "Lifecycle & cost", answer: "Idle apps sleep at $0. Wake on demand in ~2s. Pay per second.", nextSlide: 27 },
  { icon: "📊", challenge: "Observability", answer: "OTLP endpoint ready. One line in your app → events stream to storage.", nextSlide: 29 },
];

export default function Slide21() {
  return (
    <ContentSlide
      title="How Keboola Handles It"
      subtitle="Same 8 challenges. Solved by the platform — not by you."
      animationKey="slide-21"
    >
      <div className="grid grid-cols-4 gap-3">
        {SOLUTIONS.map((s, i) => (
          <motion.div
            key={s.challenge}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + i * 0.07, duration: 0.3 }}
            className="flex flex-col rounded-xl border-2 border-emerald-300 bg-emerald-50 p-4 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">{s.icon}</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                {s.challenge}
              </span>
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/85">{s.answer}</p>
            <div className="mt-2 border-t border-emerald-200 pt-1.5 text-[10px] font-mono text-emerald-700/70">
              → slide {s.nextSlide}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.3 }}
        className="mt-5 rounded-xl bg-primary px-5 py-3 text-center text-base font-medium text-primary-foreground"
      >
        You bring the prompt. The platform brings everything else.
      </motion.p>
    </ContentSlide>
  );
}
