import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BulletListProps {
  items: string[];
  className?: string;
  ordered?: boolean;
}

export function BulletList({ items, className, ordered = false }: BulletListProps) {
  const Tag = ordered ? "ol" : "ul";

  return (
    <Tag className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
          className="flex items-start gap-4 text-xl text-foreground md:text-2xl"
        >
          {ordered ? (
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
              {index + 1}
            </span>
          ) : (
            <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
          )}
          <span className="leading-relaxed">{item}</span>
        </motion.li>
      ))}
    </Tag>
  );
}
