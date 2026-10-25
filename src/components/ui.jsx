export function Kicker({ children }) {
  return (
    <div className="inline-flex items-center font-mono text-[10px] px-2.5 py-1 rounded bg-sky-950/40 border border-sky-900/60 text-sky-400 mb-4 uppercase tracking-wider font-bold select-none">
      <span>{children}</span>
    </div>
  )
}

export function SectionHeading({ title, sub }) {
  return (
    <div className="mb-8 select-none">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight leading-none mb-2">
        {title}
      </h2>
      <p className="text-sm text-slate-500 mt-1">
        {sub}
      </p>
    </div>
  )
}