interface QuizCTAProps {
  onOpenQuiz: () => void;
}

export default function QuizCTA({ onOpenQuiz }: QuizCTAProps) {
  return (
    <section id="quiz" className="bg-primary-light py-20 md:py-24 scroll-mt-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">
          Free placement quiz
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-text-dark italic mb-4">
          Not sure where to start?
        </h2>
        <p className="text-base md:text-lg text-text-mid leading-relaxed mb-10 max-w-xl mx-auto">
          Take a quick placement quiz and find out your English level in under 3
          minutes. No sign-up needed — just honest answers.
        </p>
        <button
          onClick={onOpenQuiz}
          className="inline-flex items-center justify-center bg-primary text-warm-white font-medium px-8 py-4 rounded-full hover:bg-primary/90 active:scale-95 transition-all duration-200 min-h-[52px] text-base shadow-lg shadow-primary/25"
        >
          Start the quiz
        </button>
      </div>
    </section>
  );
}
