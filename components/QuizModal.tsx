"use client";

import { useState, useEffect, useCallback } from "react";
import { questions, getLevel } from "@/lib/quizData";
import { WHATSAPP_URL } from "@/lib/constants";

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Stage = "quiz" | "result";

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [stage, setStage] = useState<Stage>("quiz");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);

  const reset = useCallback(() => {
    setStage("quiz");
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
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const question = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;
  const isLast = currentIndex === questions.length - 1;

  function handleSelect(index: number) {
    if (confirmed) return;
    setSelectedOption(index);
  }

  function handleNext() {
    if (selectedOption === null) return;

    const newScore = selectedOption === question.correctIndex ? score + 1 : score;

    if (confirmed) {
      if (isLast) {
        setScore(newScore);
        setStage("result");
      } else {
        setScore(newScore);
        setCurrentIndex((i) => i + 1);
        setSelectedOption(null);
        setConfirmed(false);
      }
    } else {
      setScore(newScore);
      setConfirmed(true);
    }
  }

  const level = stage === "result" ? getLevel(score) : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-label="English level quiz"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-text-dark/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-warm-white rounded-3xl shadow-2xl animate-scale-in overflow-hidden">
        {/* Close */}
        {/* <button
          onClick={onClose}
          aria-label="Close quiz"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full text-text-light hover:text-text-dark hover:bg-border transition-colors z-10"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> */}

        {stage === "quiz" && (
          <>
            {/* Progress */}
            <div className="px-6 pt-6 pb-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-text-light font-medium">
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <span className="text-xs text-text-light font-medium">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="px-6 pt-6 pb-2">
              <h3 className="font-display text-lg md:text-xl text-text-dark leading-snug">
                {question.text}
              </h3>
            </div>

            {/* Options */}
            <div className="px-6 pb-4 flex flex-col gap-3 mt-2">
              {question.options.map((option, i) => {
                const isSelected = selectedOption === i;
                const isCorrect = i === question.correctIndex;

                let style =
                  "border border-border text-text-mid hover:border-primary hover:bg-primary-light/40";

                if (confirmed) {
                  if (isCorrect) {
                    style = "border-2 border-accent bg-accent/10 text-accent font-medium";
                  } else if (isSelected && !isCorrect) {
                    style = "border-2 border-red-400 bg-red-50 text-red-600";
                  } else {
                    style = "border border-border text-text-light opacity-60";
                  }
                } else if (isSelected) {
                  style = "border-2 border-primary bg-primary-light text-text-dark font-medium";
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={confirmed}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 min-h-[52px] ${style}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Next button */}
            <div className="px-6 pb-6">
              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className="w-full bg-primary text-warm-white font-medium py-3.5 rounded-full text-sm hover:bg-primary/90 active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 min-h-[52px]"
              >
                {!confirmed
                  ? "Check answer"
                  : isLast
                  ? "See my result"
                  : "Next question →"}
              </button>
            </div>
          </>
        )}

        {stage === "result" && level && (
          <div className="px-6 py-10 text-center">
            {/* Level badge */}
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="font-display italic text-base">{level.code}</span>
              <span>·</span>
              <span>{level.name}</span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl text-text-dark italic mb-3 leading-snug">
              You scored {score} out of {questions.length}
            </h3>
            <p className="text-base text-text-mid leading-relaxed mb-3">
              {level.description}
            </p>
            <p className="text-sm text-text-light leading-relaxed mb-8 max-w-sm mx-auto">
              {level.suggestion}
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-medium px-7 py-4 rounded-full hover:bg-[#25D366]/90 active:scale-95 transition-all duration-200 min-h-[52px] text-base w-full mb-3"
            >
              <WhatsAppIcon />
              Book a lesson with Hadeer
            </a>
            <button
              onClick={reset}
              className="text-sm text-text-light hover:text-text-mid transition-colors"
            >
              Retake the quiz
            </button>
          </div>
        )}
      </div>
    </div>
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
