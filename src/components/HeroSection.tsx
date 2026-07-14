import { motion } from 'motion/react';
import type { Skill } from '../types';
import { useTypingAnimation } from '../hooks/useTypingAnimation';


interface HeroSectionProps {
  orbitSkills: Skill[];
}

const roles = ['Developer', 'Designer'];

function TypingText({ phrases }: { phrases: string[] }) {
  const { displayText } = useTypingAnimation(phrases);

  return (
    <span className="inline-flex items-end text-primary whitespace-nowrap">
      {displayText}
      <span className="inline-block w-[2px] sm:w-[3px] h-[0.9em] md:h-7 ml-1 sm:ml-1.5 bg-primary animate-[blink_1s_step-end_infinite]" />
    </span>
  );
}

export default function HeroSection({ orbitSkills }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-primary text-sm md:text-base font-bold uppercase tracking-wider border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="lg:text-6xl leading-tight tracking-tight">
              Miok Dane<br className="md:hidden" />
              <span className="block text-base md:text-lg lg:text-4xl">I'm <TypingText phrases={roles} /></span>
            </h1>
            <p className="text-base md:text-lg dark:text-slate-400 max-w-2xl leading-relaxed">
              I'm a developer specializing in building exceptional digital experiences. With a strong foundation in both frontend and backend technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary-glass px-4 py-2 rounded-lg font-bold text-xs flex items-center justify-center">
                View Projects
              </a>
              <a href="#contact" className="btn-glass px-4 py-2 rounded-lg font-bold text-xs flex items-center justify-center">
                Contact Me
              </a>
              <a
                href="/resume/Software-Development-CV.pdf"
                download="Software-Development-CV.pdf"
                className="btn-glass px-4 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download - Resume
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
              <div className="relative bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden aspect-square border-4 border-primary/20 flex items-center justify-center">
                <img 
                  src="/images/portfolio1.png" 
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
                        className="orbit-icon glass p-1.5 rounded-lg"
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
