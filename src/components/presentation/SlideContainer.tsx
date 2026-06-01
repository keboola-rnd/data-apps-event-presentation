import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { resolvePublicPath } from "@/lib/assets";

interface SlideContainerProps {
  children: React.ReactNode;
  variant?: "blue" | "light";
  className?: string;
  animationKey: string;
}

const variants = {
  enter: { opacity: 0, scale: 0.98 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

const TRANSITION = {
  duration: 0.3,
  ease: "easeInOut" as const,
};

export function SlideContainer({ children, variant = "light", className, animationKey }: SlideContainerProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={animationKey}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={TRANSITION}
        className={cn(
          "relative flex h-screen w-screen items-center justify-center overflow-hidden",
          variant === "blue"
            ? "bg-primary text-primary-foreground"
            : "bg-background text-foreground",
          className
        )}
      >
        <div className="flex h-full w-full max-w-[1600px] flex-col px-16 py-12">
          {children}
        </div>

        {/* Keboola logo watermark */}
        <img
          src={resolvePublicPath("/images/keboola-logo.svg")}
          alt="Keboola"
          className={cn(
            "pointer-events-none absolute bottom-4 right-6 h-10",
            variant === "blue" ? "brightness-0 invert opacity-40" : "opacity-25"
          )}
        />
      </motion.div>
    </AnimatePresence>
  );
}
