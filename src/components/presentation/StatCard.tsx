import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StatCardItem {
  id: string;
  value: string;
  label: string;
  description?: string;
  source?: string;
  color?: string;
}

interface StatCardProps {
  items: StatCardItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const GRID_COLS = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
} as const;

export function StatCard({ items, columns = 3, className }: StatCardProps) {
  return (
    <div className={cn("grid gap-6", GRID_COLS[columns], className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 + index * 0.08, duration: 0.3 }}
          className={cn(
            "rounded-2xl border bg-card p-6 text-center shadow-sm",
            item.color
          )}
        >
          <p className="text-5xl font-bold text-primary md:text-6xl">{item.value}</p>
          <p className="mt-3 text-lg text-foreground">{item.label}</p>
          {item.description && (
            <p className="mt-2 text-base text-muted-foreground">{item.description}</p>
          )}
          {item.source && (
            <p className="mt-2 text-sm text-muted-foreground/70">{item.source}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
