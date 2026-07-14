import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import {
  resumeActivities,
  resumeContactInfo,
  resumeEducation,
  resumeHardSkills,
  resumeLanguages,
  resumeProfile,
  resumeSchoolProjects,
  resumeSoftSkills,
} from '../utils/data';

const timelineClassName = 'relative pl-8 border-l-3 border-slate-300 dark:border-slate-800';

function TimelineDot() {
  return <span className="absolute -left-[11px] top-0 size-5 rounded-full border-4 border-background-light dark:border-background-dark bg-primary" />;
}

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{title}</h3>
      {children}
    </section>
  );
}

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Resume</h2>
            <div className="mt-4 h-1 w-10 bg-primary rounded-full" />
          </div>
          <a
            href="/resume/Software-Development-CV.pdf"
            download="Software-Development-CV.pdf"
            className="btn-primary-glass px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download - Resume
          </a>
        </div>

        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-8 ax-w-5xl mb-10 leading-relaxed">
          For this page, I would like to show you about my resume that include all informations from me such as my personal information, Education, Work Experience, and other
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div className="space-y-8">
            <SectionBlock title="Summary">
              <div className={timelineClassName}>
                <TimelineDot />
                <h4 className="text-sm md:text-base font-semibold uppercase tracking-wide text-slate-900 dark:text-white mb-2">DANE MIOK</h4>
                <p className="text-slate-600 dark:text-slate-400 italic text-sm md:text-base mb-4 leading-relaxed">
                  My name is Dane Miok. I&apos;m a Web Developer.
                </p>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm md:text-base">
                  {resumeContactInfo.map((line) => (
                    <li key={line} className="flex items-start gap-2 leading-relaxed">
                      <span className="mt-2 size-1.5 rounded-full bg-slate-900 dark:bg-slate-100 shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionBlock>

            <SectionBlock title="Education">
              <div className="space-y-12">
                {resumeEducation.map((item, i) => (
                  <motion.div
                    key={`${item.title}-${item.period}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={timelineClassName}
                  >
                    <TimelineDot />
                    <h4 className="text-xs md:text-sm font-bold uppercase tracking-wide text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <span className="inline-block glass text-slate-600 dark:text-slate-300 text-xs md:text-sm font-semibold px-4 py-1 mb-3">
                      {item.period}
                    </span>
                    <p className="text-slate-500 dark:text-slate-400 italic text-sm md:text-base mb-3 leading-relaxed">{item.subtitle}</p>
                    {item.description && (
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl text-sm md:text-base">{item.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </SectionBlock>

            <SectionBlock title="Skills">
              <div className="space-y-5">
                <div className={timelineClassName}>
                  <TimelineDot />
                  <p className="text-slate-500 dark:text-slate-400 italic text-sm md:text-base mb-3">Hard Skills</p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                    {resumeHardSkills.join(', ')}.
                  </p>
                </div>
                <div className={timelineClassName}>
                  <TimelineDot />
                  <p className="text-slate-500 dark:text-slate-400 italic text-sm md:text-base mb-3">Soft Skills</p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                    {resumeSoftSkills.join(', ')}.
                  </p>
                </div>
              </div>
            </SectionBlock>

            <SectionBlock title="Languages">
              <div className={timelineClassName}>
                <TimelineDot />
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm md:text-base">
                  {resumeLanguages.map((language) => (
                    <li key={language} className="flex items-start gap-2 leading-relaxed">
                      <span className="mt-2 size-1.5 rounded-full bg-slate-900 dark:bg-slate-100 shrink-0" />
                      <span>{language}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionBlock>

            <SectionBlock title="Profile">
              <div className={timelineClassName}>
                <TimelineDot />
                <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm md:text-base">
                  {resumeProfile.map((item) => (
                    <li key={item.label} className="flex items-start gap-2 leading-relaxed">
                      <span className="mt-2 size-1.5 rounded-full bg-slate-900 dark:bg-slate-100 shrink-0" />
                      <span>
                        <strong>{item.label} :</strong> {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionBlock>
          </div>

          <div className="space-y-8">
            {resumeActivities.length > 0 && (
              <SectionBlock title="Professional Experience">
                <div className="space-y-12">
                  {resumeActivities.map((group) => (
                    <div key={group.title} className={timelineClassName}>
                      <TimelineDot />
                    <h4 className="text-sm md:text-base font-bold uppercase tracking-wide text-slate-900 dark:text-white mb-2">
                        {group.title}
                      </h4>
                      <span className="inline-block glass text-slate-600 dark:text-slate-300 text-xs md:text-sm font-semibold px-4 py-1 mb-3">
                        {group.period}
                      </span>
                      <p className="text-slate-500 dark:text-slate-400 italic text-sm md:text-base mb-4 leading-relaxed">{group.subtitle}</p>
                      <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm md:text-base">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 leading-relaxed">
                            <span className="mt-2 size-1.5 rounded-full bg-slate-900 dark:bg-slate-100 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </SectionBlock>
            )}

            <SectionBlock title="School Projects">
              <div className="space-y-12">
                {resumeSchoolProjects.map((project, i) => (
                  <motion.div
                    key={`${project.title}-${project.date}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className={timelineClassName}
                  >
                    <TimelineDot />
                    <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <span className="inline-block glass text-slate-600 dark:text-slate-300 text-xs md:text-sm font-semibold px-4 py-1 mb-3">
                      {project.date}
                    </span>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300 text-sm md:text-base">
                      {project.bullets.length > 0 ? (
                        project.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 leading-relaxed">
                            <span className="mt-2 size-1.5 rounded-full bg-slate-900 dark:bg-slate-100 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-slate-600 dark:text-slate-400 italic text-sm md:text-base">
                          Booking Trip app
                        </li>
                      )}
                    </ul> 
                  </motion.div>
                ))}
              </div>
            </SectionBlock>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/resume/Software-Development-CV.pdf"
            download="Software-Development-CV.pdf"
            className="btn-primary-glass px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download - Resume
          </a>
        </div>
      </div>
    </section>
  );
}
