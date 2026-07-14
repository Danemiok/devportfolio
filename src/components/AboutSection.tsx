import { motion } from 'motion/react';
import { ChevronRight, Terminal } from 'lucide-react';
import type { Skill, Stat } from '../types';
import { Tools } from '../utils/data';

interface AboutSectionProps {
  frontendSkills: Skill[];
  backendSkills: Skill[];
  tools: Skill[];
}

const personalDetails: Stat[] = [
  { label: 'Birthday', value: '05 January 2004' },
  { label: 'Age', value: '21 years old' },
  { label: 'Sex', value: 'Male' },
  { label: 'Degree', value: 'Associate Degree in Web Programming' },
  { label: 'City', value: 'Phnom Penh, Cambodia' },
  { label: 'Marital Status', value: 'Single' },
  { label: 'Email', value: 'miokdane2006@gmail.com' },
  { label: 'Phone', value: '+855 81 634 649' },
];

export default function AboutSection({ frontendSkills, backendSkills }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
          <div className="mt-4 h-1 w-20 bg-primary rounded-full" />
        </div>

        <div className="space-y-10">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base mb-8 italic ">
            I&apos;m a software development student at Passerelles Numériques Cambodia, pursuing an Associate Degree in Web Programming. I specialize in building full-stack web applications using modern technologies like Laravel, Vue.js, Node.js, and TypeScript. I enjoy turning ideas into clean, responsive interfaces and practical digital solutions.
          </p>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Web Developer</h2>

            <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed text-sm md:text-base mb-8">
              I am a web developer with experience building RESTful APIs, designing MySQL databases, and developing responsive UI components. I have led a team of 3 developers on a Restaurant Management System and collaborated on a hotel booking platform, gaining hands-on experience with Git workflow, authentication, and role-based access control.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 mb-8">
              {personalDetails.map((detail, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <ChevronRight className="mt-1 shrink-0 text-sky-500" size={18} />
                  <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                    <span className="text-sm md:text-base font-bold text-slate-900 dark:text-slate-100">{detail.label}: </span>
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              Feel free to reach out — I&apos;m always open to new opportunities, collaboration, and connecting with fellow developers.
            </p>
          </div>

          <div id="skills" className="w-full mt-16">
            <div className="rounded-3xl border border-slate-200/50 dark:border-slate-800/50 glass-card p-6 md:p-8">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Terminal className="text-primary" />
                Skills & Technologies
              </h3>

              <h4 className="text-lg font-bold mb-5 text-slate-700 dark:text-slate-300">Frontend Development</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
                {frontendSkills.map((skill, i) => (
                  <div key={skill.name} className="rounded-xl border border-slate-200/50 dark:border-slate-800/50 glass p-4">
                    <div className="size-9 rounded-md flex items-center justify-center glass mb-4 border border-slate-200/50 dark:border-slate-700/50">
                      <img
                        src={skill.iconUrl}
                        alt={`${skill.name} logo`}
                        className="size-5 object-contain"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-100">{skill.name}</p>
                      <span className="text-xs font-semibold tabular-nums text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, delay: i * 0.08 }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-bold mb-5 text-slate-700 dark:text-slate-300">Backend Development</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
                {backendSkills.map((skill, i) => (
                  <div key={skill.name} className="rounded-xl border border-slate-200/50 dark:border-slate-800/50 glass p-4">
                    <div className="size-9 rounded-md flex items-center justify-center glass mb-4 border border-slate-200/50 dark:border-slate-700/50">
                      <img
                        src={skill.iconUrl}
                        alt={`${skill.name} logo`}
                        className="size-5 object-contain"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-100">{skill.name}</p>
                      <span className="text-xs font-semibold tabular-nums text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, delay: i * 0.08 }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-bold mb-5 text-slate-700 dark:text-slate-300">Tools & Others</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
                {Tools.map((skill, i) => (
                  <div key={skill.name} className="rounded-xl border border-slate-200/50 dark:border-slate-800/50 glass p-4">
                    <div className="size-9 rounded-md flex items-center justify-center glass mb-4 border border-slate-200/50 dark:border-slate-700/50">
                      <img
                        src={skill.iconUrl}
                        alt={`${skill.name} logo`}
                        className="size-5 object-contain"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-100">{skill.name}</p>
                      <span className="text-xs font-semibold tabular-nums text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, delay: i * 0.08 }}
                        className="h-full rounded-full bg-primary"
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
