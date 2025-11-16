import { motion } from 'framer-motion'

const projects = [
  { title: 'Nebula Commerce', tag: 'E-commerce', color: 'from-violet-500 to-fuchsia-500' },
  { title: 'Pulse Health', tag: 'Healthcare', color: 'from-cyan-500 to-teal-500' },
  { title: 'Orbit Bank', tag: 'Fintech', color: 'from-amber-500 to-rose-500' },
  { title: 'Studio Echo', tag: 'SaaS', color: 'from-blue-500 to-indigo-500' },
]

export default function Showcase() {
  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text">Selected work</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">A few highlights across different industries.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-medium px-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-900 hover-raise">View all</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{delay: i*0.05}} className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-neutral-800 card-surface">
              <div className={`h-56 sm:h-72 bg-gradient-to-br ${p.color} shimmer`} />
              <div className="p-6 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-500">{p.tag}</div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                </div>
                <div className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">Explore →</div>
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
