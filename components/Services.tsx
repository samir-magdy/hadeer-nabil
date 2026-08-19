import { Language, pageContent } from "@/lib/content";

export default function Services({ language }: { language: Language }) {
  const content = pageContent[language].services;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-cream py-24 md:py-32 lg:py-40"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 text-center md:mb-20">
          <h2 className="font-display text-heading text-balance text-text-dark">
            {content.heading}
          </h2>
          {/* Short rule anchoring the lone heading */}
          <span
            aria-hidden="true"
            className="mx-auto mt-6 block h-px w-16 bg-primary/50"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {content.items.map((service) => (
            <article
              key={service.title}
              className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-warm-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-warm md:p-9"
            >
              <div>
                <h3 className="font-display mb-2.5 sm:mb-4 text-xl text-text-dark md:text-2xl">
                  {service.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-text-mid md:text-base rtl:leading-loose">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
