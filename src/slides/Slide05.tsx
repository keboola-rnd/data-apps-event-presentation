import { SlideContainer } from "@/components/presentation/SlideContainer";
import { motion } from "framer-motion";

const EXAMPLES = [
  "Send 10 selected contacts to a review committee",
  "Email those contacts directly from the app",
  "Hand the selection to an LLM and act on the result",
];

export default function Slide05() {
  return (
    <SlideContainer variant="blue" animationKey="slide-05">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="text-xl font-light uppercase tracking-widest text-white/60">
          The killer feature
        </p>
        <h2 className="mt-4 text-6xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Writeback
        </h2>
        <p className="mt-6 max-w-3xl text-2xl font-light leading-relaxed text-white/80 md:text-3xl">
          Not visualization — <span className="font-semibold">action</span>.
        </p>
        <ul className="mt-10 flex flex-col gap-3 text-left">
          {EXAMPLES.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.3 }}
              className="flex items-start gap-3 text-lg text-white/90 md:text-xl"
            >
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-white/80" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </SlideContainer>
  );
}
