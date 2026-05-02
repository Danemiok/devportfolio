import { useState, useEffect, useCallback } from 'react';

export function useTypingAnimation(phrases: string[], options?: {
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
}) {
  const {
    typeSpeed = 100,
    deleteSpeed = 100,
    delayBetween = 5000,
  } = options || {};

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[currentIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, currentPhrase, phrases, typeSpeed, deleteSpeed, delayBetween]);

  const reset = useCallback(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsDeleting(false);
  }, []);

  return { displayText, reset };
}