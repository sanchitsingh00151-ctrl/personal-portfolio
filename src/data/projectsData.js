// Project data array - 100% frontend data store grouped by ranks (S, A/B, C/D)
export const projectsData = [
  // --- S-RANK MISSIONS ---
  {
    id: "sportify",
    name: "Sportify",
    rank: "S-RANK",
    group: "S",
    shortDescription: "Sports talent assessment and performance tracking platform.",
    fullDescription: "A comprehensive platform designed to evaluate young athletes using standardized athletic metrics, AI skill analytics, and progress reporting.",
    problem: "Scouts and coaches lack a unified data-driven platform to track grassroots athletic talent across regional tournaments.",
    approach: "Built a responsive web portal with interactive performance dashboards, talent ranking cards, and automated metrics calculation.",
    technologies: ["React", "JavaScript", "CSS3", "Chart.js"],
    status: "MISSION COMPLETE",
    github: "https://github.com/sanchitsingh/sportify",
    demo: "#"
  },
  {
    id: "shinobi-archive",
    name: "Shinobi Mission System",
    rank: "S-RANK",
    group: "S",
    shortDescription: "Developer portfolio disguised as a Shinobi Mission command center.",
    fullDescription: "A high-performance personal portfolio built with React Router, custom canvas animations, and a Naruto-inspired mission ranking system.",
    problem: "Standard developer portfolios often look generic and fail to create a memorable impression during recruiter code reviews.",
    approach: "Designed a dark crimson UI with Minato's Flying Thunder God kunai navigation transition and rank-based mission showcase cards.",
    technologies: ["React.js", "React Router", "HTML5 Canvas", "CSS Modules"],
    status: "MISSION ACTIVE",
    github: "https://github.com/sanchitsingh/shinobi-portfolio",
    demo: "#"
  },

  // --- A-RANK & B-RANK MISSIONS ---
  {
    id: "data-analyzer",
    name: "DataVision Analytics",
    rank: "A-RANK",
    group: "AB",
    shortDescription: "Interactive dataset exploration and statistical visualization tool.",
    fullDescription: "A browser-based data science tool that parses CSV datasets, calculates key statistical metrics, and renders instant exploratory plots.",
    problem: "Students and researchers need a quick zero-setup tool to preview data distributions without opening heavy notebook environments.",
    approach: "Leveraged client-side JavaScript algorithms for instant data aggregation and responsive SVG visualization.",
    technologies: ["Python", "JavaScript", "React", "D3.js"],
    status: "MISSION COMPLETE",
    github: "https://github.com/sanchitsingh/datavision",
    demo: "#"
  },
  {
    id: "task-scroll",
    name: "Chakra Task Scroll",
    rank: "A-RANK",
    group: "AB",
    shortDescription: "Kanban task manager with priority scrolls and state persistence.",
    fullDescription: "A productivity app featuring drag-and-drop mission cards, deadline tracking, category tags, and local storage state persistence.",
    problem: "Managing personal developer tasks across multiple coursework projects requires a fast, low-friction task tracking tool.",
    approach: "Implemented modular React components with custom hooks for local storage synchronization and smooth UI transitions.",
    technologies: ["React.js", "JavaScript", "CSS Flexbox/Grid"],
    status: "MISSION COMPLETE",
    github: "https://github.com/sanchitsingh/task-scroll",
    demo: "#"
  },
  {
    id: "algo-visualizer",
    name: "Algorithm Training Grounds",
    rank: "B-RANK",
    group: "AB",
    shortDescription: "Interactive visualizer for Sorting and Pathfinding algorithms.",
    fullDescription: "An educational visualizer that animates QuickSort, MergeSort, Dijkstra's algorithm, and A* search step-by-step with speed controls.",
    problem: "Understanding spatial graph algorithms and recursion can be difficult without real-time visual step execution.",
    approach: "Created a frame-by-frame state engine in JavaScript rendering dynamic array bars and grid nodes with customizable execution delays.",
    technologies: ["C++", "JavaScript", "HTML5 Canvas", "CSS3"],
    status: "MISSION COMPLETE",
    github: "https://github.com/sanchitsingh/algo-visualizer",
    demo: "#"
  },

  // --- C-RANK & D-RANK MISSIONS ---
  {
    id: "code-snippet-vault",
    name: "Ninja Code Vault",
    rank: "C-RANK",
    group: "CD",
    shortDescription: "Minimalist code snippet store and syntax highlighter.",
    fullDescription: "A lightweight snippet manager allowing developers to bookmark, tag, and quickly copy reusable code blocks and utility functions.",
    problem: "Developers frequently lose time re-searching for common boilerplate snippets across past projects.",
    approach: "Structured a tag-filtered searchable grid with instant clipboard copying and dark mode syntax highlight theme.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    status: "MISSION COMPLETE",
    github: "https://github.com/sanchitsingh/code-vault",
    demo: "#"
  },
  {
    id: "kunai-form-validator",
    name: "Form Validator Jutsu",
    rank: "D-RANK",
    group: "CD",
    shortDescription: "Real-time client-side form validation utility.",
    fullDescription: "A lightweight JavaScript form validation module providing instant user feedback, regex rule verification, and accessible error prompts.",
    problem: "Simple contact forms often allow malformed inputs without real-time client validation.",
    approach: "Created event-driven input verification rules using pure vanilla JavaScript regex matchers.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    status: "TRAINING DRILL",
    github: "https://github.com/sanchitsingh/form-validator",
    demo: "#"
  },
  {
    id: "scroll-calculator",
    name: "Chakra Calculator",
    rank: "D-RANK",
    group: "CD",
    shortDescription: "Minimalist expression evaluation widget.",
    fullDescription: "A compact browser calculator widget supporting standard arithmetic operations, keyboard inputs, and operation history.",
    problem: "Quick mathematical calculations during development require a lightweight zero-dependency tool.",
    approach: "Built clean grid layout with keyboard event listeners and stateful memory buffer.",
    technologies: ["JavaScript", "CSS Grid", "HTML5"],
    status: "TRAINING DRILL",
    github: "https://github.com/sanchitsingh/scroll-calc",
    demo: "#"
  }
];

export const skillsData = {
  programming: [
    { name: "C", level: "Intermediate" },
    { name: "C++", level: "Proficient" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Python", level: "Proficient" }
  ],
  webDev: [
    { name: "HTML5", level: "Expert" },
    { name: "CSS3", level: "Advanced" },
    { name: "React.js", level: "Proficient" },
    { name: "Vite", level: "Proficient" }
  ],
  tools: [
    { name: "Git", level: "Proficient" },
    { name: "GitHub", level: "Proficient" },
    { name: "VS Code", level: "Expert" },
    { name: "Command Line", level: "Proficient" }
  ]
};

export const achievementsData = [
  {
    year: "2025",
    title: "Hackathon Finalist — Shinobi Hackfest",
    description: "Built a real-time talent analytics platform in 24 hours and won 2nd place among 50+ university teams."
  },
  {
    year: "2024",
    title: "Lead Web Developer — Tech Society",
    description: "Managed event websites, conducted frontend workshops for 100+ students, and mentored junior developers."
  },
  {
    year: "2024",
    title: "CSE Data Science Honors Candidate",
    description: "Maintained top academic standing while specializing in Data Structures, Algorithms, and Machine Learning basics."
  }
];
