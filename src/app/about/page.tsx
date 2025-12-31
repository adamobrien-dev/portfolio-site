import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-6 pt-8 pb-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-white/50">About Me</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Adam O&apos;Brien</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-[200px,1fr]">
          <div className="mx-auto md:mx-0">
            <div className="h-48 w-48 overflow-hidden rounded-full ring-1 ring-white/10">
              <Image
                src="/avatar.png"
                alt="Adam O'Brien"
                width={192}
                height={192}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-semibold">Founder & Software Engineer</h3>
              <p className="mb-4 text-white/70 leading-relaxed">
                I&apos;m an Irish software engineer and founder living in Vancouver, Canada, with a 
                Bachelor&apos;s degree in Computer Science. I&apos;ve launched multiple projects across AI, 
                trading, mobile apps, and developer tooling, including <span className="text-white">TradeCam</span>, 
                <span className="text-white"> Trollie</span>, <span className="text-white">SetSniffer</span>, 
                and the <span className="text-white">AI Insight API</span>.
              </p>
              <p className="text-white/70 leading-relaxed">
                I handle everything end-to-end: product design, backend architecture, frontend engineering, 
                cloud infrastructure, and AI integration. I&apos;m obsessed with fast iteration, clear UX, 
                and building things people actually want to use.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">What I&apos;m Building</h3>
              <p className="mb-4 text-white/70 leading-relaxed">
                My projects span multiple domains, from AI-powered developer tools to consumer mobile 
                applications. Each product is built with a focus on solving real problems and delivering 
                genuine value to users.
              </p>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/70">
                  <span className="font-semibold text-white">Recent Launches:</span> TradeCam, 
                  Trollie, SetSniffer, AI Insight API
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Skills & Capabilities</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 font-semibold text-white">Product Design</h4>
                  <p className="text-sm text-white/70">
                    Creating intuitive interfaces with clear UX principles
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 font-semibold text-white">Backend Architecture</h4>
                  <p className="text-sm text-white/70">
                    Building scalable, reliable server-side systems
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 font-semibold text-white">Frontend Engineering</h4>
                  <p className="text-sm text-white/70">
                    Crafting responsive, performant user interfaces
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <h4 className="mb-2 font-semibold text-white">Cloud & AI</h4>
                  <p className="text-sm text-white/70">
                    Deploying infrastructure and integrating AI capabilities
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Outside of Code</h3>
              <p className="mb-6 text-white/70 leading-relaxed">
                When I&apos;m not coding, I&apos;m training for the Vancouver Half Marathon, snowboarding 
                in the mountains, or experimenting with trading systems. Balance between building products 
                and staying active keeps me sharp and motivated.
              </p>
              <div className="overflow-hidden rounded-lg border border-white/10">
                <Image
                  src="/snowboard.jpg"
                  alt="Adam O'Brien snowboarding"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Location</h3>
              <p className="text-white/70">
                Based in <span className="text-white">Vancouver, Canada</span> — originally from Ireland. 
                The Pacific Northwest has become home, and I love the vibrant tech community here.
              </p>
            </div>

            <div>
              <p className="text-white/70">
                If you want to collaborate, reach out anytime:{" "}
                <a 
                  href="mailto:hi@adamobrien.dev" 
                  className="text-white hover:text-white/80 transition-colors underline"
                >
                  hi@adamobrien.dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

