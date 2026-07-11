import { SEO } from '../../components/SEO';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export function SoftwareDevelopmentService() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title="Custom Software Development Services & Backend Systems"
        description="We design and write scalable APIs, custom databases, and high-performance applications tailored to your business rules."
        keywords="custom software development, backend software development, custom APIs, database engineering"
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
              Software Development
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Tailored backend systems and frontend applications developed using robust, scalable codebases aligned to your business needs.
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
                Custom-Built Software That Scales With Your Business
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                NUVAM Tech designs and builds custom software solutions — from powerful backend APIs and microservices to beautiful, high-performance web applications. Every system we deliver is purpose-built, properly tested, and designed to scale.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Whether you need a greenfield application, a legacy modernization, or additional engineering talent, our team brings deep technical expertise across the full development stack.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Full-stack web application development',
                  'RESTful API and microservices architecture',
                  'Legacy system modernization',
                  'Cloud-native application design',
                  'Code reviews and architecture audits',
                  'Agile delivery with sprint-based workflows'
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
                  {[
                    { icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', title: 'Clean Code', desc: 'Standards-based, maintainable codebases built for teams' },
                    { icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18', title: 'Scalable Architecture', desc: 'Systems designed for growth from day one' },
                    { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Security First', desc: 'OWASP standards and penetration-tested deployments' }
                  ].map((card, i) => (
                    <div key={i} className="p-5 bg-gradient-to-r from-[var(--accent)]/5 to-[var(--accent-2)]/5 rounded-xl border border-hairline/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-9 w-9 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center">
                          <svg className="h-5 w-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                          </svg>
                        </div>
                        <h3 className="font-bold text-ink">{card.title}</h3>
                      </div>
                      <p className="text-sm text-muted">{card.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-24 border-t border-hairline/40 bg-bg/30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-ink mb-10 text-center">Technologies We Build With</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { category: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
              { category: 'Backend', techs: ['Node.js', '.NET Core', 'Python', 'FastAPI'] },
              { category: 'Cloud & DevOps', techs: ['Azure', 'Docker', 'Kubernetes', 'CI/CD Pipelines'] }
            ].map((stack, i) => (
              <div key={i} className="bg-surface border border-hairline/50 rounded-2xl p-6">
                <h3 className="font-bold text-ink mb-4 text-lg">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-semibold">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-hairline/40 bg-gradient-to-br from-[var(--accent)]/5 via-[var(--accent-2)]/5 to-[var(--accent-gold)]/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Tell us about your project. Our engineering team will provide a free technical consultation and project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/#contact" className="w-full sm:w-auto px-8 py-4 text-base">
              Start a Project
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

export default SoftwareDevelopmentService;
