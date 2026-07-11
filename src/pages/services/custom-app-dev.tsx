import { SEO } from '../../components/SEO';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export function CustomAppDevService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title="Custom Application Development Services | Nuvam Tech"
        description="Get modern, fast custom web and mobile applications. Fully customized client portals, admin dashboards, and SaaS platforms."
        keywords="custom app development, custom web application, SaaS software development, admin dashboard developer"
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6">
              Software & Engineering
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Application Development
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Bespoke mobile applications and custom portal systems built to enhance client engagement and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                Apps That Delight Users and Drive Business Results
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                From customer-facing mobile apps to internal enterprise portals, NUVAM builds digital experiences that solve real business problems. We design with UX at the core and engineer for performance, reliability, and rapid iteration.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Our development teams work closely with your stakeholders to understand workflows, define requirements, and deliver solutions that teams actually adopt.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'iOS and Android mobile applications',
                  'Progressive Web Apps (PWA)',
                  'Internal business portals and dashboards',
                  'Customer self-service platforms',
                  'Multi-tenant SaaS application development',
                  'White-label application solutions'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="h-3 w-3 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] rounded-2xl blur-2xl opacity-10" />
              <div className="relative bg-gradient-to-br from-surface to-bg border border-hairline/50 rounded-2xl p-8 shadow-xl space-y-5">
                {[
                  { label: 'Design Phase', value: 'UX research, wireframes, and interactive prototypes' },
                  { label: 'Development', value: 'Sprint-based delivery with weekly demos and reviews' },
                  { label: 'Launch & Support', value: 'App store deployment, CI/CD setup, and post-launch SLA' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-start gap-4 py-3 border-b border-hairline/30 last:border-0">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted whitespace-nowrap">{row.label}</span>
                    <span className="text-sm font-medium text-ink text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-hairline/40 bg-gradient-to-br from-[var(--accent)]/5 via-[var(--accent-2)]/5 to-[var(--accent-gold)]/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Have an App Idea?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Let's turn it into reality. Book a free discovery session with our development leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/#contact" className="w-full sm:w-auto px-8 py-4 text-base">
              Book Discovery Session
            </Button>
            <a
              href="mailto:nuvam.com@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-hairline bg-surface px-8 py-4 text-base font-semibold text-ink hover:border-[var(--accent)] hover:bg-surface/50 transition-all"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomAppDevService;
