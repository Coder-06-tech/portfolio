import { Mail, Github, Linkedin } from 'lucide-react'
import { Kicker, SectionHeading } from '../components/ui.jsx'

export default function Contact() {
  return (
    <section className="px-6 py-12 sm:px-10 sm:py-14">
      <Kicker>contact</Kicker>
      <SectionHeading title="Let's talk" sub="contact.sh" />

      <div className="bg-slate-900 border border-slate-800 rounded-lg px-6 py-6 font-mono text-sm">
        <div className="text-slate-400">
          <span className="text-emerald-400">$</span> open --internships --collabs --interesting-problems
        </div>
        <div className="text-slate-600 mt-3">Reach me fastest by email — usually reply within a day.</div>
      </div>

      <div className="flex flex-wrap gap-4 mt-6">
        <a
          href="mailto:simronsarita@gmail.com"
          className="flex items-center gap-2 px-4 py-3 border border-slate-700 rounded-md font-mono text-sm text-slate-200 hover:border-sky-400 hover:text-sky-400 transition-colors"
        >
          <Mail className="w-4 h-4" /> simronsarita@gmail.com
        </a>
        <a
          href="https://github.com/Coder-06-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 border border-slate-700 rounded-md font-mono text-sm text-slate-200 hover:border-sky-400 hover:text-sky-400 transition-colors"
        >
          <Github className="w-4 h-4" /> github.com/Coder-06-tech
        </a>
        <a
          href="https://linkedin.com/in/simron-sarita"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 border border-slate-700 rounded-md font-mono text-sm text-slate-200 hover:border-sky-400 hover:text-sky-400 transition-colors"
        >
          <Linkedin className="w-4 h-4" /> linkedin.com/in/simron-sarita
        </a>
      </div>
    </section>
  )
}
