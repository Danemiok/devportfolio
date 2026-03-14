import type { Skill, Experience, Project } from '../types';

export const frontendSkills: Skill[] = [
  { name: 'JavaScript', level: 94, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML / CSS', level: 98, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Tailwind CSS', level: 95, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Bootstrap', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'React JS', level: 92, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'SASS', level: 88, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
];

export const backendSkills: Skill[] = [
  { name: 'MySQL', level: 85, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PHP', level: 82, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Python', level: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Laravel', level: 76, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
];

export const experiences: Experience[] = [
  {
    role: 'Developer',
    company: 'Passerelles Numériques Cambodia',
    period: '2021 — Present',
    description: 'Lead development of web applications using Laravel and React. Collaborated with cross-functional teams to deliver high-quality software solutions for educational initiatives.',
    active: true
  },
];

export const projects: Project[] = [
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
];

export const orbitSkills = [...frontendSkills, ...backendSkills];
