import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Award, Search, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-12 max-w-4xl mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-none text-slate-100 mb-3">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              Simron Sarita
            </span>
          </h1>

          <div className="font-mono text-sm sm:text-base text-amber-400 flex items-center gap-1.5 mt-2">
            <span className="text-slate-600 font-bold">&gt;</span>
            <span>
              B.Tech CSE @ IIIT Bhubaneswar &bull; Full-Stack Developer &bull;
              ML Engineer
            </span>
          </div>
        </div>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mt-2">
          I build scalable web applications and intelligent machine learning
          solutions. From developing end-to-end MERN applications to training
          fraud detection models on large transactions, I enjoy solving
          real-world problems through clean architecture, efficient algorithms,
          and modern technologies.
        </p>

        <div className="flex flex-wrap gap-3.5 mt-4">
          <Link
            to="/projects"
            className="font-mono text-sm px-6 py-3.5 rounded bg-sky-500 text-slate-950 font-semibold inline-flex items-center gap-2 hover:bg-sky-400 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]"
          >
            View projects <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="/resume.pdf"
            download="Simron_Sarita_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm px-6 py-3.5 rounded border border-slate-800 text-slate-400 bg-slate-900/30 hover:text-slate-100 hover:border-slate-700 active:scale-[0.98] transition-all"
          >
            Download Resume
          </a>
        </div>

        <div className="flex flex-wrap gap-5 font-mono text-xs text-slate-500 mt-6 py-4 border-y border-slate-900 select-none">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-slate-600" />
            <b className="text-slate-400 font-medium">Location:</b> Bhubaneswar,
            IN
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-slate-600" />
            <b className="text-slate-400 font-medium">CGPA:</b> 9.06
          </span>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 mt-6">
          <div className="space-y-4">
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              I'm a B.Tech Computer Science student at IIIT Bhubaneswar with a passion for full-stack development and machine learning. I enjoy building scalable web applications, solving complex problems, and continuously learning new technologies. Currently, I'm focused on developing production-ready software while improving my problem-solving skills through Data Structures & Algorithms.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 h-fit shadow-lg relative overflow-hidden select-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

            <h4 className="text-slate-200 text-base font-bold mb-4 flex items-center gap-2 border-b border-slate-900 pb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Quick Profile</span>
            </h4>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-slate-900/60 pb-2">
                <span className="text-slate-500">Degree</span>
                <span className="text-slate-300 font-semibold">
                  B.Tech Computer Science
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-900/60 pb-2">
                <span className="text-slate-500">Institution</span>
                <span className="text-slate-300 font-semibold">
                  IIIT Bhubaneswar
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-900/60 pb-2">
                <span className="text-slate-500">Graduation Year</span>
                <span className="text-slate-300 font-semibold">2028</span>
              </div>
              <div className="flex justify-between border-b border-slate-900/60 pb-2">
                <span className="text-slate-500">Specialization</span>
                <span className="text-slate-300 font-semibold">
                  Full-Stack &amp; ML
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}