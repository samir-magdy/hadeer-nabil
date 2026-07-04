import Image from "next/image";
import { Language, pageContent } from "@/lib/content";

interface HeroProps {
  onOpenQuiz: () => void;
  language: Language;
}

export default function Hero({ onOpenQuiz, language }: HeroProps) {
  const content = pageContent[language].hero;
  return (
    <section className="min-h-screen bg-cream flex items-start [@supports_(-webkit-hyphens:none)]:items-center [@supports_(-webkit-hyphens:none)]:pt-6 sm:items-center pt-20 rtl:pt-24 sm:pt-16 md:pt-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rtl:gap-12 [@supports_(-webkit-hyphens:none)]:gap-10 [@supports_(-webkit-hyphens:none)]:rtl:gap-16 md:gap-20 lg:gap-28 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <h1
              className="font-display [@supports_(-webkit-hyphens:none)]:text-[2.8rem] text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-text-dark leading-tight mb-4 md:mb-8 lg:mb-10"
              data-arabic-ui={language === "ar" ? "true" : undefined}
            >
              {content.title}{" "}
              <em className="italic text-primary not-italic">
                {content.emphasis}
              </em>
            </h1>
            <p
              className="text-base md:text-lg lg:text-xl text-text-mid leading-relaxed mb-6 sm:mb-10 md:mb-10 lg:mb-12 max-w-lg md:max-w-xl lg:max-w-2xl"
              data-arabic-ui={language === "ar" ? "true" : undefined}
            >
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenQuiz}
                dir={language === "ar" ? "rtl" : "ltr"}
                className="w-[95%] inline-flex cursor-pointer items-center justify-center gap-2 border border-black/30 text-text-dark font-medium px-7 py-4 md:px-8 md:py-5 lg:px-9 lg:py-5 rounded-full hover:bg-primary/60 hover:border-black/10 active:scale-95 transition-all duration-200 min-h-[52px] md:min-h-[56px] text-base md:text-lg"
              >
                <span>{content.cta}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className={`h-5 w-5 shrink-0 transition-transform duration-200 ${language === "ar" ? "rotate-180" : ""}`}
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

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-light scale-110" />
              {/* Warm glow */}
              <div className="absolute inset-0 rounded-full bg-primary-light/30 blur-2xl scale-125" />
              <div className="relative [@supports_(-webkit-hyphens:none)]:w-70 [@supports_(-webkit-hyphens:none)]:h-70 w-50 h-50 rtl:w-55 rtl:h-55 rtl:sm:w-90 rtl:sm:h-90 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-warm-white shadow-2xl shadow-primary/20">
                <img
                  src="/hadeer.jpeg"
                  alt="Hadeer Nabil — Private English Tutor"
                  width={500}
                  height={500}
                  className="object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
