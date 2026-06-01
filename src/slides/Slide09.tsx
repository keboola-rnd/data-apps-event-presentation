import { motion } from "framer-motion";
import { ContentSlide } from "@/components/presentation/ContentSlide";

const STEPS = [
  {
    badge: "1 · Realization",
    title: "LLMs got too good to box in.",
    body: "If a single prompt builds a whole OS, why are we still telling people 'use only Streamlit'?",
  },
  {
    badge: "2 · The fix",
    title: "Stop picking the framework. Define a template.",
    body: "Anything that speaks HTTP can be a Keboola Data App. We just specify the runtime contract — nginx, supervisord, setup.sh — and let the developer pick the stack.",
  },
  {
    badge: "3 · The unlock",
    title: "Claude gets a Skill.",
    body: "We wrote a Claude Skill — the exact spec for a Keboola Data App. The LLM reads it, follows the contract, picks Python / Flask / Node / Go / Rust, and writes the whole thing.",
  },
];

export default function Slide09() {
  return (
    <ContentSlide
      title="So We Stopped Picking the Framework"
      subtitle="If Claude can build a whole OS, why limit a Data App to one library?"
      animationKey="slide-09"
    >
      <div className="grid grid-cols-5 gap-6">
        {/* Left: 3 statements */}
        <div className="col-span-3 flex flex-col gap-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.badge}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.35 }}
              className="rounded-2xl border bg-card p-4 shadow-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                {s.badge}
              </div>
              <h4 className="mt-1 text-xl font-bold text-foreground">{s.title}</h4>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Right: Keboola Skill card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="col-span-2 flex flex-col"
        >
          <div className="overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-cyan-50 shadow-md">
            <div className="flex items-center gap-2 border-b border-primary/20 px-4 py-2.5">
              <span className="text-base text-primary">✻</span>
              <span className="font-mono text-xs font-semibold text-primary">claude-skill</span>
              <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                keboola
              </span>
            </div>
            <div className="px-4 py-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                Skill: dataapp-deployment
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">
                "How to build a Keboola Data App"
              </div>
              <ul className="mt-3 space-y-1.5 text-[13px] text-foreground/75">
                <li>→ The container contract</li>
                <li>→ <span className="font-mono">keboola-config/</span> structure</li>
                <li>→ nginx · supervisord · setup.sh</li>
                <li>→ Python uv / Node / Go runtimes</li>
                <li>→ Secrets, env vars, OIDC</li>
                <li>→ Deployment & lifecycle</li>
              </ul>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-4 rounded-xl bg-foreground px-4 py-3 text-center text-sm font-medium text-background"
          >
            Streamlit · Flask · FastAPI · Next.js · Go · Rust<br />
            <span className="font-bold text-cyan-200">If it speaks HTTP, it ships.</span>
          </motion.p>
        </motion.div>
      </div>
    </ContentSlide>
  );
}
