import { Language, pageContent } from "@/lib/content";

const ABOUT_IMAGE_SRC = "/about.avif";
const ABOUT_IMAGE_ALT =
  "A woman reading a book — symbolizing language learning";

export default function About({ language }: { language: Language }) {
  const content = pageContent[language].about;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-warm-white py-24 md:py-32 lg:py-40"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Image — desktop, start column */}
          <div className="relative hidden md:block">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-warm-lg lg:aspect-[5/6]">
              <img
                src={ABOUT_IMAGE_SRC}
                alt={ABOUT_IMAGE_ALT}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-display text-heading mb-6 text-balance text-text-dark md:mb-8">
              {content.heading}
            </h2>

            <p className="text-lead mb-6 text-text-mid md:mb-8 rtl:leading-loose">
              {content.paragraph1}
            </p>

            {/* Image — mobile, between the paragraphs */}
            <div className="relative mb-8 md:hidden">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -end-3 h-full w-full rounded-2xl border border-primary/35"
              />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-warm">
                <img
                  src={ABOUT_IMAGE_SRC}
                  alt={ABOUT_IMAGE_ALT}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <p className="text-base leading-relaxed text-text-mid md:text-lg rtl:leading-loose">
              {content.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
