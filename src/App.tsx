import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Moon, 
  Sun, 
  Terminal, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  ArrowRight, 
  Send,
  ExternalLink,
  Code2,
  Cpu,
  Globe,
  Database
} from 'lucide-react';

export default function App() {
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'] as const;
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') return true;
    if (savedTheme === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [activeSection, setActiveSection] = useState<typeof sections[number]>(sections[0]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 140;
      let currentSection: typeof sections[number] = sections[0];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (section.offsetTop <= marker) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const frontendSkills = [
    // { name: 'Vue.js', level: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'JavaScript', level: 94, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML / CSS', level: 98, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Tailwind CSS', level: 95, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
    { name: 'Bootstrap', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'React JS', level: 92, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'SASS', level: 88, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
  ];
  const backendSkills = [
    { name: 'MySQL', level: 85, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PHP', level: 82, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Python', level: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Laravel', level: 76, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="text-primary w-8 h-8" />
            <span className="text-xl font-bold tracking-tight">DevPortfolio</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'hover:text-primary'
                }`}
                aria-current={activeSection === item.toLowerCase() ? 'page' : undefined}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="#" 
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
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
                <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                  Building Digital <span className="text-primary">Experiences</span> with Precision
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
                  Full-stack developer specializing in scalable web applications and elegant user interfaces. I turn complex problems into simple, beautiful digital solutions.
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
                className="flex-1 w-full max-w-xl relative"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden aspect-square border-4 border-primary/20 shadow-2xl flex items-center justify-center">
                    <img 
                      src="https://picsum.photos/seed/dev/800/800" 
                      alt="Professional Portrait" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Orbital Skills */}
                    <div className="orbit-container hidden md:block">
                      {[
                        { icon: <Code2 size={20} />, color: 'text-blue-500', angle: 0 },
                        { icon: <Terminal size={20} />, color: 'text-emerald-500', angle: 45 },
                        { icon: <Database size={20} />, color: 'text-orange-500', angle: 90 },
                        { icon: <Globe size={20} />, color: 'text-sky-500', angle: 135 },
                        { icon: <Cpu size={20} />, color: 'text-purple-500', angle: 180 },
                        { icon: <Globe size={20} />, color: 'text-yellow-500', angle: 225 },
                        { icon: <Terminal size={20} />, color: 'text-pink-500', angle: 270 },
                        { icon: <Code2 size={20} />, color: 'text-indigo-500', angle: 315 },
                      ].map((skill, i) => (
                        <div 
                          key={i}
                          className="orbit-icon bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
                          style={{ transform: `rotate(${skill.angle}deg) translate(180px) rotate(-${skill.angle}deg)` }}
                        >
                          <span className={skill.color}>{skill.icon}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 gap-12">
              <div className="w-full">
                <h2 className="text-3xl font-bold mb-6">About & Technical Arsenal</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-lg">
                  Passionate developer with 5+ years of experience in crafting high-performance applications. I bridge the gap between complex backend logic and intuitive frontend design. My philosophy centers on writing clean, maintainable code and delivering exceptional user experiences.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Projects Completed', value: '50+' },
                    { label: 'Years Experience', value: '5+' },
                    { label: 'Happy Clients', value: '30+' },
                    { label: 'Coffee Cups', value: '1.2k' },
                  ].map((stat, i) => (
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
                    <Terminal className="text-primary" />
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

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <div className="space-y-12">
              {[
                {
                  role: 'Senior Software Engineer',
                  company: 'TechSolutions Inc.',
                  period: '2021 — Present',
                  description: 'Lead development of core platform features using Next.js and Go. Mentored junior developers and improved CI/CD pipelines, reducing deployment time by 40%.',
                  active: true
                },
                {
                  role: 'Full-Stack Developer',
                  company: 'Digital Pulse Agency',
                  period: '2018 — 2021',
                  description: 'Developed custom web applications for various clients. Integrated complex third-party APIs and managed cloud infrastructure on AWS.',
                  active: false
                }
              ].map((exp, i) => (
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

        {/* Projects Section */}
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
              {[
                {
                  title: 'Analytics Dashboard',
                  tags: ['React', 'D3.js'],
                  description: 'Real-time data visualization platform with customizable widgets and automated reports.',
                  image: 'https://picsum.photos/seed/analytics/600/400'
                },
                {
                  title: 'SwiftCommerce',
                  tags: ['Next.js', 'Stripe'],
                  description: 'Modern e-commerce solution with focus on core web vitals and conversion optimization.',
                  image: 'https://picsum.photos/seed/ecommerce/600/400'
                },
                {
                  title: 'QueueMaster',
                  tags: ['Node.js', 'Redis'],
                  description: 'High-throughput job processing system designed for microservice architectures.',
                  image: 'https://picsum.photos/seed/code/600/400'
                }
              ].map((project, i) => (
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

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Let's build something amazing together</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                  Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and challenges.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email</p>
                      <p className="text-lg font-medium">hello@devportfolio.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Location</p>
                      <p className="text-lg font-medium">San Francisco, CA</p>
                    </div>
                  </div>
                  <div className="pt-6 flex gap-4">
                    <a href="#" className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <Github size={20} />
                    </a>
                    <a href="#" className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl"
              >
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-bold mb-2">Name</label>
                    <input 
                      className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 outline-none transition-all" 
                      placeholder="Your Name" 
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Email</label>
                    <input 
                      className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 outline-none transition-all" 
                      placeholder="email@example.com" 
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Message</label>
                    <textarea 
                      className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 outline-none transition-all" 
                      placeholder="Tell me about your project..." 
                      rows={4}
                    ></textarea>
                  </div>
                  <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group cursor-pointer" type="submit">
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Rocket className="text-primary w-6 h-6" />
              <span className="text-lg font-bold tracking-tight">DevPortfolio</span>
            </div>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
