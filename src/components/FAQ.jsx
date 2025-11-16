import { useState } from 'react'

const items = [
  { q: 'How long does a project take?', a: 'Most projects are delivered in 1-3 weeks depending on scope and complexity.' },
  { q: 'Do you offer ongoing support?', a: 'Yes, we offer maintenance retainers and on-demand support after launch.' },
  { q: 'Can you work with my existing brand?', a: 'Absolutely. We can refresh your current brand or build on your existing system.' },
  { q: 'What tools do you use?', a: 'We use modern frameworks with a strong focus on performance, accessibility, and motion.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center gradient-text">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-gray-200 dark:divide-neutral-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-800 card-surface">
          {items.map((it, i) => (
            <div key={i}>
              <button className="w-full text-left px-6 py-4 hover:bg-gray-50/60 dark:hover:bg-neutral-900/80 transition flex items-center justify-between" onClick={() => setOpen(open===i ? null : i)}>
                <span className="font-medium">{it.q}</span>
                <span className="text-gray-500">{open===i ? '-' : '+'}</span>
              </button>
              <div className={`px-6 overflow-hidden transition-[max-height] duration-300 ${open===i ? 'max-h-40' : 'max-h-0'}`}>
                <p className="pb-4 text-sm text-gray-700 dark:text-gray-300">{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
