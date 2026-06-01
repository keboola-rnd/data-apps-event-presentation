import { motion } from "framer-motion";

interface KeyHintProps {
  keyLabel: string;
  variant?: "blue" | "light";
}

export function KeyHint({ keyLabel, variant = "light" }: KeyHintProps) {
  const styles =
    variant === "blue"
      ? "border-white/40 bg-white/10 text-white"
      : "border-foreground/30 bg-background/80 text-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.3 }}
      className="pointer-events-none fixed bottom-4 left-6 z-30 flex items-center gap-2 text-sm"
    >
      <span
        className={`inline-flex h-9 min-w-9 items-center justify-center rounded-lg border px-2 font-mono text-base font-semibold shadow-sm ${styles}`}
      >
        {keyLabel}
      </span>
    </motion.div>
  );
}
