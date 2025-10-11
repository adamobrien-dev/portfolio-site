import { projects } from "@/data/projects";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark p-8 sm:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Projects</h1>
        <p className="text-white/60 mb-12">A collection of my work</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.key}
              title={project.title}
              blurb={project.blurb}
              badge={project.badge}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
