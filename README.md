<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# DevPortfolio

A modern, interactive personal portfolio website built with React, TypeScript, Tailwind CSS v4, and Motion. Features an animated molecular background with responsive cursor interactions and a clean, professional design.

## ✨ Features

### 🎨 Visual Design
- **Animated Molecular Background** - Realistic atom particles with physics-based movement
- **Cursor Interaction** - Particles respond to mouse movement with magnetic attraction
- **Light/Dark Theme** - Seamless theme switching with localStorage persistence
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Motion-powered transitions and micro-interactions

### 🧭 Navigation & UX
- **Sticky Navigation** - Fixed header with active section tracking
- **Smooth Scrolling** - Animated scroll behavior between sections
- **Accessibility** - ARIA labels and semantic HTML structure
- **Performance Optimized** - Canvas-based rendering for smooth 60fps animations

### 📱 Sections
- **Hero Section** - Eye-catching landing with orbital skills display
- **About Section** - Personal introduction with statistics dashboard
- **Skills Section** - Frontend and backend skills with animated progress bars
- **Experience Section** - Professional journey timeline
- **Projects Section** - Featured projects gallery with hover effects
- **Contact Section** - Contact form and social links

## 🛠 Tech Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Motion (`motion/react`)** - Production-ready animations

### UI & Icons
- **Lucide React** - Beautiful, consistent icons
- **DevIcons** - Technology logos for skills section

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript Compiler** - Static type checking

## 📁 Project Structure

```text
devportfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.tsx   # Header navigation
│   │   ├── HeroSection.tsx  # Landing hero
│   │   ├── AboutSection.tsx # About & skills
│   │   ├── ExperienceSection.tsx # Work timeline
│   │   ├── ProjectsSection.tsx   # Portfolio gallery
│   │   ├── ContactSection.tsx    # Contact form
│   │   ├── Footer.tsx      # Site footer
│   │   ├── AnimatedBackground.tsx # Molecular animation
│   │   └── index.ts        # Component exports
│   ├── hooks/              # Custom React hooks
│   │   ├── useTheme.ts     # Theme management
│   │   └── useActiveSection.ts # Scroll tracking
│   ├── types/              # TypeScript definitions
│   │   └── index.ts        # Type interfaces
│   ├── utils/              # Utilities and data
│   │   └── data.ts         # Skills, projects, experience data
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # React entry point
│   └── index.css           # Global styles and themes
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🎯 Key Features Deep Dive

### 1. Animated Molecular Background
- **Canvas-based rendering** for optimal performance
- **30 colored atoms** representing different elements (O, N, H, C, S, P, Fe, He)
- **Physics simulation** with particle movement and wall bouncing
- **Cursor magnetic attraction** within 200px radius
- **Dynamic molecular bonds** between nearby particles
- **Glow effects** using canvas shadow rendering

### 2. Theme System
- **System preference detection** using `prefers-color-scheme`
- **LocalStorage persistence** for user choice
- **CSS class-based theming** with Tailwind dark mode
- **Smooth transitions** between theme changes

### 3. Component Architecture
- **Modular design** with separated concerns
- **Custom hooks** for reusable logic
- **TypeScript interfaces** for type safety
- **Barrel exports** for clean imports

### 4. Interactive Elements
- **Scroll-triggered animations** using Motion viewport detection
- **Hover states** on project cards and buttons
- **Form interactions** with focus states
- **Social links** with hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/devportfolio.git
cd devportfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization Guide

### Personal Information
Update your details in `src/utils/data.ts`:

```typescript
// Personal info
const personalInfo = {
  name: "Your Name",
  title: "Full-Stack Developer",
  email: "your.email@example.com",
  location: "Your City, Country"
};
```

### Skills & Technologies
Modify skill arrays in `src/utils/data.ts`:

```typescript
export const frontendSkills: Skill[] = [
  { name: 'React', level: 90, iconUrl: '...' },
  { name: 'TypeScript', level: 85, iconUrl: '...' },
  // Add more skills
];
```

### Projects
Update projects array in `src/utils/data.ts`:

```typescript
export const projects: Project[] = [
  {
    title: 'Your Project',
    tags: ['React', 'Node.js'],
    description: 'Project description...',
    image: 'path/to/image.jpg'
  }
];
```

### Theme Colors
Customize colors in `src/index.css`:

```css
:root {
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  /* Add more color variables */
}
```

### Animation Settings
Adjust background animation in `src/components/AnimatedBackground.tsx`:

```typescript
const particleCount = 30; // Number of atoms
const interactionRadius = 200; // Cursor attraction distance
```

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # TypeScript type checking
npm run clean    # Clean build artifacts
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build and deploy
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
# Build and deploy to gh-pages
npm run build
# Deploy dist/ folder to GitHub Pages
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Motion](https://motion.dev/) for beautiful animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Lucide](https://lucide.dev/) for beautiful icons
- [DevIcons](https://devicon.dev/) for technology logos

---

<div align="center">
  <p>✨ Built with passion and modern web technologies ✨</p>
  <p>🚀 Let's create something amazing together! 🚀</p>
</div>
