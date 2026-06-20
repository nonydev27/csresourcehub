export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t-4" style={{ background: '#112E81', borderTopColor: '#FFBF00' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ── Branding ───────────────────────────────────────────────── */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded flex items-center justify-center"
                style={{ background: 'rgba(255,191,0,0.2)', border: '1px solid rgba(255,191,0,0.4)' }}>
                <span className="text-xs font-mono font-bold" style={{ color: '#FFBF00' }}>{'>'}_</span>
              </div>
              <span className="font-bold text-white">
                CS<span style={{ color: '#FFBF00' }}>Resource</span>Hub
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#93C5FD' }}>
              A free guide to navigating your CS and IT degree — built by a student, for students.
            </p>
          </div>

          {/* ── Quick Links ────────────────────────────────────────────── */}
          <div>
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wider" style={{ color: '#FFBF00' }}>
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
                    className="text-sm transition-colors"
                    style={{ color: '#93C5FD' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#FFBF00'}
                    onMouseLeave={e => e.currentTarget.style.color = '#93C5FD'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Built with ─────────────────────────────────────────────── */}
          <div>
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wider" style={{ color: '#FFBF00' }}>
              Built With
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Vite', 'Tailwind CSS', 'JavaScript'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono"
                  style={{ background: 'rgba(255,255,255,0.1)', color: '#BFDBFE', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs mt-4" style={{ color: 'rgba(147,197,253,0.5)' }}>
              Open source. Free forever.
            </p>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────────── */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          <p className="text-sm" style={{ color: '#93C5FD' }}>
            © {year} CSResourceHub · Made with dedication by{' '}
            <span className="font-mono" style={{ color: '#FFBF00' }}>nonydev</span>
          </p>
          <p className="text-xs font-mono" style={{ color: 'rgba(147,197,253,0.4)' }}>
            {'// knowledge is free'}
          </p>
        </div>
      </div>
    </footer>
  )
}
