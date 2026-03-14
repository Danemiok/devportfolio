import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import type { Skill, Stat } from '../types';

interface AboutSectionProps {
  frontendSkills: Skill[];
  backendSkills: Skill[];
}

const stats: Stat[] = [
  { label: 'Projects Completed', value: '3' },
  { label: 'Years Experience', value: '2' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Coffee Cups', value: '1.2k' },
];

export default function AboutSection({ frontendSkills, backendSkills }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-12">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-6 text-center">About & Technical Arsenal</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-lg">
              Passionate developer with 5+ years of experience in crafting high-performance applications. I bridge the gap between complex backend logic and intuitive frontend design. My philosophy centers on writing clean, maintainable code and delivering exceptional user experiences.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="text-primary font-bold text-3xl mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="skills" className="w-full mt-16">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#06152d]/80 p-6 md:p-8">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Terminal className="text-primary"/>
                Skills & Technologies
              </h3>

              <h4 className="text-lg font-bold mb-5 text-slate-700 dark:text-slate-300">Frontend Development</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
                {frontendSkills.map((skill, i) => (
                  <div key={skill.name} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#081a36] p-4">
                    <div className="size-9 rounded-md flex items-center justify-center bg-slate-100 dark:bg-slate-900/80 mb-4 border border-slate-200 dark:border-slate-700">
                      <img
                        src={skill.iconUrl}
                        alt={`${skill.name} logo`}
                        className="size-5 object-contain"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">{skill.name}</p>
                    <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, delay: i * 0.08 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-bold mb-5 text-slate-700 dark:text-slate-300">Backend Development</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {backendSkills.map((skill, i) => (
                  <div key={skill.name} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#081a36] p-4">
                    <div className="size-9 rounded-md flex items-center justify-center bg-slate-100 dark:bg-slate-900/80 mb-4 border border-slate-200 dark:border-slate-700">
                      <img
                        src={skill.iconUrl}
                        alt={`${skill.name} logo`}
                        className="size-5 object-contain"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">{skill.name}</p>
                    <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, delay: i * 0.08 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
