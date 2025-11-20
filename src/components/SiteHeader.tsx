export default function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
      <div>
        <a href="/" className="block">
          <h1 className="text-4xl md:text-5xl font-bold hover:opacity-80 transition-opacity">Adam O&apos;Brien</h1>
        </a>
        <p className="mt-2 text-white/60">Founder - Software Engineer</p>
      </div>
      <nav className="hidden md:flex gap-6 text-white/70">
        <a className="hover:text-white" href="/#projects">Projects</a>
        <a className="hover:text-white" href="/#about">About</a>
        <a className="hover:text-white" href="/contact">Contact</a>
      </nav>
    </header>
  );
}

