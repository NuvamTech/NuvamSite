import { Button } from '../../components/ui/Button';

export function MicrosoftLicensingService() {
  return (
    <div className="min-h-screen bg-surface">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6">
              Digital Transformation
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Microsoft Licensing
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Optimize your Microsoft enterprise agreement, subscriptions, and licensing costs while ensuring full compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                Maximize Value from Your Microsoft Investment
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Microsoft licensing is complex and constantly evolving. Without proper oversight, organizations often overpay for licenses or face compliance risks. Our Microsoft Licensing services help you navigate this complexity, optimize your licensing strategy, and ensure you're getting maximum value from your Microsoft investment.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                We provide comprehensive licensing assessments, software asset management, and strategic planning to align your Microsoft investments with business objectives while maintaining full compliance.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Licensing assessment & audit',
                  'Cost optimization strategy',
                  'Compliance risk mitigation',
                  'Subscription management',
                  'Enterprise agreement negotiation',
                  'Software asset optimization'
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
              <div className="relative bg-gradient-to-br from-surface to-bg border border-hairline/50 rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-r from-[var(--accent)]/5 to-[var(--accent-2)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Assessment</h3>
                    </div>
                    <p className="text-sm text-muted">Comprehensive license inventory and usage analysis</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-2)]/5 to-[var(--accent-gold)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-2)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Optimization</h3>
                    </div>
                    <p className="text-sm text-muted">Identify cost-saving opportunities and right-sizing</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-gold)]/5 to-[var(--accent)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-gold)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Compliance</h3>
                    </div>
                    <p className="text-sm text-muted">Ensure regulatory compliance and audit readiness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface/50 border-t border-hairline/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              Licensing Programs We Support
            </h2>
            <p className="text-muted">
              Expertise across all Microsoft licensing pathways
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Microsoft Enterprise Agreement (EA)',
                desc: 'Comprehensive licensing for large organizations with 500+ devices or users.',
                benefits: ['Volume discounts', 'Flexible licensing', 'Software Assurance', 'Global coverage']
              },
              {
                title: 'Microsoft Cloud Solution Provider (CSP)',
                desc: 'Flexible cloud licensing through Microsoft partners with simplified billing.',
                benefits: ['Pay-as-you-go', 'Simple management', 'Instant provisioning', 'Azure credits']
              },
              {
                title: 'Microsoft Product License Management',
                desc: 'Complete lifecycle management for perpetual and subscription licenses.',
                benefits: ['Asset tracking', 'Renewal management', 'Upgrade planning', 'Compliance monitoring']
              },
              {
                title: 'Software Assurance Optimization',
                desc: 'Maximize value from Software Assurance benefits and training vouchers.',
                benefits: ['Training vouchers', 'Deployment services', 'Home use program', 'Version benefits']
              }
            ].map((program, i) => (
              <div key={i} className="bg-surface border border-hairline/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-xl text-ink">{program.title}</h3>
                  <div className="h-10 w-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted mb-4">{program.desc}</p>
                <h4 className="text-xs font-semibold text-[var(--accent)] uppercase mb-2">Key Benefits</h4>
                <ul className="space-y-1.5">
                  {program.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-muted">
                      <svg className="h-3.5 w-3.5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Ready to Optimize Your Microsoft Licensing?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Let's schedule a licensing assessment to identify cost savings and compliance opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="w-full sm:w-auto px-8 py-4 text-base">
              Schedule Assessment
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

export default MicrosoftLicensingService;
