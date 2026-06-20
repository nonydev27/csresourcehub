import { motion } from 'framer-motion'

export default function CourseCard({ course, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(17,46,129,0.13)' }}
      whileTap={{ scale: 0.98 }}
      className={`
        group w-full text-left rounded-2xl border bg-white
        ${course.cardBorder}
        p-6 transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-[#FFBF00]/50
      `}
    >
      {/* ── Card Header ────────────────────────────────────────────────── */}
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${course.gradient} mb-4`}>
        <span className="text-white text-xs font-bold font-mono tracking-wider">
          {course.shortCode}
        </span>
        <span className="text-white/80 text-xs">Year {course.year}</span>
      </div>

      {/* ── Course Name ────────────────────────────────────────────────── */}
      <h3 className={`font-bold text-[#0C1A4E] text-lg mb-2 group-hover:${course.accentText} transition-colors`}>
        {course.name}
      </h3>

      {/* ── Description preview ───────────────────────────────────────── */}
      <p className="text-[#4A5580] text-sm leading-relaxed line-clamp-2 mb-4">
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
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </motion.button>
  )
}
