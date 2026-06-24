import { useEffect, useState } from 'react';

const links = [
  { label: 'Home',     id: 'home'     },
  { label: 'Services', id: 'services' },
  { label: 'Products', id: 'products' },
  { label: 'About',    id: 'about'    },
  { label: 'Contact',  id: 'contact'  },
] as const;

type SectionId = typeof links[number]['id'];

export function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState<SectionId>('home');

  /* ── Theme init ──────────────────────────────────────────────────── */
  useEffect(() => {
    const stored      = window.localStorage.getItem('nuvam-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next        = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  /* ── Active-section tracking via IntersectionObserver ───────────── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        // fire when section crosses the top-centre of the viewport
        { rootMargin: '-45% 0px -55% 0px', threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Theme toggle ────────────────────────────────────────────────── */
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('nuvam-theme', next);
  };

  /* ── Smooth scroll + close mobile menu ──────────────────────────── */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-hairline/80 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">

        {/* Logo → scrolls to #home */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3"
          aria-label="NUVAM — back to top"
        >
          <img
            src="/logo.png"
            alt="NUVAM logo"
            className="h-12 w-12 rounded-full object-cover ring-1 ring-hairline/70 transition-transform duration-300 hover:scale-[1.04] sm:h-14 sm:w-14"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-1 md:flex" aria-label="Main navigation">
          {links.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                active === id
                  ? 'brand-grad-text font-medium'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle colour theme"
            className="rounded-full border border-hairline bg-surface px-3 py-2 text-xs text-ink transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:px-4 sm:text-sm"
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-surface text-ink transition-all duration-200 hover:border-[var(--accent)] md:hidden"
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2 2l12 12M14 2L2 14" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2 4h12M2 8h12M2 12h12" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav
          className="border-t border-hairline/60 bg-bg/98 px-4 py-4 md:hidden sm:px-6"
          aria-label="Mobile navigation"
        >
          <ul className="grid gap-2">
            {links.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={`block rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                    active === id
                      ? 'bg-surface brand-grad-text font-medium'
                      : 'text-muted hover:bg-surface hover:text-ink'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
