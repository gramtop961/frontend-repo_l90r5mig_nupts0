export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-violet-500 to-cyan-400 shimmer" />
          <span className="font-semibold">Aurora Studio</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Aurora Studio. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
          <a className="hover-raise" href="#">Privacy</a>
          <a className="hover-raise" href="#">Terms</a>
          <a className="hover-raise" href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
