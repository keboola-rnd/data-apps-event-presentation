import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface DiagramCardItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: string;
}

interface DiagramCardProps {
  items: DiagramCardItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const GRID_COLS = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
} as const;

export function DiagramCard({ items, columns = 2, className }: DiagramCardProps) {
  return (
    <div className={cn("grid gap-6", GRID_COLS[columns], className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
          className={cn("rounded-2xl border bg-card p-6 shadow-sm", item.color)}
        >
          {item.icon && <div className="mb-3 text-primary">{item.icon}</div>}
          <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
          <p className="mt-2 text-base text-muted-foreground leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
