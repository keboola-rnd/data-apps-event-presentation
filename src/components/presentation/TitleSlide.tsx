import { SlideContainer } from "./SlideContainer";

interface TitleSlideProps {
  title: string;
  subtitle?: string;
  animationKey: string;
}

export function TitleSlide({ title, subtitle, animationKey }: TitleSlideProps) {
  return (
    <SlideContainer variant="blue" animationKey={animationKey}>
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-2xl font-light text-white/80 md:text-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </SlideContainer>
  );
}
