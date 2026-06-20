import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TYPE_STYLES = {
  'Free Course':   'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Free Book':     'bg-teal-50 text-teal-700 border-teal-200',
  'YouTube':       'bg-red-50 text-red-700 border-red-200',
  'Reference':     'bg-blue-50 text-blue-700 border-blue-200',
  'Practice':      'bg-violet-50 text-violet-700 border-violet-200',
  'Textbook':      'bg-amber-50 text-amber-700 border-amber-200',
  'Tool':          'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Platform':      'bg-pink-50 text-pink-700 border-pink-200',
  'Guide':         'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Research':      'bg-purple-50 text-purple-700 border-purple-200',
  'Certification': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  'Course':        'bg-sky-50 text-sky-700 border-sky-200',
  'Free Practice': 'bg-lime-50 text-lime-700 border-lime-200',
}

const DEFAULT_TYPE_STYLE = 'bg-gray-100 text-gray-600 border-gray-200'

const sectionVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: 'easeOut' } },
}

export default function CoursePage({ course, onBack }) {
  const [activeSemester, setActiveSemester] = useState('1')
  const semesterData = activeSemester === '1' ? course.semester1 : course.semester2

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
    >

      {/* ── Back Button ──────────────────────────────────────────────────── */}
      <motion.button
        onClick={onBack}
        whileHover={{ x: -3 }}
        className="flex items-center gap-2 text-sm transition-colors mb-8 group"
        style={{ color: '#4A5580' }}
        onMouseEnter={e => e.currentTarget.style.color = '#112E81'}
        onMouseLeave={e => e.currentTarget.style.color = '#4A5580'}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to all courses
      </motion.button>

      {/* ── Course Header ─────────────────────────────────────────────────── */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${course.gradient} p-8 mb-8`}
      >
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
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
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">{course.name}</h1>
          <p className="text-white/75 leading-relaxed max-w-2xl text-sm sm:text-base">{course.description}</p>
        </div>
      </motion.div>

      {/* ── Semester Tabs ─────────────────────────────────────────────────── */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
        className="flex gap-2 p-1.5 bg-white rounded-xl border border-[#E2D9C0] shadow-sm w-fit mb-8"
      >
        {['1', '2'].map((sem) => (
          <button
            key={sem}
            onClick={() => setActiveSemester(sem)}
            className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200
              ${activeSemester === sem ? 'text-white' : 'text-[#4A5580] hover:text-[#112E81] hover:bg-[#EEF2FF]'}`}
          >
            {activeSemester === sem && (
              <motion.div
                layoutId="sem-pill"
                className="absolute inset-0 rounded-lg"
                style={{ background: '#112E81' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative">Semester {sem}</span>
          </button>
        ))}
      </motion.div>

      {/* ── Animated Semester Content ────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSemester}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {/* Semester Overview */}
          <div className={`rounded-xl border ${course.cardBorder} bg-white shadow-sm p-5 mb-8`}>
            <h2 className={`font-bold text-lg ${course.accentText} mb-2`}>{semesterData.title}</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#4A5580' }}>{semesterData.overview}</p>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

            {/* Topics */}
            <motion.div
              className="bg-white border border-[#E2D9C0] rounded-2xl p-6 shadow-sm"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#0C1A4E' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#4A5580' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Topics Covered
              </h3>
              <motion.ul
                className="space-y-2.5"
                variants={stagger}
                initial="hidden"
                animate="visible"
              >
                {semesterData.topics.map((topic, i) => (
                  <motion.li key={i} variants={itemVariant} className="flex items-start gap-3 text-sm" style={{ color: '#4A5580' }}>
                    <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full ${course.badgeBg} flex items-center justify-center`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{topic}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              className="bg-white border border-[#E2D9C0] rounded-2xl p-6 shadow-sm"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#0C1A4E' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#4A5580' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Resources
              </h3>
              <ul className="space-y-3">
                {semesterData.resources.map((res, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="group"
                  >
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl border transition-all duration-200"
                      style={{ background: '#F8F5ED', borderColor: '#E2D9C0' }}
                      onMouseEnter={e => { e.currentTarget.style.background = '#EEF2FF'; e.currentTarget.style.borderColor = 'rgba(17,46,129,0.3)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = '#F8F5ED'; e.currentTarget.style.borderColor = '#E2D9C0' }}
                    >
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#A89880' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-sm font-medium truncate" style={{ color: '#0C1A4E' }}>{res.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${TYPE_STYLES[res.type] || DEFAULT_TYPE_STYLE}`}>
                            {res.type}
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: '#4A5580' }}>{res.desc}</p>
                      </div>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Benefits Section ──────────────────────────────────────────────── */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white border border-[#E2D9C0] rounded-2xl p-6 mb-6 shadow-sm"
      >
        <h3 className="font-bold mb-3 flex items-center gap-2" style={{ color: '#0C1A4E' }}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFBF00' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Why This Year Matters
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#4A5580' }}>{course.benefits}</p>
      </motion.div>

      {/* ── Tips Section ──────────────────────────────────────────────────── */}
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-2xl p-6"
        style={{ background: '#112E81' }}
      >
        <h3 className="font-bold mb-4 flex items-center gap-2 text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFBF00' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Study Tips
        </h3>
        <motion.ul
          className="space-y-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {course.tips.map((tip, i) => (
            <motion.li key={i} variants={itemVariant} className="flex items-start gap-3 text-sm">
              <span className="font-mono flex-shrink-0 mt-0.5 text-xs" style={{ color: 'rgba(255,191,0,0.6)' }}>
                {String(i + 1).padStart(2, '0')}.
              </span>
              <span className="leading-relaxed" style={{ color: '#BFDBFE' }}>{tip}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* ── Back to courses link at bottom ────────────────────────────────── */}
      <div className="mt-10 text-center">
        <button
          onClick={onBack}
          className="text-sm transition-colors underline underline-offset-4"
          style={{ color: '#4A5580' }}
          onMouseEnter={e => e.currentTarget.style.color = '#112E81'}
          onMouseLeave={e => e.currentTarget.style.color = '#4A5580'}
        >
          ← Back to all courses
        </button>
      </div>
    </motion.div>
  )
}
