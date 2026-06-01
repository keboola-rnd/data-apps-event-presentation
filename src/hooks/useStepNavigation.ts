import { useCallback } from "react";
import { usePresentationStore } from "@/stores/presentation.store";

export function useSlideNavigation() {
  const store = usePresentationStore();

  const goToSlide = useCallback((slide: number) => { store.goToSlide(slide); }, [store]);
  const nextSlide = useCallback(() => { store.nextSlide(); }, [store]);
  const prevSlide = useCallback(() => { store.prevSlide(); }, [store]);

  return {
    currentSlide: store.currentSlide,
    totalSlides: store.totalSlides,
    goToSlide,
    nextSlide,
    prevSlide,
    canGoNext: store.currentSlide < store.totalSlides,
    canGoPrev: store.currentSlide > 1,
  };
}
