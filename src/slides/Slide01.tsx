import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlideContainer } from "@/components/presentation/SlideContainer";
import { KeyHint } from "@/components/presentation/KeyHint";

const APP_TYPES = [
  "Dashboards",
  "APIs",
  "ML model hosting",
  "MCP servers",
  "etc.",
];

export default function Slide01() {
  const [struck, setStruck] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const tag = (document.activeElement?.tagName ?? "").toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      if (event.key === "b" || event.key === "B") {
        event.preventDefault();
        setStruck((prev) => !prev);
      }
    }
    document.addEventListener("keydown", handleKeyDown, true);
    return () => document.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  return (
    <SlideContainer variant="blue" animationKey="slide-01">
      <KeyHint keyLabel="B" variant="blue" />
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          <span className="relative inline-block">
            <span>Data</span>
            <motion.span
              aria-hidden
              initial={false}
              animate={{ scaleX: struck ? 1 : 0 }}
              transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
              style={{ transformOrigin: "left center" }}
              className="pointer-events-none absolute left-0 right-0 top-1/2 h-[6px] -translate-y-1/2 rounded bg-white"
            />
          </span>
          <span> Apps @ Keboola</span>
        </h1>

        <AnimatePresence>
          {struck && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xl text-white/90 md:text-2xl"
            >
              {APP_TYPES.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.12, duration: 0.35 }}
                  className="flex items-center gap-3"
                >
                  {i > 0 && (
                    <span className="text-white/30" aria-hidden>
                      •
                    </span>
                  )}
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <p className="mt-8 text-2xl font-light text-white/80 md:text-3xl">
          From Streamlit to LLM-generated apps
        </p>
      </div>
    </SlideContainer>
  );
}
