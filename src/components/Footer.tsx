export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
          {currentYear} Dane Miok. Built with React, TypeScript, and Motion.
        </p>
        <a href="#home" className="text-xs md:text-sm font-medium text-primary hover:underline">
          Back to top
        </a>
      </div>
    </footer>
  );
}
