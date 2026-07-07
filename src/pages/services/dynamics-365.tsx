import { Button } from '../../components/ui/Button';

export function Dynamics365Service() {
  return (
    <div className="min-h-screen bg-surface">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6">
              Business Applications
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Microsoft Dynamics 365
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              End-to-end ERP implementation spanning financials, inventory, retail operations, and HR modules for comprehensive business management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                Unify Your Business Operations
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Microsoft Dynamics 365 is a suite of intelligent business applications that combine ERP and CRM capabilities into a single, unified platform. Our Dynamics 365 implementation services help you streamline operations, improve customer experiences, and make data-driven decisions across your entire organization.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                From financial management and supply chain to customer service and human resources, we deliver comprehensive Dynamics 365 solutions that integrate seamlessly with your existing systems and evolve with your business growth.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'ERP & CRM implementation',
                  'Customization & configuration',
                  'Integration with existing systems',
                  'Business process automation',
                  'Role-based access control',
                  'Training & change management'
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
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Financials</h3>
                    </div>
                    <p className="text-sm text-muted">General ledger, accounts payable/receivable, budgeting</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-2)]/5 to-[var(--accent-gold)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-2)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Supply Chain</h3>
                    </div>
                    <p className="text-sm text-muted">Inventory, procurement, logistics, and warehousing</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-gold)]/5 to-[var(--accent)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-gold)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">HR & Talent</h3>
                    </div>
                    <p className="text-sm text-muted">Recruitment, onboarding, performance, and payroll</p>
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
              Dynamics 365 Apps
            </h2>
            <p className="text-muted">
              Comprehensive suite of business applications for every function
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                category: 'Finance & Operations',
                items: [
                  'Dynamics 365 Finance',
                  'Dynamics 365 Supply Chain Management',
                  'Dynamics 365 Commerce',
                  'Project Operations',
                  'Asset Management'
                ]
              },
              {
                category: 'Customer Engagement',
                items: [
                  'Dynamics 365 Sales',
                  'Dynamics 365 Customer Service',
                  'Dynamics 365 Marketing',
                  'Dynamics 365 Field Service',
                  'Dynamics 365 Customer Insights'
                ]
              },
              {
                category: 'Human Resources',
                items: [
                  'Dynamics 365 Human Resources',
                  'Payroll Management',
                  'Talent Management',
                  'Workforce Management',
                  'Learning Management'
                ]
              },
              {
                category: 'Business Central',
                items: [
                  'Financial Management',
                  'Sales & Marketing',
                  'Service Management',
                  'Supply Chain',
                  'Project Management'
                ]
              }
            ].map((category, i) => (
              <div key={i} className="bg-surface border border-hairline/50 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] p-4">
                  <h3 className="font-bold text-lg text-white">{category.category}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted">
                        <svg className="h-4 w-4 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Ready to Transform Your Business with Dynamics 365?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Let's schedule a consultation to discuss your Dynamics 365 requirements and implementation strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="w-full sm:w-auto px-8 py-4 text-base">
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

export default Dynamics365Service;
