import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePresentationStore } from "@/stores/presentation.store";

export function SlideControls() {
  const { currentSlide, totalSlides, nextSlide, prevSlide } = usePresentationStore();
  const canGoBack = currentSlide > 1;
  const canGoNext = currentSlide < totalSlides;

  return (
    <>
      {canGoBack && (
        <button
          onClick={(e) => { prevSlide(); e.currentTarget.blur(); }}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10 text-foreground/50 backdrop-blur-sm transition-all hover:bg-foreground/20 hover:text-foreground/80"
          aria-label="Previous slide"
          data-slot="slide-controls"
        >
          <ChevronLeft className="size-6" />
        </button>
      )}
      {canGoNext && (
        <button
          onClick={(e) => { nextSlide(); e.currentTarget.blur(); }}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10 text-foreground/50 backdrop-blur-sm transition-all hover:bg-foreground/20 hover:text-foreground/80"
          aria-label="Next slide"
          data-slot="slide-controls"
        >
          <ChevronRight className="size-6" />
        </button>
      )}
    </>
  );
}
