import { Button } from '../components/ui/Button';
import { siteCopy } from '../content/siteCopy';

function FeatureGrid({ features }: { features: { title: string; body: string }[] }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {features.map((f) => (
        <div
          key={f.title}
          className="rounded-[1.5rem] border border-hairline bg-bg p-5 transition-all duration-200 hover:border-[var(--accent)] hover:bg-surface"
        >
          <h4 className="font-medium text-sm">{f.title}</h4>
          <p className="mt-2 text-sm leading-6 text-muted">{f.body}</p>
        </div>
      ))}
    </div>
  );
}

export function Products() {
  const { visiongate, commerce } = siteCopy.products;

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">

      {/* ── Page Hero ────────────────────────────────────────────────── */}
      <section className="pb-16 border-b border-hairline">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] brand-grad-text motion-safe:animate-fade-up">Products</p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.0] tracking-tight md:text-7xl motion-safe:animate-fade-up">
          Built in-house. Ready for yours.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted motion-safe:animate-fade-up [animation-delay:100ms]">
          Two production-grade products available today. Each one solves a specific, high-friction problem with precision — no bloat, no workarounds.
        </p>
      </section>

      {/* ── VisionGate ───────────────────────────────────────────────── */}
      <section className="mt-20">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-hairline bg-surface">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--accent-3)_10%,transparent),transparent_55%)]" />
          <div className="relative p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] brand-grad-text">{visiongate.tag}</p>
                <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight md:text-5xl">
                  {visiongate.title}
                </h2>
              </div>
              <span className="rounded-full border border-[var(--accent)] px-4 py-1.5 text-xs uppercase tracking-[0.25em] brand-grad-text">
                {visiongate.status}
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">{visiongate.summary}</p>

            {/* Progress bar */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-1.5 flex-1 max-w-xs overflow-hidden rounded-full bg-hairline">
                <div className="h-full w-[72%] rounded-full brand-grad" />
              </div>
              <span className="text-xs text-muted">72% adoption rate across pilot orgs</span>
            </div>

            {/* Features */}
            <FeatureGrid features={visiongate.features} />

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary">Request a demo</Button>
              <Button to="/contact" variant="ghost">Ask a question</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── NUVAM Commerce ───────────────────────────────────────────── */}
      <section className="mt-10">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-hairline bg-surface">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,color-mix(in_srgb,var(--accent-2)_8%,transparent),transparent_55%)]" />
          <div className="relative p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] brand-grad-text">{commerce.tag}</p>
                <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight md:text-5xl">
                  {commerce.title}
                </h2>
              </div>
              <span className="rounded-full border border-hairline px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted">
                {commerce.status}
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">{commerce.summary}</p>

            {/* Progress bar */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-1.5 flex-1 max-w-xs overflow-hidden rounded-full bg-hairline">
                <div className="h-full w-[85%] rounded-full brand-grad" />
              </div>
              <span className="text-xs text-muted">Partner onboarding in under 2 hours</span>
            </div>

            {/* Features */}
            <FeatureGrid features={commerce.features} />

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary">Become a partner</Button>
              <Button to="/contact" variant="ghost">Get in touch</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Compare note ─────────────────────────────────────────────── */}
      <section className="mt-16 rounded-[2rem] border border-hairline bg-surface p-8 text-center">
        <p className="text-sm text-muted">
          Both products are built and maintained entirely by NUVAM — no third-party white-labels.{' '}
          <a href="/contact" className="brand-grad-text underline-offset-4 hover:underline">
            Talk to us
          </a>{' '}
          about custom integrations or enterprise pricing.
        </p>
      </section>

    </div>
  );
}
