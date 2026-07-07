import { useEffect, useRef, useState } from 'react';
import { siteCopy } from '../../content/siteCopy';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>('home');
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  /* Scroll to top on mount */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* Theme init */
  useEffect(() => {
    const stored = window.localStorage.getItem('nuvam-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* Close drawer on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* Active-section tracking via IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sections = ['home', 'services', 'products', 'about', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-10% 0px -70% 0px', threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Theme toggle */
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('nuvam-theme', next);
  };

  /* Smooth scroll + close drawer */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = id === 'home' ? 86 : 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      navigate(`/#${id}`);
    }
    setMenuOpen(false);
    setHoveredMenu(null);
  };

  /* Navigate to service page */
  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
    setMenuOpen(false);
    setHoveredMenu(null);
  };

  const handleProductClick = (productId?: string) => {
    if (productId) {
      navigate(`/products/${productId}`);
    } else {
      navigate('/products');
    }
    setMenuOpen(false);
    setHoveredMenu(null);
  };

  const handleResourceClick = (hashId?: string) => {
    if (hashId) {
      navigate(`/resources#${hashId}`);
    } else {
      navigate('/resources');
    }
    setMenuOpen(false);
    setHoveredMenu(null);
  };

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-hairline/60 bg-surface/75 backdrop-blur-md">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent-gold)]" />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center shrink-0"
            aria-label="NUVAM — back to top"
          >
            <img
              src="/logo.png"
              alt="NUVAM logo"
              className="h-[48px] w-auto object-contain transition-transform duration-300 hover:scale-[1.05]"
              onError={(e) => {
                // Fallback text if logo doesn't load
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </a>

          {/* Desktop nav and actions aligned to the right */}
          <div className="flex items-center gap-6">
            {/* Desktop nav */}
            <nav className="hidden gap-2 lg:flex items-center" aria-label="Main navigation">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                  active === 'home' 
                    ? 'bg-surface/50 border border-hairline/60 shadow-xs text-[var(--accent)] font-semibold' 
                    : 'border border-transparent text-muted hover:text-ink hover:bg-surface/30'
                }`}
              >
                Home
              </a>
              
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                  active === 'about' 
                    ? 'bg-surface/50 border border-hairline/60 shadow-xs text-[var(--accent)] font-semibold' 
                    : 'border border-transparent text-muted hover:text-ink hover:bg-surface/30'
                }`}
              >
                About
              </a>

              {/* Services with Mega Menu Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setHoveredMenu('services')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    active === 'services' 
                      ? 'bg-surface/50 border border-hairline/60 shadow-xs text-[var(--accent)] font-semibold' 
                      : 'border border-transparent text-muted hover:text-ink hover:bg-surface/30'
                  }`}
                >
                  Services
                  <svg className={`h-3 w-3 transition-transform duration-300 ${hoveredMenu === 'services' ? 'rotate-180 text-[var(--accent)]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </a>

                {/* Mega Dropdown */}
                {hoveredMenu === 'services' && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[720px]">
                    <div className="bg-surface border border-hairline/80 rounded-2xl p-6 shadow-xl grid grid-cols-3 gap-6 animate-fade-up">
                      {siteCopy.serviceCategories.slice(0, 3).map((cat) => (
                        <div key={cat.category} className="space-y-3">
                          <p className="text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">{cat.category}</p>
                          <ul className="space-y-2">
                            {cat.items.slice(0, 4).map((item) => (
                              <li key={item.id}>
                                <a
                                  href="#"
                                  onClick={(e) => { e.preventDefault(); handleServiceClick(item.id); }}
                                  className="block text-xs font-medium text-ink hover:text-[var(--accent)] transition-colors"
                                >
                                  {item.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-3 border-t border-hairline pt-4 flex justify-between items-center text-xs">
                        <span className="text-muted">Need custom AI or Enterprise Integration?</span>
                        <a href="/services" className="font-semibold text-[var(--accent)] hover:underline">View All Capabilities →</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Products with Mega Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setHoveredMenu('products')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a
                  href="/products"
                  onClick={(e) => { e.preventDefault(); handleProductClick(); }}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    active === 'products' 
                      ? 'bg-surface/50 border border-hairline/60 shadow-xs text-[var(--accent)] font-semibold' 
                      : 'border border-transparent text-muted hover:text-ink hover:bg-surface/30'
                  }`}
                >
                  Products
                  <svg className={`h-3 w-3 transition-transform duration-300 ${hoveredMenu === 'products' ? 'rotate-180 text-[var(--accent)]' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </a>

                {hoveredMenu === 'products' && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[480px]">
                    <div className="bg-surface border border-hairline/80 rounded-2xl p-5 shadow-xl grid grid-cols-2 gap-4 animate-fade-up">
                      <div className="space-y-3">
                        <p className="text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">Products ISV</p>
                        <ul className="space-y-2">
                          {siteCopy.products.isv.map((item) => (
                            <li key={item.id}>
                              <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); handleProductClick(item.id); }}
                                className="block text-xs font-medium text-ink hover:text-[var(--accent)] transition-colors"
                              >
                                {item.title.split(' ')[0]} {item.title.includes('(') ? item.title.substring(item.title.indexOf('(')) : ''}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">By Function/Industry</p>
                        <ul className="space-y-2">
                          {siteCopy.products.industry.map((item) => (
                            <li key={item.id}>
                              <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); handleProductClick(item.id); }}
                                className="block text-xs font-medium text-ink hover:text-[var(--accent)] transition-colors"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Submenu */}
              <div 
                className="relative"
                onMouseEnter={() => setHoveredMenu('resources')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a
                  href="/resources"
                  onClick={(e) => { e.preventDefault(); handleResourceClick(); }}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                    active === 'resources' 
                      ? 'bg-surface/50 border border-hairline/60 shadow-xs text-[var(--accent)] font-semibold' 
                      : 'border border-transparent text-muted hover:text-ink hover:bg-surface/30'
                  }`}
                >
                  Resources
                  <svg className={`h-3 w-3 transition-transform duration-300 ${hoveredMenu === 'resources' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </a>
                {hoveredMenu === 'resources' && (
                  <div className="absolute right-0 top-full pt-2 w-44">
                    <div className="bg-surface border border-hairline/80 rounded-xl p-2.5 shadow-xl space-y-1.5 animate-fade-up">
                      <a href="#" onClick={(e) => { e.preventDefault(); handleResourceClick('industries'); }} className="block px-3 py-1.5 text-xs rounded-lg hover:bg-bg transition-colors font-medium">Industries</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleResourceClick('case-studies'); }} className="block px-3 py-1.5 text-xs rounded-lg hover:bg-bg transition-colors font-medium">Case Studies</a>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleResourceClick('blogs'); }} className="block px-3 py-1.5 text-xs rounded-lg hover:bg-bg transition-colors font-medium">Blogs & News</a>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle colour theme"
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface text-ink transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {theme === 'light' ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>

              {/* Contact Us button */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="hidden sm:inline-flex items-center justify-center rounded-full brand-grad text-white font-semibold text-xs px-5 py-2.5 hover:opacity-90 transition-all shadow-md hover:scale-[1.03]"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface text-ink transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden"
            >
              <span className="relative flex h-4 w-5 flex-col justify-between">
                <span
                  className="block h-[1.8px] w-full rounded-full bg-current transition-all duration-300 origin-center"
                  style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
                />
                <span
                  className="block h-[1.8px] w-full rounded-full bg-current transition-all duration-300"
                  style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)' }}
                />
                <span
                  className="block h-[1.8px] w-3/4 rounded-full bg-current transition-all duration-300 origin-center"
                  style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg) scaleX(1.33)' : 'none' }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer backdrop */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-400"
        style={{
          pointerEvents: menuOpen ? 'auto' : 'none',
          background: menuOpen ? 'rgba(10,9,20,0.55)' : 'transparent',
          backdropFilter: menuOpen ? 'blur(4px)' : 'none',
        }}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer panel */}
      <div
        ref={drawerRef}
        className="fixed top-0 left-0 bottom-0 z-50 w-72 lg:hidden flex flex-col"
        style={{
          transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          background: 'var(--bg)',
          borderRight: '1px solid color-mix(in srgb, var(--hairline) 60%, transparent)',
          boxShadow: menuOpen ? '4px 0 40px rgba(0,0,0,0.18)' : 'none',
        }}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]" />

        <div className="flex items-center justify-between px-5 py-4 border-b border-hairline/50">
          <span className="font-display text-lg font-bold brand-grad-text">NUVAM</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-hairline text-muted"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M1 1l10 10M11 1L1 11" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium ${
              active === 'home' ? 'bg-surface brand-grad-text' : 'text-muted hover:bg-surface'
            }`}
          >
            Home
          </a>
          
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium ${
              active === 'about' ? 'bg-surface brand-grad-text' : 'text-muted hover:bg-surface'
            }`}
          >
            About
          </a>

          {/* Collapsible Services */}
          <div>
            <button
              onClick={() => setExpandedMobileItem(expandedMobileItem === 'services' ? null : 'services')}
              className="w-full flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-muted hover:bg-surface"
            >
              <span>Services</span>
              <svg className={`h-4 w-4 transition-transform ${expandedMobileItem === 'services' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedMobileItem === 'services' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-surface/50 rounded-xl mt-1">
                {siteCopy.serviceCategories.map((cat) => (
                  <div key={cat.category} className="py-1">
                    <p className="text-[10px] font-semibold text-[var(--accent)] uppercase px-2">{cat.category}</p>
                    {cat.items.slice(0, 3).map((item) => (
                      <a
                        key={item.id}
                        href="#"
                        onClick={(e) => { e.preventDefault(); handleServiceClick(item.id); }}
                        className="block px-2 py-1 text-xs text-muted hover:text-ink"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Collapsible Products */}
          <div>
            <button
              onClick={() => setExpandedMobileItem(expandedMobileItem === 'products' ? null : 'products')}
              className="w-full flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-muted hover:bg-surface"
            >
              <span>Products</span>
              <svg className={`h-4 w-4 transition-transform ${expandedMobileItem === 'products' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedMobileItem === 'products' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-surface/50 rounded-xl mt-1">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleProductClick(); }}
                  className="block px-2 py-1 text-xs font-semibold text-[var(--accent)] hover:text-ink"
                >
                  View All Products →
                </a>
                <p className="text-[10px] font-semibold text-[var(--accent)] uppercase px-2 mt-2">Products ISV</p>
                {siteCopy.products.isv.map((item) => (
                  <a
                    key={item.id}
                    href="#"
                    onClick={(e) => { e.preventDefault(); handleProductClick(item.id); }}
                    className="block px-2 py-1 text-xs text-muted hover:text-ink"
                  >
                    {item.title}
                  </a>
                ))}
                <p className="text-[10px] font-semibold text-[var(--accent)] uppercase px-2 mt-2">Functions</p>
                {siteCopy.products.industry.map((item) => (
                  <a
                    key={item.id}
                    href="#"
                    onClick={(e) => { e.preventDefault(); handleProductClick(item.id); }}
                    className="block px-2 py-1 text-xs text-muted hover:text-ink"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Collapsible Resources */}
          <div>
            <button
              onClick={() => setExpandedMobileItem(expandedMobileItem === 'resources' ? null : 'resources')}
              className="w-full flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-muted hover:bg-surface"
            >
              <span>Resources</span>
              <svg className={`h-4 w-4 transition-transform ${expandedMobileItem === 'resources' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedMobileItem === 'resources' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-surface/50 rounded-xl mt-1">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleResourceClick(); }}
                  className="block px-2 py-1 text-xs font-semibold text-[var(--accent)] hover:text-ink"
                >
                  View Resources Hub →
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleResourceClick('industries'); }}
                  className="block px-2 py-1 text-xs text-muted hover:text-ink"
                >
                  Industries
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleResourceClick('case-studies'); }}
                  className="block px-2 py-1 text-xs text-muted hover:text-ink"
                >
                  Case Studies
                </a>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleResourceClick('blogs'); }}
                  className="block px-2 py-1 text-xs text-muted hover:text-ink"
                >
                  Blogs & News
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
