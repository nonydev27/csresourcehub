/**
 * Home.jsx — The landing page
 *
 * Sections:
 *   1. Hero — headline and CTA buttons
 *   2. What is this? — quick explainer cards
 *   3. Courses preview — small cards linking to each year
 */

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

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* Glow blob */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-mono mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            CS Resource Hub — by nonydev
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 leading-tight mb-6">
            Navigate Your{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              CS & IT Degree
            </span>
            <br />
            With Confidence
          </h1>

          {/* Subheadline */}
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A free, student-built guide to every CS and IT course — from Year 1 to Year 4.
            Resources, semester breakdowns, tips, and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('courses')}
              className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Courses
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-base border border-slate-700 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              About This Project
            </button>
          </div>

          {/* Stat pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-14">
            {[
              { value: '12+', label: 'Courses covered' },
              { value: '4', label: 'CS years' },
              { value: '4', label: 'IT years' },
              { value: '∞', label: 'Free resources' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-slate-100">{stat.value}</div>
                <div className="text-slate-500 text-xs uppercase tracking-wide mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT IS THIS SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section label */}
        <div className="text-center mb-12">
          <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest">
            What you get
          </span>
          <h2 className="text-3xl font-bold text-slate-100 mt-2">
            Everything you need, nothing you don't
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            This hub was built to fill the gaps that lectures don't always cover.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-colors"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-slate-100 mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          COURSES PREVIEW SECTION
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* ── Computer Science ── */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest block mb-1">
                Programme
              </span>
              <h2 className="text-2xl font-bold text-slate-100">Computer Science</h2>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-1 transition-colors"
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {courses.cs.map((course) => (
              <button
                key={course.id}
                onClick={() => onNavigate('course-detail', course)}
                className={`
                  group rounded-xl border bg-slate-900/50 p-4
                  ${course.cardBorder}
                  text-left transition-all duration-200 hover:bg-slate-900 hover:-translate-y-0.5
                `}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-3`}>
                  <span className="text-white font-bold text-xs font-mono">{course.shortCode}</span>
                </div>
                <div className={`text-sm font-semibold ${course.accentText} mb-1`}>Year {course.year}</div>
                <div className="text-xs text-slate-400 leading-snug">{course.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Information Technology ── */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-1">
                Programme
              </span>
              <h2 className="text-2xl font-bold text-slate-100">Information Technology</h2>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 transition-colors"
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {courses.it.map((course) => (
              <button
                key={course.id}
                onClick={() => onNavigate('course-detail', course)}
                className={`
                  group rounded-xl border bg-slate-900/50 p-4
                  ${course.cardBorder}
                  text-left transition-all duration-200 hover:bg-slate-900 hover:-translate-y-0.5
                `}
              >
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-3`}>
                  <span className="text-white font-bold text-xs font-mono">{course.shortCode}</span>
                </div>
                <div className={`text-sm font-semibold ${course.accentText} mb-1`}>Year {course.year}</div>
                <div className="text-xs text-slate-400 leading-snug">{course.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BOTTOM CTA BANNER
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">
            Find this useful?
          </h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            Consider supporting the hub so it stays free and continues to grow.
          </p>
          <button
            onClick={() => onNavigate('donate')}
            className="px-8 py-3.5 rounded-xl bg-violet-500/15 text-violet-400 border border-violet-500/30 hover:bg-violet-500 hover:text-white font-semibold transition-all duration-200"
          >
            Support the Hub
          </button>
        </div>
      </section>
    </div>
  )
}
