import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-white/50">Get In Touch</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Contact Me</h2>
          <p className="mt-4 text-lg text-white/70">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Let&apos;s Connect</h3>
              <p className="text-white/70">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I&apos;d love to hear from you.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm uppercase tracking-widest text-white/50">Email</p>
                <a 
                  href="mailto:hi@adamobrien.dev" 
                  className="mt-1 block text-white hover:text-white/80 transition-colors"
                >
                  hi@adamobrien.dev
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-white/50">Social</p>
                <div className="mt-2 flex gap-4">
                  <a 
                    href="https://github.com/adamobrien-dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://x.com/adamobriendev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    X (Twitter)
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/adamobriendev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-white text-dark px-6 py-3 font-semibold hover:bg-white/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

