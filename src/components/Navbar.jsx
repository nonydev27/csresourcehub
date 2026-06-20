/**
 * Navbar.jsx — Top navigation bar
 *
 * This component appears at the top of every page.
 * It receives:
 *   currentPage  — which page is active right now (used to highlight the active link)
 *   onNavigate   — a function to call when the user clicks a link
 */

import { useState } from 'react'

// The list of nav links. Each item has a display label and a page id.
const NAV_LINKS = [
  { label: 'Home', page: 'home' },
  { label: 'Courses', page: 'courses' },
  { label: 'About', page: 'about' },
]

export default function Navbar({ currentPage, onNavigate }) {
  // Controls whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (page) => {
    onNavigate(page)
    setMenuOpen(false) // close mobile menu after clicking
  }

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ─────────────────────────────────────────────────── */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group"
          >
            {/* Terminal icon */}
            <div className="w-8 h-8 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
              <span className="text-emerald-400 text-xs font-mono font-bold">{'>'}_</span>
            </div>
            <span className="font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
              CS<span className="text-emerald-400">Resource</span>Hub
            </span>
          </button>

          {/* ── Desktop Nav Links ─────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNav(link.page)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === link.page
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Donate button — styled differently to stand out */}
            <button
              onClick={() => handleNav('donate')}
              className={`ml-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                currentPage === 'donate'
                  ? 'bg-violet-500 text-white'
                  : 'bg-violet-500/15 text-violet-400 border border-violet-500/30 hover:bg-violet-500 hover:text-white'
              }`}
            >
              Support Us
            </button>
          </div>

          {/* ── Mobile Menu Toggle ────────────────────────────────────── */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {/* Hamburger / X icon */}
            {menuOpen ? (
              // X icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ──────────────────────────────────────── */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-3 space-y-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNav(link.page)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentPage === link.page
                  ? 'bg-emerald-500/15 text-emerald-400'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('donate')}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium bg-violet-500/15 text-violet-400 hover:bg-violet-500 hover:text-white transition-colors"
          >
            Support Us
          </button>
        </div>
      )}
    </nav>
  )
}
