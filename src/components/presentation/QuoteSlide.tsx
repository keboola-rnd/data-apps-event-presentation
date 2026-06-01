import { SlideContainer } from "./SlideContainer";

interface QuoteSlideProps {
  quote: string;
  author?: string;
  role?: string;
  animationKey: string;
}

export function QuoteSlide({ quote, author, role, animationKey }: QuoteSlideProps) {
  return (
    <SlideContainer variant="blue" animationKey={animationKey}>
      <div className="flex flex-1 flex-col items-center justify-center text-center px-8">
        <p className="text-3xl font-light leading-relaxed text-white italic md:text-4xl max-w-4xl">
          "{quote}"
        </p>
        {author && (
          <div className="mt-8">
            <p className="text-xl font-medium text-white">{author}</p>
            {role && <p className="text-lg text-white/70">{role}</p>}
          </div>
        )}
      </div>
    </SlideContainer>
  );
}
