import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePresentationStore } from "@/stores/presentation.store";
import { SlideControls } from "@/components/layout/SlideControls";
import { SlideProgress } from "@/components/layout/SlideProgress";
import { TOTAL_SLIDES } from "@/config/slides.config";

const slideComponents = Array.from({ length: TOTAL_SLIDES }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return lazy(() => import(`@/slides/Slide${num}.tsx`));
});

function SlideLoading() {
  return <div className="h-screen w-screen bg-background" />;
}

const slideTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2, ease: "easeInOut" as const },
};

export default function PresentationView() {
  const { currentSlide } = usePresentationStore();
  const SlideComponent = slideComponents[currentSlide - 1];

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={currentSlide} {...slideTransition}>
          <Suspense fallback={<SlideLoading />}>
            <SlideComponent />
          </Suspense>
        </motion.div>
      </AnimatePresence>
      <SlideControls />
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30">
        <SlideProgress />
      </div>
    </>
  );
}
