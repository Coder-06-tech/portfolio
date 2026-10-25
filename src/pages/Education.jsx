import { Kicker, SectionHeading } from '../components/ui.jsx'

export default function Education() {
  return (
    <section className="px-6 py-12 sm:px-10 sm:py-14">
      <Kicker>education</Kicker>
      <SectionHeading title="Education" sub="education.md" />

      <div className="divide-y divide-slate-800">
        {[
          { school: 'IIIT Bhubaneswar', degree: 'B.Tech in Computer Science and Engineering', score: 'CGPA: 9.06 / 10', years: '2024 – 2028' },
          { school: 'DAV Public School, Unit 8', degree: 'Class XII', score: '96%', years: '2024' },
        ].map((e) => (
          <div key={e.school} className="flex justify-between gap-5 flex-wrap py-5">
            <div>
              <div className="text-lg font-bold text-slate-100">{e.school}</div>
              <div className="text-sm text-slate-400 mt-1">{e.degree}</div>
              <div className="font-mono text-xs text-emerald-400 mt-1.5">{e.score}</div>
            </div>
            <div className="font-mono text-xs text-slate-600 whitespace-nowrap">{e.years}</div>
          </div>
        ))}
      </div>

      <div className="mt-7 pt-6 border-t border-dashed border-slate-800">
        <div className="font-mono text-xs text-emerald-400 opacity-80 mb-3">
          <span className="text-slate-600">// </span>extracurricular
        </div>
        <ul className="space-y-2">
          {[
            'Volunteer, College Tech Fest D3 — helped plan and coordinate technical events.',
            'Active member, College Tech Society — technical workshops and collaborative learning.',
          ].map((pt) => (
            <li key={pt} className="flex gap-2 text-sm text-slate-400">
              <span className="font-mono text-slate-600 shrink-0">#</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
