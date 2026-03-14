import { motion } from 'motion/react';
import type { Skill } from '../types';

interface HeroSectionProps {
  orbitSkills: Skill[];
}

export default function HeroSection({ orbitSkills }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-5ml md:text-7xl font-black leading-tight tracking-tight">
              I'm <span className="text-primary">Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
              I'm a developer specializing in building exceptional digital experiences. With a strong foundation in both frontend and backend technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-primary text-white h-12 px-8 rounded-lg font-bold flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                View Projects
              </a>
              <a href="#contact" className="bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white h-12 px-8 rounded-lg font-bold flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-xs md:max-w-sm relative"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden aspect-square border-4 border-primary/20 shadow-2xl flex items-center justify-center">
                <img 
                  src="/images/portfoliio.png" 
                  alt="Professional Portrait" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Orbital Skills */}
                <div className="orbit-container block">
                  {orbitSkills.map((skill, i) => {
                    const angle = (i * 360) / orbitSkills.length;
                    return (
                      <div
                        key={skill.name}
                        className="orbit-icon bg-white dark:bg-slate-800 p-1.5 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
                        style={{ transform: `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)` }}
                      >
                        <img
                          src={skill.iconUrl}
                          alt={`${skill.name} logo`}
                          className="size-4 object-contain"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
