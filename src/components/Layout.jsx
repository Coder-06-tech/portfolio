import { NavLink, Outlet } from 'react-router-dom'

const NAV = [
  { to: '/', label: 'about', ext: '.md', end: true },
  { to: '/projects', label: 'projects', ext: '/' },
  { to: '/experience', label: 'experience', ext: '.log' },
  { to: '/skills', label: 'skills', ext: '.json' },
  { to: '/education', label: 'education', ext: '.md' },
  { to: '/contact', label: 'contact', ext: '.sh' },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
        {/* title bar */}
        <div className="flex items-center gap-4 px-5 py-3 bg-slate-800 border-b border-slate-700">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="hidden sm:block flex-1 text-center font-mono text-xs text-slate-500">
            <span className="text-slate-400">simron-sarita</span> — portfolio — code editor
          </div>
        </div>

        {/* navbar */}
        <nav className="flex overflow-x-auto bg-slate-900 border-b border-slate-800">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `relative font-mono text-xs px-4 sm:px-5 py-3 whitespace-nowrap border-r border-slate-800 transition-colors ${
                  isActive
                    ? 'text-slate-100 bg-slate-950'
                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/60'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span className="text-slate-600">{item.ext}</span>
                  {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* routed page content */}
        <div className="bg-slate-950">
          <Outlet />
        </div>

        {/* footer */}
        <div className="text-center py-5 font-mono text-xs text-slate-600 border-t border-slate-800">
          built by Simron Sarita · {new Date().getFullYear()}
        </div>
      </div>
    </div>
  )
}
