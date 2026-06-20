/**
 * CourseCard.jsx — A card that previews a single course
 *
 * Props:
 *   course   — the course object from courses.js
 *   onClick  — function to call when the user clicks the card
 */

export default function CourseCard({ course, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        group w-full text-left rounded-2xl border bg-slate-900/50
        ${course.cardBorder}
        ${course.cardGlow}
        p-6 transition-all duration-300
        hover:bg-slate-900 hover:shadow-xl hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-emerald-500/50
      `}
    >
      {/* ── Card Header ────────────────────────────────────────────────── */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${course.gradient} mb-4`}>
        <span className="text-white text-xs font-bold font-mono tracking-wider">
          {course.shortCode}
        </span>
        <span className="text-white/70 text-xs">Year {course.year}</span>
      </div>

      {/* ── Course Name ────────────────────────────────────────────────── */}
      <h3 className={`font-bold text-slate-100 text-lg mb-2 group-hover:${course.accentText} transition-colors`}>
        {course.name}
      </h3>

      {/* ── Description preview (truncated) ───────────────────────────── */}
      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
        {course.description}
      </p>

      {/* ── Topic count badges ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className={`text-xs px-2.5 py-1 rounded-full ${course.badgeBg} font-mono`}>
          {course.semester1.topics.length} topics · Sem 1
        </span>
        <span className={`text-xs px-2.5 py-1 rounded-full ${course.badgeBg} font-mono`}>
          {course.semester2.topics.length} topics · Sem 2
        </span>
      </div>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <div className={`flex items-center gap-1.5 text-sm font-medium ${course.accentText}`}>
        <span>View resources</span>
        {/* Arrow icon */}
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </button>
  )
}
