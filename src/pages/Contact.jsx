import { useState } from 'react'
import { Mail, Github, Linkedin, Copy, Check, ExternalLink } from 'lucide-react'
import { Kicker, SectionHeading } from '../components/ui.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('simronsarita@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="px-6 py-10 sm:px-10 sm:py-12 max-w-4xl mx-auto">
      <Kicker>contact</Kicker>
      <SectionHeading title="Let's talk" sub="Get in touch for internships and collaborations" />

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Email Card (interactive click-to-copy) */}
        <button
          onClick={copyEmail}
          className="glass-card rounded-xl p-5 text-left flex flex-col justify-between hover:translate-y-[-1px] group relative focus:outline-none"
        >
          <div className="flex justify-between items-start w-full mb-6">
            <div className="p-3 rounded bg-slate-950 border border-slate-900 text-rose-400 group-hover:text-rose-300 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors flex items-center gap-1.5">
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </span>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 text-base mb-1 group-hover:text-slate-100">Email Address</h4>
            <p className="font-mono text-xs sm:text-sm text-slate-400 break-all select-all">simronsarita@gmail.com</p>
          </div>
        </button>

        {/* GitHub Card */}
        <a
          href="https://github.com/Coder-06-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card rounded-xl p-5 flex flex-col justify-between hover:translate-y-[-1px] group"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded bg-slate-950 border border-slate-900 text-sky-400 group-hover:text-sky-300 transition-colors">
              <Github className="w-5 h-5" />
            </div>
            <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-sky-400 transition-colors" />
          </div>

          <div>
            <h4 className="font-bold text-slate-200 text-base mb-1 group-hover:text-slate-100">GitHub Profile</h4>
            <p className="font-mono text-xs sm:text-sm text-slate-400">Coder-06-tech</p>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/simron-sarita-b829b3340/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card rounded-xl p-5 flex flex-col justify-between hover:translate-y-[-1px] group"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 rounded bg-slate-950 border border-slate-900 text-indigo-400 group-hover:text-indigo-300 transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
          </div>

          <div>
            <h4 className="font-bold text-slate-200 text-base mb-1 group-hover:text-slate-100">LinkedIn Profile</h4>
            <p className="font-mono text-xs sm:text-sm text-slate-400">simron-sarita</p>
          </div>
        </a>
      </div>
    </section>
  )
}