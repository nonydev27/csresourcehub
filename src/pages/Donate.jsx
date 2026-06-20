import { motion } from 'framer-motion'

const REASONS = [
  'Hosting and domain costs to keep the site running',
  'Time spent researching and curating quality resources',
  'Future development: more courses, better design, community features',
  'Motivation to keep this project alive and growing',
]

// ── Update these URLs with your real payment links ─────────────────────────
const METHODS = [
  {
    name: 'Buy Me a Coffee',
    desc: 'One-time or recurring micro-donations. Even $1 helps.',
    icon: '☕',
    gradient: 'from-[#FFBF00] to-[#E6AC00]',
    borderColor: '#FFBF00',
    bg: '#FFF8E1',
    textColor: '#B8960A',
    url: '#',
    cta: 'Buy a Coffee',
  },
  {
    name: 'PayPal',
    desc: 'Send a one-time donation via PayPal.',
    icon: '💳',
    gradient: 'from-[#0070BA] to-[#003087]',
    borderColor: '#0070BA',
    bg: '#EFF6FF',
    textColor: '#0070BA',
    url: '#',
    cta: 'Donate via PayPal',
  },
  {
    name: 'Mobile Money',
    desc: 'For those in Ghana and West Africa — send via MoMo.',
    icon: '📱',
    gradient: 'from-[#112E81] to-[#1E3A9A]',
    borderColor: '#112E81',
    bg: '#EEF2FF',
    textColor: '#112E81',
    url: '#',
    cta: 'Send via MoMo',
  },
]

const FREE_HELP = [
  'Share the site with classmates who could benefit from it',
  'Recommend it to your study group or department WhatsApp group',
  'Give feedback — if something is wrong or missing, let us know',
  'Star the GitHub repo if the project gets open-sourced',
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemFade = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Donate() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-center mb-14"
      >
        {/* Heart icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
          style={{ background: 'linear-gradient(135deg, #112E81, #1E3A9A)', boxShadow: '0 8px 24px rgba(17,46,129,0.25)' }}
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </motion.div>

        <span className="font-mono text-sm uppercase tracking-widest block mb-3" style={{ color: '#B8960A' }}>
          Support the hub
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: '#112E81' }}>
          Keep the Knowledge Free
        </h1>
        <p className="leading-relaxed max-w-xl mx-auto" style={{ color: '#4A5580' }}>
          CS Resource Hub is completely free to use — no ads, no sign-ups, no paywalls.
          If it has helped you, consider supporting it so it can keep helping others.
        </p>
      </motion.div>

      {/* ── Why Support Section ───────────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="rounded-2xl p-6 mb-10 shadow-sm"
        style={{ background: 'white', border: '1.5px solid #E2D9C0', borderLeft: '4px solid #FFBF00' }}
      >
        <h2 className="font-bold mb-4 flex items-center gap-2" style={{ color: '#112E81' }}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFBF00' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Why Your Support Matters
        </h2>
        <motion.ul
          className="space-y-2.5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {REASONS.map((reason, i) => (
            <motion.li key={i} variants={itemFade} className="flex items-start gap-3 text-sm" style={{ color: '#4A5580' }}>
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold flex-shrink-0"
                style={{ background: '#FFF8E1', border: '1px solid #FFBF00', color: '#B8960A' }}
              >
                {i + 1}
              </span>
              <span className="leading-relaxed">{reason}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* ── Donation Methods ──────────────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mb-12"
      >
        <motion.h2
          variants={itemFade}
          className="font-bold mb-5"
          style={{ color: '#112E81' }}
        >
          Ways to Support
        </motion.h2>

        <div className="space-y-4">
          {METHODS.map((method) => (
            <motion.a
              key={method.name}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemFade}
              whileHover={{ y: -3, boxShadow: `0 12px 32px ${method.borderColor}22` }}
              whileTap={{ scale: 0.99 }}
              className="group flex items-center gap-5 p-5 rounded-2xl transition-colors duration-200 block"
              style={{
                background: method.bg,
                border: `1.5px solid ${method.borderColor}44`,
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = method.borderColor}
              onMouseLeave={e => e.currentTarget.style.borderColor = `${method.borderColor}44`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0 text-2xl shadow-sm`}
              >
                {method.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="font-semibold" style={{ color: '#0C1A4E' }}>{method.name}</div>
                <div className="text-sm mt-0.5" style={{ color: '#4A5580' }}>{method.desc}</div>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0 flex items-center gap-1.5 text-sm font-semibold" style={{ color: method.textColor }}>
                <span className="hidden sm:inline">{method.cta}</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* ── Non-monetary ways to help ─────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.52 }}
        className="rounded-2xl p-6 mb-12 shadow-sm"
        style={{ background: '#EEF2FF', border: '1.5px solid rgba(17,46,129,0.15)' }}
      >
        <h2 className="font-bold mb-3 flex items-center gap-2" style={{ color: '#112E81' }}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FFBF00' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          Can't Donate? That's Fine.
        </h2>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#4A5580' }}>
          There are other ways to support the hub that cost absolutely nothing:
        </p>
        <ul className="space-y-2">
          {FREE_HELP.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#4A5580' }}>
              <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: '#FFBF00' }}>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ── Thank you note ────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center rounded-2xl py-10 px-6"
        style={{ background: '#112E81' }}
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, repeatDelay: 2.5, duration: 0.6 }}
          className="text-4xl mb-3"
        >
          🙏
        </motion.div>
        <h3 className="font-bold text-white text-lg mb-2">Thank You</h3>
        <p className="text-sm max-w-sm mx-auto mb-4" style={{ color: '#93C5FD' }}>
          Whether you donate or not, thank you for using the hub. The goal has always been
          to make your degree a little easier. Good luck out there.
        </p>
        <div className="font-mono text-sm" style={{ color: '#FFBF00' }}>— nonydev</div>
      </motion.div>

    </div>
  )
}
