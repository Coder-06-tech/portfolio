import {SectionHeading } from '../components/ui.jsx'
import { GraduationCap, Award, Calendar, CheckSquare, Sparkles } from 'lucide-react'

export default function Education() {
  const educationData = [
    { school: 'IIIT Bhubaneswar', degree: 'B.Tech in Computer Science & Engineering', score: 'CGPA: 9.06', years: '2024 – 2028' },
    { school: 'DAV Public School, Unit 8', degree: 'Class XII Science (AISSCE)', score: 'Percentage: 96%', years: '2024' },
    { school: 'DAV Public School, Unit 8', degree: 'Class X', score: 'Percentage: 98.8%', years: '2022' },
  ]


  return (
    <section className="px-6 py-10 sm:px-10 sm:py-12 max-w-4xl mx-auto">
      <SectionHeading title="Education" sub="Academic background and achievements" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {educationData.map((e) => (
          <div key={e.school} className="glass-card rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:translate-y-[-1px]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded bg-slate-900 border border-slate-800 text-sky-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="font-mono text-xs text-slate-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{e.years}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-1.5">{e.school}</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">{e.degree}</p>
            </div>

            <div className="mt-auto pt-3 border-t border-slate-900 flex items-center justify-between">
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Result</span>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/5 border border-emerald-500/15 text-emerald-400 font-mono text-sm font-semibold">
                <Award className="w-4 h-4" />
                <span>{e.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </section>
  )
}