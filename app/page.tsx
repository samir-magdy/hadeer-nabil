"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import QuizModal from "@/components/QuizModal";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Language } from "@/lib/content";

export default function Home() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      lang={language === "ar" ? "ar" : "en"}
    >
      <Navbar
        onOpenQuiz={() => setQuizOpen(true)}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main>
        <Hero onOpenQuiz={() => setQuizOpen(true)} language={language} />
        <About language={language} />
        <Services language={language} />
        <Contact language={language} />
      </main>
      {!quizOpen && <FloatingWhatsApp />}
      <QuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        language={language}
      />
    </div>
  );
}
