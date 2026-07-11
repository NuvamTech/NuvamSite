import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';

export function DataWarehouseService() {
  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title="Cloud Data Warehousing & Architecture | Data Engineering"
        description="Consolidate multiple data systems into a single source of truth with optimized Azure and SQL data warehouses."
        keywords="cloud data warehouse, Azure Synapse, data warehousing partner, database modeling, enterprise analytics"
      />
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6">
              Data & AI
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Data Warehouse
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Centralize structured and unstructured business intelligence data from multiple software systems into a unified analytics platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                Build a Foundation for Data-Driven Decisions
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                A modern data warehouse is the central nervous system of your analytics ecosystem—connecting data sources, enabling complex analysis, and delivering insights across your organization. Our Data Warehouse services help you build scalable, secure, and high-performance data platforms that power your business intelligence initiatives.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                We design and implement comprehensive data warehouse solutions that handle your entire data lifecycle—from extraction and transformation to storage and access—creating a unified source of truth that your teams can trust for strategic decision-making.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Data warehouse architecture design',
                  'ETL/ELT pipeline development',
                  'Scalable storage solutions',
                  'Data quality governance',
                  'Performance optimization',
                  'Secure data access controls'
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
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Architecture</h3>
                    </div>
                    <p className="text-sm text-muted">Design scalable data warehouse architecture</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-2)]/5 to-[var(--accent-gold)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-2)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Data Pipelines</h3>
                    </div>
                    <p className="text-sm text-muted">Build reliable ETL/ELT workflows</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-gold)]/5 to-[var(--accent)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-gold)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Governance</h3>
                    </div>
                    <p className="text-sm text-muted">Ensure data quality and security</p>
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
              Platform Options
            </h2>
            <p className="text-muted">
              Choose the right platform for your data warehouse needs
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Microsoft Azure Synapse',
                desc: 'Limitless analytics service that brings together enterprise data warehousing and Big Data analytics.',
                features: ['Unified analytics', 'Serverless SQL pools', 'Apache Spark', 'Data integration'],
                recommended: 'Best for Microsoft ecosystems'
              },
              {
                title: 'Google BigQuery',
                desc: 'Fully managed, serverless data warehouse that enables scalable analysis over petabytes of data.',
                features: ['Serverless architecture', 'Real-time analytics', 'ML integration', 'Geospatial analysis'],
                recommended: 'Best for ML & analytics'
              },
              {
                title: 'Amazon Redshift',
                desc: 'Fast, fully managed, cloud-based data warehouse that makes it simple and cost-effective to analyze all your data.',
                features: ['Columnar storage', 'Massive parallel processing', 'Redshift Spectrum', 'Data sharing'],
                recommended: 'Best for AWS environments'
              },
              {
                title: 'Snowflake',
                desc: 'Cloud-based data warehousing that separates storage and compute for maximum flexibility.',
                features: ['Snowpark', 'Data sharing', 'Time travel', 'Zero-copy cloning'],
                recommended: 'Best for flexibility'
              }
            ].map((option, i) => (
              <div key={i} className="bg-surface border border-hairline/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-xl text-ink">{option.title}</h3>
                  <div className="h-10 w-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted mb-4">{option.desc}</p>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-[var(--accent)] uppercase">{option.recommended}</span>
                </div>
                <h4 className="text-xs font-semibold text-[var(--accent)] uppercase mb-2">Key Features</h4>
                <ul className="space-y-1.5">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-muted">
                      <svg className="h-3.5 w-3.5 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
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
            Ready to Build Your Data Warehouse?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Let's schedule a consultation to discuss your data warehouse requirements and architecture options.
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

export default DataWarehouseService;
