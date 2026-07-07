import { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { TechStackMarquee } from '../components/TechStackMarquee';
import { siteCopy } from '../content/siteCopy';

/* ════════════════════════════════════════════════════════════════════════════
   SHARED HELPERS
   ════════════════════════════════════════════════════════════════════════════ */

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl mb-8">
      <p className="mb-2.5 text-xs uppercase tracking-[0.35em] brand-grad-text font-bold">{eyebrow}</p>
      <h2 className="font-display text-3xl leading-tight md:text-5xl text-ink">{title}</h2>
      {body && <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{body}</p>}
    </div>
  );
}



/* ════════════════════════════════════════════════════════════════════════════
   MAIN PAGE EXPORT
   ════════════════════════════════════════════════════════════════════════════ */
export function SinglePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedTab, setSelectedTab] = useState('power-bi');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  
  // Touch/Mouse Swipe State for Hero Slider
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragEndX, setDragEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setDragEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (dragStartX === null || dragEndX === null) return;
    const diff = dragStartX - dragEndX;
    if (diff > 50) {
      setActiveSlide((prev) => (prev + 1) % siteCopy.heroSlides.length);
    } else if (diff < -50) {
      setActiveSlide((prev) => (prev - 1 + siteCopy.heroSlides.length) % siteCopy.heroSlides.length);
    }
    setDragStartX(null);
    setDragEndX(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // Avoid tracking drags on button clicks
    if ((e.target as HTMLElement).closest('button, a')) return;
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStartX !== null) {
      setDragEndX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (dragStartX === null || dragEndX === null) {
      setDragStartX(null);
      setDragEndX(null);
      return;
    }
    const diff = dragStartX - dragEndX;
    if (diff > 50) {
      setActiveSlide((prev) => (prev + 1) % siteCopy.heroSlides.length);
    } else if (diff < -50) {
      setActiveSlide((prev) => (prev - 1 + siteCopy.heroSlides.length) % siteCopy.heroSlides.length);
    }
    setDragStartX(null);
    setDragEndX(null);
  };

  const handleMouseLeave = () => {
    setDragStartX(null);
    setDragEndX(null);
  };

  // Auto transition slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % siteCopy.heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
      
      {/* ── #home: HERO INTERACTIVE SLIDER (Microsoft Fluent Mesh Styling - Dark Edition) ── */}
      <section id="home" className="scroll-mt-20 pt-4 pb-10">
        <div 
          className="relative overflow-hidden rounded-[2.5rem] bg-[#0a091a] p-8 md:p-14 min-h-[480px] flex items-center shadow-2xl border border-[#252044] select-none cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          
          {/* Microsoft Fluent-Like Modern Animated Backgrounds (Darkened & Cleared) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden transition-all duration-1000">
            {activeSlide === 0 && (
              <div className="absolute inset-0 transition-opacity duration-1000 bg-[#0a091a]">
                {/* Fluent blue-purple ribbon waves & lens glow - Responsive positions */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(41,121,255,0.35)_0%,transparent_50%)] md:bg-[radial-gradient(circle_at_80%_20%,rgba(41,121,255,0.45)_0%,transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_85%,rgba(168,85,247,0.25)_0%,transparent_50%)] md:bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.35)_0%,transparent_60%)]" />
                <svg className="absolute w-full h-full text-blue-500/10" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0,200 C 300,100 600,400 900,250 C 1200,100 1350,300 1440,150 L 1440,600 L 0,600 Z" fill="rgba(41,121,255,0.12)" />
                  <path d="M 0,350 C 400,200 700,500 1000,300 C 1300,100 1400,350 1440,250 L 1440,600 L 0,600 Z" fill="rgba(168,85,247,0.1)" />
                </svg>
                {/* Fluent Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.02] md:opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              </div>
            )}

            {activeSlide === 1 && (
              <div className="absolute inset-0 transition-opacity duration-1000 bg-[#0a091a]">
                {/* Windows Bloom design - Fluent waves teal, gold, & violet - Responsive positions */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(20,184,166,0.3)_0%,transparent_50%)] md:bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.4)_0%,transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,158,11,0.25)_0%,transparent_50%)] md:bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.35)_0%,transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,47,190,0.25)_0%,transparent_50%)] md:bg-[radial-gradient(circle_at_50%_50%,rgba(123,47,190,0.3)_0%,transparent_60%)]" />
                {/* Floating Fluent Glassmorphic circles - Scaled on mobile */}
                <div className="absolute top-1/3 left-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full bg-teal-500/10 blur-2xl animate-pulse" style={{ animationDuration: '7s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 md:w-36 md:h-36 rounded-full bg-purple-500/10 blur-xl animate-pulse" style={{ animationDuration: '5s' }} />
              </div>
            )}

            {activeSlide === 2 && (
              <div className="absolute inset-0 transition-opacity duration-1000 bg-[#0a091a]">
                {/* Microsoft Copilot fabric ribbon mesh gradient (yellow, magenta, orange, blue) - Responsive positions */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(233,30,140,0.35)_0%,transparent_60%)] md:bg-[radial-gradient(circle_at_80%_80%,rgba(233,30,140,0.45)_0%,transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,185,0,0.25)_0%,transparent_50%)] md:bg-[radial-gradient(circle_at_20%_20%,rgba(255,185,0,0.35)_0%,transparent_60%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(41,121,255,0.25)_0%,transparent_50%)] md:bg-[radial-gradient(circle_at_50%_10%,rgba(41,121,255,0.35)_0%,transparent_60%)]" />
                {/* Cyber stars particles */}
                <div className="absolute inset-0 opacity-[0.1] md:opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
              </div>
            )}
          </div>

          {/* Slide Content */}
          <div className="relative w-full max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: 'var(--brand-grad)' }} />
              <span className="text-[10px] uppercase tracking-[0.45em] font-bold text-white/60">NUVAM Tech Hub</span>
            </div>

            <div className="transition-all duration-700 space-y-4 animate-fade-up">
              <h1 className="font-display text-3xl leading-tight text-white sm:text-5xl md:text-6xl max-w-3xl">
                {siteCopy.heroSlides[activeSlide].title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                {siteCopy.heroSlides[activeSlide].subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button 
                onClick={() => scrollTo('contact')}
                className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm hover:scale-[1.02] transition-all cursor-pointer"
              >
                {siteCopy.heroSlides[activeSlide].ctaPrimary}
              </button>
              <button 
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center rounded-full border border-white/10 hover:border-white hover:bg-white/5 text-white px-6 py-3 text-sm font-semibold transition-all cursor-pointer"
              >
                {siteCopy.heroSlides[activeSlide].ctaSecondary}
              </button>
            </div>

            {/* Slider Dots */}
            <div className="flex gap-2 pt-6">
              {siteCopy.heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`h-2 rounded-full transition-all ${activeSlide === i ? 'w-8 bg-white' : 'w-2 bg-white/20'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* ── #about: ABOUT SECTION ──────────────────────────────────────── */}
      <section id="about" className="scroll-mt-20 py-12 md:py-16 border-t border-hairline/40 relative overflow-hidden">
        {/* Glassmorphic Ornaments */}
        <div className="pointer-events-none absolute -left-20 top-1/3 h-56 w-56 rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-[var(--accent)]/5 backdrop-blur-md shadow-xl animate-float-slow opacity-60 dark:border-white/5 dark:bg-white/[0.02]" />
        
        <div className="grid gap-10 lg:grid-cols-2 items-center relative z-10">
          
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--accent)]">{siteCopy.about.subtitle}</span>
            <h2 className="font-display text-3xl leading-tight md:text-5xl text-ink">
              {siteCopy.about.headline}
            </h2>
            <div className="space-y-4 text-muted leading-7 text-sm md:text-base">
              <p>{siteCopy.about.description1}</p>
              <p>{siteCopy.about.description2}</p>
              <p>{siteCopy.about.description3}</p>
            </div>
            <p className="text-xs font-bold leading-6 uppercase tracking-wider text-[var(--accent)] border-l-2 border-[var(--accent)] pl-4">
              {siteCopy.about.slogan}
            </p>
          </div>

          {/* Right Visual Box (HTML5 video served from public/videos/about-intro.mp4) */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border border-hairline bg-surface p-px">
            <video 
              className="w-full h-full object-cover rounded-3xl"
              src="/videos/about-intro.mp4"
              controls
              autoPlay
              muted
              playsInline
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* ── #services: CAPABILITIES GRID (10 services with inline SVGs) ── */}
      <section id="services" className="scroll-mt-20 py-12 md:py-16 border-t border-hairline/40 relative overflow-hidden">
        {/* Glassmorphic Ornaments */}
        <div className="pointer-events-none absolute -right-28 top-1/4 h-72 w-72 rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-[var(--accent-2)]/5 backdrop-blur-lg shadow-2xl animate-float-reverse opacity-50 dark:border-white/5 dark:bg-white/[0.01]" />
        
        <SectionHeading
          eyebrow="Services"
          title="Explore Our Services"
          body="We partner with organizations to deliver smart, scalable digital solutions. Our services combine deep technical expertise with a focus on real business outcomes."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteCopy.serviceCategories.flatMap(cat => cat.items).slice(0, 10).map((svc, i) => {
            // High fidelity bespoke SVGs for each service category
            const svgIcons = [
              // Digital Strategy
              <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
              // Strategic Resourcing
              <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>,
              // Change Management & Adoption
              <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3L22 4" /></svg>,
              // Corporate Trainings
              <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
              // Data Audit
              <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
              // Microsoft Licensing
              <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
              // Sustainability Manager
              <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              // Power BI / Data Analytics
              <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
              // Data Warehouse
              <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
              // AI & IoT
              <svg className="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            ];
            return (
              <div
                key={svc.id}
                className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface p-6 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-bg flex items-center justify-center text-[var(--accent)] mb-4">
                  {svgIcons[i % svgIcons.length]}
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{svc.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{svc.desc}</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-xs font-semibold text-[var(--accent)] hover:underline gap-1 mt-auto"
                >
                  Learn More
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── #products: PRODUCTS CAROUSEL & INTERACTIVE DEMOS ────────────── */}
      <section id="products" className="scroll-mt-20 py-12 md:py-16 border-t border-hairline/40 relative overflow-hidden">
        {/* Glassmorphic Ornaments */}
        <div className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 rounded-full border border-white/10 bg-gradient-to-tr from-white/5 to-[var(--accent-3)]/5 backdrop-blur-md shadow-xl animate-float-slow opacity-60 dark:border-white/5 dark:bg-white/[0.02]" />
        
        <SectionHeading
          eyebrow="Products"
          title="Smart Digital Products That Simplify Operations"
          body="NUVAM creates intelligent software tools that automate workflows, improve visibility, and enhance operational performance across industries."
        />

        {/* 2 Flagship Product Demos with Video Players Embedded side by side */}
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="bg-surface rounded-3xl border border-hairline p-5 space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest brand-grad-text">VisionGate™ Video Preview</span>
              <h3 className="text-lg font-bold text-ink mt-1">Computer Vision Attendance</h3>
              <p className="text-xs text-muted mt-1 mb-3">Sub-second face detection with anti-spoofing landmarks validation.</p>
            </div>
            <video 
              className="w-full h-[320px] object-cover rounded-2xl border border-hairline"
              src="/videos/products/visiongate.mp4"
              controls
              autoPlay
              muted
              playsInline
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="bg-surface rounded-3xl border border-hairline p-5 space-y-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest brand-grad-text">NUVAM Commerce Video Preview</span>
              <h3 className="text-lg font-bold text-ink mt-1">White-Label Custom Storefront</h3>
              <p className="text-xs text-muted mt-1 mb-3">Self-serve instant branding switch and automated order execution loops.</p>
            </div>
            <video 
              className="w-full h-[320px] object-cover rounded-2xl border border-hairline"
              src="/videos/products/commerce.mp4"
              controls
              autoPlay
              muted
              playsInline
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Product Cards Grid (Non-animated static cards with Video upload tags) */}
        <div className="relative">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">ISV & Industry Solutions</p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin snap-x">
            {[...siteCopy.products.isv, ...siteCopy.products.industry].map((prod) => (
              <div 
                key={prod.id} 
                className="min-w-[280px] max-w-[280px] bg-surface rounded-2xl border border-hairline p-5 flex flex-col snap-start"
              >
                {/* HTML5 video element for uploading product demonstration files */}
                <div className="relative h-32 rounded-xl overflow-hidden bg-bg mb-4 border border-hairline flex items-center justify-center">
                  <video 
                    className="w-full h-full object-cover"
                    src={`/videos/products/${prod.id}.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={(e) => {
                      // Fallback overlay when video hasn't been uploaded yet
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Visual fallback when video doesn't exist */}
                  <span className="absolute text-xl font-display font-bold brand-grad-text">{prod.title.charAt(0)}</span>
                </div>
                <h4 className="text-sm font-bold text-ink mb-1.5">{prod.title}</h4>
                <p className="text-xs text-muted leading-relaxed mb-4">{prod.desc}</p>
                <a href="#contact" className="text-xs font-semibold text-[var(--accent)] hover:underline mt-auto">Request Brochure →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS TABS: EXPLORE DIGITAL SOLUTIONS ───────────────────── */}
      <section className="scroll-mt-20 py-12 md:py-16 border-t border-hairline/40">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <SectionHeading
            eyebrow="Solutions"
            title="Explore Our Digital Solutions"
            body="Discover how NUVAM's tools and services help you solve real business challenges with data, cloud, and AI."
          />
        </div>

        {/* Tab switch buttons */}
        <div className="flex justify-center border-b border-hairline max-w-md mx-auto mb-8">
          {siteCopy.solutions.map((sol) => (
            <button
              key={sol.id}
              onClick={() => setSelectedTab(sol.id)}
              className={`flex-1 py-3 text-sm font-medium transition-all border-b-2 cursor-pointer ${selectedTab === sol.id ? 'border-[var(--accent)] text-[var(--accent)] font-semibold' : 'border-transparent text-muted hover:text-ink'}`}
            >
              {sol.tabLabel}
            </button>
          ))}
        </div>

        {/* Tab content panel */}
        {siteCopy.solutions.map((sol) => {
          if (sol.id !== selectedTab) return null;
          return (
            <div key={sol.id} className="grid gap-8 lg:grid-cols-2 items-center animate-fade-up">
              <figure className="rounded-2xl overflow-hidden border border-hairline shadow-md aspect-video bg-bg flex items-center justify-center">
                <img 
                  src={sol.image} 
                  alt={sol.tabLabel} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </figure>
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold text-ink leading-snug">{sol.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{sol.description}</p>
                <button 
                  onClick={() => scrollTo('contact')} 
                  className="inline-flex items-center justify-center rounded-full bg-ink text-surface font-semibold text-xs px-6 py-3 hover:bg-[var(--accent)] hover:text-white transition-all shadow-sm"
                >
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── STATS COUNTERS ─────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 border border-hairline/80 bg-surface/50 text-ink rounded-[2rem] px-8 md:px-14 shadow-xl my-6 backdrop-blur-xs">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {siteCopy.stats.map((s, i) => (
            <div key={i} className="text-center md:text-left space-y-2">
              <p className="text-3xl md:text-4xl font-display font-extrabold brand-grad-text">{s.value}</p>
              <p className="text-xs text-muted leading-relaxed uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── #contact: CONTACT FORM ─────────────────────────────────────── */}
      <section id="contact" className="scroll-mt-20 py-12 md:py-16 border-t border-hairline/40 relative overflow-hidden">
        {/* Glassmorphic Ornaments */}
        <div className="pointer-events-none absolute -right-20 bottom-12 h-60 w-60 rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-[var(--accent-gold)]/5 backdrop-blur-md shadow-2xl animate-float-reverse opacity-50 dark:border-white/5 dark:bg-white/[0.02]" />
        
        <SectionHeading eyebrow="Contact" title={siteCopy.contact.headline} body={siteCopy.contact.subheadline} />

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          
          {/* Form Box */}
          <div className="rounded-3xl border border-hairline bg-surface p-6 md:p-10 shadow-sm">
            {contactSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="h-16 w-16 rounded-full border border-[var(--accent)] flex items-center justify-center mx-auto text-2xl brand-grad-text">✓</div>
                <h3 className="font-display text-2xl font-bold">Message Sent Successfully</h3>
                <p className="text-muted text-sm max-w-sm mx-auto">Thank you for your message. We have received it and will reply to your email within 24 hours.</p>
                <button 
                  onClick={() => setContactSubmitted(false)}
                  className="text-xs font-semibold text-[var(--accent)] underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-muted mb-1.5">Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={contactForm.name} 
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      placeholder="Your name" 
                      className="w-full rounded-full border border-hairline bg-transparent px-4 py-2.5 text-xs text-ink outline-none focus:border-[var(--accent)] transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-muted mb-1.5">Email *</label>
                    <input 
                      type="email" 
                      required 
                      value={contactForm.email} 
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      placeholder="your@email.com" 
                      className="w-full rounded-full border border-hairline bg-transparent px-4 py-2.5 text-xs text-ink outline-none focus:border-[var(--accent)] transition-colors" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-muted mb-1.5">Company</label>
                  <input 
                    type="text" 
                    value={contactForm.company} 
                    onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                    placeholder="Where do you work?" 
                    className="w-full rounded-full border border-hairline bg-transparent px-4 py-2.5 text-xs text-ink outline-none focus:border-[var(--accent)] transition-colors" 
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-muted mb-1.5">Area of Interest</label>
                    <select 
                      value={contactForm.service} 
                      onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                      className="w-full rounded-full border border-hairline bg-surface px-4 py-2.5 text-xs text-ink outline-none focus:border-[var(--accent)] cursor-pointer"
                    >
                      <option value="">Select a capability</option>
                      <option value="AI & ML">AI & ML Engineering</option>
                      <option value="Dynamics 365">Dynamics 365 ERP</option>
                      <option value="Data Analytics">Power BI & Reporting</option>
                      <option value="Software Dev">Software & App Development</option>
                      <option value="Cloud Infra">Azure Cloud Migration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-muted mb-1.5">Budget Range</label>
                    <select 
                      value={contactForm.budget} 
                      onChange={(e) => setContactForm({...contactForm, budget: e.target.value})}
                      className="w-full rounded-full border border-hairline bg-surface px-4 py-2.5 text-xs text-ink outline-none focus:border-[var(--accent)] cursor-pointer"
                    >
                      <option value="">Select a range</option>
                      <option value="Under 2L">Under ₹2L</option>
                      <option value="2L-5L">₹2L – ₹5L</option>
                      <option value="5L-15L">₹5L – ₹15L</option>
                      <option value="15L+">₹15L+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-muted mb-1.5">Message *</label>
                  <textarea 
                    required 
                    rows={4}
                    value={contactForm.message} 
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Tell us what you are building or trying to solve." 
                    className="w-full rounded-2xl border border-hairline bg-transparent px-4 py-2.5 text-xs text-ink outline-none focus:border-[var(--accent)] resize-none transition-colors" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-2.5 text-xs font-semibold shadow-sm hover:scale-[1.02] transition-all cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-hairline bg-surface p-5 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">Email Us</span>
              <a href={`mailto:${siteCopy.contact.details.email}`} className="block text-sm font-semibold hover:underline text-ink">{siteCopy.contact.details.email}</a>
            </div>
            <div className="rounded-2xl border border-hairline bg-surface p-5 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">Location</span>
              <p className="text-sm font-semibold text-ink">{siteCopy.contact.details.location}</p>
            </div>
            <div className="rounded-2xl border border-hairline bg-surface p-5 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)]">Guaranteed response</span>
              <p className="text-xs text-muted">We process emails daily. You will hear from a representative in under 24 hours.</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
