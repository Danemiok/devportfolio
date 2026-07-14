import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import type { Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Navigation({ activeSection, isDarkMode, onToggleTheme }: NavigationProps) {
  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Resume', 'Projects', 'Contact'] as const;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <Rocket className="text-primary w-8 h-8" /> */}
          <span className="text-lg font-bold tracking-tight">M<span className="text-primary">D</span></span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className={`text-xs font-medium uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded ${
                activeSection === item.toLowerCase() ? 'text-primary' : 'hover:text-primary'
              }`}
              aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg glass text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="/resume/Software-Development-CV.pdf"
            download="Software-Development-CV.pdf"
            className="hidden sm:inline-flex btn-primary-glass px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
          >
            Download - Resume
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex md:hidden items-center justify-center p-2 rounded-lg glass text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <div
        id="mobile-navigation"
        className={`md:hidden border-t border-slate-200/50 dark:border-slate-800/50 glass overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeSection === item.toLowerCase()
                  ? 'bg-primary/10 text-primary'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary'
              }`}
              aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
            >
              {item}
            </a>
          ))}
          <a
            href="/resume/Software-Development-CV.pdf"
            download="Software-Development-CV.pdf"
            onClick={closeMenu}
            className="mt-2 inline-flex justify-center btn-primary-glass px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
          >
            Download - Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
