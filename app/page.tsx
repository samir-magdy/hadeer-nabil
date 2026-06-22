"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import QuizCTA from "@/components/QuizCTA";
import QuizModal from "@/components/QuizModal";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <>
      <Navbar onOpenQuiz={() => setQuizOpen(true)} />
      <main>
        <Hero onOpenQuiz={() => setQuizOpen(true)} />
        <About />
        <Services />
        <QuizCTA onOpenQuiz={() => setQuizOpen(true)} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <QuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
