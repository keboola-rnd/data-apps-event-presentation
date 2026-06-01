export const SLIDE = {
  aspectRatio: 16 / 9,
  maxWidthPx: 1280,
  maxHeightPx: 720,
} as const;

export const FONT_SCALE_LEVELS = [80, 90, 100, 110, 120, 130, 140, 150, 160] as const;
export type FontScaleLevel = (typeof FONT_SCALE_LEVELS)[number];
