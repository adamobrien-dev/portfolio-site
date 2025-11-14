type ContributionStatus = "open" | "merged" | "closed";

type Props = {
  project: string;
  title: string;
  description: string;
  status: ContributionStatus;
  link: string;
  highlights: string[];
};

const statusClassMap: Record<ContributionStatus, string> = {
  open: "bg-emerald-500/10 text-emerald-300 border-emerald-400/30",
  merged: "bg-sky-500/10 text-sky-300 border-sky-400/30",
  closed: "bg-rose-500/10 text-rose-300 border-rose-400/30",
};

const statusLabelMap: Record<ContributionStatus, string> = {
  open: "Open",
  merged: "Merged",
  closed: "Closed",
};

export default function ContributionCard({
  project,
  title,
  description,
  status,
  link,
  highlights,
}: Props) {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-neutral-900/80 p-6 ring-1 ring-white/10">
      <div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm uppercase tracking-wide text-white/60">{project}</p>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClassMap[status]}`}
          >
            {statusLabelMap[status]}
          </span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
        <ul className="mt-4 space-y-1 text-sm text-white/65">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white/80"
      >
        View PR
        <svg
          className="h-4 w-4 text-white/70"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 4H16V8.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11L16 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 5.25H4.25C4.11193 5.25 4 5.36193 4 5.5V15.75C4 15.8881 4.11193 16 4.25 16H14.5C14.6381 16 14.75 15.8881 14.75 15.75V12.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

