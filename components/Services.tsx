import { Language, pageContent } from "@/lib/content";
import Reveal from "./Reveal";

const serviceIcons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>,
];

/* Alternating accent identity so the four offerings read as distinct
   rather than four identical white boxes. */
const cardAccents = [
  {
    chip: "bg-primary-light text-primary",
    rule: "bg-primary",
    hoverBorder: "hover:border-primary/45",
  },
  {
    chip: "bg-accent-light text-accent-deep",
    rule: "bg-accent",
    hoverBorder: "hover:border-accent/45",
  },
];

export default function Services({ language }: { language: Language }) {
  const content = pageContent[language].services;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-cream py-24 md:py-32 lg:py-40"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mb-14 text-center md:mb-20">
          <h2 className="font-display text-heading text-balance text-text-dark">
            {content.heading}
          </h2>
          {/* Short rule anchoring the lone heading */}
          <span
            aria-hidden="true"
            className="mx-auto mt-6 block h-px w-16 bg-primary/50"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {content.items.map((service, index) => {
            const accent = cardAccents[index % 2];

            return (
              <Reveal
                key={service.title}
                delay={((index % 2) + 1) as 1 | 2}
                className="h-full"
              >
                <article
                  className={`group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-warm-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-warm md:p-9 ${accent.hoverBorder}`}
                >
                  {/* Accent rule sweeps across the top edge on hover */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right ${accent.rule}`}
                  />

                  <div
                    className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${accent.chip}`}
                  >
                    {serviceIcons[index]}
                  </div>

                  <div>
                    <h3 className="font-display mb-2.5 text-xl text-text-dark md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="text-[0.9375rem] leading-relaxed text-text-mid md:text-base rtl:leading-loose">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
