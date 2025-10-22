type P = { title: string; blurb: string; badge: string; codeLink?: string; demoLink?: string };

export default function Card({ title, blurb, badge, codeLink, demoLink }: P) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all">
      <div className="h-40 w-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black grid place-items-center">
        <div className="w-20 h-20 rounded-xl bg-gradient-to-tr from-white/10 to-white/0 backdrop-blur-sm border border-white/10 grid place-items-center">
          <span className="text-[10px] uppercase tracking-wide text-white/70">{badge}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-white/60">{blurb}</p>
        <div className="mt-4 flex gap-3">
          {codeLink ? (
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-md border border-white/15 px-3 py-1.5 text-sm text-white/70 hover:text-white hover:border-white/30 transition-colors"
            >
              View Code
            </a>
          ) : (
            <button disabled className="cursor-not-allowed rounded-md border border-white/15 px-3 py-1.5 text-sm text-white/70">
              View Code
            </button>
          )}
          {demoLink ? (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-md border border-white/15 px-3 py-1.5 text-sm text-white/70 hover:text-white hover:border-white/30 transition-colors"
            >
              Try Demo
            </a>
          ) : (
            <button disabled className="cursor-not-allowed rounded-md border border-white/15 px-3 py-1.5 text-sm text-white/70">
              Try Demo
            </button>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 translate-y-12 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-6" />
    </div>
  );
}

