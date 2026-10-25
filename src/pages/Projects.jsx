import { Kicker, SectionHeading } from '../components/ui.jsx'

const PROJECTS = [
  {
    name: 'fraud-detection-system',
    stack: ['Python', 'LightGBM', 'Scikit-learn', 'NumPy', 'Matplotlib'],
    points: [
      'Built an end-to-end fraud detection pipeline over a dataset of 1.8M+ credit card transactions.',
      'Ran EDA, feature engineering, and categorical encoding; handled severe class imbalance with SMOTE and cost-sensitive learning.',
      'Trained and compared Random Forest, XGBoost, and LightGBM classifiers.',
      'Tuned LightGBM to 98.67% ROC-AUC, 89.27% precision, and 76.12% F1-score on the held-out test set.',
    ],
  },
  {
    name: 'wanderlust',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Bootstrap', 'Cloudinary'],
    points: [
      'Full-stack MERN application for browsing and booking travel accommodations.',
      'Built user authentication, image uploads via Cloudinary, and property search filters.',
      'Designed the REST API layer and wired it up to the React frontend.',
    ],
  },
  {
    name: 'realtime-media-synchronizer',
    stack: ['Node.js', 'Express', 'Socket.IO', 'JavaScript'],
    points: [
      'Real-time media sync platform — a broadcaster controls playback across every connected listener.',
      'Low-latency play / pause / seek sync built on Socket.IO.',
      'Multi-user session management with role-based access (Broadcaster vs. Listener).',
      'Timestamp-based resynchronization keeps playback consistent and drift-free.',
    ],
  },
]

export default function Projects() {
  return (
    <section className="px-6 py-12 sm:px-10 sm:py-14">
      <Kicker>projects</Kicker>
      <SectionHeading title="Things I've built" sub="3 selected projects — spanning ML, full-stack, and real-time systems" />

      <div className="space-y-5">
        {PROJECTS.map((p) => (
          <div key={p.name} className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-slate-600 transition-colors">
            <div className="flex items-center justify-between gap-3 flex-wrap px-5 py-3.5 bg-slate-800/60 border-b border-slate-800">
              <span className="font-mono text-sm text-slate-300">
                <span className="text-sky-400">▸ </span>
                <b className="text-slate-100 font-semibold">{p.name}</b>
              </span>
              <a
                href="https://github.com/Coder-06-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-slate-500 border border-slate-700 rounded px-2.5 py-1 hover:text-sky-400 hover:border-sky-400 transition-colors"
              >
                View code ↗
              </a>
            </div>
            <div className="px-5 py-5 sm:px-6">
              <div className="font-mono text-xs text-purple-400 mb-3.5 break-words">
                <span className="text-slate-600">import</span> {'{ '}
                {p.stack.map((s, i) => (
                  <span key={s}>
                    <span className="text-amber-400">{s}</span>
                    {i < p.stack.length - 1 ? ', ' : ''}
                  </span>
                ))}
                {' }'}
              </div>
              <ul className="space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-slate-400 leading-relaxed">
                    <span className="font-mono text-emerald-400 font-bold shrink-0">+</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
