import { useState, useEffect } from 'react';
import type { Section } from '../types';

const sections: Section[] = ['home', 'about', 'skills', 'experience', 'resume', 'projects', 'contact'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<Section>(sections[0]);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 140;
      let currentSection: Section = sections[0];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (section.offsetTop <= marker) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return activeSection;
}
