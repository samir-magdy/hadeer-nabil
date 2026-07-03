import Image from "next/image";

interface HeroProps {
  onOpenQuiz: () => void;
}

export default function Hero({ onOpenQuiz }: HeroProps) {
  return (
    <section className="sm:min-h-screen bg-cream flex items-center pt-20 sm:pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <h1 className="font-display text-2xl sm:text-5xl lg:text-6xl text-text-dark leading-tight mb-6">
              Learn English{" "}
              <em className="italic text-primary not-italic">
                with confidence
              </em>
            </h1>
            <p className="text-base md:text-lg text-text-mid leading-relaxed mb-6 sm:mb-10 max-w-lg">
              Private English lessons, online and in-person. Personalized and
              designed to help you communicate with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center justify-center gap-2 border border-border text-text-dark font-medium px-7 py-4 rounded-full hover:bg-primary-light hover:border-primary-light active:scale-95 transition-all duration-200 min-h-[52px] text-base"
              >
                Find out your English level →
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
              <div className="relative w-70 h-70 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-warm-white shadow-2xl shadow-primary/20">
                <Image
                  src="/hadeer.jpeg"
                  alt="Hadeer Nabil — Private English Tutor"
                  width={500}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
