import { create } from "zustand";
import { TOTAL_SLIDES } from "@/config/slides.config";
import { FONT_SCALE_LEVELS } from "@/config/theme.config";
import type { FontScaleLevel } from "@/config/theme.config";

const STORAGE_KEY = "vse-mg-slide";

function loadSlide(): number {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const n = Number(stored);
      if (n >= 1 && n <= TOTAL_SLIDES) return n;
    }
  } catch { /* ignore */ }
  return 1;
}

function saveSlide(n: number) {
  try { sessionStorage.setItem(STORAGE_KEY, String(n)); } catch { /* ignore */ }
}

interface PresentationState {
  currentSlide: number;
  totalSlides: number;
  fontScale: FontScaleLevel;

  setSlide: (slide: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (n: number) => void;
  increaseFontScale: () => void;
  decreaseFontScale: () => void;
}

export const usePresentationStore = create<PresentationState>((set, get) => ({
  currentSlide: loadSlide(),
  totalSlides: TOTAL_SLIDES,
  fontScale: 120 as FontScaleLevel,

  setSlide: (slide) => {
    const { totalSlides } = get();
    if (slide >= 1 && slide <= totalSlides) {
      saveSlide(slide);
      set({ currentSlide: slide });
    }
  },

  nextSlide: () => {
    const { currentSlide, totalSlides } = get();
    if (currentSlide < totalSlides) {
      saveSlide(currentSlide + 1);
      set({ currentSlide: currentSlide + 1 });
    }
  },

  prevSlide: () => {
    const { currentSlide } = get();
    if (currentSlide > 1) {
      saveSlide(currentSlide - 1);
      set({ currentSlide: currentSlide - 1 });
    }
  },

  goToSlide: (n) => {
    const { totalSlides } = get();
    if (n >= 1 && n <= totalSlides) {
      saveSlide(n);
      set({ currentSlide: n });
    }
  },

  increaseFontScale: () => {
    const { fontScale } = get();
    const idx = FONT_SCALE_LEVELS.indexOf(fontScale);
    if (idx < FONT_SCALE_LEVELS.length - 1) set({ fontScale: FONT_SCALE_LEVELS[idx + 1] });
  },
  decreaseFontScale: () => {
    const { fontScale } = get();
    const idx = FONT_SCALE_LEVELS.indexOf(fontScale);
    if (idx > 0) set({ fontScale: FONT_SCALE_LEVELS[idx - 1] });
  },
}));
