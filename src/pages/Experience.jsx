import { Kicker, SectionHeading } from '../components/ui.jsx'

export default function Experience() {
  return (
    <section className="px-6 py-12 sm:px-10 sm:py-14">
      <Kicker>experience</Kicker>
      <SectionHeading title="Work history" sub='git log --author="Simron Sarita"' />

      <div className="relative pl-7">
        <span className="absolute left-[5px] top-1.5 w-px h-full bg-slate-800" />
        <span className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-slate-950 border-2 border-amber-400" />
        <div className="font-mono text-xs text-amber-400 mb-1.5">commit 7f3a91c</div>
        <div className="text-lg font-bold text-slate-100 mb-1">Frontend Intern — Vishvena Techno Solutions</div>
        <div className="font-mono text-xs text-slate-600 mb-3">Nov 2024 – Feb 2025 · Remote</div>
        <ul className="space-y-2">
          {[
            'Learned and applied React.js to build reusable, component-based UIs.',
            'Converted Figma designs into responsive React components with pixel-perfect accuracy.',
            'Worked hands-on with props, state, hooks, and component structuring.',
            'Collaborated in an agile environment, adapting quickly to design iterations and feedback.',
          ].map((pt) => (
            <li key={pt} className="flex gap-2 text-sm text-slate-400 leading-relaxed">
              <span className="font-mono text-emerald-400 font-bold shrink-0">+</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
