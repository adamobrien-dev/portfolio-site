import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 pb-6 md:grid-cols-[auto,1fr]">
      <div className="mx-auto h-40 w-40 overflow-hidden rounded-full ring-1 ring-white/10">
        <Image
          src="/avatar.png"
          alt="Adam O'Brien"
          width={160}
          height={160}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold">Building useful AI products.</h2>
        <p className="mt-2 max-w-prose text-white/70">
          This portfolio is a work-in-progress. Live code and demos will replace placeholders as each project ships.
        </p>
        <div className="mt-4 flex gap-3">
          <a href="#projects" className="rounded-lg bg-white text-black px-4 py-2 text-sm font-medium">Explore Projects</a>
          <button disabled className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white/70 cursor-not-allowed">Download Resume</button>
        </div>
      </div>
    </section>
  );
}

