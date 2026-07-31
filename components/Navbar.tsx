"use client";

import { useState, useEffect } from "react";
import { Language, pageContent } from "@/lib/content";

export default function Navbar({
  onOpenQuiz,
  language,
  onLanguageChange,
}: {
  onOpenQuiz: () => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const content = pageContent[language];
  const navLinks = content.navbar.links;

  // Reuses the quiz's own existing button copy — no new content introduced.
  const quizCta = language === "ar" ? "ابدأ الاختبار" : "Start the quiz";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-cream/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl tracking-tight text-text-dark"
        >
          {content.navbar.logo}
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative cursor-pointer text-[0.9375rem] text-text-mid transition-colors duration-200 after:absolute after:-bottom-1 after:start-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-text-dark hover:after:scale-x-100 rtl:after:origin-right"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => onLanguageChange(language === "en" ? "ar" : "en")}
            className="cursor-pointer rounded-full border border-border-strong px-3.5 py-1.5 text-sm text-text-dark transition-colors duration-200 hover:border-primary hover:bg-primary-pale"
          >
            {language === "en" ? "عربي" : "EN"}
          </button>

          <button
            type="button"
            onClick={onOpenQuiz}
            className="cursor-pointer rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-warm-white shadow-warm transition-all duration-200 hover:bg-primary-deep active:scale-[0.98]"
          >
            {quizCta}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => onLanguageChange(language === "en" ? "ar" : "en")}
            className="cursor-pointer rounded-full border border-border-strong px-3 py-1.5 text-sm text-text-dark transition-colors duration-200 hover:border-primary hover:bg-primary-pale"
          >
            {language === "en" ? "عربي" : "EN"}
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={content.navbar.menuAria}
            aria-expanded={menuOpen}
            className="relative flex h-11 w-11 cursor-pointer items-center justify-center"
          >
            <span
              className={`absolute block h-0.5 w-6 origin-center rounded-full bg-text-dark transition-[transform,opacity] duration-300 ease-out ${
                menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-text-dark transition-[transform,opacity] duration-300 ease-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 origin-center rounded-full bg-text-dark transition-[transform,opacity] duration-300 ease-out ${
                menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-b border-border bg-warm-white transition-all duration-300 ease-out md:hidden ${
          menuOpen ? "max-h-96 opacity-100 shadow-sm" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer rounded-lg px-2 py-2.5 text-base text-text-mid transition-colors duration-200 hover:bg-primary-pale hover:text-text-dark"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onOpenQuiz();
            }}
            className="mt-3 w-full cursor-pointer rounded-full bg-primary px-6 py-3.5 text-base font-medium text-warm-white shadow-warm transition-all duration-200 hover:bg-primary-deep active:scale-[0.98]"
          >
            {quizCta}
          </button>
        </div>
      </div>
    </header>
  );
}
