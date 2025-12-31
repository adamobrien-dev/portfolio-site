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
          Full-stack engineer and founder building AI-driven products across trading, mobile apps, and developer tools I 
          handle everything from product design and frontend to backend, cloud, and AI systems.
        </p>
        <p className="mt-3 text-white/60">
          Focused on fast iteration, clean UX, and AI-powered systems.
        </p>
        <div className="mt-4 flex gap-3">
          <a href="#projects" className="rounded-lg bg-white text-black px-4 py-2 text-sm font-medium">Explore Projects</a>
          <button disabled className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white/70 cursor-not-allowed">Download Resume</button>
        </div>
      </div>
    </section>
  );
}

