import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400">Selected work from my portfolio.</p>
          </div>
          <a href="#" className="text-primary font-bold hover:underline flex items-center gap-1 group">
            All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Project <ExternalLink size={14} />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary uppercase">{tag}</span>
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
