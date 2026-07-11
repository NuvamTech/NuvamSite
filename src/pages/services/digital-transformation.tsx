import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';

export function DigitalTransformationService() {
  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title="Digital Transformation Consulting | Modernize Your Enterprise"
        description="Transition legacy business systems into modern, integrated cloud applications. Re-engineer processes for growth."
        keywords="digital transformation, legacy modernization, business process engineering, digital adoption"
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6">
              Digital Transformation
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Digital Transformation
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Complete organizational transformation powered by digital technologies that create new or modify existing business processes, culture, and customer experiences.
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
                Embrace the Future with Comprehensive Digital Transformation
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Digital transformation is more than just adopting new technologies—it's about fundamentally rethinking how your organization operates, delivers value, and engages with customers. Our Digital Transformation services help you navigate this complex journey with a holistic approach that addresses technology, processes, people, and culture.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                We combine proven methodologies with cutting-edge technologies to help you build a resilient, adaptive, and future-ready organization that thrives in the digital economy.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'End-to-end transformation strategy',
                  'Technology adoption and integration',
                  'Process reengineering and automation',
                  'Culture and change management',
                  'Agile operating model implementation',
                  'Sustainable transformation outcomes'
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
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Strategy & Planning</h3>
                    </div>
                    <p className="text-sm text-muted">Custom transformation roadmap aligned with business goals</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-2)]/5 to-[var(--accent-gold)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-2)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Process Optimization</h3>
                    </div>
                    <p className="text-sm text-muted">Streamline workflows and eliminate inefficiencies</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-gold)]/5 to-[var(--accent)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-gold)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Technology Enablement</h3>
                    </div>
                    <p className="text-sm text-muted">Modern tools and platforms for digital operations</p>
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
              Our digital transformation services cover the complete spectrum of organizational change
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Transformation Strategy',
                desc: 'Comprehensive transformation roadmap with prioritized initiatives and clear success metrics.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                )
              },
              {
                title: 'Process Reengineering',
                desc: 'Fundamental rethinking and radical redesign of business processes to achieve dramatic improvements.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )
              },
              {
                title: 'Change Management',
                desc: 'Structured approach to transition individuals, teams, and organizations to achieve the transformation.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: 'Digital Culture',
                desc: 'Foster a culture of innovation, agility, and continuous improvement throughout your organization.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: 'Agile Implementation',
                desc: 'Iterative approach to transformation that delivers value quickly and adapts to changing needs.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Sustainability Framework',
                desc: 'Build transformation initiatives that deliver long-term value and sustainable competitive advantage.',
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3L22 4" />
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

      {/* Case Studies */}
      <section className="py-16 md:py-24 border-t border-hairline/40 bg-gradient-to-br from-[var(--accent-2)]/5 via-[var(--accent)]/5 to-[var(--accent-gold)]/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              Success Stories
            </h2>
            <p className="text-muted">
              Real-world examples of organizations we've helped transform
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Global Manufacturing Transformation',
                desc: 'Helped a multinational manufacturer reduce operational costs by 35% through digital transformation.',
                stats: ['35%', '40%', '50%']
              },
              {
                title: 'Financial Services Modernization',
                desc: 'Modernized core banking systems for a regional bank, improving customer experience by 60%.',
                stats: ['60%', '30%', '45%']
              },
              {
                title: 'Healthcare Digital Leap',
                desc: 'Implemented comprehensive digital workflow for a healthcare provider network.',
                stats: ['45%', '30%', '65%']
              }
            ].map((caseStudy, i) => (
              <div key={i} className="bg-surface border border-hairline/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-xl text-ink mb-4">{caseStudy.title}</h3>
                <p className="text-sm text-muted mb-6">{caseStudy.desc}</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {caseStudy.stats.map((stat, j) => (
                    <div key={j} className="bg-[var(--accent)]/5 rounded-lg p-3">
                      <div className="font-bold text-[var(--accent)] text-lg">{stat}</div>
                      <div className="text-[10px] text-muted uppercase tracking-wider">Improvement</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Let's discuss your organization's transformation needs and create a roadmap for sustainable growth and innovation.
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

export default DigitalTransformationService;
