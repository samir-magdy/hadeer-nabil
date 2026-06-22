import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";

interface HeroProps {
  onOpenQuiz: () => void;
}

export default function Hero({ onOpenQuiz }: HeroProps) {
  return (
    <section className="min-h-screen bg-cream flex items-center pt-6 sm:pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <p className="text-xs sm:text-sm font-medium tracking-widest text-accent uppercase mb-4">
              Private English Tutor · Cairo, Egypt
            </p>
            <h1 className="font-display text-2xl sm:text-5xl lg:text-6xl text-text-dark leading-tight mb-6">
              Learn English{" "}
              <em className="italic text-primary not-italic">
                with confidence
              </em>
            </h1>
            <p className="text-base md:text-lg text-text-mid leading-relaxed mb-6 sm:mb-10 max-w-lg">
              Private English lessons — online and in-person — tailored to your
              goals. Whether you&apos;re preparing for IELTS, navigating the
              workplace, or simply want to speak more freely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-warm-white font-medium px-7 py-4 rounded-full hover:bg-primary/90 active:scale-95 transition-all duration-200 min-h-[52px] text-base"
              >
                <WhatsAppIcon />
                Message on WhatsApp
              </a> */}
              <a
                href="#quiz"
                className="inline-flex items-center justify-center gap-2 border border-border text-text-dark font-medium px-7 py-4 rounded-full hover:bg-primary-light hover:border-primary-light active:scale-95 transition-all duration-200 min-h-[52px] text-base"
              >
                Find out your English level →
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-light scale-110" />
              {/* Warm glow */}
              <div className="absolute inset-0 rounded-full bg-primary-light/30 blur-2xl scale-125" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-warm-white shadow-2xl shadow-primary/20">
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

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
