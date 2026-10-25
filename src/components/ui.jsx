export function Kicker({ children }) {
  return (
    <div className="font-mono text-xs text-sky-400 tracking-wide mb-3">
      <span className="text-purple-400">const</span> {children} <span className="text-slate-500">=</span>
    </div>
  )
}

export function SectionHeading({ title, sub }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-100 tracking-tight mb-1">{title}</h2>
      <div className="font-mono text-xs text-slate-600 mb-9">{sub}</div>
    </>
  )
}
