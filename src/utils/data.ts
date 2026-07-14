import type { Skill, Experience, Project } from '../types';

export const frontendSkills: Skill[] = [
  { name: 'TypeScript', level: 88, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', level: 94, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', level: 98, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', level: 95, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Vue.js', level: 78, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React JS', level: 92, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
];

export const backendSkills: Skill[] = [
  { name: 'PHP', level: 82, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', level: 76, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'Node.js', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MySQL', level: 85, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];

export const Tools: Skill[] = [
  { name: 'Git / GitHub', level: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'VS Code', level: 95, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'OOP', level: 82, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
  { name: 'Figma', level: 85, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Postman', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
];
export const experiences: Experience[] = [
  {
    role: 'Web Development Student',
    company: 'Passerelles Numériques Cambodia',
    period: '2025 - Present',
    description:
      'Built strong frontend and backend development skills through project-based learning and teamwork. Gained experience in designing responsive user interfaces, managing databases, writing clean and maintainable code, and applying modern web development technologies and best practices.',
    active: true,
  },
];

export const projects: Project[] = [
  {
    title: 'Restaurant Management System (RMS)',
    tags: ['Node.js', 'TypeScript', 'MySQL', 'TypeORM'],
    description: 'A RESTful system for managing restaurant operations with JWT authentication and role-based authorization (Admin, Chef, Cashier, Customer). Includes order management, payments, and promotions.',
    image: '/project/rms.png',
    url: 'https://github.com/sir-phy/restaurant_system',
  },
  {
    title: 'Online Shopping Platform',
    tags: ['Laravel', 'Vue 3', 'TypeScript', 'MySQL'],
    description: 'A full-stack e-commerce application with RESTful APIs for products, orders, and user management. Implemented authentication with Laravel Sanctum.',
    image: '/project/online-shop.png',
    url: 'https://github.com/Danemiok',
  },
  {
    title: 'Booking Trip',
    tags: ['ReactJS', 'TypeScript', 'Laravel', 'MySQL'],
    description: 'A hotel and trip booking platform with Login/Register authentication, MySQL database schema design, and responsive UI components.',
    image: '/project/booking-trip.png',
    url: 'https://vc-1-trip-booking.vercel.app/',
  },
  {
    title: 'Telegram Chatbot (Automation Bot)',
    tags: ['Python', 'Telegram Bot API'],
    description: 'A Telegram chatbot with command-based interactions (/start, /help) and asynchronous message processing for real-time user interaction.',
    image: '/project/telegram-chatBot.png',
    url: 'https://github.com/Danemiok/Telegram_Chatbot',
  },
];

export const orbitSkills = [...frontendSkills, ...backendSkills, ...Tools];

export const resumeContactInfo = [
  '+855 81 634 649',
  'miokdane2006@gmail.com',
  'Sangkat Tek Thla, Khan Sen Sok, Phnom Penh',
  'https://portfolio.dane.online',
];

export const resumeEducation = [
  {
    period: '2025 - Present',
    title: 'passerelles numériques cambodia',
    subtitle: 'Associate Degree in Web Programming',
    description: '',
  },
  {
    period: '2024',
    title: 'HUNSEN TRIEL HIGH SCHOOL',
    subtitle: 'Bac ll 2024',
    description: '',
  },
];

export const resumeHardSkills = [
  'PHP',
  'CSS',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'Laravel',
  'OOP',
  'Vue.js',
  'Node.js',
  'GitHub/Git',
];

export const resumeSoftSkills = [
  'Task Management',
  'Problem Solving',
  'Teamwork',
  'Adaptability',
  'Communication',
];

export const resumeLanguages = [
  'Khmer (Mother Tongue)',
  'English (Pre-Intermediate)',
];

export const resumeProfile = [
  { label: 'Name', value: 'MIOK Dane' },
  { label: 'Sex', value: 'Male' },
  { label: 'Nationality', value: 'Khmer' },
  { label: 'Marital Status', value: 'Single' },
  { label: 'Date of Birth', value: 'January-05-2004' },
  { label: 'Places of Birth', value: 'Kampong Thom' },
];

export const resumeActivities = [
];

export const resumeSchoolProjects = [

  {
    title: 'E-Commerce Online shop',
    date: 'June 19 - June 30, 2026',
    bullets: ['Developed a full-stack online shop using Laravel 12 and Vue 3 with TypeScript.',
      'Built a REST API and Blade admin panel for managing products, orders, and users.',
      'Implemented cookie-session authentication and role-based access control with Sanctum.',
      'Designed tables MySQL schema and managed the codebase with GitHub.',

    ],
  },
  {
    title: 'Restaurant Management System (RMS)',
    date: 'May  18 - June 08, 2026',
    bullets: [
      'Led a team of 3 to build a RESTful API with Node.js, TypeScript, JWT auth, and role-based access control (ADMIN, CHEF, CASHIER, CUSTOMER)',
      'Managed order lifecycle, payment processing, and promotions using MySQL and TypeORM',
      'Tools: Node.js, Express.js, TypeScript, TypeORM, MySQL, GitHub',
    ],
  },

  {
    title: 'Telegram Chatbot (Automation Bot)',
    date: 'Oct 30 - Nov 04, 2025',
    bullets: [
      'Developed a Telegram chatbot using Python and the Telegram Bot API.',
      'Configured and managed the bot through BotFather on Telegram.',
      'Implemented command-based interactions such as /start and /help.',
      'Handled asynchronous message processing for real-time interaction.',
    ],
  },
  {
    title: 'Booking Trip',
    date: 'Feb 15 - April 02, 2026',
    bullets: [
      'Collaborated in a team of 5 to build a hotel and trip booking web application using ReactJS, TypeScript, and Laravel',
      'Developed RESTful auth API (login/register), admin dashboard, and designed MySQL database schema for users, trips, and bookings',
      'Tools: ReactJS, TypeScript, Laravel, MySQL, GitHub',
    ],
  },
  {
    title: 'Flask List App (Web Application)',
    date: 'June 2025',
    bullets: [
      'Developed a web application using Flask, Python, and MySQL.',
      'Implemented CRUD operations for list management.',
      'Designed a simple and user-friendly interface with HTML and CSS.',
      'Focused on backend logic and database integration.',
    ],
  },
];


