import { SEO } from '../../components/SEO';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { SmartVideo } from '../../components/ui/SmartVideo';

interface ProductData {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  useCases: { title: string; desc: string }[];
  videoSrc?: string;
}

const PRODUCTS_CONTENT: Record<string, ProductData> = {
  visiongate: {
    title: 'VisionGate™ Computer Vision Attendance',
    category: 'ISV Product',
    subtitle: 'Sub-second face detection with anti-spoofing landmarks validation.',
    description: 'Protect physical boundaries, automate attendance logs, and understand visitor flows with real-time video stream intelligence. Configured to deploy on standard security cameras, our facial recognition solution runs on-premises or in the cloud with strict security.',
    videoSrc: '/videos/products/visiongate.mp4',
    features: [
      'Sub-second face recognition and person matching',
      'Real-time alert notifications for restricted zones',
      'Liveness detection to prevent photo spoofing',
      'Automated time and attendance logging',
      'Heatmapping and retail queue length monitoring',
      'Encrypted template storage with no image retention option'
    ],
    specs: [
      { label: 'Deep Learning', value: 'PyTorch, OpenCV, TensorRT optimization' },
      { label: 'Hardware', value: 'NVIDIA Edge devices, Standard IP Cameras' },
      { label: 'API Protocols', value: 'gRPC, WebSockets, REST APIs' },
      { label: 'Accuracy', value: '>99.8% on LFW benchmark testing' }
    ],
    useCases: [
      { title: 'Secure Areas', desc: 'Add biometric multi-factor authentication to server rooms, vaults, and laboratories.' },
      { title: 'Smart Retail', desc: 'Monitor demographic trends, visitor dwell time, and VIP customer arrivals securely.' },
      { title: 'Event Management', desc: 'Speed up ticket verification and credentials scanning for large scale conference halls.' }
    ]
  },
  commerce: {
    title: 'NUVAM Commerce™ White-Label Storefront',
    category: 'ISV Product',
    subtitle: 'Self-serve instant branding switch and automated order execution loops.',
    description: 'Simplify retail operations, order tracking, and branding customization. NUVAM Commerce provides a white-labeled custom storefront allowing companies to launch custom branding instantly, track orders, and automate supply-chain actions seamlessly.',
    videoSrc: '/videos/products/commerce.mp4',
    features: [
      'Instant branding configuration and custom domains',
      'Real-time stock level monitoring and supplier synchronization',
      'Automated order processing and logistics dispatch',
      'Integrated payment gateways (Stripe, PayPal, local bank transfers)',
      'Admin analytics dashboard with revenue, orders, and customer trends',
      'Fully responsive, SEO-optimized client storefront design'
    ],
    specs: [
      { label: 'Tech Stack', value: 'React / Next.js, Node.js, PostgreSQL' },
      { label: 'Deployment', value: 'Docker containerized / Vercel Cloud' },
      { label: 'API Integrations', value: 'REST API, Webhooks, GraphQL connectors' },
      { label: 'Performance', value: 'Sub-100ms Page Load time with SSR caching' }
    ],
    useCases: [
      { title: 'Brand Franchises', desc: 'Launch unified store architectures with localized franchisee branding control.' },
      { title: 'Corporate Gifting', desc: 'Establish internal custom ordering systems for employee rewards and swags.' },
      { title: 'Digital Marketplace', desc: 'Run multi-vendor eCommerce platforms with separate vendor dashboard controls.' }
    ]
  }
};

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = id ? PRODUCTS_CONTENT[id] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
      <SEO
        title="VisionGate & NUVAM Commerce Systems"
        description="Learn about NUVAM Tech systems: VisionGate and NUVAM Commerce."
        keywords="visitor management, NES, entrance system, visitor registration, access control"
      />
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-4 text-ink">Product Not Found</h2>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <SEO
        title={`${product.title} - Enterprise Solutions`}
        description={product.subtitle}
        keywords="visitor management, NES, entrance system, visitor registration, access control"
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-[var(--accent-2)]/5 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-6">
              {product.category}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-8 leading-tight">
              {product.title}
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              {product.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Video Demonstration Section with Full Level Player */}
      {product.videoSrc && (
        <section className="pb-12 bg-surface">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-hairline/60 bg-bg p-px">
              <SmartVideo 
                src={product.videoSrc}
                className="w-full h-full rounded-[22px]"
                showControls={true}
              />
            </div>
          </div>
        </section>
      )}

      {/* Main Details Section */}
      <section className="py-16 md:py-24 border-t border-hairline/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            
            {/* Left side: Description & Key Features */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold text-ink">
                  Product Overview
                </h2>
                <p className="text-base md:text-lg text-muted leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-ink">
                  Key Capabilities
                </h3>
                <div className="grid gap-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="h-3 w-3 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-ink">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Tech Specifications Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] rounded-2xl blur-2xl opacity-10" />
              <div className="relative bg-gradient-to-br from-surface to-bg border border-hairline/50 rounded-2xl p-8 shadow-xl">
                <h3 className="font-display text-xl font-bold text-ink mb-6 pb-4 border-b border-hairline/50">
                  Technical Specifications
                </h3>
                <div className="space-y-6">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-start gap-4 py-2 border-b border-hairline/30 last:border-0">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted">{spec.label}</span>
                      <span className="text-sm font-medium text-ink text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 bg-surface/50 border-t border-hairline/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-ink">
              Practical Applications
            </h2>
            <p className="text-muted mt-2">
              Explore how this product is deployed in real-world business scenarios.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {product.useCases.map((uc, i) => (
              <div key={i} className="bg-surface border border-hairline/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-ink mb-3">{uc.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-hairline/40 bg-gradient-to-br from-[var(--accent)]/5 via-[var(--accent-2)]/5 to-[var(--accent-gold)]/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Request a Product Demo
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            Experience our platforms firsthand. Schedule a 30-minute demonstration with our solutions engineers to explore your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="w-full sm:w-auto px-8 py-4 text-base" onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>
              Book Live Demo
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

export default ProductDetail;
