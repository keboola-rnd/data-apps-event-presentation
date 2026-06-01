import { useEffect } from "react";
import { usePresentationStore } from "@/stores/presentation.store";

export function useKeyboardNavigation(): void {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const tag = (document.activeElement?.tagName ?? "").toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;

      const presentation = usePresentationStore.getState();

      switch (event.key) {
        case "ArrowLeft":
        case "PageUp": {
          event.preventDefault();
          presentation.prevSlide();
          break;
        }
        case "ArrowRight":
        case "PageDown":
        case " ": {
          event.preventDefault();
          presentation.nextSlide();
          break;
        }
        case "Home": {
          event.preventDefault();
          presentation.goToSlide(1);
          break;
        }
        case "End": {
          event.preventDefault();
          presentation.goToSlide(presentation.totalSlides);
          break;
        }
        case "+":
        case "=": {
          presentation.increaseFontScale();
          break;
        }
        case "-": {
          presentation.decreaseFontScale();
          break;
        }
        default:
          break;
      }
    }

    document.addEventListener("keydown", handleKeyDown, true);
    return () => document.removeEventListener("keydown", handleKeyDown, true);
  }, []);
}
