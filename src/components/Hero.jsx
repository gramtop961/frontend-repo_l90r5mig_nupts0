import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-violet-400/30 blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-cyan-400/30 blur-3xl animate-[float_14s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-20%,rgba(99,102,241,0.25),transparent)]" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="gradient-text">Design</span> that feels like magic.
            </motion.h1>
            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}} className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              We craft immersive digital experiences with a focus on motion, clarity, and craftsmanship. From branding to full-stack products, we’ve got you.
            </motion.p>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.6}} className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#work" className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-gray-900 text-white dark:bg:white dark:text-black font-medium soft-shadow hover-raise hover-glow transition">See our work</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl px-6 py-3 glass font-medium hover-raise transition shine-on-hover">Start a project</a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              {["120+","48","5.0"].map((stat,i)=> (
                <motion.div key={i} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.25 + i*0.05}} className="rounded-2xl p-4 card-surface shimmer">
                  <div className="text-2xl font-bold">{stat}</div>
                  <div className="text-xs text-gray-500">{i===0? 'Projects' : i===1? 'Awards' : 'Rating'}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} transition={{delay:0.15,duration:0.6}} className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-violet-200 to-cyan-200 dark:from-violet-950 dark:to-cyan-900 p-1 ring-gradient">
              <div className="h-full w-full rounded-[calc(1.5rem-4px)] card-surface p-4 grid grid-cols-2 gap-4">
                {[...Array(6)].map((_,i)=> (
                  <div key={i} className="rounded-xl bg-gradient-to-br from-white/70 to-white/40 dark:from-neutral-900/70 dark:to-neutral-900/30 border border-gray-200/60 dark:border-neutral-800/60 p-4 shine-on-hover">
                    <div className="h-3 w-20 rounded bg-gray-200 dark:bg-neutral-800 mb-3" />
                    <div className="h-24 rounded-lg bg-gradient-to-br from-violet-400/30 to-cyan-400/30 dark:from-violet-500/20 dark:to-cyan-500/20" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-6 -right-6 h-20 w-20 rounded-2xl glass grid place-items-center shadow-xl animate-[pulse-glow_3s_ease-in-out_infinite]">✨</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
