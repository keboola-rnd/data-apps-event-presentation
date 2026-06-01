import { motion } from "framer-motion";
import { ContentSlide } from "@/components/presentation/ContentSlide";

interface Challenge {
  icon: string;
  title: string;
  desc: string;
}

const CHALLENGES: Challenge[] = [
  { icon: "🌐", title: "Hosting", desc: "Where does the app actually run? Who pays the cloud bill?" },
  { icon: "📦", title: "Git repository", desc: "Where does the code live? Who has access? How do you ship a fix?" },
  { icon: "🔐", title: "Authorization", desc: "Who can open the app? Who sees which rows? OIDC? SSO?" },
  { icon: "🔌", title: "Data access", desc: "How does the app reach your real tables — securely, without copying data around?" },
  { icon: "✏️", title: "Editing", desc: "When a business user wants a tweak, can they do it without you?" },
  { icon: "📝", title: "Audit & compliance", desc: "Who saw what, when? SOC 2, ISO, GDPR — auditors want answers." },
  { icon: "💤", title: "Lifecycle & cost", desc: "What happens to 50 idle apps? Who pays for sleeping containers?" },
  { icon: "📊", title: "Observability", desc: "Is anyone using it? Which screens? What broke?" },
];

export default function Slide20() {
  return (
    <ContentSlide
      title="Beyond the Code — The Real Challenges"
      subtitle="Generating the app is the easy part. Now what?"
      animationKey="slide-20"
    >
      <p className="mb-4 text-lg text-foreground">
        Great, the LLM wrote your app. <strong>Now</strong> you still need to solve:
      </p>

      <div className="grid grid-cols-4 gap-3">
        {CHALLENGES.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.3 }}
            className="rounded-xl border-2 border-amber-300/60 bg-amber-50 p-4 shadow-sm"
          >
            <div className="flex items-start gap-2.5">
              <span className="text-2xl">{c.icon}</span>
              <div>
                <h4 className="text-lg font-bold text-foreground">{c.title}</h4>
                <p className="mt-0.5 text-sm leading-relaxed text-foreground/70">{c.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
        className="mt-5 rounded-xl bg-primary px-5 py-3 text-center text-base font-medium text-primary-foreground"
      >
        Keboola solves all of these — so you can stay focused on the app, not the plumbing.
      </motion.p>
    </ContentSlide>
  );
}
