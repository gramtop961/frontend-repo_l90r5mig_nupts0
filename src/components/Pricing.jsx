import { motion } from 'framer-motion'

const plans = [
  { name: 'Starter', price: 499, perks: ['1 page', 'Basic brand kit', '1 revision', '7-day delivery'] },
  { name: 'Growth', price: 2499, perks: ['Up to 5 pages', 'Messaging & brand kit', '3 revisions', '2-week delivery'] },
  { name: 'Scale', price: 4999, perks: ['Custom pages', 'Product strategy', 'Unlimited revisions', 'Priority support'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text">Simple, transparent pricing</h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">Pick a plan that matches your ambitions. Cancel anytime.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{delay: i*0.05}} className={`rounded-2xl card-surface p-6 ${i===1 ? 'ring-2 ring-violet-400 soft-shadow shimmer-delayed' : ''}`}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold">{p.name}</h3>
              </div>
              <div className="mt-4 text-4xl font-extrabold tracking-tight">${p.price}<span className="text-base font-normal text-gray-500">/project</span></div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {p.perks.map((perk)=> <li key={perk}>• {perk}</li>)}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 bg-gray-900 text-white dark:bg-white dark:text-black font-medium hover-raise hover-glow transition">Choose {p.name}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
