import { Button } from '../../components/ui/Button';

export function DigitalStrategyService() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6">
              Digital Transformation
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Digital Strategy
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Custom strategies designed to modernize workflows, drive efficiency, and align technology investments with business objectives.
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
                Transform Your Business with a Digital-First Strategy
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                In today's fast-paced digital landscape, having a clear digital strategy is not optional—it's essential. Our Digital Strategy services help organizations define their technology roadmap, optimize workflows, and align digital initiatives with core business objectives.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                We conduct comprehensive assessments of your current state, identify gaps and opportunities, and co-create a roadmap that prioritizes high-impact initiatives while ensuring measurable ROI.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Comprehensive digital maturity assessment',
                  'Technology stack optimization recommendations',
                  'Roadmap prioritization with ROI analysis',
                  'Change management strategy integration',
                  'Agile implementation methodology',
                  'KPI definition and measurement framework'
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
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Digital Assessment</h3>
                    </div>
                    <p className="text-sm text-muted">Current state analysis, gap identification, and opportunity mapping</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-2)]/5 to-[var(--accent-gold)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-2)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Strategic Roadmap</h3>
                    </div>
                    <p className="text-sm text-muted">Prioritized initiatives with timelines, resources, and expected outcomes</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-gold)]/5 to-[var(--accent)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-gold)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">ROI Analysis</h3>
                    </div>
                    <p className="text-sm text-muted">Financial modeling and impact projection for each initiative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 md:py-24 bg-surface/50 border-t border-hairline/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              What We Deliver
            </h2>
            <p className="text-muted">
              Our digital strategy services cover the complete spectrum of digital transformation needs
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Digital Maturity Assessment',
                desc: 'Evaluate your organization\'s current digital capabilities and identify areas for improvement across technology, processes, and people.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                title: 'Technology Stack Audit',
                desc: 'Comprehensive review of your existing technology infrastructure, identifying redundancies, gaps, and opportunities for optimization.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: 'Roadmap Development',
                desc: 'Create a comprehensive 12-24 month roadmap with prioritized initiatives, resource requirements, and expected outcomes.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                )
              },
              {
                title: 'Change Management Strategy',
                desc: 'Develop a comprehensive change management plan to ensure successful adoption of new digital initiatives across your organization.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: 'Agile Implementation Framework',
                desc: 'Set up agile workflows and methodologies to enable iterative delivery and continuous improvement throughout your digital transformation journey.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                )
              },
              {
                title: 'KPI & Measurement Framework',
                desc: 'Define key performance indicators and establish a measurement framework to track progress and demonstrate ROI throughout the transformation.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((service, i) => (
              <div key={i} className="bg-surface border border-hairline/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[var(--accent)]/30 group">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/10 to-[var(--accent-2)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg text-ink mb-3">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              Our Approach
            </h2>
            <p className="text-muted">
              A proven 5-step methodology for delivering impactful digital strategies
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/20 via-[var(--accent)]/40 to-[var(--accent)]/20 hidden md:block" />
            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Discovery & Assessment',
                  desc: 'We begin with comprehensive stakeholder interviews, current state analysis, and technology assessment to understand your unique challenges and opportunities.',
                  items: [
                    'Executive workshops and stakeholder interviews',
                    'Technology stack and architecture assessment',
                    'Process mapping and workflow analysis',
                    'Competitive benchmarking and market analysis'
                  ]
                },
                {
                  step: '02',
                  title: 'Strategy Formulation',
                  desc: 'Based on our findings, we co-create a digital strategy that aligns with your business objectives and defines clear pathways for digital transformation.',
                  items: [
                    'Vision and goal definition workshops',
                    'Digital opportunity mapping',
                    'Strategic roadmap development',
                    'Resource and capability assessment'
                  ]
                },
                {
                  step: '03',
                  title: 'Roadmap Prioritization',
                  desc: 'We prioritize initiatives based on impact, feasibility, and ROI to create an executable roadmap that delivers maximum value.',
                  items: [
                    'Impact vs. effort matrix analysis',
                    'Risk assessment and mitigation planning',
                    'Resource allocation and timeline definition',
                    'Phased implementation planning'
                  ]
                },
                {
                  step: '04',
                  title: 'Implementation Planning',
                  desc: 'Our team develops detailed implementation plans with specific milestones, deliverables, and success criteria.',
                  items: [
                    'Project charter and governance framework',
                    'Team structure and roles definition',
                    'Technical specifications and architecture',
                    'Training and change management planning'
                  ]
                },
                {
                  step: '05',
                  title: 'Execution & Optimization',
                  desc: 'We support you through every phase of implementation, providing expertise, guidance, and continuous optimization.',
                  items: [
                    'Agile project management and delivery',
                    'Regular progress reviews and adjustments',
                    'Knowledge transfer and team enablement',
                    'Post-implementation review and optimization'
                  ]
                }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="h-20 w-20 rounded-2xl bg-surface border border-hairline flex items-center justify-center text-2xl font-bold text-[var(--accent)] mb-4 md:mb-0">
                      {item.step === '01' ? '01' : item.step === '02' ? '02' : item.step === '03' ? '03' : item.step === '04' ? '04' : '05'}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-display text-2xl font-bold text-ink mb-3">{item.title}</h3>
                    <p className="text-base text-muted leading-relaxed mb-4">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.items.map((subItem, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted">
                          <svg className="h-4 w-4 text-[var(--accent)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-hairline/40 bg-gradient-to-br from-[var(--accent)]/5 via-[var(--accent-2)]/5 to-[var(--accent-gold)]/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Let's discuss your digital strategy needs and create a roadmap that drives real business value and sustainable growth.
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

export default DigitalStrategyService;
