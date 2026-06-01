export interface SlideConfig {
  number: number;
  title: string;
  section: string;
}

export const TOTAL_SLIDES = 15;

export const SECTIONS = {
  INTRO: "Intro",
  STORY: "The Story",
  TODAY: "Where We Are",
  DEMOS: "Live Demos",
  CLOSING: "Closing",
} as const;

export const SLIDES: SlideConfig[] = [
  { number: 1, title: "Data Apps @ Keboola", section: SECTIONS.INTRO },
  { number: 2, title: "Spoiler: Where This Ends", section: SECTIONS.INTRO },
  { number: 3, title: "Why We Even Started", section: SECTIONS.INTRO },
  { number: 4, title: "The Streamlit Era", section: SECTIONS.STORY },
  { number: 5, title: "Writeback — The Killer Feature", section: SECTIONS.STORY },
  { number: 6, title: "LLMs: From Clunky to One-Shot", section: SECTIONS.STORY },
  { number: 7, title: "Christmas 2025", section: SECTIONS.STORY },
  { number: 8, title: "Beyond Streamlit: HTTP Wins", section: SECTIONS.TODAY },
  { number: 9, title: "From Repo to Hosted", section: SECTIONS.TODAY },
  { number: 10, title: "Authorization for Data Apps", section: SECTIONS.TODAY },
  { number: 11, title: "What We'll Build Live", section: SECTIONS.DEMOS },
  { number: 12, title: "Measure What's Used", section: SECTIONS.DEMOS },
  { number: 13, title: "Use Cases", section: SECTIONS.DEMOS },
  { number: 14, title: "Key Messages", section: SECTIONS.CLOSING },
  { number: 15, title: "Thank You", section: SECTIONS.CLOSING },
];

export function getSlideSection(slideNumber: number): string {
  const slide = SLIDES.find((s) => s.number === slideNumber);
  return slide?.section ?? "";
}
