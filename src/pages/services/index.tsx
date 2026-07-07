import { useNavigate } from 'react-router-dom';
import { siteCopy } from '../../content/siteCopy';
import { Button } from '../../components/ui/Button';

export function ServicesIndex() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              NUVAM Tech delivers expert services across digital transformation, data & AI, and business applications to help your organization thrive in the modern economy.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              What We Do
            </h2>
            <p className="text-muted">
              Explore our complete range of professional services designed to meet your business needs
            </p>
          </div>

          {siteCopy.serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-ink">
                  {category.category}
                </h3>
                <div className="h-px flex-grow bg-hairline/50" />
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/services/${item.id}`)}
                    className="group bg-surface border border-hairline/50 rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-[var(--accent)]/30 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-bold text-lg text-ink group-hover:text-[var(--accent)] transition-colors">
                        {item.title}
                      </h4>
                      <div className="h-10 w-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent)]/20 transition-colors">
                        <svg className="h-5 w-5 text-[var(--accent)] group-hover:text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <span className="inline-flex items-center text-xs font-semibold text-[var(--accent)] group-hover:underline">
                      Learn More
                      <svg className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-hairline/40 bg-gradient-to-br from-[var(--accent)]/5 via-[var(--accent-2)]/5 to-[var(--accent-gold)]/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Whether you need a single service or a comprehensive digital transformation, our team is ready to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="w-full sm:w-auto px-8 py-4 text-base" onClick={() => navigate('/contact')}>
              Get a Consultation
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

export default ServicesIndex;
