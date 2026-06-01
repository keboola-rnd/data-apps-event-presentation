import { usePresentationStore } from "@/stores/presentation.store";
import { getSlideSection } from "@/config/slides.config";

export function SlideProgress() {
  const { currentSlide, totalSlides } = usePresentationStore();
  const section = getSlideSection(currentSlide);
  const progress = ((currentSlide - 1) / (totalSlides - 1)) * 100;

  return (
    <div className="flex items-center gap-4" data-slot="slide-progress">
      {section && (
        <span className="text-xs text-foreground/40 max-w-[200px] truncate">
          {section}
        </span>
      )}
      <span className="text-xs text-foreground/50 tabular-nums">
        {currentSlide} / {totalSlides}
      </span>
      <div className="w-32 h-1.5 bg-foreground/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
