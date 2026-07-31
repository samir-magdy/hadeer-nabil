import { Language, pageContent } from "@/lib/content";

interface HeroProps {
  onOpenQuiz: () => void;
  language: Language;
}

export default function Hero({ onOpenQuiz, language }: HeroProps) {
  const content = pageContent[language].hero;

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden bg-cream pt-20 pb-16 md:pt-20 md:pb-0">
      {/* Signature element: a teacher's pen-stroke underline, drawn in
          after the headline lands. Keyframe is scoped here since it's
          used nowhere else. */}
      <style>{`
        .hero-underline path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: hero-underline-draw 0.7s cubic-bezier(0.65, 0, 0.35, 1) 0.9s forwards;
        }
        @keyframes hero-underline-draw {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-underline path {
            animation: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Text */}
          <div className="order-2 md:order-1">
            <h1 className="animate-fade-in-up leading-tight font-display text-[clamp(2rem,10vw,5rem)] sm:text-display mb-6 text-balance text-text-dark md:mb-8">
              {content.title}{" "}
              <em className="relative inline-block whitespace-nowrap text-primary">
                {content.emphasis}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 14"
                  preserveAspectRatio="none"
                  className="hero-underline absolute inset-x-0 -bottom-2 h-3 w-full md:-bottom-3 rtl:-scale-x-100"
                >
                  <path
                    d="M4 10 C 60 3, 150 2.5, 216 7.5"
                    pathLength="1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />
                </svg>
              </em>
            </h1>

            <p className="animate-fade-in-up anim-delay-1 text-[clamp(1.1rem,2.5vw,1.5rem)] mb-6 max-w-85 sm:max-w-xl text-text-mid md:mb-10 rtl:leading-loose">
              {content.description}
            </p>

            <div className="animate-fade-in-up anim-delay-2">
              <button
                onClick={onOpenQuiz}
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-medium text-warm-white shadow-warm transition-all duration-200 hover:bg-primary-deep hover:shadow-warm-lg active:scale-[0.98] sm:w-auto md:px-9"
              >
                <span>{content.cta}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                >
                  <path
                    d="M5 12h14m0 0-6-6m6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="animate-fade-in-up anim-delay-2 relative aspect-square w-60 [@supports(-webkit-touch-callout:none)]:w-72 [@supports(-webkit-touch-callout:none)]:h-72 sm:w-72 md:w-80 lg:w-[26rem]">
              {/* Dual-tone ring: full terracotta hairline + sage arc */}
              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                fill="none"
                className="pointer-events-none absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] sm:-inset-4 sm:h-[calc(100%+2rem)] sm:w-[calc(100%+2rem)] rtl:-scale-x-100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="49"
                  stroke="var(--primary-light)"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Photo */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-warm-white shadow-warm-lg">
                <img
                  src="/hadeer.jpeg"
                  alt="Hadeer Nabil — Private English Tutor"
                  width={500}
                  height={500}
                  loading="eager"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
