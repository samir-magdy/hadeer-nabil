"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger step 1–4, maps to .reveal-delay-* in globals.css */
  delay?: 1 | 2 | 3 | 4;
  className?: string;
  as?: "div" | "section" | "li";
}

/**
 * Fades + lifts its children into view once, when they enter the viewport.
 * Pairs with the .reveal / .reveal-visible classes in globals.css, which
 * already handle prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `reveal-delay-${delay}` : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${delayClass} ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
