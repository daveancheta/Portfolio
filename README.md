# Portfolio Website

A modern, interactive portfolio website built with Next.js, featuring smooth animations, dark mode support, and an AI-powered chat agent.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations and transitions
- **Dark Mode**: Full dark/light theme support with system preference detection
- **AI Chat Agent**: Integrated Google Gemini AI agent for interactive conversations
- **Project Showcase**: Display of recent projects with detailed descriptions and tech stacks
- **Tech Stack Visualization**: Interactive tech stack section
- **Smooth Animations**: Powered by Framer Motion
- **Custom Cursor**: Smooth cursor effects for enhanced interactivity
- **Animated Background**: Dynamic squares animation with customizable patterns

## 🛠️ Tech Stack

### Core
- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **next-themes** - Theme management

### Animations & Effects
- **Framer Motion** - Animation library
- **Rough Notation** - Hand-drawn style annotations

### AI & 3D
- **Google Generative AI** - Gemini integration
- **Three.js** - 3D graphics library
- **OGL** - Minimal WebGL library

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/daveancheta/Portfolio
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (if needed):
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── profile/           # Profile images
│   └── *.png              # Project images
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── hooks/         # Custom hooks
│   ├── components/        # React components
│   │   ├── common/        # Common sections
│   │   │   ├── footer.tsx
│   │   │   ├── header.tsx
│   │   │   ├── hero-section.tsx
│   │   │   ├── project-section.tsx
│   │   │   └── tech-stack-section.tsx
│   │   ├── gemini/        # AI agent components
│   │   ├── ui/            # UI components
│   │   └── ...
│   └── lib/               # Utility functions
└── ...
```

## 🎨 Key Components

- **HeroSection**: Main landing section with animated terminal and social links
- **ProjectSection**: Showcase of recent projects
- **TechStackSection**: Interactive tech stack visualization
- **AIAgent**: Google Gemini-powered chat interface
- **Squares**: Animated background component
- **SmoothCursor**: Custom cursor effects

## 🌐 Projects Featured

- **ReQuake** - Real-time earthquake detection map
- **Grindax** - Movie collection management app
- **CarVibe** - Car rental system
- **SitterLy** - Babysitter booking platform

## 📄 License

See [LICENSE](LICENSE) file for details.

## 👤 Author

Heaven Dave Ancheta

---

Built with ❤️ using Next.js and TypeScript
