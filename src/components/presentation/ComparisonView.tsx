import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ComparisonSide {
  title: string;
  items: string[];
  variant: "negative" | "positive";
}

interface ComparisonViewProps {
  left: ComparisonSide;
  right: ComparisonSide;
  className?: string;
}

export function ComparisonView({ left, right, className }: ComparisonViewProps) {
  const sideStyle = (variant: "negative" | "positive") =>
    variant === "negative"
      ? "border-red-300 bg-red-50"
      : "border-green-300 bg-green-50";

  const iconColor = (variant: "negative" | "positive") =>
    variant === "negative" ? "text-red-500" : "text-green-500";

  return (
    <div className={cn("grid grid-cols-2 gap-8", className)}>
      {[left, right].map((side, sideIdx) => (
        <motion.div
          key={side.title}
          initial={{ opacity: 0, x: sideIdx === 0 ? -30 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + sideIdx * 0.15, duration: 0.4 }}
          className={cn("rounded-2xl border-2 p-8", sideStyle(side.variant))}
        >
          <h3 className="mb-5 text-2xl font-bold text-foreground">{side.title}</h3>
          <ul className="space-y-3">
            {side.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-lg">
                <span className={cn("mt-0.5 text-xl font-bold", iconColor(side.variant))}>
                  {side.variant === "negative" ? "\u2717" : "\u2713"}
                </span>
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
