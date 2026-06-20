# CS Resource Hub — Complete Setup & Project Guide

> Built by **nonydev**  
> A free, student-made guide to navigating CS1–CS4 and IT1–IT4

---

## Table of Contents

1. [What Is This Project?](#1-what-is-this-project)
2. [What the Site Looks Like](#2-what-the-site-looks-like)
3. [Tech Stack — What We're Using and Why](#3-tech-stack)
4. [How to Run This Project Locally](#4-how-to-run-locally)
5. [Project Structure — Every File Explained](#5-project-structure)
6. [How Navigation Works (No React Router)](#6-how-navigation-works)
7. [How to Edit Content](#7-how-to-edit-content)
8. [How to Add a New Course](#8-how-to-add-a-new-course)
9. [Deployment — Putting It Online](#9-deployment)
10. [Troubleshooting Common Issues](#10-troubleshooting)

---

## 1. What Is This Project?

**CS Resource Hub** is a static website that helps university students navigate their
Computer Science (CS) and Information Technology (IT) degree programmes.

It covers:

| Programme | Years Covered |
|-----------|--------------|
| Computer Science | CS1, CS2, CS3, CS4 |
| Information Technology | IT1, IT2, IT3, IT4 |

For each course year, students get:
- A description of what to expect
- Semester 1 topics and semester 2 topics
- Curated free resources (courses, books, YouTube, practice sites)
- Tips from experience

The site has **4 pages**:
- **Home** — landing page with an overview
- **Courses** — browse all CS and IT years
- **About** — about the creator (nonydev) and the project
- **Donate** — support the hub financially

---

## 2. What the Site Looks Like

The design theme is **dark and coding-oriented**:

- Very dark navy/black background (`slate-950` from Tailwind)
- Neon green accents (`emerald-400`)
- Purple secondary accents (`violet-400`)
- Monospace font (`JetBrains Mono`) for code elements
- Each course year has its own gradient colour
- Fully responsive — works on mobile and desktop

---

## 3. Tech Stack

> **Tech stack** = the collection of tools used to build the project.

| Tool | Version | What it does |
|------|---------|--------------|
| **React** | 19 | The JavaScript library used to build the UI. Instead of writing raw HTML, you write components (reusable UI pieces) in `.jsx` files. |
| **Vite** | 8 | The development server and build tool. It starts your local server instantly and compiles the code for production. |
| **Tailwind CSS** | 4 | A CSS framework. Instead of writing a separate `.css` file for every component, you apply styles directly in JSX using utility classes like `bg-slate-900`, `text-emerald-400`, `rounded-xl`. |
| **JavaScript (JSX)** | ES2022+ | The programming language. JSX is JavaScript + HTML-like syntax that React uses. |
| **Node.js / npm** | Latest LTS | The JavaScript runtime used to install packages and run the dev server. |

### Why Vite over Create React App?

Vite is significantly faster. Hot Module Replacement (HMR) — the feature that updates your browser instantly when you save a file — is near-instant with Vite, compared to several seconds with older tools.

### Why Tailwind v4?

Tailwind CSS v4 is configured entirely through CSS (`@import "tailwindcss"` in `index.css`) rather than a `tailwind.config.js` file. This makes setup simpler and faster.

---

## 4. How to Run Locally

### Prerequisites

You need **Node.js** installed. Download it from [nodejs.org](https://nodejs.org/) (pick the LTS version).

Check if it's installed by running in your terminal:

```bash
node --version   # Should print something like v20.x.x
npm --version    # Should print something like 10.x.x
```

### Steps

**Step 1: Clone or download the project**

```bash
git clone <repository-url>
cd csresourcehub
```

**Step 2: Install dependencies**

```bash
npm install
```

This reads `package.json` and downloads all the required packages into a `node_modules/` folder.
You only need to do this once (or again after someone updates `package.json`).

**Step 3: Start the development server**

```bash
npm run dev
```

You'll see output like:

```
  VITE v8.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

Open `http://localhost:5173/` in your browser. The page updates automatically
every time you save a file — no manual refresh needed.

**Step 4: Stop the server**

Press `Ctrl + C` in your terminal.

### Other Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start the dev server (for development) |
| `npm run build` | Compile the project for production (output goes to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check for code style errors using ESLint |

---

## 5. Project Structure

Here is every file and folder in the project, explained:

```
csresourcehub/
│
├── public/                     # Static files served as-is (not processed by Vite)
│   ├── favicon.svg             # The small icon shown in the browser tab
│   └── icons.svg               # SVG icon sprite (not used in current version)
│
├── src/                        # All source code lives here
│   │
│   ├── data/
│   │   └── courses.js          # ⭐ ALL course content is here.
│   │                           # Edit this file to change topics, resources, tips.
│   │
│   ├── components/             # Reusable UI components used across multiple pages
│   │   ├── Navbar.jsx          # Top navigation bar (logo + page links)
│   │   ├── Footer.jsx          # Bottom footer (links + copyright)
│   │   └── CourseCard.jsx      # A single course preview card shown in the grid
│   │
│   ├── pages/                  # One file per page of the site
│   │   ├── Home.jsx            # Landing page
│   │   ├── Courses.jsx         # Browse all courses (with CS/IT tab switcher)
│   │   ├── CoursePage.jsx      # Detailed view for a single course
│   │   ├── About.jsx           # About nonydev and the project
│   │   └── Donate.jsx          # Donations / support page
│   │
│   ├── App.jsx                 # ⭐ Root component — handles navigation & page rendering
│   ├── main.jsx                # Entry point — mounts the App into the HTML
│   ├── App.css                 # (empty — styling is done with Tailwind in JSX)
│   └── index.css               # Global CSS: Tailwind import, font, scrollbar, body reset
│
├── index.html                  # The single HTML file. React injects everything into <div id="root">
├── vite.config.js              # Vite configuration (React plugin + Tailwind plugin)
├── package.json                # Lists all dependencies and npm scripts
├── package-lock.json           # Exact versions of all installed packages (do not edit manually)
├── eslint.config.js            # ESLint rules for code quality
├── .gitignore                  # Tells Git which files/folders to ignore (e.g. node_modules)
├── SETUP.md                    # This file — project documentation
└── README.md                   # Default Vite README (kept for reference)
```

### The `src/` folder in detail

#### `src/data/courses.js`
This is the most important file to understand. It exports a `courses` object with two arrays:
- `courses.cs` — array of 4 CS course objects (cs1, cs2, cs3, cs4)
- `courses.it` — array of 4 IT course objects (it1, it2, it3, it4)

Each course object looks like this:

```js
{
  id: 'cs1',           // Unique ID used internally
  code: 'CS 1',        // Displayed as the course code
  shortCode: 'CS1',    // Short version for small UI elements
  name: 'Introduction to Computer Science',
  year: 1,
  gradient: 'from-emerald-500 to-teal-500', // Tailwind gradient for the card header
  // ... more colour classes for consistent theming

  description: 'A paragraph explaining what this year is about.',

  semester1: {
    title: 'Semester 1 — Foundations of Programming',
    overview: 'Brief overview of what semester 1 covers.',
    topics: [
      'Topic one',
      'Topic two',
      // ...
    ],
    resources: [
      {
        name: 'CS50x — Harvard University',
        url: 'https://cs50.harvard.edu/x/',
        type: 'Free Course',   // Used to colour the badge
        desc: 'Short description of the resource.',
      },
      // ...
    ],
  },

  semester2: { /* same structure as semester1 */ },

  benefits: 'A paragraph on why this year matters for their career.',
  tips: [
    'Tip one.',
    'Tip two.',
    // ...
  ],
}
```

---

## 6. How Navigation Works

This project does **not** use React Router or any URL routing library.

Instead, we use a simple pattern called **state-based routing**:

```jsx
// In App.jsx:
const [currentPage, setCurrentPage] = useState('home')
const [selectedCourse, setSelectedCourse] = useState(null)

const navigate = (page, course = null) => {
  setCurrentPage(page)      // Change the current page
  setSelectedCourse(course) // Optionally store which course to show
  window.scrollTo({ top: 0, behavior: 'smooth' }) // Scroll to top
}
```

Then, based on `currentPage`, we render the right page component:

```jsx
switch (currentPage) {
  case 'home':         return <Home onNavigate={navigate} />
  case 'courses':      return <Courses ... />
  case 'course-detail': return <CoursePage ... />
  case 'about':        return <About />
  case 'donate':       return <Donate />
}
```

The `navigate` function is passed down as a prop (`onNavigate`) to every page
and component that needs to trigger navigation.

**Limitation:** Because we're not using real URL routing, the browser's back button
won't work between pages and refreshing will always return to the home page.
For a static site like this, that's acceptable. If you need URL-based navigation,
add `react-router-dom`.

---

## 7. How to Edit Content

### Change a course description, topics, or resources

Open `src/data/courses.js` and find the course you want to edit.
All content is stored as plain JavaScript strings and arrays — no database needed.

Example: to add a new resource to CS1 Semester 1:

```js
// In courses.js, inside cs1.semester1.resources array:
{
  name: 'Your Resource Name',
  url: 'https://example.com',
  type: 'Free Course',   // See TYPE_STYLES in CoursePage.jsx for valid types
  desc: 'A short description of this resource.',
},
```

### Change the donation links

Open `src/pages/Donate.jsx` and find the `METHODS` array.
Replace the `url: '#'` values with your real payment links.

### Change the About page content

Open `src/pages/About.jsx` and edit the `OFFERINGS` and `TIMELINE` arrays,
as well as the profile card text.

---

## 8. How to Add a New Course

1. Open `src/data/courses.js`
2. Add a new object to either `courses.cs` or `courses.it` following the same structure
3. Pick a unique `id`, `gradient`, and colour classes (use a different colour from existing courses)
4. That's it — the Courses page and Home page will automatically show the new card

---

## 9. Deployment

### Build for production

```bash
npm run build
```

This creates a `dist/` folder with optimised HTML, CSS, and JavaScript files.

### Deploy to Vercel (recommended — free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click "Add New Project" and import your repository
4. Leave all settings as default — Vercel auto-detects Vite
5. Click Deploy

Your site will be live in under 60 seconds with a free `.vercel.app` URL.

### Deploy to Netlify (also free)

1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com) and sign up
3. Drag and drop the `dist/` folder onto the Netlify dashboard
4. Done — your site is live

---

## 10. Troubleshooting

### "npm: command not found"
Node.js is not installed. Download it from [nodejs.org](https://nodejs.org/).

### Port 5173 is already in use
Another process is using the port. Either kill that process or run Vite on a different port:
```bash
npm run dev -- --port 3000
```

### "Module not found" error
You may be missing a package. Run `npm install` again.

### Tailwind classes aren't applying
Make sure `index.css` has `@import "tailwindcss";` at the top and that
`vite.config.js` includes `tailwindcss()` in the plugins array.

### The page looks broken / no styles
Clear your browser cache (`Ctrl+Shift+R`) and restart the dev server.

---

## Project Goals Summary

```
CSResourceHub — from nonydev
════════════════════════════

✓ Home page         — hero, feature highlights, course previews
✓ Courses page      — CS / IT tab switcher, full course grid
✓ Course detail     — semester tabs, topics, resources, tips
✓ About page        — nonydev profile, mission, tech stack
✓ Donate page       — support options, non-monetary alternatives

Design: dark coding theme, green/purple accents, monospace fonts
Stack:  React 19 + Vite 8 + Tailwind CSS 4 (no external routing)
Status: complete static site, ready for deployment
```

---

*Built with dedication by nonydev · Knowledge is free*
