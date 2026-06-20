/**
 * CoursePage.jsx — Detailed view for a single course
 *
 * Shows:
 *   - Course header (name, year, description)
 *   - Semester tabs (switch between Semester 1 and Semester 2)
 *   - Topics list
 *   - Resources list
 *   - Benefits section
 *   - Tips section
 *
 * Props:
 *   course  — the selected course object from courses.js
 *   onBack  — function to go back to the courses list
 */

import { useState } from 'react'

// ── Resource type badge colours ────────────────────────────────────────────
// Maps resource type strings to Tailwind classes
const TYPE_STYLES = {
  'Free Course': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  'Free Book':   'bg-teal-500/15   text-teal-300   border-teal-500/30',
  'YouTube':     'bg-red-500/15    text-red-300     border-red-500/30',
  'Reference':   'bg-blue-500/15   text-blue-300    border-blue-500/30',
  'Practice':    'bg-violet-500/15 text-violet-300  border-violet-500/30',
  'Textbook':    'bg-amber-500/15  text-amber-300   border-amber-500/30',
  'Tool':        'bg-cyan-500/15   text-cyan-300    border-cyan-500/30',
  'Platform':    'bg-pink-500/15   text-pink-300    border-pink-500/30',
  'Guide':       'bg-indigo-500/15 text-indigo-300  border-indigo-500/30',
  'Research':    'bg-purple-500/15 text-purple-300  border-purple-500/30',
  'Certification':'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
  'Course':      'bg-sky-500/15    text-sky-300     border-sky-500/30',
  'Free Practice':'bg-lime-500/15  text-lime-300    border-lime-500/30',
}

// Fallback style if a type is not in the map above
const DEFAULT_TYPE_STYLE = 'bg-slate-700/50 text-slate-300 border-slate-600'

export default function CoursePage({ course, onBack }) {
  // Which semester is being viewed: '1' or '2'
  const [activeSemester, setActiveSemester] = useState('1')

  const semesterData = activeSemester === '1' ? course.semester1 : course.semester2

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* ── Back Button ──────────────────────────────────────────────────── */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-slate-100 text-sm transition-colors mb-8 group"
      >
        <svg
          className="w-4 h-4 transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to all courses
      </button>

      {/* ── Course Header ─────────────────────────────────────────────────── */}
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${course.gradient} p-8 mb-8`}>
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono font-bold text-white/80 text-sm bg-white/10 px-3 py-1 rounded-full">
              {course.code}
            </span>
            <span className="text-white/60 text-sm">Year {course.year}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            {course.name}
          </h1>
          <p className="text-white/75 leading-relaxed max-w-2xl text-sm sm:text-base">
            {course.description}
          </p>
        </div>
      </div>

      {/* ── Semester Tabs ─────────────────────────────────────────────────── */}
      <div className="flex gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800 w-fit mb-8">
        {['1', '2'].map((sem) => (
          <button
            key={sem}
            onClick={() => setActiveSemester(sem)}
            className={`
              px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
              ${
                activeSemester === sem
                  ? 'bg-slate-800 text-slate-100'
                  : 'text-slate-500 hover:text-slate-300'
              }
            `}
          >
            Semester {sem}
          </button>
        ))}
      </div>

      {/* ── Semester Overview ─────────────────────────────────────────────── */}
      <div className={`rounded-xl border ${course.cardBorder} bg-slate-900/40 p-5 mb-8`}>
        <h2 className={`font-bold text-lg ${course.accentText} mb-2`}>
          {semesterData.title}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed">
          {semesterData.overview}
        </p>
      </div>

      {/* ── Two column layout: Topics + Resources ─────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        {/* Topics */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h3 className="font-bold text-slate-100 mb-4 flex items-center gap-2">
            {/* List icon */}
            <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Topics Covered
          </h3>
          <ul className="space-y-2.5">
            {semesterData.topics.map((topic, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                {/* Checkmark */}
                <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full ${course.badgeBg} flex items-center justify-center`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h3 className="font-bold text-slate-100 mb-4 flex items-center gap-2">
            {/* Link icon */}
            <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Resources
          </h3>
          <ul className="space-y-3">
            {semesterData.resources.map((res, i) => (
              <li key={i} className="group">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all duration-200"
                >
                  {/* External link icon */}
                  <svg
                    className="w-4 h-4 text-slate-500 group-hover:text-slate-300 flex-shrink-0 mt-0.5 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-slate-100 text-sm font-medium group-hover:text-white transition-colors truncate">
                        {res.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${
                          TYPE_STYLES[res.type] || DEFAULT_TYPE_STYLE
                        }`}
                      >
                        {res.type}
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{res.desc}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Benefits Section ──────────────────────────────────────────────── */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-6">
        <h3 className="font-bold text-slate-100 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Why This Year Matters
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{course.benefits}</p>
      </div>

      {/* ── Tips Section ──────────────────────────────────────────────────── */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
        <h3 className="font-bold text-slate-100 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Study Tips
        </h3>
        <ul className="space-y-3">
          {course.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="font-mono text-slate-600 flex-shrink-0 mt-0.5 text-xs">
                {String(i + 1).padStart(2, '0')}.
              </span>
              <span className="leading-relaxed">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Back to courses link at bottom ────────────────────────────────── */}
      <div className="mt-10 text-center">
        <button
          onClick={onBack}
          className="text-slate-500 hover:text-slate-300 text-sm transition-colors underline underline-offset-4"
        >
          ← Back to all courses
        </button>
      </div>
    </div>
  )
}
