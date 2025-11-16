export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tell us about your project</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-300">Share your goals and we’ll get back to you within 24 hours.</p>
            <div className="mt-8 rounded-2xl p-6 bg-white/70 dark:bg-neutral-900/60 backdrop-blur border border-gray-200 dark:border-neutral-800">
              <div className="text-sm text-gray-600 dark:text-gray-300">Prefer email? hello@aurora.studio</div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">We’re available Mon–Fri, 9am–6pm (EST)</div>
            </div>
          </div>
          <form className="rounded-2xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur border border-gray-200 dark:border-neutral-800 p-6 space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input className="mt-1 w-full rounded-xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/50 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/50 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Budget</label>
              <select className="mt-1 w-full rounded-xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/50 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400">
                <option>Under $1k</option>
                <option>$1k – $5k</option>
                <option>$5k – $10k</option>
                <option>$10k+</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Project details</label>
              <textarea rows="4" className="mt-1 w-full rounded-xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/50 px-4 py-3 outline-none focus:ring-2 focus:ring-violet-400" placeholder="What are you building?" />
            </div>
            <button type="button" className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3 bg-gray-900 text-white dark:bg-white dark:text-black font-medium shadow hover:-translate-y-0.5 transition">Send message</button>
            <p className="text-xs text-center text-gray-500">This is a demo form.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
