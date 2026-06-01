export interface SlideConfig {
  number: number;
  title: string;
  section: string;
}

export const TOTAL_SLIDES = 22;

export const SECTIONS = {
  INTRO: "Intro",
  STORY: "The Story",
  TODAY: "Where We Are",
  USECASES: "What People Build",
  CHALLENGES: "Beyond the Code",
  CLOSING: "Closing",
} as const;

export const SLIDES: SlideConfig[] = [
  { number: 1, title: "Data Apps @ Keboola", section: SECTIONS.INTRO },
  { number: 2, title: "Spoiler: Where This Ends", section: SECTIONS.INTRO },
  { number: 3, title: "Why We Even Started", section: SECTIONS.INTRO },
  { number: 4, title: "It Really Is That Simple", section: SECTIONS.STORY },
  { number: 5, title: "What People Started Building", section: SECTIONS.STORY },
  { number: 6, title: "But You Still Had to Write It", section: SECTIONS.STORY },
  { number: 7, title: "Christmas 2025", section: SECTIONS.STORY },
  { number: 8, title: "Build Me Windows 11", section: SECTIONS.STORY },
  { number: 9, title: "So We Stopped Picking the Framework", section: SECTIONS.TODAY },
  { number: 10, title: "What Kai Actually Builds", section: SECTIONS.TODAY },
  { number: 11, title: "BI Dashboards & Self-Service Reporting", section: SECTIONS.USECASES },
  { number: 12, title: "Data Entry, Forms & CRUD", section: SECTIONS.USECASES },
  { number: 13, title: "AI / GenAI Applications", section: SECTIONS.USECASES },
  { number: 14, title: "Compliance, Risk & Audit", section: SECTIONS.USECASES },
  { number: 15, title: "Data Quality & Validation", section: SECTIONS.USECASES },
  { number: 16, title: "Forecasting, Planning & Pricing", section: SECTIONS.USECASES },
  { number: 17, title: "Self-Service Operations", section: SECTIONS.USECASES },
  { number: 18, title: "External Portals", section: SECTIONS.USECASES },
  { number: 19, title: "Platform Management Meta-Apps", section: SECTIONS.USECASES },
  { number: 20, title: "Beyond the Code — The Real Challenges", section: SECTIONS.CHALLENGES },
  { number: 21, title: "How Keboola Handles It", section: SECTIONS.CHALLENGES },
  { number: 22, title: "Up Next: Live & Real-World", section: SECTIONS.CLOSING },
];

export function getSlideSection(slideNumber: number): string {
  const slide = SLIDES.find((s) => s.number === slideNumber);
  return slide?.section ?? "";
}
