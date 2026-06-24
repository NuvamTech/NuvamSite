const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Products', id: 'products' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto border-t border-hairline/80">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto_auto] md:gap-10">
          <div>
            <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="inline-flex items-center gap-3">
              <img src="/logo.png" alt="NUVAM" className="h-10 w-10 rounded-full object-cover ring-1 ring-hairline/70" />
              <span className="font-display text-lg font-medium">NUVAM</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              AI-native products, automation systems, and web experiences built to last.
            </p>
            <p className="mt-3 text-xs text-muted/70">India-first · AI-native · Product-first</p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] brand-grad-text">Navigate</p>
            <ul className="space-y-2">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => scrollTo(e, id)}
                    className="text-sm text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.25em] brand-grad-text">Reach us</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="mailto:hello@nuvam.in" className="transition-colors duration-200 hover:text-ink">
                  hello@nuvam.in
                </a>
              </li>
              <li>India</li>
              <li className="text-xs text-muted/70">Replies within 24 hours</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-hairline/60 pt-6 text-center text-xs text-muted/70 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:text-left">
          <p>© {year} NUVAM. All rights reserved.</p>
          <p>Where Innovation Meets Momentum</p>
        </div>
      </div>
    </footer>
  );
}
