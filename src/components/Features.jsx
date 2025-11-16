import { motion } from 'framer-motion'
import { Sparkle, Rocket, Palette, ShieldCheck } from 'lucide-react'

const features = [
  {
    title: 'Motion-first design',
    icon: Sparkle,
    desc: 'Tasteful micro-interactions and smooth motion guide attention and delight users.'
  },
  {
    title: 'Performance obsessed',
    icon: Rocket,
    desc: 'We sweat the details so your site loads fast and feels instant across devices.'
  },
  {
    title: 'Brand craftsmanship',
    icon: Palette,
    desc: 'From typography to color, we craft a brand system that feels uniquely yours.'
  },
  {
    title: 'Security & accessibility',
    icon: ShieldCheck,
    desc: 'Inclusive, secure experiences following best practices and modern standards.'
  },
]

export default function Features() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What we do</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">We blend design, engineering, and strategy to ship products people love.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{delay: i*0.05}} className="rounded-2xl p-6 bg-white/70 dark:bg-neutral-900/60 backdrop-blur border border-gray-200 dark:border-neutral-800 hover:-translate-y-0.5 hover:shadow-xl transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white grid place-items-center shadow-lg">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
