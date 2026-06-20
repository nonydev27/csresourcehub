import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { courses } from '../data/courses'

// ── Feature highlight cards ────────────────────────────────────────────────
const FEATURES = [
  {
    icon: '📚',
    title: 'Curated Resources',
    desc: 'Every course has handpicked links, free courses, textbooks, YouTube playlists, and practice sites.',
  },
  {
    icon: '🗓️',
    title: 'Semester Breakdown',
    desc: 'Topics split by Semester 1 and Semester 2 so you always know exactly what to expect.',
  },
  {
    icon: '💡',
    title: 'Tips from Experience',
    desc: 'Real advice for surviving each year. What to focus on, what to avoid, and how to study smart.',
  },
  {
    icon: '🆓',
    title: 'Always Free',
    desc: 'No paywalls. No sign-ups. Just open knowledge the way it should be.',
  },
]

// ── Carousel slides with Unsplash images ──────────────────────────────────
const SLIDES = [
  {
    id: 0,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'CS & IT · Year 1 – 4',
    headline: 'Your Complete\nUniversity CS Guide',
    body: 'Semester breakdowns, curated resources, and real study tips — everything you need to succeed.',
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'Learn Together',
    headline: 'Built by Students,\nFor Students',
    body: 'Real advice from someone who lived through every exam, project, and late-night debugging session.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'University Life',
    headline: 'Navigate Every\nSemester With Ease',
    body: 'Know exactly what topics, resources, and tips you need — before the semester even starts.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'Free Resources',
    headline: 'The Best Links,\nAll in One Place',
    body: 'Harvard CS50, LeetCode, Abdul Bari, freeCodeCamp — hand-picked for every course and every year.',
  },
]

// ── Animation variants ─────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// ── Hero Carousel ──────────────────────────────────────────────────────────
function HeroCarousel({ onNavigate }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '88vh', maxHeight: '680px', minHeight: '480px' }}>
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          style={{ zIndex: i === current ? 10 : 0 }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Gradient overlay — strong navy on left, fades right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(10,24,51,0.92) 0%, rgba(17,46,129,0.78) 35%, rgba(17,46,129,0.45) 60%, rgba(17,46,129,0.15) 100%)',
            }}
          />
          {/* Bottom fade for dot readability */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{ background: 'linear-gradient(to top, rgba(10,24,51,0.5), transparent)' }}
          />

          {/* Text content — animates fresh on each active slide */}
          {i === current && (
            <div className="relative h-full flex items-center">
              <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
                <motion.div
                  key={`text-${current}`}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
                  className="max-w-xl"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-xs font-mono font-semibold uppercase tracking-widest mb-4 block"
                    style={{ color: '#FFBF00' }}
                  >
                    {slide.eyebrow}
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.3 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight whitespace-pre-line mb-5"
                  >
                    {slide.headline}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="text-base sm:text-lg leading-relaxed mb-8"
                    style={{ color: 'rgba(255,255,255,0.80)' }}
                  >
                    {slide.body}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.58 }}
                    className="flex flex-wrap gap-3"
                  >
                    <button
                      onClick={() => onNavigate('courses')}
                      className="px-7 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                      style={{ background: '#FFBF00', color: '#112E81' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#E6AC00'}
                      onMouseLeave={e => e.currentTarget.style.background = '#FFBF00'}
                    >
                      Explore Courses →
                    </button>
                    <button
                      onClick={() => onNavigate('about')}
                      className="px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                      style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1.5px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(4px)' }}
                    >
                      Learn More
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="h-2 rounded-full transition-all duration-400"
            style={{
              width: i === current ? '28px' : '8px',
              background: i === current ? '#FFBF00' : 'rgba(255,255,255,0.45)',
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-6 right-6 z-20 font-mono text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>
    </div>
  )
}

