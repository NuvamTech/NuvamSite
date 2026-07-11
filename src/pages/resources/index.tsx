import { SEO } from '../../components/SEO';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export function ResourcesIndex() {
  const navigate = useNavigate();

  const industries = [
    { name: 'Healthcare & Pharma', icon: '🏥', desc: 'Secure cloud data consolidation and reporting systems compliance.' },
    { name: 'Aviation & Airlines', icon: '✈️', desc: 'Microsoft Dynamics 365 implementations customized for airline operations.' },
    { name: 'Telecommunications', icon: '📞', desc: 'Real-time billing, service usage dashboards, and customer analytics.' },
    { name: 'Construction & Real Estate', icon: '🏗️', desc: 'Project management flows, site checklists, and ERP accounting.' },
    { name: 'Government & Public Sector', icon: '🏛️', desc: 'Secure document portals, entrance tracking systems, and digital registries.' }
  ];

  const caseStudies = [
    {
      client: 'Avromed Pharmaceuticals',
      title: 'Consolidating Pharmaceutical Logistics',
      desc: 'NUVAM Tech unified data from three separate legacy systems into one central Azure Data Warehouse. Now managers access real-time inventory and supply-chain reports instantly.',
      impact: '100% automated consolidation'
    },
    {
      client: 'Azerbaijan Airlines',
      title: 'Modernizing Finance & Flight Ops ERP',
      desc: 'Implemented and customized Microsoft Dynamics 365 to handle complex airline accounting, crew management, and maintenance logs under a secure interface.',
      impact: '45% faster financial closures'
    },
    {
      client: 'Baku Business Center',
      title: 'Streamlining Visitor Lobbies with NES',
      desc: 'Replaced manual reception logbooks with the Nuvam Entrance System (NES) for visitor pre-registration, automated host alerts, and secure RFID check-ins.',
      impact: 'Average check-in time <15s'
    }
  ];

  const blogs = [
    {
      title: 'The Future of AI in Enterprise Workflows',
      date: 'June 28, 2026',
      readTime: '5 min read',
      excerpt: 'Explore how Microsoft Copilot and Azure OpenAI are reshaping document automation, customer support, and strategic forecasting for modern businesses.'
    },
    {
      title: 'Selecting the Right ERP: Dynamics 365 vs Alternatives',
      date: 'May 14, 2026',
      readTime: '8 min read',
      excerpt: 'A comprehensive comparison guide on costs, licensing, implementation speeds, and customization capabilities for mid-market and enterprise organizations.'
    },
    {
      title: 'Why Cloud Data Warehousing is Essential for Growth',
      date: 'April 02, 2026',
      readTime: '6 min read',
      excerpt: 'How centralizing operational data into Azure Data Foundry unlocks true BI visibility and enables machine learning forecasting.'
    }
  ];

  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title="Case Studies, Resources & Insights | Nuvam Infotech"
        description="Read client success stories, industry case studies, and engineering insights from Nuvam Tech's cloud and AI deployments."
        keywords="case studies, tech resources, client stories, cloud deployment, AI insights"
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6">
              Resources & Insights
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              Knowledge Hub
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Explore our industry insights, success stories, and latest articles on enterprise digital transformation, cloud migrations, and data strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-3xl font-bold text-ink mb-3">Industries We Serve</h2>
            <p className="text-muted text-sm md:text-base">Specialized technology solutions designed for your specific industry requirements and regulations.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind, i) => (
              <div key={i} className="bg-surface border border-hairline/50 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="text-3xl mb-4">{ind.icon}</div>
                  <h3 className="font-bold text-base text-ink mb-2">{ind.name}</h3>
                  <p className="text-xs text-muted leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 md:py-24 border-t border-hairline/40 bg-bg/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-3xl font-bold text-ink mb-3">Success Stories</h2>
            <p className="text-muted text-sm md:text-base">Real-world results delivered by NUVAM Tech solutions partners across the region.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-surface border border-hairline/50 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                <div className="space-y-4">
                  <span className="text-[10px] font-bold tracking-wider text-[var(--accent)] uppercase">{cs.client}</span>
                  <h3 className="font-bold text-lg text-ink leading-snug">{cs.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{cs.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-hairline/30">
                  <span className="text-xs font-semibold text-ink">Key Impact: </span>
                  <span className="text-xs font-bold text-[var(--accent)]">{cs.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs & News Section */}
      <section id="blogs" className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-3xl font-bold text-ink mb-3">Blogs & Articles</h2>
            <p className="text-muted text-sm md:text-base">The latest news, guides, and strategic thought leadership from our consulting team.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {blogs.map((post, i) => (
              <div key={i} className="bg-surface border border-hairline/50 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer">
                <div>
                  <div className="flex justify-between items-center text-xs text-muted mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-lg text-ink mb-3 hover:text-[var(--accent)] transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{post.excerpt}</p>
                </div>
                <span className="inline-flex items-center text-xs font-semibold text-[var(--accent)]">
                  Read Article
                  <svg className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-hairline/40 bg-gradient-to-br from-[var(--accent)]/5 via-[var(--accent-2)]/5 to-[var(--accent-gold)]/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Stay Updated
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive monthly updates on Azure, Dynamics 365, Power BI integrations, and enterprise workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="w-full sm:w-auto px-8 py-4 text-base" onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>
              Subscribe to Newsletter
            </Button>
            <a
              href="mailto:nuvam.com@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-hairline bg-surface px-8 py-4 text-base font-semibold text-ink hover:border-[var(--accent)] hover:bg-surface/50 transition-all"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesIndex;
