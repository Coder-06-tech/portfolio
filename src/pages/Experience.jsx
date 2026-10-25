import { Kicker, SectionHeading } from '../components/ui.jsx'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const EXPERIENCE_LOG = {
  role: 'Frontend Intern',
  company: 'Vishvena Techno Solutions',
  date: 'Nov 2024 – Feb 2025',
  location: 'Remote',
  details: [
    'Developed modular, reusable React UI components, resulting in improved codebase scalability and cleaner layouts.',
    'Translated complex Figma designs into responsive, cross-browser interfaces with 100% pixel-perfect fidelity.',
    'Optimized application rendering using advanced React hooks, streamlining asynchronous data operations.',
    'Collaborated in an Agile development environment, actively contributing to peer reviews, design refactors, and daily syncs.',
  ]
}

export default function Experience() {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-12 max-w-4xl mx-auto">
      <Kicker>experience</Kicker>
      <SectionHeading title="Work history" sub="Professional Experience" />

      <div className="glass-card rounded-xl p-6 sm:p-8">
        <div className="flex flex-col gap-4">
          
          {/* Header */}
          <div className="flex justify-between items-start gap-4 flex-wrap pb-4 border-b border-slate-900">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-900 text-sky-400 select-none">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">{EXPERIENCE_LOG.role}</h3>
                <div className="text-base text-sky-300 font-semibold mt-0.5">{EXPERIENCE_LOG.company}</div>
              </div>
            </div>

            <div className="flex flex-col sm:items-end text-xs text-slate-500 font-mono gap-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {EXPERIENCE_LOG.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {EXPERIENCE_LOG.location}
              </span>
            </div>
          </div>

          {/* Details list */}
          <div className="mt-2">
            <ul className="space-y-3.5 pl-5 list-disc text-slate-400">
              {EXPERIENCE_LOG.details.map((pt, i) => (
                <li key={i} className="text-sm sm:text-base leading-relaxed">
                  {pt}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}