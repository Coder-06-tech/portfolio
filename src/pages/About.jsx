import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section className="px-6 py-12 sm:px-10 sm:py-14">
      <div className="font-mono text-sm text-slate-400 mb-4">
        <span className="text-emerald-400">$</span> whoami
      </div>
      <h1 className="text-4xl sm:text-6xl font-bold text-slate-100 tracking-tight leading-none mb-2">
        Simron Sarita
        <span className="inline-block w-2 ml-1 bg-amber-400 animate-pulse">&nbsp;</span>
      </h1>
      <div className="font-mono text-base text-amber-400 mt-3 mb-6">
        <span className="text-slate-600">&gt;</span> B.Tech CSE @ IIIT Bhubaneswar — Full-Stack &amp; ML Engineer
      </div>
      <p className="max-w-xl text-slate-400 text-base mb-8">
        I build things end to end — from training a fraud-detection model on 1.8M+ transactions to
        shipping the React interface someone actually clicks on. Currently a sophomore, always
        shipping something on the side.
      </p>

      <div className="flex flex-wrap gap-4 mb-11">
        <Link
          to="/projects"
          className="font-mono text-sm px-5 py-3 rounded-md bg-sky-400 text-slate-950 font-semibold inline-flex items-center gap-2 hover:bg-sky-300 transition-colors"
        >
          View projects <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/contact"
          className="font-mono text-sm px-5 py-3 rounded-md border border-slate-700 text-slate-400 hover:text-slate-100 hover:border-slate-500 transition-colors"
        >
          Get in touch
        </Link>
      </div>

      <div className="flex flex-wrap gap-7 font-mono text-xs text-slate-600 mb-12">
        <span><b className="text-slate-400 font-medium">Location</b> Bhubaneswar, Odisha, IN</span>
        <span><b className="text-slate-400 font-medium">CGPA</b> 9.06 / 10</span>
        <span><b className="text-slate-400 font-medium">Status</b> Open to internships</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10">
        <div>
          <div className="font-mono text-xs text-emerald-400 opacity-80 mb-2">
            <span className="text-slate-600">// </span>a bit more context
          </div>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            I'm a third-year Computer Science student at IIIT Bhubaneswar, splitting my time
            between machine learning (feature engineering, imbalanced classification, model
            tuning) and full-stack web development (React, Node, MongoDB). I like projects with a
            real, measurable outcome — a precision score, a working real-time sync, a UI that
            matches the Figma pixel-for-pixel.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Previously interned as a Frontend Developer at Vishvena Techno Solutions, converting
            designs into production React components.
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-5 font-mono text-xs h-fit">
          {[
            ['degree', 'B.Tech, CSE'],
            ['university', 'IIIT Bhubaneswar'],
            ['graduating', '2028'],
            ['focus', 'Full-stack · ML'],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between items-baseline py-2 border-b border-dashed border-slate-800">
              <span className="text-slate-600">{k}</span>
              <span className="text-slate-200">{v}</span>
            </div>
          ))}
          <div className="flex justify-between items-baseline py-2">
            <span className="text-slate-600">best_model_score</span>
            <span className="text-emerald-400">98.67% ROC-AUC</span>
          </div>
        </div>
      </div>
    </section>
  )
}
