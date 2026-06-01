import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InfoPanelProps {
  title: string;
  children: ReactNode;
  highlights?: string[];
  className?: string;
}

export function InfoPanel({ title, children, highlights, className }: InfoPanelProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
      <div className="text-xl text-muted-foreground space-y-3 leading-relaxed">{children}</div>
      {highlights && highlights.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {highlights.map((term) => (
            <span key={term} className="bg-primary/10 text-primary rounded-lg px-3 py-1.5 text-base font-medium">{term}</span>
          ))}
        </div>
      )}
    </div>
  );
}
