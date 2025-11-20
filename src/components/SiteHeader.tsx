"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
      <div>
        <Link href="/" className="block">
          <h1 className="text-4xl md:text-5xl font-bold hover:opacity-80 transition-opacity">Adam O&apos;Brien</h1>
        </Link>
        <p className="mt-2 text-white/60">Founder - Software Engineer</p>
      </div>
      <nav className="hidden md:flex gap-6 text-white/70">
        <Link 
          className="hover:text-white" 
          href="/"
          onClick={handleProjectsClick}
        >
          Projects
        </Link>
        <Link className="hover:text-white" href="/about">About</Link>
        <Link className="hover:text-white" href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

