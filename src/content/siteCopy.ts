/* ─── Site-wide copy matching novum.tech features ───────────────────────── */

export const siteCopy = {
  /* Hero Slide Content */
  heroSlides: [
    {
      title: 'Accelerate Operations With Microsoft Dynamics 365',
      subtitle: 'Unify finance, supply chain, and core business functions under one intelligent platform. Automate workflows, improve visibility, and scale with confidence using Dynamics 365.',
      ctaPrimary: 'Learn More',
      ctaSecondary: 'Download Brochure'
    },
    {
      title: 'Transform Data Into Strategic Growth',
      subtitle: 'Turn raw data into actionable insights through advanced analytics and interactive Power BI dashboards. Make smarter decisions with real-time reporting and deep data visibility.',
      ctaPrimary: 'Learn More',
      ctaSecondary: 'Download Brochure'
    },
    {
      title: 'Reimagine work with AI-Powered Innovation',
      subtitle: 'Enhance productivity with Microsoft Copilot and enterprise-grade AI tools. Automate tasks, empower decision-making, and unlock intelligent experiences across every workflow.',
      ctaPrimary: 'Learn More',
      ctaSecondary: 'Download Brochure'
    }
  ],

  /* Grouped Services for Mega Menu and Services Grid */
  serviceCategories: [
    {
      category: 'Digital Transformation',
      items: [
        { id: 'digital-strategy', title: 'Digital Strategy', desc: 'Custom strategies designed to modernize workflows, drive efficiency, and align technology investments with business objectives.' },
        { id: 'strategic-resourcing', title: 'Strategic Resourcing', desc: 'Deploy highly skilled software engineering and IT talent directly to your project teams.' },
        { id: 'change-management', title: 'Change Management & Adoption', desc: 'Ensure smooth adoption of new software systems with custom training and cultural alignment.' },
        { id: 'corporate-trainings', title: 'Corporate Trainings', desc: 'Upskill your enterprise teams in Microsoft 365, Azure, Dynamics 365, and AI.' },
        { id: 'data-audit', title: 'Data Audit', desc: 'Comprehensive analysis of database hygiene, security controls, and integration gaps.' },
        { id: 'microsoft-licensing', title: 'Microsoft Licensing', desc: 'Optimize your Microsoft enterprise agreement, subscriptions, and licensing costs.' },
        { id: 'sustainability-manager', title: 'Sustainability Manager', desc: 'Track and report carbon footprint and ESG metrics using Microsoft Cloud.' }
      ]
    },
    {
      category: 'Data & AI',
      items: [
        { id: 'power-bi', title: 'Power BI / Reporting Consulting', desc: 'Interactive business intelligence dashboards and data modeling to drive real-time decisions.' },
        { id: 'data-warehouse', title: 'Data Warehouse', desc: 'Centralize structured and unstructured business intelligence data from multiple software systems.' },
        { id: 'ai-iot', title: 'Artificial Intelligence and IoT', desc: 'Intelligent face-recognition models, predictive analytics, and connected sensor integrations.' },
        { id: 'azure-data-foundry', title: 'Azure Data Foundry', desc: 'Scalable data integration pipelines to extract, load, and transform raw enterprise data.' }
      ]
    },
    {
      category: 'Business Applications',
      items: [
        { id: 'dynamics-365', title: 'Microsoft Dynamics 365', desc: 'End-to-end ERP implementation spanning financials, inventory, retail operations, and HR modules.' },
        { id: 'm365-deployment', title: 'Microsoft 365 Deployment', desc: 'Implement modern workplace tools including Microsoft Teams, SharePoint, Outlook, and OneDrive.' }
      ]
    },
    {
      category: 'Software & Engineering',
      items: [
        { id: 'software-development', title: 'Software Development', desc: 'Tailored backend systems and frontend applications developed using robust codebases.' },
        { id: 'custom-app-dev', title: 'Application Development', desc: 'Bespoke mobile applications and custom portal systems built to enhance client engagement.' },
        { id: 'system-integration', title: 'System integration', desc: 'Seamless API connectors linking legacy databases, payment solutions, and cloud environments.' },
        { id: 'automation', title: 'Automation', desc: 'Autonomous background tasks, scheduled scripts, and workflow approvals to save hours of manual labor.' },
        { id: 'copilot-agents', title: 'Copilot Studio / Agents', desc: 'Develop custom AI assistants, conversational chatbots, and customer-facing support agents.' },
        { id: 'azure-cloud', title: 'Azure (Cloud Adoption and Integration)', desc: 'Re-host, migrate, or architect custom software backends onto scalable Microsoft Azure servers.' }
      ]
    },
    {
      category: 'Engagement Models',
      items: [
        { id: 'consulting-advisory', title: 'Consulting & Advisory', desc: 'Strategic consulting to identify optimization opportunities and structure software builds.' },
        { id: 'professional-services', title: 'Professional Services', desc: 'Dedicated technical experts to deploy, integrate, and configure third-party software.' },
        { id: 'managed-services', title: 'Managed Services', desc: 'Post-launch operations, server monitoring, security updates, and bug fixes around the clock.' }
      ]
    }
  ],

  /* Products categorized for Product slider & Mega Menu */
  products: {
    isv: [
      { id: 'nes', title: 'NES (Novum Entrance System)', desc: 'Cloud-based visitor management system for busy business centers. Supports guest pre-registration, access control, and secure check-ins.', image: '/assets/img/products/entrance-system.webp' },
      { id: 'ocr', title: 'OCR Certification Directory', desc: 'Convert paper records into searchable digital documents. Ideal for storing certificates, contracts, reports, and regulatory files.', image: '/assets/img/products/ocr.webp' },
      { id: 'ess', title: 'ESS - Employee Self Service', desc: 'A secure, user-friendly portal that empowers employees to manage their profiles, leave requests, and HR information anytime, anywhere.', image: '/assets/img/products/ess.webp' },
      { id: 'face-rec', title: 'Face Recognition & Detection', desc: 'Identify and count people in real time using video analytics. Perfect for secure access, event tracking, and smart surveillance.', image: '/assets/img/products/face-recognition.webp' }
    ],
    industry: [
      { id: 'bidding-platform', title: 'Commodity Bidding Platform', desc: 'Flexible SaaS platform for digital trading. Create product listings, set approval flows, monitor activity, and access real-time analytics.', image: '/assets/img/products/bidding.webp' },
      { id: 'd365-automations', title: 'D365 Automations', desc: 'Enhance Microsoft Dynamics 365 workflows with intelligent automation. Simplify data entry, approvals, and reporting for faster results.', image: '/assets/img/products/ds365.png' },
      { id: 'airport-revenue', title: 'Airport Revenue Management ISV', desc: 'Comprehensive revenue management tool designed for airports to optimize billing, contracts, and income forecasting through automation.', image: '/assets/img/products/airport-revenue.webp' }
    ]
  },

  /* About section values */
  about: {
    subtitle: 'About us',
    headline: 'Trusted expertise shaped by years of innovation and global talent',
    description1: 'NUVAM Tech delivers advanced digital solutions including data analytics, ERP systems, and custom software to help businesses improve decision-making and efficiency.',
    description2: 'We deliver data analytics, consulting, development, and AI/IoT solutions across industries like healthcare, telecom, construction, and government.',
    description3: 'As a Microsoft Solution Partner, we implement cloud technologies across Data & AI, Business Applications, and Modern Workplace. With expertise across multiple industries, we drive digital transformation using AI, IoT, and data-driven strategies creating long-lasting business value.',
    slogan: 'OUR SLOGAN REFLECTS GOALS, BELIEFS, KNOWLEDGE AND TRANSFORMATION THAT WE BRING INTO ORGANIZATIONS. WHAT WE DO CREATES LONG-LASTING VALUE.'
  },

  /* Solutions tabs */
  solutions: [
    {
      id: 'power-bi',
      tabLabel: 'Power BI',
      title: 'Why Do Companies Need Power BI?',
      description: 'In today’s data-driven landscape, transforming raw data into actionable insights is essential for business success. NUVAM Tech empowers organizations to build a data-first culture by turning complex data into clear, interactive visualizations. With seamless integration into the Azure Analytics ecosystem, Power BI enables real-time reporting, intuitive dashboards, and scalable data solutions across every business function. From finance and supply chain to sales, marketing, and HR, Power BI helps teams make faster, smarter decisions backed by accurate, up-to-date insights.',
      image: 'https://fd-novumwebsite-weu-prd-001-endpoint-hgd5afagdvc8c9gu.a01.azurefd.net/assets/img/home/power-bi-main.png'
    },
    {
      id: 'copilot',
      tabLabel: '365 Copilot',
      title: 'Introducing Microsoft 365 Copilot: A Smarter Way to Work',
      description: 'Microsoft 365 Copilot brings AI directly into the tools your teams use every day, enhancing productivity, creativity, and decision-making at every level. It is built on Microsoft’s trusted enterprise framework, offering advanced security, compliance, identity management, and data privacy to ensure full readiness for business environments. From writing assistance in Word to data analysis in Excel and streamlined communication in Outlook, Copilot supports your teams with intelligent automation that fits naturally into their workflows.',
      image: 'https://fd-novumwebsite-weu-prd-001-endpoint-hgd5afagdvc8c9gu.a01.azurefd.net/assets/img/home/copilot-main.png'
    },
    {
      id: 'data-warehouse',
      tabLabel: 'Data Warehouse',
      title: 'Why Do Companies Need a Data Warehouse?',
      description: 'As organizations embrace digital transformation, their operations increasingly rely on multiple IT systems that generate large volumes of data. To stay competitive, companies need a way to bring this data together and turn it into actionable insights that drive performance. A modern data warehouse centralizes information from across departments, making it accessible for decision-makers at every level. From executives to analysts, teams can use consistent, reliable data to understand business performance, identify risks, and uncover new opportunities.',
      image: 'https://fd-novumwebsite-weu-prd-001-endpoint-hgd5afagdvc8c9gu.a01.azurefd.net/assets/img/home/warehouse-main.png'
    }
  ],

  /* Company Statistics Counters */
  stats: [
    { value: '120+', label: 'Enterprise Implementations Across Industries' },
    { value: '8+', label: 'Years Delivering Data, ERP & Cloud Solutions' },
    { value: '95%', label: 'Microsoft-Certified Consultants' },
    { value: '40+', label: 'Data & Technology Specialists' }
  ],

  /* Client Testimonials */
  testimonials: [
    {
      author: 'Majid Ismailov',
      role: 'Head of Data Management, Avromed',
      quote: 'With a cloud solution custom-designed for the pharmaceutical industry by NUVAM Tech, we consolidated data from multiple systems into one unified platform. Now department heads access real-time reports instantly, manual consolidation is gone, and decision-making is faster and more secure.',
      avatar: 'https://fd-novumwebsite-weu-prd-001-endpoint-hgd5afagdvc8c9gu.a01.azurefd.net/assets/img/team/avromed.png'
    },
    {
      author: 'Zaur Dibirov',
      role: 'Director of Finance & Accounting, Azerbaijan Airlines',
      quote: 'With Microsoft Dynamics 365 implemented and tailored for the aviation industry by NUVAM Tech, we transformed our finance operations from manual, time-consuming processes into a unified, intelligent system. Real-time insights now guide our decisions, and our teams are more agile and empowered than ever.',
      avatar: 'https://fd-novumwebsite-weu-prd-001-endpoint-hgd5afagdvc8c9gu.a01.azurefd.net/assets/img/team/airlines-1.png'
    },
    {
      author: 'Daniel Viranyi',
      role: 'IT & Security Director, Kitopi',
      quote: 'Partnering with NUVAM Tech, we migrated our entire infrastructure to the Microsoft Cloud — adopting Microsoft 365 and leveraging Data & AI services. Through seamless integrations and custom development, NUVAM helped us unify data, automate workflows, and empower every department with intelligent insights.',
      avatar: 'https://fd-novumwebsite-weu-prd-001-endpoint-hgd5afagdvc8c9gu.a01.azurefd.net/assets/img/team/kitopi-logo.jpg'
    },
    {
      author: 'Ashish Panday',
      role: 'Director of Operations, Aster Pharmacy',
      quote: 'Working with NUVAM has transformed the way Aster Pharmacy manages its operations. Their tailored solutions and expert guidance have streamlined our processes, improved efficiency, and enabled better decision-making across all departments.',
      avatar: 'https://fd-novumwebsite-weu-prd-001-endpoint-hgd5afagdvc8c9gu.a01.azurefd.net/assets/img/team/aster.png'
    }
  ],

  /* Contact page */
  contact: {
    headline: 'Start a conversation.',
    subheadline: 'Tell us what you are building or trying to solve. We will read it carefully and respond within 24 hours.',
    details: {
      email: 'nuvam.com@gmail.com',
      location: 'India Support Teams',
      responseTime: 'Within 24 hours',
    }
  }
};
