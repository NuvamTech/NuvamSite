import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';

export function PowerBIReportingService() {
  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title="Power BI Consulting & Interactive Dashboard Reports"
        description="Transform raw enterprise database entries into interactive Power BI dashboards. Drive real-time business decisions."
        keywords="Power BI consulting, custom BI dashboards, real-time reports, data visualization"
      />
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6">
              Data & AI
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Power BI / Reporting Consulting
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Interactive business intelligence dashboards and data modeling to drive real-time decisions across your organization.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                Turn Data Into Decision-Making Power
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Power BI has become the standard for business intelligence, but its true power is unlocked only with proper implementation and strategy. Our Power BI Consulting services help you create stunning, interactive dashboards that transform complex data into actionable insights your teams can trust and use daily.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                We go beyond basic reporting to build comprehensive analytics solutions that integrate with your entire data ecosystem, from SQL Server and Azure to SharePoint and third-party systems, creating a single source of truth for your organization.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Interactive dashboard design',
                  'Data modeling & DAX optimization',
                  'Performance tuning',
                  'Report publishing & sharing',
                  'Mobile reporting setup',
                  'Security & row-level filtering'
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
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Data Modeling</h3>
                    </div>
                    <p className="text-sm text-muted">Build robust data models for accurate analysis</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-2)]/5 to-[var(--accent-gold)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-2)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Visualization</h3>
                    </div>
                    <p className="text-sm text-muted">Create compelling, actionable visualizations</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-gold)]/5 to-[var(--accent)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-gold)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Automation</h3>
                    </div>
                    <p className="text-sm text-muted">Automate data refresh and report distribution</p>
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
              Our Services
            </h2>
            <p className="text-muted">
              Comprehensive Power BI consulting across all stages of implementation
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Power BI Architecture',
                desc: 'Design scalable, maintainable architectures for enterprise analytics solutions.'
              },
              {
                title: 'Data Modeling',
                desc: 'Expert DAX calculations, table relationships, and optimized data models.'
              },
              {
                title: 'Dashboard Design',
                desc: 'User-centric dashboard design with best practices for data storytelling.'
              },
              {
                title: 'Performance Optimization',
                desc: 'Tune reports for fast load times even with large datasets.'
              },
              {
                title: 'Security Implementation',
                desc: 'Row-level security, workspace permissions, and data governance.'
              },
              {
                title: 'Training & Enablement',
                desc: 'Empower your teams with Power BI skills through customized training.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-surface border border-hairline/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                  <svg className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Ready to Unlock Your Data with Power BI?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Let's schedule a consultation to discuss your Power BI needs and analytics strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/#contact" className="w-full sm:w-auto px-8 py-4 text-base">
              Schedule Consultation
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

export default PowerBIReportingService;
