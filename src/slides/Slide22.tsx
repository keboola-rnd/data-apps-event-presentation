import { motion } from "framer-motion";
import { SlideContainer } from "@/components/presentation/SlideContainer";

const SPEAKERS = [
  {
    name: "Tomáš Čuban",
    role: "Live Build",
    company: "Keboola",
    initials: "TČ",
    accent: "from-cyan-300 to-blue-500",
    pointA: "Takes the building blocks from this talk",
    pointB: "Walks through how the whole app is built — end to end",
    pointC: "From prompt → repo → running app",
  },
  {
    name: "Pavel Štěpánek",
    role: "Real-World Experience",
    company: "Groupon",
    initials: "PŠ",
    accent: "from-emerald-300 to-teal-500",
    pointA: "How Groupon uses Data Apps in production",
    pointB: "What replaced what · what stuck · what didn't",
    pointC: "Honest lessons from the trenches",
  },
];

export default function Slide22() {
  return (
    <SlideContainer variant="blue" animationKey="slide-22">
      <div className="flex flex-1 flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold uppercase tracking-[0.4em] text-white/60"
        >
          Up next
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mt-3 max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl"
        >
          You've seen the theory.<br />
          Now see it work — and hear it from someone who lives it.
        </motion.h2>

        <div className="mt-10 grid w-full max-w-5xl grid-cols-2 gap-6">
          {SPEAKERS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
              className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${s.accent} text-xl font-bold text-white shadow-lg`}>
                  {s.initials}
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">{s.role}</div>
                  <div className="text-2xl font-bold text-white">{s.name}</div>
                  <div className="text-sm text-white/70">{s.company}</div>
                </div>
              </div>
              <ul className="mt-5 space-y-2 text-base text-white/85">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{s.pointA}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{s.pointB}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{s.pointC}</span>
                </li>
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-10 text-lg font-light text-white/70"
        >
          Thank you. Stay tuned →
        </motion.p>
      </div>
    </SlideContainer>
  );
}
