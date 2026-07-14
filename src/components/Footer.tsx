export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/50 dark:border-slate-800/50 glass">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
          {currentYear} MIOK Dane. All rights reserved.
        </p>
        <a href="#home" className="text-xs md:text-sm font-medium text-primary hover:underline">
          Back to top
        </a>
      </div>
    </footer>
  );
}
