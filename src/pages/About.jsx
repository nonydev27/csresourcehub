import { motion } from 'framer-motion'

const PHOTO_URL =
  'https://media.licdn.com/dms/image/v2/D4E03AQED7Y7Z7xj_Og/profile-displayphoto-scale_400_400/B4EZ6HoO_aIwAk-/0/1780391932452?e=1783555200&v=beta&t=w2E6sj8zr4BsFkx4ymUdV5Q2kmfgli0Ms7qog_hBlFQ'

// ── Social links — update URLs as needed ──────────────────────────────────
const SOCIALS = [
  {
    name: 'Portfolio',
    url: '#', // replace with your portfolio URL
    color: '#112E81',
    bg: '#EEF2FF',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/nonydev',
    color: '#24292e',
    bg: '#F3F4F6',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: '#', // replace with your LinkedIn URL
    color: '#0A66C2',
    bg: '#EFF6FF',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: '#', // replace with your IG URL
    color: '#E1306C',
    bg: '#FFF0F4',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'X',
    url: '#', // replace with your X/Twitter URL
    color: '#000000',
    bg: '#F9FAFB',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Snapchat',
    url: '#', // replace with your Snapchat URL
    color: '#8B6914',
    bg: '#FFFDE7',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.317 4.814l-.004.062c-.004.083-.01.166-.015.25.026.013.06.026.104.037.258.067.677.011 1.01-.056.149-.033.316.047.316.212s-.168.292-.372.368c-.005.002-.924.328-.924 1.108 0 .406.217.88.483 1.356.604 1.08 1.545 2.77 1.545 5.012 0 3.454-2.97 6.22-6.617 6.22-.122 0-.244-.004-.365-.01-.9.226-1.888.344-2.948.344-1.06 0-2.047-.118-2.948-.344-.121.006-.243.01-.365.01-3.647 0-6.617-2.766-6.617-6.22 0-2.241.94-3.932 1.545-5.012.266-.476.483-.95.483-1.356 0-.78-.92-1.106-.924-1.108-.204-.076-.372-.202-.372-.368s.167-.245.316-.212c.333.067.752.123 1.01.056.044-.011.077-.023.104-.037l-.015-.25-.004-.062c-.086-1.594-.212-3.62.317-4.814C7.859 1.069 11.216.793 12.206.793z" />
      </svg>
    ),
  },
]

const OFFERINGS = [
  'Full semester-by-semester breakdowns for CS & IT through to final year',
  'Curated free resources: courses, YouTube playlists, textbooks, and practice sites',
  'Honest study tips from someone who has been through it',
  'Zero paywalls, zero sign-ups, zero ads',
  'A reference you can return to at any point during your degree',
]

