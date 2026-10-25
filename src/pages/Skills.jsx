import { Kicker, SectionHeading } from '../components/ui.jsx'
import { Code2, Monitor, Cpu, Database, Wrench, BookOpen } from 'lucide-react'

const SKILLS = [
  { key: 'languages', title: 'Programming Languages', icon: Code2, items: ['Python', 'C / C++', 'JavaScript', 'TypeScript', 'HTML / CSS'] },
  { key: 'web_development', title: 'Web Development', icon: Monitor, items: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap'] },
  { key: 'ml_and_data', title: 'Machine Learning & Data Science', icon: Cpu, items: ['PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'] },
  { key: 'databases', title: 'Databases', icon: Database, items: ['SQL', 'MongoDB'] },
  { key: 'tools', title: 'Developer Tools', icon: Wrench, items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'] },
  { key: 'coursework', title: 'Core Coursework', icon: BookOpen, items: ['Data Structures & Algorithms', 'OOP', 'DBMS'] },
]

export default function Skills() {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-12 max-w-4xl mx-auto">
      <SectionHeading title="Skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 select-none">
        {SKILLS.map((group) => {
          const Icon = group.icon
          return (
            <div 
              key={group.key} 
              className="glass-card rounded-xl p-5 border border-slate-900 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 border-b border-slate-900 pb-3">
                  <div className="p-2 rounded bg-slate-950 border border-slate-900 text-sky-400">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span 
                      key={item} 
                      className="bg-slate-950 hover:bg-sky-950/20 border border-slate-900 hover:border-sky-500/30 text-slate-400 hover:text-sky-300 text-xs px-3 py-1.5 rounded transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}