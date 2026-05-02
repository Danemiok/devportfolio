export type Section = 'home' | 'about' | 'skills' | 'experience' | 'resume' | 'projects' | 'contact';

export interface Skill {
  name: string;
  level: number;
  iconUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  active: boolean;
}

export interface Project {
  title: string;
  tags: string[];
  description: string;
  image: string;
  url?: string;
}

export interface Stat {
  label: string;
  value: string;
}
