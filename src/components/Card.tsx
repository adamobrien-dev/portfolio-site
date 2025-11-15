type LaunchStatus = "in-progress" | "shipped";

type P = {
  title: string;
  blurb: string;
  badge: string;
  codeLink?: string;
  demoLink?: string;
  siteLink?: string;
  status?: LaunchStatus;
};

const statusCopy: Record<LaunchStatus, { label: string; tone: string }> = {
  shipped: { label: "Shipped", tone: "text-emerald-300 border-emerald-500/30 bg-emerald-500/10" },
  "in-progress": {
    label: "In Progress",
    tone: "text-amber-200 border-amber-400/30 bg-amber-500/10",
  },
};

export default function Card({ title, blurb, badge, codeLink, demoLink, siteLink, status }: P) {
  const actions = [
    codeLink ? { label: "View Code", href: codeLink } : null,
    demoLink ? { label: "Try Demo", href: demoLink } : null,
    siteLink ? { label: "Visit Site", href: siteLink } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-neutral-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all">
      <div className="h-40 w-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black grid place-items-center">
        <div className="min-w-[120px] max-w-[160px] rounded-xl bg-gradient-to-tr from-white/10 to-white/0 backdrop-blur-sm border border-white/10 px-4 py-3 text-center">
          <span className="text-[10px] uppercase tracking-wide text-white/70 leading-tight">{badge}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {status ? (
            <span
              className={`rounded-full border px-4 py-0.5 text-[11px] font-semibold uppercase tracking-wide whitespace-nowrap ${statusCopy[status].tone}`}
            >
              {statusCopy[status].label}
            </span>
          ) : null}
        </div>
        <p className="mt-1 text-sm text-white/60">{blurb}</p>
        {actions.length ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {actions.map((action) => (
              <a
                key={action.href}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/15 px-3 py-1.5 text-sm text-white/70 hover:text-white hover:border-white/30 transition-colors"
              >
                {action.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-0 translate-y-12 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-6" />
    </div>
  );
}

