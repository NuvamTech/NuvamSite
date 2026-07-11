import { SEO } from '../../components/SEO';
import { useNavigate } from 'react-router-dom';
import { siteCopy } from '../../content/siteCopy';
import { Button } from '../../components/ui/Button';

export function ProductsIndex() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title="Enterprise Software Products & SaaS Platforms"
        description="Discover Nuvam Tech's specialized software solutions, including visitor management tools and white-label business applications."
        keywords="SaaS platforms, visitor management system, NUVAM products, business apps"
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6">
              Our Products
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Innovative Software Products
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              NUVAM Tech designs and develops enterprise-ready products, SaaS platforms, and specialized industry solutions to automate and power your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* ISV Products Section */}
      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mb-4">
              Core Products & ISV Solutions
            </h2>
            <p className="text-muted">
              Discover our packaged, ready-to-deploy software applications tailored for modern enterprises.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {siteCopy.products.isv.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/products/${item.id}`)}
                className="group bg-surface border border-hairline/50 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:border-[var(--accent)]/30 flex flex-col md:flex-row h-full"
              >
                {item.image && (
                  <div className="md:w-2/5 relative min-h-[200px] bg-bg overflow-hidden flex items-center justify-center border-r border-hairline/40">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-2)]/20 mix-blend-multiply opacity-20" />
                    {/* Fallback pattern */}
                    <div className="absolute inset-0 flex items-center justify-center text-5xl font-extrabold text-[var(--accent)]/10 select-none">
                      NUVAM
                    </div>
                  </div>
                )}
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-ink group-hover:text-[var(--accent)] transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <span className="inline-flex items-center text-xs font-semibold text-[var(--accent)] group-hover:underline">
                    View Product Details
                    <svg className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-hairline/40 bg-gradient-to-br from-[var(--accent)]/5 via-[var(--accent-2)]/5 to-[var(--accent-gold)]/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Looking for a Tailored Product Solution?
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Our engineering team can build customized modules, white-labeled integrations, or scale existing platforms for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="w-full sm:w-auto px-8 py-4 text-base" onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>
              Discuss Custom Development
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

export default ProductsIndex;
