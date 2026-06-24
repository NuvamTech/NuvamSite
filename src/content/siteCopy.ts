/* ─── Site-wide copy ────────────────────────────────────────────────────── */

export const siteCopy = {
  /* Hero */
  heroTitle: 'Speak innovation into motion.',
  heroSubtitle:
    'NUVAM builds AI-native products, automation systems, and web experiences that turn intent into momentum.',

  /* Services page */
  services: [
    {
      id: 'ai-ml',
      label: '01',
      title: 'AI & ML Engineering',
      summary: 'Intelligent systems that learn, predict, and assist — built for real workflows.',
      bullets: [
        'Custom LLM integrations and RAG pipelines',
        'Prediction models and classification systems',
        'AI-powered assistant and chatbot products',
        'Vector search and semantic retrieval layers',
        'Model evaluation, fine-tuning, and deployment',
      ],
    },
    {
      id: 'automation',
      label: '02',
      title: 'Automation',
      summary: 'Replace repetitive work with reliable systems that run without supervision.',
      bullets: [
        'Workflow automation for approvals and ops',
        'Scheduled reporting and data pipelines',
        'RPA for document handling and admin tasks',
        'Notification and escalation systems',
        'Cross-tool automation via APIs and webhooks',
      ],
    },
    {
      id: 'saas',
      label: '03',
      title: 'SaaS Product Engineering',
      summary: 'Full-stack product builds with auth, billing, dashboards, and design systems baked in.',
      bullets: [
        'Multi-tenant SaaS architecture',
        'Design systems and component libraries',
        'Auth, RBAC, and user management',
        'Subscription billing and usage metering',
        'Analytics dashboards and admin panels',
      ],
    },
    {
      id: 'web-app',
      label: '04',
      title: 'Web & App Development',
      summary: 'Marketing sites, internal tools, and customer portals — built clean and fast.',
      bullets: [
        'Marketing and brand websites',
        'Internal tooling and back-office portals',
        'Customer-facing dashboards',
        'Mobile apps (React Native)',
        'Performance and Core Web Vitals optimization',
      ],
    },
    {
      id: 'cloud',
      label: '05',
      title: 'Cloud Infrastructure',
      summary: 'Reliable, observable infra that scales with the product rather than against it.',
      bullets: [
        'AWS, GCP, and Azure architecture design',
        'CI/CD pipelines and deployment automation',
        'Observability, alerting, and logging stacks',
        'Cost optimization and resource governance',
        'Zero-downtime deployment strategies',
      ],
    },
    {
      id: 'integration',
      label: '06',
      title: 'Integration & APIs',
      summary: 'Connect anything — CRMs, ERPs, payment providers, and bespoke internal systems.',
      bullets: [
        'REST and GraphQL API design and build',
        'Third-party API integrations (Salesforce, HubSpot, Stripe, etc.)',
        'Data sync and ETL pipelines',
        'Webhook infrastructure and event streaming',
        'Legacy system modernisation connectors',
      ],
    },
  ],

  /* How we work (absorbed from Process section) */
  process: [
    {
      step: '01',
      title: 'Discovery & Framing',
      body: 'We define the real problem — not the assumed one. We map business goals, user needs, and technical constraints before a single line is written.',
    },
    {
      step: '02',
      title: 'System Design',
      body: 'Architecture, content, UX flows, and integration points are mapped end-to-end. No surprises later because the surface is fully understood now.',
    },
    {
      step: '03',
      title: 'Build & Iterate',
      body: 'We ship in tight, visible loops. Each cycle produces working software — not documentation. Milestones are real, not waterfall theatre.',
    },
    {
      step: '04',
      title: 'Launch & Improve',
      body: 'Go-live is not the end. We monitor, learn from real usage, and extend the platform safely. The product grows with the business.',
    },
  ],

  /* Products page */
  products: {
    visiongate: {
      tag: 'VisionGate',
      status: 'Live',
      title: 'Attendance managed by computer vision.',
      summary:
        'Built for teams that need accurate, frictionless attendance capture with real-time visibility and cleaner admin workflows — powered entirely by face recognition.',
      features: [
        {
          title: 'Face Recognition',
          body: 'Sub-second identification at entry points with liveness detection to prevent spoofing.',
        },
        {
          title: 'Real-time Dashboard',
          body: 'Live attendance feed, headcounts, and anomaly alerts visible to admins as events happen.',
        },
        {
          title: 'Operational Reporting',
          body: 'Automated daily, weekly, and monthly reports with CSV and API export options.',
        },
        {
          title: 'Multi-site Support',
          body: 'Manage multiple locations and entry points from a single admin console.',
        },
        {
          title: 'Integration Ready',
          body: 'Connect to HR systems, payroll platforms, and ERP tools via REST API.',
        },
        {
          title: 'Privacy Controls',
          body: 'Role-based access, audit logs, and configurable data retention policies.',
        },
      ],
    },
    commerce: {
      tag: 'NUVAM Commerce',
      status: 'Modular',
      title: 'A partner-ready e-commerce foundation.',
      summary:
        'A white-label commerce stack built for resellers and ecosystem partners who want a fully branded, production-grade storefront without rebuilding the product layer from scratch.',
      features: [
        {
          title: 'White-label Branding',
          body: 'Full theming engine — logo, colours, typography, and domain — per partner with zero code changes.',
        },
        {
          title: 'Inventory Management',
          body: 'Multi-warehouse stock tracking, SKU management, and low-stock alerting built in.',
        },
        {
          title: 'Order Lifecycle',
          body: 'End-to-end order management: placement, fulfilment, returns, refunds, and status tracking.',
        },
        {
          title: 'Partner Onboarding',
          body: 'Self-serve onboarding flow — partners are live within hours, not weeks.',
        },
        {
          title: 'Payment Infrastructure',
          body: 'Integrated with Razorpay, Stripe, and UPI. Multi-currency and tax handling included.',
        },
        {
          title: 'Analytics & Revenue',
          body: 'Per-partner revenue dashboards, conversion funnels, and GMV reporting out of the box.',
        },
      ],
    },
  },

  /* About page */
  about: {
    headline: 'Built from language, shaped for momentum.',
    subheadline:
      'NUVAM is a product-first technology studio. We build AI systems, automation, and software products with a quiet confidence that speaks for itself.',
    founder: {
      name: 'Nithin',
      role: 'Founder',
      bio: 'Nithin started NUVAM with a simple belief: that great technology should feel inevitable — not complicated. NUVAM is the studio he wished existed when he was building his own products.',
    },
    values: [
      {
        label: 'Product-first',
        body: 'We think in products, not projects. Everything we build is designed to grow, adapt, and outlast the brief.',
      },
      {
        label: 'India-first, globally ready',
        body: 'Rooted in India with the ambition and craft to operate on any global stage without apology.',
      },
      {
        label: 'Editorial quality',
        body: 'We choose restraint over noise. Fewer features, better executed. Less copy, more meaning.',
      },
      {
        label: 'Practical delivery',
        body: 'Momentum matters. We ship working software in tight loops and measure progress against reality, not roadmaps.',
      },
    ],
    stats: [
      { value: 'India-first', label: 'Studio origin' },
      { value: 'AI-native', label: 'Core capability' },
      { value: '2 products', label: 'In production' },
      { value: '6 services', label: 'Delivery areas' },
    ],
  },

  /* Contact page */
  contact: {
    headline: 'Start a conversation.',
    subheadline:
      'Tell us what you are building or trying to solve. We will read it carefully and respond within 24 hours.',
    details: {
      email: 'hello@nuvam.in',
      location: 'India',
      responseTime: 'Within 24 hours',
    },
  },
};
