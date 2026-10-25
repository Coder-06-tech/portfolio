import { NavLink, Outlet, Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

const NAV = [
  { to: '/', label: 'About', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-200 flex flex-col font-sans overflow-hidden">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sky-500/5 glow-blob animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/5 glow-blob animate-pulse-slow" />

      <div className="relative w-full max-w-5xl mx-auto px-6 sm:px-8 flex flex-col min-h-screen z-10">
        
        <header className="flex items-center justify-between py-6 sm:py-8 border-b border-slate-900 shrink-0">
          <Link 
            to="/" 
            className="flex items-center gap-2 group focus:outline-none"
          >
            <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              Simron Sarita
            </span>
          </Link>
          
          {/* Navigation Links */}
          <nav className="flex items-center gap-1 sm:gap-6 overflow-x-auto scrollbar-none py-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `text-sm font-medium px-2.5 py-1.5 sm:px-3 rounded-md transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-sky-400 bg-sky-950/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>

        {/* Page Content area */}
        <main className="flex-1 py-8 sm:py-12 flex flex-col">
          <Outlet />
        </main>

        {/* Standard Web Footer */}
        <footer className="py-8 border-t border-slate-900 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
          <div className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} Simron Sarita. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-mono">
            <span>Built with React &amp; Tailwind CSS</span>
          </div>
        </footer>

      </div>
    </div>
  )
}