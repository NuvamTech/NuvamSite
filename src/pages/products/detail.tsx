import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

interface ProductData {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  useCases: { title: string; desc: string }[];
}

const PRODUCTS_CONTENT: Record<string, ProductData> = {
  nes: {
    title: 'NES (Novum Entrance System)',
    category: 'ISV Product',
    subtitle: 'Modern cloud-based visitor management system for enterprise offices and business centers.',
    description: 'Novum Entrance System (NES) streamlines the check-in process for guests, contractors, and employees. Offering features like pre-registration, automated host alerts, custom badge printing, and instant emergency roll calls, NES ensures your facilities remain secure and welcoming.',
    features: [
      'Digital guest pre-registration via email invitations',
      'Instant SMS/Email host notifications upon guest arrival',
      'Thermal badge printing and automated QR code check-in',
      'Real-time emergency dashboard & occupancy roll call',
      'GDPR-compliant data retention policy management',
      'Hardware integration with speed gates and turnstiles'
    ],
    specs: [
      { label: 'Deployment', value: 'SaaS / Private Azure Cloud' },
      { label: 'Integrations', value: 'Microsoft Teams, Outlook, Slack' },
      { label: 'Supported HW', value: 'iPad, Zebra Printers, Barcode Scanners' },
      { label: 'Security', value: 'OAuth 2.0, SSL Encryption, Biometric Support' }
    ],
    useCases: [
      { title: 'Business Centers', desc: 'Manage multi-tenant visitor tracking across multiple buildings with centralized administration.' },
      { title: 'Corporate Offices', desc: 'Secure corporate lobbies with custom NDA signings, health screening forms, and automated badge issuing.' },
      { title: 'Industrial Facilities', desc: 'Ensure safety compliance by verifying guest credentials and safety briefings before granting entry.' }
    ]
  },
  ocr: {
    title: 'OCR Certification Directory',
    category: 'ISV Product',
    subtitle: 'Extract, organize, and query physical document records with advanced AI Optical Character Recognition.',
    description: 'Transform your physical archives, contracts, paper certificates, and files into structured, instantly searchable databases. Utilizing industry-leading OCR models, this directory automatically reads, classifies, indexes, and stores your documents with absolute precision and security.',
    features: [
      'Multi-language document text extraction and scanning',
      'Automated categorization & AI document classification',
      'Full-text fuzzy search across thousands of files',
      'Sensitive data masking (PII) and redaction tools',
      'Version control and historical edit tracking',
      'Batch upload with automatic structure recognition'
    ],
    specs: [
      { label: 'Tech Stack', value: 'Azure AI Document Intelligence, Python, Node.js' },
      { label: 'Output Formats', value: 'PDF, JSON, CSV, Excel' },
      { label: 'Search Engine', value: 'Elasticsearch / AI Vector Search' },
      { label: 'Compliance', value: 'ISO 27001, HIPAA, GDPR compliant architecture' }
    ],
    useCases: [
      { title: 'Legal & Compliance', desc: 'Scan and search historical contracts, corporate resolutions, and legacy audit documents.' },
      { title: 'Academic / HR', desc: 'Digitize university certificates, transcripts, and employee files for fast background verification.' },
      { title: 'Logistics', desc: 'Instantly scan and process physical shipping invoices, custom documents, and delivery receipts.' }
    ]
  },
  ess: {
    title: 'Employee Self Service Portal (ESS)',
    category: 'ISV Product',
    subtitle: 'Empower your workforce to manage HR tasks, profiles, and leaves securely from anywhere.',
    description: 'Simplify human resource management and minimize administrative overhead. The ESS portal provides employees with a intuitive, modern interface to view payslips, submit leave requests, track working hours, and update profiles, all while automating HR approvals.',
    features: [
      'Interactive dashboard for time-off and leave requests',
      'Digital profile management and document storage',
      'Automated multi-level manager approval workflows',
      'Secure payslip and tax document delivery',
      'Timesheet submission with geo-tagging support',
      'Mobile-friendly responsive web application'
    ],
    specs: [
      { label: 'Platform', value: 'React / Next.js Web App' },
      { label: 'Database', value: 'Microsoft SQL Server / PostgreSQL' },
      { label: 'Integrations', value: 'Dynamics 365 HR, SAP, Oracle Cloud' },
      { label: 'Authentication', value: 'Azure Active Directory, Single Sign-On' }
    ],
    useCases: [
      { title: 'Hybrid Teams', desc: 'Enable remote workers to submit timesheets, request PTO, and receive HR messages easily.' },
      { title: 'Retail Operations', desc: 'Manage shifting schedules, leave swaps, and time-off tracking for store employees.' },
      { title: 'Enterprise Organizations', desc: 'Consolidate multiple HR databases into a single, cohesive portal for global employees.' }
    ]
  },
  'face-rec': {
    title: 'Face Recognition & Video Analytics',
    category: 'ISV Product',
    subtitle: 'Real-time security analytics and facial recognition driven by advanced edge computer vision.',
    description: 'Protect physical boundaries, automate attendance logs, and understand visitor flows with real-time video stream intelligence. Configured to deploy on standard security cameras, our facial recognition solution runs on-premises or in the cloud with strict security.',
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
  'bidding-platform': {
    title: 'Commodity Bidding Platform',
    category: 'Industry Platform',
    subtitle: 'Secure SaaS platform for digital commodity trading, custom listings, and auction flows.',
    description: 'Transition commodity sales and purchasing onto a transparent, fully automated auction portal. From listing raw products to managing multi-stage bid approvals, automated notifications, and final contract execution, the platform increases velocity and reduces commercial risk.',
    features: [
      'Live bidding engine with real-time price updates',
      'Secure buyer pre-qualification and deposits tracking',
      'Automated bid closing, extensions, and reserve pricing',
      'Custom workflows for internal commercial approval',
      'Audit logging of every action to prevent bidding fraud',
      'Interactive supplier performance dashboards'
    ],
    specs: [
      { label: 'Real-time Engine', value: 'SignalR / WebSockets for live bidding' },
      { label: 'Cloud Host', value: 'Microsoft Azure (Web Apps + Cosmos DB)' },
      { label: 'Payments', value: 'Stripe, Bank Transfer API Integration' },
      { label: 'Languages', value: 'English, Azerbaijani, Russian support' }
    ],
    useCases: [
      { title: 'Agricultural Trade', desc: 'Auction grains, livestock, and fertilizers directly to qualified distributors.' },
      { title: 'Industrial Metals', desc: 'Host high-volume bids for scrap metals, steel products, and chemicals.' },
      { title: 'Government Procurement', desc: 'Implement transparent, public-facing tender auctions for state assets.' }
    ]
  },
  'd365-automations': {
    title: 'D365 Workflow Automations',
    category: 'Industry Platform',
    subtitle: 'Maximize efficiency in Microsoft Dynamics 365 by automating routine enterprise actions.',
    description: 'Break free from manual, error-prone data entry and repetitive workflows. Our specialized D365 automation modules seamlessly connect ERP subsystems to automate invoice indexing, tax matching, payroll calculations, and vendor status updates.',
    features: [
      'No-code/Low-code Power Automate cloud flow integration',
      'RPA tools for legacy on-premises applications integration',
      'AI-powered document parser for vendor invoice entry',
      'Automated monthly financial closure workflows',
      'Instant mobile notifications for multi-level manager approvals',
      'Cross-system inventory and stock balancing'
    ],
    specs: [
      { label: 'Core Platform', value: 'Microsoft Power Platform, Azure Logic Apps' },
      { label: 'Target ERP', value: 'Dynamics 365 Finance & Supply Chain' },
      { label: 'AI Builder', value: 'GPT-4 Invoice Extraction models' },
      { label: 'Monitoring', value: 'Power BI Execution and Health Logs' }
    ],
    useCases: [
      { title: 'Accounts Payable', desc: 'Automatically extract invoice data from emails, match with Purchase Orders, and queue for payment.' },
      { title: 'Supply Chain', desc: 'Trigger reorder events when stock levels fall below critical thresholds, and auto-email vendors.' },
      { title: 'Financial Auditing', desc: 'Perform real-time compliance checks across general ledger journals before posting.' }
    ]
  },
  'airport-revenue': {
    title: 'Airport Revenue Management ISV',
    category: 'Industry Platform',
    subtitle: 'Optimize contracts, billing, and retail concession revenue management for airports.',
    description: 'Specifically engineered for the aviation industry, our Airport Revenue Management system automates aeronautical invoicing, landing fee calculations, retail rental concessions, and passenger charge structures. Eliminate complex spreadsheets and secure your cash flow.',
    features: [
      'Automated aeronautical billing based on aircraft weight and park time',
      'Concession revenue tracking with variable sales-percentage rent',
      'Real-time passenger statistics integration (departure control systems)',
      'Contract lifecycle management with CPI escalation tracking',
      'Interactive financial forecasting and airline route profitability',
      'Custom ERP connector for direct invoice posting'
    ],
    specs: [
      { label: 'Data Standards', value: 'IATA Message Parser (MVT, LDM, SLS)' },
      { label: 'Deployment', value: 'Azure Cloud Platform / Hybrid' },
      { label: 'Database', value: 'Microsoft Azure SQL Database' },
      { label: 'Security', value: 'SOC 2 Type II, ISO 27001 Certified environment' }
    ],
    useCases: [
      { title: 'Aeronautical Invoicing', desc: 'Calculate exact landing, parking, and security fees directly from flight plans and radar logs.' },
      { title: 'Concession Invoicing', desc: 'Integrate airport duty-free POS terminals to dynamically calculate concession fees.' },
      { title: 'Budgeting & Forecasting', desc: 'Run predictive scenarios for parking lots, terminals, and passenger numbers.' }
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
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-4 text-ink">Product Not Found</h2>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
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
            <Button className="w-full sm:w-auto px-8 py-4 text-base" onClick={() => navigate('/contact')}>
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
