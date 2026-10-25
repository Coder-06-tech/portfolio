import { Kicker, SectionHeading } from '../components/ui.jsx'

const SKILLS = [
  { key: 'languages', items: ['Python', 'C / C++', 'JavaScript', 'TypeScript', 'HTML / CSS'] },
  { key: 'web_development', items: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'] },
  { key: 'ml_and_data', items: ['PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'] },
  { key: 'databases', items: ['SQL', 'MongoDB'] },
  { key: 'tools', items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'] },
  { key: 'coursework', items: ['Data Structures & Algorithms', 'OOP', 'DBMS'] },
]

export default function Skills() {
  return (
    <section className="px-6 py-12 sm:px-10 sm:py-14">
      <Kicker>skills</Kicker>
      <SectionHeading title="Stack & tools" sub="skills.json" />

      <div className="bg-slate-900 border border-slate-800 rounded-lg px-6 py-6 sm:px-7 font-mono text-sm overflow-x-auto">
        <div className="text-slate-600">{'{'}</div>
        <div className="pl-5">
          {SKILLS.map((group) => (
            <div key={group.key}>
              <div className="text-sky-400 mt-1">
                "{group.key}"<span className="text-slate-500">:</span>
              </div>
              <div className="flex flex-wrap gap-2 py-1.5 pb-3.5">
                {group.items.map((item) => (
                  <span key={item} className="bg-slate-800 border border-slate-700 text-slate-400 text-xs px-2.5 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-slate-600">{'}'}</div>
      </div>
    </section>
  )
}
