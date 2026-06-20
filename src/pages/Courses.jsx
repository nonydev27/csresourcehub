/**
 * Courses.jsx — Browse all courses
 *
 * Shows a tab switcher between "Computer Science" and "Information Technology",
 * then a grid of CourseCard components.
 *
 * Props:
 *   courses        — the courses object from courses.js (has .cs and .it arrays)
 *   onSelectCourse — called when user clicks a course card
 */

import { useState } from 'react'
import CourseCard from '../components/CourseCard'

// Tab options
const TABS = [
  { id: 'cs', label: 'Computer Science', shortLabel: 'CS' },
  { id: 'it', label: 'Information Technology', shortLabel: 'IT' },
]

export default function Courses({ courses, onSelectCourse }) {
  // Track which tab is active: 'cs' or 'it'
  const [activeTab, setActiveTab] = useState('cs')

  const activeCourses = courses[activeTab] // either courses.cs or courses.it

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <div className="mb-10">
        <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest">
          All courses
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-1 mb-3">
          Find Your Course
        </h1>
        <p className="text-slate-400 max-w-xl">
          Select a programme below, then click any course to see semester breakdowns,
          topics, curated resources, and study tips.
        </p>
      </div>

      {/* ── Tab Switcher ─────────────────────────────────────────────────── */}
      <div className="flex gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800 w-fit mb-10">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
              ${
                activeTab === tab.id
                  ? 'bg-slate-800 text-slate-100 shadow-sm'
                  : 'text-slate-500 hover:text-slate-300'
              }
            `}
          >
            {/* Show short label on mobile, full label on larger screens */}
            <span className="sm:hidden">{tab.shortLabel}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* ── Active tab description ───────────────────────────────────────── */}
      <div className="mb-8 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
        {activeTab === 'cs' ? (
          <p className="text-slate-400 text-sm leading-relaxed">
            <span className="text-emerald-400 font-semibold">Computer Science</span> covers programming,
            algorithms, software engineering, databases, and advanced computing topics across 4 years.
            Heavy on maths, theory, and problem-solving.
          </p>
        ) : (
          <p className="text-slate-400 text-sm leading-relaxed">
            <span className="text-cyan-400 font-semibold">Information Technology</span> covers hardware,
            networking, web development, cloud computing, and IT management across 4 years.
            More practical and infrastructure-focused than CS.
          </p>
        )}
      </div>

      {/* ── Course Cards Grid ────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {activeCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => onSelectCourse(course)}
          />
        ))}
      </div>

      {/* ── Bottom note ──────────────────────────────────────────────────── */}
      <p className="text-center text-slate-600 text-sm mt-12 font-mono">
        {'// click any course to see full details, resources & tips'}
      </p>
    </div>
  )
}
