import { Button } from '../../components/ui/Button';

export function CorporateTrainingsService() {
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
              Corporate Trainings
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Upskill your enterprise teams in Microsoft 365, Azure, Dynamics 365, and AI with our comprehensive training programs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                Empower Your Teams with Cutting-Edge Skills
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Technology evolves at an unprecedented pace, and your teams need to keep up. Our Corporate Training programs are designed to bridge skill gaps, boost productivity, and future-proof your organization's capabilities across Microsoft technologies and beyond.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                We offer customized training solutions that address your specific business needs, from foundational concepts to advanced implementation techniques, delivered by certified experts with real-world experience.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Microsoft-certified instructors',
                  'Custom curriculum development',
                  'Hands-on labs and exercises',
                  'Role-based learning paths',
                  'Post-training support',
                  'Certification preparation'
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
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Assessment</h3>
                    </div>
                    <p className="text-sm text-muted">Evaluate team skills and training needs</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-2)]/5 to-[var(--accent-gold)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-2)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-2)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Design</h3>
                    </div>
                    <p className="text-sm text-muted">Create customized learning pathways</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-[var(--accent-gold)]/5 to-[var(--accent)]/5 rounded-xl border border-hairline/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent-gold)]/20 flex items-center justify-center">
                        <svg className="h-5 w-5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-ink">Delivery</h3>
                    </div>
                    <p className="text-sm text-muted">Instructor-led and self-paced options</p>
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
              Training Categories
            </h2>
            <p className="text-muted">
              Comprehensive training programs across Microsoft technologies
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                category: 'Microsoft 365',
                items: [
                  'Microsoft 365 Fundamentals',
                  'Teams Administration & Collaboration',
                  'SharePoint Online Management',
                  'Power Platform Basics',
                  'Excel & Word Advanced',
                  'Outlook Productivity'
                ]
              },
              {
                category: 'Azure & Cloud',
                items: [
                  'Azure Fundamentals',
                  'Azure Administrator Training',
                  'Azure Developer Workshops',
                  'DevOps Pipeline Setup',
                  'Security & Compliance',
                  'Cost Management'
                ]
              },
              {
                category: 'Dynamics 365',
                items: [
                  'Dynamics 365 Fundamentals',
                  'Finance & Operations',
                  'Customer Engagement',
                  'Power Apps & Flow',
                  'Customization & Configuration',
                  'Implementation Best Practices'
                ]
              },
              {
                category: 'AI & Data',
                items: [
                  'Power BI Fundamentals',
                  'Data Modeling & Visualization',
                  'AI Fundamentals for Business',
                  'Copilot Studio Training',
                  'Data Analytics for Decision Makers',
                  'Advanced Analytics Workshops'
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
            Ready to Upskill Your Team?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Let's discuss your training needs and create a learning program that drives real business impact.
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

export default CorporateTrainingsService;
