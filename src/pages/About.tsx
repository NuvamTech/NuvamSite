import { Button } from '../components/ui/Button';
import { siteCopy } from '../content/siteCopy';

export function About() {
  const { about } = siteCopy;

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">

      {/* ── Page Hero ────────────────────────────────────────────────── */}
      <section className="pb-16 border-b border-hairline">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] brand-grad-text motion-safe:animate-fade-up">About</p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.0] tracking-tight md:text-7xl motion-safe:animate-fade-up">
          {about.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted motion-safe:animate-fade-up [animation-delay:100ms]">
          {about.subheadline}
        </p>
      </section>

      {/* ── Stats row ────────────────────────────────────────────────── */}
      <section className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {about.stats.map((s) => (
          <div key={s.label} className="rounded-[1.5rem] border border-hairline bg-surface p-6">
            <p className="font-display text-2xl brand-grad-text">{s.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── Founder ──────────────────────────────────────────────────── */}
      <section className="mt-20">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-hairline bg-surface p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--accent-3)_8%,transparent),transparent_50%)]" />
          <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:gap-16 md:items-start">
            {/* Avatar placeholder */}
            <div className="flex-shrink-0">
              <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-hairline bg-bg flex items-center justify-center">
                <span className="font-display text-2xl brand-grad-text select-none">N</span>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] brand-grad-text">{about.founder.role}</p>
              <h2 className="mt-2 font-display text-3xl">{about.founder.name}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{about.founder.bio}</p>
              <blockquote className="mt-6 border-l-2 border-[var(--accent)] pl-5 font-display text-xl leading-snug text-ink/80 italic">
                "Great technology should feel inevitable — not complicated."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values grid ──────────────────────────────────────────────── */}
      <section className="mt-20">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] brand-grad-text">Values</p>
        <h2 className="max-w-2xl font-display text-4xl leading-none md:text-5xl">
          The principles we build by.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {about.values.map((v) => (
            <div
              key={v.label}
              className="group rounded-[2rem] border border-hairline bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_16px_40px_color-mix(in_srgb,var(--accent)_8%,transparent)]"
            >
              <h3 className="font-display text-xl brand-grad-text">{v.label}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Studio DNA ───────────────────────────────────────────────── */}
      <section className="mt-20">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] brand-grad-text">Studio DNA</p>
        <h2 className="max-w-2xl font-display text-4xl leading-none md:text-5xl">
          Quiet confidence. Lasting work.
        </h2>
        <div className="mt-10 space-y-6 border-l border-hairline pl-8">
          {[
            {
              title: 'No noise.',
              body: 'We do not chase trends. We pick the right tools for the right problem and execute without theatre.',
            },
            {
              title: 'Everything connected.',
              body: 'Every service we offer is designed to compose — AI plugs into automation, automation into product, product into cloud. You never need three agencies to do one thing.',
            },
            {
              title: 'Skin in the game.',
              body: 'We have built our own products (VisionGate, NUVAM Commerce) using the same stack and process we bring to clients. We know what actually works.',
            },
            {
              title: 'India-first, globally standard.',
              body: 'Built for the velocity and constraints of the Indian market — and designed to compete at any global standard without compromise.',
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-2 max-w-2xl text-base leading-7 text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="mt-20 rounded-[2rem] border border-hairline bg-surface p-8 md:p-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl">Work with NUVAM.</h2>
            <p className="mt-2 max-w-md text-base leading-7 text-muted">
              We take on a small number of new projects each quarter to keep quality high.
            </p>
          </div>
          <Button to="/contact" variant="primary">Get in touch</Button>
        </div>
      </section>

    </div>
  );
}
