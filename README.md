<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# DevPortfolio

A modern personal portfolio website built with React, TypeScript, Tailwind CSS v4, and Motion.

## Overview

This portfolio includes:
- Sticky navigation with active section tracking while scrolling
- Light and dark mode with saved user preference (`localStorage`)
- Hero, About, Skills, Experience, Projects, and Contact sections
- Animated skill cards with real technology logos
- Fully responsive layout for desktop and mobile

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (`motion/react`) for animations
- Lucide React for icons

## Project Structure

```text
devportfolio/
|- src/
|  |- App.tsx        # Main page UI and all sections
|  |- main.tsx       # React app entry point
|  `- index.css      # Global styles, theme variables, animations
|- index.html
|- package.json
`- README.md
```

## Key Features In Code

### 1. Theme System (Light/Dark)
- `isDarkMode` state controls current mode
- Preference is loaded from `localStorage` (`theme`)
- If no saved value, it uses system preference via `prefers-color-scheme`
- `.dark` class is applied to `<html>` for class-based dark styling

### 2. Active Menu Tracking on Scroll
- Section IDs: `home`, `about`, `skills`, `experience`, `projects`, `contact`
- On scroll/resize, the app calculates which section is currently active
- Active menu item gets highlighted and `aria-current="page"` for accessibility

### 3. Skills Section
- Skills are defined in data arrays in `App.tsx`:
  - `frontendSkills`
  - `backendSkills`
- Each card includes:
  - Logo image (`iconUrl`)
  - Skill name
  - Animated progress bar

### 4. UI Animation
- Intro animations use `motion`
- Skills progress bars animate when scrolled into view
- Additional custom keyframes in `index.css` for orbit/floating effects

## How To Clone And Use

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
npm run dev
```

Open: `http://localhost:3000`

## Available Scripts

```bash
npm run dev      # Start local development server
npm run build    # Build production files
npm run preview  # Preview production build locally
npm run lint     # Type-check with TypeScript
```

## Customize This Portfolio

You can quickly customize:
- Personal text/content in `src/App.tsx`
- Skill lists and progress levels in `frontendSkills`/`backendSkills`
- Theme colors and font variables in `src/index.css`
- Social links, email, location, and project cards in `src/App.tsx`

## Git Workflow (Recommended)

### 1. Configure Git (first time only)
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 2. Create a branch
```bash
git checkout -b feature/<short-description>
```

### 3. Commit and push
```bash
git add .
git commit -m "feat: update portfolio section"
git push -u origin feature/<short-description>
```

### 4. Open Pull Request
Create a Pull Request from your branch into `main`.

## Useful Git Commands

```bash
git status
git diff
git log --oneline --graph --decorate --all
git branch
```
