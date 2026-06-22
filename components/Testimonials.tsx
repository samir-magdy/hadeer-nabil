const testimonials = [
  {
    quote:
      "Hadeer completely changed how I approach English. After three months of sessions, I got a 7.5 in IELTS — well above what I needed. Her feedback is specific and always actionable.",
    name: "Ahmed K.",
    tag: "IELTS Prep",
  },
  {
    quote:
      "I was nervous about speaking in meetings at work. Now I lead them. Hadeer has a way of making you feel confident without letting you get away with mistakes.",
    name: "Nour S.",
    tag: "Business English",
  },
  {
    quote:
      "My daughter used to dread her English classes. Now she looks forward to her sessions with Hadeer every week. The improvement in her grades speaks for itself.",
    name: "Rania M.",
    tag: "Academic Support",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
            Student reviews
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-text-dark italic">
            What students say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-warm-white border border-border rounded-2xl p-7 flex flex-col gap-5"
            >
              {/* Decorative quote mark */}
              <span className="absolute top-5 right-6 font-display text-6xl text-primary-light leading-none select-none">
                &ldquo;
              </span>

              <p className="text-base text-text-mid leading-relaxed relative z-10">
                {t.quote}
              </p>

              <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                <p className="text-sm font-medium text-text-dark">{t.name}</p>
                <span className="text-xs font-medium bg-primary-light text-primary px-3 py-1 rounded-full">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
