import { siteCopy } from '../../content/siteCopy';

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="border-t border-hairline/80 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Logo & Pitch */}
          <div className="space-y-4">
            <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="inline-flex items-center gap-2">
              <img src="/logo.png" alt="NUVAM" className="h-10 w-10 object-contain" />
              <span className="font-display text-lg font-bold brand-grad-text">NUVAM</span>
            </a>
            <p className="text-sm leading-6 text-muted">
              Premium digital transformation, AI analytics, and Microsoft cloud software engineering.
            </p>
            <div className="flex gap-4 text-muted text-sm pt-2">
              <span className="hover:text-[var(--accent)] cursor-pointer"><i className="fab fa-linkedin-in"></i></span>
              <span className="hover:text-[var(--accent)] cursor-pointer"><i className="fab fa-twitter"></i></span>
              <span className="hover:text-[var(--accent)] cursor-pointer"><i className="fab fa-github"></i></span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">Services</p>
            <ul className="space-y-2.5 text-sm">
              {siteCopy.serviceCategories.map((cat) => (
                <li key={cat.category}>
                  <a
                    href="#services"
                    onClick={(e) => scrollTo(e, 'services')}
                    className="text-muted hover:text-ink transition-colors"
                  >
                    {cat.category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">Products</p>
            <ul className="space-y-2.5 text-sm">
              {siteCopy.products.isv.slice(0, 3).map((prod) => (
                <li key={prod.id}>
                  <a
                    href="#products"
                    onClick={(e) => scrollTo(e, 'products')}
                    className="text-muted hover:text-ink transition-colors"
                  >
                    {prod.title.split(' ')[0]} {prod.title.includes('(') ? prod.title.substring(prod.title.indexOf('(')) : ''}
                  </a>
                </li>
              ))}
              {siteCopy.products.industry.slice(0, 2).map((prod) => (
                <li key={prod.id}>
                  <a
                    href="#products"
                    onClick={(e) => scrollTo(e, 'products')}
                    className="text-muted hover:text-ink transition-colors"
                  >
                    {prod.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">Contact</p>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a href={`mailto:${siteCopy.contact.details.email}`} className="hover:text-ink transition-colors font-medium">
                  {siteCopy.contact.details.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-muted/60">Office & Support</span>
                <span className="text-ink font-medium">{siteCopy.contact.details.location}</span>
              </li>
              <li className="text-xs text-muted/80 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Guaranteed response in 24 hours
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-hairline pt-6 text-center text-xs text-muted/70 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {year} NUVAM Tech. All rights reserved.</p>
          <div className="flex justify-center gap-4 text-muted/80">
            <span className="hover:text-ink cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-ink cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-ink cursor-pointer">Microsoft Partner Agreement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
