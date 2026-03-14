import { 
  Navigation, 
  HeroSection, 
  AboutSection, 
  ExperienceSection, 
  ProjectsSection, 
  ContactSection, 
  Footer 
} from './components';
import AnimatedBackground from './components/AnimatedBackground';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { 
  frontendSkills, 
  backendSkills, 
  experiences, 
  projects, 
  orbitSkills 
} from './utils/data';

export default function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const activeSection = useActiveSection();

  return (
    <div className="relative min-h-screen bg-background-light dark:bg-transparent font-sans text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30 transition-colors duration-300">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation 
          activeSection={activeSection} 
          isDarkMode={isDarkMode} 
          onToggleTheme={toggleTheme} 
        />
        
        <main>
          <HeroSection orbitSkills={orbitSkills} />
          <AboutSection 
            frontendSkills={frontendSkills} 
            backendSkills={backendSkills} 
          />
          <ExperienceSection experiences={experiences} />
          <ProjectsSection projects={projects} />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
