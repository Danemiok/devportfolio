import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Rocket className="text-primary w-6 h-6" />
            <span className="text-lg font-bold tracking-tight">DevPortfolio</span>
          </div>
          <p className="text-slate-500 text-sm">©{new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
