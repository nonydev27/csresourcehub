/**
 * App.jsx — Root component
 *
 * This is the entry point of the application. It:
 *   1. Tracks which page is currently visible (state-based routing)
 *   2. Renders the Navbar, the current page, and the Footer
 *
 * How navigation works:
 *   - There's no URL routing library (like React Router). Instead, we store
 *     the current page name in a `useState` variable called `currentPage`.
 *   - When the user clicks a nav link or a course card, we call `navigate()`
 *     which updates `currentPage`, and the correct page component is rendered.
 *   - This is called "state-based routing" — simple and works perfectly
 *     for static sites like this one.
 */

import { useState } from 'react'

// Layout components (always visible)
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Page components
import Home from './pages/Home'
import Courses from './pages/Courses'
import CoursePage from './pages/CoursePage'
import About from './pages/About'
import Donate from './pages/Donate'

// The course data used throughout the site
import { courses } from './data/courses'

export default function App() {
  // currentPage is a string like 'home', 'courses', 'course-detail', 'about', 'donate'
  const [currentPage, setCurrentPage] = useState('home')

  // selectedCourse holds the course object when the user is viewing a course detail page
  // It starts as null because no course is selected on load
  const [selectedCourse, setSelectedCourse] = useState(null)

  /**
   * navigate(page, course)
   * ──────────────────────
   * Call this to change the visible page.
   *
   * @param {string} page     - the page to navigate to (e.g. 'courses', 'about')
   * @param {object} course   - optional: pass a course object when going to 'course-detail'
   */
  const navigate = (page, course = null) => {
    setCurrentPage(page)
    setSelectedCourse(course)
    // Scroll back to the top whenever the page changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /**
   * renderPage()
   * ─────────────
   * Returns the correct page component based on currentPage.
   * Think of this as a switch statement that decides what to show.
   */
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} />

      case 'courses':
        return (
          <Courses
            courses={courses}
            onSelectCourse={(course) => navigate('course-detail', course)}
          />
        )

      case 'course-detail':
        // Guard: if no course is selected, fall back to courses page
        if (!selectedCourse) return <Courses courses={courses} onSelectCourse={(c) => navigate('course-detail', c)} />
        return (
          <CoursePage
            course={selectedCourse}
            onBack={() => navigate('courses')}
          />
        )

      case 'about':
        return <About />

      case 'donate':
        return <Donate />

      // Fallback: show home if an unknown page is requested
      default:
        return <Home onNavigate={navigate} />
    }
  }

  return (
    /*
     * min-h-screen  → The page is always at least the full screen height
     * flex flex-col → Stack children vertically (Navbar, main content, Footer)
     * bg-slate-950  → Very dark background (the "coding" dark theme)
     * text-slate-100 → Default text colour (light, readable on dark bg)
     */
    <div className="min-h-screen flex flex-col bg-[#F8F5ED] text-[#0C1A4E]">
      {/* Navigation bar — always at the top */}
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      {/* Main content — flex-1 makes it fill all remaining vertical space */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Footer — always at the bottom */}
      <Footer onNavigate={navigate} />
    </div>
  )
}
