import { Rocket, Moon, Sun } from 'lucide-react';
import type { Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Navigation({ activeSection, isDarkMode, onToggleTheme }: NavigationProps) {
  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'] as const;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <Rocket className="text-primary w-8 h-8" /> */}
          <span className="text-xl font-bold tracking-tight">DevPortfolio</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded ${
                activeSection === item.toLowerCase() ? 'text-primary' : 'hover:text-primary'
              }`}
              aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a 
            href="#" 
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
