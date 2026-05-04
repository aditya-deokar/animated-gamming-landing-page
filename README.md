# Animated Gaming Landing Page 🎮

<img src="https://github.com/user-attachments/assets/d2ad8371-d665-42c5-95ed-05eddc55bac2" alt="Animated Gaming Landing Page Preview" width="100%" />

> **GSAP FLIP — Making items fly across the screen. Smooth. Fast. Impactful.**

A visually stunning, fully animated gaming landing page built with **React**, **GSAP**, and **Tailwind CSS**. The site showcases smooth scroll-triggered animations, clip-path transitions, and interactive UI components inspired by next-gen gaming aesthetics.

🔗 **Live Demo**: [Gaming Website](https://gammingwensite.netlify.app/)

---

## ✨ Features

- **🎬 GSAP Animations** — Scroll-triggered animations, GSAP FLIP transitions, and timeline-based sequences for a cinematic experience.
- **🦸 Hero Section** — Full-screen hero with animated title text and a "Watch Trailer" CTA button.
- **🗂️ Features Section** — Showcase of individual game/product cards (Radint, Zigma, Nexus, Azul) with hover effects and rich visuals.
- **📖 Story Section** — Immersive narrative section with clip-path scroll animations.
- **📬 Contact Section** — Clean contact area encouraging users to join the gaming community.
- **🧭 Animated Navbar** — Sticky navigation bar with smooth scroll-based show/hide behavior.
- **📱 Mobile-Friendly** — Fully responsive design optimized for all screen sizes.
- **⚡ Vite-Powered** — Blazing-fast development and build pipeline.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI component library |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [GSAP](https://gsap.com/) + [@gsap/react](https://gsap.com/react/) | Animations & scroll effects |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first responsive styling |
| [react-icons](https://react-icons.github.io/react-icons/) | Icon components |
| [react-use](https://github.com/streamich/react-use) | Useful React hooks |
| [Netlify](https://www.netlify.com/) | Hosting & continuous deployment |

---

## 📂 Project Structure

```plaintext
animated-gamming-landing-page/
├── public/                  # Static assets (images, videos, icons)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky animated navigation bar
│   │   ├── Hero.jsx         # Full-screen hero section with GSAP animations
│   │   ├── Features.jsx     # Game/product feature cards section
│   │   ├── Story.jsx        # Narrative story section with clip-path effects
│   │   ├── About.jsx        # About section
│   │   ├── Contact.jsx      # Contact / join community section
│   │   ├── Footer.jsx       # Site footer
│   │   ├── AnimatedTitle.jsx# Reusable animated title component
│   │   └── Button.jsx       # Reusable button component
│   ├── App.jsx              # Root app component — assembles all sections
│   ├── index.css            # Global styles & Tailwind CSS directives
│   └── main.jsx             # React app entry point
├── index.html               # HTML shell
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── eslint.config.js         # ESLint configuration
├── vite.config.js           # Vite build configuration
├── package.json             # Dependencies & npm scripts
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/aditya-deokar/animated-gamming-landing-page.git

# 2. Navigate into the project directory
cd animated-gamming-landing-page

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Create an optimized production build in `/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |
| `npm run deploy` | Build and deploy to GitHub Pages via `gh-pages` |

---

## 🎨 Animations Overview

This project leverages **GSAP** (GreenSock Animation Platform) for all major animations:

- **GSAP FLIP** — Smoothly animates elements as they change position/size across the screen.
- **ScrollTrigger** — Triggers animations based on scroll position for an immersive storytelling experience.
- **Clip-path Transitions** — Reveals sections with stylized geometric clip-path wipe effects.
- **Timeline Sequences** — Coordinated entrance animations for hero text, images, and buttons.
- **Navbar Auto-hide** — The navbar intelligently hides on scroll-down and reappears on scroll-up.

---

## 🌐 Deployment

The site is continuously deployed on **Netlify** from the main branch.

To deploy manually to **GitHub Pages**, run:

```bash
npm run deploy
```

This command builds the project and publishes the `/dist` folder to the `gh-pages` branch.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by <a href="https://github.com/aditya-deokar">Aditya Deokar</a></p>

