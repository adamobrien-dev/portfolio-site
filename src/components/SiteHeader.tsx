export default function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">Adam O'Brien</h1>
        <p className="mt-2 text-white/60">Founder • Engineer</p>
      </div>
      <nav className="hidden md:flex gap-6 text-white/70">
        <a className="hover:text-white" href="#projects">Projects</a>
        <a className="hover:text-white" href="#about">About</a>
        <a className="hover:text-white" href="#contact">Contact</a>
      </nav>
    </header>
  );
}

