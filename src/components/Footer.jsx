/**
 * Footer.jsx — Bottom footer shown on every page
 *
 * Keeps it simple: branding, quick links, and a tagline.
 */

export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ── Branding ───────────────────────────────────────────────── */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <span className="text-emerald-400 text-xs font-mono font-bold">{'>'}_</span>
              </div>
              <span className="font-bold text-slate-100">
                CS<span className="text-emerald-400">Resource</span>Hub
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              A free guide to navigating your CS and IT degree — built by a student, for students.
            </p>
          </div>

          {/* ── Quick Links ────────────────────────────────────────────── */}
          <div>
            <h3 className="text-slate-300 font-semibold text-sm mb-3 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Courses', page: 'courses' },
                { label: 'About', page: 'about' },
                { label: 'Support Us', page: 'donate' },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-slate-500 hover:text-emerald-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Built with ─────────────────────────────────────────────── */}
          <div>
            <h3 className="text-slate-300 font-semibold text-sm mb-3 uppercase tracking-wider">
              Built With
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Vite', 'Tailwind CSS', 'JavaScript'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs bg-slate-800 text-slate-400 border border-slate-700 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-slate-600 text-xs mt-4">
              Open source. Free forever.
            </p>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────────── */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-sm">
            © {year} CSResourceHub · Made with dedication by{' '}
            <span className="text-emerald-500 font-mono">nonydev</span>
          </p>
          <p className="text-slate-700 text-xs font-mono">
            {'// knowledge is free'}
          </p>
        </div>
      </div>
    </footer>
  )
}