// ── Home Page ──────────────────────────────────────────────────────────────
export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════════════════════════════════
          FULL-WIDTH HERO CAROUSEL
      ═══════════════════════════════════════════════════════════════════ */}
      <HeroCarousel onNavigate={onNavigate} />

      {/* ═══════════════════════════════════════════════════════════════════
          STAT BAR
      ═══════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="border-b border-[#E2D9C0]"
        style={{ background: '#112E81' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-center sm:justify-between gap-6">
          {[
            { value: '8+', label: 'Courses covered' },
            { value: '4',  label: 'CS years' },
            { value: '4',  label: 'IT years' },
            { value: '16', label: 'Semesters mapped' },
            { value: '∞',  label: 'Free resources' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-2xl font-extrabold" style={{ color: '#FFBF00' }}>{stat.value}</div>
              <div className="text-xs uppercase tracking-wide mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT YOU GET SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="font-mono text-sm uppercase tracking-widest" style={{ color: '#B8960A' }}>
            What you get
          </span>
          <h2 className="text-3xl font-bold mt-2" style={{ color: '#112E81' }}>
            Everything you need, nothing you don't
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ color: '#4A5580' }}>
            This hub was built to fill the gaps that lectures don't always cover.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeIn}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(17,46,129,0.12)' }}
              className="bg-white border border-[#E2D9C0] rounded-2xl p-6 shadow-sm cursor-default"
              style={{ borderTop: '4px solid #FFBF00' }}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold mb-2" style={{ color: '#0C1A4E' }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4A5580' }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          COURSES PREVIEW SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        {/* ── Computer Science ── */}
        <div className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex items-center justify-between mb-6"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest block mb-1" style={{ color: '#B8960A' }}>
                Programme
              </span>
              <h2 className="text-2xl font-bold" style={{ color: '#112E81' }}>Computer Science</h2>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="text-sm font-medium flex items-center gap-1 transition-colors"
              style={{ color: '#112E81' }}
              onMouseEnter={e => e.currentTarget.style.color = '#E6AC00'}
              onMouseLeave={e => e.currentTarget.style.color = '#112E81'}
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {courses.cs.map((course) => (
              <motion.button
                key={course.id}
                variants={fadeIn}
                whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(17,46,129,0.13)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('course-detail', course)}
                className={`rounded-xl border bg-white p-4 ${course.cardBorder} text-left`}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-3`}>
                  <span className="text-white font-bold text-xs font-mono">{course.shortCode}</span>
                </div>
                <div className={`text-sm font-semibold ${course.accentText} mb-1`}>Year {course.year}</div>
                <div className="text-xs leading-snug" style={{ color: '#4A5580' }}>{course.name}</div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* ── Information Technology ── */}
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex items-center justify-between mb-6"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest block mb-1" style={{ color: '#B8960A' }}>
                Programme
              </span>
              <h2 className="text-2xl font-bold" style={{ color: '#112E81' }}>Information Technology</h2>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="text-sm font-medium flex items-center gap-1 transition-colors"
              style={{ color: '#112E81' }}
              onMouseEnter={e => e.currentTarget.style.color = '#E6AC00'}
              onMouseLeave={e => e.currentTarget.style.color = '#112E81'}
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {courses.it.map((course) => (
              <motion.button
                key={course.id}
                variants={fadeIn}
                whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(17,46,129,0.13)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onNavigate('course-detail', course)}
                className={`rounded-xl border bg-white p-4 ${course.cardBorder} text-left`}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-3`}>
                  <span className="text-white font-bold text-xs font-mono">{course.shortCode}</span>
                </div>
                <div className={`text-sm font-semibold ${course.accentText} mb-1`}>Year {course.year}</div>
                <div className="text-xs leading-snug" style={{ color: '#4A5580' }}>{course.name}</div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BOTTOM CTA BANNER
      ═══════════════════════════════════════════════════════════════════ */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        style={{ borderTop: '1px solid #E2D9C0', background: 'white' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#112E81' }}>
            Find this useful?
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ color: '#4A5580' }}>
            Consider supporting the hub so it stays free and continues to grow.
          </p>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(17,46,129,0.25)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNavigate('donate')}
            className="px-8 py-3.5 rounded-xl font-semibold text-white transition-colors duration-200"
            style={{ background: '#112E81' }}
            onMouseEnter={e => e.currentTarget.style.background = '#1E3A9A'}
            onMouseLeave={e => e.currentTarget.style.background = '#112E81'}
          >
            Support the Hub
          </motion.button>
        </div>
      </motion.section>
    </div>
  )
}
