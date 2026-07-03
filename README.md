# CoreForge Studio - Premium Digital Agency Web Platform

CoreForge Studio is a newly launched, high-performance web design and development agency. This repository contains the complete custom-coded React application built to establish a premium digital presence, demonstrate front-end capabilities, and secure early scoping partnerships.

## 🚀 Key Features

* **Cinematic Interaction Design**: A dark-theme glassmorphic interface styled with custom CSS layout tokens and a hardware-accelerated interactive canvas particle network.
* **Featured Concept Projects**: 10 comprehensive showcase prototypes (Restaurant menu, Real Estate, Fitness, Travel, Legal, Medical, and Creative Portfolios) with detailed scoping objectives, design approaches, and expected outcomes.
* **Bespoke Service Catalog**: 20 specialized cards (from UI/UX Figma drafting to custom database app scaling) specifying ideal audiences, timelines, and pricing estimates.
* **Multi-Currency System**: A custom globe dropdown in the header that converts all pricing metrics across the site between **INR (₹ - Default)**, **USD ($)**, **EUR (€)**, **GBP (£)**, and **AED (د.إ)**, persisting choices via `localStorage`.
* **Premium Custom Selection Dropdowns**: Completely replaces native browser select popups with custom glassmorphic React components featuring rotating chevrons and glowing neon hover/focus rings.
* **Full-Page Vertical Timeline**: An alternating vertical timeline mapping out our 10-stage development process from Discovery Call to Post-launch Support.
* **Performance Tuning**: Zero heavy template builders or bloated code. Reusable React components styled in Vanilla CSS for responsive loading performance.

---

## 🛠️ Technology Stack

* **Frontend Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/) (Fast HMR development environment)
* **Animation & Interaction**: [GSAP](https://gsap.com/) + [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Effects**: [Canvas Confetti](https://github.com/catdad/canvas-confetti)
* **Smooth Scroll**: [Lenis Scroll](https://github.com/darkroomengineering/lenis)

---

## 💻 Local Development Setup

To run the project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 1. Install Dependencies
Clone the repository, open a terminal in the folder, and run:
```bash
npm install
```

### 2. Start the Local Server
Launch the local Vite development server:
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser to view the live site.

### 3. Build for Production
To generate a compiled, optimized, and minified production bundle in the `/dist` folder:
```bash
npm run build
```

---

## 🌐 Deployment
This project is fully ready for one-click deployment on global CDN platforms:
* **Vercel**: Import the GitHub repository directly and select the default Vite build preset.
* **Netlify**: Set the build command to `npm run build` and the publish directory to `dist`.
