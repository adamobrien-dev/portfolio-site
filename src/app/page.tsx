import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import ContributionCard from "@/components/ContributionCard";
import { commercialProjects, openSourceProjects } from "@/data/projects";
import { contributions } from "@/data/contributions";

export default function Page() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <SiteHeader />
      <Hero />
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/50">Open Source</p>
            <h3 className="text-xl font-semibold">Independent Products</h3>
          </div>
          <span className="text-xs text-white/50">{openSourceProjects.length} items</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {openSourceProjects.map((p) => (
            <Card
              key={p.key}
              title={p.title}
              blurb={p.blurb}
              badge={p.badge}
              codeLink={p.codeLink}
              demoLink={p.demoLink}
              status={p.status}
            />
          ))}
        </div>
      </section>
      <section id="products" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/50">Real-World Launches</p>
            <h3 className="text-xl font-semibold">Commercial Products</h3>
          </div>
          <span className="text-xs text-white/50">{commercialProjects.length} items</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commercialProjects.map((p) => (
            <Card
              key={p.key}
              title={p.title}
              blurb={p.blurb}
              badge={p.badge}
              siteLink={p.siteLink}
              status={p.status}
            />
          ))}
        </div>
      </section>
      <section id="open-source" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/50">Open Source</p>
            <h3 className="mt-1 text-xl font-semibold">Recent Contributions</h3>
          </div>
          <span className="text-xs text-white/50">{contributions.length} entries</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {contributions.map((item) => (
            <ContributionCard
              key={item.key}
              project={item.project}
              title={item.title}
              description={item.description}
              status={item.status}
              link={item.link}
              highlights={item.highlights}
            />
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
