export const projects = [
  {
    id: "python-quiz",
    title: "Python Quiz",
    shortDescription: "CLI quiz app with two-layer topic navigation, per-user JSON leaderboard, and randomized questions.",
    longDescription: "A command-line quiz application built in Python featuring a typewriter effect, two-layer topic and subtopic navigation, input validation, score tracking, and a JSON-based leaderboard that persists per user.",
    tags: ["Python", "CLI"],
    techStack: ["Python", "JSON"],
    demoVideo: null,
    screenshots: [
      '/screenshots/py-quiz/1.png',
      '/screenshots/py-quiz/2.png',
      '/screenshots/py-quiz/3.png',
    ],
    whatILearned: [
      "How to structure a CLI app with multiple navigation layers",
      "File I/O with JSON for persistent leaderboard data",
      "Input validation and handling edge cases gracefully",
    ],
    githubUrl: "https://github.com/HashtagOne/Quiz-Something-Project",
    liveUrl: null
  },
  {
    id: "fractal",
    title: "Recursive Fractal",
    shortDescription: "Binary tree and Levy C curve visualizations built in Python using Turtle graphics.",
    longDescription: "A Python visualization project exploring recursion through fractal drawing. Uses the Turtle graphics library to render a recursive binary tree, demonstrating call stack depth and geometric turn balancing.",
    tags: ["Python", "Recursion"],
    techStack: ["Python", "Turtle"],
    demoVideo: null,
    screenshots: [
      '/screenshots/recursion/1.png',
      '/screenshots/recursion/2.png',
    ],
    whatILearned: [
      "How recursion builds on itself to create complex patterns",
      "Managing call stack depth and base cases",
      "Visualizing abstract concepts through graphics",
    ],
    githubUrl: "https://github.com/HashtagOne/Recursion-Test",
    liveUrl: null
  },
  {
    id: "js-quiz",
    title: "Quiz App — JS Rebuild",
    shortDescription: "Browser-based rebuild of the Python quiz with animated screen transitions and localStorage leaderboard.",
    longDescription: "A full rebuild of the Python quiz in JavaScript. Features animated screen transitions using async/await, topic and subtopic navigation, a leaderboard persisted in localStorage, and a letter drop-in animation on the heading.",
    tags: ["JavaScript", "HTML", "CSS"],
    techStack: ["JavaScript", "HTML", "CSS", "localStorage"],
    demoVideo: null,
    screenshots: [
      '/screenshots/js-quiz/1.png',
      '/screenshots/js-quiz/2.png',
      '/screenshots/js-quiz/3.png',
    ],
    whatILearned: [
      "Rebuilding a CLI app as a browser-based UI",
      "Managing async screen transitions with sleep functions",
      "localStorage for client-side data persistence",
    ],
    githubUrl: "https://github.com/HashtagOne/Quiz-Rebuilt-JS",
    liveUrl: "https://hashtagone.github.io/Quiz-Rebuilt-JS/"
  },
  {
    id: "weather-app",
    title: "Weather App",
    shortDescription: "Live weather data from the OpenWeather API with skeleton loading and error handling.",
    longDescription: "Fetches real-time weather data from the OpenWeather API. Features a skeleton loading screen with a minimum delay for smooth UX, Promise.all for parallel requests, and error handling for invalid cities.",
    tags: ["JavaScript", "REST API"],
    techStack: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
    demoVideo: null,
    screenshots: [
      '/screenshots/weather-app/1.png',
      '/screenshots/weather-app/2.png',
      '/screenshots/weather-app/3.png',
    ],
    whatILearned: [
      "Consuming a public REST API with fetch",
      "Promise.all for parallel async operations",
      "Skeleton loaders as a UX pattern for loading states",
    ],
    githubUrl: "https://github.com/HashtagOne/Weather-App",
    liveUrl: "https://hashtagone.github.io/Weather-App/"
  },
  {
    id: "notes-app",
    title: "Notes App",
    shortDescription: "Full stack CRUD app with a Flask REST API, SQLite database, dark mode, and search.",
    longDescription: "A full stack notes application with a Flask REST API backend and SQLite database. Features full CRUD functionality, dark mode toggle, search filtering, smooth animations, and is deployed on GitHub Pages with the API hosted on Render.",
    tags: ["Flask", "SQLite", "JavaScript"],
    techStack: ["Python", "Flask", "SQLite", "SQLAlchemy", "JavaScript", "HTML", "CSS"],
    demoVideo: null,
    screenshots: [
      '/screenshots/notes-app/1.png',
      '/screenshots/notes-app/2.png',
      '/screenshots/notes-app/3.png',
      '/screenshots/notes-app/4.png',
    ],
    whatILearned: [
      "Building and consuming a REST API end to end",
      "CORS configuration between a frontend and backend",
      "Deploying a Flask API to Render",
      "Managing async state without a framework",
    ],
    githubUrl: "https://github.com/HashtagOne/Notes-App",
    liveUrl: "https://hashtagone.github.io/Notes-App/"
  },
  {
    id: "kanban-board",
    title: "Kanban Board",
    shortDescription: "Drag and drop board using the HTML Drag and Drop API with editable columns and localStorage.",
    longDescription: "A frontend Kanban board implementing the HTML native Drag and Drop API. Features editable column titles, card management with tags and notes, dark mode, localStorage persistence, and polished animations including a custom drag ghost image.",
    tags: ["JavaScript", "Drag & Drop"],
    techStack: ["JavaScript", "HTML", "CSS", "localStorage"],
    demoVideo: null,
    screenshots: [
      '/screenshots/kanban-board/1.png',
      '/screenshots/kanban-board/2.png',
      '/screenshots/kanban-board/3.png',
      '/screenshots/kanban-board/4.png',
      '/screenshots/kanban-board/5.png',
    ],
    whatILearned: [
      "The HTML native Drag and Drop API",
      "Creating custom drag ghost images",
      "Managing complex state across multiple columns",
    ],
    githubUrl: "https://github.com/HashtagOne/Kanban-Board",
    liveUrl: "https://hashtagone.github.io/Kanban-Board/"
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    shortDescription: "Daily habit tracking with streaks, progress bars, color-coded categories, and localStorage.",
    longDescription: "A daily habit tracking app with color-coded categories, streak counters, per-category progress bars, and a confirmation modal before deletion. Dark mode persists via localStorage. Smooth animations throughout including staggered load, pop-in on create, and pop-out on delete.",
    tags: ["JavaScript", "localStorage"],
    techStack: ["JavaScript", "HTML", "CSS", "localStorage"],
    demoVideo: null,
    screenshots: [
      '/screenshots/habit-tracker/1.png',
      '/screenshots/habit-tracker/2.png',
      '/screenshots/habit-tracker/3.png',
      '/screenshots/habit-tracker/4.png',
      '/screenshots/habit-tracker/5.png',
    ],
    whatILearned: [
      "Managing nested application state as a single JS object",
      "Why storing dates instead of booleans unlocks streak tracking",
      "How animation conflicts arise and how to resolve them",
      "The tradeoff between full re-renders and direct DOM updates",
    ],
    githubUrl: "https://github.com/HashtagOne/Habit-Tracker",
    liveUrl: "https://hashtagone.github.io/Habit-Tracker/"
  }
]