import { SlideContainer } from "./SlideContainer";
import { cn } from "@/lib/utils";

import { resolvePublicPath } from "@/lib/assets";

interface ImageSlideProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  animationKey: string;
  imagePosition?: "right" | "left" | "center";
  variant?: "blue" | "light";
  className?: string;
}

export function ImageSlide({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children,
  animationKey,
  imagePosition = "right",
  variant = "light",
  className,
}: ImageSlideProps) {
  const isBlue = variant === "blue";

  if (imagePosition === "center") {
    return (
      <SlideContainer variant={variant} animationKey={animationKey}>
        <div className="mb-6">
          <h2 className={cn("text-4xl font-bold md:text-5xl", isBlue ? "text-white" : "text-foreground")}>
            {title}
          </h2>
          {subtitle && (
            <p className={cn("mt-3 text-xl md:text-2xl", isBlue ? "text-white/80" : "text-muted-foreground")}>
              {subtitle}
            </p>
          )}
        </div>
        <div className="flex flex-1 flex-col items-center gap-6">
          <img
            src={resolvePublicPath(imageSrc)}
            alt={imageAlt}
            className="max-h-[50vh] w-auto rounded-xl object-contain"
          />
          <div className={cn("text-xl", className)}>{children}</div>
        </div>
      </SlideContainer>
    );
  }

  const contentOrder = imagePosition === "left" ? "order-2" : "order-1";
  const imageOrder = imagePosition === "left" ? "order-1" : "order-2";

  return (
    <SlideContainer variant={variant} animationKey={animationKey}>
      <div className="mb-6">
        <h2 className={cn("text-4xl font-bold md:text-5xl", isBlue ? "text-white" : "text-foreground")}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn("mt-3 text-xl md:text-2xl", isBlue ? "text-white/80" : "text-muted-foreground")}>
            {subtitle}
          </p>
        )}
        {!isBlue && <div className="mt-4 h-1 w-24 rounded-full bg-primary" />}
      </div>
      <div className="flex flex-1 items-center gap-12">
        <div className={cn("flex-1", contentOrder, className)}>
          {children}
        </div>
        <div className={cn("flex flex-1 items-center justify-center", imageOrder)}>
          <img
            src={resolvePublicPath(imageSrc)}
            alt={imageAlt}
            className="max-h-[55vh] w-auto rounded-xl object-contain"
          />
        </div>
      </div>
    </SlideContainer>
  );
}
