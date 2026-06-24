import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { siteCopy } from '../content/siteCopy';

export function Home() {
  return (
    <div id="home" className="mx-auto max-w-7xl px-6 py-10 md:py-16">

      {/* Hero */}
      <section className="pt-6 pb-10 border-b border-hairline">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">NUVAM</p>
        <h1 className="max-w-3xl font-display text-5xl leading-none md:text-7xl">{siteCopy.heroTitle}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{siteCopy.heroSubtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="#services">Explore Services</Button>
          <Button to="#products">See Products</Button>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {['AI systems', 'Automation', 'Product engineering'].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-hairline bg-surface px-4 py-4 text-sm text-muted transition-colors duration-200 hover:border-accent hover:text-ink"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mt-24 scroll-mt-24">
        <SectionHeading
          eyebrow="Services"
          title="A wider set of capabilities."
          body="AI, software, cloud, and automation now live as one cohesive delivery system rather than separate offerings."
        />
        <div className="mt-10 space-y-6 border-l border-hairline pl-6">
          {[
            'AI and ML engineering for assistant workflows, prediction, and retrieval.',
            'Automation for operations, approvals, reporting, and repetitive admin work.',
            'SaaS product engineering with design systems, auth, dashboards, and billing-ready foundations.',
            'Web and app development for marketing sites, internal tools, and customer portals.',
            'Cloud infrastructure, deployment pipelines, observability, and performance tuning.',
            'Integration work across APIs, CRMs, databases, and workflow tools.',
          ].map((item, index) => (
            <div key={item}>
              <p className="text-sm uppercase tracking-[0.25em] text-accent">0{index + 1}</p>
              <p className="mt-2 max-w-3xl text-xl leading-8">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mt-24 scroll-mt-24">
        <SectionHeading
          eyebrow="Products"
          title="Products with clearer shape."
          body="VisionGate and the white-label commerce platform are presented with depth, positioning, and practical use cases."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-hairline bg-surface p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">VisionGate</p>
            <h3 className="mt-3 font-display text-3xl">Attendance managed by computer vision.</h3>
            <p className="mt-4 text-muted leading-7">
              Built for teams that need accurate, low-friction attendance capture with real-time visibility,
              operational reporting, and a cleaner workflow for admins.
            </p>
            <ul className="mt-6 space-y-2 border-t border-hairline pt-6">
              {['Face recognition at entry points', 'Real-time dashboards', 'Admin reporting tools'].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-hairline bg-surface p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">White-label commerce</p>
            <h3 className="mt-3 font-display text-3xl">A partner-ready e-commerce foundation.</h3>
            <p className="mt-4 text-muted leading-7">
              Positioned for resellers and ecosystem partners who want a branded commerce stack without
              rebuilding the whole product layer from scratch.
            </p>
            <ul className="mt-6 space-y-2 border-t border-hairline pt-6">
              {['Custom branding and theming', 'Inventory and order management', 'Partner onboarding flows'].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mt-24 scroll-mt-24">
        <SectionHeading
          eyebrow="About"
          title="Built from language, shaped for momentum."
          body="A product-first studio with a stronger India-first positioning and global product ambition."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            'Founded by Nithin with a product-first mindset.',
            'India-first delivery with global product ambition.',
            'Quiet, editorial, and practical rather than flashy.',
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-hairline bg-surface p-5 text-muted transition-colors duration-200 hover:border-accent hover:text-ink"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mt-24 scroll-mt-24">
        <SectionHeading
          eyebrow="Process"
          title="A more complete delivery flow."
          body="Numbered, phase-based execution with clear milestones and checkpoints."
        />
        <ol className="mt-10 space-y-6 border-l border-hairline pl-6">
          {[
            'Discovery and framing: define the real problem and the business target.',
            'System design: map architecture, content, UX, and integration points.',
            'Build and iterate: ship in tight loops with visible milestones.',
            'Launch and improve: monitor, learn, and extend the platform safely.',
          ].map((step, index) => (
            <li key={step} className="transition-colors duration-200 hover:text-accent">
              <p className="text-sm uppercase tracking-[0.25em] text-accent">Step {index + 1}</p>
              <p className="mt-2 text-xl leading-8">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-24 scroll-mt-24 pb-10">
        <SectionHeading
          eyebrow="Contact"
          title="One page, one path to reach out."
          body="Tell us about your project and we will get back to you."
        />
        <form className="mt-10 grid gap-4 rounded-[2rem] border border-hairline bg-surface p-6 md:grid-cols-2">
          <input className="rounded-full border border-hairline bg-transparent px-4 py-3 md:col-span-1" placeholder="Name" />
          <input className="rounded-full border border-hairline bg-transparent px-4 py-3 md:col-span-1" placeholder="Email" />
          <textarea
            className="min-h-40 rounded-[1.5rem] border border-hairline bg-transparent px-4 py-3 md:col-span-2"
            placeholder="Tell us about the project"
          />
          <div className="md:col-span-2">
            <Button to="#">Send message</Button>
          </div>
        </form>
      </section>

    </div>
  );
}
