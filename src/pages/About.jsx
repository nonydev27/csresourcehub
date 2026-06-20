// What the hub offers — shown in a bullet list
const OFFERINGS = [
  'Full semester-by-semester breakdowns for Computer Science & Info. Tech through to final year',
  'Curated free resources: courses, YouTube playlists, textbooks, and practice sites',
  'Honest study tips from someone who has been through it',
  'Zero paywalls, zero sign-ups, zero ads',
  'A reference you can return to at any point during your degree',
]

// Timeline of the project
const TIMELINE = [
  { label: '2026', text: 'CS Resource Hub launched. Built by nonydev as a tool for fellow students.' },
  { label: 'Ongoing', text: 'Courses, resources, and tips are continuously updated as the curriculum evolves.' },
  { label: 'Future', text: 'Community contributions, more programmes, and interactive features planned.' },
]

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      <div className="mb-12">
        <span className="text-emerald-400 font-mono text-sm uppercase tracking-widest">
          The story
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-1 mb-4">
          About This Project
        </h1>
        <p className="text-slate-400 leading-relaxed max-w-2xl">
          CS Resource Hub was not built by a company or an institution. It was built by a student
          who wanted a single, honest, well-organised guide to navigating a CS or IT degree in KNUST.
        </p>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 mb-10 flex flex-col sm:flex-row gap-6 items-start">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex-shrink-0 flex items-center justify-center">
          <span className="text-white font-mono font-extrabold text-2xl">N</span>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h2 className="text-xl font-bold text-slate-100">nonydev</h2>
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono">
              creator
            </span>
          </div>
          <p className="text-slate-500 text-sm mb-4">
            CS student · Software Engineer · Open-Source Enthusiast
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            I built this hub because I wished it had existed when I started my degree.
            Finding good resources, especially free ones takes time that students don't always have.
            CS Resource Hub is my attempt to cut that time down for everyone who comes after me.
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold text-slate-100 mb-5">What You'll Find Here</h2>
        <ul className="space-y-3">
          {OFFERINGS.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
              <span className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative rounded-2xl overflow-hidden mb-10">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10" />
        <div className="relative border border-emerald-500/20 rounded-2xl p-8">
          <div className="font-mono text-emerald-400 text-sm mb-3">// mission.js</div>
          <blockquote className="text-slate-200 text-lg font-medium leading-relaxed">
            "Knowledge is free or at least, it should be. Every student deserves access to
            the same quality of guidance, regardless of where they study or what they can afford."
          </blockquote>
          <div className="mt-4 text-slate-500 text-sm">— nonydev</div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold text-slate-100 mb-6">Project Timeline</h2>
        <div className="space-y-4">
          {TIMELINE.map((item, i) => (
            <div key={i} className="flex gap-4">
              {/* Timeline dot and line */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0 mt-1" />
                {i < TIMELINE.length - 1 && (
                  <div className="w-px flex-1 bg-slate-800 mt-1" />
                )}
              </div>
              <div className="pb-4">
                <span className="font-mono text-emerald-400 text-xs font-bold">{item.label}</span>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  )
}
