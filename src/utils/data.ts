import type { Skill, Experience, Project } from '../types';

export const frontendSkills: Skill[] = [
  { name: 'JavaScript', level: 94, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML / CSS', level: 98, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Tailwind CSS', level: 95, iconUrl: '/images/tailwindcss.svg' },
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

export const Tools: Skill[] = [
  { name: 'Git', level: 90, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', level: 70, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'VS Code', level: 95, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Figma', level: 85, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Postman', level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
];
export const experiences: Experience[] = [
  {
    role: 'Aspiring Full-Stack Developer',
    company: 'Passerelles Numeriques Cambodia',
    period: '2026 - Present',
    description:
      'Passionate about building modern and responsive web applications using React, JavaScript, Python, and MySQL. Continuously improving technical skills through real-world practice, teamwork, and creating meaningful digital solutions.',
    active: true,
  },
  {
    role: 'Web Development Student',
    company: 'Passerelles Numeriques Cambodia',
    period: '2025 - 2026',
    description:
      'Developed strong frontend and backend foundations through project-based learning and collaboration. Learned how to design clean user interfaces, manage databases, write maintainable code, and apply modern web development practices.',
    active: true,
  },
  {
    role: 'Personal Project Developer',
    company: 'Independent Projects & Self-Learning',
    period: '2025 - Present',
    description:
      'Built and explored multiple projects, including a task management system, an e-commerce platform, a Telegram chatbot, and a portfolio website. Improved skills in API integration, responsive UI development, debugging, and full-stack problem-solving.',
    active: true,
  },
];

export const projects: Project[] = [

    {
    title: 'Flask List App',
    tags: ['Python', 'Flask', 'MySQL'],
    description: 'A web application built with Flask that allows users to create and manage lists laptop, such as to-do lists or shopping lists, with a MySQL database for data storage.',
    image: '/project/list-app.png',
    url: 'https://github.com/Danemiok/Flask-List-App',
  },
  {
    title: 'Telegram chatbot',
    tags: ['Python', 'Telegram Bot API'],
    description: 'A Telegram chatbot that provides users with real-time information, interactive features, and personalized responses based on their queries.',
    image: '/project/telegram-chatBot.png',
    url: 'https://github.com/Danemiok/Telegram_Chatbot',
  },

    {
    title: 'E-commerce Website (PAY NOW)',
    tags: ['HTML', 'CSS','SASS', 'JavaScript'],
    description: 'A web-based task management application that allows users to create, organize, and track their tasks efficiently.',
    image: '/project/paynow.png',
    url: 'https://e-commerce-pay-now-kxyc.vercel.app',
  },
  {
    title: 'Task Management App',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'A web-based task management application that allows users to create, organize, and track their tasks efficiently.',
    image: '/project/taskmanagment.png',
    url: 'https://task-magerment.dane-website.online/pages/homePage.html',
  },
  {
    title: 'Leave Management App',
    tags: ['Tool: FIgma'],
    description: 'A web-based task management application that allows users to create, organize, and track their tasks efficiently.',
    image: '/project/leaveManagement.png',
    url: 'https://www.figma.com/proto/8HaugmYCgcnLwwRX9wRpwc/Leave-Management-App?node-id=45-2&t=uud4RGtyNHY3ynPC-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=102%3A22&show-proto-sidebar=1',
  },

  

];

export const orbitSkills = [...frontendSkills, ...backendSkills, ...Tools];

export const resumeContactInfo = [
  '+855 81 634 649',
  'dane.miok@student.passerellesnumeriques.org',
  'BP 511, Phum Tropeang Chhuk (Borey Sorla) Sangtak, Street 371, Phnom Penh',
  'www.reallygreatsite.com',
];

export const resumeEducation = [
  {
    period: '2025 - 2027',
    title: 'PASSERELLES NUMERIQUES CAMBODIA ORGANIZATION',
    subtitle: 'Associate Degree',
    description: 'October 8th 2024',
  },
  {
    period: '2024',
    title: 'HUNSEN TRIEL HIGH SCHOOL',
    subtitle: 'Bacll 2024',
    description: '',
  },
];

export const resumeHardSkills = [
  'Microsoft office',
  'HTML',
  'CSS',
  'Python',
  'React JS',
  'Typescript',
  'Javascript',
  'PHP',
  'Node JS',
  'Laravel',
  'Database',
  'OOP',
  'Bootstrap',
  'UX/UI',
  'Docker',
  'Github',
];

export const resumeSoftSkills = [
  'Good Communication',
  'Solidarity',
  'Responsibility',
  'Trust',
  'Sharing',
  'Honest',
  'Friendly',
  'Respect',
  'Teamwork',
  'Time management',
  'Problem-solving',
  'Leadership',
  'Task management',
];

export const resumeLanguages = [
  'Khmer (Mother Tongue)',
  'English (Intermediate)',
];

export const resumeProfile = [
  { label: 'Name', value: 'DANE MIOK' },
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
    title: 'Booking Trip App (VC1)',
    date: 'April 2026',
    bullets: ['Developed a booking trip app.',
      'Built frontend using ReactJS and Typescript and backend with laravel.',
      'Managed and structured data using MySQL.',
      'Designed responsive UI/UX for better user experience.',

    ],
  },
  {
    title: 'Task Management app',
    date: 'Dec 2025',
    bullets: [
      'Developed a task management app',
      'Developed a task management web application using HTML, CSS, JavaScript, and Bootstrap.',
      'Implemented CRUD operations for task management.',
      'Designed a responsive and user-friendly interface.',
    ],
  },
  
  {
    title: 'Telegram Chatbot (Automation Bot)',
    date: 'Nov 2025',
    bullets: [
      'Developed a Telegram chatbot using Python and the Telegram Bot API.',
      'Configured and managed the bot through BotFather on Telegram.',
      'Implemented command-based interactions such as /start and /help.',
      'Handled asynchronous message processing for real-time interaction.',
    ],
  },
  {
    title: 'E-commerce Website – PayNow (Web Application)',
    date: 'Oct 2025',
    bullets: [
      'Developed an e-commerce web application using HTML, CSS, and JavaScript.',
      'Styled layout with CSS for a clean and modern UI design.',
      'Structured content using semantic HTML elements.',
      'Focused on responsive design for different screen sizes.',
    ],
  },
  {
    title: 'Leave Management App (UI/UX Design)',
    date: 'Feb 2025',
    bullets: [
      'Designed a leave management application using Figma.',
      'Created user flows and wireframes for the application.',
      'Focused on intuitive UI/UX design principles.',
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


