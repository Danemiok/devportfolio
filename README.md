# DevPortfolio

A personal portfolio website built with React, TypeScript, Tailwind CSS v4, and Motion.

<div align="center">
  <img width="1903" height="858" alt="HomePage Banner" src="./public/images/HomePage.png" />
</div>

## Features

- Animated molecular background
- Light and dark theme switching
- Smooth scroll-based navigation
- Responsive layout for desktop and mobile
- Contact section with mailto fallback

## Project Structure

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
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## Getting Started

```bash
git clone https://github.com/<your-username>/devportfolio.git
cd devportfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the portfolio.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run clean
```

## Notes

- `server.js` and `.env` have been removed.
- The contact form now opens the user’s email app through `mailto:`.
- The current app also uses a few extra source files outside the core tree above:
  - `src/components/ResumeSection.tsx`
  - `src/components/ScrollToTop.tsx`
  - `src/hooks/useTypingAnimation.ts`
