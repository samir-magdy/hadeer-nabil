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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl md:text-2xl text-text-dark tracking-tight"
          data-arabic-ui={language === "ar" ? "true" : undefined}
        >
          {content.navbar.logo}
        </a>

        <div className="hidden md:flex items-center gap-4 md:gap-16">
          {/* Desktop nav */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm md:text-xl text-text-mid hover:text-text-dark transition-colors duration-200"
              data-arabic-ui={language === "ar" ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}

        </div>
          <button
            type="button"
            onClick={() => onLanguageChange(language === "en" ? "ar" : "en")}
            className="hidden md:inline-block cursor-pointer rounded-full border border-border px-3 py-1.5 text-sm sm:text-base text-text-dark transition-colors hover:bg-primary-light"
          >
            {language === "en" ? "عربي" : "EN"}
          </button>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => onLanguageChange(language === "en" ? "ar" : "en")}
            className="cursor-pointer rounded-full border border-border px-3 py-1.5 text-sm text-text-dark transition-colors hover:bg-primary-light"
          >
            {language === "en" ? "عربي" : "EN"}
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={content.navbar.menuAria}
            aria-expanded={menuOpen}
            className="cursor-pointer md:hidden relative flex h-11 w-11 items-center justify-center"
          >
            <span
              className={`absolute block h-0.5 w-6 rounded-full bg-text-dark transition-[transform,opacity] duration-300 ease-out origin-center ${
                menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-text-dark transition-[transform,opacity] duration-300 ease-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 rounded-full bg-text-dark transition-[transform,opacity] duration-300 ease-out origin-center ${
                menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>

      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        } bg-warm-white border-b border-border`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer text-base text-text-mid hover:text-text-dark transition-colors py-1"
              data-arabic-ui={language === "ar" ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
