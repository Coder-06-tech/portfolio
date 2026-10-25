import { Github, ExternalLink, Code } from 'lucide-react'
import { Kicker, SectionHeading } from '../components/ui.jsx'

const PROJECTS = [
  {
    name: 'Credit Card Fraud detection system',
    stack: ['Python', 'LightGBM', 'Scikit-learn', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/Coder-06-tech/credit-card-fraud-detection',
    points: [
      'Designed and implemented an end-to-end machine learning pipeline to detect anomalies across 1.8M+ credit card transactions.',
      'Engineered sophisticated feature sets and resolved extreme class imbalance (99.9% negative class) using SMOTE and cost-sensitive loss optimizations.',
      'Evaluated and benchmarked Random Forest, XGBoost, and LightGBM classifiers; optimized hyper-parameters via Bayesian search.',
      'Achieved a production-grade 98.67% ROC-AUC and 89.27% precision, minimizing false positives and securing transactions.',
    ],
  },
  {
    name: 'AssetFlow –Asset Management System',
    stack: ['Express.js', 'React.js', 'Node.js', 'PostgreSQL', 'JWT','Tailwind CSS'],
    github: 'https://github.com/Coder-06-tech/AssestFlow',
    points: [
      'Developed a full-stack ERP asset management system with JWT-based authentication and role-based access control.',
      'Designed a PostgreSQL database using Prisma ORM to manage assets, employees, and inventory through normalized relational models',
      'Built RESTful APIs supporting asset requests, approval workflows, reports, and CRUD operations for efficient asset allocation and tracking',
    ],
  },
  {
    name: 'Wanderlust',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Bootstrap', 'Cloudinary'],
    github: 'https://github.com/Coder-06-tech/delta-project',
    points: [
      'Architected a full-stack MERN accommodation booking platform featuring secure token authentication and role-based permissions.',
      'Integrated Cloudinary CDN pipelines for optimized media uploads and constructed high-performance MongoDB queries utilizing indexing.',
      'Designed RESTful API endpoints utilizing Express middleware for custom authentication, data validation, and error logging.',
    ],
  },
  {
    name: 'Realtime Media Synchronizer',
    stack: ['Node.js', 'Express', 'Socket.IO', 'JavaScript'],
    github: 'https://github.com/Coder-06-tech',
    points: [
      'Engineered a low-latency, real-time media synchronization hub capable of broadcasting media streams with sub-50ms sync latency.',
      'Designed resilient WebSocket event layers utilizing Socket.IO for real-time room communication and event-driven playback control.',
      'Implemented custom drift-compensation timestamp algorithms to eliminate playback delay and maintain client-host synchronization.',
    ],
  },
]

export default function Projects() {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-12 max-w-4xl mx-auto">
      <Kicker>projects</Kicker>
      <SectionHeading 
        title="Things I've built"  
      />

      <div className="grid grid-cols-1 gap-6">
        {PROJECTS.map((p) => (
          <div 
            key={p.name} 
            className="glass-card rounded-xl overflow-hidden hover:translate-y-[-2px]"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between gap-3 flex-wrap px-5 py-3.5 bg-slate-900/60 border-b border-slate-900 select-none">
              <span className="font-mono text-sm text-slate-300 flex items-center gap-1.5">
                <Code className="w-4 h-4 text-sky-400" />
                <b className="text-slate-100 font-bold text-base tracking-tight">{p.name}</b>
              </span>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-slate-400 border border-slate-800 rounded px-2.5 py-1 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-950 transition-all flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View code</span>
              </a>
            </div>

            {/* Content body */}
            <div className="p-5 sm:p-6">
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-4 select-none">
                {p.stack.map((s) => (
                  <span key={s} className="bg-slate-950 border border-slate-900 text-xs px-2.5 py-1 rounded text-sky-400 font-mono">
                    {s}
                  </span>
                ))}
              </div>

              {/* Bullet points */}
              <ul className="space-y-3 pl-4 list-disc text-slate-400">
                {p.points.map((pt) => (
                  <li key={pt} className="text-sm sm:text-base leading-relaxed">
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