import { motion } from 'motion/react';
import type { Experience } from '../types';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800"
            >
              <div className={`absolute -left-[11px] top-0 size-5 rounded-full border-4 border-background-light dark:border-background-dark ${exp.active ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-primary font-semibold text-sm">{exp.period}</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">{exp.company}</p>
              <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
