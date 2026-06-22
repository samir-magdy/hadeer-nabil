const trustCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    label: "All levels welcome",
    detail: "From complete beginners to advanced speakers",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    label: "Online & in-person",
    detail: "Flexible lessons wherever works for you",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Cairo, Egypt",
    detail: "Local knowledge, global English standards",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-warm-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Bio */}
          <div>
            <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
              About me
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-text-dark italic mb-6 leading-snug">
              A tutor who listens before she teaches.
            </h2>
            <p className="text-base md:text-lg text-text-mid leading-relaxed mb-6">
              Hi, I&apos;m Hadeer — an English teacher based in Cairo with a
              passion for helping people find their voice in English. I&apos;ve
              been teaching for several years and I work with students of all
              ages and goals, from young learners building their foundations to
              professionals preparing for interviews and exams.
            </p>
            <p className="text-base text-text-mid leading-relaxed">
              I believe lessons should feel like conversations, not lectures.
              Every student is different, so every lesson plan is too — built
              around your goals, your pace, and what actually motivates you to
              keep going.
            </p>
          </div>

          {/* Trust cards */}
          <div className="flex flex-col gap-4">
            {trustCards.map((card) => (
              <div
                key={card.label}
                className="flex items-start gap-4 bg-cream border border-border rounded-2xl p-5"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center text-primary">
                  {card.icon}
                </div>
                <div>
                  <p className="font-medium text-text-dark text-sm md:text-base">
                    {card.label}
                  </p>
                  <p className="text-sm text-text-light mt-0.5">{card.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
