/**
 * Donate.jsx — Support / Donations page
 *
 * Explains why support matters and shows donation options.
 * Since this is a static site, payment links are placeholders.
 */

// Why donate — shown as a bullet list
const REASONS = [
  'Hosting and domain costs to keep the site running',
  'Time spent researching and curating quality resources',
  'Future development: more courses, better design, community features',
  'Motivation to keep this project alive and growing',
]

// Donation methods (placeholders — replace URLs with real payment links)
const METHODS = [
  {
    name: 'Buy Me a Coffee',
    desc: 'One-time or recurring micro-donations. Even $1 helps.',
    icon: '☕',
    color: 'from-yellow-500 to-amber-500',
    borderColor: 'border-yellow-500/30 hover:border-yellow-400/60',
    textColor: 'text-yellow-400',
    url: '#', // Replace with: https://buymeacoffee.com/yourname
    cta: 'Buy a Coffee',
  },
  {
    name: 'PayPal',
    desc: 'Send a one-time donation via PayPal.',
    icon: '💳',
    color: 'from-blue-500 to-indigo-500',
    borderColor: 'border-blue-500/30 hover:border-blue-400/60',
    textColor: 'text-blue-400',
    url: '#', // Replace with: https://paypal.me/yourname
    cta: 'Donate via PayPal',
  },
  {
    name: 'Mobile Money',
    desc: 'For those in Ghana and West Africa — send via MoMo.',
    icon: '📱',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-500/30 hover:border-emerald-400/60',
    textColor: 'text-emerald-400',
    url: '#', // Replace with your MoMo number or a form link
    cta: 'Send via MoMo',
  },
]

export default function Donate() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <div className="text-center mb-14">
        <span className="text-violet-400 font-mono text-sm uppercase tracking-widest">
          Support the hub
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-2 mb-4">
          Keep the Knowledge Free
        </h1>
        <p className="text-slate-400 leading-relaxed max-w-xl mx-auto">
          CS Resource Hub is completely free to use — no ads, no sign-ups, no paywalls.
          If it has helped you, consider supporting it so it can keep helping others.
        </p>
      </div>

      {/* ── Why Support Section ───────────────────────────────────────────── */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-slate-100 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Why Your Support Matters
        </h2>
        <ul className="space-y-2.5">
          {REASONS.map((reason, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="w-5 h-5 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                {i + 1}
              </span>
              <span className="leading-relaxed">{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Donation Methods ──────────────────────────────────────────────── */}
      <div className="mb-10">
        <h2 className="font-bold text-slate-100 mb-5">Ways to Donate</h2>
        <div className="space-y-4">
          {METHODS.map((method) => (
            <a
              key={method.name}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group flex items-center gap-5 p-5 rounded-2xl
                bg-slate-900/50 border ${method.borderColor}
                transition-all duration-200 hover:bg-slate-900 hover:-translate-y-0.5 hover:shadow-xl
              `}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0 text-2xl`}>
                {method.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-slate-100">{method.name}</div>
                <div className="text-slate-500 text-sm mt-0.5">{method.desc}</div>
              </div>

              {/* CTA */}
              <div className={`flex-shrink-0 flex items-center gap-1.5 text-sm font-medium ${method.textColor}`}>
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
            </a>
          ))}
        </div>
      </div>

      {/* ── Non-monetary ways to help ─────────────────────────────────────── */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-slate-100 mb-4">Can't Donate? That's Fine.</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          There are other ways to support the hub that cost absolutely nothing:
        </p>
        <ul className="space-y-2">
          {[
            'Share the site with classmates who could benefit from it',
            'Recommend it to your study group or department WhatsApp group',
            'Give feedback — if something is wrong or missing, let us know',
            'Star the GitHub repo if the project gets open-sourced',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
              <span className="text-emerald-400 flex-shrink-0 mt-0.5">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Thank you note ────────────────────────────────────────────────── */}
      <div className="text-center">
        <div className="text-4xl mb-3">🙏</div>
        <h3 className="font-bold text-slate-100 mb-2">Thank You</h3>
        <p className="text-slate-500 text-sm max-w-sm mx-auto">
          Whether you donate or not, thank you for using the hub. The goal has always been
          to make your degree a little easier. Good luck out there.
        </p>
        <div className="mt-4 font-mono text-emerald-400 text-sm">— nonydev</div>
      </div>
    </div>
  )
}
