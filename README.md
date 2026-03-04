# 🚀 Kavali Pavan — Portfolio

A premium, production-ready portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- ⚡ Next.js 15 App Router + TypeScript
- 🎨 Dark / Light theme toggle (next-themes)
- 🌀 Scroll-triggered animations (Framer Motion)
- ⌨️ Typewriter effect (custom hook)
- 📱 Fully responsive (mobile-first)
- 🔝 Sticky blur navbar with active section tracking
- 📊 Scroll progress indicator
- 🖱️ Custom animated cursor (desktop)
- 💌 Contact form with success state
- ⬆️ Back-to-top button
- 🎭 Loading screen animation

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # CSS variables, design system
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Loader.tsx
│   │   ├── Cursor.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── BackToTop.tsx
│   │   ├── SectionHeader.tsx
│   │   └── ThemeProvider.tsx
│   └── sections/        # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── TechStack.tsx
│       ├── Projects.tsx
│       ├── Experience.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── hooks/
│   ├── useTypewriter.ts
│   └── useScrollReveal.ts
└── lib/
    ├── data.ts          # ← Edit all your content here
    └── utils.ts
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

## ✏️ Customization

All content is in **`src/lib/data.ts`** — just replace the dummy values:

- `PERSONAL` — name, bio, email, social links, CV URL
- `STATS` — hero stats (years, projects, stacks)
- `TYPED_PHRASES` — typewriter cycling phrases
- `SKILLS` — skill categories and pills
- `TECH_STACK` — tech logos grid
- `PROJECTS` — project cards (add real GitHub/demo links)
- `EXPERIENCE` — work history timeline

## 🎨 Theming

CSS variables in `globals.css` control the full design system. Swap colors by editing:
- `--accent` — primary color (default: #6c63ff)
- `--accent-coral` — secondary (default: #ff6b6b)
- `--accent-teal` — tertiary (default: #00d9c0)


Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.
