import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InteractiveAreaProps {
  children: ReactNode;
  className?: string;
  allowFullscreen?: boolean;
}

export function InteractiveArea({ children, className }: InteractiveAreaProps) {
  return <div className={cn("", className)}>{children}</div>;
}