const TIMELINE = [
  { label: '2026', text: 'CS Resource Hub launched — built by nonydev as a tool for fellow students.' },
  { label: 'Ongoing', text: 'Courses, resources, and tips are continuously updated as the curriculum evolves.' },
  { label: 'Future', text: 'Community contributions, more programmes, and interactive features planned.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemFade = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ═══════════════════════════════════════════════════════════════════
          PAGE HEADER
      ═══════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-14"
      >
        <span className="font-mono text-sm uppercase tracking-widest" style={{ color: '#B8960A' }}>
          The story
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-1 mb-4" style={{ color: '#112E81' }}>
          About This Project
        </h1>
        <p className="leading-relaxed max-w-2xl" style={{ color: '#4A5580' }}>
          CS Resource Hub was not built by a company or an institution. It was built by a student
          who wanted a single, honest, well-organised guide to navigating a CS or IT degree.
        </p>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════════
          PROFILE CARD
      ═══════════════════════════════════════════════════════════════════ */}
      {/* ── Profile Card (no overflow-hidden so -mt photo overlap works) ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="rounded-3xl mb-12 shadow-xl"
        style={{ border: '1.5px solid #E2D9C0' }}
      >
        {/* Top banner — rounded top corners explicitly */}
        <div
          className="h-32 w-full relative overflow-hidden rounded-t-3xl"
          style={{ background: 'linear-gradient(135deg, #112E81 0%, #1E3A9A 50%, #FFBF00 100%)' }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }} />
        </div>

        {/* Profile content — rounded bottom corners explicitly */}
        <div className="bg-white px-6 sm:px-10 pb-8 rounded-b-3xl">
          {/* Photo row — negative margin pulls photo up over banner */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-6 -mt-16 mb-6">

            {/* Photo holder */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 200 }}
              className="relative flex-shrink-0 self-start sm:self-auto"
            >
              {/* Decorative rotated square — back layer */}
              <div
                className="absolute rounded-2xl"
                style={{
                  inset: '-6px',
                  background: 'rgba(255,191,0,0.25)',
                  border: '2px solid rgba(255,191,0,0.5)',
                  borderRadius: '28px',
                  transform: 'rotate(6deg)',
                }}
              />
              {/* Decorative rotated square — mid layer */}
              <div
                className="absolute rounded-2xl"
                style={{
                  inset: '-3px',
                  background: 'rgba(17,46,129,0.08)',
                  border: '1.5px solid rgba(17,46,129,0.2)',
                  borderRadius: '26px',
                  transform: 'rotate(-4deg)',
                }}
              />
              {/* Photo */}
              <img
                src={PHOTO_URL}
                alt="nonydev"
                className="relative block object-cover"
                style={{
                  width: '152px',
                  height: '152px',
                  borderRadius: '22px',
                  border: '4px solid #FFBF00',
                  boxShadow: '0 8px 32px rgba(17,46,129,0.18)',
                  zIndex: 1,
                }}
              />
              {/* Online indicator */}
              <span
                className="absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-white"
                style={{ background: '#22C55E', zIndex: 2 }}
              />
            </motion.div>

            {/* Name & title — sits next to the photo on sm+ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="sm:pb-1"
            >
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="text-2xl font-extrabold" style={{ color: '#112E81' }}>nonydev</h2>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-mono font-semibold"
                  style={{ background: '#FFF8E1', color: '#B8960A', border: '1px solid #FFBF00' }}
                >
                  creator
                </span>
              </div>
              <p className="text-sm mb-3" style={{ color: '#4A5580' }}>
                CS Student · Software Engineer · Open-Source Enthusiast
              </p>
              {/* Social links */}
              <div className="flex flex-wrap gap-2">
                {SOCIALS.map((s) => (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-9 h-9 rounded-xl transition-shadow"
                    style={{ background: s.bg, color: s.color, border: `1.5px solid ${s.color}22` }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm leading-relaxed"
            style={{ color: '#4A5580' }}
          >
            I built this hub because I wished it had existed when I started my degree.
            Finding good resources — especially free ones — takes time that students don't always have.
            CS Resource Hub is my attempt to cut that time down for everyone who comes after me.
          </motion.p>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT YOU'LL FIND HERE
      ═══════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mb-12"
      >
        <h2 className="text-xl font-bold mb-5" style={{ color: '#112E81' }}>What You'll Find Here</h2>
        <motion.ul
          className="space-y-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {OFFERINGS.map((item, i) => (
            <motion.li key={i} variants={itemFade} className="flex items-start gap-3 text-sm" style={{ color: '#4A5580' }}>
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: '#FFF8E1', border: '1px solid #FFBF00' }}
              >
                <svg className="w-3 h-3" fill="none" stroke="#B8960A" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════════
          MISSION QUOTE
      ═══════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="relative rounded-2xl overflow-hidden mb-12"
        style={{ border: '1.5px solid #E2D9C0' }}
      >
        {/* Gradient bg */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(17,46,129,0.06) 0%, rgba(255,191,0,0.08) 100%)' }}
        />
        <div className="relative p-8">
          <div className="font-mono text-sm mb-4" style={{ color: '#B8960A' }}>{'// mission.js'}</div>

          {/* Big quote mark */}
          <div className="text-7xl font-serif leading-none mb-2 select-none" style={{ color: '#FFBF00', opacity: 0.4 }}>"</div>

          <blockquote className="text-lg font-medium leading-relaxed -mt-4" style={{ color: '#112E81' }}>
            Knowledge is free — or at least, it should be. Every student deserves access to
            the same quality of guidance, regardless of where they study or what they can afford.
          </blockquote>
          <div className="mt-5 text-sm font-mono" style={{ color: '#A89880' }}>— nonydev</div>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════════
          PROJECT TIMELINE
      ═══════════════════════════════════════════════════════════════════ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mb-8"
      >
        <h2 className="text-xl font-bold mb-6" style={{ color: '#112E81' }}>Project Timeline</h2>
        <div className="space-y-0">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5"
                  style={{ background: '#FFBF00', border: '2px solid #112E81' }}
                />
                {i < TIMELINE.length - 1 && (
                  <div className="w-px flex-1 mt-1" style={{ background: '#E2D9C0' }} />
                )}
              </div>
              <div className="pb-6">
                <span className="font-mono text-xs font-bold" style={{ color: '#112E81' }}>{item.label}</span>
                <p className="text-sm mt-1 leading-relaxed" style={{ color: '#4A5580' }}>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  )
}
