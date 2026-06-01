import { SlideContainer } from "@/components/presentation/SlideContainer";

export default function Slide07() {
  return (
    <SlideContainer variant="blue" animationKey="slide-07">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="text-2xl font-light uppercase tracking-widest text-white/60">
          The Inflection Point
        </p>
        <h2 className="mt-6 text-7xl font-bold leading-tight tracking-tight text-white md:text-8xl">
          Christmas 2025
        </h2>
        <p className="mt-8 max-w-3xl text-2xl font-light leading-relaxed text-white/80 md:text-3xl">
          Reasoning models broke the ceiling. One-shot generation started working out of the box.
        </p>
      </div>
    </SlideContainer>
  );
}
