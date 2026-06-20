import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CourseCard from '../components/CourseCard'

const TABS = [
  { id: 'cs', label: 'Computer Science', shortLabel: 'CS' },
  { id: 'it', label: 'Information Technology', shortLabel: 'IT' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Courses({ courses, onSelectCourse }) {
  const [activeTab, setActiveTab] = useState('cs')
  const activeCourses = courses[activeTab]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-10"
      >
        <span className="font-mono text-sm uppercase tracking-widest" style={{ color: '#B8960A' }}>
          All courses
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-1 mb-3" style={{ color: '#112E81' }}>
          Find Your Course
        </h1>
        <p className="max-w-xl" style={{ color: '#4A5580' }}>
          Select a programme below, then click any course to see semester breakdowns,
          topics, curated resources, and study tips.
        </p>
      </motion.div>

      {/* ── Tab Switcher ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex gap-2 p-1.5 bg-white rounded-xl border border-[#E2D9C0] shadow-sm w-fit mb-10"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200
              ${activeTab === tab.id ? 'text-white' : 'text-[#4A5580] hover:text-[#112E81] hover:bg-[#EEF2FF]'}
            `}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="tab-pill"
                className="absolute inset-0 rounded-lg"
                style={{ background: '#112E81' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative sm:hidden">{tab.shortLabel}</span>
            <span className="relative hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </motion.div>

      {/* ── Active tab description ───────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mb-8 p-4 rounded-xl bg-white border border-[#E2D9C0]"
        >
          {activeTab === 'cs' ? (
            <p className="text-sm leading-relaxed" style={{ color: '#4A5580' }}>
              <span className="font-semibold" style={{ color: '#112E81' }}>Computer Science</span> covers programming,
              algorithms, software engineering, databases, and advanced computing topics across 4 years.
              Heavy on maths, theory, and problem-solving.
            </p>
          ) : (
            <p className="text-sm leading-relaxed" style={{ color: '#4A5580' }}>
              <span className="font-semibold" style={{ color: '#112E81' }}>Information Technology</span> covers hardware,
              networking, web development, cloud computing, and IT management across 4 years.
              More practical and infrastructure-focused than CS.
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Course Cards Grid ────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={stagger}
        >
          {activeCourses.map((course) => (
            <motion.div key={course.id} variants={cardVariant}>
              <CourseCard course={course} onClick={() => onSelectCourse(course)} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ── Bottom note ──────────────────────────────────────────────────── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-sm mt-12 font-mono"
        style={{ color: '#A89880' }}
      >
        {'// click any course to see full details, resources & tips'}
      </motion.p>
    </div>
  )
}
