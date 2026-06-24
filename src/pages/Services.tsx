import { Button } from '../components/ui/Button';
import { siteCopy } from '../content/siteCopy';

export function Services() {
  const { services, process } = siteCopy;

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">

      {/* ── Page Hero ────────────────────────────────────────────────── */}
      <section className="pb-16 border-b border-hairline">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] brand-grad-text motion-safe:animate-fade-up">Services</p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.0] tracking-tight md:text-7xl motion-safe:animate-fade-up">
          A wider set of capabilities.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted motion-safe:animate-fade-up [animation-delay:100ms]">
          AI, software, cloud, and automation — delivered as a single cohesive system, not disconnected parts. Every service is designed to work together.
        </p>
      </section>

      {/* ── Services Grid ────────────────────────────────────────────── */}
      <section className="mt-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((svc) => (
            <article
              key={svc.id}
              className="group rounded-[2rem] border border-hairline bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_20px_50px_color-mix(in_srgb,var(--accent)_8%,transparent)]"
            >
              <p className="mb-4 font-display text-4xl brand-grad-text opacity-60">{svc.label}</p>
              <h2 className="font-display text-2xl leading-tight">{svc.title}</h2>
              <p className="mt-3 text-base leading-7 text-muted">{svc.summary}</p>
              <ul className="mt-6 space-y-2 border-t border-hairline pt-6">
                {svc.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full brand-grad" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ── How We Work ──────────────────────────────────────────────── */}
      <section className="mt-24">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] brand-grad-text">How we work</p>
        <h2 className="max-w-2xl font-display text-4xl leading-none md:text-5xl">
          A delivery flow that actually works.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Numbered phases. Real milestones. Working software at every checkpoint — not documentation.
        </p>

        <div className="mt-12 grid gap-0 md:grid-cols-4">
          {process.map((step, i) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {i < process.length - 1 && (
                <div className="absolute right-0 top-5 hidden h-[1px] w-1/2 bg-hairline md:block" />
              )}
              {i > 0 && (
                <div className="absolute left-0 top-5 hidden h-[1px] w-1/2 bg-hairline md:block" />
              )}
              <div className="pr-6">
                <div className="relative z-10 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-surface text-xs font-medium brand-grad-text">
                  {step.step}
                </div>
                <h3 className="font-display text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="mt-24 rounded-[2rem] border border-hairline bg-surface p-8 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl">Ready to get started?</h2>
            <p className="mt-2 max-w-md text-base leading-7 text-muted">
              Tell us about your project and we will find the right combination of services to move it forward.
            </p>
          </div>
          <Button to="/contact" variant="primary">Talk to us</Button>
        </div>
      </section>

    </div>
  );
}
