import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import { projects } from "@/data/projects";

export default function Page() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <SiteHeader />
      <Hero />
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6 flex items-end justify-between">
          <h3 className="text-xl font-semibold">Projects (placeholders)</h3>
          <span className="text-xs text-white/50">{projects.length} items</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card 
              key={p.key} 
              title={p.title} 
              blurb={p.blurb} 
              badge={p.badge} 
              codeLink={p.codeLink} 
              demoLink={p.demoLink} 
            />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
