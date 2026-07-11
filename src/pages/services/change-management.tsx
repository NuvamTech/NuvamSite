import { useNavigate } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { Button } from '../../components/ui/Button';

export function ChangeManagementService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title="Change Management & Adoption | NUVAM Tech"
        description="Ensure smooth adoption of new software systems with custom training and cultural alignment for successful digital transformation."
        keywords="change management consulting, digital adoption, organizational change, NUVAM Tech"
        canonical="/services/change-management"
      />
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6">
              Digital Transformation
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Change Management & Adoption
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Ensure smooth adoption of new software systems with custom training and cultural alignment for successful digital transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                Drive Successful Change with Proven Methodology
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Technology adoption fails not because of the technology, but because of people. Our Change Management & Adoption services help organizations navigate the human side of digital transformation, ensuring that new systems are not only implemented but embraced and used effectively.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                We combine proven change frameworks with industry best practices to create adoption strategies that address resistance, build enthusiasm, and create sustainable behavior change across your organization.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Change impact assessment',
                  'Stakeholder engagement strategy',
                  'Adoption measurement framework',
                  'Role-based training programs',
                  'Resistance management strategy',
                  'Sustained reinforcement program'
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
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Stakeholder Alignment</h3>
                    </div>
                    <p className="text-sm text-muted">Building consensus and ownership among leadership and key project stakeholders</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-2)]/5 to-[var(--accent-gold)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-2)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Communication Campaign</h3>
                    </div>
                    <p className="text-sm text-muted">Clear, consistent, and structured communication to build awareness and desire for change</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-gold)]/5 to-[var(--accent)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-gold)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Role-Based Training</h3>
                    </div>
                    <p className="text-sm text-muted">Customized training programs tailored to different user groups for high-efficiency learning</p>
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
            <h2 className="font-display text-3xl font-bold text-ink mb-4">
              Our Core Deliverables
            </h2>
            <p className="text-muted">
              Structured frameworks and tools to drive sustained change adoption
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Stakeholder Analysis', desc: 'Identify and categorize stakeholders based on their influence and interest in the change' },
              { title: 'Communication Strategy', desc: 'Develop tailored messaging and communication channels for different audiences' },
              { title: 'Training Programs', desc: 'Create role-based training materials and delivery methods for effective skill transfer' },
              { title: 'Adoption Measurement', desc: 'Establish KPIs and metrics to track and measure change adoption success' },
              { title: 'Resistance Management', desc: 'Proactively identify and address resistance points before they become obstacles' },
              { title: 'Sustained Reinforcement', desc: 'Implement ongoing support and reinforcement to lock in new behaviors' }
            ].map((item, i) => (
              <div key={i} className="group bg-surface border border-hairline/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-8px_rgba(123,47,190,0.18)] hover:border-[var(--accent)]/30">
                <div className="h-10 w-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <svg className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
            Ready to Drive Successful Change?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Let's discuss your change management needs and create an adoption strategy that works for your organization.
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

export default ChangeManagementService;
