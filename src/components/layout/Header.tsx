import { useEffect, useRef, useState } from 'react';

const links = [
  { label: 'Home',     id: 'home'     },
  { label: 'Services', id: 'services' },
  { label: 'Products', id: 'products' },
  { label: 'About',    id: 'about'    },
  { label: 'Contact',  id: 'contact'  },
] as const;

type SectionId = typeof links[number]['id'];

export function Header() {
  const [theme,    setTheme]    = useState<'light' | 'dark'>('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState<SectionId>('home');
  const drawerRef  = useRef<HTMLDivElement>(null);

  /* ── Theme init ─────────────────────────────────────────────────── */
  useEffect(() => {
    const stored      = window.localStorage.getItem('nuvam-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next        = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  /* ── Lock body scroll when drawer is open ────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── Close drawer on Escape ─────────────────────────────────────── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* ── Active-section tracking via IntersectionObserver ───────────── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-45% 0px -55% 0px', threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Theme toggle ───────────────────────────────────────────────── */
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('nuvam-theme', next);
  };

  /* ── Smooth scroll + close drawer ──────────────────────────────── */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-hairline/80 bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-0 sm:px-6">

          {/* Logo — no border, zero vertical padding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center shrink-0"
            aria-label="NUVAM — back to top"
          >
            <img
              src="/logo.png"
              alt="NUVAM logo"
              className="h-20 w-20 object-contain transition-transform duration-300 hover:scale-[1.05] drop-shadow-sm sm:h-24 sm:w-24"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden gap-1 md:flex" aria-label="Main navigation">
            {links.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active === id
                    ? 'text-[var(--accent)]'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle colour theme"
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface text-ink transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:h-10 sm:w-10"
            >
              {theme === 'light' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface text-ink transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden sm:h-10 sm:w-10"
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

      {/* ── Left-side drawer backdrop ───────────────────────────────── */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-400"
        style={{
          pointerEvents: menuOpen ? 'auto' : 'none',
          background:    menuOpen ? 'rgba(10,9,20,0.55)' : 'transparent',
          backdropFilter: menuOpen ? 'blur(4px)' : 'none',
        }}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Left-side drawer panel ──────────────────────────────────── */}
      <div
        ref={drawerRef}
        className="fixed top-0 left-0 bottom-0 z-50 w-72 md:hidden flex flex-col"
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
        {/* Drawer gradient accent strip */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: 'var(--brand-grad)' }}
        />

        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-4 border-b border-hairline/50">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center"
          >
            <img src="/logo.png" alt="NUVAM" className="h-16 w-16 object-contain" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M1 1l10 10M11 1L1 11" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {links.map(({ label, id }, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    active === id
                      ? 'bg-surface brand-grad-text'
                      : 'text-muted hover:bg-surface hover:text-ink'
                  }`}
                  style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-hairline text-[10px] font-medium brand-grad-text"
                    style={{ background: active === id ? 'color-mix(in srgb, var(--accent) 8%, transparent)' : undefined }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="px-5 py-4 border-t border-hairline/50">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted/50">© 2025 NUVAM</p>
        </div>
      </div>
    </>
  );
}
