"use client";
import { useState, useEffect } from "react";

export function useTypewriter(phrases: string[], speed = 90, deleteSpeed = 55) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (paused) {
      timeout = setTimeout(() => {
        setPaused(false);
        setDeleting(true);
      }, 1800);
      return () => clearTimeout(timeout);
    }

    const phrase = phrases[phraseIndex];

    if (!deleting) {
      timeout = setTimeout(() => {
        setText(phrase.substring(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === phrase.length) setPaused(true);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setText(phrase.substring(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setPhraseIndex((p) => (p + 1) % phrases.length);
        }
      }, deleteSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, phraseIndex, charIndex, deleting, paused, phrases, speed, deleteSpeed]);

  return text;
}
