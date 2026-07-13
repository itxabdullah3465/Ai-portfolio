// Portfolio OS configuration and data registry
export const CONFIG = {
  profile: {
    name: "MUHAMMAD ABDULLAH",
    title: "AI Developer & Front-End Engineer",
    subtitle: "Portfolio OS v2.0",
    avatar: "/profile.jpg",
    bio: "Bachelor’s in Artificial Intelligence | AI Developer | Front-End Developer (React.js, JavaScript, Tailwind CSS) | Database Management | UI/UX Designer | Passionate",
    location: "Pakistan",
    email: "abdullah.dev@example.com",
    github: "itxabdullah3465", // Default GitHub username
    linkedin: "https://www.linkedin.com/in/muhammad-abdullah-dev", // LinkedIn URL
    resumeUrl: "#", // Link or path to resume PDF
  },
  weather: {
    defaultCity: "Lahore",
    defaultLat: "31.5497",
    defaultLon: "74.3436"
  },
  changelog: [
    {
      version: "2.0.0",
      date: "2026-07-01",
      features: [
        "Interactive Terminal CLI with 20+ commands and autocompletion",
        "Interactive Glassmorphic Window Manager (drag, resize, snap, minimize/maximize)",
        "GitHub API Integration with contribution calendar grid",
        "LinkedIn Professional Profile display",
        "Music Player with synthwave playlist and audio wave visualizer",
        "Scientific & Basic Mode Calculator",
        "Sticky Notes widget with auto-save to LocalStorage",
        "Project Analytics Dashboard using custom animated SVG charts",
        "Global Search Everything (Ctrl+F) and Desktop Notification Center"
      ],
      improvements: [
        "Enhanced animation rendering with smooth CSS variables and GPU acceleration",
        "Dynamic particle canvas background responsive to mouse movement",
        "Improved window snapping guides and window resizing algorithms"
      ],
      fixes: [
        "Resolved canvas resize lagging on ultra-wide screens",
        "Fixed cursor overlap in terminal line feeds",
        "Patched sound play state synchronizations"
      ]
    },
    {
      version: "1.0.0",
      date: "2025-12-15",
      features: [
        "Initial OS environment setup",
        "Basic file system mock",
        "Responsive grid alignment for desktop icons",
        "Start Menu app launchers"
      ]
    }
  ],
  skills: [
    { name: "Python / AI Dev", category: "Artificial Intelligence", level: 85, icon: "🧠" },
    { name: "Machine Learning & LLMs", category: "Artificial Intelligence", level: 80, icon: "🤖" },
    { name: "React.js / Next.js", category: "Front-End", level: 90, icon: "⚛️" },
    { name: "JavaScript (ES6+)", category: "Front-End", level: 90, icon: "⚡" },
    { name: "Tailwind CSS", category: "Front-End", level: 92, icon: "🌊" },
    { name: "HTML5 & CSS3", category: "Front-End", level: 100, icon: "🎨" },
    { name: "SQL & NoSQL Databases", category: "Database Management", level: 85, icon: "🗄️" },
    { name: "Figma (UI/UX)", category: "UI/UX Design", level: 88, icon: "📐" },
    { name: "Git & GitHub", category: "Tools", level: 88, icon: "🐙" }
  ],
  projects: [
    {
      id: "project-1",
      title: "Interactive Portfolio OS",
      description: "A premium interactive operating system replication built from scratch as a portfolio.",
      tech: ["HTML5", "CSS3", "JavaScript", "Vite", "Web Audio API"],
      stars: 124,
      url: "https://github.com/itxabdullah3465/portfolio-os",
      liveUrl: "https://melodious-concha-820245.netlify.app/",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&h=250&q=80",
      pinned: true
    },
    {
      id: "project-2",
      title: "Premium e-Commerce Platform",
      description: "Modern online shop front featuring shopping cart integrations, animations, and quick checkout.",
      tech: ["React", "JavaScript", "TailwindCSS", "Redux"],
      stars: 98,
      url: "https://github.com/itxabdullah3465/ecommerce-shop",
      liveUrl: "https://lovely-lolly-9d4c6c.netlify.app/",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d296e?auto=format&fit=crop&w=400&h=250&q=80",
      pinned: true
    },
    {
      id: "project-3",
      title: "Cryptocurrency Analytics Dashboard",
      description: "Real-time dashboard visualizing price action, market capitalization, and coin distribution stats.",
      tech: ["HTML5 Canvas", "JavaScript", "SVG Chart", "REST API"],
      stars: 87,
      url: "https://github.com/itxabdullah3465/crypto-tracker",
      liveUrl: "https://steady-belekoy-b981e5.netlify.app/",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=400&h=250&q=80",
      pinned: true
    },
    {
      id: "project-4",
      title: "Glassmorphic Web Editor",
      description: "A browser-based lightweight coding environment highlighting syntax with dynamic glass custom panels.",
      tech: ["JavaScript", "CSS Grid", "Code Highlight", "LocalStorage"],
      stars: 64,
      url: "https://github.com/itxabdullah3465/glass-editor",
      liveUrl: "https://scintillating-beijinho-f912e1.netlify.app/",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=400&h=250&q=80",
      pinned: true
    },
    {
      id: "project-5",
      title: "Interactive Music Player",
      description: "A gorgeous retro synthwave audio player featuring playlist selection and frequency bars.",
      tech: ["Web Audio API", "JavaScript", "CSS Variables", "Keyframes"],
      stars: 52,
      url: "https://github.com/itxabdullah3465/music-player",
      liveUrl: "https://delicate-sopapillas-0d7005.netlify.app/",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&h=250&q=80",
      pinned: false
    },
    {
      id: "project-6",
      title: "Notes & Task Organizer Workspace",
      description: "A drag-and-drop workflow planner with category tags, notes archiving, and dynamic listings.",
      tech: ["HTML5 Canvas", "Vite", "Vanilla JS", "JSON Sync"],
      stars: 48,
      url: "https://github.com/itxabdullah3465/task-workspace",
      liveUrl: "https://relaxed-croquembouche-56e970.netlify.app/",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&h=250&q=80",
      pinned: false
    }
  ],
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "InnovateTech Solutions",
      duration: "2024 - Present",
      bullets: [
        "Led a team of 4 developers to build a high-performance analytics platform using React and Web Workers, reducing page loads by 40%.",
        "Engineered a dynamic drag-and-drop dashboard builder utilizing CSS Grid and HTML5 drag APIs.",
        "Implemented standardized unit testing structures using Vitest, achieving 85% code coverage."
      ]
    },
    {
      role: "Frontend Developer",
      company: "PixelPerfect Labs",
      duration: "2022 - 2024",
      bullets: [
        "Developed responsive web apps and customized interactive dashboards for enterprise clients.",
        "Optimized bundles and styled components to improve Lighthouse performance scores from 65 to 95+.",
        "Collaborated closely with UI/UX designers to translate Figma frames into pixel-perfect CSS components."
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "National University of Computer and Emerging Sciences",
      duration: "2018 - 2022",
      details: "Specialized in Software Engineering and Human-Computer Interaction."
    }
  ],
  certificates: [
    {
      name: "Advanced React & Next.js Practitioner",
      issuer: "Udemy / Vercel Academy",
      date: "2024"
    },
    {
      name: "CSS Masterclass: Flexbox, Grid, and Animations",
      issuer: "Frontend Masters",
      date: "2023"
    },
    {
      name: "UI/UX Design Certification",
      issuer: "Google Career Certificates",
      date: "2022"
    }
  ],
  achievements: [
    { title: "First Place", event: "National Hackathon 2023", description: "Developed an AI-powered student aid portal in 48 hours." },
    { title: "Top Contributor", event: "Hacktoberfest 2024", description: "Merged 12 pull requests in various developer utility projects." }
  ],
  services: [
    { title: "Single Page App Development", description: "Building highly interactive React, Vue, or Vanilla JS applications." },
    { title: "UI/UX Design & Prototyping", description: "Designing interfaces in Figma and coding them into modular CSS." },
    { title: "Performance Optimization", description: "Auditing, refactoring, and optimizing slow websites for maximum Lighthouse scores." }
  ],
  musicList: [
    {
      title: "Resonance",
      artist: "Home (Synthwave)",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      title: "Sunset Chaser",
      artist: "Neon Driver",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      title: "Cyber City Light",
      artist: "Outrun 1984",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    }
  ]
};
