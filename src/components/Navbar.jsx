import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', page: 'home' },
  { label: 'Courses', page: 'courses' },
  { label: 'About', page: 'about' },
]

export default function Navbar({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (page) => {
    onNavigate(page)
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2D9C0] shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ─────────────────────────────────────────────────── */}
          <motion.button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-8 h-8 rounded bg-[#112E81]/10 border border-[#112E81]/30 flex items-center justify-center">
              <span className="text-[#112E81] text-xs font-mono font-bold">{'>'}_</span>
            </div>
            <span className="font-bold text-[#112E81] group-hover:text-[#1E3A9A] transition-colors">
              CS<span className="text-[#FFBF00]">Resource</span>Hub
            </span>
          </motion.button>

          {/* ── Desktop Nav Links ─────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <motion.button
                key={link.page}
                onClick={() => handleNav(link.page)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === link.page
                    ? 'bg-[#FFBF00]/20 text-[#112E81] border border-[#FFBF00]/50'
                    : 'text-[#4A5580] hover:text-[#112E81] hover:bg-[#EEF2FF]'
                }`}
              >
                {link.label}
              </motion.button>
            ))}

            <motion.button
              onClick={() => handleNav('donate')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`ml-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentPage === 'donate'
                  ? 'bg-[#112E81] text-white'
                  : 'bg-[#112E81] text-white hover:bg-[#1E3A9A]'
              }`}
            >
              Support Us
            </motion.button>
          </div>

          {/* ── Mobile Menu Toggle ────────────────────────────────────── */}
          <button
            className="md:hidden p-2 rounded-lg text-[#4A5580] hover:text-[#112E81] hover:bg-[#EEF2FF] transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-[#E2D9C0] bg-white overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === link.page
                      ? 'bg-[#FFBF00]/20 text-[#112E81]'
                      : 'text-[#4A5580] hover:text-[#112E81] hover:bg-[#EEF2FF]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('donate')}
                className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium bg-[#112E81] text-white hover:bg-[#1E3A9A] transition-colors"
              >
                Support Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
