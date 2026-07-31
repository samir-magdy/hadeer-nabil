"use client";

import { useState, useEffect, useCallback } from "react";
import { questions, getLevel } from "@/lib/quizData";
import { WHATSAPP_URL } from "@/lib/constants";
import { Language } from "@/lib/content";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

type Stage = "intro" | "quiz" | "result";

export default function QuizModal({
  isOpen,
  onClose,
  language,
}: QuizModalProps) {
  const [stage, setStage] = useState<Stage>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);

  const reset = useCallback(() => {
    setStage("intro");
    setCurrentIndex(0);
    setSelectedOption(null);
    setConfirmed(false);
    setScore(0);
  }, []);

  // Reset when re-opened
  useEffect(() => {
    if (isOpen) reset();
  }, [isOpen, reset]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const question = questions[currentIndex];
  // Fills as answers are confirmed, so the bar reaches 100% on the last check.
  const answered = currentIndex + (confirmed ? 1 : 0);
  const progress = (answered / questions.length) * 100;
  const isLast = currentIndex === questions.length - 1;

  function handleSelect(index: number) {
    if (confirmed) return;
    setSelectedOption(index);
  }

  function handleNext() {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === question.correctIndex;

    // When first checking the answer, update the score once and mark as
    // confirmed. On the subsequent click (when confirmed === true) we only
    // advance to the next question or show results without changing score
    // again — this prevents double-counting the same correct answer.
    if (!confirmed) {
      if (isCorrect) setScore((s) => s + 1);
      setConfirmed(true);
      return;
    }

    // confirmed === true: advance or finish
    if (isLast) {
      setStage("result");
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setConfirmed(false);
    }
  }

  const level = stage === "result" ? getLevel(score) : null;
  const translatedLevel =
    stage === "result" && level && language === "ar"
      ? {
          ...level,
          name: arabicLevelNames[level.code as keyof typeof arabicLevelNames],
          description:
            arabicLevelDescriptions[
              level.code as keyof typeof arabicLevelDescriptions
            ],
          suggestion:
            arabicLevelSuggestions[
              level.code as keyof typeof arabicLevelSuggestions
            ],
        }
      : level;

  const introContent =
    language === "ar"
      ? {
          title: "لست متأكدًا من أين تبدأ؟",
          description:
            "أجرِ اختبارًا سريعًا لتحديد مستواك في الإنجليزية خلال أقل من 3 دقائق.",
          button: "ابدأ الاختبار",
        }
      : {
          title: "Not sure where to start?",
          description:
            "Take a quick placement quiz and find out your English level in under 3 minutes.",
          button: "Start the quiz",
        };

  const modalDirection =
    stage === "quiz" ? "ltr" : language === "ar" ? "rtl" : "ltr";

  const resultContent =
    language === "ar"
      ? {
          heading: `لقد حصلت على ${score} من ${questions.length}`,
          cta: "احجز أول درس",
          retake: "أعد الاختبار",
        }
      : {
          heading: `You scored ${score} out of ${questions.length}`,
          cta: "Book your first lesson",
          retake: "Retake the quiz",
        };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-label="English level quiz"
    >
      {/* Overlay */}
      <div className="animate-fade-in absolute inset-0 bg-text-dark/65 backdrop-blur-sm" />

      {/* Modal — capped to the viewport, scrolls internally if needed */}
      <div
        className="animate-scale-in relative flex max-h-[calc(100svh-2rem)] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-warm-white shadow-warm-lg"
        dir={modalDirection}
        data-arabic-ui={language === "ar" ? "true" : undefined}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close quiz"
          className="absolute top-4 end-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-text-light transition-colors duration-200 hover:bg-primary-pale hover:text-text-dark"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {stage === "intro" && (
          <div className="overflow-y-auto px-6 py-11 text-center md:px-8">
            <h3 className="font-display mb-4 text-2xl leading-snug text-text-dark md:text-3xl">
              {introContent.title}
            </h3>
            <p className="mx-auto mb-8 max-w-sm leading-relaxed text-text-mid">
              {introContent.description}
            </p>
            <button
              onClick={() => setStage("quiz")}
              className="w-full cursor-pointer rounded-full bg-primary px-8 py-4 text-base font-medium text-warm-white shadow-warm transition-all duration-200 hover:bg-primary-deep hover:shadow-warm-lg active:scale-[0.98]"
            >
              {introContent.button}
            </button>
          </div>
        )}

        {stage === "quiz" && (
          <>
            {/* Progress — pinned */}
            <div className="shrink-0 px-6 pt-7 md:px-8">
              <div className="mb-2.5 flex items-center justify-between">
                <span className="text-xs font-medium tracking-wide text-text-light">
                  Question {currentIndex + 1} of {questions.length}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question + options — the scrolling region */}
            <div className="min-h-0 flex-1 overflow-y-auto px-6 pt-6 pb-2 md:px-8">
              <h3 className="font-display mb-5 text-lg leading-snug text-text-dark md:text-xl">
                {question.text}
              </h3>

              <div className="flex flex-col gap-2.5">
                {question.options.map((option, i) => {
                  const isSelected = selectedOption === i;
                  const isCorrect = i === question.correctIndex;

                  let style =
                    "border-border text-text-mid hover:border-primary/60 hover:bg-primary-pale";

                  if (confirmed) {
                    if (isCorrect) {
                      style = "border-accent bg-accent-light text-accent-deep";
                    } else if (isSelected) {
                      style = "border-error/60 bg-error-light text-error";
                    } else {
                      style = "border-border text-text-light opacity-55";
                    }
                  } else if (isSelected) {
                    style = "border-primary bg-primary-light text-text-dark";
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      disabled={confirmed}
                      className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-start text-[0.9375rem] transition-all duration-200 ${
                        confirmed ? "cursor-default" : "cursor-pointer"
                      } ${style}`}
                    >
                      {/* Wraps instead of clipping on narrow screens */}
                      <span className="leading-normal">{option}</span>

                      {confirmed && isCorrect && (
                        <svg
                          className="h-5 w-5 shrink-0 text-accent"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      )}

                      {confirmed && isSelected && !isCorrect && (
                        <svg
                          className="h-5 w-5 shrink-0 text-error"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action — pinned */}
            <div className="shrink-0 border-t border-border/70 px-6 py-5 md:px-8">
              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className="w-full cursor-pointer rounded-full bg-primary py-3.5 text-sm font-medium text-warm-white shadow-warm transition-all duration-200 hover:bg-primary-deep active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:active:scale-100"
              >
                {!confirmed
                  ? "Check answer"
                  : isLast
                    ? "See my result"
                    : "Next question"}
              </button>
            </div>
          </>
        )}

        {stage === "result" && translatedLevel && (
          <div className="overflow-y-auto px-6 py-11 text-center md:px-8">
            {/* Level badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5 text-sm font-medium text-primary">
              <span className="font-display text-base">{translatedLevel.code}</span>
              <span className="text-primary/50">·</span>
              <span>{translatedLevel.name}</span>
            </div>

            <h3 className="font-display mb-3 text-2xl leading-snug text-text-dark md:text-3xl">
              {resultContent.heading}
            </h3>
            <p className="mb-3 leading-relaxed text-text-mid">
              {translatedLevel.description}
            </p>
            <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-text-light">
              {translatedLevel.suggestion}
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-4 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-whatsapp px-7 py-4 text-base font-medium text-white shadow-warm transition-all duration-200 hover:bg-whatsapp-deep hover:shadow-warm-lg active:scale-[0.98]"
            >
              <WhatsAppIcon />
              {resultContent.cta}
            </a>
            <button
              onClick={reset}
              className="cursor-pointer text-sm text-text-light underline decoration-border-strong underline-offset-4 transition-colors duration-200 hover:text-text-mid"
            >
              {resultContent.retake}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const arabicLevelNames = {
  A1: "مبتدئ",
  A2: "مبتدئ متقدم",
  B1: "متوسط",
  B2: "متوسط متقدم",
  C1: "متقدم",
  C2: "إتقان",
} as const;

const arabicLevelDescriptions = {
  A1: "أنت تبدأ رحلتك مع الإنجليزية. هذا مكان ممتاز للبدء!",
  A2: "يمكنك التعامل مع محادثات بسيطة وفهم العبارات الأساسية.",
  B1: "يمكنك التواصل في المواقف المألوفة وفهم النقاط الرئيسية للكلام الواضح.",
  B2: "يمكنك فهم الأفكار الرئيسية للنصوص المعقدة والتفاعل بطلاقة.",
  C1: "تعبّر عن نفسك بطلاقة وطبيعية دون الحاجة إلى البحث كثيرًا عن الكلمات.",
  C2: "لديك سيطرة شبه أصلية على الإنجليزية — دقيقة وطبيعية ومفصلة.",
} as const;

const arabicLevelSuggestions = {
  A1: "سنبني أساسك خطوة بخطوة — الأبجدية والتحيات والمفردات الأساسية.",
  A2: "أنت جاهز لتوسيع مفرداتك والبدء في تكوين جمل أكثر اكتمالًا.",
  B1: "أنت جاهز للدروس الحوارية وبنى نحوية أكثر تعقيدًا.",
  B2: "التحضير لاختبارات IELTS أو TOEFL أو الإنجليزية للأعمال خطوة ممتازة لك.",
  C1: "سنحسّن كتابتك، ونصقل إنجليزيتك الأكاديمية أو المهنية، ونهذّب أسلوبك.",
  C2: "يمكننا التركيز على الكتابة المتقدمة أو النقاش أو الإنجليزية المتخصصة في مجالك.",
} as const;

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
