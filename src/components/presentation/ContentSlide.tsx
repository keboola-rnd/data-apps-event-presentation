import { SlideContainer } from "./SlideContainer";
import { cn } from "@/lib/utils";

interface ContentSlideProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  animationKey: string;
  className?: string;
}

export function ContentSlide({ title, subtitle, children, animationKey, className }: ContentSlideProps) {
  return (
    <SlideContainer variant="light" animationKey={animationKey}>
      <div className="shrink-0 mb-8">
        <h2 className="text-4xl font-bold text-foreground md:text-5xl">{title}</h2>
        {subtitle && (
          <p className="mt-3 text-xl text-muted-foreground md:text-2xl">{subtitle}</p>
        )}
        <div className="mt-4 h-1 w-24 rounded-full bg-accent" />
      </div>
      <div className={cn("min-h-0 flex-1 overflow-y-auto", className)}>
        {children}
      </div>
    </SlideContainer>
  );
}
