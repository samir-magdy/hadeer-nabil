import Image from "next/image";
import { Language, pageContent } from "@/lib/content";

const ABOUT_IMAGE_SRC =
  "https://images.unsplash.com/photo-1532294220147-279399e4e00f?w=1200&q=80&auto=format&fit=crop";
const ABOUT_IMAGE_ALT =
  "A woman reading a book — symbolizing language learning";

const trustCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
];

export default function About({ language }: { language: Language }) {
  const content = pageContent[language].about;
  return (
    <section id="about" className="bg-warm-white py-20 md:py-28 lg:py-32 min-h-screen md:flex md:items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Image — desktop only, left column */}
          <div className="hidden md:block">
            <div className="relative aspect-[5/5] w-full overflow-hidden rounded-2xl shadow-xl shadow-text-dark/10">
              <Image
                src={ABOUT_IMAGE_SRC}
                alt={ABOUT_IMAGE_ALT}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl text-text-dark italic mb-6 md:mb-8 leading-snug"
              data-arabic-ui={language === "ar" ? "true" : undefined}
            >
              {content.heading}
            </h2>
            <p
              className="text-base md:text-lg lg:text-xl text-text-mid leading-relaxed mb-6 md:mb-8"
              data-arabic-ui={language === "ar" ? "true" : undefined}
            >
              {content.paragraph1}
            </p>

            {/* Image — mobile only, between the two paragraphs */}
            <div className="md:hidden mb-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl shadow-text-dark/10">
                <Image
                  src={ABOUT_IMAGE_SRC}
                  alt={ABOUT_IMAGE_ALT}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <p
              className="text-base md:text-lg text-text-mid leading-relaxed"
              data-arabic-ui={language === "ar" ? "true" : undefined}
            >
              {content.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
