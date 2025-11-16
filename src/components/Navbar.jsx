import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 dark:bg-neutral-900/60 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-violet-500 to-cyan-400 shadow-md shadow-violet-300/40 group-hover:scale-110 transition-transform" />
            <span className="font-semibold text-lg tracking-tight">Aurora Studio</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg shadow hover:shadow-lg transition-shadow">
              Start a Project <ArrowRight size={16} />
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors" aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-gray-800 dark:text-gray-100">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg shadow">
              Start a Project <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
